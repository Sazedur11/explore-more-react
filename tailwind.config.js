@type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths to match your project
  ],
  plugins: [require("daisyui")], // ✅ this is where DaisyUI is added
}