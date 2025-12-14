import { NextResponse } from 'next/server';
import { minikitConfig } from '../../../minikit.config';

export async function GET() {
  const manifest = {
    metadata: minikitConfig.miniapp,
    accountAssociation: minikitConfig.accountAssociation,
    frame: {
      url: minikitConfig.ROOT_URL,
      height: 700
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=60'
    }
  });
}
