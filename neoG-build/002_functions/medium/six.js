// 6. Given two dates, your function should return which one comes before the other.

const minDate = (date1, date2) => {
//     let d1 = new Date(date1)
//     let d2 = new Date(date2)
//     let ms_diff = d2.getTime() - d1.getTime()
//     let day_diff = ms_diff/(1000*60*60*24)
//     if(day_diff < 0){
//         return date2
//     } else {
//         return date1
//     }
// if (Date.parse(date1) < Date.parse(date2)) {
//     return `${date1} comes before ${date2}`
// }else{
//     return `${date2} comes before ${date1}`
// }
return new Date(date2) > new Date(date1)
}

console.log(minDate('02/03/2021', '02/05/2021'))