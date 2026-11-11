import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { z } from 'zod';

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173' }));
app.use(express.json({ limit: '32kb' }));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'goldin-api' }));

// Public market endpoint is deliberately a placeholder.
// Never expose demo or stale prices as executable quotes.
app.get('/api/v1/market/summary', (_req, res) => {
  res.status(503).json({
    code: 'MARKET_DATA_NOT_CONFIGURED',
    message: 'منبع معتبر قیمت هنوز پیکربندی نشده است.'
  });
});

const registerSchema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(12).max(128)
});
app.post('/api/v1/auth/register', (req, res) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'ورودی نامعتبر است.' });
  // TODO: implement Argon2id password hashing, email verification,
  // rate limits, bot protection, duplicate handling and audit logging.
  return res.status(501).json({ error: 'ثبت‌نام هنوز فعال نشده است.' });
});

app.use((_req, res) => res.status(404).json({ error: 'مسیر پیدا نشد.' }));
const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`GOLDIN API listening on :${port}`));
