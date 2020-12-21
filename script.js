var a = new Date();
const date = document.getElementsByClassName("date-box__date");
date[0].innerHTML= `${a.getMonth()+1}.${a.getUTCDate()} ${a.toString().substring(0,3)}`;
