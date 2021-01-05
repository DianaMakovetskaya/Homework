//Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let inputText=[];
//console.log([...'text'])
let i;
let btn=document.getElementById('Ok');
btn.onclick=()=>{
    i=0;
    document.getElementById('outputText').innerHTML='';
    let text=document.getElementById('inputText').value;
    console.log(text);
    inputText = text.split('');
    type(inputText);
}

function type(arr){
    if(i==arr.length){
        return ;
    }
    let randomNum=Math.random() * (1.0 - 0.1) + 0.1;
    console.log(randomNum);
    setTimeout(()=>{
        document.getElementById('outputText').appendChild(document.createTextNode(arr[i]));
        console.log(arr[i]);
        i++;
        type(arr);
    },randomNum);

}
