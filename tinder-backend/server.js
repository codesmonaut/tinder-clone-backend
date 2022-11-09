const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);
const Card = require(`./models/cardModel`);

// App config
const app = express();
const port = process.env.PORT || 8001;
const databaseURI = ``;

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(databaseURI).then(console.log(`Connected to database.`));

// API endpoints
app.get(`/`, (req, res) => {
    res.status(200).send(`HELLO CLEVER PROGRAMMERS!!!`);
})

app.post(`/api/cards`, (req, res) => {
    const newCard = req.body;

    Card.create(newCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }

        if (!err) {
            res.status(201).send(data);
        }
    })
})

app.get(`/api/cards`, (req, res) => {
    
    Card.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }

        if (!err) {
            res.status(200).send(data);
        }
    })
})

// Listener
app.listen(
    port,
    console.log(`Server is listening on port http://localhost:${port}`)
)
