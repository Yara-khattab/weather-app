const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const port=process.env.PORT||3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));
app.set('view engine','hbs')
app.get('/',(req,res)=>{
    res.render('index',{
        title:"serr"
    })
})
app.use("/fa", express.static("node_modules/@fortawesome/fontawesome-free"));
const forecast=require("./data/forecast")
app.get("/weather",(req,res)=>{
    if(!req.query.country){
        return res.send({
            error:"Please enter a country"
        })
    }
    forecast(req.query.country,(error,data)=>{
        if(error){
            return res.send({error:error})
        }
        res.send(data)
    })
})
