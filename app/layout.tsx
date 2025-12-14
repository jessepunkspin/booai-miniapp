import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'BooAI',
  description: 'Boost posts and reward engaged users with BOOAI tokens'
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
