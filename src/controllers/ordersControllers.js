import supabase from "../config/supabase.js";
import {
  bookIdRequiredResponse,
  ordersErrorResponse,
  userIdRequiredResponse,
  quantityRequiredResponse,
  orderDateRequiredResponse,
  statusRequiredResponse,
  numberTypesErrorResponse,
  stringTypesErrorResponse,
  notFoundOrdersResponse,
} from "../responsers/orders/ordersErrorResponses.js";
import { databaseErrorResponse } from "../responsers/generalErrorResponses.js";
import { newOrderCreatedResponse, ordersGettedResponse } from "../responsers/orders/ordersSuccessResponses.js";

export const createNewOrder = async (req, res) => {
  const { user_id, book_id, quantity, order_date, status } = req.body;

  if (typeof user_id !== "number" || typeof book_id !== "number" || typeof quantity !== "number") {
    numberTypesErrorResponse(req, res);
    return;
  } else if (typeof order_date !== "string" || typeof status !== "string") {
    stringTypesErrorResponse(req, res);
    return;
  }

  if (user_id < 1) {
    userIdRequiredResponse(req, res);
    return;
  } else if (book_id < 1) {
    bookIdRequiredResponse(req, res);
    return;
  } else if (quantity < 1) {
    quantityRequiredResponse(req, res);
    return;
  } else if (order_date.length < 1) {
    orderDateRequiredResponse(req, res);
    return;
  } else if (status.length < 1) {
    statusRequiredResponse(req, res);
    return;
  }

  try {
    const { data, error } = await supabase.from("order").insert({
      user_id,
      ordered_book_id: book_id,
      quantity,
      order_date,
      status,
    });

    if (error) {
      ordersErrorResponse(req, res, error);
      return;
    }
    if (!data) {
        newOrderCreatedResponse(req, res, "No data returned after insertion");
        return;
    }
    newOrderCreatedResponse(req, res, data);
  } catch (error) {
    databaseErrorResponse(req, res, error);
    return;
  }
};


export const getOrdersOfUserById = async (req, res) => {
  const { userId } = req.params;
  const user_id = Number(userId);

  if (isNaN(user_id) || user_id < 1) {
    userIdRequiredResponse(req, res);
    return;
  }
  try {
    const { data, error } = await supabase
      .from("order")
      .select("*")
      .eq("user_id", user_id);
    if (error) {
      ordersErrorResponse(req, res, error);
      return;
    }
    if (data.length < 1) {
      notFoundOrdersResponse(req, res);
      return;
    }
    ordersGettedResponse(req, res, data);
  } catch (error) {
    databaseErrorResponse(req, res, error);
    return;
  } 
};