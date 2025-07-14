const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use('/', routes);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
