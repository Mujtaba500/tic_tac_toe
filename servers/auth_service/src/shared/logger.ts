import pino from 'pino';

const transport = pino.transport({
  targets: [
    {
      target: 'pino/file',
      level: 'error',
      options: { destination: './logs/info.log', colorize: false }
    },
    {
      target: 'pino-pretty',
      options: { destination: process.stdout.fd, colorize: true }
    }
  ]
});

const prod = process.env.NODE_ENV === 'production';

const logger = pino(
  {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: prod ? false : true, // enable colors
        translateTime: 'SYS:standard', // human-readable timestamps
        ignore: 'pid,hostname' // optional: cleaner logs
      }
    },
    redact: ['password']
  }
  //   transport
);

export default logger;
