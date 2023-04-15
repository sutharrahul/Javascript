// Ans 15

const marks = 100
if(marks > 100){
    console.log('Enter 0 to 100');
}
else if(marks == 100 || marks >= 80 ){
    console.log('Your Grade is A');
}
else if(marks ==89 || marks >=70){
    console.log('Your Grade is Your Grade is B');
}
else if(marks ==69 || marks >=60)
{
    console.log('Your Grade is C');
}
else if(marks ==59 || marks >=50){
    console.log('Your Grade is D');
}
else if(marks ==49 || marks >=0){
    console.log('Your Grade is F');
}
else{
    console.log('Please input vailed number');
}