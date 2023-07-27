const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let id =2;
const todoList = [
    {
    },
];


app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/api/todo', (req, res) => {
    res.json(todoList);
});

app.post('/api/todo', (req, res) => {
    const { text, done } = req.body;
    todoList.push({
        id: id++,
        text,
        done,
    });
    return res.send('sucess');
})

app.listen(4000, () => {
    console.log('server start!');
});