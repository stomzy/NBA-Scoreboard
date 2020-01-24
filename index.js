const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());

const footballRouter = require('./routes/apiRouter');

app.get('/', (req, res) => {    
  res.status(200).json('Basketball api updates')
});

app.use('/api/v1', footballRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 server running on port ${PORT}`)
});