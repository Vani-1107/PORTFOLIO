// const express = require("express");
const form = require('../models/Form');

exports.FormHandler = async(req,res) => {
    try{
        const {name,email,subject,message} = req.body;
        const data = await form.create({
            name,
            email,
            subject,
            message
        });
        res.status(200).json({
            success:true,
            data,
            message:"data saved",
        });
    }
    catch(err){
        console.log("error in saving data");
        console.log("error : ",err);
    }
}