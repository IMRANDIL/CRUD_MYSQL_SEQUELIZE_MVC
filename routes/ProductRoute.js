const router = require('express').Router();
const productController = require('../controllers/ProductController');


//create route...

router.post('/add-product', productController.addProduct);

//read all route..
router.get('/allProducts', productController.getAllProduct);

//read one route...

router.get('/allProducts/:id', productController.getSpecProduct);



//update specific route...

router.put('/allProducts/:id', productController.updateSpecProduct);



//delete specific route..

router.delete('/allProducts/:id', productController.deleteSpecProduct);


//published route...


router.get('/publishedProduct', productController.getPublishedProduct);













module.exports = router;