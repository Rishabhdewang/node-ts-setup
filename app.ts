import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello  World")
})

app.get('/api/heath-check', (req,res) => {
    res.status(200).send("ok");
})

app.listen(3000, () => {
    console.log("server is Running on PORT: 3000")
})