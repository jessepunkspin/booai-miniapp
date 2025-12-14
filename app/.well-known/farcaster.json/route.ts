import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjE0MzY3MDIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg1NkE4YTMzZUU1Q0VCNDE1M0NEMTVCMjFkQ0M5QThCMzJlYjRFRDU0In0",
      payload: "eyJkb21haW4iOiJib29haS1taW5pYXBwLXR3by52ZXJjZWwuYXBwIn0",
      signature: "xAHLY/48mtQxICRfQqacNBc212YoN8NaMrwn+ANC5L8e78cUYt3eEXxyMeVwM30nmG1FmMkeJTZQkOgX0ukJIhw="
    },
    frame: {
      version: "1",
      name: "BooAI",
      iconUrl: "https://booai-miniapp-two.vercel.app/icon.png",
      splashImageUrl: "https://booai-miniapp-two.vercel.app/splash.png",
      splashBackgroundColor: "#1a0b2e",
      homeUrl: "https://booai-miniapp-two.vercel.app",
      webhookUrl: "https://booai-miniapp-two.vercel.app/api/webhook"
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    }
  });
}

export const dynamic = 'force-static';
