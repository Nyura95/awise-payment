const crypto = require("crypto");

exports.createSha1 = string => {
  return crypto.createHash("sha1").update(string, "binary").digest("hex");
}