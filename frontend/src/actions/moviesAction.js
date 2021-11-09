import Axios from "axios";
import { GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from "./actionTypes";

export const getMovies = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get("http://Icinemaapp-env.eba-sa9jvi5c.ap-south-1.elasticbeanstalk.com:80/api/movies");
      dispatch({ type: GET_MOVIES_SUCCESS, payload: result.data.movies });
    } catch (error) {
      dispatch({ type: GET_MOVIES_ERROR, error });
    }
  };
};

export const addMovie = (movie) => {
  const contentType = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  let formData = new FormData();
  formData.append("title", movie.title);
  formData.append("numberInStock", movie.numberInStock);
  formData.append("genre", movie.genre);
  formData.append("image", movie.image);

  return async (dispatch) => {
    try {
      const result = await Axios.post(
        "http://Icinemaapp-env.eba-sa9jvi5c.ap-south-1.elasticbeanstalk.com:80/api/movies/addmovie",
        formData,
        contentType
      );
      dispatch({ type: GET_MOVIES_SUCCESS, payload: result.data.movies });
    } catch (error) {
      dispatch({ type: GET_MOVIES_ERROR, error });
    }
  };
};

