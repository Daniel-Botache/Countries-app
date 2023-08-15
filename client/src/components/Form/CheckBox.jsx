import { useState } from "react";
import style from "./checkBox.module.css";

const CheckBox = ({ initialState, id, onChange, country }) => {
  const [checked, setChecked] = useState(initialState);
  const onClick = (checked) => {
    setChecked(checked);
    onChange(id, checked);
  };
  return (
    <div className={style.checkBoxContainer}>
      <img src={country.image} alt="" className={style.checkBoxContainer_img} />
      <label htmlFor={id} className={style.checkBoxContainer_label}>
        {country.name}
      </label>
      <input
        id={id}
        type="checkbox"
        onChange={(event) => onClick(event.target.checked)}
        checked={checked}
        className={style.checkBoxContainer_input}
      />
    </div>
  );
};

export default CheckBox;
