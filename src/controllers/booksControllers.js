import supabase from '../config/supabase.js'
import { addBookErrorResponse, authorRequiredResponse, booksErrorResponse, categoryRequiredResponse, descriptionRequiredResponse, priceRequiredResponse, quantityRequiredResponse, titleRequiredResponse } from '../responsers/books/booksErrorResponses.js';
import { addBookSuccessResponse, allBooksGettedResponse } from '../responsers/books/booksSuccessResponses.js';
import {databaseErrorResponse} from '../responsers/generalErrorResponses.js'

export const getAllBooks = async (req, res) => {

    try {
        const {data, error} = await supabase.from('book').select('*')
        if (data) {
            allBooksGettedResponse(req, res, data)
        } else if (error) {
            booksErrorResponse(req, res, error)
        }
    } catch (error) {
        databaseErrorResponse(req, res, error)
    }
}


export const getBestSellers = async (req, res) => {

    try {
        const {data, error} = await supabase.from('bestseller').select("id, created_at, book:book!bestseller_book_id_fkey(*)")
        if (data) {
            allBooksGettedResponse(req, res, data)
        } else if (error) {
            booksErrorResponse(req, res, error)
        }
    } catch (error) {
        databaseErrorResponse(req, res, error)
    }
}

export const getNewReleases = async (req, res) => {

    try {
        const {data, error} = await supabase.from('newrelease').select("id, created_at, book:book!newrelease_book_id_fkey(*)")
        if (data) {
            allBooksGettedResponse(req, res, data)
        } else if (error) {
            booksErrorResponse(req, res, error)
        }
    } catch (error) {
        databaseErrorResponse(req, res, error)
    }
}


export const addNewBook = async (req, res) => {
    const {title, author, description, quantity, price, category} = req.body

    if (title.length < 1) {
        titleRequiredResponse(req, res)
        return;
    } else if (author.length < 1) {
        authorRequiredResponse(req, res)
        return;
    } else if(description.length < 10) {
        descriptionRequiredResponse(req, res)
        return;
    } else if(quantity < 1) {
        quantityRequiredResponse(req, res)
        return;
    } else if(price < 1) {
        priceRequiredResponse(req, res)
        return;
    } else if(category.length < 1) {
        categoryRequiredResponse(req, res)
        return;
    }

    try {
        const {error} = await supabase.from('book').insert({title, author, description, quantity, price, category})
        if (error) {
            addBookErrorResponse(req, res, error)
        }
        addBookSuccessResponse(req, res)
    } catch (error) {
        databaseErrorResponse(req, res, error)
    }
}