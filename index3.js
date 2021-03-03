const express = require("express");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const file = path.join(__dirname, "./pokemon.json")
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/pokemon", (req, res, next) => {
    try {
        res.status(200).sendFile(file);
    }catch (error) {
        next(error)
    }
});

app.post("/pokemon", (req, res, next) => {
    try{
        let pokemon = req.body;
        fs.readFiel(file, (err, data) => {
            if(err){
                console.log(err);
                throw err;
            }
            let pokemonArr = json.parse(data);
            pokemon.id = pokemonArr[pokemonArr.length - 1].id + 1;
            pokemon.num = pokemon.id.tostring().padStart(3, "0");
            pokemonArr.push(pokemon);
            fs. writeFile(file, JSON.stringify(pokemonArr), (err) => {
                console.lot(err);
                throw err;
            }
            res.status(200).json({ msg: "Added", data: pokemon });
            
        })
    }catch (error) {
        next(error);
    }
});
app.put("/pokemon", (req, res, next) => {
    try{
        let pokemonID = req.param.id;
        let updatedPokemon = req.body;
        fs.readFiel(file, (err, data) => {
            if(err){
                console.log(err);
                throw err;
            }
            let pokemonArr = json.parse(data);
            pokemonArr.forEach((pokemon) => {
                if(pokemon.id == pokemonID) {
                    pokemon = updatedPokemon;
                    console.log(pokemon);
                }
            });
            
            fs. writeFile(file, JSON.stringify(pokemonArr), (err) => {
                if (err) {
                    console.lot(err);
                    throw err;
            }
            res.status(200).json({ msg: "Added", data: pokemon });
            
        })
    }catch (error) {
        next(error);
    }
});






app.get("*", (req, res, next) => {
    try {
        res.status(404).sendFile(path.join(_dirname, "./404.html"));
    } catch (error) {
        next(error);
    }
    });

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ name: err.name, msg: err.message || msg: "Server error"});
});

app.listen(3000, console.log('Listening ...'));

