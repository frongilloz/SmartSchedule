
import { getWalkingDurationBetweenMins } from './data/building_data.js';

export function get_mapping_distance(final_schedule_info, testSc) {

    let walking_Durs = [];
    let courseIterators = [];
    let courseIterator;
    let finalScheduleInfoIdx;

    for (finalScheduleInfoIdx = 0; finalScheduleInfoIdx < final_schedule_info.length; finalScheduleInfoIdx++) {
        courseIterator = {
            courseCode: final_schedule_info[finalScheduleInfoIdx][0].course_code,
            offsetIntoFinalScheduleInfo: finalScheduleInfoIdx,
            currCount:  0
        };

        courseIterators.push(courseIterator);
    }

    const getIterator = (courseCode) => {
        return courseIterators.find(courseIterator => (courseIterator.courseCode === courseCode));
    }

    console.log(courseIterators);

    let fromCode;
    let toCode;
    let dayIdx;
    let hourIdx;
    let earlierScheduleEntry;
    let laterScheduleEntry;
    let earlierScheduleIterator;
    let laterScheduleIterator;
    let earlierCourseInfo;
    let laterCourseInfo;
    let walkingDurationMins;
    let conflictingDayHourPairs = [];
    let dayHourPair;
    let schedule;
    let scheduleIdx;

    for (scheduleIdx = 0; scheduleIdx < testSc.length; scheduleIdx++) {
        schedule = testSc[scheduleIdx];
        console.log(schedule);
        for (dayIdx = 0; dayIdx < schedule[0].length; dayIdx++) {
            for (hourIdx = 0; hourIdx < (schedule.length - 1); hourIdx++) {
                earlierScheduleEntry = schedule[hourIdx][dayIdx];
                laterScheduleEntry = schedule[hourIdx + 1][dayIdx];

                if (earlierScheduleEntry === " ") {
                    continue;
                }

                if (laterScheduleEntry === " ") {
                    continue;
                }

                if (earlierScheduleEntry === laterScheduleEntry) {
                    continue;
                }

                /* get the iterators associated with these courses */
                earlierScheduleIterator = getIterator(earlierScheduleEntry);
                laterScheduleIterator = getIterator(laterScheduleEntry);

                /* based on the count value, get the course info associated with them */
                earlierCourseInfo = final_schedule_info[earlierScheduleIterator.offsetIntoFinalScheduleInfo][scheduleIdx];
                laterCourseInfo = final_schedule_info[laterScheduleIterator.offsetIntoFinalScheduleInfo][scheduleIdx];

                // log 
                //console.log("earlierCourseInfo", earlierCourseInfo)
                //console.log("laterCourseInfo", laterCourseInfo)

                fromCode = "NEB";
                toCode = "GER";

                /* @TODO: extract building code of relevant sections.
                    if they're both in-person, call getWalkingDistance() */

                let currover15=false;
                let currIsOnline= false;

                if (earlierCourseInfo.section_web === "AD") {
                    continue;
                }

                if (laterCourseInfo.section_web === "AD") {
                    continue;
                }

                // NEED to change; RN getting the building location from the FIRST building, not the actual one

                const DAY_MAP = [
                    "M",
                    "T",
                    "W",
                    "R",
                    "F"
                ];

                let meetDay;
                let meetTime;

                let earlierCourseSection;
                let laterCourseSection;

                let foundEarlier = false;
                let foundLater = false;

                let idx;

                const earlierMeetTimes = earlierCourseInfo.section_mT;
                const laterMeetTimes = laterCourseInfo.section_mT;

                let meetDayIdx;
                let meetDayChar;

                for (idx = 0; idx < earlierMeetTimes.length; idx++) {
                    meetTime = earlierMeetTimes[idx];

                    meetDayChar = meetTime.meetDays.find(dayChar => dayChar === DAY_MAP[dayIdx]);

                    if (meetDayChar) {
                        meetDay = meetTime;
                        if (parseInt(meetDay.meetPeriodBegin) === hourIdx) {
                            foundEarlier = true;
                            earlierCourseSection = meetTime;
                            break;
                        }
                    }
                }

                if (!foundEarlier) {
                    return [];
                }

                let newHourIdx = hourIdx + (parseInt(earlierCourseSection.meetPeriodEnd) - parseInt(earlierCourseSection.meetPeriodBegin)) + 1;

                for (idx = 0; idx < laterMeetTimes.length; idx++) {
                    meetTime = laterMeetTimes[idx];

                    meetDayChar = meetTime.meetDays.find(dayChar => dayChar === DAY_MAP[dayIdx]);

                    if (meetDayChar) {
                        meetDay = meetTime;
                        if (parseInt(meetDay.meetPeriodBegin) === newHourIdx) {
                            foundLater = true;
                            laterCourseSection = meetTime;
                            break;
                        }
                    }
                }

                if (!foundLater) {
                    return [];
                }
                    
                fromCode = earlierCourseSection.meetBuilding;
                toCode = laterCourseSection.meetBuilding;

                walkingDurationMins = getWalkingDurationBetweenMins(fromCode, toCode);

                //console.log(`${walkingDurationMins} minutes`);

                // If the duration is greater than 15 minutes
                if (walkingDurationMins > 15) {
                    console.log(`Can't make it in time from ${fromCode} to ${toCode}!!!`);
                    currover15=true;
                }

                // Later
                let dayHourPair = {
                    scheduleIdx:  scheduleIdx,
                    dayIdx:       dayIdx,
                    hourIdx:      hourIdx
                };
                conflictingDayHourPairs.push(dayHourPair);

                //////
                let currDay;
                if(dayIdx ===  0){
                    currDay = 'M';
                }
                else if(dayIdx ===  1){
                    currDay = 'T';
                }
                else if(dayIdx === 2){
                    currDay = 'W';
                }
                else if(dayIdx === 3){
                    currDay = 'Th';
                }
                else if(dayIdx === 4){
                    currDay = 'F';
                }
                else if(dayIdx === 5){
                    currDay = 'Sat';
                }


                // Object to push
                let wlk_object={
                    scheduleIdx: scheduleIdx,
                    over15: currover15,
                    loc1: fromCode,
                    loc2: toCode,
                    duration: walkingDurationMins.toFixed(3),
                    dayIdx: currDay,
                    hourIdx: hourIdx+1,
                    class1: earlierCourseInfo.course_code,
                    class2:laterCourseInfo.course_code,
                    isOnline: currIsOnline 
                }

                // front end object
                walking_Durs.push(wlk_object)
            }
        }
        console.log("got here");
    }
    
    console.log("conflictingDayHourPairs", conflictingDayHourPairs);

    return walking_Durs
}