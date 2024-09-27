const express = require("express")
const db = require('../firebaseConfig');
const towerRouter = express.Router();

//create

towerRouter.post("/",async(req,res)=>{
    try {
        const towerData = req.body;
        const newtower = await towerCollection.add(towerData);
        res.send({id:newtower.id , ...newtower})
    } catch (error) {
       res.send(error) 
    }
})

//get
towerRouter.get("/",async(req,res)=>{
    try {
        const alltower = await towerCollection.get();
        const towers = alltower.docs.map(doc =>({id:doc.id , ...doc.data()}));
        res.send(towers)
    } catch (error) {
        res.send(error)
    }
})

//update

towerRouter.patch("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const towerData = req.body;
        await towerCollection.doc(id).update(towerData);
        res.send('tower updated successfully');
      } catch (error) {
        res.send('Error updating tower: ' + error.message);
      }
})

//delete

towerRouter.delete("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        await towerCollection.doc(id).delete();
        res.send('tower deleted successfully');
      } catch (error) {
        res.send('Error deleting tower: ' + error.message);
      }
})

module.exports = {towerRouter}