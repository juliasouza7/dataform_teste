const { BigQuery } = require("dataform");
const { oracle } = require("dataform-sources")();

const myTable = new BigQuery()
  .query(
    `CREATE TABLE my_table (
      id INT,
      name VARCHAR(255),
      age INT
    )`
  )
  .database("oracle")
  .description("This is my table.");

module.exports = {
  schema: "my_oracle_schema",
  name: "my_table",
  dependencies: [oracle],
  ...myTable
};
