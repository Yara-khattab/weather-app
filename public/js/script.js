const btn=document.getElementById("btn")
const info=document.getElementsByClassName("info")
const sniper=document.getElementById("sniper")
btn.addEventListener("click",()=>{
    for(let i=0;i<info.length;i++) info[i].style.display="flex"
    sniper.style.display="block"
})