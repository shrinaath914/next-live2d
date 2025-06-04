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

### 📦 Available Built-in Models

| Model Name           | Preview (coming soon)         | Usage                                |
|----------------------|-------------------------------|--------------------------------------|
| histoire             | ![]()                         | `<Live2DWidget model="histoire" />`             |
| bilibili-22          | ![]()                         | `<Live2DWidget model="bilibili-22" />`          |
| bilibili-33          | ![]()                         | `<Live2DWidget model="bilibili-33" />`          |
| cat-black            | ![]()                         | `<Live2DWidget model="cat-black" />`            |
| cat-white            | ![]()                         | `<Live2DWidget model="cat-white" />`            |
| chino                | ![]()                         | `<Live2DWidget model="chino" />`                |
| date                 | ![]()                         | `<Live2DWidget model="date" />`                 |
| hallo                | ![]()                         | `<Live2DWidget model="hallo" />`                |
| haruto               | ![]()                         | `<Live2DWidget model="haruto" />`               |
| hibiki               | ![]()                         | `<Live2DWidget model="hibiki" />`               |
| HK416-1-normal       | ![]()                         | `<Live2DWidget model="HK416-1-normal" />`       |
| HK416-2-destroy      | ![]()                         | `<Live2DWidget model="HK416-2-destroy" />`      |
| HK416-2-normal       | ![]()                         | `<Live2DWidget model="HK416-2-normal" />`       |
| Kar98k-normal        | ![]()                         | `<Live2DWidget model="Kar98k-normal" />`        |
| kobayaxi             | ![]()                         | `<Live2DWidget model="kobayaxi" />`             |
| koharu               | ![]()                         | `<Live2DWidget model="koharu" />`               |
| kp31                 | ![]()                         | `<Live2DWidget model="kp31" />`                 |
| live_uu              | ![]()                         | `<Live2DWidget model="live_uu" />`              |
| mai                  | ![]()                         | `<Live2DWidget model="mai" />`                  |
| murakumo             | ![]()                         | `<Live2DWidget model="murakumo" />`             |
| Pio                  | ![]()                         | `<Live2DWidget model="Pio" />`                  |
| platelet             | ![]()                         | `<Live2DWidget model="platelet" />`             |
| platelet_2           | ![]()                         | `<Live2DWidget model="platelet_2" />`           |
| potion-Maker-Pio     | ![]()                         | `<Live2DWidget model="potion-Maker-Pio" />`     |
| rem                  | ![]()                         | `<Live2DWidget model="rem" />`                  |
| rem_2                | ![]()                         | `<Live2DWidget model="rem_2" />`                |
| Senko_Normals        | ![]()                         | `<Live2DWidget model="Senko_Normals" />`        |
| shizuku              | ![]()                         | `<Live2DWidget model="shizuku" />`              |
| shizuku_48           | ![]()                         | `<Live2DWidget model="shizuku_48" />`           |
| shizuku_pajama       | ![]()                         | `<Live2DWidget model="shizuku_pajama" />`       |
| terisa               | ![]()                         | `<Live2DWidget model="terisa" />`               |
| tia                  | ![]()                         | `<Live2DWidget model="tia" />`                  |
| umaru                | ![]()                         | `<Live2DWidget model="umaru" />`                |
| uni                  | ![]()                         | `<Live2DWidget model="uni" />`                  |
| wed_16               | ![]()                         | `<Live2DWidget model="wed_16" />`               |
| xisitina             | ![]()                         | `<Live2DWidget model="xisitina" />`             |
| z16                  | ![]()                         | `<Live2DWidget model="z16" />`                  |


## 🧑‍💻 Author
Trần Hữu Đang
Website: [https://dangth.dev](https://dangth.dev)

📝 License
[MIT]()