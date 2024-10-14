

import API from "../../axios/API";

export const getDepartments = () => dispatch => {
  dispatch({
    type: GET_DEPARTMENTS_BEGIN
  });

  return API({
    method: "GET",
    url: "/departments"
  })
    .then(res => {
      console.log("Departments fetched successfully: ", res.data);  // Logowanie danych
      dispatch({
        type: GET_DEPARTMENTS_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      console.log("Error fetching departments: ", error);  // Logowanie błędu
      dispatch({
        type: GET_DEPARTMENTS_FAIL,
        payload: { error }
      });
      return error;
    });
};



export const GET_DEPARTMENTS_BEGIN = "GET_DEPARTMENTS_BEGIN";
export const GET_DEPARTMENTS_SUCCESS = "GET_DEPARTMENTS_SUCCESS";
export const GET_DEPARTMENTS_FAIL = "GET_DEPARTMENTS_FAIL";
