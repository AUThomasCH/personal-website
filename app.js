const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const app = express();

app.use(compression());

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
      fontSrc: ["'self'"],
    },
  })
);

app.use(helmet.referrerPolicy({ policy: "no-referrer" }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(8080);
