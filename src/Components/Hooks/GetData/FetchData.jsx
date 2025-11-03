// useFetch.jsx
import { useState, useEffect } from "react";

const url = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

const useFetch = (path) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}${path}?api_key=${api_key}`);
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return { data, loading, error };
};

export default useFetch;
