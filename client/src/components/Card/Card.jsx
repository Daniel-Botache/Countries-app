import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ country }) {
  const { name, image, continent, id } = country;
  return (
    <div key={id} className={style.cardContainer}>
      <Link to={`/detail/${id}`} className={style.cardContainer_link}>
        <div className={style.imageContainer}>
          <img src={image} alt="Country" className={style.cardContainer_img} />
        </div>
        <div className={style.textContainer}>
          <h2 className={style.cardContainer_h2}>{name}</h2>
        </div>
        <p className={style.cardContainer_p}>{continent}</p>
      </Link>
    </div>
  );
}
