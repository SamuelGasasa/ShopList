const button=document.querySelector('button');
const ul=document.querySelector('ul');
let input=document.querySelector('#item');
function buttonClick(){
const value=input.value;
input.value='';
const newLi=document.createElement('li');
const newSpan=document.createElement('span');
const newButton=document.createElement('button');
newLi.appendChild(newSpan);
newLi.appendChild(newButton);
newSpan.innerText=value;
newButton.innerText='Delete';
ul.appendChild(newLi);
newButton.onclick=function(){
    newLi.remove();
}
input.focus();
}

button.addEventListener('click',buttonClick);