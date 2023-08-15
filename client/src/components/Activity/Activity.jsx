import style from "./Activity.module.css";

export default function Activity(props) {
  const handleCirclesDifficulty = (difficulty) => {
    const circles = [];
    for (let i = 1; i <= 5; i++) {
      const circleClass =
        i <= difficulty ? style.activeCircle : style.inactiveCircle;
      circles.push(
        <div key={i} className={`${style.circle} ${circleClass}`} />
      );
    }
    return circles;
  };
  return (
    <div key={props.id} className={style.principalContainer}>
      <h1 className={style.principalContainer_h1}>{props.name}</h1>
      <div className={style.infoContainer}>
        <h2 className={style.infoContainer_span}>Difficulty</h2>
        <div className={style.circlesContainer}>
          {handleCirclesDifficulty(props.difficulty)}
        </div>
        <h2 className={style.infoContainer_h2}>
          <span className={style.infoContainer_span}>Duration:</span>{" "}
          {props.duration} (hrs)
        </h2>
        <h2 className={style.infoContainer_h2}>
          <span className={style.infoContainer_span}>Season:</span>{" "}
          {props.season}
        </h2>
      </div>
    </div>
  );
}
