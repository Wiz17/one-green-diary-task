import { fetchUsersApi } from "../../api/userApi";

const initialData = {
  data: null, // Start with null
  loading: true, // Track loading state
};

const updateData = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, data: action.payload, loading: false };

    case "LOADED_DATA":
      return state;
      
    default:
      return state;
  }
};

export default updateData;

export const loadedData = () => {
  return {
    type: "LOADED_DATA",
    payload: initialData, // Pass the fetched data to the reducer
  };
};

export const addData = () => {
  return async (dispatch) => {
    dispatch({ type: "SET_LOADING" }); // Set loading to true before fetch

    try {
      const data = await fetchUsersApi();

      dispatch({
        type: "ADD_DATA",
        payload: data,
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
};
