const express = require('express');
const router=express.Router();

const Contact=require('../models/contact');

//get contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find((err,contacts)=>{
        res.json(contacts);
    })
})

//add contacts
router.post('/contact',(req,res,next)=>{
    let newContact=new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    })
    newContact.save((err,contacts)=>{
        err?res.json({msg:'Failed to save contact'}):res.json({msg:'Contact saved successsfully'});
    })
})

//remove contact 

router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id:req.params._id},(err,result)=>{
        err?res.json(err):res.json(result)
    })
})


module.exports=router;