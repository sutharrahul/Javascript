// Ans 25
function bmi(height,weight){

    result = weight/(height * height)
    return result
}

let heightinmeter = 1.8
let weight = 90
let bmis =bmi(heightinmeter, weight)
console.log(result);

if(result<18.5){
    console.log(`Your BMI is ${result}. You are Underweight`);
}else if(result <= 24.9 || result == 18.5)
{
    console.log(`Your BMI is ${result}. Your BMI is Normal weight `);
}else if(result <=29.9 || result == 25)
{
    console.log(`Your BMI is ${result}. You are Over Weight`);
}else if(result >= 30)
{
    console.log(`Your BMI is ${result}. You are Obese`);
}