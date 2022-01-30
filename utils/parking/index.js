import { Config } from '../Config';
const mongoose = require('mongoose');
const parkingSchema = require('../../models/Parking');
const Parking = mongoose.model('parkings', parkingSchema, 'parkings');

export async function getParking(_skip) {
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
     const data  = await Parking.find({}, function (err, data) {
     }).clone().lean();
     return data
    } catch (error) {
        console.log(error);
    }
}

export async function getTotal() {
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        const data = Parking.count({});
        return data;
    } catch (error) {
        return error;
        console.log(error);
    }
}