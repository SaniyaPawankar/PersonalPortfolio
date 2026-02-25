import mongoose from "mongoose"

const reviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
})

const reviewModel = mongoose.model("reviews", reviewsSchema);

export { reviewModel }