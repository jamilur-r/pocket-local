export interface RecordType {
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BalanceType {
  income: number;
  expense: number;
  saving: number;
  incomes: null | RecordType[];
  expenses: null | RecordType[];
}

export const ADDEXP = "ADDEXPENSE";
export const ADDINC = "ADDINCOME";

export interface AddExpense {
  type: typeof ADDEXP;
  payload: RecordType;
}

export interface AddIncome {
  type: typeof ADDINC;
  payload: RecordType;
}

export type BalanceAction = AddExpense | AddIncome;
