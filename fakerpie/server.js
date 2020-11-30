const express = require("express");
const app = express();
const port = 8000;

app.get("/api", (req,res) => {
    res.json
})

app.listen(port, () => console.log(`running on ${port}!!!!!`));
