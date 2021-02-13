const express = require('express');

const app = express();

app.use(express.static('./dist/multi-page-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/multi-page-app/'}),
);

app.listen(process.env.PORT || 8080);