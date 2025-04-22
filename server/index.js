const express = require('express')
const app = express()
const { createConnection } = require('mysql')
const cors = require('cors')

app.use(cors({
    origin: "*"
}))

const conn = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logistyka",
});

app.use(express.json());

app.get("/KursyTrwajace", (req, res) => {
    conn.query("SELECT id, number, fromm, destination, pinned, completed, archivised FROM kursy WHERE completed = 0 AND archivised = 0 AND deleted = 0 AND pinned = 0", (err, results) => {
        res.send(results);
    });
});

app.get("/PrzypieteKursyTrwajace", (req, res) => {
    conn.query("SELECT id, number, fromm, destination, pinned, completed, archivised FROM kursy WHERE completed = 0 AND archivised = 0 AND deleted = 0 AND pinned = 1", (err, results) => {
        res.send(results);
    });
});

app.get("/KursyUkonczone", (req, res) => {
    conn.query("SELECT id, number, fromm, destination, pinned, completed, archivised FROM kursy WHERE completed = 1 AND archivised = 0 AND deleted = 0 AND pinned = 0", (err, results) => {
        res.send(results);
    });
});

app.get("/PrzypieteKursyUkonczone", (req, res) => {
    conn.query("SELECT id, number, fromm, destination, pinned, completed, archivised FROM kursy WHERE completed = 1 AND archivised = 0 AND deleted = 0 AND pinned = 1", (err, results) => {
        res.send(results);
    });
});

app.get("/KursyZarchiwizowane", (req, res) => {
    conn.query("SELECT id, number, fromm, destination, pinned, completed, archivised FROM kursy WHERE archivised = 1 AND deleted = 0 AND pinned = 0", (err, results) => {
        res.send(results);
    });
});

app.get("/PrzypieteKursyZarchiwizowane", (req, res) => {
    conn.query("SELECT id, number, fromm, destination, pinned, completed, archivised FROM kursy WHERE archivised = 1 AND deleted = 0 AND pinned = 1", (err, results) => {
        res.send(results);
    });
});

app.post("/Dodaj", (req, res) => {
    var {number, fromm, destination} = req.body;
    var query = conn.query(`INSERT INTO kursy VALUES(NULL, '${number}', '${fromm}', '${destination}', 0, 0, 0, 0)`, function (err, result) {});
    res.send("d");
});

app.post("/Przypnij", (req, res) => {
    var number = req.body;
    number = number.num;
    //console.log(id);
    var query = conn.query(`UPDATE kursy SET pinned = 1 WHERE number = "${number}"`, function (err, result) {console.log(err)});
    res.send("przypieto");
});

app.post("/Odepnij", (req, res) => {
    var number = req.body;
    number = number.num;
    var query = conn.query(`UPDATE kursy SET pinned = 0 WHERE number = "${number}"`, function (err, result) {console.log(err)});
    res.send("odpięto");
});

app.post("/Zakoncz", (req, res) => {
    var number = req.body;
    number = number.num;
    var query = conn.query(`UPDATE kursy SET completed = 1 WHERE number = "${number}"`, function (err, result) {console.log(err)});
    res.send("zakonczono");
});

app.post("/Zarchiwizuj", (req, res) => {
    var number = req.body;
    number = number.num;
    var query = conn.query(`UPDATE kursy SET archivised = 1 WHERE number = "${number}"`, function (err, result) {console.log(err)});
    res.send("zakonczono");
});

app.listen(7777)