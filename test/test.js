const helper = require('./helper');
require('dotenv').config();
const mongoose = require('mongoose');

it(`POST@/api should return code: -1}`,
    () => {
        return helper.request({
            "point": {
                "long": -97.70929823,
                "lat": 31.04685111
            }
        })
            .then(data => {
                expect(data.code).toEqual(-1)
            })
    })

it(`POST@/api should return code: 0}`,
    () => {
        return helper.request({
            "point": {
                "long": -97.70929823,
                "lat": 31.04685111
            },
            "radius": 30
        })
            .then(data => {
                expect(data.code).toEqual(0)
            })
    })

it(`POST@/api should return {
    "code": -1,
    "msg": "radius is required"
}`,
    () => {
        return helper.request({
            "point": {
                "long": -97.70929823,
                "lat": 31.04685111
            }
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "radius is required"
                })
            })
    })

it(`POST@/api should return {
    "code": 0,
    "msg": "Success",
    "result": {
        "trips": [
            {
                "_id": "5cebab1fa2752d2aa3d25859",
                "distance_travelled": 790,
                "driver_rating": 5,
                "rider_rating": 5,
                "start_zip_code": null,
                "end_zip_code": "",
                "charity_id": null,
                "requested_car_category": "REGULAR",
                "free_credit_used": null,
                "surge_factor": 0,
                "color": "Black",
                "make": "Cadillac",
                "model": "XTS",
                "year": 2013,
                "rating": 5,
                "Date": "2016-06-04",
                "PRCP": 0.1,
                "TMAX": 86,
                "TMIN": 67,
                "AWND": 4.9,
                "GustSpeed2": 13,
                "Fog": 1,
                "HeavyFog": 0,
                "Thunder": 0,
                "start": {
                    "type": "Point",
                    "coordinates": [
                        -97.70929823,
                        31.04685111
                    ]
                },
                "end": {
                    "type": "Point",
                    "coordinates": [
                        -97.14107472,
                        30.39216848
                    ]
                },
                "complete_date": "2016-06-04T15:26:07.000Z",
                "start_date": "2016-06-04T15:24:25.000Z",
                "dist": {
                    "calculated": 0,
                    "location": {
                        "type": "Point",
                        "coordinates": [
                            -97.70929823,
                            31.04685111
                        ]
                    }
                }
            }
        ],
        "minDistance": 790,
        "maxDistance": 790,
        "numberOfTripByYear": [
            {
                "year": 2013,
                "count": 1
            }
        ]
    }
})`,
    () => {
        return helper.request({
            "point": {
                "long": -97.70929823,
                "lat": 31.04685111
            },
            "radius": 30
        })
            .then(data => {
                expect(data).toEqual({
                    "code": 0,
                    "msg": "Success",
                    "result": {
                        "trips": [
                            {
                                "_id": "5cebab1fa2752d2aa3d25859",
                                "distance_travelled": 790,
                                "driver_rating": 5,
                                "rider_rating": 5,
                                "start_zip_code": null,
                                "end_zip_code": "",
                                "charity_id": null,
                                "requested_car_category": "REGULAR",
                                "free_credit_used": null,
                                "surge_factor": 0,
                                "color": "Black",
                                "make": "Cadillac",
                                "model": "XTS",
                                "year": 2013,
                                "rating": 5,
                                "Date": "2016-06-04",
                                "PRCP": 0.1,
                                "TMAX": 86,
                                "TMIN": 67,
                                "AWND": 4.9,
                                "GustSpeed2": 13,
                                "Fog": 1,
                                "HeavyFog": 0,
                                "Thunder": 0,
                                "start": {
                                    "type": "Point",
                                    "coordinates": [
                                        -97.70929823,
                                        31.04685111
                                    ]
                                },
                                "end": {
                                    "type": "Point",
                                    "coordinates": [
                                        -97.14107472,
                                        30.39216848
                                    ]
                                },
                                "complete_date": "2016-06-04T15:26:07.000Z",
                                "start_date": "2016-06-04T15:24:25.000Z",
                                "dist": {
                                    "calculated": 0,
                                    "location": {
                                        "type": "Point",
                                        "coordinates": [
                                            -97.70929823,
                                            31.04685111
                                        ]
                                    }
                                }
                            }
                        ],
                        "minDistance": 790,
                        "maxDistance": 790,
                        "numberOfTripByYear": [
                            {
                                "year": 2013,
                                "count": 1
                            }
                        ]
                    }
                })
            })
    })

afterAll(async (done) => {
    await mongoose.disconnect(done, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
});