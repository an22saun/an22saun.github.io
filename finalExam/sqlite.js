const express = require("express");
const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync("./chinook.db");
const app = express();

app.get('/artists/:id/tracks', (req, res) => {
    const stmt = db.prepare("SELECT Artist.ArtistId, Artist.name FROM Track JOIN Artist ON Artist.ArtistId = Track.TrackId");
    const tracks = stmt.all();
    res.json(tracks);
});

app.post('/artists', (req, res) => {
    const{name} = req.body;
    
    if(!name){
        return res.status(400).json({error: "name is required"});
    }
    const stmt = db.prepare("INSERT INTO Artist (name) VALUES (?)");
    const result = stmt.run(name);

    res.status(201).json({
        id:Number(result.lastInsertRowid),
        name: name,
    });
});