const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "E1", "E2", "E3"];
const daysShort = ["M", "T", "W", "R", "F"]

export function generateSchedule(responseData) {
  let finalSchedule_Info = []
  let curr_sched_info;
  let finalsectionInfo = []

  let finalSchedules = []

  let checkArray = [1]
  //console.log('Before: ', scheduleArray)
  //console.log(checkArray.length)

  let day_index = 0;
  let period_index1 = 0;
  let period_index2 = 0;
  let totalScheduleCount = 1;
  let conflicts = [];

  // Object declarations
  let temp_section_times;
  let temp_sect_object;

  let newSchedule = []
  //let dummySchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))

  if (Array.isArray(responseData) && checkArray.length && responseData[0]) {  //check if responseData array exists and if something exists in it 
    console.log("Wow, something's here")
    console.log('ResponseData (from schedule.js) is: ', responseData)

    let responseDataLength = [];
    responseDataLength = responseData
    console.log('length of responseData is: ', responseDataLength.length)

    //loop to get the total combination of schedules
    for (let a = 0; a < responseDataLength.length; a++) {
      let sectionsAmount = responseData[a].sections
      //console.log('sectionsAmount is :', sectionsAmount.length)
      totalScheduleCount = totalScheduleCount * sectionsAmount.length
      //console.log('current totalScheduleCount is :', totalScheduleCount)
    }

    console.log('total combinations of schedules is: ', totalScheduleCount)

    //fill the final schedule array with empty arrays 
    for (let c = 0; c < totalScheduleCount; c++) {
      let emptySchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
      finalSchedules.push(emptySchedule)
    }

    //console.log('finalSchedules initial status: ', finalSchedules)

    let count = 0
    for (let k = 0; k < responseDataLength.length; k++) {

      // NEW
      //reset sect_objects array for each new course
      let sect_objects = []

      // "k" per course in the responseData
      // For each course, save the generic information
      let curr_course_code = responseData[k].code
      let curr_course_desc = responseData[k].description
      let curr_course_name = responseData[k].name
      let curr_course_prereq = responseData[k].prerequisites
      let curr_section_c_num, curr_section_credits, curr_section_inst, curr_section_mT, curr_section_web

      // NEW 
      // Create an array of meeting times, then use the reduce function to find the most frequent class times 
      let allClassTimes = []

      // Schedule Generation things
      let sectionsArray = responseData[k].sections
      //console.log('sectionsArray is: ', sectionsArray)
      for (let b = 0; b < totalScheduleCount / sectionsArray.length; b++) {

        for (let i = 0; i < sectionsArray.length; i++) {

          // NEW
          //For each section [i], save the section information
          curr_section_c_num = sectionsArray[i].classNumber
          curr_section_credits = sectionsArray[i].credits
          curr_section_inst = sectionsArray[i].instructors // could be an array (multiple)
          curr_section_mT = sectionsArray[i].meetTimes // an array
          curr_section_web = sectionsArray[i].sectWeb // an array


           // Schedule Generation things
          // For each section [i], iterate through the class meet times
          let meetTArray = sectionsArray[i].meetTimes

          //console.log('meetTArray is: ', meetTArray)
          for (let j = 0; j < meetTArray.length; j++) {
            day_index = daysShort.indexOf(meetTArray[j].meetDays[0])
            //console.log('day_index is: ', day_index)

            period_index1 = periods.indexOf(meetTArray[j].meetPeriodBegin)
            //console.log('period_index1 is: ', period_index1)

            period_index2 = periods.indexOf(meetTArray[j].meetPeriodEnd)
            //console.log('period_index2 is: ', period_index2)

            let sectionInfo_Indexes = []
            sectionInfo_Indexes.push(day_index)
            sectionInfo_Indexes.push(period_index1)
            sectionInfo_Indexes.push(period_index2)
            //let sectionInfo = [meetTArray[j].meetDays[0], meetTArray[j].meetPeriodBegin, meetTArray[j].meetPeriodEnd] 
            allClassTimes.push(sectionInfo_Indexes)

            // Store meeting info into 2D array 
            newSchedule = finalSchedules[count]
            //dummySchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))

            //console.log('newSchedule is: ', newSchedule)

            if (period_index1 === period_index2) {
              if (newSchedule[period_index1][day_index] != " "){
                console.log("uh oh, there are two classes that could be here")
                //add the index of the conflicts
                conflicts.push(count);
              }
              newSchedule[period_index1][day_index] = responseData[k].code
              //dummySchedule[period_index1][day_index] = responseData[k].code
            }
            else {
              if (newSchedule[period_index1][day_index] != " " || newSchedule[period_index2][day_index] != " "){
                console.log("uh oh, there are two classes that could be here")
                //add the index of the conflicts
                conflicts.push(count);

                //Print our the 2 conflicting classes
                //console.log("CONFLICT: ", )
              }
              newSchedule[period_index1][day_index] = responseData[k].code
              newSchedule[period_index2][day_index] = responseData[k].code
              //dummySchedule[period_index1][day_index] = responseData[k].code
              //dummySchedule[period_index2][day_index] = responseData[k].code
            }

          }
          //console.log('what should be added in this itteration: ', dummySchedule)
          //console.log('what does new schedule look like: ', newSchedule)


          // NEW
          // Display for front end; construct an object
          // Object will map to each schedule to display responseData info
          temp_sect_object = {
            // for each unique 'k' course, save a sections array of the section data (i.e. 12) that can be mapped to the front

            course_code : curr_course_code,
            course_desc : curr_course_desc,
            course_name : curr_course_name,
            course_prereq :curr_course_prereq,
            
            section_c_num :curr_section_c_num,
            section_credits:curr_section_credits,
            section_inst : curr_section_inst,
            section_mT : curr_section_mT,
            section_web: curr_section_web

          }

          // save each object to section array
          sect_objects.push(temp_sect_object)

          // Schedule Generation things
          finalSchedules[count] = newSchedule
          count++

        } // end for loop "i" sections


        if (count === totalScheduleCount) count = 0
        //console.log('finalSchedules is : ', finalSchedules)
      }
      
      // Save the schedule info for each course
      // Will be in order of the schedule generated; exact section corresponds to the ordering of schedule produced
      finalSchedule_Info.push(sect_objects);

      //NEW 
      // Generate lab and lecture sections by parsing through master meet_time array

      let time_counts = allClassTimes.reduce(function (a, c) {
        if (c in a) {
          a[c]++
        }
        else {
          a[c] = 1
        }
        return a
      }, {})
      //console.log("time_counts is: ", time_counts)
      
      let maxCount = Math.max(...Object.values(time_counts));
      let leastCount = Math.min(...Object.values(time_counts));
      let lectureTimes_Index = Object.keys(time_counts).filter(k => time_counts[k] === maxCount);
      let labTimes_Index = Object.keys(time_counts).filter(k => time_counts[k] === leastCount);
      let converted_lectureTimes_Index = [];
      let converted_labTimes_Index = [];

      let lectureArray = Array(14).fill(0).map(row => new Array(6).fill(" "))
      let labArray = Array(14).fill(0).map(row => new Array(6).fill(" "))

      for (let h = 0; h < lectureTimes_Index.length; h++) {
        let test = new String(lectureTimes_Index[h])
        //console.log("lectureTimes_Index[]", test)
        converted_lectureTimes_Index.push(test.split(",").map(Number))
      }

      //console.log("converted_lectureTimes_Index", converted_lectureTimes_Index)

      for (let d = 0; d < labTimes_Index.length; d++) {
        let test = new String(labTimes_Index[d])
        //console.log("labTimes_Index[]", test)
        converted_labTimes_Index.push(test.split(",").map(Number))
      }

      //console.log("converted_labTimes_Index", converted_labTimes_Index)

      for (let j = 0; j < converted_lectureTimes_Index.length; j++) {
        let current_point = converted_lectureTimes_Index[j]
        if (current_point[1] === current_point[2]) {
          lectureArray[current_point[1]][current_point[0]] = curr_course_code
        }
        else {
          lectureArray[current_point[1]][current_point[0]] = curr_course_code
          lectureArray[current_point[2]][current_point[0]] = curr_course_code
        }
      }

      for (let j = 0; j < converted_labTimes_Index.length; j++) {
        let current_point = converted_labTimes_Index[j]
        if (current_point[1] === current_point[2]) {
          labArray[current_point[1]][current_point[0]] = curr_course_code
        }
        else {
          labArray[current_point[1]][current_point[0]] = curr_course_code
          labArray[current_point[2]][current_point[0]] = curr_course_code
        }
      }


      let curr_course_lectures = converted_lectureTimes_Index
      let curr_course_labs = converted_labTimes_Index
      let curr_course_lectureArray = lectureArray
      let curr_course_labArray = labArray
      let curr_course_sections_match = false

      if (JSON.stringify(curr_course_lectureArray) === JSON.stringify(curr_course_labArray))
        curr_course_sections_match = true

      temp_section_times = {

        course_code: curr_course_code,
        // NOTE: it is entirely possible that the lecture and lab sections match, in which case, there is only a lecture meeting
        // there is a bool that accounts for this
        lab_lecture_match: curr_course_sections_match,
        lectureIndexes : curr_course_lectures,
        labIndexes : curr_course_labs,
        lectureArray : curr_course_lectureArray,
        labArray: curr_course_labArray

      } 

      finalsectionInfo.push(temp_section_times)
      //console.log("allClassTimes for the current course are:", allClassTimes)

    } // end for loop of "k" courses
  }
  else {
    console.log("I guess there's nothing here")
    console.log(responseData)
    //console.log('Is there really nothing here?...', props.responseData[0].code)
  }

  console.log("conflicts: ", conflicts)
  console.log("sectionInfo objects are: ", finalsectionInfo)

  //return finalSchedules
  return {finalSchedules, conflicts, finalSchedule_Info, finalsectionInfo};
}
