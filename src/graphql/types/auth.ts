import type { IUser } from "./users";

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IUpdateUserInput {
  id: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  password?: string;
  cityId?: number;
}

export interface ILoginData {
  login: {
    user: IUser;
    token: string;
  };
}

export interface IUpdateUserData {
  updateMyProfile: IUser;
}

export interface ILoginVariables {
  input: ILoginInput;
}

export interface IUpdateUserVariables {
  input: IUpdateUserInput;
}

export interface IMeData {
  me: IUser;
}

export interface IForgotPasswordData {
  forgotPassword: boolean;
}

export interface IForgotPasswordVariables {
  email: string;
}

export interface IVerifyTokenData {
  verifyToken: boolean;
}

export interface IVerifyTokenVariables {
  token: string;
}

export interface IResetPasswordData {
  resetPassword: string;
}

export interface IResetPasswordVariables {
  token: string;
  newPassword: string;
}
