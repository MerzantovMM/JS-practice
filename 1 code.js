// 1-9 пункты

let item_1;
item_1=5;
console.log(item_1);

let item_2;
item_2=3;
console.log(item_2);

let item_3;
item_3=item_1+item_2;

// 12-20 пункты
let item_4;
item_4 ='Yolochka';
console.log(item_4);

console.log(item_3+item_4);
console.log(item_3*item_4);

let item_5;
item_5=item_3;

let item_6;
let item_6_type;
item_6=15;
item_6_type=typeof(item_6);
console.log('item_6 ==', item_6, 'item_6_type ==', item_6_type);

let item_7;
item_7=String(item_6)
let item_7_type;
item_7_type=typeof(item_7);
console.log('item_7 ==', item_7, 'item_7_type ==', item_7_type);

// 26-33
age_1=17;
age_2=18;
age_3=61;


if (age_1<age_2) {
    console.log('You don’t have access cause your age is', +age_1+   ', It’s less then', age_3)
} else if (age_1>=age_2 && age_1<age_3) {
    console.log('Welcome  !')
} else if (age_1>age_3) {
    console.log('Keep calm and look Culture channel')
} else {
console.log('Technical work”')
};

// 1*
var checkAge= function(age_1, age_2, age_3) {
    if (age_1<age_2) {
    console.log('You don’t have access cause your age is', +age_1+   ', It’s less then', age_3)
} else if (age_1>=age_2 && age_1<age_3) {
    console.log('Welcome  !')
} else if (age_1>age_3) {
    console.log('Keep calm and look Culture channel')
} else {
    console.log('Technical work”')
}};

checkAge(0,0,0);

// 2*

var AGE= function(age_1, age_2, age_3) {
    if (typeof (age_1) == 'number' && typeof (age_2) =='number' && typeof (age_3) == 'number'){   
if (age_1<age_2){
        console.log('You don’t have access cause your age is', +age_1+   ', It’s less then', age_3)
    } else if (age_1>=age_2 && age_1<age_3) {
        console.log('Welcome  !')
    } else if (age_1>age_3){
        console.log('Keep calm and look Culture channel')
    } else {
    console.log('Technical work”')}}
 else {console.log('ERROR')}
}

AGE('18','17', 61);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// let age1 = (/^[0-9]+$/.test(age_1));
// let age2= (/^[0-9]+$/.test(age_2));
// let age3= (/^[0-9]+$/.test(age_3));

var AGE= function(age_1, age_2, age_3) {
    if (/^[0-9]+$/.test(Number(age_1)) && /^[0-9]+$/.test(Number(age_2)) && /^[0-9]+$/.test(Number(age_3))){   
if (age_1<age_2){
        console.log('You don’t have access cause your age is', +age_1+   ', It’s less then', age_3)
    } else if (age_1>=age_2 && age_1<age_3) {
        console.log('Welcome  !')
    } else if (age_1>age_3){
        console.log('Keep calm and look Culture channel')
    } else {
    console.log('Technical work”')}}
 else {console.log('ERROR')}
}
// AGE ("a",'5', '23');
let xyz1=prompt('Введите первое число');
let xyz2=prompt('Введите второе число');;
let xyz3=prompt('Введите третье');
AGE(xyz1, xyz2,xyz3);
//--------------------------Второй вариант----------------------
var age_2=17;
var age_3=61;
var AGE= function(age) {
    if (isNaN(age)){console.log('ERROR')
    } else if (age<age_2){
        console.log('You don’t have access cause your age is', +age+   ', It’s less then', age_3)
    } else if (age>=age_2 && age<age_3) {
        console.log('Welcome  !')
    } else if (age>age_3){
        console.log('Keep calm and look Culture channel')
    } else {
   console.log('Technical work”')}
 };
// AGE('1');
let prom=prompt('Введите первое число');
AGE(prom);



// hw 1.4*





// HW2
// var some;
var funk =function(some) {
    if (typeof some == 'strig') {console.log ("ЭЭЭ, some является", typeof(some))}
else if (some.lenght<5) {console.log("BROOO")
}
};

funk("asd");
// let reg =/[a-zA-Z]/g;
var bro='asdasdas';
if (typeof bro == 'string') {
if (bro.length<5) {console.log("Меньше 5")
} else if (bro.length>64) {console.log ("Больше 64")}
else if (reg.test(bro)) {console.log("ВВедене буквы")}
} else {console.log ("Тип данных - ", typeof bro)};

let hal='asdas';

if (reg.test(hal)){console.log('GOOD')}
else {console.log('BLIN')};

let sk='12 41'
console.log(sk.includes('12'));


var regExp = /[a-zA-Z]/g;
if (regExp.test(hal)) {console.log('GOOD')
} else {console.log('NOOO')}

let reg =/[a-zA-Z]/g;
var bro='asdasdas';
if (typeof bro == 'string') {
if (bro.length<5) {console.log("Меньше 5")
} else if (bro.length>64) {console.log ("Больше 64")}
else if (reg.test(bro)) {console.log("ВВедене буквы")
}
} else {console.log ("Тип данных - ", typeof bro)};

