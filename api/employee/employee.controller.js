const {
  create,
  getEmployee,
  getEmployeeById,
  updateEmployee,
  getEmployeeByName,
} = require("./employee.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    console.log(body);
    create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getEmployee: (req, res) => {
    getEmployee((error, results) => {
      if (error)
        return res.status(500).json({
          success: 0,
          message: "No records found",
        });
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getEmployeeById: (req, res) => {
    const id = req.params.id;
    console.log("params", id);
    getEmployeeById(id, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "no record found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updateEmployee: (req, res) => {
    const body = req.body;
    updateEmployee(body, (error, results) => {
      console.log(results);
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getEmployeeByName: (req, res) => {
    const name = req.params.name;
    getEmployeeByName(name, (error, results) => {
      console.log(results);
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "no record found",
        });
      }
      console.log(results);
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
