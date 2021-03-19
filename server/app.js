const express = require('express'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      cors = require('cors'),
      port = process.env.PORT || 3000,
      posts = require('./routes/api/post'),
      purchases = require('./routes/api/purchase')
      app = express();

require('./mongooseConnect');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', posts);
app.use('/purchases', purchases);

app.listen(port, function(error) {
    if(error) {
        throw err;
    }
    console.log(`Web Application is running on port ${port}`)
    console.log(`http://localhost:${port}`)
})