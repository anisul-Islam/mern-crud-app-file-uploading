const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const cors = require('cors');

const dev = require('./config');
const connectDB = require('./config/db');
const postsRoute = require('./routes/posts');

const app = express();
const port = dev.app.port;

app.use(
  cors({
    origin: '*'
    // origin: 'http://localhost:3000'
  })
);
app.use(morgan('dev'));

app.use('/api/v1/posts', postsRoute);

app.listen(port, async () => {
  console.log(chalk.blue(`server is running at http://localhost:${port}`));
  await connectDB();
});
