const mongoose = require('mongoose');

const { Schema } = mongoose;

const BicycleSchema = new Schema({ 
  name: String,
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [Number], // Array  of numbers
    required: true
  },
  vehicleCode: String
  
});

module.exports = BicycleSchema;