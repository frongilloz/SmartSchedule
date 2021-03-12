const periods = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "E1", "E2", "E3"];
const daysShort = ["M", "T", "W", "R", "F"]


const times = [
    "7:25 AM - 8:15 AM", "8:30 AM - 9:20 AM", "9:35 AM - 10:25 AM",
    "10:40 AM - 11:30 AM", "11:45 AM - 12:35 PM", "12:50 PM - 1:40 PM",
    "1:55 PM - 2:45 PM", "3:00 PM - 3:50 PM", "4:05 PM - 4:55 PM",
    "5:10 PM - 6:00 PM", "6:15 PM - 7:05 PM", "7:20 PM - 8:10 PM",
    "8:20 PM - 9:10 PM", "9:20 PM - 10:10 PM"];

// maybe have a 2D array that will contain the in-class potential schedules 
// first, fill it with empty space
var TestSchdule = Array(14).fill(0).map(row => new Array(6).fill(" "))


export function generateSchedule(responseData) {

    let checkArray = [1] 
    let oldSchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
    let newSchedule = Array(14).fill(0).map(row => new Array(6).fill(" "))
    oldSchedule = TestSchdule;

    //console.log(checkArray.length)
    console.log("Resp data in gen_schedule")
    console.log(responseData)

    let day_index = 0;
    let period_index1 = 0;
    let period_index2 = 0;

    console.log('1) length of resposneData is: ', (responseData.length) )

    if (Array.isArray(responseData) && checkArray.length && responseData[0]) {
      console.log("Wow, something's here")
      console.log('ResponseData (from pages.js) is: ', responseData)

      let responseDataLength = [];
      responseDataLength = responseData
      console.log('length of resposneData is: ', responseData.length)


      for (let k = 0; k < responseDataLength.length; k++) {

        let sectionsArray = responseData[k].sections
        //console.log('sectionsArray is: ', sectionsArray)
        let meetTArray = sectionsArray[0].meetTimes
        //console.log('meetTArray is: ', meetTArray)

        for (let j = 0; j < meetTArray.length; j++) {
          //console.log('meetTDay is: ', meetTArray[j].meetDays[0])
          //console.log(meetTArray[j].meetPeriodBegin)
          //console.log(meetTArray[j].meetPeriodEnd)

          day_index = daysShort.indexOf(meetTArray[j].meetDays[0])
          //console.log('day_index is: ', day_index)

          period_index1 = periods.indexOf(meetTArray[j].meetPeriodBegin)
          //console.log('period_index1 is: ', period_index1)

          period_index2 = periods.indexOf(meetTArray[j].meetPeriodEnd)
          //console.log('period_index2 is: ', period_index2)

          if (period_index1 === period_index2)
            TestSchdule[period_index1][day_index] = responseData[k].code
          else {
            TestSchdule[period_index1][day_index] = responseData[k].code
            TestSchdule[period_index2][day_index] = responseData[k].code
            }
          }
        }

        console.log('Before: ', TestSchdule)
        console.log('oldSchedule is : ', oldSchedule)
        console.log('newSchedule is : ', newSchedule)
        
      }
    else {
      console.log("I guess there's nothing here")
      console.log(responseData)
      //console.log('Is there really nothing here?...', responseData[0].code)
    }

    console.log('After: ', TestSchdule)

    return TestSchdule

}
