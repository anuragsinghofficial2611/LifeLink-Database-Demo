const express = require('express')
const noteModel = require('./models/note.model')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        console.log('get request made')
        const notes = await noteModel.find()
        res.json(notes)
    } catch (error) {
        console.error('GET / error:', error)
        res.status(500).json({ error: error.message })
    }
})
app.post('/add', async (req, res) => {
    try {
        console.log(req.body)
        await noteModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            bloodgroup: req.body.bloodgroup,
            phone: req.body.phone,
            location: req.body.location,
            isverified: req.body.isverified,
            availablity: req.body.availablity,
            donationcount: req.body.donationcount
        })
        res.send('data recieved')
    } catch (error) {
        console.error('POST /add error:', error)
        res.status(500).json({ error: error.message })
    }
})
app.delete('/delete/:id', async(req,res) => {
    try {
        const id = req.params.id
        await noteModel.findByIdAndDelete(id)
        res.send("data deleted for your requested id")
    } catch (error) {
        console.error('DELETE /delete/:id error:', error)
        res.status(500).json({ error: error.message })
    }
})
app.put('/update/:id', async(req,res) => {
    try {
        const id = req.params.id
        await noteModel.findByIdAndUpdate(id,{
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            bloodgroup: req.body.bloodgroup,
            phone: req.body.phone,
            location: req.body.location,
            isverified: req.body.isverified,
            availablity: req.body.availablity,
            donationcount: req.body.donationcount
        })
        console.log("data update for requested id")
        res.send("data updated for your requested id")
    } catch (error) {        console.error('PUT /update/:id error:', error)
        res.status(500).json({ error: error.message
        })
    }
})

module.exports = app;