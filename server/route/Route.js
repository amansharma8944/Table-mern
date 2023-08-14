import express from "express";
import * as controller from "../controller/Controller.js" 
const router=express.Router()


router.get("/",controller.first)


router.post("/getData/:index/:Email/:Name/:Phone",controller.getdataForUpdate)
router.post("/sendMail",controller.sendMaill)
router.post("/saveUser",controller.saveUserDetail)


router.delete("/delete/:Name/:Email/:Phone/:Hobby",controller.deleteReq)

export default router;