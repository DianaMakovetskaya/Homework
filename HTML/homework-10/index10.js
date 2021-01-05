//- создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let array=[1,5,6,22,8,3,99,101,345,276,44,77,2346,65,12,456,43,29,10,54]

// let newArray=array.sort((a, b) => a-b);
// console.log(newArray);

// let new2Array=array.sort((a, b) => {
//     if(a>b){
//         return -1;
//     }
//     return 1;
// })
// console.log(new2Array);
//
// let new3Array=array.filter(value => {
//     if(value%3===0){
//         return value;
//     }
// })
// console.log(new3Array);
//
// let new4Array=array.filter(value => {
//     if(value%10===0){
//         return value;
//     }
// })
// console.log(new4Array);
// array.forEach(value => console.log(value));
// let newArray=array.map(value => value*3);
// console.log(array);
// console.log(newArray);

//- создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let words=['hole','calculating','seal','alert','responsible','symptomatic','square',
//     'protect',
//     'remarkable',
//     'previous',
//     'pray',
//     'harass',
//     'zany',
//     'adventurous',
//     'change'];
// // let newWords=words.sort();
// // let new2Words=words.sort((a, b) => a>b?-1:1)
// // console.log(new2Words);
// console.log(words);
// // let new3Words=words.filter(value => value.length>4);
// // console.log(new3Words);
//
// let new4Words=words.map(value => value+'!');
// console.log(new4Words);

//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// users.sort((a, b) => a.age>b.age?-1:1);
// users.sort((a, b) => a.age-b.age);
// users.sort((a, b) => a.name.length>b.name.length?-1:1);
// users.sort((a, b) => a.name.length-b.name.length);
// users.forEach((value, index) => value.ID=index+1);
// let UsersWithId=users;
// UsersWithId.sort((a, b) => a.ID>b.ID?-1:1);
// console.log(UsersWithId);


//написать функцию калькулятора с 2мя числами и колбеком
// function Calculate(num1,num2,sign, callback) {
//     let res;
//     switch (sign){
//         case '+':
//             res=num1+num2;
//             break;
//         case '-':
//             res=num1-num2;
//             break;
//         case '/':
//             res=num1/num2;
//             break;
//         case '*':
//             res=num1*num2;
//             break;
//         case '%':
//             res=num1%num2;
//             break;
//
//     }
//     callback(res);
// }
//
// Calculate(+prompt('Enter 1 num'),+prompt('Enter 2 num'),prompt('Enter sign:'), function(answer) {
//     alert(`Answer: ${answer}`);
// });

// -- написать функцию калькулятора с 3мя числами и колбеком

function Calculate(callback) {
    let res=0;
    let sign;
    res= +prompt('Num:');

    while (true){
        sign=prompt('Sign:',res);
        switch (sign){
            case '+':
                res += +prompt('Num:');
                break;
            case '-':
                res -= +prompt('Num:');
                break;
            case '/':
                res /= +prompt('Num:');
                break;
            case '*':
                res *= +prompt('Num:');
                break;
            case '%':
                res %= +prompt('Num:');
                break;
            case 'stop':
                callback(res);
                return ;
        }

    }


}

Calculate(function(answer) {
    alert(`Answer: ${answer}`);
});
