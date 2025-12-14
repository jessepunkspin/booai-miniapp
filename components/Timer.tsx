"use client";
import React, { useEffect, useState } from 'react';

export default function Timer({ until }: { until: number }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, until - now);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  return (
    <span className="text-sm text-slate-300">
      {hours}h {mins}m {secs}s
    </span>
  );
}
