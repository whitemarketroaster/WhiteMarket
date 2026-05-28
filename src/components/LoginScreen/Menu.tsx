import React, { useState } from 'react';
import { useSlider } from '../../hooks/useSlider';

export const Menu: React.FC = () => {
  const { currentIndex, goToSlide, nextSlide, prevSlide, setIsPaused } = useSlider(4, 8000);

  // Touch Swipe Logic
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const slides = [
    {
      title: 'Butter Cookies',
      subtitle: '黃油曲奇',
      notes: 'Bittersweet Roasted Caramel, Dark Cocoa ',
      desc: '像刚出炉的奶油曲奇，香气温暖又厚实。巴西豆带来坚果与焦糖甜感，印尼豆则增加厚度与可可尾韵，让这支配方在浓缩、奶咖表现都特别稳定。',
      img: '/assets/kafeidou.webp',
      link: 'https://shopee.com.my/COFFEE-BEAN-BUTTER-COOKIES-ESPRESSO-BLEND-%E6%84%8F%E5%BC%8F%E5%92%96%E5%95%A1-%E6%B5%93%E7%BC%A9%E5%92%96%E5%95%A1-%E5%92%96%E5%95%A1%E8%B1%86-i.272808361.14699390662?extraParams=%7B%22display_model_id%22%3A186991871077%2C%22model_selection_logic%22%3A3%7D'
    },
    {
      title: 'Ethiopia Omni',
      subtitle: '埃塞俄比亞',
      notes: 'Floral, Berries, Dark Chocolate, Earl Grey Tea',
      desc: '一支层次细腻的埃塞俄比亚 Omni Roast。整体风味干净轻盈，同时保有扎实甜感与细致层次。无论手冲或 SOE 都能展现丰富风味，作为奶咖基底时，也能带出明显花果调性。',
      img: '/assets/Coffeebean.webp',
      link: 'https://shopee.com.my/COFFEE-BEAN-ETHIOPIA-DANSE-MORMORA-G1-ESPRESSO-FILTER-SOE-%E6%84%8F%E5%BC%8F%E6%B5%93%E7%BC%A9%E5%92%96%E5%95%A1-%E5%92%96%E5%95%A1%E8%B1%86-i.272808361.23978368957?extraParams=%7B%22display_model_id%22%3A186991895958%2C%22model_selection_logic%22%3A3%7D'
    },
    {
      title: 'Black Market',
      subtitle: '黑市拼配',
      notes: 'Dark chocolate, Almond, Walnut, Cocoa, Honey',
      desc: '以经典中深调性为核心，带来厚实而平衡的风味表现。巴西带来扎实醇厚的巧克力基底，哥伦比亚则增加甜感与平衡度，让这支配方拥有稳定、耐喝的日常风味。',
      img: '/assets/coffeebean2.webp',
      link: 'https://shopee.com.my/COFFEE-BEAN-BLACK-MARKET-ESPRESSO-BLEND-%E6%84%8F%E5%BC%8F%E5%92%96%E5%95%A1-%E6%B5%93%E7%BC%A9%E5%92%96%E5%95%A1-%E5%92%96%E5%95%A1%E8%B1%86-i.272808361.22164319747?extraParams=%7B%22display_model_id%22%3A232679946260%2C%22model_selection_logic%22%3A3%7D'
    },
    {
      title: 'Classic Blend',
      subtitle: '經典拼配',
      notes: 'Sweet & Balance, Ripe Fruit, Melted Chocolate',
      desc: '一支甜感与平衡感兼具的经典配方，巴西带来圆润扎实的巧克力基底，埃塞俄比亚则增添成熟水果般的明亮层次，让整体风味柔和顺口，同时保有细致变化。',
      img: '/assets/coffeebean3.webp',
      link: 'https://shopee.com.my/COFFEE-BEAN-CLASSIC-ESPRESSO-BLEND-%E6%84%8F%E5%BC%8F%E6%B5%93%E7%BC%A9%E5%92%96%E5%95%A1%EF%BC%8C%E5%92%96%E5%95%A1%E8%B1%86-i.272808361.23377922461?extraParams=%7B%22display_model_id%22%3A194542084044%2C%22model_selection_logic%22%3A3%7D'
    },
  ];

  return (
    <section className="py-16 lg:py-section-padding bg-surface-container-low border-y border-outline-variant overflow-hidden" id="shop">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 lg:px-margin-desktop">

        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 lg:mb-stack-lg">
          <div className="mb-stack-md md:mb-0">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] block mb-stack-sm">
              本店優選
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase tracking-widest">
              Featured Roasts
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-12 h-12 border border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 group"
            >
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-12 h-12 border border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 group"
            >
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Dynamic Fading Carousel */}
        <div
          className="grid grid-cols-1 touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`col-start-1 row-start-1 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
              >
                <div className="h-full grid grid-cols-1 md:grid-cols-2 bg-white border border-outline-variant shadow-sm hover:shadow-xl transition-shadow duration-700 group">

                  {/* Image with Ken Burns effect */}
                  <div className="overflow-hidden h-56 md:h-auto relative">
                    <img
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'
                        }`}
                      src={slide.img}
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Text Content with animated slide-up */}
                  <div className="p-8 md:p-8 lg:p-12 flex flex-col justify-center overflow-hidden">
                    <div className={`transition-all duration-700 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                      }`}>
                      <h3 className="font-headline-md text-headline-md mb-4 uppercase tracking-wider">
                        {slide.title}
                      </h3>
                      <p className="font-headline-md text-lg mb-8 text-secondary">{slide.subtitle}</p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Notes</span>
                          <p className="font-body-md text-body-md">{slide.notes}</p>
                        </div>
                        <div className="h-[1px] bg-outline-variant w-full"></div>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {slide.desc}
                        </p>
                      </div>

                      <button onClick={() => window.open(slide.link, '_blank')} className="mt-12 self-start border-b border-primary pb-1 font-label-md text-label-md uppercase tracking-widest hover:text-secondary hover:border-secondary transition-colors duration-300">
                        了解更多
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === currentIndex ? 'bg-primary w-12' : 'bg-outline-variant w-2 hover:bg-secondary'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
