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

export const cartErrorResponse = (req, res, error) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 500,
    code: "CART_ERROR",
    message: "An error occurred while processing the cart request!",  
    details: error,
  };
  res.status(500).json(response);
}

export const cartIsEmptyResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 404,
    code: "CART_IS_EMPTY",
    message: "The cart is empty!",
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

export const quantityRequiredResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "QUANTITY_REQUIRED",
    message: "Please fill the quantity field!",
  };
  res.status(400).json(response);
};

