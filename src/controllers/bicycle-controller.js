const { BicycleModel } = require("../models");


const {
    ResponseHandlerUtil,
    ErrorHandlerUtil
} = require('../utils');



async function getBicycles(req, res, next) {

    const {
        lat,
        long,
        maxdistance
    } = req.query;

    if(!lat && !long) {
        return ErrorHandlerUtil.handleNotFoundError(res, "You need to provide latitude and longitute");
    }
    try {

        const mongooseQueryFl =  {
            location: {
              $near: {
                $maxDistance:maxdistance || 1000,
                $geometry: {
                   type: "Point" ,
                   coordinates: [ lat, long ]
                },
              }
            }
         }
        const [ bicycle,total] = await Promise.all([
           
            BicycleModel.find(mongooseQueryFl),
            BicycleModel.count(mongooseQueryFl),
        ]);

        return ResponseHandlerUtil.handleList(res, bicycle, total);
    } catch (error) {
        return next(error);
    }
}



module.exports = {
    getBicycles
};