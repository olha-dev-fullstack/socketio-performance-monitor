//Where socket.io listeners and (most) emitters
const socketMain = (io, pid) => {
  io.on("connection", (socket) => {
    let machineMacA;
    const auth = socket.handshake.auth;
    if (auth.token === "asljfpqwoiehfkjndslkj") {
      socket.join("nodeClient");
    } else if (auth.token === "qw9e75q9832ymt98ywq8ym") {
      socket.join("reactClient");
    } else {
      socket.disconnect();
      console.log("you have been disconnected");
    }
    console.log(`Someone connected on worker ${process.pid}`);
    socket.emit("welcome", "Welcome to our cluster driven socket.io server!");

    socket.on("perfData", (data) => {
      console.log("Tick...", pid, data.macA);
      // console.log(data);
      if (!machineMacA) {
        machineMacA = data.macA;
        io.to("reactClient").emit("connectedOrNot", {
          machineMacA,
          isAlive: true,
        });
      }
      io.to("reactClient").emit("perfData", data);
    });

    socket.on("testConnection", (data) => {
      console.log(data);
    });
    socket.on("welcomeButton", (data) => {
      console.log(data);
    });

    socket.on("disconnect", (reason) => {
      //a nodeClient just disconnected. Let the front end know!
      io.to("reactClient").emit("connectedOrNot", {
        machineMacA,
        isAlive: false,
      });
    });
  });
};

module.exports = socketMain;
