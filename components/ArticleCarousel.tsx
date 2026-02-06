'use client';

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

const TOUCH_MOVE_THRESHOLD_PX = 5;

export interface Article {
  title: string;
  excerpt: string;
  image: string;
  slug?: string;
}

interface ArticleCarouselProps {
  articles: Article[];
}

export default function ArticleCarousel({ articles }: ArticleCarouselProps) {
  // `currentIndex` is the current "page" index (one page = 1 card on mobile, 2 cards on md+).
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  // On touch devices, one card can be "expanded" (revealed by slight drag).
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const touchGesture = useRef<{
    cardKey: string;
    startX: number;
    startY: number;
    revealed: boolean;
  } | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    const setTouch = () => setIsTouchDevice(mq.matches);
    setTouch();
    mq.addEventListener('change', setTouch);
    return () => mq.removeEventListener('change', setTouch);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Tailwind breakpoints: sm = 640px, 2xl = 1536px
      // Requirement: 1 on xs, 2 on sm+, 4 on 2xl+.
      const w = window.innerWidth;
      setSlidesPerView(w >= 1536 ? 4 : w >= 640 ? 2 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pages: Article[][] = [];
  for (let i = 0; i < articles.length; i += slidesPerView) {
    pages.push(articles.slice(i, i + slidesPerView));
  }

  const maxIndex = Math.max(0, pages.length - 1);

  // If breakpoint changes, keep index in range.
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Reset tap-expanded state when user navigates to another slide.
  useEffect(() => {
    setExpandedCard(null);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleTouchStart = (cardKey: string, e: React.TouchEvent) => {
    const t = e.touches[0];
    touchGesture.current = {
      cardKey,
      startX: t.clientX,
      startY: t.clientY,
      revealed: false,
    };
  };

  const handleTouchMove = (cardKey: string, e: React.TouchEvent) => {
    const g = touchGesture.current;
    if (!g || g.cardKey !== cardKey || g.revealed) return;
    const t = e.touches[0];
    const dx = t.clientX - g.startX;
    const dy = t.clientY - g.startY;
    if (Math.hypot(dx, dy) >= TOUCH_MOVE_THRESHOLD_PX) {
      g.revealed = true;
      setExpandedCard(cardKey);
    }
  };

  const handleCardClick = (e: React.MouseEvent, cardKey: string, slug?: string) => {
    if (isTouchDevice && touchGesture.current?.revealed) {
      e.preventDefault();
      e.stopPropagation();
      touchGesture.current = null;
      return;
    }
    touchGesture.current = null;
    if (!slug) e.preventDefault();
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header with navigation */}
      <div className="flex items-center justify-between border-b-2 border-gray-500 px-3 md:px-4 py-3 md:py-4">
        <h3 className="text-md md:text-xl font-serif font-light text-gray-900">
          A R T Í C U L O S
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-lg cursor-pointer hover:scale-120 transition-colors disabled:opacity-40 disabled:scale-100"
              aria-label="Previous article"
            >
              <FaArrowLeftLong className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-lg cursor-pointer hover:scale-120 transition-colors disabled:opacity-40 disabled:scale-100"
              aria-label="Next article"
            >
              <FaArrowRightLong className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <a
            className="group inline-flex items-center cursor-pointer gap-1 text-md md:text-base text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-200 ease-out"
            onClick={() => alert('de repente hay muchos feriados, ¿no?')}
          >
            leer más
          </a>
        </div>
      </div>

      {/* Carousel content */}
      {/* Hide horizontal overflow for slide; keep vertical overflow visible for hover shadows */}
      <div className="flex-1 relative overflow-x-hidden overflow-y-visible">
        <div
          className="h-full flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {pages.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="w-full flex-none grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 h-full [&>*:not(:last-child)]:border-r-2 [&>*:not(:last-child)]:border-gray-500"
            >
              {page.map((article, idx) => {
                const cardKey = `${pageIdx}-${idx}`;
                const isExpanded = isTouchDevice && expandedCard === cardKey;
                const href = article.slug ? `/${article.slug}` : '#';
                return (
                  <Link
                    key={cardKey}
                    href={href}
                    onTouchStart={(e) => handleTouchStart(cardKey, e)}
                    onTouchMove={(e) => handleTouchMove(cardKey, e)}
                    onClick={(e) => handleCardClick(e, cardKey, article.slug)}
                    className="group/article relative overflow-hidden bg-white flex flex-col text-center cursor-pointer transition-all duration-200 ease-out"
                  >
                    {/* Image section */}
                    <div className="relative h-4/5 w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover border-gray-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={pageIdx === 0 && idx === 0}
                      />
                      {/* Excerpt overlay: hover on desktop; on touch, slight drag reveals, tap opens article */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-out opacity-0 group-hover/article:opacity-100 ${isExpanded ? 'opacity-100' : ''}`}
                      >
                        <div className="absolute inset-0 bg-white/82"></div>
                        <p className="relative z-10 text-gray-700 text-base px-4 md:px-6 line-clamp-4 text-center font-sans">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="h-1/5 bg-white px-4 md:px-5 flex flex-col justify-center">
                      <h4
                        className={`text-md md:text-lg font-serif font-semibold leading-tight line-clamp-2 transition-all duration-200 ease-out text-gray-600 group-hover/article:scale-103 group-hover/article:text-gray-800 ${isExpanded ? 'scale-[1.03] text-gray-800' : ''}`}
                      >
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
