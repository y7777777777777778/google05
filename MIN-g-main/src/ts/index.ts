import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// public をそのまま使えるように
app.use(express.static(path.join(__dirname, '../../public')));

// テスト用ルート
app.get('/ts', (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: 'TypeScript server is running!',
    time: new Date().toISOString()
  });
});

// 起動
app.listen(PORT, () => {
  console.log(`TS server running → http://localhost:${PORT}/ts`);
});
