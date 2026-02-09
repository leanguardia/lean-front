'use client';

import { FiArrowLeft, FiSend } from 'react-icons/fi';
import { sendMessage as sendMessageAPI, startConversation } from '@/lib/api/chat';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import RadialGlow from '@/components/RadialGlow';
import ReactMarkdown from 'react-markdown';
import ShinyText from '@/components/ShinyText';
import TypingIndicator from '@/components/TypingIndicator';
import remarkGfm from 'remark-gfm';

const markdownBubbleClasses = {
  p: 'mb-2 last:mb-0',
  strong: 'font-semibold',
  em: 'italic',
  ul: 'list-disc list-outside ml-2 mb-2 space-y-0.5 last:mb-0',
  ol: 'list-decimal list-outside ml-2 mb-2 space-y-0.5 last:mb-0',
  li: 'leading-relaxed',
  a: 'underline hover:opacity-80',
  code: 'font-mono text-[0.9em] bg-black/10 px-1 py-0.5 rounded',
  pre: 'font-mono text-[0.85em] bg-black/10 p-2 rounded-lg overflow-x-auto mb-2',
  blockquote: 'border-l-2 border-current/30 pl-3 my-2 opacity-90',
};

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const MODEL_NAME = 'gemini-2.0-flash-001';
const MAX_INPUT_CHARS = 1400;

const uid = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

