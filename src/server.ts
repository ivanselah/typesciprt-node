import express from 'express';
import path from 'path';

const app = express();

const PORT = 4000;

app.use('/myPath', express.static('assets'));

const handleServer = () => {
  console.log(`✅ start server http://localhost:${PORT}/`);
};

app.listen(PORT, handleServer);

const rootRouter = express.Router();

app.use('/', rootRouter);

const abou = '/Users/ivanselah/Desktop/node-test/src/client/view';

rootRouter.get('/', (req, res) => {
  return res.sendFile(path.join(abou, 'index.html'));
});

export default app;
