import supabase from "../config/supabase.js";
import {
    bookIdRequiredResponse,
  cartErrorResponse,
  cartIsEmptyResponse,
  quantityRequiredResponse,
  userIdRequiredResponse,
} from "../responsers/cart/cartErrorResponses.js";
import { bookAddedToCartResponse, cartBooksGettedResponse } from "../responsers/cart/cartSuccesResponses.js";
import { databaseErrorResponse } from "../responsers/generalErrorResponses.js";

export const getCartOfUser = async (req, res) => {
  const { userId } = req.params;
  const user_id = Number(userId);

  if (isNaN(user_id) || user_id < 1) {
    userIdRequiredResponse(req, res);
    return;
  }

  try {
    const { data, error } = await supabase
      .from("cart")
      .select("id, created_at, user_id, quantity, book:book!cart_book_id_fkey(title, author, price, id)")
      .eq("user_id", user_id);
    if (error) {
      cartErrorResponse(req, res, error);
      return;
    }
    if (data.length < 1) {
      cartIsEmptyResponse(req, res);
      return;
    }
    cartBooksGettedResponse(req, res, data);
  } catch (error) {
    databaseErrorResponse(req, res, error);
    return;
  }
};

export const addBookToCart = async (req, res) => {
  const { book_id, quantity, user_id } = req.body;

  if (user_id < 1) {
    userIdRequiredResponse(req, res);
    return;
  } else if (book_id < 1) {
    bookIdRequiredResponse(req, res);
    return;
  } else if (quantity < 1) {
    quantityRequiredResponse(req, res);
    return;
  }

  try {
    const { data, error } = await supabase
      .from("cart")
      .insert({ user_id: user_id, book_id: book_id, quantity: quantity });
    if (error) {
      cartErrorResponse(req, res, error);
      return;
    }
    if (!data) {
        bookAddedToCartResponse(req, res, "No data returned after insertion");
        return;
    }
    bookAddedToCartResponse(req, res, data);
  } catch (error) {
    databaseErrorResponse(req, res, error);    
    return;
  }
};
