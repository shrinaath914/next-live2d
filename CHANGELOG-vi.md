# 📦 Lịch sử cập nhật – next-live2d

Toàn bộ các thay đổi quan trọng trong dự án sẽ được ghi chú tại đây.

---

## [1.4.1] - 24/06/2025

### 🐛 Sửa lỗi
- Tránh sử dụng `delete window.L2Dwidget` gây crash ở chế độ strict
- Cải thiện việc dọn dẹp Live2D khi unmount component

### 🧹 Dọn dẹp
- Tăng phiên bản và cập nhật metadata cho npm
- Chuẩn bị quy trình release tự động

---

## [1.4.0] - 16/06/2025

### ✨ Tính năng mới
- Thêm props `style` và `className` cho `<Live2DWidget />`
- Hỗ trợ tuỳ chỉnh vị trí và giao diện Live2D bằng Tailwind hoặc CSS

### ♻️ Tái cấu trúc
- Ngăn widget bị khởi tạo nhiều lần bằng `__live2d_initialized`
- Dọn sạch DOM widget khi component bị huỷ

---

## [1.3.2] - 14/06/2025

### 🎨 Cải thiện giao diện
- Xoá thuộc tính `bottom` dư thừa trong style nội bộ

---

## [1.3.1] - 12/06/2025

### 🧱 Bảo trì
- Nâng cấp `devDependencies` lên React 18

---

## [1.3.0] - 11/06/2025

### ✨ Thêm mới
- Cho phép truyền props `style` và `className` tùy ý
- Bỏ dùng `scrollIntoView`, xử lý hiển thị tốt hơn

---

## [1.2.x] - 09–10/06/2025

### 🛠 Quản lý model & sửa lỗi
- Đổi tên hàng loạt `*.model.json` / `index.json` thành `model.json`
- Cập nhật chính xác tên model: `senko`, `z16`, `hibiki`, `rem`, `haruto`, v.v.
- Fix lỗi hiển thị trên thiết bị di động
- Cải thiện vị trí và hành vi widget

---

## [1.2.0] - 05/06/2025

### ✨ Thêm mới
- Tích hợp `react-syntax-highlighter` hiển thị code demo có màu
- Cập nhật giao diện trang demo trực quan hơn

### 🐛 Sửa lỗi
- Khai báo kiểu cho `react-syntax-highlighter` giúp build trên Vercel thành công

---

## [1.1.0] - 04/06/2025

### ♻️ Tái cấu trúc
- Chuẩn hoá tất cả model về `model.json`
- Loại bỏ logic PixiJS không cần thiết
- Sử dụng thư viện CDN `live2d-widget` đơn giản hơn

---

## [1.0.0] - 03/06/2025

### 🐣 Phiên bản đầu tiên
- Component React: `<Live2DWidget modelName="..." />`
- Tự động inject widget từ CDN
- Hỗ trợ 20+ Live2D model mặc định
