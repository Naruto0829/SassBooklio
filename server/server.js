import app from './src/app.js';

//server setup
const port = process.env.PORT || 5000;

app.listen(port);
console.log('Server listening on:', port);
