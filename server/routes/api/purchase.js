const express = require('express'),
    mongoose = require("mongoose"),
    Visitor = require('../../models/visitors'),
    Purchase = require('../../models/purchases');
    router = new express.Router()

    router.post('/purchase', async (req, res) => {
        console.log(req.body)
        const purchase = new Purchase(req.body.purchase)
        purchase.save().then(() => {
            res.send(purchase)
        }).catch((error) => {
            console.log(error)
            res.send(error)
        })
    })
    
    router.get("/:email", async (req, res) => {
        try{
            const purchases = await Purchase.find({email: req.params.email});
            res.send(purchases);
        } catch (error) {
            res.status(500).send(error);
        }
    })

    router.patch('/:purchaseDate', async (req, res) => {
        const purchaseDate = req.body.date
        const updatedPurchase = await Purchase.findOneAndUpdate({purchaseDate}, {$set:{status: "Canceled"}}, {new: true})
        if(!updatedPurchase){
            return res.status(404).send()
        }else{
            res.send(updatedPurchase)
    }
    })







module.exports = router;