//GET => READ
//POST => CREATE
//PUT => MODIFY/EDIT
//DELETE => DELETE


const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const{firstName,lastName} = req.body;
        let user = {};
        user.firstName = firstName;
        user.lastName = lastName;
        const getUser = await User.find({})
        res.send(getUser)
    } catch (error) {
        res.status(500)
    }
});   

route.post('/',async(req,res)=>{
    try {
    const{firstName,lastName} = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
    res.send(userModel)
    } catch (error) {
    res.status(500)
    }       
});


module.exports = route;