// app/api/auth/callback/route.ts

import { handleCallback } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return handleCallback(request);
}
