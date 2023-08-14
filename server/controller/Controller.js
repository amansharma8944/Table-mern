import SendMail from "../components/Mail.js"
import modelofdata from "../dataBase/Model.js"


export const first=async (req,res)=>{

try {
    const data=await modelofdata.find({})
    return res.status(200).send(data)
    // console.log(data)
    
} catch (error) {
    
}

    
}


export const sendMaill=async(req,res)=>{
    // console.log(req.body.dataOfSelectedUser)


    try {
        await SendMail(req.body.dataOfSelectedUser)
        return res.status(200).send("email sent")
    } catch (error) {
        console.log(error)
    }


}


export const saveUserDetail=async (req,res)=>{

// console.log(req.body)

try {
    const statusOfinsert=await modelofdata(req.body.AllInputData)
    await statusOfinsert.save()
    return res.status(200).send("saved user")
    
} catch (error) {
    console.log(error)
}


}


export const getdataForUpdate=async (req,res)=>{

    try {
        const dataforsend =await modelofdata.findOneAndUpdate({Name:req.params.Name,Email:req.params.Email,Phone:req.params.Phone},{Name:req.body.AllInputData.Name,Email:req.body.AllInputData.Email,Phone:req.body.AllInputData.Phone,Hobby:req.body.AllInputData.Hobby})
        return res.status(200).send("updated successfully")
        
    } catch (error) {
        console.log(error)
        
    }
    
    
    
    
}

export const deleteReq=async (req,res)=>{
    
    try {
        
        const dataforsend =await modelofdata.findOneAndDelete({Name:req.params.Name,Email:req.params.Email,Phone:req.params.Phone})
        return res.status(200).send("deleted")
    } catch (error) {
        console.log(error)
        
    }
   

}