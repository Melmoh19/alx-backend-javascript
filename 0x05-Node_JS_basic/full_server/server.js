import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const port = 1241;

controllerRouting(app);

app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
