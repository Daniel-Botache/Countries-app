import { addAllCountries } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountriesCopy);
  useEffect(() => {
    dispatch(addAllCountries());
  }, [dispatch]);
  return (
    <div>
      <Cards allCountries={allCountries} />
    </div>
  );
}
