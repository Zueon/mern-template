var _db;
const dbUrl = process.env.ATLAS_URI;
var client = require("mongodb").MongoClient;

module.exports = {
  connectToServer: function (callback) {
    client.connect(dbUrl, function (err, db) {
      if (db) {
        _db = db.db("blogDB");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  /** 데이터베이스 연결 */
  getDB: function () {
    return _db;
  },
};
