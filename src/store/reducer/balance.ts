import { BalanceAction, BalanceType } from "../../types/balanse";

const initState: BalanceType = {
  income: 0,
  expense: 0,
  saving: 0,
  incomes: [],
  expenses: [],
};

export const balanceReducer = (
  state = initState,
  action: BalanceAction
): BalanceType => {
  switch (action.type) {
    case "ADDEXPENSE":
      state.expenses.unshift(action.payload);
      return {
        ...state,
        expense: state.expense + action.payload.amount,
      };
    case "ADDINCOME":
      state.incomes.unshift(action.payload);
      return {
        ...state,
        income: state.income + action.payload.amount,
      };
    default:
      return state;
  }
};
