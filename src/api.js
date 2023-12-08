// src/api.js
const API_URL = "https://api.papertalk.io";

export const getPaperData = async (
  limit = 20,
  query = "",
  sort = "",
  fields = ""
) => {
  try {
    const response = await fetch(
      `${API_URL}/search/paper?limit=${limit}&query=${query}&sort=${sort}&fields=${fields}`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
