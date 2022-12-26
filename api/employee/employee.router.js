const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  getEmployeeByName,
} = require("./employee.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.patch("/", updateEmployee);
router.get("/name/:name", getEmployeeByName);

module.exports = router;
