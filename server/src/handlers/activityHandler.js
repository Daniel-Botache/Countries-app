const {
  createActivityController,
  getActivityController,
} = require("../controllers/activitiesController");

const createActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (!name || !difficulty || !duration || !season || !countries)
      return res.status(400).send("Faltan datos");

    await createActivityController(
      name,
      difficulty,
      duration,
      season,
      countries
    );

    return res.status(200).json({ message: "Actividad creada exitosamente" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//__________________________________________________________________________________

const getActivityHandler = async (req, res) => {
  try {
    const data = await getActivityController();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { createActivityHandler, getActivityHandler };
