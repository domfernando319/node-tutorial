// Essentially the client emulator

const express = require('express')
const app = express()  // 1. this will intialize our server app
const PORT = 4000

// 10. Add middleware
app.use(express.json())
app.use(express.static('public'))
app.use(require('cors')())

// 2. nodemon will rerun server when changes are made

// 11. temporary database
const db= []

// SCHEDULER
function crossOriginIsolated(ms, fn) {
    async function cb() {
        clearTimeout(timeout)
        await fn()
        let timeout = setTimeout(cb, ms)
    }
}






// 8. *Paths*. wwhat go at end of url in domain. 172.0.0.1/path/api/${dynamicsubdomain} etc

// 3. GET
// 15. Surviving files is default index.html under public folder. in that case, you cant have a GET endpoint
app.get('/', (req, res) => {
    console.log('you have reach the home route: GET')
    // 7. We send requests, we respond to the network request.
    res.status(200).send('<h1>THIS IS CAPITAL</h1><p><i>Nice</i></p>')
})

// 9. Post
app.post('/api/info', (req, res) => {
    const { information } = req.body // 9.1 destructure a request body
    console.log('Post message was ', information)
    db.push(information)
    console.log('DB: ', db)
    res.status(201).json({'message': information})
})



// 12 PUT 
app.put('/api', (req, res) => {
    const { word, banana } = req.query // 13. query fields
    console.log(word, banana)
    res.sendStatus(200)
})

// 4b. Delete with static path must go above dynamic path. other wise request will never reach
// 
app.delete('/delete/james/cool', (req,res) => {
    res.send("didnt make it")
})

// 4. DELETE 
app.delete('/delete/:id/:name', (req, res) => {
    const {id, name} = req.params // 14. param fields
    console.log('what do you want to delete ?', id, name)
    res.status(200)
})

// 5. Test these routes in the browser or the terminal
//6. to test in terminal we installed extension REST Client -> .rest file

// 1.2 we specifiy a port for the app to listen for incoming requests and respond accordingly
app.listen(PORT, ()=> {
    console.log(`Server has started on port: ${PORT}`)
})