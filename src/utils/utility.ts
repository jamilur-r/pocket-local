import path from "path";
import { RecordType } from "../types/balanse";

export const getGreetings = (): string => {
  let greetings = "Good Morning";
  let date = new Date();
  if (date.getHours() < 18) {
    greetings = "Good Afternoon";
  } else if (date.getHours() <= 21) {
    greetings = "Good Evening";
  } else if (date.getHours() > 22) {
    greetings = "It is getting late, should sleep";
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
    (item) => item.createdAt.getDay() === today.getDay()
  );
  const filteredInc = incomes.filter(
    (item) => item.createdAt.getDay() === today.getDay()
  );

  let mergedData: RecordType[] = [...filteredExp, ...filteredInc];
  return mergedData;
};
