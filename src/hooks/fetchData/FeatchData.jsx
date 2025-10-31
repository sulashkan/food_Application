const api = import.meta.env.VITE_MOVIE_APP_API_URL;
const api_key = import.meta.env.VITE_MOVIE_APP_KEY;

// Custom Hook For Data Fatching  -

import { useState, useEffect } from "react";

const useFeatchData = (path, currentPage, setTotalPages) => {
  console.log(path); // Debuger Console

  const [data, setData] = useState([]); // returning data as Object -

  let filteredPath = ""; //   Filter Routes empty and something else -
  if (path) {
    filteredPath = `/${path}`;
  }

  useEffect(() => {
    console.log(`${api}${filteredPath}?api_key=${api_key}&page=${currentPage}`);
    const fetchData = async () => {
      const result = await fetch(
        `${api}${filteredPath}?api_key=${api_key}&page=${currentPage}`,
        { method: "GET" }
      );

      let outPut = await result.json();
      //   Set Total Pages -
      setTotalPages(outPut?.total_pages);
      //   set Movie Data
      setData(outPut?.results);
    };

    fetchData();
  }, [path, currentPage, setTotalPages]);

  return data;
};

export default useFeatchData;
