# Report API

## Description
API is used for fetching data collection in DB and transform it to report.



#### Add .env Variables
```
PORT=YOUR_APP_PORT_NO
DB_URL=YOUR_MONGODB_DATABASE__URL
```

#### Install Dependencies
```
npm install
```

#### Install CLI Packages
```
npm install pm2@latest -g
```
```
npm install jest --global
```
#### Run Test
```
npm run test
```

#### Run App
```
npm run start
```

#### Stop App
```
npm run stop
```

#### See Logs
```
npm run log
```

## REST API

#### Endpoint
```
POST: localhost:PORT/api 
```

#### Success

Request
```javascript
{
    "point": {
        "long": -97.70929823,
        "lat": 31.04685111,
        "radius": 30
    }
}
```
Response
 ```javascript
 {
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
}
```

#### Fail

Request
```javascript
{
    "point": {
        "long": -97.70929823,
        "lat": 31.04685111
    }
}
```

Response
```javascript
{
    "code": -1,
    "msg": "radius is required"
}
```
