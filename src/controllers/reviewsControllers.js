import supabase from "../config/supabase.js";
import { noReviewsErrorResponse, reviewsErrorResponse } from "../responsers/reviews/reviewsErrorResponses.js";
import { reviewsGettedResponse } from "../responsers/reviews/reviewsSuccessResponses.js";
import {databaseErrorResponse} from '../responsers/generalErrorResponses.js'

const responseTypes = ['BOOK', 'USER'];

export const getReviewsOfBookById = async (req, res) => {
  const { id } = req.params;


  try {
    const { data, error } = await supabase
      .from("review")
      .select("id, text, rank, created_at, book:book!review_book_id_fkey(title), user:user!review_user_id_fkey(first_name, last_name)")
      .eq("book_id", id);
    if (data.length < 1) {
        noReviewsErrorResponse(req, res, responseTypes[0])
        return
    } else if (data) {
      reviewsGettedResponse(req, res, data, responseTypes[0])
    }

    if (error) {
      reviewsErrorResponse(req, res, error)
    }
  } catch (error) {
    databaseErrorResponse(req, res, error)
  }
};


export const getReviewsOfUser = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("review")
      .select("id, text, rank, created_at, book:book!review_book_id_fkey(title), user:user!review_user_id_fkey(first_name, last_name)")
      .eq("user_id", id);
    if (data.length < 1) {
        noReviewsErrorResponse(req, res, responseTypes[1])
        return;
    } else if (data) {
      reviewsGettedResponse(req, res, data, responseTypes[1])
    }

    if (error) {
      reviewsErrorResponse(req, res, error)
    }
  } catch (error) {
    databaseErrorResponse(req, res, error)
  }
};