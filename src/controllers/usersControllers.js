import supabase from '../config/supabase.js'
import { firstNameRequiredResponse, lastNameRequiredResponse, passwordIncorrectResponse, passwordLengthResponse, passwordRequiredResponse, phoneRequiredResponse, userNotFoundResponse } from '../responsers/auth/authErrorResponses.js'
import { newUserRegisteredResponse, UserLoggedResponse } from '../responsers/auth/authSuccessResponses.js';
import { databaseErrorResponse } from '../responsers/generalErrorResponses.js';

export const registerNewUser = async (req, res) => {
    const { first_name, last_name, phone, password } = req.body;

    if (first_name.length <= 1) {
        firstNameRequiredResponse(res, req)
    } else if (last_name.length <= 1) {
        lastNameRequiredResponse(res, req)
    } else if (phone.length <= 1) {
        phoneRequiredResponse(res, req)
    } else if (password.length <= 1) {
        passwordRequiredResponse(res, req)
    } 

    if (password.length < 6) {
        passwordLengthResponse(res, req)
    }

    try {
        const {error} = await supabase.from('user').insert({
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            password: password
        })
        
        if (!error) {
            newUserRegisteredResponse(req, res)
        }
    } catch (error) {
        databaseErrorResponse(res, req, error)
    }
}


export const loginUser = async (req, res) => {
    const {phone, password} = req.body;

    if (phone.length <= 1) {
        phoneRequiredResponse(res, req)
    } else if (password.length <= 1) {
        passwordRequiredResponse(res, req)
    } 

    try {
        const {data, error} = await supabase.from('user').select('password').eq('phone', phone).limit(1)

        if (data.length === 0) {
            userNotFoundResponse(res, req)
        }        

        if (data[0].password === password) {
            const {data, error} = await supabase.from('user').select('*').eq('phone', phone).limit(1)
            UserLoggedResponse(req, res, data)
        } else {
            passwordIncorrectResponse(res, req)
        }
    } catch (error) {
        databaseErrorResponse(res, req, error)        
    }
}