/**
 * @license MIT
 * Copyright (c) 2025 Cao Phan Khải
 * Copyright (c) 2025 Contributor Nguyễn Ngô Hoàng Nguyên
 */

/**
 * Trả về lời chào với tên người dùng.
 * Nếu không có tên, mặc định là "world".
 *
 * @param {string} [name] - Tên người nhận lời chào
 * @returns {string} Lời chào
 */
function sayHello(name) {
  return `Hello, ${name || "world"}!`;
}

/**
 * Ví dụ mở rộng: thêm tuỳ chọn chào buổi sáng hoặc buổi chiều.
 *
 * @param {string} [name] - Tên người nhận lời chào
 * @param {boolean} [morning=true] - true = chào buổi sáng, false = chào buổi chiều
 * @returns {string} Lời chào phù hợp
 */
function sayTimeBasedHello(name, morning = true) {
  const greeting = morning ? "Good morning" : "Good afternoon";
  const target = name || "world";
  return `${greeting}, ${target}!`;
}

/**
 * NEW: Tính năng mới do Nguyễn Ngô Hoàng Nguyên thêm vào—
 * cho phép chào buổi tối.
 *
 * @param {string} [name] - Tên người nhận lời chào
 * @returns {string} Lời chào buổi tối
 */
function sayGoodNight(name) {
  const target = name || "world";
  return `Good night, ${target}!`;
}

// Demo chạy đã thêm
console.log(sayHello("Open Source"));                // Hello, Open Source!
console.log(sayTimeBasedHello("Contributor", false)); // Good afternoon, Contributor!
console.log(sayGoodNight("Everyone"));               // Good night, Everyone!
