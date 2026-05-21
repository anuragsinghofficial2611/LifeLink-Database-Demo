const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://firstproject:kELb7r7bOVEpxEJN@firstproject.jiastpt.mongodb.net/LifeLinkDataBase', {
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