import { FAVOURITE_CARD_ERROR, FAVOURITE_CARD_SUCCESS } from "./actionTypes";
import Axios from "axios";

export const UpdateFavouriteMovies = (userID, favouriteMovies) => {
  return async (dispatch) => {
    await Axios.patch(`http://Icinemaapp-env.eba-sa9jvi5c.ap-south-1.elasticbeanstalk.com:8082/api/users/${userID}`, favouriteMovies)
      .then((docs) =>
        dispatch({ type: FAVOURITE_CARD_SUCCESS, payload: docs.data })
      )
      .catch((error) => dispatch({ type: FAVOURITE_CARD_ERROR, error }));
  };
};

