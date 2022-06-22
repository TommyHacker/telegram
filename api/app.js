const express = require("express");
const app = express();
const cors = require("cors");
const telegraphRoutes = require("./routes/telegraphRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("root Route"));

app.use("/telegraphs", telegraphRoutes);

module.exports = app;
