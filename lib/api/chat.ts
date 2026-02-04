const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const BACKEND_API_KEY = process.env.NEXT_PUBLIC_BACKEND_API_KEY;
const DEBUG_MODE = process.env.NEXT_PUBLIC_DEBUG_MODE === 'true';

if (!DEBUG_MODE && !BACKEND_BASE_URL) {
  throw new Error('NEXT_PUBLIC_BACKEND_BASE_URL is not defined in environment variables');
}

if (!DEBUG_MODE && !BACKEND_API_KEY) {
  throw new Error('NEXT_PUBLIC_BACKEND_API_KEY is not defined in environment variables');
}

export interface SendMessageDto {
  message: string;
  conversationId: string;
}

export interface ChatStartResponse {
  id: string;
  ipAddress: string;
  userAgent: string;
}

export interface MessageResponseDto {
  id: string;
  message: string;
  conversationId: string;
  timestamp: string;
}

// Mock data for debug mode
const LOREM_REPLIES = [
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.',
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const uid = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export async function startConversation(): Promise<ChatStartResponse> {
  if (DEBUG_MODE) {
    await sleep(500);
    return {
      id: uid(),
      ipAddress: '127.0.0.1',
      userAgent: 'Debug Mode',
    };
  }

  const response = await fetch(`${BACKEND_BASE_URL}/chat/start`, {
    method: 'POST',
    headers: {
      'X-API-Key': BACKEND_API_KEY!,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to start conversation: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export async function sendMessage(conversationId: string, message: string): Promise<MessageResponseDto> {
  if (DEBUG_MODE) {
    await sleep(1000);
    return {
      id: uid(),
      message: LOREM_REPLIES[Math.floor(Math.random() * LOREM_REPLIES.length)]!,
      conversationId,
      timestamp: new Date().toISOString(),
    };
  }

  const response = await fetch(`${BACKEND_BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'X-API-Key': BACKEND_API_KEY!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, conversationId } as SendMessageDto),
  });

  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
