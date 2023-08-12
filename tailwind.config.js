module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex header welcome component
        'headerWelcome': 'repeat(2, minmax(0, max-content))',
      }
    },
  },
  plugins: [],
}