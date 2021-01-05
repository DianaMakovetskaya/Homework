//создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

let headings=document.getElementsByTagName('h2');
for(let el of headings){
    console.log(el.textContent);
}
let content=document.getElementById('content');
content.style.position="relative";
let menu=document.createElement('div');
menu.id="menu";
menu.style.position="fixed";
menu.style.width="20%";
menu.style.right="0";
content.appendChild(menu);

for(let i=0;i<headings.length;i++){
    let div=document.createElement('div');
    div.innerText=(i+1)+".  "+headings[i].textContent;
    div.style.marginBottom="10px";
    div.className="menu-context";
    menu.appendChild(div);
}

let menuContext=document.getElementsByClassName('menu-context');
let matches=document.querySelectorAll("#wrap div h2")
for(let el of menuContext){
    el.onclick=()=>{
        let match=find(matches,el);
        let top=match.offsetTop;
        window.scrollTo({
            top:top,
            behavior:"smooth"
        })
    }
}
function find(matches,item){
    for(let i=0;i<matches.length;i++){
       if(item.textContent.includes(matches[i].textContent)){
           return matches[i];
       }
    }
}
