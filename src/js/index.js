const express = require('express');
<<<<<<< HEAD
const db = require('./db');
=======
>>>>>>> 4437415d57e0ea13cbfc4e93b2897cb684f5d50e
const path = require('path');

const app = express();
const port = 3000;

<<<<<<< HEAD
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'helpnei', '..','..', '..', 'Front')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'helpnei', '..','..', '..', 'Front', 'index.html'));
});
//primeiro ele busca um usuário, se não tiver, ele insere um usuário teste.
app.get('/usuarioteste', (req, res) => {
  db.query('SELECT COUNT(*) AS count FROM User', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar usuários');
      return;
    }

    const userCount = results[0].count;

    if (userCount === 0) {
      db.query("INSERT INTO User (userId, nome) VALUES ('1', 'João Ninguem')", (insertErr) => {
        if (insertErr) {
          console.error(insertErr);
          res.status(500).send('Erro ao inserir usuário padrão');
          return;
        }
        res.send('Usuário padrão inserido com sucesso');
      });
    } else {
      db.query('SELECT * FROM User', (err, users) => {
        if (err) {
          console.error(err);
          res.status(500).send('Erro ao buscar usuários');
          return;
        }
        res.json(users);
      });
    }
  });
=======
app.use(express.static(path.join(__dirname, '..', '..', 'FRONT-END-HELPNEI', 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'FRONT-END-HELPNEI', 'dist', 'index.html'));
>>>>>>> 4437415d57e0ea13cbfc4e93b2897cb684f5d50e
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 4437415d57e0ea13cbfc4e93b2897cb684f5d50e
