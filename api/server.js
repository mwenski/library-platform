const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("Server is working!");
});

app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}`);
});