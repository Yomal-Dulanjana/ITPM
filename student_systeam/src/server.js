let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const feedbackRoute = require('../backend/routes/feedback.route')
const paymentRoute = require('../backend/routes/payment.route')
const returnRoute = require('../backend/routes/return.route')
const deliveryRoute = require('../backend/routes/delivery.route')
const employeeRoute = require('./routes/employee.route')
const customerRoute = require('./routes/customer.route')
const stockRoute = require('../backend/routes/stock.route')
const supplyRoute = require('../backend/routes/supply.route')
// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/', )
app.use('/', )
app.use('/', )
app.use('/', )
app.use('/', )
app.use('/', )
app.use('/', )
app.use('/', )

// PORT
const port = process.env.PORT || 8070;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});