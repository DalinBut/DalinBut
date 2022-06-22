
const app = require('express')();
const port = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello");
    // res.json({
    //     posts: [
    //         {title: 'First post'},
    //         {title: 'Second post'}
    //     ]
    // });
})

app.listen(port,(req, res) => {
    console.log(`App is running on http://localhost:${port}`);
})