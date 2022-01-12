const { where } = require('sequelize');
const db = require('../models');



//create main model...

const Product = db.products;

const Review = db.reviews;

//main action starts here..

//1.Create Product...

const addProduct = async (req, res) => {
    try {
        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false

        }

        const product = await Product.create(info);
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
    }

}


//2.Get All Products...



const getAllProduct = async (req, res) => {
    try {
        // const products = await Product.findAll({
        //     attributes: [
        //         'title',
        //         'price',
        //         'description'
        //     ]
        // });

        const products = await Product.findAll({});
        res.status(200).send(products);

    } catch (error) {
        console.log(error);
    }
}


//3.Get Single Product.....


const getSpecProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const specProduct = await Product.findOne({ where: { id: id } });
        res.status(200).send(specProduct);
    } catch (error) {
        console.log(error);
    }
}


//4.Update Product....

const updateSpecProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.update(req.body, { where: { id: id } });

        res.status(200).send(`successfully edited..`);

    } catch (error) {
        console.log(error);
    }
}


//5.Delete Specific Product....


const deleteSpecProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.destroy({ where: { id: id } });
        res.status(200).send(`Product Id:${id} deleted..`)
    } catch (error) {
        console.log(error);
    }
}



//6.get Published Product...

const getPublishedProduct = async (req, res) => {
    try {
        const publishedProduct = await Product.findAll({ where: { published: true } });
        res.status(200).send(publishedProduct)
    } catch (error) {
        console.log(error);
    }
}




//7.connect one to  many relation product and reviews...


const getProductReviews = async (req, res) => {
    try {
        const data = await Product.findAll({
            include: [{
                model: Review,
                as: 'review'
            }],
            where: {
                id: 1
            }
        });

        res.status(200).send(data)
    } catch (error) {
        console.log(error);
    }
}








module.exports = {
    addProduct,
    getAllProduct,
    getSpecProduct,
    updateSpecProduct,
    deleteSpecProduct,
    getPublishedProduct,
    getProductReviews
}