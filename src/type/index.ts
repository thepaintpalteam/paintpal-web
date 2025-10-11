

export type LoginT = {
  email: string;
  password: string;
};

export type ChangePasswordT = {
  currentPassword: string;
  newPassword: string;
};

export type ForgotPasswordT = {
  email: string;
};

export type ResetPasswordT = {
  token: string;
  newPassword: string;
};

export interface PaymentMethod {
  //cardNumber: string;
  //expiryMonth: string;
  //expiryYear: string;
  //cvc: string;
 //cardholderName: string;
  stripePaymentMethodId: string;
}

export interface UserRegistration {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string; // ISO string "2025-09-30T16:07:38.944Z"
  location: string;
  phoneNumber: string;
  selectedPlan?: string;
  paymentMethod?: PaymentMethod;
}
