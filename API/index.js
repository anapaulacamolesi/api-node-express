var profiles = require("./data")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Tratando os dados recebidos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// - POST - Referência ao no C - Create.
// - GET - Referência ao R - Read.
// - PUT - Referência ao U - Update. — PATCH Não altera todo o objeto
// - DELETE - Referência ao D - Delete.

app.get("/profile", (request, response) => {
    response.json(profiles);
});

app.post("/profile", (request, response) => {           //create
    //console.log(request.body);
    profiles.push(request.body)
    response.json(profiles);
});

app.put("/profile/:id", (request, response) =>{         //update
    response.json({ msg: "hi"});
});

app.delete("/profile/:id", (request, response) =>{
    response.json({msg: "ola"});
});

app.listen(3333, () =>{
    console.log("Servidor rodando na porta 3333");
});