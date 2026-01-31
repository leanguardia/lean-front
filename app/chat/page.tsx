'use client';

import { FiArrowLeft, FiSend } from 'react-icons/fi';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import TypingIndicator from '@/components/TypingIndicator';

type ChatRole = 'user' | 'assistant';

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const MODEL_NAME = 'gemini-2.0-flash-001';
const MAX_INPUT_CHARS = 700;

const LOREM_REPLIES: string[] = [
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.',
];

const uid = (): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

async function fakeAssistantReply(): Promise<string> {
  await sleep(1000);
  return LOREM_REPLIES[Math.floor(Math.random() * LOREM_REPLIES.length)] ?? LOREM_REPLIES[0]!;
}

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: uid(),
      role: 'assistant',
      content: 'Hola humano, soy Lean Artificial y estoy conectado a la psique de Leandro real, ¿de qué quieres charlar?',
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0 && !isTyping, [input, isTyping]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    // Auto-grow textarea (up to a cap), avoid visible scrollbars.
    el.style.height = '0px';
    const next = Math.min(el.scrollHeight, 160);
    el.style.height = `${Math.max(next, 48)}px`;
  }, [input]);

  const sendMessage = useCallback(async (): Promise<void> => {
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages((prev) => [...prev, { id: uid(), role: 'user', content: text }]);
    setInput('');
    setIsTyping(true);

    try {
      const reply = await fakeAssistantReply();
      setMessages((prev) => [...prev, { id: uid(), role: 'assistant', content: reply }]);
    } finally {
      setIsTyping(false);
    }
  }, [input, isTyping]);

  return (
    <div className="min-h-[100dvh] min-[561px]:flex min-[561px]:items-center min-[561px]:justify-center p-0 min-[561px]:p-6 relative">
      {/* D A T A cell-style radial gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="z-0 absolute w-full h-full opacity-75"
          style={{
            background: 'radial-gradient(circle, var(--color-accent) 0%, var(--color-secondary) 100%)',
          }}
        />
      </div>
      <div className="relative z-10 w-full max-w-[560px] h-[100dvh] min-[561px]:h-[min(820px,calc(100dvh-3rem))]">
        <div
          className="h-full flex flex-col overflow-hidden min-[561px]:rounded-4xl min-[561px]:border min-[561px]:border-gray-300/70 min-[561px]:shadow-[0_18px_80px_rgba(0,0,0,0.14)]"
          style={{
            backgroundImage: "url('/white-marble-texture-bg1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'var(--primary)',
          }}
        >
          <header className="px-3 min-[561px]:px-4 pt-3 min-[561px]:pt-4 pb-2.5 min-[561px]:pb-3">
            <div className="flex items-center gap-2 min-[561px]:gap-3">
              <Link
                href="/"
                aria-label="Back to main page"
                className="shrink-0 -ml-1 inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100 active:scale-[0.98] transition"
              >
                <FiArrowLeft className="h-5 w-5" />
              </Link>

              <div className="flex items-center gap-2 min-[561px]:gap-3 min-w-0">
                <div className="relative size-14 min-[561px]:size-18 rounded-full overflow-hidden border-1 border-gray-200 bg-accent-light shrink-0">
                  <Image src="/images/lean.png" alt="leancontinuo avatar" fill className="object-cover" />
                </div>

                <div className="leading-tight text-left min-w-0">
                  <div className="text-base min-[561px]:text-lg font-semibold text-gray-900 truncate">Leancontinuo</div>
                  <div className="text-xs min-[561px]:text-sm text-gray-700">
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="inline-block size-2 rounded-full bg-secondary" />
                      <span>en línea</span>
                    </span>
                  </div>
                  <div className="text-[11px] min-[561px]:text-xs text-gray-500 font-medium mt-1 whitespace-nowrap">
                    powered by: <i>{MODEL_NAME}</i>
                  </div>
                </div>
              </div>
            </div>
          </header>
s
          <main className="flex-1 min-h-0 overflow-y-auto px-3 min-[561px]:px-4 py-3 min-[561px]:py-4">
            <div className="flex flex-col gap-2.5 min-[561px]:gap-3">
              {messages.map((m) => {
                const isUser = m.role === 'user';
                return (
                  <div key={m.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={[
                        'max-w-[80%] min-[561px]:max-w-[78%] rounded-2xl px-3.5 min-[561px]:px-4 py-2.5 min-[561px]:py-3 text-sm leading-relaxed',
                        isUser
                          ? 'bg-accent-light border-accent-light text-gray-800'
                          : 'bg-gray-50 text-gray-800',
                      ].join(' ')}
                      style={{ wordBreak: 'break-word' }}
                    >
                      <div className="whitespace-pre-wrap">{m.content}</div>
                    </div>
                  </div>
                );
              })}

              {isTyping ? (
                <div className="flex justify-start">
                  <TypingIndicator />
                </div>
              ) : null}

              <div ref={bottomRef} />
            </div>
          </main>

          <form
            className="p-2.5 min-[561px]:p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage();
            }}
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => {
                  const next = e.target.value.slice(0, MAX_INPUT_CHARS);
                  setInput(next);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    void sendMessage();
                  }
                }}
                rows={1}
                maxLength={MAX_INPUT_CHARS}
                placeholder="Mensaje…"
                className={[
                  'flex-1 resize-none rounded-3xl border border-gray-300 bg-white px-4 py-3 text-base leading-5 text-gray-900 placeholder:text-gray-500',
                  'focus:outline-none focus:ring-0 focus:border-gray-300',
                  'overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
                ].join(' ')}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              />

              <button
                type="submit"
                disabled={!canSend}
                aria-label="Send message"
                className={[
                  'shrink-0 inline-flex items-center justify-center rounded-full size-12 border transition',
                  canSend
                    ? 'bg-accent border-accent text-white hover:brightness-105 active:scale-[0.98] shadow-[0_10px_26px_rgba(0,0,0,0.18)]'
                    : 'bg-gray-200 border-gray-200 text-gray-500 cursor-not-allowed',
                ].join(' ')}
              >
                <FiSend className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

