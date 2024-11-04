// src/utils/auth.js
let currentUser = null;

export const login = (user, role) => {
  currentUser = { ...user, role };
};

export const logout = () => {
  currentUser = null;
};

export const isLoggedIn = () => {
  return !!currentUser;
};

export const getUserRole = () => {
  return currentUser ? currentUser.role : null;
};