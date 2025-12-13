export const firstNameRequiredResponse = (res, req) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "FIRST_NAME_REQUIRED",
        message: "Please fill the first_name field!"
    }
    res.status(400).json(response)
}

export const lastNameRequiredResponse = (res, req) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "LAST_NAME_REQUIRED",
        message: "Please fill the last_name field!"
    }
    res.status(400).json(response)
}

export const phoneRequiredResponse = (res, req) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "PHONE_REQUIRED",
        message: "Please fill the phone number field!"
    }
    res.status(400).json(response)
}

export const passwordRequiredResponse = (res, req) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "PASSWORD_REQUIRED",
        message: "Please fill the password field!"
    }
    res.status(400).json(response)
}

export const passwordLengthResponse = (res, req) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 400,
        code: "PASSWORD_TOO_SHORT",
        message: "Please password has to be at least 6 digits!"
    }
    res.status(400).json(response)
}

export const passwordIncorrectResponse = (res, req) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 403,
        code: "PASSWORD_INCORRECT",
        message: "Sorry password is not correct"
    }
    res.status(403).json(response)
}

export const userNotFoundResponse = (res, req) => {
    const response = {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        status: 404,
        code: "USER_NOT_FOUND",
        message: "Sorry cannot find user!"
    }
    res.status(404).json(response)
}