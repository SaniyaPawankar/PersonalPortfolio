import { reviewModel } from "../models/reviewModel.js";

let getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewModel.find();
        res.status(200).json(reviews)
    } catch (err) {
        res.status(500).json({ message: "No reviews found", err })
    }

}

let createNewReview = async (req, res) => {
    try {
        const { name, email, feedback } = req.body;
        if (!name || !email || !feedback) {
            return res.status(400).json({ message: "Required fields are missing" });
        }

        let review = new reviewModel({ name, email, feedback })
        await review.save();

        res.status(201).json({ msg: "Review Submitted" })
        console.log("Review Created", review)
    }catch(err){
        // alert("Unable to submit feedback");
        console.error("Unable to submit feedback", err);
        res.status(400).json({ message: "Unable to submit feedback", error: err})
    }
    
}

export { getAllReviews, createNewReview }