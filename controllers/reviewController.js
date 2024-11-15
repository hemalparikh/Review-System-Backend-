import ReviewModel from '../models/Review.js';
import Company from '../models/Company.js';

export const createReview = async (req, res) => {
    try {
        const { company, email, reviews } = req.body;

        const companyinfo = await Company.findOne({ name: company });
        if (!companyinfo) {
            return res.status(404).json({ message: "Company not found" });
        }

        const reviewObj = new ReviewModel({
            company: companyinfo._id,
            email,
            reviews,
        });

        const savedReviews = await reviewObj.save();

        const updatedCompany = await Company.findByIdAndUpdate(
            companyinfo._id,
            { $push: { reviews: savedReviews._id } },
            { new: true }
        ).populate("reviews").exec();

        res.json({ company: updatedCompany });
    } catch (error) {
        console.error("Error while adding Review:", error);
        res.status(500).json({ message: "Error while adding Review" });
    }
};

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await ReviewModel.find();
        res.json({ reviews });
    } catch (error) {
        console.error("Error while fetching reviews:", error);
        res.status(400).json({ error: "Error while fetching reviews" });
    }
};
