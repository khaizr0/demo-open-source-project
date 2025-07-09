/**
 * @license MIT
 * Copyright (c) 2025 Cao Phan Khải
 * Copyright (c) 2025 Contributor Nguyễn Ngô Hoàng Nguyên
 */

/**
 * Trả về lời chào tạm biệt với tên người dùng.
 *
 * @param {string} [name] - Tên người nhận lời tạm biệt
 * @returns {string} Lời tạm biệt
 */
export function sayFarewell(name) {
  const target = name || "friend";
  return `Farewell, ${target}!`;
}