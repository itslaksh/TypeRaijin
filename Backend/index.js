import express from "express";
import dotenv from "dotenv";
const app = express()

dotenv.config();

const PORT = process.env.PORT || 4003;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})