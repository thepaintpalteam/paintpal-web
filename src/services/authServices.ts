import { ChangePasswordT, ForgotPasswordT, LoginT, ResetPasswordT, UserRegistration } from '../type';
import apiClient from './axiosInstance';


const Login  = async (payload: LoginT) => {
  const res = await apiClient.post('/Auth/login', payload);


  const { token, ...user } = res.data;

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);

  return res.data;
};


const ChangePassword  = async (payload: ChangePasswordT) => {
  const res = await apiClient.post('/Auth/change-password', payload);
  return res.data;
};

const SignUp  = async (payload: UserRegistration) => {
  const res = await apiClient.post('/Users/signup', payload);
  return res.data;
};

const RequestPassword  = async (payload: ForgotPasswordT) => {
  const res = await apiClient.post('/Auth/request-password-reset', payload);
  return res.data;
};

const ResetPassword  = async (payload: ResetPasswordT) => {
  const res = await apiClient.post('/Auth/reset-password', payload);
  return res.data;
};


const FirebaseLogin = async (payload: { firebaseToken: string }) => {
  const res = await apiClient.post('/Auth/firebase-login', payload);
  // persist if backend returns token/user same as other endpoints
  if (res?.data?.token) {
    localStorage.setItem('token', res.data.token);
  }
  if (res?.data?.user) {
    localStorage.setItem('user', JSON.stringify(res.data.user));
  }
  return res.data;
};

const verifyEmail = async (token: string) => {
  const res = await apiClient.post("/Auth/verify-email", { token });
  return res.data;
};

const authServices = {
 Login,
 ChangePassword,
 RequestPassword,
 ResetPassword,
 SignUp,
 FirebaseLogin,
 verifyEmail
};

export default authServices;