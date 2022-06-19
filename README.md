# NODE API STARTER
[![created by](https://img.shields.io/badge/created%20by-Justin%20Balaguer-blue.svg?longCache=true&style=flat-square)](https://github.com/justinbalaguer)


A node / express api starter with
[helmet](https://www.npmjs.com/package/helmet),
[morgan](https://www.npmjs.com/package/morgan),
[express-rate-limit](https://www.npmjs.com/package/express-rate-limit) and [mongoose](https://www.npmjs.com/package/mongoose).
___
## ACCESS API
To access `/v1` route, you need API key.
## GENERATE KEY
To generate a key: `http://localhost:5000/key` (default rate limit: 3)
## USE API KEY
To use API key, include it as a query `http://localhost:5000/v1?key=<your_api_key>`
## TEST ROUTES
For testing routes run `npm run test` (note: generate a key first and add it to `api.test.js` file)
___
## ROUTES
| URL                       | API KEY |
|---------------------------|:-------:|
| `http://localhost:5000/`  |       no|
| `http://localhost:5000/v1`|      yes|

Made with 💖 by [Justin Balaguer](https://justinbalaguer.dev)