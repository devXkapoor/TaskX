// app/api/auth/logout/route.ts

import { handleLogout } from "@auth0/nextjs-auth0";
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return handleLogout(request);
}
