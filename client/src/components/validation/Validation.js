const validation = (dataForm) => {
  const errors = {};

  if (!dataForm.name) {
    errors.name = "Name can't be empty";
  }

  if (parseInt(dataForm.duration) > 36 || parseInt(dataForm.duration) < 1) {
    errors.duration = "The duration must be between 1 and 36 hours";
  }
  if (parseInt(dataForm.difficulty) > 5 || parseInt(dataForm.difficulty) < 1) {
    errors.difficulty = "The difficulty must be between 1 and 5";
  }

  if (
    dataForm.season !== "winter" &&
    dataForm.season !== "summer" &&
    dataForm.season !== "spring" &&
    dataForm.season !== "autumn"
  ) {
    errors.season = "choose a correct season";
  }
  return errors;
};

export default validation;
