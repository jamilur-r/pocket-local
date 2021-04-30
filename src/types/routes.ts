import { RecordType } from "./balanse";

export type StackNavigatorParams = {
  splash: undefined;
  signin: undefined;
  home: undefined;
};

export type TabNavigatorParams = {
  dashboard: undefined;
};

export type HomeNavigatorParams = {
  homeinfo: undefined;
  addexp: undefined;
  addinc: undefined;
  tranedit: {
    type: string;
    record: RecordType;
  };
};
