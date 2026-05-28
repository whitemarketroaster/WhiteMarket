import React, { useState, useEffect, useRef } from 'react';

export const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const win = window as any;
    let fallbackTimer: any = null;

    // 1. 動態加載 YouTube Iframe API 腳本
    if (!win.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // 2. 初始化播放器實例的函數
    const initPlayer = () => {
      if (iframeRef.current && win.YT && win.YT.Player) {
        // 設定備用定時器，防止影片因策略限制無法播放時背景一直漆黑
        fallbackTimer = setTimeout(() => {
          setIsVideoActive(true);
        }, 3500);

        playerRef.current = new win.YT.Player(iframeRef.current, {
          events: {
            onReady: (event: any) => {
              event.target.mute();
              // NOTE: 設定播放畫質為高清 1080p
              if (event.target.setPlaybackQuality) {
                event.target.setPlaybackQuality('hd1080');
              }
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (event.data === 1) { // YT.PlayerState.PLAYING
                setIsVideoActive(true);
                if (event.target.setPlaybackQuality) {
                  event.target.setPlaybackQuality('hd1080');
                }
                if (fallbackTimer) clearTimeout(fallbackTimer);
              }
              if (event.data === 0) { // YT.PlayerState.ENDED
                // NOTE: 當影片播放完畢，利用 seekTo(0) 重設進度並繼續播放。
                // 這樣能防止 YouTube 重新載入播放器組件，從而徹底解決重新播放時閃爍「大播放按鈕」的問題。
                event.target.seekTo(0);
                if (event.target.setPlaybackQuality) {
                  event.target.setPlaybackQuality('hd1080');
                }
                event.target.playVideo();
              }
            }
          }
        });
      }
    };

    // 3. 確保 API 準備就緒後再初始化
    if (win.YT && win.YT.Player) {
      initPlayer();
    } else {
      const previousCallback = win.onYouTubeIframeAPIReady;
      win.onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        initPlayer();
      };
    }

    return () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // Text fade and subtle shift calculation
  const textOpacity = Math.max(1 - offsetY / 600, 0);
  const textTransform = `translateY(${offsetY * 0.2}px)`;

  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" id="home">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-black">
        {/* NOTE: 使用 YouTube 嵌入影片作為背景，並配置自動播放、靜音。
            透過精確的寬高比例計算（16:9）使影片大小完美適配 50vh 的 section，配合 isVideoActive 與 opacity 實現無縫漸入，隱藏首幀加載細節。
            同時設定 pointer-events-none 和 select-none 配合上方遮罩層，確保使用者無法選中或點擊影片。 */}
        <iframe
          ref={iframeRef}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none border-0 transition-opacity duration-1000 ${isVideoActive ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            width: 'max(100vw, 88.88vh)',
            height: 'max(56.25vw, 50vh)',
          }}
          src="https://www.youtube.com/embed/MZdBVqdYr5g?autoplay=1&mute=1&loop=1&playlist=MZdBVqdYr5g&controls=0&showinfo=0&rel=0&enablejsapi=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1&vq=hd1080"
          allow="autoplay; encrypted-media"
          title="Hero Background Video"
          tabIndex={-1}
        />
        {/* NOTE: 遮罩層使用 pointer-events-auto（預設）來作為實體阻擋層，吃掉所有背景區域的點擊、雙擊或拖曳事件，
            從而使底層的 iframe 絕對無法被點擊或觸發 YouTube 的播放/暫停等控制功能。 */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-auto"></div>
      </div>

      {/* Foreground Content with Parallax & Fade */}
      <div
        className="relative z-10 text-center text-white px-margin-mobile md:px-8 lg:px-margin-desktop will-change-transform"
        style={{
          opacity: textOpacity,
          transform: textTransform
        }}
      >
        {/*<h1 className="font-display-lg text-headline-lg-mobile md:text-5xl lg:text-display-lg mb-stack-md uppercase tracking-[0.2em] leading-tight drop-shadow-2xl">
          Pure Essence<br />in Every Sip
        </h1>
        <p className="font-body-lg text-body-lg max-w-2xl mx-auto opacity-90 font-light tracking-wide drop-shadow-md">
          粹煉每一滴純粹，探索咖啡最原始的感動。
        </p>
        <div className="mt-stack-lg">
          <a
            className="inline-block border border-white/80 text-white px-12 py-4 font-label-md text-label-md hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.2em] backdrop-blur-sm bg-black/20"
            href="#menu"
          >
            探索菜單
          </a>
        </div>*/}
      </div>
    </section>
  );
};
