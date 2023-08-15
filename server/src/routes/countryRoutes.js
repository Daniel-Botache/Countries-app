const { Router } = require("express");
const {
  getCountriesHandler,
  getCountriesByIdHandler,
  getCountryByNameHandler,
} = require("../handlers/countryHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/?name", getCountryByNameHandler);
countriesRouter.get("/:idPais", getCountriesByIdHandler);

module.exports = countriesRouter;
