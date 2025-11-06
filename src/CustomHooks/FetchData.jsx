// useFetch.jsx
import { useState, useEffect } from "react";

const url = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

const useFetch = (path) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setpage] = useState(1);
  const [totalpage, setTotalPage] = useState(null);

  useEffect(() => {
    if (!path) return; 
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const finalURL = `${url}${path}${
          path.includes("?") ? "&" : "?"
        }api_key=${api_key}&page=${page}`;

        console.log("Fetching:", finalURL);

        const res = await fetch(finalURL);

        if (!res.ok) {
          const text = await res.text();
          throw new Error(
            `HTTP ${res.status}: ${res.statusText} - ${text || "No response"}`
          );
        }

        
        const text = await res.text();
        let result = {};
        try {
          result = text ? JSON.parse(text) : {};
        } catch (jsonErr) {
          throw new Error("Invalid JSON in API response");
        }

        setData(result);
        setpage(result.page || 1);
        setTotalPage(result.total_pages || 0);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path, page]);

  return { data, loading, error, page, setpage, totalpage };
};

export default useFetch;
