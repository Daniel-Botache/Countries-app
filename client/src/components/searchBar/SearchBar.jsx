import { useState } from "react";
import { addCountriesByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  const dispatch = useDispatch();
  const onClickFunction = () => {
    dispatch(addCountriesByName(id));
  };
  return (
    <div className={style.searchContainer}>
      <input
        type="search"
        onChange={handleChange}
        className={style.searchContainer_input}
        placeholder="Search country"
      />
      <button
        onClick={() => onClickFunction()}
        className={style.searchContainer_button}
      >
        <img
          src="https://www.citypng.com/public/uploads/preview/white-search-icon-button-png-img-116400840301syqkherpj.png"
          alt="search"
          className={style.searchContainer_img}
        />
      </button>
    </div>
  );
}
