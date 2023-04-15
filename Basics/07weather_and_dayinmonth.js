// Ans 16 to 22
// const wathername = 'February'

// if(wathername == 'September' || wathername ==  'October' ||wathername ==  'November'){
//     console.log('The season is Autumn');
// }
// else if(wathername == 'December' || wathername == 'January' || wathername == 'February'){
//     console.log('The season is Winter.');
// }
// else if(wathername == 'March' || wathername == 'April' || wathername == 'May'){
//     console.log('The season is Spring');
// }
// else if(wathername == 'June' || wathername == 'July' || wathername == 'August' ){
//     console.log('The season is Summer');
// }


// Q.17 and 18
// const daysinmonth = function(month, year)
// {
//     return new Date(year, month,0).getDate();
// }
// console.log(daysinmonth(2,2023));

// Q.20
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// console.log(shoppingCart);

// shoppingCart.push('Sugar')
// console.log(shoppingCart);

// shoppingCart.splice(3,1)
// console.log(shoppingCart);

// shoppingCart.splice(2,1,'Green Tea')
// console.log(shoppingCarts);

// 21
// const contary = ['India','America','Nepal',]
// const cnt = 'Ethiopia'
// if(contary.includes(cnt))
// {
//     console.log(cnt.toUpperCase())
// }
// else{
//     const addcnt = contary.push('Ethiopia')
//     console.log(contary);
// }

// 22
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
/*const last = ages[ages.length-1]
console.log(`Minimum age is ${ages[0]}`);
console.log(`Maximum age is ${last}`);*/

// console.log((ages[4]+ages[5])/2); //median age

/*let avrageage = sum(ages); //Average age
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    sum=sum/ages.length
    return sum;
}
console.log(`Average age is ${avrageage}`);*/

// console.log('range of the ages is ',ages[ages.length-1]-ages[0]); //range of the ages

