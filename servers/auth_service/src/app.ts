import { log } from 'console';
import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import chalk from 'chalk';
import cors from 'cors';
import http from 'http';
import createDebug from 'debug';

const port = process.env.PORT;

const app = express();
const debug = createDebug('http');

debug('booting Express server');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use(helmet());

app.get('/', (req: express.Request, res) => {
  debug(req.method + ' ' + req.url);
  res.json({
    message: 'API live'
  });
});

app.get('/health', (req, res) => {
  // db authenticate
});

const server: http.Server = http.createServer(app);

server.listen(port, () => {
  log(chalk.green('✓'), `Server listening on port ${port}`);
});
