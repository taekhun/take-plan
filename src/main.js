"use strict"

const checkBox = document.querySelector(".list-box__checkbox");
const listBox = document.querySelector(".list-box")
const dateBox = document.querySelector('.date-box__date');

// 날짜 불러오기
let today = new Date();
dateBox.innerHTML= `${today.getMonth()+1}.${today.getDate()} ${today.toString().substring(0,3)}`;
dateBox.style.fontSize="24px";

let date = Number(`${today.getMonth()+1}${today.getDate()}`);
//to save at localstorage. ex)1224

// ListBox에 new item 추가
let listCount = localStorage.length;
const listMax = 5;

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
        if(input == "" && !listMax)
        {
            alert("값을 입력하세요.");
        }
        else if(listCount != listMax)
        {
            listCount++; 
            let item = document.querySelector("#item-base").cloneNode(true);
            item.id=`item-${date}-${listCount}`;
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

}

function editItem(event){
    const currentId = event.currentTarget.parentNode.parentNode.id;
    // isChecked(event);
    const item = document.querySelector(`#${currentId} .list-box__input`)
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
        checkButton.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="line-through";
    }
    else if(obj.check == false)
    {
        localStorage.setItem(`${currentId}`,JSON.stringify(obj));
        checkButton.innerText = "check_box_outline_blank";
        checkButton.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="none";
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
    
    for(let i = 1; i<=listMax; i++)
    {
        let obj = JSON.parse(localStorage.getItem(`item-${date}-${i}`));
        let item = document.querySelector("#item-base").cloneNode(true);
        item.id=`item-${date}-${i}`;
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
            checkBox.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="line-through";
        }
        else{
            localStorage.setItem(`${item.id}`,JSON.stringify(getCheck));
            checkBox.innerText = "check_box_outline_blank";
            checkBox.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="none";
        }
    }
}


init();


// edit, delete, css
// edit=> 체크박스,이탤릭 해제




// function deleteItem(event){
//     let currentId = event.currentTarget.parentNode.parentNode.id.charAt(5);
//     currentId = Number(currentId);

//     if(listCount<=1)
//     {
//         document.querySelector("#item-1>.list-box__input").value="";
//         localStorage.removeItem(`${listCount}`);
//         if(listCount==1) 
//         {
//             listCount--;
//         }
//         return false;
//     }

//     for(let i = currentId+1; i<= listCount; i++)
//     {
//         document.querySelector(`#item-${i}`).id = `item-${i-1}`;
//         localStorage.setItem(`${i-1}`, localStorage.getItem(`${i}`));
//     }
//     localStorage.removeItem(`${listCount}`);
//     listBox.removeChild(document.querySelector(`#item-${currentId}`));
    
//     listCount--;
//     // localStorage.setItem("listCount", `${listCount}`);
// }

// function editItem(event){
//     let currentId = event.currentTarget.parentNode.parentNode.id.charAt(5);
//     console.log(currentId);
//     const target = document.querySelector(`#item-${currentId}>.list-box__input`)
//     target.removeAttribute("disabled");
//     target.focus();
// }