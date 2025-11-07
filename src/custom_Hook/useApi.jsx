import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  // const [search , setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&page=${page}`, options);
        const data = await response.json();

        setData(data?.results);
        setPage(data.page);
        setTotalPage(data.total_pages);

        setLoading(false);
      } catch (err) {
        throw new Error(err);
        // setPage(1);
        // setTotalPage(null);
      }
    };
    fetchData();
  }, [url]);
 
  return { data, loading, page, totalPage, setPage, setTotalPage };
};

export default useFetch;
