function task1(){
    //// -  Створити функцію конструктор для об'єкту який описує теги
// // Властивості
// // -назва тегу
// // - опис його дій
// // - масив з атрибутами (2-3 атрибути максимум)
// // Кожен атрибут описати як окремий який буде містити
// // -назву атрибуту
// // -опис дії атрибуту

    function Description(TagName,Actions,atributes){
        this.TagName=TagName;
        this.Actions=Actions;
        this.atributes=atributes;

    }
    let obj=[new Description('a','предназначен для создания ссылок',[{AtributeName:'accesskey',AtributeDescription:'Активация ссылки с помощью комбинации клавиш.'
    },{AtributeName: 'href',AtributeDescription: 'Задает адрес документа, на который следует перейти. '},]),new Description('div','предназначен для выделения фрагмента документа с целью изменения вида содержимого',
        [{AtributeName:'align',AtributeDescription:'Задает выравнивание содержимого тега '},{AtributeName: 'title',AtributeDescription: 'Добавляет всплывающую подсказку к содержимому.'}])]
    console.log(obj);

}


function task2(){
    //- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

    const Car={
        model:'',
        producer:'',
        releaseYear:'',
        maxSpeed:'',
        engineCapacity:'',
        drive: function (){
            console.log("їдемо зі швидкістю ",this.maxSpeed,"на годинy");
        },
        info: function (){
            for(const value in Car){
                console.log(value,Car[value]);
            }

        },
        increaseMaxSpeed: function(newSpeed){
            this.maxSpeed +=newSpeed;
        },
        changeYear: function (newValue){
            this.releaseYear=newValue;
        },
        addDriver: function (driver){
            this.driver=driver;
        }

    }
    Car.maxSpeed=130;
    Car.model='cx-3';
    Car.engineCapacity=50;
    Car.releaseYear=2017;
    Car.producer='mazda';
    Car.drive();
    Car.increaseMaxSpeed(20);
    Car.changeYear(2019);
    Car.addDriver('Alex');
    Car.info();
}


function task3(){
    //==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

    function Car(model,producer,releaseYear,maxSpeed,engineCapacity){
        this.model=model;
        this.producer=producer;
        this.releaseYear=releaseYear;
        this.maxSpeed=maxSpeed;
        this.engineCapacity=engineCapacity;
        this.drive=function(){
            console.log("їдемо зі швидкістю ",this.maxSpeed,"на годинy");
        }
        this.info=function(){
            console.log(this)
        }
        this.increaseMaxSpeed=function(newSpeed){
            this.maxSpeed +=newSpeed;
        }

        this.changeYear=function(newValue){
            this.releaseYear=newValue;
        }
        this.addDriver=function(driver){
            this.driver=driver;
        }
    }
    let m3=new Car('cx-3','mazda','2017',130,50);
    m3.increaseMaxSpeed(20);
    m3.changeYear(2020);
    m3.addDriver('vasya');
    m3.info();

}

function task4(){
    //==============================================
    // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
    // -- info () - яка виводить всю інформацію про автомобіль
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

    class Car{
        constructor(model,producer,releaseYear,maxSpeed,engineCapacity) {
            this.model=model;
            this.producer=producer;
            this.releaseYear=releaseYear;
            this.maxSpeed=maxSpeed;
            this.engineCapacity=engineCapacity;
        }
         drive(){
            console.log("їдемо зі швидкістю ",this.maxSpeed,"на годинy");
        }
        info(){
            console.log(this)
        }
        increaseMaxSpeed(newSpeed){
            this.maxSpeed +=newSpeed;
        }

        changeYear(newValue){
            this.releaseYear=newValue;
        }
        addDriver(driver){
            this.driver=driver;
        }
    }

    let m6=new Car('cx-6','mazda',2019,140,60);
    m6.addDriver('Diana');
    m6.changeYear(2020);
    m6.increaseMaxSpeed(20);
    m6.info();
}

function task5(){
    //==============================================
    // -створити класс попелюшка з полями ім'я, вік, розмір ноги
    // --Створити 10 попелюшок , покласти їх в масив
    // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
    class Cinderella{
        constructor(name,age,footSize) {
            this.name=name;
            this.age=age;
            this.footSize=footSize;
        }
    }
    class Prince{
        constructor(name,age,shoeSize) {
            this.name=name;
            this.age=age;
            this.shoeSize=shoeSize;
        }
    }
    let cinderella1= new Cinderella('Anna',18,36)
    let cinderella2= new Cinderella('Karina',19,37)
    let cinderella3= new Cinderella('Alexia',20,38)
    let cinderella4= new Cinderella('Alice',16,36.5)
    let cinderella5= new Cinderella('Barbara',22,39)
    let cinderella6= new Cinderella('Beatrix',15,35)
    let cinderella7= new Cinderella('Carmen',23,40)
    let cinderella8= new Cinderella('Elisabeth',17,37.5)
    let cinderella9= new Cinderella('Felicia',21,41)
    let cinderella10= new Cinderella('Gabriella',24,35.5)

    let allPrincess=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];

    let prince=new Prince('Phillip',18,37.5);
    for(let i=0;i<allPrincess.length;i++){
        if (prince.shoeSize===allPrincess[i].footSize){
            console.log(allPrincess[i].name,'and',prince.name);
        }
    }

}

function task6(){
    //-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
    // --Створити 10 попелюшок , покласти їх в масив
    // --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
    // -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

    function Cinderella(name,age,footSize){
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }

    function Prince(name,age,shoeSize){
        this.name=name;
        this.age=age;
        this.shoeSize=shoeSize;
        this.FindMyCinderella=function (all_princess){
            for(let i=0;i<all_princess.length;i++){
                if (this.shoeSize===all_princess[i].footSize){
                    console.log(all_princess[i].name,'and',this.name);
                }
            }
        }
    }

    let cinderella1= new Cinderella('Anna',18,36)
    let cinderella2= new Cinderella('Karina',19,37)
    let cinderella3= new Cinderella('Alexia',20,38)
    let cinderella4= new Cinderella('Alice',16,36.5)
    let cinderella5= new Cinderella('Barbara',22,39)
    let cinderella6= new Cinderella('Beatrix',15,35)
    let cinderella7= new Cinderella('Carmen',23,40)
    let cinderella8= new Cinderella('Elisabeth',17,37.5)
    let cinderella9= new Cinderella('Felicia',21,41)
    let cinderella10= new Cinderella('Gabriella',24,35.5)

    let allPrincess=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];

    let prince=new Prince('Phillip',18,41);
    prince.FindMyCinderella(allPrincess);
}

// task1();
// task2();
// task3();
// task4();
// task5();
task6();