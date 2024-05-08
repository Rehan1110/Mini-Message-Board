const express = require('express');
const router = express.Router();

Router.get("/new", function(req, res, next) {
  res.render('/new', { title: 'Add a new message'});
});

module.exports = router;