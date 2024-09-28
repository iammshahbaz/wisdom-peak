const express = require("express");
require('dotenv').config();
const { developerRouter } = require("./routes/developerRoutes");
const { projectRouter } = require("./routes/projectRoutes");
const { towerRouter } = require("./routes/towerRoutes");
const { seriesRouter } = require("./routes/seriesRoutes");


const app = express();
app.use(express.json());

app.get("/",async(req,res)=>{
    res.send({msg:"Welcome to Homepage"})
})

app.use("/developers",developerRouter)
app.use("/projects",projectRouter)
app.use("/tower",towerRouter)
app.use("/series",seriesRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});