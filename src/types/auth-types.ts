
export const SIGNIN = 'SIGNIN'
export const LOGOUT = 'LOGOUT'
export const UPDATEVALUE = 'UPDATEVALUE'

export interface User {
    first_name: string;
    last_name: string;
    amount: number;
    createAt: Date;
    updatedAt: Date
  };

export interface Auth {
  isAuth: boolean;
  user: null | User
}


export interface SignInType {
    type: typeof SIGNIN,
    payload: User
}

export interface LogoutType {
    type: typeof LOGOUT,
}

export interface UpdateValueType {
  type: typeof UPDATEVALUE,
  payload: number
}

export type AuthActionTypes = SignInType | LogoutType | UpdateValueType