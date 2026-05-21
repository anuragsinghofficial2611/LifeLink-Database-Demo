const mongoose = require('mongoose')

async function connectDB(){
    const mongoUri = process.env.MONGO_URI
    if (!mongoUri) {
        throw new Error('MONGO_URI is not defined in environment variables')
    }

    try {
        await mongoose.connect(mongoUri, {
            retryWrites: true,
            w: 'majority',
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            tlsAllowInvalidCertificates: true
        })
        console.log('database connected successfully')
    } catch(error) {
        console.error('Database connection error:', error.message)
        throw error
    }
}

module.exports = connectDB