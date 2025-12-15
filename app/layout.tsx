import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'BooAI - Earn by Engaging',
  description: 'Boost Farcaster posts with BOOAI tokens and earn by engaging with boosted content.',
  openGraph: {
    title: 'BooAI - Earn by Engaging',
    description: 'Boost posts or earn by engaging',
    url: 'https://booai-miniapp-two.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://booai-miniapp-two.vercel.app/og-image.png',
        width: 1200,
        height: 630
      }
    ]
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://booai-miniapp-two.vercel.app/og-image.png',
    'fc:frame:image:aspect_ratio': '1.91:1',
    'fc:frame:button:1': 'Open App',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://booai-miniapp-two.vercel.app',
    'fc:frame:post_url': 'https://booai-miniapp-two.vercel.app'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center py-8 px-4">
          <div className="w-full max-w-3xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
