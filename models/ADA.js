const mongoose = require('mongoose')

const ADASchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    url: {
        type: String,
        required: true,
        maxlength: [100, 'URL cannot be more than 100 characters']
    }
})

module.exports = mongoose.models.ADS || mongoose.model('ADA', ADASchema);