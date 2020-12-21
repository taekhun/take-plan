const a = new Date();
const date = document.querySelector('.date-box__date');
date.innerHTML= `${a.getMonth()+1}.${a.getUTCDate()} ${a.toString().substring(0,3)}`;

date.style.fontSize="24px";

const checkbox = document.querySelector(".list-box__checkbox > .material-icons");

checkbox.addEventListenter('click', ()=>{
    checkbox.innerHTML="check_box";
});

// toggle.addEventListener('click', ()=>{
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');


// function checkboxToggle(){
//     document.getElementsByClassName("list-box__checkbox.material-icons").innerHTML =
//     <span class="material-icons">check_box</span>;
// }
