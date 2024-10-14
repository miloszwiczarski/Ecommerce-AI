

// import {
//   GET_DEPARTMENTS_BEGIN,
//   GET_DEPARTMENTS_SUCCESS,
//   GET_DEPARTMENTS_FAIL
// } from "../actions/DepartmentAction";

// const initialState = {
//   loading: false,
//   departments: null,
//   error: null
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_DEPARTMENTS_BEGIN:
//       return {
//         loading: true,
//         error: null
//       };
//     case GET_DEPARTMENTS_SUCCESS:
//       return {
//         loading: false,
//         departments: action.payload.data.departments
//       };
//     case GET_DEPARTMENTS_FAIL:
//       return {
//         loading: false,
//         error: action.payload.error.response.data
//       };
//     default:
//       return state;
//   }
// };


import {
  GET_DEPARTMENTS_BEGIN,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAIL
} from "../actions/DepartmentAction";

const initialState = {
  loading: false,
  departments: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
      case GET_DEPARTMENTS_SUCCESS:
        console.log("Reducer received departments: ", action.payload.data);
        return {
          ...state,
          loading: false,
          departments: action.payload.data  // Przekazywanie pobranych działów
        };
      

    case GET_DEPARTMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
