var socket = require('socket.io')();
var users = {
    desktop : {},
    android : {}
}
socket.on('connection',function(client){
    console.log(`new connection ! ${client.id}`);
    client.on("ghright",(x, y, velX, velY, turning)=>{
            socket.emit("ghright", x, y, velX, velY, turning);
            console.log("ghright");
    })
    client.on("ghleft",(x, y, velX, velY, turning)=>{
            socket.emit("ghleft", x, y, velX, velY, turning);
            console.log("ghleft");
    })
    client.on("ghup",(x, y, velX, velY, turning)=>{
            socket.emit("ghup", x, y, velX, velY, turning);
            console.log("ghup");
    })
    client.on("ghdown",(x, y, velX, velY, turning)=>{
            socket.emit("ghdown", x, y, velX, velY, turning);
            console.log("pdown");
    })
    client.on("pright",(x, y, velX, velY, turning)=>{
            socket.emit("pright", x, y, velX, velY, turning);
            console.log("pright");
    })
    client.on("pleft",(x, y, velX, velY, turning)=>{
            socket.emit("pleft",x, y, velX, velY, turning);
            console.log("pleft");
    })
    client.on("pup",(x, y, velX, velY, turning)=>{
            socket.emit("pup", x, y, velX, velY, turning);
            console.log("pup");
    })
    client.on("pdown",(x, y, velX, velY, turning)=>{
            socket.emit("pdown",x, y, velX, velY, turning);
            console.log("pdown");
    })
});
socket.listen(2731)
console.log(`pacChaser server running`);