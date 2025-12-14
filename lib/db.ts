import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

async function ensureDir() {
  const dir = path.dirname(DB_PATH);
  await fs.mkdir(dir, { recursive: true });
}

async function seedIfMissing() {
  try {
    await fs.access(DB_PATH);
  } catch {
    const now = Date.now();
    const boosts = [
      {
        id: 'b1',
        author: 'cryptodev',
        postUrl: 'https://warpcast.com/post/1',
        content: 'Check out my new project!',
        amount: 500_000,
        createdAt: now - 6 * 3600 * 1000,
        engagements: Array.from({ length: 65 }).map((_, i) => ({ userId: `user${i}`, actions: { like: true }, timestamp: now - 5 * 3600 * 1000 })),
        released: false
      },
      {
        id: 'b2',
        author: 'dev2',
        postUrl: 'https://warpcast.com/post/2',
        content: 'Another post',
        amount: 1_000_000,
        createdAt: now - 3 * 3600 * 1000,
        engagements: Array.from({ length: 26 }).map((_, i) => ({ userId: `u${i}`, actions: { repost: true }, timestamp: now - 2 * 3600 * 1000 })),
        released: false
      },
      {
        id: 'b3',
        author: 'dev3',
        postUrl: 'https://warpcast.com/post/3',
        content: 'Yet another',
        amount: 2_000_000,
        createdAt: now - 20 * 3600 * 1000,
        engagements: Array.from({ length: 144 }).map((_, i) => ({ userId: `x${i}`, actions: { comment: true }, timestamp: now - 18 * 3600 * 1000 })),
        released: false
      }
    ];
    const db = { boosts, transactions: [], wallets: {} };
    await writeDB(db);
  }
}

export async function readDB() {
  await ensureDir();
  await seedIfMissing();
  const raw = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(raw);
}

export async function writeDB(data: any) {
  await ensureDir();
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export async function getBoosts() {
  const db = await readDB();
  return db.boosts || [];
}

export async function saveBoosts(boosts: any[]) {
  const db = await readDB();
  db.boosts = boosts;
  await writeDB(db);
}

export async function addEngagement(boostId: string, engagement: any) {
  const db = await readDB();
  const b = db.boosts.find((x: any) => x.id === boostId);
  if (!b) throw new Error('boost not found');
  // ensure unique user engagement entry - replace if exists
  const idx = b.engagements.findIndex((e: any) => e.userId === engagement.userId);
  if (idx >= 0) {
    b.engagements[idx] = { ...b.engagements[idx], actions: { ...b.engagements[idx].actions, ...engagement.actions }, timestamp: Date.now() };
  } else {
    b.engagements.push({ ...engagement, timestamp: Date.now() });
  }
  await writeDB(db);
  return b;
}

export async function addTransactions(txs: any[]) {
  const db = await readDB();
  db.transactions = db.transactions.concat(txs.map((t) => ({ id: randomUUID(), ...t })));
  await writeDB(db);
}

export async function markBoostReleased(boostId: string) {
  const db = await readDB();
  const b = db.boosts.find((x: any) => x.id === boostId);
  if (b) {
    b.released = true;
    await writeDB(db);
  }
}
