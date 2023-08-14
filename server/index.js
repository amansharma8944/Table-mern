import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./route/Route.js";
import { Connect } from "./dataBase/Connect.js";
import modelofdata from "./dataBase/Model.js";
import * as dotenv from 'dotenv'
dotenv.config()

const app=express();
Connect()
const aji=async ()=>{
    const dd=await modelofdata({Name:"aman",Email:"amandeepahrma@gmail.com",Phone:985855,Hobby:"fdfdfdfdf"})
    await dd.save()
    console.log("dfdf")
}

app.use(cors());
app.use(express())
app.use(bodyParser.json())
app.use("/",router)
app.listen(process.env.PORT||8001,()=>{
    console.log(`hosted on  http://localhost:${8001}`)
})