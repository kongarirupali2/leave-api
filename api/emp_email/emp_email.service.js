const pool = require("../../config/db.js");

module.exports = {
  // create: (data, callback) => {
  //   console.log(data);
  //   const sql = `insert into emp_email values(?,?,?)`;
  //   pool.query(
  //     sql,
  //     [data.emp_id, data.email, data.password],
  //     (error, results, fields) => {
  //       if (error) {
  //         console.log(error);
  //         return callback(error);
  //       }
  //       return callback(null, results);
  //     }
  //   );
  // },
  getEmployee_Email: (id, callback) => {
    const sql = `select * from leaves_db.emp_email where emp_id=?`;
    pool.query(sql, [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getEmployee_Email_all: (callback) => {
    const sql = `select * from leaves_db.emp_email`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results);
    });
  },
  // getEmp_EmailById: (emp_id, callback) => {
  //   const sql = `select * from emp_email where emp_id=?`;
  //   pool.query(sql, [emp_id], (error, results, fields) => {
  //     if (error) {
  //       console.log(error);
  //       return callback(error);
  //     }
  //     return callback(null, results[0]);
  //   });
  // },
};
