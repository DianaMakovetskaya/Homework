
function task1_and_2(){
    // 1. присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123,
    // 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
    let str1 = 'hello';
    let str2 = 'owu';
    let str3 = 'com';
    let str4 = 'ua';
    let num1 = 1, num2 = 10, num3 = -999, num4 = 123, num5 = 3.14, num6 = 2.7, num7 = 16;
    let istrue = true, isfalse = false;

    console.log(str1, str2, str3, str4);
    console.log(num1, num2, num3, num4, num5, num6, num7);
    console.log(istrue, isfalse);

    document.write(str1, ' ', str2, ' ', str3, ' ', str4 + ' ');
    document.write(num1, ' ', num2, ' ', num3, ' ', num4, ' ', num5, ' ', num6, ' ', num7 + ' ');
    document.write(istrue, ' ', isfalse, ' ');

    alert(str1 + ' ' + str2 + ' ' + str3 + ' ' + str4);
    alert(num1 + ',' + num2 + ',' + num3 + ',' + num4 + ',' + num5 + ',' + num6 + ',' + num7);
    alert(istrue + ',' + isfalse);
    // 2. переопределить каждую переменную из задания 1 дав им произвольные значения
    // Вывести каждую при помощи console.log , alert, document.write
    str1 = 'here';
    str2 = 'i';
    str3 = 'change';
    str4 = 'variables';
    num2 = 2;
    num3 = 3;
    num4 = 4;
    num5 = 5;
    num6 = 6;
    num7 = 7;
    isfalse = 'true';
    istrue = 'false';

    console.log(str1, str2, str3, str4);
    console.log(num1, num2, num3, num4, num5, num6, num7);
    console.log(istrue, isfalse);

    document.write(str1, ' ', str2, ' ', str3, ' ', str4 + ' ');
    document.write(num1, ' ', num2, ' ', num3, ' ', num4, ' ', num5, ' ', num6, ' ', num7, ' ');
    document.write(istrue, ' ', isfalse, ' ');

    alert(str1 + ' ' + str2 + ' ' + str3 + ' ' + str4);
    alert(num1 + ',' + num2 + ',' + num3 + ',' + num4 + ',' + num5 + ',' + num6 + ',' + num7);
    alert(istrue + ',' + isfalse);
}

function task3(){
    // 3. Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const first=10,second=20,third=30;
const firststr='for',secondstr='third',thirdstr='task';
console.log(first,second,third);
console.log(firststr,secondstr,thirdstr);
}

function task4_and_5(){
    // 4. при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
    // Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

    let name = prompt('Enter your name:');
    let surname = prompt('Enter your surname:');
    let patronymic = prompt('Enter your patronymic:');
    console.log(name, surname, patronymic);
    document.write(name, ' ', surname, ' ', patronymic);
    alert(name + ' ' + surname + ' ' + patronymic);

    // 5. Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
    let person = name + ' ' + surname + ' ' + patronymic;
    console.log(person);
}
function task6(){
    // 6. Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
    let MotherName = prompt('Enter your name:');
    let MotherSurname = prompt('Enter your surname:');
    let MotherPatronymic = prompt('Enter your patronymic:');
    console.log(MotherName, MotherSurname, MotherPatronymic);
    document.write(MotherName, ' ', MotherSurname, ' ', MotherPatronymic);
    alert(MotherName + ' ' + MotherSurname + ' ' + MotherPatronymic);

    let person_Mother = MotherName + ' ' + MotherSurname + ' ' + MotherPatronymic;
    console.log(person_Mother);

    let FatherName = prompt('Enter your name:');
    let FatherSurname = prompt('Enter your surname:');
    let FatherPatronymic = prompt('Enter your patronymic:');
    console.log(FatherName, FatherSurname, FatherPatronymic);
    document.write(FatherName, ' ', FatherSurname, ' ', FatherPatronymic);
    alert(FatherName + ' ' + FatherSurname + ' ' + FatherPatronymic);

    let person_Father = FatherName + ' ' + FatherSurname + ' ' + FatherPatronymic;
    console.log(person_Father);

    //або можна просто викликати task4_and_5() поки,наприклад,confirm()!=false
}




