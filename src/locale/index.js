import { LANGUANGE } from "../constants/constants";
import { ru } from "./ru";
import { uz } from "./uz";

export const getLanguage = () => {
  return localStorage.getItem(LANGUANGE);
};

export const getText = (word) => {
  return getLanguage() === "uz" ? uz[word] : ru[word];
};

