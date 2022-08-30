const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;
const publicDir = path.join(__dirname, 'public');

app.use(cors());

app.set('x-powered=by', false);
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    const fileName = 'layout.json';
    res.sendFile(fileName, {
        root: publicDir
    })
})

// Listen
app.listen(port, () => {
    console.log(`server port: ${port}`);
})