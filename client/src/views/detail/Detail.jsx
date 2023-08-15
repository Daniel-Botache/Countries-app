import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../../redux/actions";
import style from "./Detail.module.css";
import Activities from "../../components/Activities/Activities";

export default function Detail() {
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  let { detailId } = useParams();
  useEffect(() => {
    dispatch(getCountryDetail(detailId));
  }, [dispatch]);
  return (
    <div className={style.principalContainer}>
      <h1 className={style.principalContainer_h1}>Country info</h1>
      <div className={style.subContainer}>
        <h1 className={style.infoContainer_h1}>
          {countryDetail?.name} ({countryDetail?.id})
        </h1>
        <div className={style.detailContainer}>
          <div className={style.imgContainer}>
            <img
              src={countryDetail?.image}
              alt="Country"
              className={style.imgContainer_img}
            />
          </div>
          <div className={style.infoContainer}>
            <h2 className={style.infoContainer_h2}>
              <span>Continent:</span> {countryDetail?.continent}
            </h2>
            <h2 className={style.infoContainer_h2}>
              <span>Capital:</span> {countryDetail?.capital}
            </h2>
            <h2 className={style.infoContainer_h2}>
              <span>Subregion:</span> {countryDetail?.subregion}
            </h2>
            <h2 className={style.infoContainer_h2}>
              <span>Area:</span> {countryDetail?.area} Km
            </h2>
            <h2 className={style.infoContainer_h2}>
              <span>Population:</span> {countryDetail?.population}
            </h2>
          </div>
        </div>
      </div>
      <div className={style.activitiesContainer}>
        <h1 className={style.activitiesContainer_h2}>
          Activities to do:{" "}
          <Activities activities={countryDetail?.activities} />
        </h1>
      </div>
    </div>
  );
}