function task7(){
    // 7. при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
    let int1,int2,int3;
    int1=+prompt('Enter first num');
    int2=+prompt('Enter second num');
    int3=+prompt('Enter third num');
    console.log(int1);
    console.log(int2);
    console.log(int3);
}
function task8(){
    // 8. при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
    // Сложить их между собой записав результат в переменную result и вывести в консоль браузера
    let int1,int2,int3,int4,result;
    int1=prompt('Enter 1 num');
    int2=prompt('Enter 2 num');
    int3=prompt('Enter 3 num');
    int4=prompt('Enter 4 num');
    int1=parseInt(int1);
    int2=parseInt(int2);
    int3=parseInt(int3);
    int4=parseInt(int4);
    result=int1+int2+int3+int4;
    console.log('result=',result);
}
function task9(){
    // 9. при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
    // Сложить их между собой записав результат в переменную result и вывести в консоль браузера
    let int1,int2,int3,result;
    int1=prompt('Enter 1 num');
    int2=prompt('Enter 2 num');
    int3=prompt('Enter 3 num');
    int1=parseFloat(int1);
    int2=parseFloat(int2);
    int3=parseFloat(int3);
    result=int1+int2+int3;
    console.log('result=',result);
}
function task10(){
    // 10. при помощи prompt()  получить 3 числа с плавающей точекой.
    // Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
    let int1,int2,int3,result;
    int1=prompt('Enter 1 num');
    int2=prompt('Enter 2 num');
    int3=prompt('Enter 3 num');
    int1=parseFloat(int1);
    int2=parseFloat(int2);
    int3=parseFloat(int3);
    int1=Math.round(int1);
    int2=Math.round(int2);
    int3=Math.round(int3);
    result=int1+int2+int3;
    console.log('result=',result);
}

function task11(){
    // 11. при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
    // Первое число - это число которое будут возводить в степень.
    // Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
    let int1,int2,result;
    int1=parseInt(prompt('Enter 1 num'));
    int2=parseInt(prompt('Enter 2 num'));
    result=Math.pow(int1,int2);
    console.log('result=',result);

}
function task12(){
    // - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль

    let a = 100, b = '100',c = true,d = undefined;
    console.log(a,typeof a);
    console.log(b,typeof b);
    console.log(c,typeof c);
    console.log(d,typeof d);

}

function task13(){
    // 13. Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
    expression1=5 < 6; //-> true
    expression2=5 > 6; //-> false
    expression3=5 == 6; //-> false
    expression4=5 >= 6; //-> false
    expression5=10 == 10;// -> true
    expression6=10 === 10;// -> true
    expression7=10 != 10;// -> false
    expression8=10 > 10;// -> false
    expression9=10 < 10;// -> false
    expression10=123 === '123'; //-> false
    expression11=123 == '123'; //-> true

    console.log('5 < 6',expression1);
    console.log('5 > 6',expression2);
    console.log('5 == 6',expression3);
    console.log('5 >= 6',expression4);
    console.log('10 == 10',expression5);
    console.log('10 === 10',expression6);
    console.log('10 != 10',expression7);
    console.log('10 > 10',expression8);
    console.log('10 < 10',expression9);
    console.log('123 === \'123\'',expression10);
    console.log('123 == \'123\'',expression11);



}

function task14(){
    console.log(!!'-1');
    console.log(!!-1);
    console.log(!!'0');
    console.log(!!'null');
    console.log(!!'undefined');
    console.log(!!(3/'owu'));
    console.log((111 > 11 || 45 < 111) ||  !!'0');
    console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
}


// task1_and_2();
// task3();
// task4_and_5();
// task6();
// task7();
// task8();
// task9();
// task10();
// task11();
// task12();
// task13();
// task14();






