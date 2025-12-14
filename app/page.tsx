"use client";
import React, { useMemo, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BoostCard from '../components/BoostCard';
import { computeAvailablePool, calculatePayouts } from '../lib/payment';

type Boost = any;

export default function Page() {
  const [tab, setTab] = useState('home');
  const [boosts, setBoosts] = useState<Boost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBoosts();
  }, []);

  async function fetchBoosts() {
    setLoading(true);
    const res = await fetch('/api/boosts');
    const json = await res.json();
    setBoosts(json.boosts || []);
    setLoading(false);
  }

  const totals = useMemo(() => {
    const totalEarned = 0;
    const pending = boosts.reduce((acc, b) => acc + computeAvailablePool(b.amount), 0);
    const active = boosts.length;
    return { totalEarned, pending, active };
  }, [boosts]);

  async function handleEngage(boostId: string, userId: string, action: string) {
    await fetch('/api/boosts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'engage', boostId, userId, action })
    });
    await fetchBoosts();
  }

  async function runRelease() {
    setLoading(true);
    await fetch('/api/release', { method: 'POST' });
    await fetchBoosts();
    setLoading(false);
  }

  return (
    <div>
      <header className="mb-6">
        <div className="glass p-4 rounded-xl">
          <h1 className="text-2xl font-bold">BooAI</h1>
          <p className="text-sm text-slate-300">Boost posts and reward everyone who engages equally.</p>
        </div>
      </header>

      <main className="space-y-6 pb-28">
        {tab === 'home' && (
          <section className="space-y-4">
            <div className="glass p-4 rounded-xl flex justify-between items-center">
              <div>
                <div className="text-sm text-slate-300">Total earned (all-time)</div>
                <div className="text-2xl font-mono">{totals.totalEarned.toLocaleString()} BOOAI</div>
              </div>
              <div>
                <div className="text-sm text-slate-300">Pending (24h)</div>
                <div className="text-2xl font-mono">{totals.pending.toLocaleString()} BOOAI</div>
              </div>
              <div>
                <div className="text-sm text-slate-300">Active boosts</div>
                <div className="text-2xl font-mono">{totals.active}</div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Pending payments</h2>
              {loading && <div className="text-sm text-slate-400">Loading...</div>}
              {boosts.map((b) => {
                const pool = computeAvailablePool(b.amount);
                const payouts = calculatePayouts(b);
                const me = payouts.perPerson;
                return (
                  <div key={b.id} className="glass p-3 rounded-lg flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Boost by @{b.author}</div>
                      <div className="text-sm text-slate-300">{me.toLocaleString()} BOOAI</div>
                      <div className="text-xs text-slate-400">{b.engagements.length} people engaged</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">Release in: {b.released ? 'Released' : '24h'}</div>
                    </div>
                  </div>
                );
              })}
              <div className="mt-3">
                <button onClick={runRelease} className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded">
                  Run verifier now
                </button>
              </div>
            </div>
          </section>
        )}

        {tab === 'earn' && (
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Available Boosts</h2>
            <div className="space-y-3">
              {boosts.map((b) => (
                <BoostCard key={b.id} boost={b} onEngage={(id, user, action) => handleEngage(id, user, action)} />
              ))}
            </div>
          </section>
        )}

        {tab === 'create' && (
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Create Boost</h2>
            <div className="glass p-4 rounded-xl">
              <label className="block text-sm text-slate-300">Farcaster post URL</label>
              <input className="w-full mt-2 p-2 rounded bg-black/30" placeholder="https://warpcast.com/..." />
              <label className="block text-sm text-slate-300 mt-3">Boost amount (min 500,000 BOOAI)</label>
              <input className="w-full mt-2 p-2 rounded bg-black/30" placeholder="500000" />

              <div className="mt-3 text-sm text-slate-300">
                <div>Platform fee (2%): calculated in real-time</div>
                <div>Available for earners (98%): calculated in real-time</div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded">Submit</button>
                <button className="px-4 py-2 bg-slate-800 rounded">How it works</button>
              </div>
            </div>
          </section>
        )}

        {tab === 'wallet' && (
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Wallet</h2>
            <div className="glass p-4 rounded-xl">
              <div className="text-sm text-slate-300">Available balance</div>
              <div className="text-2xl font-mono">0 BOOAI</div>
              <div className="mt-3 text-sm text-slate-300">Pending earnings (24h verification)</div>
            </div>

            <div>
              <h3 className="text-md font-semibold">Transaction history</h3>
              <div className="mt-2 text-sm text-slate-300">No transactions yet (mock)</div>
            </div>
          </section>
        )}
      </main>

      <Navbar tab={tab} setTab={setTab} />
    </div>
  );
}
