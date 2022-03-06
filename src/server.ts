import express, { request, response } from "express";

// @types/express
const app = express();


/**
 *  GET    => Buscar uma informação, 'Busca qualquer coisa'
 *  POST   => Inserir uma informação, 'criações qualquer coisa'
 *  PUT    => Alterar uma informação, 'manipulação de qualquer dado já existente, qualquer coisa'
 *  DELETE => Remover uma informação, 'remover um dado'
 *  PATCH  => Alterar uma informação específica, 'alguma alteração específica'
 */ 


app.get("/teste", (request, response) => {
    //Request => Entrando
    //Response => Saindo
    return response.send("Hello World")
});

app.post("/teste-post", (request, response) => {
    return response.send("Hello World método POST")
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));