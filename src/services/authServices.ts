import { ChangePasswordT, ForgotPasswordT, LoginT, ResetPasswordT, UserRegistration } from '../type';
import apiClient from './axiosInstance';


const Login  = async (payload: LoginT) => {
  const res = await apiClient.post('/Auth/login', payload);
  console.log(res.data)
  const data = res.data;

  const { authToken, ...user } = data;

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", authToken);
};


const ChangePassword  = async (payload: ChangePasswordT) => {
  const res = await apiClient.post('/Auth/change-password', payload);
  return res.data;
};

const SignUp  = async (payload: UserRegistration) => {
  const res = await apiClient.post('/Auth/signup', payload);
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

const authServices = {
 Login,
 ChangePassword,
 RequestPassword,
 ResetPassword,
 SignUp,
};

export default authServices;