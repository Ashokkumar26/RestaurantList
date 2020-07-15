import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from "./actionType";
import axios from "axios";

export const fetchListRequest = () => {
  return {
    type: FETCH_LIST_REQUEST,
  };
};
export const fetchListSuccess = (list) => {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: list,
  };
};
export const fetchListFailure = (error) => {
  return {
    type: FETCH_LIST_FAILURE,
    payload: error,
  };
};
export const fetchList = () => {
  return (dispatch) => {
    dispatch(fetchListRequest);
    var body = { latitude: 13.012345, longitude: 80.123456 };
    axios({
      method: "post",
      url: "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
      data: body,
    })
      .then((response) => {
        const list = response.data;
        dispatch(fetchListSuccess(list));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchListFailure(errorMsg));
      });
  };
};
