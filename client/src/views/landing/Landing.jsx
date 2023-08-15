import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const LandingPage = () => {
  return (
    <div className={style.LandingPage}>
      <div className={style.principalContainer}>
        <div className={style.titleContainer}>
          <img src="/src/images/compass(1).png" alt="" className={style.icon} />
          <h1 className={style.titleContainer_h1}>TAIApp</h1>
        </div>
        <h2 className={style.principalContainer_h2}>
          ¡Search, discover and save!
        </h2>
        <p className={style.principalContainer_p}>
          Are you traveling? With the TAIA app, you'll never forget the
          activities you planned to do at each of your destinations. Welcome to
          the best friend of travelers.
        </p>
        <Link to="/home">
          <button className={style.landingpage_button}>Go in</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
