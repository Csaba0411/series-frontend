import axios from "axios";

export const fetchSeriesApi = async () => {
  console.log(document.cookie);
  return await axios.get("http://localhost:8080/shows", {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

export const fetchSeriesByIdApi = async (id) => {
  console.log(document.cookie);
  return await axios.get(`http://localhost:8080/shows/${id}`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

export const fetchStaffByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/staff`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

export const fetchSearchBySearchValueApi = async (value) => {
  return await axios.get(`http://localhost:8080/shows/searchresult/${value}`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

export const fetchPersonsApi = async (page) => {
  return await axios.get(`http://localhost:8080/staff/page/${page}`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

export const fetchPersonsByNameApi = async (name) => {
  return await axios.get(`http://localhost:8080/staff/search/${name}`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

// export const fetchCastCreditsByIdApi = async (id) => {
//   return await axios.get(`http://localhost:8080/staff/castcredit/${id}`);
// };

export const fetchSeasonsByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/season`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

export const fetchEpisodesByIdApi = async (id) => {
  return await axios.get(`http://localhost:8080/shows/${id}/episodes`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};

export const fetchSeasonEpisodeApi = async (id, num) => {
  return await axios.get(
    `http://localhost:8080/shows/${id}/season/${num}/episode`,
    {
      credentials: "same-origin",
      headers: {
        Authorization: "Bearer " + document.cookie.split("=")[1],
      },
    }
  );
};

export const fetchFavoriteApi = async () => {
  return await axios.get(`http://localhost:8080/shows/favourites`, {
    credentials: "same-origin",
    headers: {
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
  });
};
