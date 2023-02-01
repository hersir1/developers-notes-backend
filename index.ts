import { mergeConcatSwitchExhaustedRoutes } from './src/routes/merge-concat-switch-exhausted.routes';

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(mergeConcatSwitchExhaustedRoutes);

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Do you like what you see?....')
});