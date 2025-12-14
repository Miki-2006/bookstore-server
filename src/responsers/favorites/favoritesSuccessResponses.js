export const favoritesGettedResponse = (req, res, data) => {
  const response = {
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    status: 200,
    code: "FAVORITES_GETTED",
    content: data || [],
  };
  res.status(200).json(response);
}

export const bookAddedToFavoritesResponse = (req, res, data) => {
  const response = {
    timestamp: new Date().toISOString(),  
    path: req.originalUrl,
    status: 201,
    code: "BOOK_ADDED_TO_FAVORITES",
    content: data,
  };
  res.status(201).json(response);
}