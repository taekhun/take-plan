"use strict"

const checkBox = document.querySelector(".list-box__checkbox > .material-icons");
const listBox = document.querySelector(".list-box")
const listItem = document.querySelector(".list-box__item");
const listInput = document.querySelector(".list-box__input");
const delBtn = document.querySelector(".list-box__button--delete");
const editBtn = document.querySelector(".list-box__button--edit");
const dateBox = document.querySelector('.date-box__date');

// 날짜 불러오기
const a = new Date();
dateBox.innerHTML= `${a.getMonth()+1}.${a.getUTCDate()} ${a.toString().substring(0,3)}`;
dateBox.style.fontSize="24px";

// ListBox에 new item 추가
let listCount = 1;
const listMax = 5;

function addList(event){
    if(listCount == listMax) return false;     
    // send value
    
    localStorage.setItem(listCount, listInput.value);

    listCount++;
    // add list
    const newItem = listItem.cloneNode(true);
    // newItem.querySelector(".list-box__text").value="";
    newItem.id = `item-${listCount}`;
    listBox.appendChild(newItem);
}

function deleteList(event){
    let currentId = event.currentTarget.parentNode.parentNode.id.charAt(5);
    currentId = Number(currentId);
    console.log(currentId);

    for(let i = currentId+1; i<= listCount; i++)
    {
        document.querySelector(`#item-${i}`).id = `item-${i-1}`;
    }
    listBox.removeChild(document.querySelector(`#item-${currentId}`));
    listCount--;
}

function displayItem(event){
    console.log(localStorage.getItem(1));
}

displayItem(event);

// checkBox.addEventListenter('click', ()=>{
//     console.log("HELLO");
// });
