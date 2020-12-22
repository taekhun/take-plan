"use strict"

const checkBox = document.querySelector(".list-box__checkbox > .material-icons");
const listBox = document.querySelector(".list-box")
const listItem = document.querySelector(".list-box__item");
const listInput = document.querySelector(".list-box__input");
const delBtn = document.querySelector("list-box__button--delete");
const editBtn = document.querySelector("list-box__button--edit");

const dateBox = document.querySelector('.date-box__date');


// 날짜 불러오기
const a = new Date();
dateBox.innerHTML= `${a.getMonth()+1}.${a.getUTCDate()} ${a.toString().substring(0,3)}`;
dateBox.style.fontSize="24px";

// ListBox에 new item 추가
let listCount = 1;
const listMax = 5;

listBox.addEventListener("focusout", () => addList());


function addList( ){
    if(listCount == listMax) return false;     
    const newItem = listItem.cloneNode(true);
    listBox.appendChild(newItem);
    listCount++;
}

function deleteList(){
    
}


// checkBox.addEventListenter('click', ()=>{
//     console.log("HELLO");
// });
