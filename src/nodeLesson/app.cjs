const express = require("express");
const app = express();
const PORT = 3000;

app.get("/users", (req, res) => {
  res.send("<h3>This is users route</h3>");
});

app.listen(PORT, ()=> {
    console.log(
        
    )
})