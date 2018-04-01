import sum from './sum';
import finalhandler from 'finalhandler';
import http from 'http';
import Router from 'Router';

const router = Router();
router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Hello World!');
});

const api = router.route('/api');
api.get(function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('api');
});

const server = http.createServer((req, res) => {
  router(req, res, finalhandler(req, res));
});

server.listen(3000, () => console.log('listening on *: 3000'));