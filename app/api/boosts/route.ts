import { NextResponse } from 'next/server';
import { getBoosts, addEngagement, saveBoosts } from '../../../lib/db';

export async function GET() {
  const boosts = await getBoosts();
  return NextResponse.json({ boosts });
}

export async function POST(request: Request) {
  const body = await request.json();
  const type = body.type;
  if (type === 'engage') {
    const { boostId, userId, action } = body;
    const engagement = { userId, actions: { [action]: true } };
    const b = await addEngagement(boostId, engagement);
    return NextResponse.json({ ok: true, boost: b });
  }

  if (type === 'create') {
    const { boost } = body;
    const boosts = await getBoosts();
    boosts.push(boost);
    await saveBoosts(boosts);
    return NextResponse.json({ ok: true, boost });
  }

  return NextResponse.json({ ok: false, error: 'unknown type' }, { status: 400 });
}
