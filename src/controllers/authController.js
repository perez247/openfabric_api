require('dotenv').config();
const jwt = require("jsonwebtoken");

let loginUser = async (req, res) => {

      // Create token
      const token = jwt.sign(
        { user_id: 'id_of_the_user' },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // user
      res.status(200).json({ jwt: token });
};

module.exports = {
    loginUser: loginUser
}