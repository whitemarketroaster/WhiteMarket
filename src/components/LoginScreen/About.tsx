import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-16 lg:py-section-padding bg-surface" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-gutter items-center">
          <div className="md:col-span-5 mb-10 md:mb-0">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] block mb-stack-sm">
              關於我們
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-4xl lg:text-headline-lg mb-6 lg:mb-stack-md uppercase tracking-widest">
              Art of the Essential
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg leading-relaxed max-w-md">
              在 White Market，我們相信減法即是加法。摒棄繁複的裝飾，回歸咖啡豆最原始的風土與處理工藝，將每一杯咖啡視為建築般的精準構建。
            </p>
            <div className="aspect-square w-full overflow-hidden border border-outline-variant grayscale hover:grayscale-0 transition-all duration-700">
              <img
                alt="Coffee Cup Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                src="/assets/coffee4.webp"
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-8 lg:gap-gutter mt-4 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-gutter">
              <div className="aspect-[4/5] w-full overflow-hidden border border-outline-variant relative group">
                <img
                  alt="Coffee Bean Hands"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/coffee2.webp"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-stack-md bg-white/90 backdrop-blur-sm w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-label-sm text-label-sm uppercase tracking-[0.2em]">
                    匠心選豆 Origin Select
                  </p>
                </div>
              </div>
              <div className="aspect-[4/5] w-full overflow-hidden border border-outline-variant relative group">
                <img
                  alt="Barista at work"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/coffee3.webp"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-stack-md bg-white/90 backdrop-blur-sm w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-label-sm text-label-sm uppercase tracking-[0.2em]">
                    專業品控 Quality Control
                  </p>
                </div>
              </div>
            </div>
            <div className="p-stack-lg border border-outline-variant wood-accent flex flex-col justify-center items-center text-center">
              <h3 className="font-headline-md text-headline-md mb-stack-sm uppercase tracking-[0.3em]">
                WORLD CLASS COFFEE
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant italic font-light">
                "建築般的空間，實驗室般的精準，藝術品般的口感。"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
