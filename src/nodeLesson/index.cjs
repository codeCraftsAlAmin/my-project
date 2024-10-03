const app = require("./app.cjs");
const config = require("./config/config.cjs");
const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
