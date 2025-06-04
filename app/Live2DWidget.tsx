'use client'
import { useEffect } from 'react'

interface Live2DWidgetProps {
  model?: string // tên model (thư mục)
}

export default function Live2DWidget({ model = 'histoire' }: Live2DWidgetProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js'
    script.async = true

    script.onload = () => {
      // @ts-ignore
      window.L2Dwidget?.init({
        model: {
          jsonPath: `/models/${model}/model.json`,
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
      })

      const waitForWidget = () => {
        const el = document.querySelector('#live2d-widget') as HTMLElement
        if (!el) {
          requestAnimationFrame(waitForWidget)
          return
        }

        Object.assign(el.style, {
          position: 'fixed',
          right: '0px',
          bottom: '-20px',
          transition: 'bottom 0.3s ease-in-out',
          zIndex: '9999',
          pointerEvents: 'none',
        })

        let lastScrollTop = 0
        window.addEventListener('scroll', () => {
          const currentScrollTop = window.scrollY
          el.style.bottom = currentScrollTop < lastScrollTop ? '20px' : '-20px'
          lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
        })
      }

      waitForWidget()
    }

    document.body.appendChild(script)
  }, [model])

  return null
}
