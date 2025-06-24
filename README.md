A simple React component to embed Live2D models (via `live2d-widget`) in Next.js projects.

[![npm](https://img.shields.io/npm/v/next-live2d?style=flat-square)](https://www.npmjs.com/package/next-live2d)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![GitHub Repo stars](https://img.shields.io/github/stars/dangtranhuu/next-live2d?style=social)](https://github.com/dangtranhuu/next-live2d)
[![npm](https://img.shields.io/npm/dm/next-live2d.svg)](https://www.npmjs.com/package/next-live2d)




![Live2D Widget Preview](./public/main.gif)

## ✨ Features

- 🧠 Auto-load [Live2D Widget](https://github.com/xiazeyu/live2d-widget.js)
- ⚙️ Zero-config usage with App Router
- 🎒 Comes with built-in model (`histoire`)
- ✅ SSR-safe using `dynamic(() => import(...), { ssr: false })`

---

## 🚀 Installation

```bash
npm install next-live2d
```


🧩 Usage in Next.js (app/layout.tsx)
```tsx
'use client'

import { Live2DWidget } from 'next-live2d' {/* Import tại đây */}

import { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Live2DWidget modelName="mai" /> {/* Bạn có thể đổi model khác tại đây */}
      </body>
    </html>
  )
}
```

## 🔧 Advanced Usage

Since `v1.4.0`, you can customize the widget with:

`className`: Tailwind or custom CSS classes

`style`: Inline `React.CSSProperties` object

#### Example:
```tsx
<Live2DWidget
  modelName="senko"
  className="bottom-0 right-0 fixed z-50 opacity-80"
  style={{ width: 200, height: 300 }}
/>
```

#### Props


| Prop        | Type                   | Required | Mô tả                                                                 |
|-------------|------------------------|----------|------------------------------------------------------------------------|
| `modelName` | `string`               | ✅       | Name of the model folder (must include `model.json`)                    |
| `className` | `string`               | ❌       | Custom CSS or Tailwind classes applied to the widget container (ví dụ: `fixed bottom-0`)    |
| `style`     | `React.CSSProperties`  | ❌       | Inline styles (e.g., width, height, position)             |

---

## 🧠 Tips

The Live2D widget is rendered into a #live2d-widget DOM element, positioned as fixed by default.

If you pass className or style, they will override the default style.

## 📁 Model Path
By default, the widget looks for:

### 📦 Available Built-in Models

| Model Name           | Preview (coming soon)         | Usage                                |
|----------------------|-------------------------------|--------------------------------------|
| histoire             | ![](./public/models/histoire.png)    | `<Live2DWidget modelName="histoire" />`             |
| bilibili-22          | ![](./public/models/bilibili-22.png)     | `<Live2DWidget modelName="bilibili-22" />`          |
| bilibili-33          | ![](./public/models/bilibili-33.png)    | `<Live2DWidget modelName="bilibili-33" />`          |
| cat-black            | ![](./public/models/cat-black.png)    | `<Live2DWidget modelName="cat-black" />`            |
| cat-white            | ![](./public/models/cat-white.png)   | `<Live2DWidget modelName="cat-white" />`            |
| chino                | ![](./public/models/chino.png)   | `<Live2DWidget modelName="chino" />`                |
| date                 | ![](./public/models/date.png)      | `<Live2DWidget modelName="date" />`                 |
| hallo                | ![](./public/models/hallo.png)       | `<Live2DWidget modelName="hallo" />`                |
| haruto               | ![](./public/models/haruto.png)        | `<Live2DWidget modelName="haruto" />`               |
| hibiki               | ![](./public/models/hibiki.png)     | `<Live2DWidget modelName="hibiki" />`               |
| HK416-1-normal       | ![](./public/models/HK416-1-normal.png)      | `<Live2DWidget modelName="HK416-1-normal" />`       |
| HK416-2-destroy      | ![](./public/models/HK416-2-destroy.png)   | `<Live2DWidget modelName="HK416-2-destroy" />`      |
| HK416-2-normal       | ![](./public/models/HK416-2-normal.png)     | `<Live2DWidget modelName="HK416-2-normal" />`       |
| Kar98k-normal        | ![](./public/models/Kar98k-normal.png)  | `<Live2DWidget modelName="Kar98k-normal" />`        |
| kobayaxi             | ![](./public/models/kobayaxi.png)  | `<Live2DWidget modelName="kobayaxi" />`             |
| koharu               | ![](./public/models/koharu.png)     | `<Live2DWidget modelName="koharu" />`               |
| kp31                 | ![](./public/models/kp31.png)     | `<Live2DWidget modelName="kp31" />`                 |
| live_uu              | ![](./public/models/live_uu.png)  | `<Live2DWidget modelName="live_uu" />`              |
| mai                  | ![](./public/models/mai.png)    | `<Live2DWidget modelName="mai" />`                  |
| murakumo             | ![](./public/models/murakumo.png)   | `<Live2DWidget modelName="murakumo" />`             |
| Pio                  | ![](./public/models/Pio.png)    | `<Live2DWidget modelName="Pio" />`                  |
| platelet             | ![](./public/models/platelet.png)   | `<Live2DWidget modelName="platelet" />`             |
| platelet_2           | ![](./public/models/platelet_2.png)    | `<Live2DWidget modelName="platelet_2" />`           |
| potion-Maker-Pio     | ![](./public/models/potion-Maker-Pio.png)  | `<Live2DWidget modelName="potion-Maker-Pio" />`     |
| rem                  | ![](./public/models/rem.png)    | `<Live2DWidget modelName="rem" />`                  |
| rem_2                | ![](./public/models/rem_2.png)       | `<Live2DWidget modelName="rem_2" />`                |
| shizuku              | ![](./public/models/shizuku.png)      | `<Live2DWidget modelName="shizuku" />`              |
| shizuku_48           | ![](./public/models/shizuku_48.png)     | `<Live2DWidget modelName="shizuku_48" />`           |
| shizuku_pajama       | ![](./public/models/shizuku_pajama.png)     | `<Live2DWidget modelName="shizuku_pajama" />`       |
| terisa               | ![](./public/models/terisa.png)      | `<Live2DWidget modelName="terisa" />`               |
| tia                  | ![](./public/models/tia.png)     | `<Live2DWidget modelName="tia" />`                  |
| umaru                | ![](./public/models/umaru.png)    | `<Live2DWidget modelName="umaru" />`                |
| uni                  | ![](./public/models/uni.png)       | `<Live2DWidget modelName="uni" />`                  |
| wed_16               | ![](./public/models/wed_16.png)     | `<Live2DWidget modelName="wed_16" />`               |
| xisitina             | ![](./public/models/xisitina.png)      | `<Live2DWidget modelName="xisitina" />`             |
| z16                  | ![](./public/models/z16.png)       | `<Live2DWidget modelName="z16" />`                  |
| Senko_Normals        | ![](./public/models/Senko_Normals.png)    | `<Live2DWidget modelName="Senko_Normals" />`        |


## 🧑‍💻 Author
Trần Hữu Đang
Website: [https://dangth.dev](https://dangth.dev)

📝 License
[MIT]()
