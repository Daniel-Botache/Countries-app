import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./FilterBar.module.css";
import {
  orderContinent,
  addAllCountries,
  filterByActivity,
  aphabeticalOrder,
  populationOrder,
} from "../../redux/actions";

export default function FilterBar() {
  //interaccion estado global____________________________________________________
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  // Estados locales _____________________________________________________________
  const [continent, setContinent] = useState("");
  const [continents, setContinents] = useState([]);
  const [activity, setActivity] = useState("");
  const [activities, setactivities] = useState([]);
  const [aux, setAux] = useState("");
  const [orderPop, setOrderPop] = useState("");

  //Funciones Locales_____________________________________________________________
  const handleChangeCont = (event) => {
    setContinent(event.target.value);
  };

  const handleChangeAct = (event) => {
    setActivity(event.target.value);
  };

  const handleOrder = (event) => {
    setAux(event.target.value);
  };

  const handleOrderPop = (event) => {
    setOrderPop(event.target.value);
  };

  //Ciclo de vida______________________________________________________________________________
  useEffect(() => {
    const uniqueContinents = countries.reduce((unique, country) => {
      if (!unique.includes(country.continent)) {
        return [...unique, country.continent];
      }
      return unique;
    }, []);
    setContinents(uniqueContinents);
  }, [countries]);

  useEffect(() => {
    if (continent !== "All") dispatch(orderContinent(continent));
    else dispatch(addAllCountries());
  }, [continent]);

  useEffect(() => {
    const allActivities = countries.reduce((activities, country) => {
      return activities.concat(country.activities);
    }, []);
    const activitiesSet = new Set(
      allActivities.map((activity) => activity.name)
    );
    const uniqueActivitiesArray = Array.from(activitiesSet);

    setactivities(uniqueActivitiesArray);
  }, [countries]);

  useEffect(() => {
    if (activity !== "All") dispatch(filterByActivity(activity));
  }, [activity]);

  useEffect(() => {
    dispatch(aphabeticalOrder(aux));
  }, [aux]);

  useEffect(() => {
    dispatch(populationOrder(orderPop));
  }, [orderPop]);

  //Diseño de componente_______________________________________________________________
  return (
    <div className={style.filterBarContainer}>
      <div className={style.filtersContainer}>
        <select
          name=""
          id=""
          onChange={handleChangeCont}
          className={style.filterBarContainer_select}
        >
          <option value="All">All continents</option>
          {continents.map((continent, index) => (
            <option key={index + 1} value={continent}>
              {continent}
            </option>
          ))}
        </select>

        <select
          name=""
          id=""
          onChange={handleChangeAct}
          className={style.filterBarContainer_select}
        >
          <option value="All">All activities</option>
          {activities.map((activity, index) => (
            <option key={index + 1} value={activity}>
              {activity}
            </option>
          ))}
        </select>
        <select
          name=""
          id=""
          onChange={handleOrder}
          className={style.filterBarContainer_select}
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select
          name=""
          id=""
          onChange={handleOrderPop}
          className={style.filterBarContainer_select}
        >
          <option value="population">Population</option>
          <option value="asc">Low to high</option>
          <option value="desc">High to low</option>
        </select>
      </div>
    </div>
  );
}
