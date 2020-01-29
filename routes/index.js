const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//---------------------create a route "book/add"
router.get('/books/add', (req, res, next) => {
  res.render("book-add");
});


router.post('/books/add', (req, res, next) => {
  const { title, author, description, rating } = req.body;


  //--------------------create a new Book
  const newBook = new Book({ title, author, description, rating});


  //--------------------store the Book in the database
  newBook.save()
  .then((book) => {
  
  })
  .catch((error) => {
  
  })
});


//---------------------edit the Book
router.get('/books/edit', (req, res, next) => {
  Book.findOne({_id: req.query.book_id})
  .then((book) => {
    res.render("book-edit", {book});
  })
  .catch((error) => {
    console.log(error);
  })
});


//---------------------Update the Document (and get the updated doc)
Model.update({ query }, { $set : { key: value, key: value }}, { new: true })
.then()
.catch()


router.post('/books/edit', (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.update({_id: req.query.book_id}, { $set: {title, author, description, rating }})
  .then((book) => {
    res.redirect('/books');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
