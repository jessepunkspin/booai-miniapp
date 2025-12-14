import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Log event for now — in production persist to DB
    console.log('webhook event:', body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('webhook error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function GET(request: Request) {
  // Simple verification endpoint
  return new NextResponse('ok', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}
