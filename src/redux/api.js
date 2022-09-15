import axios from "axios";

const YOUR_APP_KEY = "e66028cc41fc83cac5317e24429f8468";
const YOUR_APP_ID = "4d645383";

export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  return await axios.get(url);
};
