export const reviewsGettedResponse = (req, res, data, type) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 200,
    code: "REVIEWS_GETTED",
    message: type === "BOOK" ? "All reviews of book successfully getted!" : "All reviews of user successfully getted!",
    content: data || "",
  };
  res.status(200).json(response);
};
