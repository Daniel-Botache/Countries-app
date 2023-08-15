const { Router } = require("express");
const {
  createActivityHandler,
  getActivityHandler,
} = require("../handlers/activityHandler");

const activitiesRouter = Router();

activitiesRouter.post("/", createActivityHandler);
activitiesRouter.get("/", getActivityHandler);

module.exports = activitiesRouter;
