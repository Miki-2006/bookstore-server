export const allBooksGettedResponse = (req, res, data) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 200,
    code: "BOOKS_GETTED",
    message: "All books successfully getted!",
    content: data || "",
  };
  res.status(200).json(response);
};

export const addBookSuccessResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 201,
    code: "BOOK_ADDED",
    message: "New book added successfully!",
  };
  res.status(201).json(response);
};
