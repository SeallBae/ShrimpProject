
const siteRouter = require("./site");
const meRouter = require("./me");
const pondsRouter = require("./ponds");
const loginRouter = require("./login");

function route(app) {
  app.use("/search", (req, res) => {});
  app.use("/me", meRouter);
  app.use("/ponds", pondsRouter);
  app.use("/home", siteRouter);  
  app.use("/", siteRouter);
}

module.exports = route;
