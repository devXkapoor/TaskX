// app/api/auth/login/route.ts

import { handleLogin } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return handleLogin(request); 
}
