// export const getUser = () => {
//     return JSON.parse(localStorage.getItem("users")) ||  [];
// };

// export const saveUser = () => {
//     localStorage.setItem("users", JSON.stringify(users));
// };

// export const getUsers = () => {
//   return JSON.parse(localStorage.getItem("users")) || [];
// };

// export const saveUsers = (users) => {
//   localStorage.setItem("users", JSON.stringify(users));
// };

export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};