# 📦 Changelog – next-live2d

All notable changes to this project are documented here.

---

## [1.4.1] - 2025-06-24

### 🐛 Fixed
- Avoid `delete window.L2Dwidget` to prevent strict mode crash
- Improve unmount cleanup for Live2D widget

### 🧹 Chore
- Version bump and package metadata update
- Prepare release script for npm

---

## [1.4.0] - 2025-06-16

### ✨ Added
- `style` and `className` props to `<Live2DWidget />`
- Built-in support for dynamic styling and positioning

### 🧼 Refactor
- Prevent duplicate widget initialization via `__live2d_initialized` flag
- Cleanup widget DOM on component unmount

---

## [1.3.2] - 2025-06-14

### 🧼 Style
- Removed legacy `bottom` styling from inline props

---

## [1.3.1] - 2025-06-12

### 🧱 Maintenance
- Updated `devDependencies` to React 18 for consistency

---

## [1.3.0] - 2025-06-11

### ✨ Added
- Allow custom `style` and `className` props
- Improve default behavior and remove `scrollIntoView`

---

## [1.2.x] - 2025-06-09 to 06-10

### 🛠 Fixes & Model Management
- Renamed all `*.model.json` or `index.json` to `model.json` for standardization
- Fixed model paths: `senko`, `z16`, `haruto`, `hibiki`, `rem`, etc.
- Responsive tweaks for mobile
- UI fixes for widget positioning

---

## [1.2.0] - 2025-06-05

### ✨ Added
- Syntax highlighting for example code (`react-syntax-highlighter`)
- Live code block preview on the demo page
- First working demo of model switching

### 🐛 Fixed
- Type declarations for `react-syntax-highlighter` on Vercel

---

## [1.1.0] - 2025-06-04

### 🧼 Refactor
- Renamed all models to use standard `model.json` filename
- Removed unused PixiJS logic
- Migrated to pure CDN-based `live2d-widget`

---

## [1.0.0] - 2025-06-03

### 🐣 Initial release
- Simple `<Live2DWidget modelName="..." />` component
- Injects `live2d-widget` from CDN
- Supports 20+ Live2D models
