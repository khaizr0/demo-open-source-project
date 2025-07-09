# 🤝 Đóng góp vào dự án

Cảm ơn bạn đã quan tâm đến việc đóng góp vào dự án này! Chúng tôi rất hoan nghênh các đề xuất, sửa lỗi, và đóng góp tính năng mới.

Vui lòng đọc kỹ các quy ước sau trước khi gửi Pull Request (PR).

---

## ✍️ Conventions – Quy ước viết mã

### ✅ 1. Code Style
- Sử dụng **2 khoảng trắng (spaces)** để thụt đầu dòng (indentation).
- Đặt tên biến, hàm và thuộc tính theo **kiểu camelCase**  
  _(ví dụ: `userName`, `getData()`, `isLoggedIn`)_

---

### ✅ 2. Commit Message
- Tuân theo chuẩn **[Conventional Commits](https://www.conventionalcommits.org/)** để dễ đọc, đồng bộ, và hỗ trợ tự động tạo changelog.
- Cấu trúc commit message:
<type>(optional scope): <description>

less
Sao chép
Chỉnh sửa
- **Ví dụ**:
- `feat(login): thêm chức năng đăng nhập`
- `fix(api): sửa lỗi lấy dữ liệu người dùng`
- `refactor: tối ưu hàm xử lý giỏ hàng`

**Một số loại `type` thường dùng:**

| Loại       | Ý nghĩa                            |
|------------|------------------------------------|
| `feat`     | Thêm tính năng mới                 |
| `fix`      | Sửa lỗi                            |
| `docs`     | Thay đổi tài liệu                  |
| `refactor` | Tối ưu mã mà không thay đổi logic  |
| `test`     | Thêm/sửa code kiểm thử             |
| `chore`    | Việc lặt vặt (cấu hình, build...)  |

---

### ✅ 3. Cấu trúc thư mục cơ bản
- **`index.js`** – Điểm bắt đầu của ứng dụng (entry point).
- **`package.json`** – Metadata dự án, dependencies, và script chạy lệnh.
- **`.gitignore`** – Loại trừ các file không cần commit lên Git:
node_modules/
dist/
.env

yaml
Sao chép
Chỉnh sửa

---

## 🚀 Cách gửi Pull Request

1. Fork repo về tài khoản của bạn
2. Tạo một nhánh mới (`git checkout -b feature/tinh-nang-moi`)
3. Commit code theo đúng quy ước
4. Gửi Pull Request (PR) về nhánh `main`
5. Mô tả rõ ràng trong phần PR:
 - Bạn đã làm gì?
 - Lý do thay đổi?
 - Liên quan đến issue nào (nếu có)?

---

## 🛡️ Lưu ý về License

- Dự án này sử dụng **MIT License**
- Khi bạn gửi mã vào, bạn đồng ý chia sẻ mã theo license này
- Vui lòng không copy mã từ dự án khác có license không tương thích

---

> Cảm ơn vì đã đóng góp! ❤️
