function task1(){
    //-- створити об'єкт (не меньше 5ти властивостей) який описує
    // - собаку
    // - людину
    // - автомобіль
    // - квартиру
    // - книгу
    let dog={
        breed:'labrador',
        age:2,
        name:'Kiara',
        vaccinations:true,
        weight:30
    }
    let person={
        placeOfBirth:'lviv',
        age:18,
        name:'Diana',
        debtsAndLoans:false,
        phoneNumber:123456789
    }
    let auto={
        brand:'mazda',
        model:'cx-5',
        mileage:3000,
        firstOwner:true,
        engine:'petrol'
    }
    let flat={
        roomsNum:4,
        square:120,
        style:'loft',
        heating:'central',
        elevator:true
    }
    let book={
        autor:'joanne rowling',
        releaseDate:'26 June 1997 y.',
        price:'20$',
        pagesNum:1235,

    }
    // -- Створити масив та вивести його в консоль:
    //     - з 5 собак
    // - 3 5 людей
    // - з 5 автомобілів

    let array=[dog,dog,dog,dog,dog,person,person,person,person,auto,auto,auto,auto,auto];
    console.log(array);
}
function task2(){
    // Дан массив:
        let users = [
            {name: 'vasya', age: 31, status: false},
            {name: 'petya', age: 30, status: true},
            {name: 'kolya', age: 29, status: true},
            {name: 'olya', age: 28, status: false},
            {name: 'max', age: 30, status: true},
            {name: 'anya', age: 31, status: false},
            {name: 'oleg', age: 28, status: false},
            {name: 'andrey', age: 29, status: true},
            {name: 'masha', age: 30, status: true},
            {name: 'olya', age: 31, status: false},
            {name: 'max', age: 31, status: true}
        ];
    // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
    // - статус Андрія
    // - статус Максима
    // - ім'я передостаннього об'єкту
    // - ім'я третього об'єкта
    // - вік Олега
    // - вік Олі
    // - вік + ім'я 5го об'єкта
    // - вік + сатус Анни
    console.log(users[7].status);
    console.log(users[10].status);
    console.log(users[9].name);
    console.log(users[2].name);
    console.log(users[6].age);
    console.log('first Olya',' ',users[3].age,'|second Olya',' ',users[9].age);
    console.log(users[4].age,' ',users[4].name);
    console.log(users[5].age,users[5].status);










}
// task1();
task2();