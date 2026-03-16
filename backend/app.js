const express = require("express");
const cors = require("cors");
const PORT = 3001;

const app = express();

// Autoriser le frontend à appeler cette API
app.use(cors());

app.get("/api/status", function (req, res) {
  res.json({
    status: "success",
    message: "Le backend est connecté !",
  });
});

app.listen(PORT, function () {
  console.log("Backend Server started on port", PORT);
});
