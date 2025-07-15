const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});