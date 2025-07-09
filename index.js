/**
 * @license MIT
 * Copyright (c) 2025 Cao Phan Khải
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

console.log(sayHello("Open Source"));