function AvailabilityStatus({
  isInitializing,
  hasError,
}: {
  isInitializing: boolean;
  hasError: boolean;
}) {
  const unavailable = isInitializing || hasError;
  return (
    <div className="text-xs min-[561px]:text-sm text-gray-800">
      {unavailable ? (
        <span className="inline-flex items-center gap-1">
          <span className="text-gray-500" aria-hidden="true">●</span>
          <span>No disponible</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1">
          <ShinyText
            text="●"
            className="size-4 align-middle"
            color="var(--color-secondary)"
            shineColor="var(--color-accent-light)"
            spread={100}
            speed={2.1}
            pauseOnHover={false}
            direction="left"
            aria-hidden="true"
          />
          <span>en línea</span>
        </span>
      )}
    </div>
  );
}

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const canSend = useMemo(
    () => input.trim().length > 0 && !isTyping && conversationId !== null,
    [input, isTyping, conversationId]
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const initConversation = async () => {
      try {
        const response = await startConversation();
        setConversationId(response.id);
      } catch (err) {
        setError('Ups, algo está roto, vete a hablar con mi humano.');
      } finally {
        setIsInitializing(false);
      }
    };
    void initConversation();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = '0px';
    el.style.height = `${Math.max(Math.min(el.scrollHeight, 160), 48)}px`;
  }, [input]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isTyping || !conversationId) return;

    setMessages((prev) => [...prev, { id: uid(), role: 'user', content: text }]);
    setInput('');
    setIsTyping(true);
    setError(null);

    try {
      const response = await sendMessageAPI(conversationId, text);
      setMessages((prev) => [...prev, { id: response.id, role: 'assistant', content: response.message }]);
    } catch (err) {
      setError('Ups, algo algo está roto, vete a hablar con mi humano.');
    } finally {
      setIsTyping(false);
    }
  }, [input, isTyping, conversationId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void sendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  };

  return (
    <div className="min-h-[100dvh] min-[561px]:flex min-[561px]:items-center min-[561px]:justify-center p-0 min-[561px]:p-6 relative">
      <RadialGlow />
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
                <div className="relative size-14 min-[561px]:size-18 rounded-full overflow-hidden bg-accent-light shrink-0">
                  <Image src="/images/lean.png" alt="leancontinuo avatar" fill className="object-cover" />
                </div>

                <div className="leading-tight text-left min-w-0">
                  <div className="text-base min-[561px]:text-lg font-medium text-gray-900 truncate">
                    leancontinuo
                  </div>
                  <AvailabilityStatus isInitializing={isInitializing} hasError={!!error} />
                  <div className="text-sm text-gray-800 font-normal font-serif font-medium mt-1 whitespace-nowrap">
                    powered by: <i>{MODEL_NAME}</i>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="chat-messages-scroll flex-1 min-h-0 overflow-y-auto px-3 min-[561px]:px-4 py-3 min-[561px]:py-4">
            {isInitializing ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-700 text-sm">Iniciando conversación...</div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-full px-4">
                <div className="text-red-600 text-sm text-center bg-white/80 rounded-2xl px-4 py-3 max-w-[90%]">
                  {error}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2.5 min-[561px]:gap-3">
                {messages.map((m) => (
                  <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] min-[561px]:max-w-[78%] rounded-2xl px-3.5 min-[561px]:px-4 py-2.5 min-[561px]:py-3 text-sm leading-relaxed opacity-[0.70] [&_ul]:pl-2 [&_ol]:pl-2 ${
                        m.role === 'user'
                          ? 'bg-accent-light border-accent-light text-black'
                          : 'bg-gray-50 text-black'
                      }`}
                      style={{ wordBreak: 'break-word' }}
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p className={markdownBubbleClasses.p}>{children}</p>
                          ),
                          strong: ({ children }) => (
                            <strong className={markdownBubbleClasses.strong}>
                              {children}
                            </strong>
                          ),
                          em: ({ children }) => (
                            <em className={markdownBubbleClasses.em}>
                              {children}
                            </em>
                          ),
                          ul: ({ children }) => (
                            <ul className={markdownBubbleClasses.ul}>
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className={markdownBubbleClasses.ol}>
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className={markdownBubbleClasses.li}>
                              {children}
                            </li>
                          ),
                          a: ({ href, children }) => {
                            const isInternal =
                              href?.startsWith('/') && !href.startsWith('//');
                            if (isInternal && href) {
                              return (
                                <Link
                                  href={href}
                                  className={markdownBubbleClasses.a}
                                >
                                  {children}
                                </Link>
                              );
                            }
                            return (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={markdownBubbleClasses.a}
                              >
                                {children}
                              </a>
                            );
                          },
                          code: ({ className, children, ...props }) => {
                            const isBlock = Boolean(
                              className?.includes('language-')
                            );
                            if (isBlock) {
                              return (
                                <pre className={markdownBubbleClasses.pre}>
                                  <code className={className}>{children}</code>
                                </pre>
                              );
                            }
                            return (
                              <code
                                className={markdownBubbleClasses.code}
                                {...props}
                              >
                                {children}
                              </code>
                            );
                          },
                          pre: ({ children }) => <>{children}</>,
                          blockquote: ({ children }) => (
                            <blockquote
                              className={markdownBubbleClasses.blockquote}
                            >
                              {children}
                            </blockquote>
                          ),
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <TypingIndicator />
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </main>

          <form className="p-2.5 min-[561px]:p-3" onSubmit={handleSubmit}>
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_CHARS))}
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={MAX_INPUT_CHARS}
                placeholder="Mensaje…"
                disabled={isInitializing || error !== null}
                className="flex-1 resize-none rounded-3xl bg-white px-4 py-3 text-base leading-5 text-black placeholder:text-gray-700 focus:outline-none focus:ring-0 focus:inset-shadow-[0_0px_7px_rgba(255,255,255,0.5)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden opacity-64 inset-shadow-[0_0px_14px_rgba(140,140,140,0.2)] disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              />
              <button
                type="submit"
                disabled={!canSend}
                aria-label="Send message"
                className={`shrink-0 inline-flex items-center justify-center rounded-full size-12 transition transition-all duration-500 ${
                  canSend
                    ? 'bg-accent text-white hover:brightness-105 shadow-[0_0px_14px_rgba(0,0,0,0.2)]'
                    : 'bg-neutral-light text-gray-500 cursor-not-allowed'
                }`}
              >
                <FiSend className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
