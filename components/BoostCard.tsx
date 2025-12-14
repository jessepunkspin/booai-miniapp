"use client";
import React, { useState } from 'react';
import Timer from './Timer';
import { calculatePayouts, computeAvailablePool, MIN_BOOST } from '../lib/payment';

export default function BoostCard({ boost, onEngage }: { boost: any; onEngage: (id: string, userId: string, action: string) => void }) {
  const [enrolled, setEnrolled] = useState(false);

  const pool = computeAvailablePool(boost.amount);
  const engagedCount = Math.max(0, boost.engagements?.length || 0);
  const estimated = Math.floor(pool / (engagedCount + 1));

  function handleEngage(action: string) {
    // simulate current user id
    onEngage(boost.id, 'current-user', action);
    setEnrolled(true);
  }

  return (
    <div className="glass p-4 rounded-xl shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-slate-300">@{boost.author}</div>
          <a className="text-white font-semibold" href={boost.postUrl} target="_blank" rel="noreferrer">
            {boost.content || 'Boosted post content preview...'}
          </a>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-400">Pool</div>
          <div className="text-sm font-mono">{pool.toLocaleString()} BOOAI</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-300">Earn {estimated.toLocaleString()} BOOAI per person</div>
          <div className="text-xs text-slate-400">{engagedCount} people engaged</div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleEngage('like')} className="px-3 py-2 bg-white/6 rounded">Like</button>
          <button onClick={() => handleEngage('comment')} className="px-3 py-2 bg-white/6 rounded">Comment</button>
          <button onClick={() => handleEngage('repost')} className="px-3 py-2 bg-white/6 rounded">Repost</button>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
        <div>{enrolled ? '✅ Enrolled' : 'Not enrolled'}</div>
        <div className="flex items-center gap-2">Release in <Timer until={boost.createdAt + 24 * 3600 * 1000} /></div>
      </div>
    </div>
  );
}
