export const generalSuccessResponse = (req, res, data) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 200,
        code: "SUCCESS",
        content: data || []
    };
    res.status(200).json(response);
};