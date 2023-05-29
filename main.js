let month=parseInt(prompt("Enter Month"));
let year=parseInt(prompt("Enter Year"));
switch(month){
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
day=31;
document.write("The given month is: "+month)
document.write("This Month have 31 days")
break;
case 4 :
case 6:
case 9:
case 11:
day=30;
document.write("The given month is: "+month)
document.write("This Month have 30 days")
break;
case 2:
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.write(year + ' is a leap year');
    } else {
        document.write(year + ' is not a leap year');
}
break;
default:
day=-1;
}