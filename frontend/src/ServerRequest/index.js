

// import API from "../axios/API";
// import Auth from "../modules/Auth";

// export const login = async (email, password) => {
//   const body = {
//     credential: {
//       email: email,
//       password: password
//     }
//   };
//   return await API({
//     method: "POST",
//     url: "/users/login",
//     data: body
//   }).then(res => {
//     Auth.setUserToken(res.data.user_token);
//     return res;
//   });
// };
// export const register = async (fullname, email, password, verifyPassword) => {
//   return await API({
//     method: "POST",
//     url: "/users/signin",
//     data: {
//       fullname,
//       email,
//       password,
//       verifyPassword
//     }
//   }).then(res => {
//     // Auth.setUserToken(res.data.user_token);
//     console.log(res);
//     return res;
//   });
// };



import API from "../axios/API";
import Auth from "../modules/Auth";

// Funkcja logowania
export const login = async (email, password) => {
  const body = {
    email: email,
    password: password
  };
  return await API({
    method: "POST",
    url: "/login",  // zmiana na FastAPI endpoint
    data: body
  }).then(res => {
    Auth.setUserToken(res.data.user);  // Przechowujemy informacje o użytkowniku, w tym momencie token to dane użytkownika
    return res;
  });
};

// Funkcja rejestracji
export const register = async (name, email, password) => {
  const body = {
    name: name,
    email: email,
    password: password
  };
  return await API({
    method: "POST",
    url: "/register",  // zmiana na FastAPI endpoint
    data: body
  }).then(res => {
    console.log(res);
    return res;
  });
};
