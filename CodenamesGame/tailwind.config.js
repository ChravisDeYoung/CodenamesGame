/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./../**/*.{razor,html,cshtml}"
    ],
    safelist: [
        "bg-blue-600",
        "border-blue-800",
        "bg-red-600",
        "border-red-800",
        "bg-stone-600",
        "border-stone-800",
        "bg-amber-100",
        "border-yellow-700"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}