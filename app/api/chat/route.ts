import { NextRequest, NextResponse } from 'next/server';

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;
const BACKEND_API_KEY = process.env.BACKEND_API_KEY;

if (!BACKEND_BASE_URL) {
  throw new Error('BACKEND_BASE_URL is not defined in environment variables');
}

if (!BACKEND_API_KEY) {
  throw new Error('BACKEND_API_KEY is not defined in environment variables');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body.message || !body.conversationId) {
      return NextResponse.json(
        { error: 'Missing required fields: message and conversationId' },
        { status: 400 }
      );
    }

    const response = await fetch(`${BACKEND_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'X-API-Key': BACKEND_API_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: body.message,
        conversationId: body.conversationId,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Backend error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Ups, algo se rompió' },
      { status: 500 }
    );
  }
}
