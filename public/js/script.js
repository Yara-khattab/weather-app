const btn=document.getElementById("btn")
const info=document.getElementsByClassName("info")
const sniper=document.getElementById("sniper")
const name=document.getElementById("country")
const latitude=document.getElementById("latit")
const longt=document.getElementById("longt")
const temp=document.getElementById("temp")
const countryname=document.getElementById("countryname")
btn.addEventListener("click",()=>{
    sniper.style.display="block"
    fetch("/weather?country="+countryname.value)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        sniper.style.display="none"
        if(data.error){
            alert(data.error)
            for(let i=0;i<info.length;i++) info[i].style.display="none"
            return
        }
    for(let i=0;i<info.length;i++) info[i].style.display="flex"
    name.innerHTML=data.Location
    latitude.innerHTML=data.Latitude
    longt.innerHTML=data.Longitude
    temp.innerHTML=data.Temperature+"°C"
    })
    countryname.value=""
})

