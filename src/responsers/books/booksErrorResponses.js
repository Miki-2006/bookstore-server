export const booksErrorResponse = (req, res, error) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "BOOKS_ERROR",
        message: "Can not get books!",
        details: error
    }
    res.status(400).json(response)
}

export const titleRequiredResponse = (req, res) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "TITLE_REQUIRED",
        message: "Please fill the title field!"
    }
    res.status(400).json(response)
}

export const authorRequiredResponse = (req, res) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "AUTHOR_REQUIRED",
        message: "Please fill the author field!"
    }
    res.status(400).json(response)
}

export const descriptionRequiredResponse = (req, res) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "DESCRIPTION_REQUIRED",
        message: "Please fill the description field!"
    }
    res.status(400).json(response)
}

export const quantityRequiredResponse = (req, res) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "QUANTITY_REQUIRED",
        message: "Please fill the quantity field!"
    }
    res.status(400).json(response)
}

export const priceRequiredResponse = (req, res) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "PRICE_REQUIRED",
        message: "Please fill the price field!"
    }
    res.status(400).json(response)
}

export const categoryRequiredResponse = (req, res) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "CATEGORY_REQUIRED",
        message: "Please fill the category field!"
    }
    res.status(400).json(response)
}

export const addBookErrorResponse = (req, res, error) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "BOOK_NOT_ADDED",
        message: "Something went wrong in adding new book!",
        details: error
    }
    res.status(400).json(response)
}