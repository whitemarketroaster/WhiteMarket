import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-margin-mobile md:px-8 lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-stack-md md:mb-0">
          <img 
            src="/assets/logo.webp" 
            alt="White Market" 
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left mb-stack-md md:mb-0 uppercase tracking-widest opacity-60">
          © 2026 White Market Coffee Roaster. All rights reserved.
        </p>
        <div className="flex gap-10">
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest"
            href="https://www.instagram.com/whitemarket_roasters/"
          >
            Instagram
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest"
            href="https://wa.me/+60135965663"
          >
            Contact
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase tracking-widest"
            href="https://shopee.com.my/whitemarketcoffeeroasters?entryPoint=ShopBySearch&searchKeyword=white%20market"
          >
            Shopee
          </a>
        </div>
      </div>
    </footer>
  );
};
