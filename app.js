const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Page not found!</h1>`);
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})