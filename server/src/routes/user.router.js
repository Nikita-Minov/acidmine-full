const express = require('express');
const router = express.Router();
const User = require("../models/user.model.js");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

router.post('/api/login', function (req, res, next) {
  passport.authenticate('local', function (err, user) {
    console.log(user);
    if (!user) {
      res.json({message: 'Error! User is not found!'})
    } else {
      req.login(user, function (err) {
        if (err) {
          console.log(err);
          return;
        }
        res.json({
          message: "Successful authorization!",
          username: req.user.username
        })
      });
    }
  })(req, res, next);
});

router.get('/api/me', function (req, res) {
  if (req.user == null) {
    res.json({
      message: 'User is not found!'
    })
  } else {
    res.json({
      message: 'User found!',
      username: req.user.username,
      id: req.user.userId
    });
  }
})

router.get('/api/logout', function (req, res) {
  req.logout();
  res.status(200).clearCookie('connect.sid', {path: '/'}).json({message: "Successful logout!"});
  console.log(req.user);
});

module.exports = router;