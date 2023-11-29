import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Bem vindo a API de usuários!"));
app.all("*", (req, res) =>res.send("Você tentou adentrar uma rota que não existe :["));

app.listen(PORT, () =>console.log(`Servidor rodando no seguinte port: http://localhost:${PORT}`));