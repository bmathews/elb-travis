'use strict';

const koa = require('koa');
const app = koa();

app.use(function *(){
  this.body = 'Hello New World';
});

const port = process.env.PORT || 3000

app.listen(port);

console.log("Listening on port: ", port)