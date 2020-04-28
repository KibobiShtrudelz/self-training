const express = require("express");
const bodyParser = require("body-parser");

const eStoreRoutes = require("./routes/eStore-routes");

const app = express();

app.use("/e-store", eStoreRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
