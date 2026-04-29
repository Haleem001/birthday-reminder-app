/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        "on-background": "#1b1c1c", "inverse-primary": "#53dbca", "surface-container-low": "#f5f3f3", "tertiary-fixed-dim": "#adcae5", "surface-dim": "#dbdad9", background: "#fbf9f9", "on-tertiary-fixed": "#001e31", "surface-bright": "#fbf9f9", "error-container": "#ffdad6", "inverse-surface": "#303031", "tertiary-container": "#85a1bb", "surface-tint": "#006a60", "surface-container-lowest": "#ffffff", "surface-variant": "#e3e2e2", "outline-variant": "#bbcac6", "on-primary-fixed-variant": "#005048", "tertiary-fixed": "#cce5ff", "on-tertiary-container": "#1a384e", "on-primary": "#ffffff", secondary: "#4a635f", "on-secondary-fixed-variant": "#324b47", "primary-container": "#08b1a1", "on-primary-container": "#003d36", "secondary-container": "#c7e3dd", "on-surface-variant": "#3c4947", "primary-fixed": "#74f8e6", error: "#ba1a1a", "on-secondary-container": "#4c6661", "surface-container-high": "#e9e8e7", "primary-fixed-dim": "#53dbca", "on-tertiary-fixed-variant": "#2d4960", "inverse-on-surface": "#f2f0f0", "secondary-fixed": "#cce8e2", tertiary: "#456179", "surface-container-highest": "#e3e2e2", "surface-container": "#efeded", "on-surface": "#1b1c1c", "on-primary-fixed": "#00201c", "on-error-container": "#93000a", "on-secondary-fixed": "#05201c", "on-error": "#ffffff", outline: "#6c7a77", "on-secondary": "#ffffff", surface: "#fbf9f9", "on-tertiary": "#ffffff", primary: "#006a60", "secondary-fixed-dim": "#b1ccc6"
      }, 
      borderRadius: {
        DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem"
      }, 
      spacing: {
        "margin-mobile": "1rem", "stack-lg": "2rem", "stack-sm": "0.5rem", gutter: "1.5rem", "container-max": "1200px", "stack-md": "1rem"
      }, 
      fontFamily: {
        "body-md": ["Inter"], "label-sm": ["Inter"], button: ["Inter"], "body-lg": ["Inter"], h2: ["Inter"], h1: ["Inter"]
      }, 
      fontSize: {
        "body-md": ["16px", {lineHeight: "1.5", fontWeight: "400"}], "label-sm": ["14px", {lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500"}], button: ["16px", {lineHeight: "1", fontWeight: "600"}], "body-lg": ["18px", {lineHeight: "1.5", fontWeight: "400"}], h2: ["24px", {lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600"}], h1: ["36px", {lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700"}]
      }
    }
  },
  plugins: [],
}
