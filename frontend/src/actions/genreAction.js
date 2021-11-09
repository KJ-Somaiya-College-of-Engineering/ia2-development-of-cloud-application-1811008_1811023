import { GET_GENRES_ERROR, GET_GENRES_SUCCESS } from "./actionTypes";
import Axios from "axios";

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const result = await Axios.get("http://Icinemaapp-env.eba-sa9jvi5c.ap-south-1.elasticbeanstalk.com:8081/api/genres");
      dispatch({ type: GET_GENRES_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_GENRES_ERROR, error });
    }
  };
};

