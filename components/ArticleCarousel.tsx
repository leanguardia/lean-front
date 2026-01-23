'use client';

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

import Image from 'next/image';

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
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

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-serif font-light text-gray-900">
          A R T Í C U L O S
        </h3>
        <div className="flex items-center gap-3">
          {/* <a
            href="/blog"
            className="text-sm md:text-base text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            leer más →
          </a> */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-lg bg-white cursor-pointer hover:scale-120 transition-colors disabled:opacity-40 disabled:scale-100"
              aria-label="Previous article"
            >
              <FaArrowLeftLong className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-lg bg-white cursor-pointer hover:scale-120 transition-colors disabled:opacity-40 disabled:scale-100"
              aria-label="Next article"
            >
              <FaArrowRightLong className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <a
            className="group inline-flex items-center cursor-pointer gap-1 text-md md:text-base text-gray-600 hover:text-gray-900 hover:scale-105 transition duration-200 ease-out"
            onClick={() => alert('de depente hay muchos feriados, ¿no?')}
          >
            leer más
          </a>
        </div>
      </div>

      {/* Carousel content */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className="h-full flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {pages.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="w-full flex-none grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 h-full"
            >
              {page.map((article, idx) => (
                <div
                  key={`${pageIdx}-${idx}`}
                  className="relative overflow-hidden rounded-lg bg-white border border-gray-200 flex flex-col"
                >
                  {/* Image section */}
                  <div className="relative h-3/5 w-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={pageIdx === 0 && idx === 0}
                    />
                  </div>

                  {/* Content section */}
                  <div className="h-2/5 bg-white p-4 md:p-5 flex flex-col">
                    <h4 className="text-lg md:text-xl font-serif font-semibold text-gray-700 mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
