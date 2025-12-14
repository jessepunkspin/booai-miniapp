"use client";
import React from 'react';
import { Home, Zap, PlusCircle, Wallet } from 'lucide-react';

export default function Navbar({ tab, setTab }: { tab: string; setTab: (t: string) => void }) {
  const items = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'earn', label: 'Earn', icon: Zap },
    { id: 'create', label: 'Create', icon: PlusCircle },
    { id: 'wallet', label: 'Wallet', icon: Wallet }
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl bg-black/40 glass rounded-xl p-2 flex justify-between">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => setTab(it.id)}
          className={`flex-1 py-2 px-3 rounded-md flex flex-col items-center gap-1 text-center transition ${
            tab === it.id ? 'bg-gradient-to-b from-primary to-secondary text-white' : 'text-slate-300'
          }`}
        >
          <it.icon size={18} />
          <span className="text-xs">{it.label}</span>
        </button>
      ))}
    </nav>
  );
}
