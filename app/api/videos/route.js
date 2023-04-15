import { NextResponse } from 'next/server';
import videos from './data.json';

export async function GET(request) {
  return NextResponse.json(videos);
}
