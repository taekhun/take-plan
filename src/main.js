"use strict"

const checkBox = document.querySelector(".list-box__checkbox");
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

function addList(){
    if(listCount == listMax) return false;     
    // send value
    // console.log(event.currentTarget.document.innerText);
    
    // add list
    listCount++;
    const newItem = listItem.cloneNode(true);
    newItem.querySelector(".list-box__input").value="";
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

function setData(event){

}


function savekey(event){
    const currentId = event.currentTarget.parentNode.id.charAt(5);
    const input = document.querySelector(`#item-${currentId}>.list-box__input`);
    if(event.keyCode == 13)
    {
        if(input.value == "")
        {
            alert("값을 입력하세요.")
        }
        else{
            document.querySelector(`#item-${currentId}>.list-box__input`).innerText = input.value;
            // console.log(input.value);
            addList(); 
        }
    }
}

// function enterkey(event) {
//     if (event.keyCode == 13) {
//         addList(event);
//     }
// }

let toggle = false;

function checkButton(event){
    const currentId = event.currentTarget.parentNode.id
    const checkBtn = document.querySelector(`#${currentId} .material-icons`);

    toggle =!toggle;
    
    if(toggle == true)
    {
        checkBtn.innerText = "check_box";
        checkBtn.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="line-through";
    }
    else 
    {
        checkBtn.innerText = "check_box_outline_blank";
        checkBtn.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="none";
    }
}
