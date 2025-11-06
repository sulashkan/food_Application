/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext(); // 1

export const useSearch = () => useContext(SearchContext); //  2

export const DataProvider = ({ children }) => {
  const [debouncedKeyword, setDebouncedKeyword] = useState(""); // for search keyword -
  const [user, setUser] = useState(); // for toekn check  -

  useEffect(() => {
    let isLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isLoggedIn) {
      setUser(isLoggedIn);
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{ debouncedKeyword, setDebouncedKeyword, user, setUser }}
    >
      {children}
    </SearchContext.Provider>
  );
};
