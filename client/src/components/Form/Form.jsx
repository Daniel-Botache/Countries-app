import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllCountries, createActivity } from "../../redux/actions";
import CheckBox from "./CheckBox";
import Validation from "../validation/Validation";
import style from "./Form.module.css";

const Form = () => {
  //Redux________________________________________________________________
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountriesCopy);

  //Locale States______________________________________________________
  const [checkedItems, setCheckedItems] = useState([]);

  const [dataForm, setDataForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({});

  //handlers___________________________________________________________

  const onCheckboxClicked = (idx, isChecked) => {
    if (isChecked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, idx]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== idx)
      );
    }
  };

  const stateReset = () => {
    setDataForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  const handleChangeCountries = (array) => {
    setDataForm({ ...dataForm, countries: array });
  };

  const submitForm = (event) => {
    event.preventDefault();
    var form = true;
    if (dataForm["name"].length < 2) {
      form = false;
    } else if (!dataForm["countries"].length >= 1) {
      form = false;
    }
    if (form) {
      dispatch(createActivity(dataForm))
        .then(() => stateReset())
        .then(() => setCheckedItems([]))
        .then(() => {
          alert("Activity added");
          window.location.reload();
        });
    } else {
      return alert("Please fill all the fields before creating a new activity");
    }
  };

  const handleChange = (event) => {
    setDataForm({ ...dataForm, [event.target.id]: event.target.value });
    setErrors(
      Validation({ ...dataForm, [event.target.id]: event.target.value })
    );
  };

  //life cicle control_____________________________________________________
  useEffect(() => {
    dispatch(addAllCountries());
  }, [dispatch]);

  useEffect(() => {
    handleChangeCountries(checkedItems);
  }, [checkedItems]);

  //Component design______________________________________________________
  return (
    <div className={style.principalContainer}>
      <h1 className={style.principalContainer_h1}>Create activity</h1>
      <form
        action=""
        onSubmit={(e) => submitForm(e)}
        className={style.formContainer}
      >
        <div className={style.inputContainer}>
          <label htmlFor="name" className={style.inputContainer_label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            className={style.inputContainer_input}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="difficulty" className={style.inputContainer_label}>
            Difficulty
          </label>
          <select
            name=""
            id="difficulty"
            onChange={handleChange}
            className={style.inputContainer_select}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty && <p>{errors.difficulty}</p>}
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="duration" className={style.inputContainer_label}>
            Duration(/h)
          </label>
          <input
            type="number"
            id="duration"
            onChange={handleChange}
            className={style.inputContainer_input}
          />
          {errors.duration && <p>{errors.duration}</p>}
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="season" className={style.inputContainer_label}>
            Season
          </label>
          <select
            name=""
            id="season"
            onChange={handleChange}
            className={style.inputContainer_select}
          >
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="autumn">Autumn</option>
            <option value="spring">Spring</option>
          </select>
          {errors.season && <p>{errors.season}</p>}
        </div>
        <h2>Select countries</h2>
        <div className={style.countriesContainer}>
          {countries.map((checkbox, i) => (
            <CheckBox
              key={checkbox.id}
              initialState={false}
              id={checkbox.id}
              onChange={onCheckboxClicked}
              country={checkbox}
            />
          ))}
        </div>
        <button className={style.button}>Create activity</button>
      </form>
    </div>
  );
};

export default Form;
