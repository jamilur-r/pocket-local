import { Auth, AuthActionTypes } from "../../types/auth-types";

const initState: Auth = {
  isAuth: false,
  user: {
    first_name: "",
    last_name: "",
    amount: 0,
    start: 0,
    createAt: new Date(),
    updatedAt: new Date(),
  },
};

export const authReducer = (
  state = initState,
  action: AuthActionTypes
): Auth => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case "UPDATEVALUE":
      return {
        ...state,
        user: {
          ...state.user,
          amount: state.user.amount + action.payload,
        },
      };
    default:
      return state;
  }
};
