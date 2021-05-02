import path from "path";
import { expenseCategories, incomeCategories } from "../data/data";
import { RecordType } from "../types/balanse";

export const getGreetings = (): string => {
  let greetings = "Good Morning";
  let date = new Date();
  if (date.getHours() < 18) {
    greetings = "Good Afternoon";
  } else if (date.getHours() <= 21) {
    greetings = "Good Evening";
  } else if (date.getHours() > 22) {
    greetings = "It is getting late";
  }
  return greetings;
};

export const formatNumbers = (value: number): string => {
  var newValue: string = "";
  if (value >= 1000) {
    var suffixes: string[] = ["", "k", "m", "b", "t"];
    var suffixNum: number = Math.floor(("" + value).length / 3);
    var shortValue: string = "";
    for (var precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      ).toString();

      var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (parseFloat(shortValue) % 1 != 0)
      shortValue = parseFloat(shortValue).toFixed(1);
    newValue = shortValue + " " + suffixes[suffixNum];
  } else {
    return value.toString();
  }
  return newValue;
};

export const formatter = (amount: number): string =>
  amount.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");

export const getTodaysHistory = (
  expenses: RecordType[],
  incomes: RecordType[]
): Array<RecordType> => {
  let today: Date = new Date();

  const filteredExp = expenses.filter(
    (item) => new Date(item.createdAt).getDay() === today.getDay()
  );
  const filteredInc = incomes.filter(
    (item) => new Date(item.createdAt).getDay() === today.getDay()
  );

  let mergedData: RecordType[] = [...filteredExp, ...filteredInc];
  console.log(mergedData);
  
  return mergedData;
};

export interface CatType {
  icon: string;
  background: string;
}
export const getCategryIcon = (category: string, type: string): CatType => {
  let found: CatType = {
    icon: "",
    background: "",
  };
  if (type === "Expense") {
    expenseCategories.map((i) => {
      if (i.name === category) {
        found = {
          ...found,
          icon: i.icon,
          background: i.background,
        };
      }
    });
    return found;
  } else if (type === "Income") {
    incomeCategories.map((i) => {
      if (i.name === category) {
        found = {
          ...found,
          icon: i.icon,
          background: i.background,
        };
      }
    });
    return found;
  } else return found;
};
