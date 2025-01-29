import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import fs from 'fs';

export default [
  js.configs.recommended,
  next.configs["core-web-vitals"],
];

// Handle WriteStream error event
process.on('uncaughtException', (err) => {
  if (err.code === 'EPERM' && err.syscall === 'open') {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
});
