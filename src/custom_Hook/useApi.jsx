import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data?.results);
        setLoading(false);
      } catch(err) {
        throw new Error(err); 
      
      }
      
    };

    fetchData();
  } , []);

  return {data , loading}
};

export default useFetch;
