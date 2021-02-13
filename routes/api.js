const express = require('express');
const Trip = require('../models/Trip');
const Request = require('../models/Request');
const router = express.Router();
const validator = require('../middlewares/validator');
const moment = require('moment');

// Create resource and post method for api
router.post('/', validator(Request, 'body'), async (req, res, next) => {
    console.info('Request Body: ', req.body);

    // Create pipeline for aggreagating trip data
    const pipeline = [
        {
            $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: [req.body.point.long, req.body.point.lat]
                },
                key: 'start',
                maxDistance: req.body.radius,
                distanceField: 'dist.calculated',
                includeLocs: 'dist.location',
                spherical: true
            }
        },
        {
            $match: {}
        },
        {
            $group: {
                _id: {},
                trips: { $push: '$$ROOT' },
                minDistance: { $min: '$distance_travelled' },
                maxDistance: { $max: '$distance_travelled' }
            }
        },
        {
            $project: {
                _id: 0,
                minDistance: 1,
                maxDistance: 1,
                trips: 1
            }
        }
    ];

    const pipeline2 = [
        {
            $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: [req.body.point.long, req.body.point.lat]
                },
                key: 'start',
                maxDistance: req.body.radius,
                distanceField: 'dist.calculated',
                includeLocs: 'dist.location',
                spherical: true
            }
        },
        {
            $match: {

            }
        },
        {
            $group: {
                _id: '$year',
                _count: { $sum: 1 }
            }
        },
        {
            $addFields: { year: "$_id", count: "$_count", }
        },
        {
            $project: {
                _id: 0,
                _count: 0
            }
        }
    ];

    if (req.body.startDate) {
        pipeline[1].$match.start_date = { '$gte': new Date(req.body.startDate) };
        pipeline2[1].$match.start_date = { '$gte': new Date(req.body.startDate) };
    }
    if (req.body.startDate) {
        pipeline[1].$match.complete_date = { '$lte': new Date(req.body.endDate) };
        pipeline2[1].$match.complete_date = { '$lte': new Date(req.body.endDate) };
    }
    console.log(JSON.stringify(pipeline) + "\n" + JSON.stringify(pipeline2));
    // Aggregate data according to pipeline and return result as api response
    await Trip

        .aggregate(pipeline)

        .then(resp => {
            return resp;
        })

        .then(async resp => {
            await Trip

                .aggregate(pipeline2)

                .then(resp2 => {
                    if (resp[0])
                        resp[0].numberOfTripByYear = resp2

                    res.status(200)

                        .json({
                            code: 0,
                            msg: 'Success',
                            result: resp[0]
                        });
                })

        })

        .catch(err => {
            console.error(err);
            next(err);
        });

})

module.exports = router;