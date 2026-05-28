import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section className="py-16 lg:py-section-padding bg-surface" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-8 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.3em] block mb-stack-sm">
              聯繫我們
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-4xl lg:text-headline-lg mb-8 lg:mb-stack-lg uppercase tracking-widest">
              Visit White Market
            </h2>
            <div className="space-y-8">
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-2">Location</p>
                <p className="font-body-lg text-body-lg">BROOKE DRIVE 21, 1, Jln Kawi, Pekan Sibu, 96000 Sibu, Sarawak</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-2">Hours</p>
                <p className="font-body-md text-body-md leading-relaxed">
                  Mon — Sun: 10:00 - 18:00<br />
                </p>
              </div>
              {/* <div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-2">Contact</p>
                <p className="font-body-md text-body-md">
                  hello@monolith.coffee<br />+886 2 2345 6789
                </p>
              </div> */}
            </div>
          </div>
          <div className="bg-surface-container border border-outline-variant aspect-square md:aspect-auto overflow-hidden relative min-h-[300px]">
            <iframe 
              src="https://maps.google.com/maps?q=BROOKE+DRIVE+21,+1,+Jln+Kawi,+Pekan+Sibu,+96000+Sibu,+Sarawak&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="White Market Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
