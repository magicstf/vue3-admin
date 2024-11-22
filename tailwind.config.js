/*
 * @Author: sutengfei
 * @Date: 2024-11-22 15:44:01
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-22 15:55:36
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
