'use client'
import { useEffect } from 'react';

export default function Live2DWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      window.L2Dwidget?.init({
        model: {
          jsonPath: '/models/histoire/model.json',
        },
        display: {
          position: 'right',
          width: 180,
          height: 300,
        },
        mobile: { show: true },
        react: {
          opacityDefault: 0.8,
          opacityOnHover: 0.2,
        },
      });

      const waitForWidget = () => {
        const el = document.querySelector('#live2d-widget') as HTMLElement;
        if (!el) {
          requestAnimationFrame(waitForWidget);
          return;
        }

        Object.assign(el.style, {
          position: 'fixed',
          right: '0px',
          bottom: '-20px',
          transition: 'bottom 0.3s ease-in-out',
          zIndex: '9999',
          pointerEvents: 'none',
        });

        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
          const currentScrollTop = window.scrollY;
          el.style.bottom = currentScrollTop < lastScrollTop ? '20px' : '-20px';
          lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });
      };

      waitForWidget();
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
