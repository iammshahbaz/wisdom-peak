const express = require("express")
const db = require('../firebaseConfig');
const developerCollection = require("../model/developerModel");
const developerRouter = express.Router();

//create

developerRouter.post("/",async(req,res)=>{
    try {
        const developerData = req.body;
        const newDeveloper = await developerCollection.add(developerData);
        res.send({id:newDeveloper.id , ...newDeveloper})
    } catch (error) {
       res.send(error) 
    }
})

//get
developerRouter.get("/",async(req,res)=>{
    try {
        const user = await developerCollection.get();
        const developers = user.docs.map(doc =>({id:doc.id , ...doc.data()}));
        res.send(developers)
    } catch (error) {
        res.send(error)
    }
})

//update

developerRouter.patch("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const developerData = req.body;
        await developerCollection.doc(id).update(developerData);
        res.send('Developer updated successfully');
      } catch (error) {
        res.send('Error updating developer: ' + error.message);
      }
})

//delete

developerRouter.delete("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        await developerCollection.doc(id).delete();
        res.send('Developer deleted successfully');
      } catch (error) {
        res.send('Error deleting developer: ' + error.message);
      }
})

module.exports = {developerRouter}