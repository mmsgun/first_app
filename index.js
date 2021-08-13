const express = require("express");
const app = express();

const port=3000;
const address="localhost";

//criando um servidor com node.js e express

const server = app.listen(port, address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});