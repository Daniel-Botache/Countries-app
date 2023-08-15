import axios from "axios";

export const ADD_ALL_COUNTRIES = "ADD_ALL_COUNTRIES";
export const GET_NAME = "GET_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER_BY_CONTINENT = "ORDER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER";
export const POPULATION_ORDER = "POPULATION_ORDER";

export const addAllCountries = () => {
  const endpoint = "http://localhost:3001/countries";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!data.length) throw Error("No se encuentran perros");
      return dispatch({
        type: ADD_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const addCountriesByName = (name) => {
  const endpoint = `http://localhost:3001/countries/name?name=${name}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      if (!data.length) throw Error("Country not found");
      return dispatch({
        type: GET_NAME,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getCountryDetail = (detailId) => {
  const endpoint = `http://localhost:3001/countries/${detailId}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: GET_DETAIL,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const orderContinent = (payload) => {
  return {
    type: ORDER_BY_CONTINENT,
    payload,
  };
};

export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};

export const aphabeticalOrder = (order) => {
  return { type: ALPHABETICAL_ORDER, payload: order };
};

export const populationOrder = (order) => {
  return { type: POPULATION_ORDER, payload: order };
};

export function createActivity(activity) {
  console.log("ACTIVITY: ", activity);
  return async function () {
    try {
      console.log("body de form" + activity);
      const newAct = await axios.post(
        "http://localhost:3001/activities",
        activity
      );
      console.log(newAct);
    } catch (error) {
      console.log(error);
    }
  };
}
