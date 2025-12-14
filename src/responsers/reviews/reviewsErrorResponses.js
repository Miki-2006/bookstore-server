export const reviewsErrorResponse = (req, res, error) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "REVIEWS_ERROR",
        message: type === "BOOK" ? "Can not get reviews of book!" : "Can not get reviews of user!",
        details: error
    }
    res.status(400).json(response)
}

export const noReviewsErrorResponse = (req, res, type) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 404,
        code: "REVIEWS_NOT_FOUND",
        message: type === "BOOK" ? "There is no reviews for book!" : "There is no reviews for user!",
    }
    res.status(404).json(response)
}