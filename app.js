const express = require('express')
const files = require('./routes/index');
const app = express()
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/ping', (req, resp) => {
    return resp.send('HELLO WORLD!, pong');
})

app.use('/files', files);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})