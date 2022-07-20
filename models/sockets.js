class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }
  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      //TODO:Validar el JWT
      //Si el token no es valido, desconectar
      //TODO:Saber que usuario esta activo mediante el UID
      //TODO:Emitir todos los usuarios conectados
      //TODO:Socket join ,uid
      //TODO:Escuchar cuando el cliente manda un mensaje
      //mensaje-personal
      //TODO:Disconect
      //Marcar en la DB que el usuario se desconecto
      //TODO:emitir todos los usuarios conectados
    });
  }
}

module.exports = Sockets;
