function diffInDates(date1,date2){
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

return Difference_In_Days;
}
module.exports=diffInDates;
