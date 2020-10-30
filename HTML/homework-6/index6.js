
function task1(){
    // --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
    let arrayNums=[1,2,3,4,5];
    console.log(arrayNums);
    let arrayString=['str1','str2','str3','str4','str5'];
    console.log(arrayString);
    let arrayOfAll=[1,2,3,4,5,'str1','str2','str3','str4','str5',false,true];
    console.log(arrayOfAll);
}
function task2(){
    //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    let array=[];
    array[0]=15;
    array[1]='lalal';
    array[2]=true;
    console.log(array);
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
function task3(){
    let arrayNums=[1,2,3,4,5,6,7,8,9,10];
    console.log('ARRAY OF NUMS');
    for(let i=0;i<arrayNums.length;i++){
        console.log(arrayNums[i]);
    }

    let arrayString=['str1','str2','str3','str4','str5','str6','str7','str8','str9','str10'];
    console.log('ARRAY OF STRINGS');
    for(let i=0;i<arrayString.length;i++){
        console.log(arrayString[i]);
    }

    let arrayOfAll=[1,3,4,'str1',5,'str2',false,'str3','str4',2,'str5',true,'str6',null];
    console.log('ARRAY OF ALL');
    for(let i=0;i<arrayOfAll.length;i++){
        console.log(arrayOfAll[i]);
    }

}
function task4(){
    // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
    // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
    //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
    let arrayOfAll=[1.15,4,'abc',5,'str2',false,'some',132,'str4',2,'hello',true,'str6',null];
    console.log(arrayOfAll);
    console.log('BOOLEAN EL');
    for(let i=0;i<arrayOfAll.length;i++){
        if(typeof arrayOfAll[i]==="boolean"){
            console.log(arrayOfAll[i]);
        }
    }
    console.log('NUMBER');
    for(let i=0;i<arrayOfAll.length;i++){
        if(typeof arrayOfAll[i]==="number"){
            console.log(arrayOfAll[i]);
        }
    }

    console.log('STRINGS');
    for(let i=0;i<arrayOfAll.length;i++){
        if(typeof arrayOfAll[i]==="string"){
            console.log(arrayOfAll[i]);
        }
    }


}

function task5(){
    //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for(let i=0;i<10;i++){
        console.log(i);
        document.write(i,' ');
    }
    // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for(let i=0;i<100;i++){
        console.log(i);
        document.write(i,' ');
    }
    // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    for(let i=0;i<100;i+=2){
        console.log(i);
        document.write(i,' ');
    }
    //- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    for(let i=1;i<100;i+=2){
        console.log(i);
        document.write(i,' ');
    }
}

function task6(){
//    - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
    for(let i=0;i<2;i++){
        for(let k=0;k<60;k++){
            if(k<10){
                console.log('0',i,':','0',k);
            }
            else {
                console.log('0',i,':',k);
            }
        }
    }
}
function task7(){
    // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
    for(let i=0;i<2;i++){
        for(let k=0;k<60;k++){
            for(let j=0;j<60;j++){
                console.log(i,':',k,':',j);
            }

        }
    }
}
function task8(){
    //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

    for(let i=0;i<10;i++){
        document.write('<div>HI</div>');
    }
    //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    for(let i=0;i<10;i++){
        document.write('<div>HI',' ',i+1,'</div>');
    }
}
function task9(){
    //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
    // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
    let i=0;
    while(i<20){
        document.write('<h1>some text</h1>');
        i++;
    }
    i=0;
    while(i<20){
        document.write('<h1>some text',' ',i+1,'</h1>');
        i++;
    }
}


// task1();
// task2();
// task3();
// task4();
// task5();
// task6();
// task7();
// task8();
task9();