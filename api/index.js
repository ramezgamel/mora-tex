require("dotenv").config();
const server = require("./app");

const port = process.env.PORT;
server.listen(port, () =>
  console.log(`app listening http://127.0.0.1:${port}`)
);
