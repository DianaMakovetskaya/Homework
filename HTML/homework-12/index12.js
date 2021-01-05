// -Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// text=document.getElementById('textArea');
// text.innerText=localStorage.getItem('text');
//
// btn=document.getElementById('btn');
// btn.onclick=()=>{
//     localStorage.setItem('text:',text.value);
// }


//----------------------------------------------------------------------------------------------------------------------
//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.

// text=document.getElementById('MyFormText');
// textArea=document.getElementById('textArea2');
// radio=document.getElementById('MyFormRadio');
// checkbox=document.getElementById('MyFormCheckbox');
//
//
// btn=document.getElementById('btn2');
// btn.onclick=()=>{
//
//     localStorage.setItem('text',text.value);
//     localStorage.setItem('textArea2',textArea.value);
//     localStorage.setItem('radio',radio.checked);
//     localStorage.setItem('checkbox',checkbox.checked);
//
// }
// text.value=localStorage.getItem('text')
// textArea.value=localStorage.getItem('textArea2')
//
// if(localStorage.getItem('radio')==='true'){
//     radio.setAttribute('checked','checked');
// }
// if(localStorage.getItem('checkbox')==='true'){
//     checkbox.setAttribute('checked','checked');
// }


//----------------------------------------------------------------------------------------------------------------------
//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let textArray=[];
// let textArea=document.getElementById('textArea3');
// let btnSave=document.getElementById('save');
//
// let btnBack = document.createElement('a');
// let btnForward = document.createElement('a');
//
// btnBack.innerHTML = "&#10094;";
// btnBack.style.width = "100%";
// btnBack.style.fontSize = "20px";
//
// btnForward.innerHTML = "&#10095;";
// btnForward.style.width = "100%";
// btnForward.style.fontSize = "20px";
//
// document.body.appendChild(btnBack);
// document.body.appendChild(btnForward);
//
//
// btnSave.addEventListener("click", ev => {
//     textArray.push(textArea.value)
//     localStorage.setItem('history',JSON.stringify(textArray));
//     ev.preventDefault();
// })
//
// btnBack.onclick=()=>{
//     let array = JSON.parse(localStorage.getItem('history'));
//     let index=array.indexOf(textArea.value);
//     if(array[index-1]!=undefined){
//         textArea.value=array[index-1];
//     }
// }
// btnForward.onclick=()=>{
//     let array=JSON.parse(localStorage.getItem('history'));
//     let index=array.indexOf(textArea.value);
//     if(array[index+1]!=undefined){    textArea.value=array[index+1];
//     }
//
// }



//----------------------------------------------------------------------------------------------------------------------
//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let add=document.getElementById('ADD');
let personInfo=[];
let i=0;
let div,form,name,number,birthday,mail,company,otdel;
add.onclick=()=>{
    user={
        id:i,
        name:document.forms.MyForm4.name.value,
        number:document.forms.MyForm4.num.value,
        birthday:document.forms.MyForm4.birthday.value,
        mail:document.forms.MyForm4.mail.value,
        company:document.forms.MyForm4.company.value,
        otdel:document.forms.MyForm4.otdel.value
    }

    personInfo.push(user);
    localStorage.setItem('users',JSON.stringify(personInfo));

    createDiv();

    let form=document.createElement('form');
    let name=document.createElement('input');
    name.type='text';
    let number=document.createElement('input');
    number.type='text';
    let birthday=document.createElement('input');
    birthday.type='text';
    let mail=document.createElement('input');
    mail.type='text';
    let company=document.createElement('input');
    company.type='text';

    let otdel=document.createElement('input');
    otdel.type='text';

    let edit=document.createElement('button');
    edit.id=i;
    edit.innerText='Edit';
    let deleteUser=document.createElement('button');
    deleteUser.innerText='Delete';
    deleteUser.id=i;
    let save=document.createElement('button');
    save.id=i;
    save.innerText='Save'

    form.appendChild(name);
    form.appendChild(number);
    form.appendChild(birthday);
    form.appendChild(mail);
    form.appendChild(company);
    form.appendChild(otdel);
    form.appendChild(save)
    form.style.display='none';

    div.appendChild(edit)
    div.appendChild(deleteUser)
    div.appendChild(form);
    document.body.appendChild(div);
    i++;

    edit.onclick=()=>{
        let element=searchUser(edit.id);
        name.value=element.name;
        number.value=element.number;
        birthday.value=element.birthday;
        mail.value=element.mail;
        company.value=element.company;
        otdel.value=element.otdel;

        form.style.display='block';
    }

    save.addEventListener("click", ev => {
        form.style.display='none';
        personInfo[save.id].name=name.value;
        personInfo[save.id].number=number.value;
        personInfo[save.id].birthday=birthday.value;
        personInfo[save.id].mail=mail.value;
        personInfo[save.id].company=company.value;
        personInfo[save.id].otdel=otdel.value;
        localStorage.setItem('users',JSON.stringify(personInfo));

        document.querySelectorAll(`#div${save.id} #userName`)[0].innerText="name- "+name.value+" ";
        document.querySelectorAll(`#div${save.id} #userNumber`)[0].innerText="number- "+number.value+" ";
        document.querySelectorAll(`#div${save.id} #userBirtday`)[0].innerText="birthday- "+birthday.value+" ";
        document.querySelectorAll(`#div${save.id} #userMail`)[0].innerText="mail- "+mail.value+" ";
        document.querySelectorAll(`#div${save.id} #userCompany`)[0].innerText="company- "+company.value+" ";
        document.querySelectorAll(`#div${save.id} #userOtdel`)[0].innerText="otdel- "+otdel.value+" ";

        ev.preventDefault();
    })

    deleteUser.onclick=()=>{
        personInfo.splice(deleteUser.id, 1);
        console.log(personInfo);
        localStorage.setItem('users',JSON.stringify(personInfo));
        document.getElementById(`div${deleteUser.id}`).remove();
    }

}

function searchUser(Id){
    let array = JSON.parse(localStorage.getItem('users'));
    let res;
    array.forEach((i) => {
        if (i.id == Id) {
            res=i;
        }
    })
    return res;
}

function createDiv(){
    div=document.createElement('div');
    let userName=document.createElement('div');
    userName.innerText="name- "+user.name+" ";
    userName.id='userName';
    userName.style.marginRight='3px';
    let userNumber=document.createElement('div');
    userNumber.innerText="number- "+user.number+" ";
    userNumber.id='userNumber';
    userNumber.style.marginRight='3px';

    let userBirtday=document.createElement('div');
    userBirtday.innerText="birthday- "+user.birthday+" ";
    userBirtday.id='userBirtday';
    userBirtday.style.marginRight='3px';

    let userMail=document.createElement('div');
    userMail.innerText="mail- "+user.mail+" ";
    userMail.id='userMail';
    userMail.style.marginRight='3px';

    let userCompany=document.createElement('div');
    userCompany.innerText="company- "+user.company+" ";
    userCompany.id='userCompany';
    userCompany.style.marginRight='3px';

    let userOtdel=document.createElement('div');
    userOtdel.innerText="otdel- "+user.otdel+" ";
    userOtdel.id='userOtdel';
    userOtdel.style.marginRight='3px';


    div.appendChild(userName);
    div.appendChild(userNumber);
    div.appendChild(userBirtday);
    div.appendChild(userMail);
    div.appendChild(userCompany);
    div.appendChild(userOtdel);


    div.style.display='flex';
    div.className='person';
    div.id='div'+i;
}


