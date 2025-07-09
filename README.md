# 🎉 demo-open-source-project

Một **project mẫu** giúp bạn nhanh chóng nắm được cách cấu trúc và quản lý một repository mã nguồn mở trên GitHub.

---

## 📖 Nội dung

* [Giới thiệu](#-giới-thiệu)
* [Tính năng](#-tính-năng)
* [Cài đặt](#-cài-đặt)
* [Cách sử dụng](#-cách-sử-dụng)
* [Conventions](#-conventions)
* [Cách đóng góp](#-cách-đóng-góp)
* [License](#-license)

---

## 🔥 Giới thiệu

`demo-open-source-project` là một repository mẫu, minh hoạ các yếu tố cơ bản của một dự án open source:

* **README** đầy đủ, rõ ràng
* **LICENSE** (MIT)
* **gitignore** để loại trừ file không cần commit
* **Cách đóng góp** được tích hợp ngay trong README

---

## 🚀 Tính năng

* Hàm `sayHello(name)` đơn giản
* Khởi động nhanh qua `npm start`
* Chuẩn commit theo Conventional Commits
* Sẵn sàng CI/CD, test, lint (có thể thêm sau)

---

## 🛠️ Cài đặt

1. Clone repo:

   ```bash
   git clone https://github.com/khaizr0/demo-open-source-project.git
   cd demo-open-source-project
   ```
2. Cài dependencies:

   ```bash
   npm install
   ```

---

## 💻 Cách sử dụng

Chạy demo bằng lệnh:

```bash
npm start
```

Kết quả in ra:

```
Hello, Open Source!
```

---

## ✍️ Conventions

* **Code style**: 2 spaces, camelCase
* **Commit message**: theo [Conventional Commits](https://www.conventionalcommits.org/)
* **Thư mục**:

  * `index.js` – entry point
  * `package.json` – metadata & scripts
  * `.gitignore` – loại trừ file

---

## 🤝 Cách đóng góp

Cảm ơn bạn đã quan tâm đóng góp! Vui lòng tuân theo các bước sau:

### 📋 Quy ước chung

* Dùng **2 spaces** để indent.
* Biến và hàm dùng `camelCase`.
* Comment rõ mục đích function/module.

### 🔀 Quy trình đóng góp

1. Fork repository này
2. Tạo nhánh mới:

   ```bash
   git checkout -b feature/your-feature
   ```
3. Code & commit với message theo [Conventional Commits](https://www.conventionalcommits.org/)
4. Push lên fork của bạn:

   ```bash
   git push origin feature/your-feature
   ```
5. Mở Pull Request vào nhánh `main` của repo gốc.

### 🧪 Kiểm tra

* Chạy `npm install` để cài dependencies.
* Chạy `npm start` để test demo.

---

## 📄 License

This project is licensed under the **MIT License** – xem file [LICENSE](./LICENSE) để biết chi tiết.