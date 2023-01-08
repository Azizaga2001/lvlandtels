//1)
//напишите в () консоли скрипта ниже нужный код чтобы при запуске скрипта мы получили 'Alex' в консоли
let user = {
    name: 'Alex',
    age: 23,
    call: function() {
        console.log(this.name);
    }
}

user.call();

//2)
//что выведет скрипт ниже в консоли?
let user1 = {
    name: 'Alex',
    age: 23,
    bag: {
        name: 'Marry',
        call: function() {
            console.log(this.name);
        }
    }
}

//Marry

//3)
//можно ли использовать this в строгом режиме?

//В строгом режиме JavaScript не допускается привязка по умолчанию