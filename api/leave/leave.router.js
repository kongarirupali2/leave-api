const {
  create,
  getLeaves,
  getLeaveByEmpId,
  updateLeave,
} = require("./leave.controller");

const router = require("express").Router();
router.post("/", create);
router.get("/", getLeaves);
router.get("/:id", getLeaveByEmpId);
router.patch("/", updateLeave);

module.exports = router;
