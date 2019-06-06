const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Infra 101, The Best Ever!'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
