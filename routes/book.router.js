var express=require('express');
var router=express.Router();
var bookCtrl=require('./../controllers/book.ctrl');

//HTTP GET http://localhost:3000/books/
router.get('', bookCtrl.get);
router.get('/:id', bookCtrl.getById);
router.post('/', bookCtrl.save);
router.put('/', bookCtrl.update);
router.delete('/', bookCtrl.delete);

module.exports=router;