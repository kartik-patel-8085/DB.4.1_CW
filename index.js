const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const sqlite3 = require('sqlite3').verbode();
const {open} = require('sqlite');

const app = express();
const PORT =process.env.PORT || 3000;
app.use(cors());
APP.USE(express.json());

let db;

(async () =>{
  db = await open({
    filename = "./DB4.1_CW/database.sqlite",
    driver: sqlite3.Database
  })
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
