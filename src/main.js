"use strict"

const checkBox = document.querySelector(".list-box__checkbox");
const listBox = document.querySelector(".list-box")
const dateBox = document.querySelector('.date-box__date');

// 날짜 불러오기
let today = new Date();
dateBox.innerHTML= `${today.getMonth()+1}.${today.getUTCDate()} ${today.toString().substring(0,3)}`;
dateBox.style.fontSize="24px";

let date = Number(`${today.getMonth()+1}${today.getUTCDate()}`);
//to save at localstorage

// ListBox에 new item 추가
let listCount = 0;
const listMax = 5;

function addItem(event){
    //Input 받아오기
    let input = document.querySelector(".input-area").value;
    if(event.keyCode == 13)
    {
        document.querySelector(".input-area").value="";
        if(input == "")
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
            
            // sendData(currentId, input.value);
            // // addList(); 
        }
    }
}

function deleteItem(event){

}

function editItem(event){

}

function isChecked(event){
    const currentId = event.currentTarget.parentNode.id;
    const obj = JSON.parse(localStorage.getItem(`${currentId}`));

    obj.check =! obj.check;

    if(obj.check == false)
    {   
        localStorage.setItem(`${currentId}`,JSON.stringify(obj));
        document.querySelector(`#${currentId} .material-icons`).innerText = "check_box";
    }
    else if(obj.check == true)
    {
        localStorage.setItem(`${currentId}`,JSON.stringify(obj));
        document.querySelector(`#${currentId} .material-icons`).innerText = "check_box_outline_blank";
    }
}

function setData(id, value){
    const obj = {
        text : value,
        check : false
    }
    localStorage.setItem(`${id}`, JSON.stringify(obj));
}


function init(){
    document.querySelector("#item-base").style.display="none";
    //가려주긔

}

init();





// 

// function addList(){
//     if(listCount == listMax) return false;     
//     // add list
//     listCount++;
//     // localStorage.setItem("listMax", `${listMax}`);
//     // localStorage.setItem("listCount", `${listCount}`);
    
//     const newItem = listItem.cloneNode(true);
//     newItem.querySelector(".list-box__input").value="";
//     newItem.querySelector(".list-box__input").innerText="";   
//     newItem.id = `item-${listCount}`;
//     listBox.appendChild(newItem);

//     document.querySelector(`#item-${listCount}>.list-box__input`).removeAttribute("disabled");
//     document.querySelector(`#item-${listCount}>.list-box__input`).focus();
//     //다음 칸으로 넘어가기
// }

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

// //send data to Local Storage
// function sendData(id, data){
//     // console.log(id, data);
//     localStorage.setItem(`${id}`, `${data}`);
// }


// function init(){
//     // document.querySelector("#item-1").style.visiblity="hidden";
//     let a = new Array();
//     for(let i=1 ; i<=5; i++)
//     {
//         a[i]=localStorage.getItem(`${i}`);
//         if(a[i]!=null)
//         {
//             if(i==1)
//             {
//                 document.querySelector("#item-1>.list-box__input").value=a[i];
//             }
//             else {
//                 const item = listItem.cloneNode(true);
//                 item.querySelector(".list-box__input").value=a[i];
//                 item.id = `item-${i}`;
//                 listBox.appendChild(item);
//                 document.querySelector(`#item-${i}>.list-box__input`).removeAttribute("disabled");
//                 // document.querySelector(`#item-${i}>.list-box__input`).focus();  
//                 listCount++;    
//             }
                  
//         }
//     }
    
    

//     // console.log(a);    
// }

// init();

// let toggle = false;
// // 수정해야함
// function checkButton(event){
//     const currentId = event.currentTarget.parentNode.id.charAt(5);
//     const checkBtn = document.querySelector(`#item-${currentId} .material-icons`);

//     toggle =!toggle;
    
//     if(toggle == true)
//     {
//         checkBtn.innerText = "check_box";
//         checkBtn.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="line-through";
//     }
//     else 
//     {
//         checkBtn.innerText = "check_box_outline_blank";
//         checkBtn.parentNode.parentNode.querySelector(".list-box__input").style.textDecoration="none";
//     }
// }
