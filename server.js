const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Note JS CI/CD Project is Working!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});