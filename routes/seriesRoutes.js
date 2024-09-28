const express = require("express")
const db = require('../firebaseConfig');
const seriesCollection = require("../model/seriesModel");
const seriesRouter = express.Router();

//create

seriesRouter.post("/",async(req,res)=>{
    try {
        const seriesData = req.body;
        const newseries = await seriesCollection.add(seriesData);
        res.send({id:newseries.id , ...newseries})
    } catch (error) {
       res.send(error) 
    }
})

//get
seriesRouter.get("/",async(req,res)=>{
    try {
        const allseries = await seriesCollection.get();
        const seriess = allseries.docs.map(doc =>({id:doc.id , ...doc.data()}));
        res.send(seriess)
    } catch (error) {
        res.send(error)
    }
})

//update

seriesRouter.patch("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const seriesData = req.body;
        await seriesCollection.doc(id).update(seriesData);
        res.send('series updated successfully');
      } catch (error) {
        res.send('Error updating series: ' + error.message);
      }
})

//delete

seriesRouter.delete("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        await seriesCollection.doc(id).delete();
        res.send('series deleted successfully');
      } catch (error) {
        res.send('Error deleting series: ' + error.message);
      }
})

module.exports = {seriesRouter}