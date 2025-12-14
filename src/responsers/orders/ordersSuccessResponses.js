export const newOrderCreatedResponse = (req, res, data) => {
    const response = {
        timestamp: new Date().toISOString(),    
        path: req.originalUrl,
        status: 201,
        code: "ORDER_CREATED",
        message: "Order created successfully!",
        content: data || ''
    }
    res.status(201).json(response)
}

export const ordersGettedResponse = (req, res, data) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 200,
        code: "ORDERS_FETCHED",
        message: "Orders fetched successfully!",
        content: data || []
    }
    res.status(200).json(response)
}