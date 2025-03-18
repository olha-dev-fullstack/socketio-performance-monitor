import io from "socket.io-client";
const options = {
  auth: {
    token: "qw9e75q9832ymt98ywq8ym",
  },
};
const socket = io.connect("http://localhost:3000", options); //our server is at :3000
socket.on("welcome", (data) => {
  console.log(data);
});

export default socket;
