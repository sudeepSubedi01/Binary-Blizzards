const dotenv = require("dotenv");
const jwt = require('jsonwebtoken')

dotenv.config();
let verify_token = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
  
};

module.exports = verify_token;
