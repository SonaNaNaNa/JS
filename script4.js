//Задание 1
/*for (let num = 0; num < 11; num++) {
    if (num===0) {
        console.log(`${num} - это ноль`);
    } else if(num%2===0) {
        console.log(`${num} - это четное число`);
    }else{
        console.log(`${num} - это нечетное число`);  
    }
    
}*/

//Задание 2
/*const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.splice(3, 2);
console.log(arr);*/

//Задание 3
/*const arr = [];
let size = 5;
for (let i = 0; i < size; i++) {
    arr[i] =  Math.round(Math.random()*9);
}
console.log(arr);
let sum = 0;
for (let j = 0; j < arr.length; j++) {
    sum = sum + arr[j];   
}
console.log(sum);
for(let k = 0; k< arr.length; k++){
if (arr[k]===3) {
    console.log('В массиве есть цифра 3');
} else{
    console.log('В массиве нету цифры 3');
}
}
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]<min){
        min = arr[i];
    }
    
}
console.log(`минимальное значение массива: ${min}`);*/

//Задание 4

/*for (let i = 0; i < 21; i++) {
    let simbol = " ";
    for (let j = 0; j <= i; j++) {
        simbol = simbol + "x";
    }
    console.log(simbol)
}*/
