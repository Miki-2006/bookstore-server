export const ordersErrorResponse = (req, res, error) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "ORDER_ERROR",
    message: "Can not create order!",
    details: error,
  };
  res.status(400).json(response);
};

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

export const orderDateRequiredResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "ORDER_DATE_REQUIRED",
    message: "Please fill the order_date field!",
  };
  res.status(400).json(response);
};

export const statusRequiredResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "STATUS_REQUIRED",
    message: "Please fill the status field!",
  };
  res.status(400).json(response);
};

export const numberTypesErrorResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "NUMBER_TYPE_REQUIRED",
    message: "The user_id, book_id, and quantity fields must be numbers!",
  };
  res.status(400).json(response);
};

export const stringTypesErrorResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 400,
    code: "STRING_TYPE_REQUIRED",
    message: "The order_date and status fields must be strings!",
  };
  res.status(400).json(response);
};

export const notFoundOrdersResponse = (req, res) => {
  const response = {
    timestamp: new Date().toISOString(),  
    path: req.originalUrl,
    status: 404,
    code: "ORDERS_NOT_FOUND",
    message: "No orders found for the specified user!",
  };
  res.status(404).json(response);
}