import { axiosInstance } from "../lib/axiosInstance";

const authenticate = async (mode, email, password) => {
  const response = await axiosInstance.post(
    `accounts:${mode}?key=${process.env.EXPO_PUBLIC_API_FIREBASEKEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response.data.idToken;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
