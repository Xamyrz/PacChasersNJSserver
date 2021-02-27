var socket = require('socket.io')();
var users = {
    desktop : {},
    android : {}
}
socket.on('connection',function(client){
    console.log(`new connection ! ${client.id}`);
    client.on("ghright",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("ghright", x, y, velX, velY, turning);
            console.log("ghright");
        }
    })
    client.on("ghleft",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("ghleft", x, y, velX, velY, turning);
            console.log("ghleft");
        }
    })
    client.on("ghup",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("ghup", x, y, velX, velY, turning);
            console.log("ghup");
        }
    })
    client.on("ghdown",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("ghdown", x, y, velX, velY, turning);
            console.log("pdown");
        }
    })
    client.on("pright",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("pright", x, y, velX, velY, turning);
            console.log("pright");
        }
    })
    client.on("pleft",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("pleft",x, y, velX, velY, turning);
            console.log("pleft");
        }
    })
    client.on("pup",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("pup", x, y, velX, velY, turning);
            console.log("pup");
        }
    })
    client.on("pdown",(x, y, velX, velY, turning)=>{
        if(client.id == client.id){
            socket.emit("pdown",x, y, velX, velY, turning);
            console.log("pdown");
            console.log(client.id);
        }
    })
});
socket.listen(process.env.PORT || 2731)
console.log(`Server is listening on port ${process.env.PORT}...`)
console.log(`pacChaser server running`);