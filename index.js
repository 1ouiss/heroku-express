const express = require('express');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require(cors);
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) =>{
    res.send('Hello World !')
});

app.get('/users', (req,res) => {
    res.send([
        {firstName: 'thomas', lastName: 'james'},
        {firstName: 'john', lastName: 'bond'}
    ])
})

app.listen(port, () => {
    console.log(`Serve is runing on ${port}`);
});