const http = require('http');
const port = '3001';
const app = new http.Server();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log('I AM RESPONDING!');
  res.write('I AM RESPONDING!');
  res.end('\n');
});

app.listen(port, () => {
  console.log('I AM RUNNING!');
});