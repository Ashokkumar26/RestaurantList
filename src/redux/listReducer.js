const {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} = require("./actionType");

const initialState = {
  loading: false,
  list: [],
  error: "",
};
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: "",
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        list: [],
      };
    default:
      return state;
  }
};
export default listReducer;
