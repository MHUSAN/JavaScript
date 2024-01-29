// let i = 0;

// while(i <= 10){
//     console.log(i);
//     i++;
// }


// let i = 10;

// while(i > 0){
//     console.log(i);
//     i--;
// }


// let = i = 0;

// do{
//     console.log(i);
//     i++;
// }while(i < 0)


// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }


do{
    var x = prompt('Son kirting');
}while(isNaN(x))

let answer = 1;

for(let i = 1; i <= x; i++){
    answer = answer * i;    
}

console.log(answer);


// darajani topish
// let number = prompt('son kiriting');
// let level = prompt('daraja kiriting');
// let answer = number;

// for(let i = 1; i < level; i++){
//     answer = answer * number;
// }
// alert(answer);


// let number = prompt('son kiriting');
// let answer = 0;

// for(let i = 0; i < number; i++){
//     answer = answer + i;
// }
// alert(answer); 


// 🐏
// 🐏🐏
// 🐏🐏🐏
// 🐏🐏🐏🐏
// 🐏🐏🐏🐏🐏

// let num = prompt("son kierting");
// let shep = "🐏 ";

// for(let i = 0; i <= num; i++ ){
//     console.log(shep);
//     shep = shep + "🐏";
// }


// * 
// -*
// --*
// ---*
// ----*


let son = +prompt("Son kirting");
let belgi = prompt("Belgi kirting");
let tugallovchi = prompt("Tugallovchi kirting");

for(let i = 0; i <= son; i++){
    console.log(tugallovchi);
    tugallovchi = belgi +tugallovchi;
}
