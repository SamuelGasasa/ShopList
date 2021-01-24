const button=document.querySelector('button');
const ul=document.querySelector('ul');
let input=document.querySelector('#item');
function buttonClick(){
const value=input.value;
input.value='';
let newLi=document.createElement('li');
let newSpan=document.createElement('span');
let newButton=document.createElement('button');
newLi.appendChild(newSpan);
newLi.appendChild(newButton);
newSpan.textContent=value;
newButton.textContent='Delete';
ul.appendChild(newLi);
newButton.onclick=function(){
    newLi.remove();
}
input.focus();
}

button.addEventListener('click',buttonClick);