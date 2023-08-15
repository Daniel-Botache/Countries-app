const { Router } = require("express");
const countriesRouter = require("../routes/countryRoutes");
const activitiesRouter = require("./activityRoutes");
const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);
module.exports = router;
