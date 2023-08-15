import Card from "../Card/Card";
import { useState } from "react";
import style from "./Cards.module.css";

export default function Cards({ allCountries }) {
  const countriesList = allCountries;

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCountries.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNextPage = () => {
    if (currentPage < Math.ceil(allCountries.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={style.principalContainer}>
      <div className={style.cardsContainer}>
        {currentCards.map((country) => (
          <Card key={country.id} country={country} />
        ))}
      </div>
      <div className={style.pagContainer}>
        <button
          onClick={handlePreviousPage}
          className={style.pagContainer_button}
        >
          {"<"}
        </button>
        {Array.from(
          { length: Math.ceil(allCountries.length / cardsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={style.pagContainer_button}
            >
              {index + 1}
            </button>
          )
        )}
        <button onClick={handleNextPage} className={style.pagContainer_button}>
          {">"}
        </button>
      </div>
    </div>
  );
}
