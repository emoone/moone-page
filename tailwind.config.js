module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ], // 파일 크기를 최소화하기 위함. 빌드할 때 여기에 설정된 파일에서 사용되지 않는 모든 클래스는 제거
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ],

  variants: {
    gridTemplateColumns: ["responsive"],
  },

  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        primary: "#C4C4C4",
        colorBlack: "#000",
        colorWhite: "#fff",
        mainColorRed: "#F02D37",
      },

      gridTemplateColumns: {
        "repeat-fit": "repeat(6, minmax(10%, 1fr))",
        "md:repeat-fit": "repeat(5, minmax(10%, 1fr))",
        "lg:repeat-fit": "repeat(6, minmax(10%, 1fr))",
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      gap: {
        defaultX: "2%",
        defaultY: "10px",
      },
    },
    screens: {
      sm: "320px",
      ssm: "350px",
      md: "768px",
      lg: "1024px",
    },
  },

  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
