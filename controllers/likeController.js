import Like from '../models/Like.js';
import Review from '../models/Review.js';

export const likeReviews = async (req, res) => {
    try {
        const { reviews, student } = req.body;

        const like = new Like({
            reviews,
            student,
        });

        const savedLike = await like.save();

        const updatedReview = await Review.findByIdAndUpdate(
            reviews,
            { $push: { likes: savedLike._id } },
            { new: true }
        ).populate("likes").exec();

        res.json({
            review: updatedReview,
            message: "Review liked successfully"
        });
    } catch (error) {
        console.error("Error while liking reviews:", error);
        return res.status(500).json({
            error: "Error while liking reviews",
            details: error.message 
        });
    }
};
