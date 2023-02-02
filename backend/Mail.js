const MailRouter = require('express').Router();
const nodemailer =require('nodemailer');



MailRouter.post('/',async (req,res)=>{

    try{
        
 
        const {value}=req.body
        console.log(value);

        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:"dineshsoftwareengg@gmail.com",
                pass:process.env.GMAIL_PASS
            }
        })
        
        const mail = {
            from:'dineshsoftwareengg@gmail.com',
            to:'dineshvisuwa@gmail.com',
            subject:'Message from client',
            html:`
                <h1>Name:${value.input.name}</h1>
                <h1>Email:${value.input.email}</h1>
                <h1>Address:${value.input.address}</h1>
                <h1>District:${value.input.district}</h1>
                <h1>PhoneNumber:${value.input.phoneNumber}</h1>
                <h1>Postal-Code:${value.input.postalcode}</h1>
                <h2>Order List:${value.orderList}</h2>
                <h2>Count:Shirt${value.count.shirt}</h2>
                <h2>Count:Pant${value.count.pant}</h2>
                <h2>Count:Saree${value.count.saree}</h2>
                <h2>Count:others${value.count.others}</h2>
                <h3>Price:${value.priceList.total}</h3>
                <h3>Location: latitude ${value.location.lat}and Longitude${value.location.long}</h3>
            `
        }
        transport.sendMail(mail,(error,info)=>{
            if(error){
                res.status(400).send(error)
            }
            else{
                res.status(200).send({message:"Email Successfully Send",info})
            }
        })
        transport.close()
    
        return res.status(200).send({message:"Thanks For your Feedback"})
    }
    catch(error){
        res.status(400).send({message:"Kindly Try After Sometimes"})
        console.log(error);
    }

})

module.exports = MailRouter