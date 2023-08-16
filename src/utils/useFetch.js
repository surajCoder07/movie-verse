import React, { useEffect, useState } from "react";
import fetchDataFromApi from "./fetchDataFromApi";

const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
    fetchDataFromApi(url)
      .then((response) => {
        setFetchedData(response);
      })
      .catch((error) => {
        setError("something went worng!!! ");
      });
  }, [url]);
  return { fetchedData, error };
};
export default useFetch;
