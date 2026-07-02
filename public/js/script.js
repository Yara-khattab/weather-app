const btn=document.getElementById("btn")
const info=document.getElementsByClassName("info")
btn.addEventListener("click",()=>{
    for(let i=0;i<info.length;i++) info[i].style.display="block"
})