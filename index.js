const express = require("express")

// create server
const app = express()

// use middleware to parse body
app.use(express.json())

// use url encoder
app.use(express.urlencoded({ extended: false }))


// create and store products data
const records = [
    { id: 1, title: 'record 1', 'artist': 'artist 1', 'year': 2020, 'imgCover': 'https://cdn.pixabay.com/photo/2015/12/27/05/48/turntable-1109588_960_720.jpg', 'price': 9.99 },
    { id: 2, title: 'record 2', 'artist': 'artist 2', 'year': 2015, 'imgCover': 'https://cdn.pixabay.com/photo/2019/03/08/21/13/record-4043223__340.jpg', 'price': 5.99 },
    { id: 3, title: 'record 3', 'artist': 'artist 3', 'year': 2000, 'imgCover': 'https://cdn.pixabay.com/photo/2016/06/12/13/48/ghettoblaster-1452077__340.jpg', 'price': 3.99 }
]

// get / read ============================================

// create routes / implement endpoint ==================

// root / start point
app.get('/', (req, res) => {
    res.send('Hello')
})

// get all records / products
app.get('/api/records', (req, res) => {
    res.send(records)
})

// get one record / product
app.get('/api/records/:id', (req, res) => {
    // res.send(req.params.id)
    const record = records.find(record => record.id === parseInt(req.params.id))
    if (!record) {
        // status code 404 not found
        res.status(404).send('The record with the given ID was not found.')
    }
    res.send(record)
})


// post / add  ============================================

// add new record / product
app.post('/api/records/', (req, res) => {
    // input validation
    if (!req.body.title || req.body.title.length < 3) {
        // 404 bad request
        res.status(400).send('The title is required and should be minium 3 characters.')
    }

    const record = {
        id: records.length + 1,
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        imgCover: req.body.imgCover,
        price: req.body.price
    }

    records.push(record)
    // return object to the client
    res.send(record)
})


// listen server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})
