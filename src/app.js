const express=require("express")
const app=express()
const path=require("path")
const x=path.join(__dirname,"../public")
const port=process.env.port||3000
app.use(express.static(x))
app.listen(port, () => {
    console.log("Server is running")
})