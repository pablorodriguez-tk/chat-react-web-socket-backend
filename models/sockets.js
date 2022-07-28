const {
  usuarioConectado,
  usuarioDesconectado,
} = require("../controllers/sockets");
const { comprobarJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }
  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      const [valido, uid] = comprobarJWT(socket.handshake.query["x-token"]);
      if (!valido) {
        console.log("Socket no identificado");
        return socket.disconnect();
      }

      await usuarioConectado(uid);

      //TODO:Validar el JWT
      //Si el token no es valido, desconectar
      //TODO:Saber que usuario esta activo mediante el UID
      //TODO:Emitir todos los usuarios conectados
      //TODO:Socket join ,uid
      //TODO:Escuchar cuando el cliente manda un mensaje
      //mensaje-personal
      //TODO:Disconect
      socket.on("disconnect", async () => {
        console.log("cliente desconectado", uid);
        await usuarioDesconectado(uid);
      });
      //Marcar en la DB que el usuario se desconecto
      //TODO:emitir todos los usuarios conectados
    });
  }
}

module.exports = Sockets;
