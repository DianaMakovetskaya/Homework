//отримує текст з параграфа з id "content"
let contentText=document.getElementById("content");
console.log(contentText.textContent);

//отримує текст з блоку з id "rules"
let rulesText=document.getElementById("rules");
console.log(rulesText.textContent);

//- замініть текст параграфа з id 'content' на будь-який інший
contentText.textContent='sdfghjkl'

//- замініть текст параграфа з id 'rules' на будь-який інший
rulesText.textContent='lalala'

let all=document.querySelectorAll('*');
for(const allEl of all){
    // - змініть кожному елементу колір тексту на синій
    allEl.style.color='blue';

    //- змініть кожному елементу колір фону на червоний
    allEl.style.backgroundColor="#AA0000";
}

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules=document.getElementById("rules").classList;
console.log(rules);

//- отримати всі елементи з класом fc_rules
let fc_rules=document.getElementsByClassName('fc_rules');

//- поміняти колір тексту у всіх елементів fc_rules на червоний
for(const fc_rulesEl of fc_rules){
    fc_rulesEl.style.color='red';
}