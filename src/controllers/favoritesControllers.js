import supabase from "../config/supabase.js";
import { bookIdRequiredResponse, favoritesErrorResponse, favoritesIsEmptyResponse, userIdRequiredResponse } from "../responsers/favorites/favoritesErrorResponses.js";
import { bookAddedToFavoritesResponse, favoritesGettedResponse } from "../responsers/favorites/favoritesSuccessResponses.js";
import { databaseErrorResponse } from "../responsers/generalErrorResponses.js";

export const getFavoritesOfUser = async (req, res) => {
  const { userId } = req.params;
  const user_id = Number(userId);

  if (isNaN(user_id) || user_id < 1) {
    userIdRequiredResponse(req, res);
    return;
  }

  try {
    const { data, error } = await supabase
      .from("favorite")
      .select("id, created_at, user_id, book:book!favorite_book_id_fkey(title, author)")
      .eq("user_id", user_id);
    if (error) {
      favoritesErrorResponse(req, res, error);
      return;
    }
    if (data.length < 1) {
      favoritesIsEmptyResponse(req, res);
      return;
    }
    favoritesGettedResponse(req, res, data);
  } catch (error) {
    databaseErrorResponse(req, res, error);
    return;
  }
};

export const addBookToFavorites = async (req, res) => {
  const { book_id, quantity, user_id } = req.body;

  if (user_id < 1) {
    userIdRequiredResponse(req, res);
    return;
  } else if (book_id < 1) {
    bookIdRequiredResponse(req, res);
    return;
  }

  try {
    const { data, error } = await supabase
      .from("favorite")
      .insert({ user_id: user_id, book_id: book_id });
    if (error) {
      favoritesErrorResponse(req, res, error);
      return;
    }
    if (!data) {
        bookAddedToFavoritesResponse(req, res, "No data returned after insertion");
        return;
    }
    bookAddedToFavoritesResponse(req, res, data);
  } catch (error) {
    databaseErrorResponse(req, res, error);    
    return;
  }
};
