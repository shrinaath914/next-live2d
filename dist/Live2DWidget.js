'use client';
import { useEffect } from 'react';
export default function Live2DWidget({ modelJsonPath = '/models/histoire/model.json' }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            window.L2Dwidget?.init({
                model: {
                    jsonPath: modelJsonPath,
                },
                display: {
                    position: 'right',
                    width: 180,
                    height: 300,
                },
                mobile: {
                    show: true,
                },
                react: {
                    opacityDefault: 0.8,
                    opacityOnHover: 0.2,
                },
            });
            const waitForWidget = () => {
                const el = document.querySelector('#live2d-widget');
                if (!el)
                    return requestAnimationFrame(waitForWidget);
                Object.assign(el.style, {
                    position: 'fixed',
                    right: '0px',
                    bottom: '-20px',
                    transition: 'bottom 0.3s ease-in-out',
                    zIndex: '9999',
                    pointerEvents: 'none',
                });
                let lastScrollTop = 0;
                const handleScroll = () => {
                    const currentScrollTop = window.scrollY;
                    el.style.bottom = currentScrollTop < lastScrollTop ? '20px' : '-20px';
                    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
                };
                window.addEventListener('scroll', handleScroll);
            };
            waitForWidget();
        };
        document.body.appendChild(script);
    }, [modelJsonPath]);
    return null;
}
