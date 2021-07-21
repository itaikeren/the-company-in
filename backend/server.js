const express = require("express");
const cors = require("cors");

const app = express();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use("/companies", require("./routes/companies"));

app.use((error, req, res, next) => {
  return res.status(500).json({ errors: [{ msg: error.toString() }] });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
