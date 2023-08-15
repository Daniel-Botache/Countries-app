const { Activity, Country } = require("../db");
const { Sequelize } = require("sequelize");

const createActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const newActivity = await Activity.findOrCreate({
    where: { name, difficulty, duration, season },
  });

  if (countries && countries.length > 0) {
    const countriesToAssociate = await Country.findAll({
      where: { id: countries },
    });

    // Relaciona los países con la actividad
    await newActivity[0].addCountries(countriesToAssociate);
  }
};

//___________________________________________________________________________________-

const getActivityController = async () => {
  const activities = await Activity.findAll({
    include: [
      {
        model: Country,
        as: "countries",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  return activities;
};

module.exports = {
  createActivityController,
  getActivityController,
};
