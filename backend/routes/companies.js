const express = require("express");
const router = express.Router();
var clearbit = require("clearbit")("sk_30240e2d1dfc1d73d26ab80390d1fd49");

// @route    GET companies/search
// @query    domain(!)
// @desc     Search companies
// @access   Public
router.get("/search", async (req, res) => {
  let searchTerm = req.query.domain;
  let Company = clearbit.Company;
  Company.find({ domain: searchTerm })
    .then(function (company) {
      res.status(200).send({ company });
    })
    .catch(Company.NotFoundError, function (err) {
      res.status(400).send({ error: "No results" });
    })
    .catch(function (err) {
      res.status(500).send({ error: "Bad request" });
    });
});

module.exports = router;
