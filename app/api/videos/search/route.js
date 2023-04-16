import { NextResponse } from 'next/server';
import videos from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  /**
   * request.url -> /api/videos/search?query=react
   * searchParams -> URLSearchParams { 'query' => 'react' }
   * query -> react
   */

  const filteredVideos = videos.filter((video) => {
    return video.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredVideos);
}
