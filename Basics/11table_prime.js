// Ans 26
/*let num = 2
for(j=1; j<=10; j++){
    console.log(`${num} * ${j} =`,j*num);
}*/


// Ans 27 Prime Number
for (i = 0; i <= 30; i++) {
    if (i == 1 || i == 0)
        continue;
    let flag = 1;

    for (j = 2; j <= i/2; j++) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1)
        
        console.log(i);
        
}

