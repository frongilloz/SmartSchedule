const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "E1", "E2", "E3"];
const daysShort = ["M", "T", "W", "R", "F"]

export function generateSchedule(responseData) {

  let finalSchedules = []
  console.log('what is finalSchedules doing?.....', finalSchedules)
  let checkArray = [1]
  //console.log('Before: ', scheduleArray)
  //console.log(checkArray.length)

  let day_index = 0;
  let period_index1 = 0;
  let period_index2 = 0;
  let totalScheduleCount = 1;

  let newSchedule = []
  let dummySchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))

  if (Array.isArray(responseData) && checkArray.length && responseData[0]) {  //check if responseData array exists and if something exists in it (try taking out the checkArray thing)
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

      let sectionsArray = responseData[k].sections
      //console.log('sectionsArray is: ', sectionsArray)
      for (let b = 0; b < totalScheduleCount / sectionsArray.length; b++) {

        for (let i = 0; i < sectionsArray.length; i++) {
          let meetTArray = sectionsArray[i].meetTimes
          //console.log('meetTArray is: ', meetTArray)
          for (let j = 0; j < meetTArray.length; j++) {
            day_index = daysShort.indexOf(meetTArray[j].meetDays[0])
            //console.log('day_index is: ', day_index)

            period_index1 = periods.indexOf(meetTArray[j].meetPeriodBegin)
            //console.log('period_index1 is: ', period_index1)

            period_index2 = periods.indexOf(meetTArray[j].meetPeriodEnd)
            //console.log('period_index2 is: ', period_index2)

            newSchedule = finalSchedules[count]
            dummySchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))

            //console.log('newSchedule is: ', newSchedule)

            if (period_index1 === period_index2) {
              if (newSchedule[period_index1][day_index] != " ")
                console.log("uh oh, there are two classes that could be here")
              newSchedule[period_index1][day_index] = responseData[k].code
              dummySchedule[period_index1][day_index] = responseData[k].code
            }
            else {
              if (newSchedule[period_index1][day_index] != " " || newSchedule[period_index2][day_index] != " ")
                console.log("uh oh, there are two classes that could be here")
              newSchedule[period_index1][day_index] = responseData[k].code
              newSchedule[period_index2][day_index] = responseData[k].code
              dummySchedule[period_index1][day_index] = responseData[k].code
              dummySchedule[period_index2][day_index] = responseData[k].code
            }

          }

          //console.log('what should be added in this itteration: ', dummySchedule)
          //console.log('what does new schedule look like: ', newSchedule)

          finalSchedules[count] = newSchedule
          count++

        }
        if (count === totalScheduleCount) count = 0
        console.log('finalSchedules is : ', finalSchedules)
      }

    }
  }
  else {
    console.log("I guess there's nothing here")
    console.log(responseData)
    //console.log('Is there really nothing here?...', props.responseData[0].code)
  }

  return finalSchedules
}
