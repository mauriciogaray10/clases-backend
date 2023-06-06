import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";

const app = express();
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

const expressServer = app.listen(8080, () => console.log("Listening"));
const socketServer = new Server(expressServer);

const mensajes = [];
socketServer.on("connection", (socket) => {
  console.log("connected " + socket.id);
 
  socket.on("message", (data) => {
    console.log(data)
    mensajes.push({ socketId: socket.id, message: data });
    console.log(mensajes)
    socketServer.emit("imprimir", mensajes);
  });
});














// socketServer.on('connetion', socket => {
//     console.log('Nuevo cliente conectado');
//     socket.on('message', data => { // este mensaje es solo para el socket con id
//         console.log(data);
//     });
//     socket.emit(); //Solo emite al socket con el id
//     socket.broadcast.emit(); // emite para todos los socket menos el actual
//     socketServer.emit(); // emite mensaje para todos los sockets
// }) 









