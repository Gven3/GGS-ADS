export interface ThemeObject {
  textColor: string;
  buttonColor: string;
  footerColor: string;
  backgroundColor: string;
}

interface ThemeMap {
  [key: string]: ThemeObject;
}

export const THEME: ThemeMap = {
  dark: {
    textColor: "white",
    buttonColor: "#7CB8F2",
    footerColor: "#FFFFFF80",
    backgroundColor: "#1E1E1E",
  },
  light: {
    textColor: "black",
    buttonColor: "rgb(10, 38, 64)",
    footerColor: "#010101CC",
    backgroundColor: "white",
  },
};
