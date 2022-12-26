const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `insert into employee values(?,?,?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.emp_id,
        data.first_name,
        data.middle_name,
        data.last_name,
        data.gender,
        data.designation,
        data.joining_date,
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getEmployee: (callback) => {
    const sql = `select * from leaves_db.employee`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getEmployeeById: (emp_id, callback) => {
    const sql = `select * from employee where emp_id=?`;
    pool.query(sql, [emp_id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateEmployee: (data, callback) => {
    const sql = `update leaves_db.employee set first_name=?, middle_name=?, last_name=?, gender=?, designation=?, joining_date=? where emp_id=?`;
    pool.query(
      sql,
      [
        data.first_name,
        data.middle_name,
        data.last_name,
        data.gender,
        data.designation,
        data.joining_date,
        data.emp_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getEmployeeByName: (first_name, callback) => {
    const sql = `select * from leaves_db.employee where first_name=?`;
    pool.query(sql, [first_name], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      console.log(results);
      return callback(null, results[0]);
    });
  },
};
