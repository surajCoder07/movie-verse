import { base_URL } from "./constant";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2ViZDI5ZGY0ZGJlMmI1ZWVlN2I0YTA3ZDVhNWNhOCIsInN1YiI6IjY0ZDYyZjRjYmYzMWYyMDFjYThiOTgzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BLsTdY9yWNYGXJKZZH1zUxPuV90bs5JTmJUEnKh8AQs",
  },
};

const fetchDataFromApi = async (url) => {
  try {
    const response = await fetch(base_URL + url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("went worng");
  }
};

export default fetchDataFromApi;
