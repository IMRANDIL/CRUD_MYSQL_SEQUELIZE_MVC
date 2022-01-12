const db = require('../models');

//model....Review...
const Review = db.reviews;


//1.Add Review....


const addReview = async (req, res) => {
    try {
        let data = {
            rating: req.body.rating,
            description: req.body.description
        }
        const review = await Review.create(data);
        res.status(200).send(review);
    } catch (error) {
        console.log(error);
    }
}

//2.Get All Reviews...

const getAllReviews = async (req, res) => {
    try {
        const allReviews = await Review.findAll({});
        res.status(200).send(allReviews);
    } catch (error) {
        console.log(error);
    }

}


//3.get Spec Review.....

const getSpecReview = async (req, res) => {
    try {
        const { id } = req.params;
        const specReview = await Review.findOne({ where: { id: id } });
        res.status(200).send(specReview);
    } catch (error) {
        console.log(error);
    }

}

//4.update Spec....


const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        await Review.update(req.body, { where: { id: id } });
        res.status(200).send(`successfully updated this id ${id}`);
    } catch (error) {
        console.log(error);
    }

}



//5.delete Review...


const deleteSpecReview = async (req, res) => {
    try {
        const { id } = req.params;
        await Review.destroy({ where: { id: id } });
        res.status(200).send(`Successfully deleted this id ${id}`)
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    addReview,
    getAllReviews,
    getSpecReview,
    updateReview,
    deleteSpecReview
}
