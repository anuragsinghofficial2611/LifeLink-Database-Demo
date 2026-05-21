require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')

connectDB().catch(err => {
    console.error('Database connection failed:', err.message)
    process.exit(1)
})

app.listen(1000,() => {
    console.log('server is live at 1000')
})

