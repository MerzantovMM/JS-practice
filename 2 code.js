// __________________________
let letters =/[a-zA-Zа-яА-Я]/;
let zaglav =/[A-ZА-Я]/;
let numbah = /[0-9]/;
var bro='A324@23a';
if (typeof bro !== 'string') {console.log ("Тип данных - ", typeof bro)
} else if (bro.length == 0){console.log('Строка не должна быть пустой')
} else if (!letters.test(bro)) {console.log("Необходима хотя бы 1 буква")
} else if (bro.length<5) {console.log("Меньше 5")
} else if (bro.length>64) {console.log ("Больше 64")
} else if (!zaglav.test(bro)){console.log("Хотя бы одна заглавная буква")
} else if (!numbah.test(bro)) {console.log("Должна быть хотя бы одна цифра")
} else if (!bro.includes("@")) {console.log('Должна быть хотя бы одна @')
} 


