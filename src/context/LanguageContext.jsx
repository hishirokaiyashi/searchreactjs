import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  createContext,
} from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [language, setLanguage] = useState(0);

  const handleChangeLanguage = () => {
    setLanguage(language == 0 ? 1 : 0);
  };
  const contextValue = { language, handleChangeLanguage };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default function useTodos() {
  return useContext(TodosContext);
}

///

// const todosContext = createContext();
// const todosProvider = ({children}) =>{
//   const [language, setLanguage] = useState(0);
//   const handleLangugae = () =>{
//     setLanguage(language === 0 ? 1 : 0);
//   }
//   return (
//     <todosContext.Provider value ={language, handleLangugae}>
//       {children}
//     </todosContext.Provider>
//   )
// }
// const useTodos = () =>{
//   return useContext(TodosContext)
// }