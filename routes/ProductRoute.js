const router = require('express').Router();
const productController = require('../controllers/ProductController');
const reviewController = require('../controllers/ReviewController');


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

//....Review..........................Section.......
//1.add review...route...
router.post('/add-review', reviewController.addReview);


//2.get all review...


router.get('/allReview', reviewController.getAllReviews);


//3.get one spec review route...

router.get('/allReview/:id', reviewController.getSpecReview),


    //4.update spec review route...

    router.put('/allReview/:id', reviewController.updateReview);



//5.delete spec review route...


router.delete('/allReview/:id', reviewController.deleteSpecReview);















module.exports = router;