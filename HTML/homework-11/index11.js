function task1() {
    //- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
    let text = document.getElementById('text');
    text.onmouseover = () => {
        text.style.color = 'red';
    }
    text.onmouseleave = () => {
        text.style.color = 'black';
    }
    text.addEventListener('click', ev => {
        text.style.display = 'none';
    })
}
function task2(){
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let button=document.getElementById('Admit');
button.addEventListener("click", ev => {
    let age=parseInt(document.forms.MyForm.info.value);
    if(age>=18){
        alert('You are 18!');
        return ;
    }
    alert('Sorry, you are not 18');
})
}

function task3(){
    //- Создайте меню, которое раскрывается/сворачивается при клике

let button_wrap=document.getElementById('button-wrap');
let menu_item=document.getElementById('menu_item')
console.log(menu_item);
button_wrap.addEventListener("click", ev => {
    if(menu_item.style.display!='none'){
        menu_item.style.display='none';
        return;
    }
    menu_item.style.display='block'
})
}
function task4_5(){
    //- Створити функцію, яка генерує таблицю.
    function createTable(row,column,whereToPate){
        let div=document.getElementById(whereToPate);
        div.style.display='flex';
        div.style.flexWrap='wrap';
        for(let i=0;i<row;i++){
            for(let k=0;k<column;k++){
                let el=document.createElement('div');
                el.style.border="thick solid #0000FF";
                el.style.boxSizing='border-box';
                el.style.width= div.offsetWidth/column+'px';
                el.style.height=div.offsetHeight/row+'px';

                div.appendChild(el);
            }
        }
    }
// createTable(6,6,'table');
    //- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
    let button=document.getElementById('MyForm2_OK');
       button.addEventListener("click", ev => {
           let column=document.forms.MyForm2.column.value;
           let row=document.forms.MyForm2.row.value;
           let whereToPaste=document.forms.MyForm2.whereToPaste.value;
           createTable(row,column,whereToPaste);
       })

}

function task6(){
    //- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let badWords=['damn','shit','bitch','fuck'];
let button=document.getElementById('MyForm3_OK');
button.addEventListener("click", ev => {
    let word=document.forms.MyForm3.bad_word.value;
    if(badWords.includes(word)){
        alert('Please,do not use this word!')
    }
    ev.preventDefault();
})

}

function task7(){
    //- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

let badWords=['damn','shit','bitch','fuck'];
let button=document.getElementById('MyForm3_OK');
button.addEventListener("click", ev => {
    let rech =document.forms.MyForm3.bad_word.value;
    for(let i=0;i<badWords.length;i++){
        if(rech.includes(badWords[i])){
            alert(`Please,do not use ${badWords[i]}!`)
        }
    }

    ev.preventDefault();
})
}

function task8(){
    //-- взять массив пользователей

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];

let button=document.getElementById('MyForm4_OK');
button.addEventListener("click", ev => {
    let check1=document.forms.MyForm4.check1;
    let check2=document.forms.MyForm4.check2;
    let check3=document.forms.MyForm4.check3;
    if(check1.checked==true){
        usersWithAddress=usersWithAddress.filter(value => {
            if(value.status==false){
                return value;
            }
        })
    }
    if(check2.checked==true){
        usersWithAddress=usersWithAddress.filter(value => {
            if(value.age>=29){
                return value;
            }
        })
    }
    if(check3.checked==true){

        usersWithAddress=usersWithAddress.filter(value => {
            if(value.address.city=='Kyiv'){
                return value;
            }
        })
    }
    for(let i=0;i<usersWithAddress.length;i++){
        let div=document.createElement('div');
        div.innerText=`${usersWithAddress[i].name},${usersWithAddress[i].age},${usersWithAddress[i].status},${usersWithAddress[i].address.city}`
        document.body.appendChild(div);
    }
    document.body.appendChild(document.createElement("br"));

    ev.preventDefault();
})
}

    //- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
    let slideIndex = 0;
    showSlides(slideIndex);

    function nextSlide() {
        showSlides(slideIndex += 1);
    }

    function previousSlide() {
        showSlides(slideIndex -= 1);
    }


    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("item");

        if (n == slides.length) {
            slideIndex = 0
        }
        if (n < 0) {
            slideIndex = slides.length-1
        }

        for (let slide of slides) {
            slide.style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }




    //*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
    // при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
    // НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
    // Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

    function childNodes(DOM_element, i = -1, k = 0) {
        let element = document.getElementById(DOM_element);
        // console.log(element);

        if (i != -1) {
            console.log(element.children[i]);
            console.log(i);
            if (element.children[i].children.length != 0) {
                console.log(element.children[i].children[0])
            }
        }

        let btnBack = document.createElement('a');
        let btnForward = document.createElement('a');

        btnBack.innerHTML = "&#10094;";
        btnBack.style.width = "100%";
        btnBack.style.fontSize = "20px";

        btnForward.innerHTML = "&#10095;";
        btnForward.style.width = "100%";
        btnForward.style.fontSize = "20px";

        document.body.appendChild(btnBack);
        document.body.appendChild(btnForward);

        btnForward.onclick = () => {
            childNodes(DOM_element, i += 1);
        }
        btnBack.onclick = () => {
            childNodes(DOM_element, i -= 1);

        }

    }

    childNodes('wrap');


