# next-live2d

A plug-and-play Live2D widget for Next.js (App Router compatible).  
Just install, copy model, and go — no setup required.

![Live2D Widget Preview](https://user-images.githubusercontent.com/your-preview-image.png)

## ✨ Features

- 🧠 Auto-load [Live2D Widget](https://github.com/xiazeyu/live2d-widget.js)
- ⚙️ Zero-config usage with App Router
- 🎒 Comes with built-in model (`histoire`)
- ✅ SSR-safe using `dynamic(() => import(...), { ssr: false })`

---

## 🚀 Installation

```bash
npm install next-live2d
🧱 Copy model to your public folder:
bash
Sao chép
Chỉnh sửa
cp -r node_modules/next-live2d/models ./public/
```

🧩 Usage in Next.js (app/layout.tsx)
```tsx
'use client'

import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import './globals.css'

const Live2DWidget = dynamic(() => import('next-live2d'), { ssr: false })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Live2DWidget />
      </body>
    </html>
  )
}
```


## 📁 Model Path
By default, the widget looks for:

```bash
/models/histoire/model.json
If you want to use a different model or path, please clone the repo and customize it.
```

## 🧑‍💻 Author
Trần Hữu Đang
Website: [https://dangth.dev](https://dangth.dev)

📝 License
[MIT]()