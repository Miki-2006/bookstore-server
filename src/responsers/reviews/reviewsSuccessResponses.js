export const reviewsGettedResponse = (req, res, data, type) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 200,
    code: "REVIEWS_FETCHED",
    message: type === "BOOK" ? "All reviews of book successfully fetched!" : "All reviews of user successfully fetched!",
    content: data || "",
  };
  res.status(200).json(response);
};
