import React, { useEffect, useState } from "react";
import fetchDataFromApi from "./fetchDataFromApi";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);

    fetchDataFromApi(url)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError("something went worng!!! " + error);
      });
  }, [url]);
  return { data, error };
};
export default useFetch;
