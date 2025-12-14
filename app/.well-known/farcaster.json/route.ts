import { NextResponse } from 'next/server';
import { minikitConfig } from '../../../minikit.config';

export async function GET() {
  const manifest = {
    accountAssociation: {
      "header": "eyJmaWQiOjE0MzY3MDIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg1NkE4YTMzZUU1Q0VCNDE1M0NEMTVCMjFkQ0M5QThCMzJlYjRFRDU0In0",
      "payload": "eyJkb21haW4iOiJib29haS1taW5pYXBwLXR3by52ZXJjZWwuYXBwIn0",
      "signature": "xAHLY/48mtQxICRfQqacNBc212YoN8NaMrwn+ANC5L8e78cUYt3eEXxyMeVwM30nmG1FmMkeJTZQkOgX0ukJIhw="
    },
    frame: {
      "version": "1",
      "name": "BooAI",
      "iconUrl": "https://booai-miniapp-two.vercel.app/icon.png",
      "splashImageUrl": "https://booai-miniapp-two.vercel.app/splash.png",
      "splashBackgroundColor": "#1a0b2e",
      "homeUrl": "https://booai-miniapp-two.vercel.app",
      "webhookUrl": "https://booai-miniapp-two.vercel.app/api/webhook"
    },
    "version": "1",
    "name": "BooAI",
    "subtitle": "Earn by Engaging",
    "description": "Boost your Farcaster posts with BOOAI tokens. Earn by engaging with boosted content.",
    "iconUrl": "https://booai-miniapp-two.vercel.app/icon.png",
    "splashImageUrl": "https://booai-miniapp-two.vercel.app/splash.png",
    "splashBackgroundColor": "#1a0b2e",
    "homeUrl": "https://booai-miniapp-two.vercel.app",
    "webhookUrl": "https://booai-miniapp-two.vercel.app/api/webhook",
    "primaryCategory": "social",
    "tags": ["engagement", "rewards", "social", "crypto", "base"],
    "screenshotUrls": ["https://booai-miniapp-two.vercel.app/screenshot.png"],
    "heroImageUrl": "https://booai-miniapp-two.vercel.app/hero.png",
    "tagline": "Earn BOOAI tokens by engaging",
    "ogTitle": "BooAI - Earn by Engaging",
    "ogDescription": "Boost posts or earn tokens by engaging",
    "ogImageUrl": "https://booai-miniapp-two.vercel.app/og-image.png"
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export const dynamic = 'force-static';
