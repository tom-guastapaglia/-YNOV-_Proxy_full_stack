import express from "express";
import Request from 'express';
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/api", (_, res) => {
  res.send("Hello API");
});

app.get("/api/.user", (_, res) => {
  axios.get("http://nginx/api/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
  });
});

app.get('/api/hello', (_, res) => {
  res.send('Hello World');
});

app.post('/api/.user/login', (_, res) => {
  res.send('Login');
});

app.get('/api/.user/user', (_, res) => {
  res.send('User');
});

app.get('/api/.user/admin', (_, res) => {
  res.send('Admin');
});

app.get('/api/.user/checkRole', (_, res) => {
  res.send('Role');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
