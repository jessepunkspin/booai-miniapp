import { NextResponse } from 'next/server';
import { getBoosts, addTransactions, markBoostReleased } from '../../../lib/db';
import { calculatePayouts } from '../../../lib/payment';

export async function POST() {
  const boosts = await getBoosts();
  const now = Date.now();
  const releasedSummary: any[] = [];

  for (const b of boosts) {
    if (b.released) continue;
    // verify 24h since created
    if (now - b.createdAt < 24 * 3600 * 1000) continue;
    const payouts = calculatePayouts(b);
    const txs = Object.entries(payouts.payouts).map(([userId, amount]) => ({ boostId: b.id, userId, amount, timestamp: now }));
    if (txs.length > 0) {
      await addTransactions(txs);
    }
    await markBoostReleased(b.id);
    releasedSummary.push({ boostId: b.id, perPerson: payouts.perPerson, count: payouts.count });
  }

  return NextResponse.json({ ok: true, released: releasedSummary });
}
