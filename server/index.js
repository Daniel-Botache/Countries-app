const server = require("./src/server");
const { conn } = require("./src/db.js");
const { saveCountriesHandler } = require("./src/handlers/countryHandlers");

const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
    saveCountriesHandler();
  })
  .catch((error) => console.error(error));
