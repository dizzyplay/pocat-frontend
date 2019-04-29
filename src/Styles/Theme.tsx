export interface mytheme {
  theme: {
    [key: string]: any;
  };
}

export default {
  maxWidth: "935px",
  authBox: "330px",
  borderRadius: "5px",
  blue: "#5aa3ff",
  lightBlue: "#daebff",
  grey50: "#fafafa",
  grey100: "#f0f0f0",
  grey200: "#e6e6e6",
  grey300: "#dcdcdc",
  grey400: "#c8c8c8",
  grey500: "#969696",
  grey600: "#646464",
  grey700: "#4b4b4b",
  black: "#000000",
  white: "#ffffff",
  shadowBox: `border-radius: 10px;
              box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.15);
              transition: all 0.3s;
                &:hover {
                  transition: all 0.3s;
                  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
              }
              background-color: white;
              `
};
