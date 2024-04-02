// import { Home } from "./pages"
// import { FetchAPI } from "./pages"

import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  createContext,
} from "react";
import useTodos from "./context/LanguageContext.jsx";
// import SelectComponent from "./components/SelectComponents/SelectComponent.js";
import Home from "./pages/Home.js";

const languages = ["Javascript", "Python"];
function App() {
  const { language, handleChangeLanguage } = useTodos();
  return (
    <div>
      <p id="favoriteLanguage">
        Favorite programing language: null
        {languages[language] ? languages[language] : languages[0]}
      </p>
      <button onClick={handleChangeLanguage} id="changeFavorite">
        toggle language
      </button>
      <Home />
    </div>
  );
}

// funtion MainSection()=>{
//   return (

//   )
// }

export default App;
