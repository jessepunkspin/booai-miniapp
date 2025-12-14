'use client';

import { useEffect } from 'react';

export default function BooAI() {
  useEffect(() => {
    // Signal app is ready immediately
    console.log('BooAI initializing...');
    
    // In production, you'd use:
    // import { sdk } from '@farcaster/miniapp-sdk';
    // sdk.actions.ready();
    
    // For now, just log success
    console.log('BooAI ready!');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center font-bold text-4xl mx-auto mb-6">
          B
        </div>
        <h1 className="text-4xl font-bold mb-4">BooAI</h1>
        <p className="text-xl text-purple-300 mb-8">Earn by Engaging</p>
        <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-500/30">
          <p className="text-lg mb-4">
            Boost your Farcaster posts with BOOAI tokens or earn by engaging with boosted content.
          </p>
          <p className="text-sm text-purple-400">
            Coming soon: Full app with wallet integration
          </p>
        </div>
      </div>
    </div>
  );
}
