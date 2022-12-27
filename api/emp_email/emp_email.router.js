const router = require("express").Router();
const {
  getEmp_Email,
  getEmployee_Email_all,
} = require("./emp_email.controller");
router.get("/:id", getEmp_Email);
router.get("/", getEmployee_Email_all);
module.exports = router;
