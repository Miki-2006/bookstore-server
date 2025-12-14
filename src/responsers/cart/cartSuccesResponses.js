export const cartBooksGettedResponse = (req, res, data) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 200,
    code: "CART_BOOKS_GETTED",
    content: data || [],
  };
  res.status(200).json(response);
}

export const bookAddedToCartResponse = (req, res, data) => {
  const response = {
    timestamp: new Date().toISOString(),  
    path: req.originalUrl,
    status: 201,
    code: "BOOK_ADDED_TO_CART",
    content: data,
  };
  res.status(201).json(response);
}