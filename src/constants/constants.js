export const LANGUANGE = "BAHTWOMAN/LANGUAGE";

export const API_PATH = `https://xavfsizdaryo.uz/${
  localStorage.getItem(LANGUANGE) ? localStorage.getItem(LANGUANGE) : "uz"
}`;
