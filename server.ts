import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.get('/', function (req: Request, res: Response) {
  res.json({ message: 'Running Typescript Express Server' });
});

app.listen(PORT, function () {
  console.log('Listening on port 3000');
});
