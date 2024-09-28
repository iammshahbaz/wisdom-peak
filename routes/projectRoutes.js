const express = require("express")
const db = require('../firebaseConfig');
const projectCollection = require("../model/projectModel");
const projectRouter = express.Router();

//create

projectRouter.post("/",async(req,res)=>{
    try {
        const projectData = req.body;
        const newproject = await projectCollection.add(projectData);
        res.send({id: newproject.id , ...newproject});

    } catch (error) {
       res.send(error) 
    }
})

//get
projectRouter.get("/",async(req,res)=>{
    try {
        const allProject = await projectCollection.get();
        const projects = allProject.docs.map(doc =>({id:doc.id , ...doc.data()}));
        res.send(projects)
    } catch (error) {
        res.send(error)
    }
})

//update

projectRouter.patch("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const projectData = req.body;
        await projectCollection.doc(id).update(projectData);
        res.send('project updated successfully');
      } catch (error) {
        res.send('Error updating project: ' + error.message);
      }
})

//delete

projectRouter.delete("/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        await projectCollection.doc(id).delete();
        res.send('project deleted successfully');
      } catch (error) {
        res.send('Error deleting project: ' + error.message);
      }
})

module.exports = {projectRouter}