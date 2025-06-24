'use client';
import { useEffect } from 'react';
export default function Live2DWidget({ modelName, style, className }) {
    const modelJsonPath = `https://raw.githubusercontent.com/dangtranhuu/next-live2d/refs/heads/main/models/${modelName}/model.json`;
    useEffect(() => {
        // ✅ Đã khởi tạo rồi thì không lặp lại
        if (window.__live2d_initialized)
            return;
        const script = document.createElement('script');
        script.src =
            'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js';
        script.async = true;
        script.onload = () => {
            if (window.__live2d_initialized)
                return;
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
            window.__live2d_initialized = true;
            const waitForWidget = () => {
                const el = document.querySelector('#live2d-widget');
                if (!el)
                    return requestAnimationFrame(waitForWidget);
                Object.assign(el.style, {
                    position: 'fixed',
                    right: '0px',
                    transition: 'bottom 0.3s ease-in-out',
                    zIndex: '9999',
                    pointerEvents: 'none',
                    ...style,
                });
                if (className) {
                    el.className += ' ' + className;
                }
            };
            waitForWidget();
        };
        document.body.appendChild(script);
        return () => {
            // ✅ cleanup an toàn tuyệt đối
            const widget = document.querySelector('#live2d-widget');
            if (widget?.parentNode) {
                widget.parentNode.removeChild(widget);
            }
            // ✅ xóa flag để có thể re-init lần sau nếu cần
            window.L2Dwidget = undefined;
            window.__live2d_initialized = false;
        };
    }, [modelJsonPath, style, className]);
    return null;
}
