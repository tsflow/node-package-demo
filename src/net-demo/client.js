const net = require("net");

// 用于创建socket工厂函数
const client = net.createConnection(8080, "127.0.0.1");

client.on("connect", () => {
  console.log("连接！");
});

// socket完全关闭
client.on("close", () => {
  console.log("连接关闭！");
});

client.on("drain", () => {
  console.log("上传节流！");
});

client.on("timeout", () => {
  console.log("连接超时！");
});

client.on("data", (data) => {
  console.log("接收数据", data.toString());
  // client.end();
});

client.on("ready", () => {
  console.log("套接字已准备好！");
  client.write("发送数据1");
  client.write("发送数据2");
  client.write("发送数据3");
});

client.on("end", () => {
  console.log("客户端连接已结束！");
});

client.on("error", (err) => {
  console.log(`发生异常${err.message}`);
});
