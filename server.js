import express from 'express';

const app = express();

app.get('/check', (req, res) => {
    try {
        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(500).json({ message: "something went wrong" })
    }
})




app.listen(8003, () => {
    console.log('server is running')
})