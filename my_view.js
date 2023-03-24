const { BigQuery } = require("dataform");
const { oracle } = require("dataform-sources")();

const myView = new BigQuery()
  .query(
    `CREATE VIEW my_view AS
    SELECT *
    FROM my_table
    WHERE age >= 18`
  )
  .database("oracle")
  .description("This is my view.");

module.exports = {
  schema: "my_oracle_schema",
  name: "my_view",
  dependencies: [oracle],
  ...myView
};
