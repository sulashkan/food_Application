import { useState, useEffect } from "react";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

function useTrailer(id) {
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchTrailer = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${baseUrl}/movie/${id}/videos?api_key=${apiKey}`);
        const data = await res.json();
        setTrailers(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrailer();
  }, [id]);

  return { trailers, loading, error };
}

export default useTrailer;
