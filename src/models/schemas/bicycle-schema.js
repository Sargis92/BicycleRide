const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [Number], // Array of arrays of arrays of numbers
    required: true
  }
});

const BicycleSchema = new Schema({ 
  name: String,
  location:locationSchema,
  vehicleCode: String
  
});

module.exports = BicycleSchema;