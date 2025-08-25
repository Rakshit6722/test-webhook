import express from 'express'

const app = express()

app.use(express.urlencoded())

app.get("/",(_, res) => res.send("server running"))

app.post("/webhook", (req, res)=> {

    console.log(JSON.stringify(req.body))
    console.log("webhook received")
})




app.listen(3000, () => {
    console.log("Server started")
})

