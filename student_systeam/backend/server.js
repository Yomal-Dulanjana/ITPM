let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Rout
const quizRoute = require('../backend/routes/quiz.route')
const answerRoute = require('../backend/routes/answer.route')
const markRoute = require('../backend/routes/mark.route')


// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
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
app.use('/quizs', quizRoute)
app.use('/marks', markRoute)
app.use('/answers', answerRoute)

// PORT
const port = process.env.PORT || 8070;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });