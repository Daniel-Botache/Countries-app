const {
  countriesFromApi,
  createCountriesDb,
  searchById,
  countriesFromDB,
  getCountryByName,
} = require("../controllers/countriesControllers");

const saveCountriesHandler = async () => {
  try {
    const data = await countriesFromApi();
    await createCountriesDb(data);
    console.log("Countries saved");
  } catch (error) {
    console.error("Error saving countries into DB");
  }
};

//---------------------------------------------------------------------
const getCountriesHandler = async (req, res) => {
  try {
    const data = await countriesFromDB();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

//---------------------------------------------------------------------

const getCountriesByIdHandler = async (req, res) => {
  try {
    const { idPais } = req.params;

    // Buscar el país por ID
    let country = await searchById(idPais);

    // Verificar si el país no fue encontrado
    if (!country || Object.keys(country).length === 0) {
      return res.status(404).send("Country not found");
    }

    // Enviar los datos del país al cliente
    res.status(200).json(country);
  } catch (error) {
    // Enviar un objeto JSON con detalles del error en caso de excepción
    res.status(500).json({ error: true, message: error.message });
  }
};
//---------------------------------------------------------------------

const getCountryByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const lowerCaseName = name.toLowerCase();
    const country = await getCountryByName(lowerCaseName);
    if (!country || Object.keys(country).length === 0) {
      return res.status(404).send("Country not found");
    }
    return res.status(200).json(country);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  saveCountriesHandler,
  getCountriesByIdHandler,
  getCountriesHandler,
  getCountryByNameHandler,
};
