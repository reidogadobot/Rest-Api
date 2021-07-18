const express = require("express");
const api = express();
const PORT = 8080;
const morgan = require("morgan");

function tempo() {
    const data = new Date();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    return hora + ":" + minutos;
};

function randomNumber(min, max) {
    return Math.floor(((max + 1) - min) * Math.random() + min);
};


api.use(morgan("\033[1;92mAlguem usando a api :)\033[m:\n\033[1;93murl: :url\nmetodo: :method \ntempo de resposta: :response-time\nstatus: :status\ndata: :date\033[m"));

api.get("/numero/:ddd_oprd", (req, res) => {
  res.json({
   result: {
    	criador: "hunterzin",
    	NumGerado: "https://wa.me//55" + req.params.ddd_oprd + randomNumber(111111, 999999),
    	hora: tempo()
    }
  });
});


api.listen(PORT, () => {
  console.log("servidor aberto na porta: " + PORT);
});

