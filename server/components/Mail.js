import nodemailer from "nodemailer";
const SendMail = (dat) => {
    // console.log(mail)
    console.log(dat)
    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {

            user: "amandeepsharma8944@gmail.com",
            pass: 'bsuakosygbbemgpe'
        }
    });
    let detailofuserString=""

    for (let index = 0; index < dat.length; index++) {

        detailofuserString+=`USER ${index+1} ------ \n \n`
        detailofuserString+=`Name :${dat[index].Name}, Email:${dat[index].Email} , Phone:${dat[index].Phone} , Hobby:${dat[index].Hobby}\n \n`
       
        
        
    }
    let details = {
        from: "amandeepsharma8944@gmail.com",
        to: `info@redpositive.in`,
        subject: "Data of selected user",
        text:detailofuserString
    }



mailTransporter.sendMail(details, (err => {

    if (err) {
        console.log(err)
    }
    else {
        console.log("email sent")
    }
}))



}
export default SendMail;