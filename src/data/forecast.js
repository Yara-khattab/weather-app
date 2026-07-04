const request=require("request")
const forecast=(country,callback)=>{
    const url="http://api.weatherapi.com/v1/current.json?key=f8ee7f5d01c44c87a84122201262906&q="+country+"&aqi=no"
    request({url, json:true},(error,response)=>{
     if(error){
        callback("sorry can't connect with server",undefined)
     }else if(response.body.error){
      callback(response.body.error.message,undefined)
     }else{
       const data=response.body
       const dataa={
                   Location:data.location.name,
                   Condition:data.current.condition.text,
                   Temperature:data.current.temp_c,
                   Latitude: data.location.lat,
                   Longitude: data.location.lon}
         callback(undefined, dataa)
    }
   })
}
module.exports=forecast
