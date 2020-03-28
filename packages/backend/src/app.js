const express = require('express');
const router = require('./router/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const allRoutes = require('express-list-endpoints');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen( port, () => {
    console.log(`Todo app listening on port ${port}`);
    console.log(allRoutes(app));
})