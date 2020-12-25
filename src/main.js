"use strict"

const listBox = document.querySelector(".list-box")
let listCount = localStorage.length;
const COUNT_MAX = 10;

function loadInput(){
    let input = document.querySelector(".input-area").value;
    return input;
}

function addItem(event){
    //Input 받아오기
    let input = loadInput();
    if(event.keyCode == 13)
    {
        document.querySelector(".input-area").value="";
        if(input == "" && !COUNT_MAX)
        {
            alert("값을 입력하세요.");
        }
        else if(listCount != COUNT_MAX)
        {
            listCount++; 
            let item = document.querySelector("#item-base").cloneNode(true);
            item.id=`item-${listCount}`;
            item.style.display="flex";
            item.querySelector(".list-box__input").value=input;
            item.querySelector(".list-box__input").setAttribute("disabled", true);

            setData(item.id, input)
            listBox.appendChild(item);
        }
    }
}

function deleteItem(event){
    const currentId = event.currentTarget.parentNode.parentNode.id;
    let id = Number(currentId.charAt(currentId.length-1));

    for(let i = id+1; i<= listCount; i++)
    {
        document.querySelector(`#item-${i}`).id = `item-${i-1}`;
        localStorage.setItem(`item-${i-1}`, localStorage.getItem(`item-${i}`));
    }
    localStorage.removeItem(`item-${listCount}`);
    listBox.removeChild(document.querySelector(`#item-${id}`));
    
    listCount--;
}

function editItem(event){
    const currentId = event.currentTarget.parentNode.parentNode.id;
    const item = document.querySelector(`#${currentId} .list-box__input`);
    item.removeAttribute("disabled");
    item.focus();
    item.value="";

    item.addEventListener("keyup", ()=>{
        let input = document.querySelector(`#${currentId} .list-box__input`).value; 
        if(window.event.keyCode == 13)
        {
            item.value=input;
            item.setAttribute("disabled", true);
            setData(currentId, input);
        }    
    });
}

//체크박스 체크여부 검사
function isChecked(currentId){
    const obj = JSON.parse(localStorage.getItem(`${currentId}`));
    if(obj.check) 
        return true;
    else 
        return false;
}

function checkToggle(event){
    const currentId = event.currentTarget.parentNode.id;
    const obj = JSON.parse(localStorage.getItem(`${currentId}`));
    const checkButton = document.querySelector(`#${currentId} .material-icons`);
    obj.check=!obj.check;
    
    if(obj.check == true)
    {   
        localStorage.setItem(`${currentId}`,JSON.stringify(obj));
        checkButton.innerText = "check_box";
        checkButton.parentNode.querySelector(".list-box__input").style.textDecoration="line-through";
    }
    else if(obj.check == false)
    {
        localStorage.setItem(`${currentId}`,JSON.stringify(obj));
        checkButton.innerText = "check_box_outline_blank";
        checkButton.parentNode.querySelector(".list-box__input").style.textDecoration="none";
    }
}

function setData(id, value){
    const obj = {
        text : value
    }
    localStorage.setItem(`${id}`, JSON.stringify(obj));
}

function init(){
    //가려주기
    document.querySelector("#item-base").style.display="none";
    
    for(let i = 1; i<=COUNT_MAX; i++)
    {
        let obj = JSON.parse(localStorage.getItem(`item-${i}`));
        let item = document.querySelector("#item-base").cloneNode(true);
        item.id=`item-${i}`;
        item.style.display="flex";
        item.querySelector(".list-box__input").value=obj.text;
        item.querySelector(".list-box__input").setAttribute("disabled", true);
        listBox.appendChild(item);
        
        //checkbox toggle
        const getCheck = JSON.parse(localStorage.getItem(`${item.id}`));
        const checkBox = document.querySelector(`#${item.id} .material-icons`);
        if(getCheck.check == true)
        {   
            localStorage.setItem(`${item.id}`,JSON.stringify(getCheck));
            checkBox.innerText = "check_box";
            checkBox.parentNode.querySelector(".list-box__input").style.textDecoration="line-through";
        }
        else{
            localStorage.setItem(`${item.id}`,JSON.stringify(getCheck));
            checkBox.innerText = "check_box_outline_blank";
            checkBox.parentNode.querySelector(".list-box__input").style.textDecoration="none";
        }
    }
}

init();