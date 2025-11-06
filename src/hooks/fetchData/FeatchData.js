const api = import.meta.env.VITE_MOVIE_APP_API_URL;
const api_key = import.meta.env.VITE_MOVIE_APP_KEY;

// Custom Hook For Data Fatching  -


import { useState, useEffect } from "react";
const useFeatchData = (
  path,
  currentPage,
  setTotalPages,
  setLoding,
  debouncedKeyword
) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      let result = null;
      const fetchData = async () => {
        if (debouncedKeyword) {
          result = await fetch(
            `${api}/search/movie?query=${debouncedKeyword}&api_key=${api_key}&page=${currentPage}&language=en-US`,
            { method: "GET" })
        } else {
          result = await fetch(
            `${api}/movie/${path}?api_key=${api_key}&page=${currentPage}`,
            { method: "GET" });
        }

        let outPut = await result.json();
        setTotalPages(outPut?.total_pages);
        setData(outPut?.results);
        setTimeout(() => {
          setLoding(false);
        }, 1000);
      };

      fetchData();
    } catch (error) {
      console.log("Error to fatch Api", error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, currentPage, setTotalPages , debouncedKeyword]);

  return data;
};

export default useFeatchData;
