const express = require('express'),
    mongoose = require("mongoose"),
    bcrypt = require('bcryptjs');
    Ride = require('../../models/rides'),
    Visitor = require('../../models/visitors')
    Purchase = require('../../models/purchases')
    router = new express.Router()


//Create New Visitor
router.post('/register', async (req, res) => {
    console.log(req.body)
    const visitor = new Visitor(req.body.visitor)
    visitor.save().then(() => {
        res.send(visitor)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
})

//Login
router.post('/login', async(req, res) => {
    try{
        console.log(req.body)
        const visitor = req.body.visitor
        console.log(visitor)
        const email = visitor.email
        const password = visitor.password
        const foundVisitor = await Visitor.findOne({email});
        if(!foundVisitor) {
            throw new Error({error: "Invalid login details"});
        }
        const isValidPassword = await bcrypt.compare(password, foundVisitor.password);
        if(!isValidPassword) {
            throw new Error({error: "Invalid login details"});
        }
        const token = await foundVisitor.generateAuthToken()
        res.send({foundVisitor, token})
    } catch(error){
        console.log(error)
        res.status(400).send()
    }
})


//Update Visitor
router.patch('/:email', async (req, res) => {
    const visitor = req.body.visitor
    const email = visitor.email
    const selectedVisitor = await Visitor.findOne({email})
    if(!selectedVisitor){
        return res.status(404).send()
    }else{
        selectedVisitor.firstName = visitor.firstName
        selectedVisitor.lastName = visitor.lastName
        selectedVisitor.address = visitor.address
        selectedVisitor.city = visitor.city
        selectedVisitor.state = visitor.state
        selectedVisitor.zip = visitor.zip
        selectedVisitor.email = visitor.email
        selectedVisitor.password = visitor.password
        selectedVisitor.save()
        res.send(selectedVisitor)
    }
})

//Delete Visitor
router.delete('/:email', async (req, res) => {
    try{
        const deleteVisitor = await Visitor.remove({email:req.params.email})
        res.send(deleteVisitor)
    }catch(error){
        res.status(500).send(error)
    }
})

//Retrieve Visitor Info
router.get('/:email', async (req, res) =>{
    try{
        const getVisitor = await Visitor.findOne({email:req.params.email})
        res.send(getVisitor)
    }catch(error){
        res.status(500).send(error)
    }
})




//Logout


//----------------------------------------------------------------------------------------------------------------------


//Retrieve All Rides -works
router.get("/", async (req, res) => {
    try{
        const rides = await Ride.find({});
        res.send(rides);
    } catch (error) {
        res.status(500).send(error);
    }
})






module.exports = router;