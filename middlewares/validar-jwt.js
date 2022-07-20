const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req = request, res = response, next) => {
  try {
    const token = req.header("x-token");
    if (!token) {
      console.log(token);
      return res.status(401).json({
        ok: false,
        msg: "No hay token en la peticion",
      });
    }

    const { uid } = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = uid;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }
};

module.exports = {
  validarJWT,
};
