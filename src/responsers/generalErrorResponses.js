export const databaseErrorResponse = (req, res, error) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 500,
        code: "DATABASE_ERROR",
        message: "Something went wrong in database!",
        details: error.message
    }
    res.status(500).json(response)
}