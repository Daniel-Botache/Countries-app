const axios = require("axios");
const { Country } = require("../db");
const { Activity } = require("../db");
const { Sequelize } = require("sequelize");

const URL = "http://localhost:5000/countries";

const cleanInfo = (array) => {
  return array.map((country) => {
    const capital =
      country.capital && country.capital.length > 0
        ? country.capital[0]
        : country.name.official;
    return {
      id: country.cca3,
      name: country.name.official,
      image: country.flags.svg,
      capital: capital,
      continent: country.continents[0],
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
  });
};

const countriesFromApi = async () => {
  const responseApi = await axios.get(`${URL}`);
  const data = responseApi.data;
  let countryApi = cleanInfo(data);
  return countryApi;
};

//__________________________________________________________________________________

const createCountriesDb = async (countriesArray) => {
  return await Country.bulkCreate(countriesArray);
};

//__________________________________________________________________________________

const countriesFromDB = async () => {
  const countries = await Country.findAll({
    include: [
      {
        model: Activity,
        as: "activities",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  return countries;
};

//__________________________________________________________________________________

const searchById = async (id) => {
  return await Country.findOne({
    where: { id },
    include: [
      {
        model: Activity,
        as: "activities",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
};
//__________________________________________________________________________________

const getCountryByName = async (lowerCaseName) => {
  return await Country.findAll({
    where: {
      // Cambia 'name' a la columna correcta de tu modelo 'Country'
      // Puede ser 'name' u otro nombre según la estructura de tu modelo
      name: {
        [Sequelize.Op.iLike]: `%${lowerCaseName}%`,
      },
    },
    include: [
      {
        model: Activity,
        as: "activities",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
};

module.exports = {
  countriesFromApi,
  createCountriesDb,
  searchById,
  countriesFromDB,
  getCountryByName,
};
