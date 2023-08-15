import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";

export default function NavBar() {
  const location = useLocation();
  return (
    <div className={style.navBarContainer}>
      <div className={style.titleContainer}>
        <img
          src="/src/images/compass(1).png"
          alt=""
          className={style.navBarContainer_icon}
        />
        <span className={style.navBarContainer_span}>TAIApp</span>
      </div>
      <Link to="/home" className={style.navBarContainer_link}>
        Home
      </Link>
      <Link to="/activities" className={style.navBarContainer_link}>
        Activities
      </Link>
      {location.pathname === "/home" && <SearchBar />}
      <Link to="/" className={style.navBarContainer_link}>
        <button className={style.navBarContainer_button}>
          <img
            src="https://w7.pngwing.com/pngs/253/714/png-transparent-logout-heroicons-ui-icon.png"
            alt="Logout"
            className={style.navBarContainer_img}
          />
        </button>
      </Link>
    </div>
  );
}
