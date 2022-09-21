const express = require("express");
const recordRoutes = express.Router();
const dbconn = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/").get((req, res) => {
  let db_connect = dbconn.getDB();
  let query = { msg: "Hello, world" };
  let options = {
    projection: { _id: 0, msg: 1 },
  };
  // db_connect
  //   .collection("test")
  //   .find({})
  //   .toArray(function (err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //   });

  db_connect.collection("test").findOne(query, options, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;
