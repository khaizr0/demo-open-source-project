// index.js
/**
 * A simple demo function.
 * @param {string} name 
 * @returns {string}
 */
function sayHello(name) {
  return `Hello, ${name || "world"}!`;
}

// Run demo
console.log(sayHello("Open Source"));