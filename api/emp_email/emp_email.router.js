const router = require("express").Router();
const { getEmp_Email } = require("./emp_email.controller");
router.post("/:id", getEmp_Email);
module.exports = router;
