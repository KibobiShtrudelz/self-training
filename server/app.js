const express = require("express");
const bodyParser = require("body-parser");

const eStoreRoutes = require("./routes/eStore-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

//   next();
// });

app.use("/e-store", eStoreRoutes);

app.use("/user", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError(404, "Could not find this route.");
  throw error;
});

app.use((err, req, res, next) => {
  if (!res.headerSent) {
    return next(err);
  }

  res
    .status(err.code || 500)
    .json({ message: err.message || "Unknown error occured!" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
