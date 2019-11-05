const net = require("net");

// 写法一
// const server = net.createServer((socket) => {
//   socket.on("data", (data) => {
//     console.log(`data${data}`);
//     socket.write("你好！");
//   });
//   socket.on("end", () => {
//     console.log("连接断开！");
//   });
//   socket.write("first!");
// });

// 写法二
const server = net.createServer();

server.on("connection", (socket) => {
  socket.write("来自服务端");
  socket.on("data", (data) => {
    console.log(`接收数据${data}`);
    socket.write("你好！");
  });
});

server.on("error", (err) => {
  console.log(`异常${err.message}`);
  server.close();
});

server.on("listening", () => {
  console.log("开始监听!");
});

server.on("close", () => {
  console.log("关闭服务！");
});

server.listen(8080, () => {
  console.log("server is running at 8080!");
});
