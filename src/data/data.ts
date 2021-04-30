import { Colors, iconBG } from "../styles/Colors";

interface Category {
  name: string;
  icon: string;
  background: string;
}

export const expenseCategories: Category[] = [
  { name: "Food", icon: "food", background: iconBG.one },
  { name: "Travel", icon: "travel", background: iconBG.two },
  { name: "Taxi", icon: "taxi", background: iconBG.four },
  { name: "Shopping", icon: "shopping", background: iconBG.four },
  { name: "Loan to a friend", icon: "loan", background: iconBG.three },
  { name: "Resturant Bill", icon: "resturant", background: iconBG.three },
  { name: "Education", icon: "education", background: iconBG.two },
];
export const incomeCategories: Category[] = [
  { name: "Salary", icon: "loan", background: iconBG.three },
  { name: "Loan Collection", icon: "loan", background: iconBG.two },
  { name: "Gift", icon: "loan", background: iconBG.one },
];
