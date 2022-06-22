
const app = require('express')();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello");
})

app.listen(port,(req, res) => {
    console.log(`App is running on http://localhost:${port}`);
})