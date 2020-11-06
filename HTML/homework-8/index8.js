function task1(array){
    // - створити функцію яка виводить масив
    console.log(array);
}
function task2(size){
    // - створити функцію яка заповнює масив рандомними числами та виводить його.
    // Для виведення використати попвередню функцію.
    let array=[];
    for(let i=0;i<size;i++){
        array[i]=Math.floor(Math.random() * (20 - 1)) + 1;
    }

    task1(array);
}
task2(10);
function task3(one,two,three){
    // - створити функцію яка приймає три числа та виводить та повертає найменьше.
    return Math.min(one,two,three);
}
function task4(one,two,three){
    // - створити функцію яка приймає три числа та виводить та повертає найбільше.
    return Math.max(one,two,three);
}
function args(){
    //- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
    let max=arguments[0];
    let min=arguments[0];
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    console.log(max);
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]<max){
            min=arguments[i];
        }
    }
    return min;
}
function task5(array){
    let res=0;
    //- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
    for(let i=0;i<array.length;i++){
        res +=array[i];
    }
    return res;
}
function task6(array){
    //- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    let res=task5(array);
    res /=array.length;
    return res;
}

function task7(array){
    //- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
    return array.length;
}
function task8(array){
    //- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
    let res=0;
    for(let i=0;i<array.length;i++){
        res +=Object.values(array[i]).length;
    }
    return res;
}

function task9(array1,array2){
    //- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    let array3=[];
    for(let i=0;i<array1.length;i++){
        array3[i]=array1[i]+array2[i];
    }
    return array3;
}
function task10(array,i){
    //- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
    for(let k=0;k<array.length;k++){
        if(k===i){
            let num=array[k];
            array[k]=array[k+1];
            array[k+1]=num;
        }
    }
    return array;
}

function task11(array){
    //- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
    // Зберігаючи при цьому порядок не нульових значень.
    console.log(array);
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            array.splice(i,1);
            array.push(0);

        }
    }
    console.log(array);
}

function task12(){
    //- Додає в боді блок з текстом "Hello owu"
    let helloDiv=document.createElement('div')
    helloDiv.innerText='Hello owu';
    document.body.appendChild(helloDiv);
}
function task13(elementType,text){
    //- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
    let element=document.createElement(elementType);
    element.innerText=text;
    document.body.appendChild(element);
}
function task14(array,id){
    //приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
    let element=document.getElementById(id);
    for(let i=0;i<array.length;i++){
        let autoDiv=document.createElement('div');
        autoDiv.innerText=array[i].brand+' '+ array[i].model+' '+ array[i].engine;
        element.appendChild(autoDiv);
    }
}
function task15(array,id){
    //- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
    // Для кожної властивості створити всередені блока автомоблія свій блок
    let element=document.getElementById(id);

    for (let i = 0; i < array.length; i++) {
        let autoDiv = document.createElement('div');
        let values = Object.values(array[i]);

        for (let i = 0; i < values.length; i++) {
            let property = document.createElement('div');
            property.innerText = values[i];

            autoDiv.appendChild(property)
        }
        element.appendChild(autoDiv);
    }
}
function task16(usersWithId,citiesWithId){
    //**- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
    // та повертає масив цих з'єднаних об'єктів.
    // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
    // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
    for(let i=0;i<usersWithId.length;i++){
        for(let k=0;k<citiesWithId.length;k++){
            if(citiesWithId[k].user_id===usersWithId[i].id){
                usersWithId[i].adress=citiesWithId[k];
                break;
            }
        }
    }
    return usersWithId;
}

function additional1(n){
    if(n===2){
        alert("YES");
        return ;
    }
    if(n<2){
        alert("NO");
        return ;
    }
    if(n>2){
        additional1(n/2);
    }
}

console.log(task3(5,2,9));

console.log(task4(5,2,9));

args(5,4,3,1,8,1);

console.log(task5([1,2,3,4,]));

console.log(task6([1, 2, 3, 4,]));

console.log(task7([{name: 'vasya', age: 31, status: false}, {name:'diana',age:18},{name: 'max', age: 30, status: true}]));

console.log((task8([{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},])))

console.log(task9([1,2,3,4],[2,3,4,5]));

console.log(task10([1,2,3,4,5,6],3));

task11([1,2,0,3,6]);
task12();
task13('div','anything');


function Auto(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;

}
let auto1=new Auto('mazda','cx-3','petrol');
let auto2=new Auto('bmv','x5','petrol');
let auto3=new Auto('audi','a3','disel');
let auto4=new Auto('wolkswagen','golf','disel');
let auto5=new Auto('toyota','prius','gas');


let array=[auto1,auto2,auto3,auto4,auto5];
// task14(array,'autoList');
task15(array,'autoList');

let variableForTask16=task16([{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},],
    [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},]);
console.log(variableForTask16);

let num=+prompt('Enter num:');
additional1(num);


