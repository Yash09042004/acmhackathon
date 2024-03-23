const express = require('express');

const TeachableMachine = require('@sashido/teachablemachine-node');
const bodyParser = require('body-parser');

const model  = new TeachableMachine({
    modelUrl : "https://teachablemachine.withgoogle.com/models/EWKVBWle6/",
});

https: var corsOptions = {
    origin: "https://localhost:5173",
    optionsSuccess: 200,
};

const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT || 5173;

app.use(express.urlencoded({ extended:false}));
app.use(cors());

app.get("/",(req,res) => {
    res.send(`
    <form action="/classify" methos = "POST">
    <p>
    Enter ID </p>
    <input name = 'ImageUrl' autocomplete=off>
    <button>Predict Image</button>
    </form>
    `)
})

app.post("/classify",async(req,res)=>{
    const url = req.body.ImageUrl;

    return model
    .classify({
        ImageUrl: url,
    })
    .then((predictions)=>{
        res.json(predictions);
    })
    .catch((e)=>{
        res.status(500).send("Something went wrong!");
    });
});

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
});