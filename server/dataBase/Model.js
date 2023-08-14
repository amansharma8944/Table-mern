import mongoose from "mongoose"

const schema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Phone:{type:Number},
    Hobby:{type:String}
})


const modelofdata=mongoose.model("dataOfList",schema);
export default modelofdata;