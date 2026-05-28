import React, { useRef } from 'react';

export const Honors: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const honors = [
    {
      title: '',//Czech LatteArt Champion 2026
      img: '/assets/DSCF9484.webp',
    },
    {
      title: '',
      img: '/assets/DSCF0091.webp',
    },
    {
      title: '',
      img: '/assets/DSCF0023.webp',
    },
    {
      title: '',//World of coffee San Diego 2026
      img: '/assets/DSCF0009.webp',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // 根據螢幕寬度決定一次捲動的距離，這裡設定為容器的寬度（或是一張圖的寬度）
      const clientWidth = scrollRef.current.clientWidth;
      const scrollAmount = window.innerWidth >= 1024 ? clientWidth / 3 : window.innerWidth >= 768 ? clientWidth / 2 : clientWidth;

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 lg:py-section-padding bg-surface-container overflow-hidden" id="honors">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 lg:px-margin-desktop">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] block mb-stack-sm">
            榮耀牆
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest">
            Wall of Fame
          </h2>
          <div className="w-12 h-[1px] bg-primary mt-6 mx-auto"></div>
        </div>

        {/* Carousel Track with Integrated Navigation */}
        <div className="relative group/carousel">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-8 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {honors.map((honor, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden aspect-[4/3] md:aspect-[3/4] lg:aspect-square border border-outline-variant cursor-pointer shrink-0 snap-center w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)]"
              >
                <img
                  src={honor.img}
                  alt={honor.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* 照片上的標題 */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-8 h-[2px] bg-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                    <h3 className="font-headline-md text-white text-xl md:text-2xl uppercase tracking-widest drop-shadow-lg leading-tight">
                      {honor.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Navigation Buttons (Desktop Only) */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-4 lg:left-8 top-[calc(50%-1rem)] -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-outline-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 z-10 shadow-sm"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-4 lg:right-8 top-[calc(50%-1rem)] -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-outline-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 z-10 shadow-sm"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
