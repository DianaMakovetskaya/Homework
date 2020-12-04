//Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.
//
// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

//-----------------------------------------------------CALLBACK---------------------------------------------------------

// function wakeUp(mood,taskWhenReady){
//     console.log("Trying to wake up....");
//     setTimeout(()=>{
//         if(mood==='good'){
//             taskWhenReady(null,'Done!')
//             return ;
//         }
//         taskWhenReady('Oops, i can`t wake up((',null);
//
//     },2000)
// }
//
// function breakfast(isEmpty,cb){
//     console.log("Check the freezer....");
// setTimeout(()=>{
//     if(isEmpty){
//         cb(null,'I found what to eat!');
//         return ;
//     }
//     cb('I can not continue my day without food(((',null);
// },2000)
// }
//
// function washing(isWater,cb){
//     console.log('Checking if there is water....');
//     setTimeout(()=>{
//         if(isWater){
//             cb(null,'I am washing');
//             return ;
//         }
//         cb('There is no water((',null);
//     },2000)
// }
//
// function preparing(time,cb){
//     console.log('I am preparing....');
//     setTimeout(()=>{
//         if(time<=40){
//             cb(null,'I am redy');
//             return ;
//         }
//         cb('I am late',null);
//     },2000)
// }
//
// function studying(homeworkSize,cb){
//     console.log('Now i am studying');
//
//     setTimeout(()=>{
//         if(homeworkSize<10){
//             cb(null,'There are not much homework,I have time for rest');
//             return ;
//         }
//         cb('There are a lot of homework');
//     },2000)
//
//
// }
//
// function goOut(weather,mood,cb){
//     console.log('I am thinking where to go....');
//     setTimeout(()=>{
//         if(weather>13&&mood=='good'){
//             cb(null,'I am ready to go out!!');
//             return ;
//         }
//         cb('i don`t want to go out',null);
//     },2000)
// }
//
// function sleep(energy,cb){
//     console.log('I am going to bed');
//     setTimeout(()=>{
//         if(energy<10){
//             cb(null,'I am sleeping  zzzz');
//             return ;
//         }
//         cb('I can`t fall asleep((');
//     },2000)
//
//
// }
//
// wakeUp('good',(err,msg)=>{
//     if(err){
//         console.log(err);
//         return ;
//     }
//     console.log(msg);
//
//     breakfast(true,(err,msg)=>{
//         if(err){
//             console.log(err);
//             return ;
//         }
//         console.log(msg);
//
//         washing(true,(err,msg)=>{
//             if(err){
//                 console.log(err);
//                 return ;
//             }
//             console.log(msg);
//
//             preparing(49,(err,msg)=> {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 console.log(msg);
//                 studying(8,(err,msg)=> {
//                     if (err) {
//                         console.log(err);
//                         return;
//                     }
//                     console.log(msg);
//
//                     goOut(15,'good',(err,msg)=>{
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }
//                         console.log(msg);
//
//                         sleep(9,(err,msg)=>{
//                             if (err) {
//                                 console.log(err);
//                                 return;
//                             }
//                             console.log(msg);
//
//                         })
//                     })
//                 })
//             })
//
//         })
//
//
//     })
//
// })


//----------------------------------------------------------PROMISE-----------------------------------------------------
// function wakeUp(mood){
//     return new Promise((resolve, reject) => {
//         console.log("Trying to wake up....");
//         setTimeout(()=>{
//             if(mood==='good'){
//                 resolve('Done!')
//             }
//             reject('Oops, i can`t wake up((');
//
//         },2000)
//     })
//
// }
//
// function breakfast(isEmpty){
//     return new Promise((resolve, reject) => {
//         console.log("Check the freezer....");
//         setTimeout(()=>{
//             if(isEmpty){
//                 resolve('I found what to eat!');
//
//             }
//             reject('I can not continue my day without food(((');
//         },2000)
//     })
//
// }
//
// function washing(isWater){
//     return new Promise((resolve, reject) => {
//         console.log('Checking if there is water....');
//         setTimeout(()=>{
//             if(isWater){
//                 resolve('I am washing');
//             }
//             reject('There is no water((');
//         },2000)
//     })
//
// }
//
// function preparing(time){
//     return new Promise((resolve, reject) => {
//         console.log('I am preparing....');
//         setTimeout(()=>{
//             if(time<=40){
//                 resolve('I am redy');
//             }
//             reject('I am late');
//         },2000)
//     })
//
//
// }
//
// function studying(homeworkSize){
//     return new Promise((resolve, reject) => {
//         console.log('Now i am studying');
//
//         setTimeout(()=>{
//             if(homeworkSize<10){
//                 resolve('There are not much homework,I have time for rest');
//             }
//             reject('There are a lot of homework');
//         },2000)
//     })
//
// }
//
// function goOut(weather,mood){
//     return new Promise((resolve, reject) => {
//         console.log('I am thinking where to go....');
//         setTimeout(()=>{
//             if(weather>13&&mood=='good'){
//                 resolve('I am ready to go out!!');
//             }
//             reject('i don`t want to go out');
//         },2000)
//
//     })
// }
//
// function sleep(energy){
//     return new Promise((resolve, reject) => {
//         console.log('I am going to bed');
//         setTimeout(()=>{
//             if(energy<10){
//                 resolve('I am sleeping  zzzz');
//             }
//             reject('I can`t fall asleep((');
//         },2000)
//     })
//
// }
//
// wakeUp('good').then((msg) => {
//     console.log(msg);
//     return breakfast(true);
// })
//     .then(msg => {
//         console.log(msg);
//         return washing(true);
//     })
//     .then(msg => {
//         console.log(msg);
//         return preparing(49);
//     })
//     .then(msg => {
//         console.log(msg);
//         return studying(9);
//     })
//     .then(msg => {
//         console.log(msg);
//         return goOut(14,'good');
//     })
//     .then(msg => {
//         console.log(msg);
//         return sleep(3);
//     })

