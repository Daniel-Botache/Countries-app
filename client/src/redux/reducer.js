import {
  ADD_ALL_COUNTRIES,
  GET_NAME,
  GET_DETAIL,
  ORDER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ALPHABETICAL_ORDER,
  POPULATION_ORDER,
} from "./actions";

let initialState = {
  allCountries: [],
  allCountriesCopy: [],
  countryDetail: {},
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ALL_COUNTRIES:
      return { ...state, allCountriesCopy: payload, allCountries: payload };
    case GET_NAME:
      return { ...state, allCountries: payload, allCountriesCopy: payload };
    case GET_DETAIL:
      return { ...state, countryDetail: payload };
    case ORDER_BY_CONTINENT:
      return {
        ...state,
        allCountriesCopy: state.allCountries.filter(
          (country) => country.continent === payload
        ),
      };
    case FILTER_BY_ACTIVITY:
      const activityName = payload;
      const allCountriesCopy = state.allCountries.filter((country) =>
        country.activities.some((activity) => activity.name === activityName)
      );
      return {
        ...state,
        allCountriesCopy,
      };
    case ALPHABETICAL_ORDER:
      if (payload === "asc") {
        return {
          ...state,
          allCountriesCopy: state.allCountriesCopy
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name)),
        };
      } else if (payload === "desc") {
        return {
          ...state,
          allCountriesCopy: state.allCountriesCopy
            .slice()
            .sort((a, b) => b.name.localeCompare(a.name)),
        };
      }
    case POPULATION_ORDER:
      if (payload === "asc") {
        return {
          ...state,
          allCountriesCopy: state.allCountriesCopy
            .slice()
            .sort((a, b) => a.population - b.population),
        };
      } else if (payload === "desc") {
        return {
          ...state,
          allCountriesCopy: state.allCountriesCopy
            .slice()
            .sort((a, b) => b.population - a.population),
        };
      }

    default:
      return { ...state };
  }
};

export default reducer;
