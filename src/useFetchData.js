import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
