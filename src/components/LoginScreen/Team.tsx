import React from 'react';

export const Team: React.FC = () => {
  return (
    <section className="py-16 lg:py-section-padding bg-surface-container-lowest" id="team">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-gutter items-center">

          {/* Portrait Column */}
          <div className="md:col-span-5 order-2 md:order-1 mt-12 md:mt-0 relative group">
            <div className="aspect-[3/4] w-full overflow-hidden border border-outline-variant grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
              <img
                alt="Master Roaster"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                src="/assets/2022-33.webp"
              />
            </div>
            <div className="absolute -bottom-6 right-0 lg:-right-12 bg-white border border-outline-variant p-4 lg:p-stack-md shadow-lg w-48 lg:w-56 group-hover:-translate-y-2 transition-transform duration-700 z-10">
              <p className="font-headline-md text-headline-md text-primary tracking-wider uppercase mb-1">Rex Hii</p>
              <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Founder</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] block mb-stack-sm">
              靈魂人物
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-4xl lg:text-headline-lg mb-6 lg:mb-stack-lg uppercase tracking-widest leading-tight">
              Master behind<br />the Craft
            </h2>

            <div className="space-y-6">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                擁有十年以上的精品咖啡烘焙經驗，Rex 堅信每一支豆子都有其獨特的風味密碼。他不追求盲目的潮流，而是以近乎科研般的嚴謹態度，透過曲線的微調，將咖啡豆中最純粹的花果香氣與甜感釋放到極致。
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light italic border-l-2 border-primary pl-4">
                「一杯完美的咖啡，不需要複雜的語言去解釋，當你喝下它的第一口，風土就會在你口中訴說它的故事。」
              </p>
            </div>

            <div className="mt-stack-lg flex items-center gap-6">
              <div className="w-12 h-[1px] bg-outline-variant"></div>
              <p className="font-label-md text-label-md text-primary uppercase tracking-[0.2em]">
                CQI Q ARABICA GRADER
              </p>
            </div>

            {/* Medals (Triangle Layout) */}
            {/* Medals (Triangle Layout) */}
            <div className="mt-12 lg:mt-16 flex flex-col items-center w-full">
              {/* 頂端獎牌 */}
              <div className="flex justify-center w-full relative z-10">
                <img
                  src="/assets/1.webp"
                  alt="Award 1"
                  className="w-28 md:w-32 lg:w-40 h-auto object-contain invert opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-out"
                />
                <img
                  src="/assets/3.webp"
                  alt="Award 3"
                  className="w-28 md:w-32 lg:w-40 h-auto object-contain invert opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>

              {/* 底部兩顆獎牌 */}
              <img
                src="/assets/2.webp"
                alt="Award 2"
                className="w-28 md:w-32 lg:w-40 h-auto object-contain invert opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-out"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
