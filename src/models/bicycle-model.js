const mongoose = require('mongoose');

const { BicycleSchema } = require('./schemas');

const BicycleModel = mongoose.model('Bicycle', BicycleSchema);

module.exports = BicycleModel;