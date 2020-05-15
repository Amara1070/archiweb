const databaseConnection = require("../database");

class User {
  constructor() {
    this.database = "archi-web";
    this.table = "users";
  }

  find(callback) {
    const query = `SELECT * FROM \`${this.database}\`.${this.table};`
    console.log(query)
    databaseConnection.query(
      query,
      (error, results) => {
        if (error) {
          console.log("error", error);
        }

        callback(results);
      }
    );
  }
}

const UserInstance = new User();

module.exports = UserInstance;
