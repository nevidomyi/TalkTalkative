const jsonWebToken = require("jsonwebtoken");
const httpStatus = require("http-status-codes").StatusCodes;

const jwtHandler = {
  verifyToken: (token) => {
    const payload = jsonWebToken.verify(token, process.env.TOKEN);
    /**Payload example:
        {
          data: { userId: '6406354247174f9c8c4b6c66' },
          exp: 1678215279730,
          iat: 1678128879
        }
        **/

    return payload.data.userId;
  },
  issueToken: (id) => {
    const signedToken = jsonWebToken.sign(
      {
        data: id,
        exp: new Date().setDate(new Date().getDate() + 1),
      },
      process.env.TOKEN
    );

    return { token: signedToken };
  },
};

module.exports = jwtHandler;
