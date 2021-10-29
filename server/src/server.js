const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const passport = require('passport');
const User = require('./models/user.model.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv').config();

// Routes
const userRouter = require('./routes/user.router');
const promoRouter = require('./routes/promo.router');

passport.serializeUser(function (user, done) {
  done(null, user);
  console.log('Serialize')
});

passport.deserializeUser(function (userId, done) {
  User.findOne({userId}, function (err, user) {
    if (err) {
      return done(err);
    }
    console.log('Deserialize')
    done(null, user);
  });
});

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(cookieParser('express secret'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
  name: "server-session-cookie-id",
  secret: 'express secret',
  maxAge: 1000 * 3600 * 24,
  saveUninitialized: true,
  proxy: true,
  resave: true,
  store:  MongoStore.create({
    mongoUrl: process.env.DBURL,
  }),
  cookie: {
    sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax',
    secure: process.env.NODE_ENV === "production",
  }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: false}));

app.use(userRouter);
app.use(promoRouter);
mongoose.connect(process.env.DBURL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('DB connected');
});

app.listen(process.env.PORT, () => {
  console.log('Server has been started on port ' + process.env.PORT);
})