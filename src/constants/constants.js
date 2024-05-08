export const LANGUANGE = "BAHTWOMAN/LANGUAGE";

export const API_PATH = `http://127.0.0.1:8000/${
  localStorage.getItem(LANGUANGE) ? localStorage.getItem(LANGUANGE) : "uz"
}`;
