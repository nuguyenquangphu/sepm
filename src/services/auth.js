export const isAuthenticated = () => {
  const email = sessionStorage.getItem("user");
  return email ? true : false;
};

export const setAuthenticated = (email) => {
  return sessionStorage.setItem("user", email);
};

export const getAuthenticated = () => {
  const isAuth = isAuthenticated();
  if (isAuth) {
    return sessionStorage.getItem("user");
  } else {
    return false;
  }
};

export const logoutAuthenticated = () => {
  return sessionStorage.removeItem("user");
};
