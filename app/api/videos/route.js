import { NextResponse } from 'next/server';
import videos from './data.json';

// Get all videos
export async function GET(request) {
  return NextResponse.json(videos);
}

// Add a new video
export async function POST(request) {
  const { title, link, description, category } = await request.json();
  const newVideo = {
    id: videos.length + 1,
    title,
    description,
    link,
    category,
  };
  videos.push(newVideo);
  return NextResponse.json(videos);
}
