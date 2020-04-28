const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/e-store", (req, res) => {
  res.send({
    sections: [
      {
        title: "HOME",
        path: "/",
        exact: true,
        icon: "icon-home",
      },
      {
        title: "ABOUT",
        path: "/about",
        icon: "icon-fire",
      },
      {
        title: "E-STORE",
        path: "/e-store",
        icon: "icon-leaf",
      },
      {
        title: "COTACTS",
        path: "/contacts",
        icon: "icon-pen",
      },
    ],
  });
});

app.get("/e-store/section-1", async (req, res) => {
    const response = await fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole");

    const body = await response.json();

    if (response.status !== 200) {
      throw new Error(body.message);
    }

    res.send(body);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
