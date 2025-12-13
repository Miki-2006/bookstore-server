export const newUserRegisteredResponse = (req, res) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 200,
        code: "USER_REGISTERED",
        message: "New user successfully registered!",
    }
    res.status(200).json(response)
}

export const UserLoggedResponse = (req, res, data) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 200,
        code: "USER_LOGGED",
        message: "New user successfully logged in!",
        content: data || ''
    }
    res.status(200).json(response)
}