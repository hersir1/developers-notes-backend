import { justData } from './src/routes/just-data';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(justData);

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Do you like what you see?....')
});