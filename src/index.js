const express = require('express')
const app = express()
const cors = require('cors')

//setting
const PORT = process.env.PORT || 3001 // eslint-disable-line no-use-before-define

//routes
const postRouter = require('./routes/posts')

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/posts', postRouter)
app.use(express.static('build'))



//start 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



