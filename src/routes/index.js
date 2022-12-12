const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/search", (req, res) => {});
  app.use("/news", newRouter);
  app.get("/", siteRouter);
}

module.exports = route;
