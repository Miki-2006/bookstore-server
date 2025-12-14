export const userIdRequiredResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "USER_ID_REQUIRED",
    message: "Please fill the user_id field!",
  };
  res.status(400).json(response);
};

export const favoritesErrorResponse = (req, res, error) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 500,
    code: "FAVORITES_ERROR",
    message: "An error occurred while processing the favorites request!",  
    details: error,
  };
  res.status(500).json(response);
}

export const favoritesIsEmptyResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 404,
    code: "FAVORITES_IS_EMPTY",
    message: "The favorites list is empty!",
  };
  res.status(404).json(response);
}

export const bookIdRequiredResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "BOOK_ID_REQUIRED",
    message: "Please fill the book_id field!",
  };
  res.status(400).json(response);
};


