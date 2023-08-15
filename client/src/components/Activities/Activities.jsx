import React, { useEffect } from "react";
import Activity from "../Activity/Activity";
import style from "./Activities.module.css";

export default function Activities({ activities }) {
  return (
    <div className={style.principalCointainer}>
      {activities?.map(({ difficulty, duration, id, name, season }) => {
        return (
          <Activity
            key={id}
            name={name}
            duration={duration}
            difficulty={difficulty}
            season={season}
          />
        );
      })}
    </div>
  );
}
