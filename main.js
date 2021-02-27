var socket = require('socket.io')();
var users = {
    desktop : {},
    android : {}
}
socket.on('connection',function(client){
    console.log(`new connection ! ${client.id}`);
    client.on("ghright",(x, y, velX, velY, turning)=>{
            socket.emit("ghright", x, y, velX, velY, turning, client.id);
            console.log("ghright");
    })
    client.on("ghleft",(x, y, velX, velY, turning)=>{
            socket.emit("ghleft", x, y, velX, velY, turning, client.id);
            console.log("ghleft");
    })
    client.on("ghup",(x, y, velX, velY, turning)=>{
            socket.emit("ghup", x, y, velX, velY, turning, client.id);
            console.log("ghup");
    })
    client.on("ghdown",(x, y, velX, velY, turning)=>{
            socket.emit("ghdown", x, y, velX, velY, turning, client.id);
            console.log("pdown");
    })
    client.on("pright",(x, y, velX, velY, turning)=>{
            socket.emit("pright", x, y, velX, velY, turning, client.id);
            console.log("pright");
    })
    client.on("pleft",(x, y, velX, velY, turning)=>{
            socket.emit("pleft",x, y, velX, velY, turning, client.id);
            console.log("pleft");
    })
    client.on("pup",(x, y, velX, velY, turning)=>{
            socket.emit("pup", x, y, velX, velY, turning, client.id);
            console.log("pup");

    })
    client.on("pdown",(x, y, velX, velY, turning)=>{
            socket.emit("pdown",x, y, velX, velY, turning, client.id);
            console.log("pdown");
            console.log(client.id);
    })
});
socket.listen(process.env.PORT || 2731)
console.log(`Server is listening on port ${process.env.PORT}...`)
console.log(`pacChaser server running`);