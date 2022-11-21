import axios from "axios";

const API_KEY = "4d539679c72812b336dfc35379ffabe1";
const BASE_URL = `https://api.themoviedb.org/3`;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const getMovieDiscovery = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: { api_key: API_KEY, page: page },
    });
    return { error: false, data: response.data };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY },
    });
    return { error: false, data: response.data };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieGenre = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/list/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return { error: false, data: response.data.items };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMoviePopular = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
    return { error: false, data: response.data };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieTrending = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
    return { error: false, data: response.data };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getGendreList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return { error: false, data: response.data.genres };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieTopRate = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
    return { error: false, data: response.data };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieTrailer = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/videos`, {
      params: {
        api_key: API_KEY,
      },
      headers: {
        "Content-Type": "*",
      },
    });
    return { error: false, data: response.data.results };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieSearch = async (keyword) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}`,
      {
        params: {
          query: keyword,
        },
      }
    );
    return { error: false, data: response.data.results };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieUpComing = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
    return { error: false, data: response.data };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

const getMovieRecommendation = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/recommendations`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return { error: false, data: response.data.results };
  } catch (error) {
    console.log(error.message);
    return { error: true, data: null };
  }
};

export {
  IMG_URL,
  getMovieDiscovery,
  getMovieDetail,
  getMovieGenre,
  getMovieTrending,
  getGendreList,
  getMovieTrailer,
  getMovieSearch,
  getMovieUpComing,
  getMoviePopular,
  getMovieRecommendation,
  getMovieTopRate,
};
