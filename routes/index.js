const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//create a route "book/add"
router.get('/books/add', (req, res, next) => {
  res.render("book-add");
});

router.post('/books/add', (req, res, next) => {
  
});


module.exports = router;
