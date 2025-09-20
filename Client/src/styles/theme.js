// Check current preference
const getBrowserTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? { background: "#202124", text: "#FAFAFA" } // dark bg, light text
      : { background: "#FAFAFA", text: "#202124" }; // light bg, dark text
  }
  return { background: "#FAFAFA", text: "#202124" }; // fallback
};

const browserTheme = getBrowserTheme();

export const themes = {
  dashboard: {
    primary: "#0E6BA8",
    secondary: "#CE8380",
    background: browserTheme.background,
    text: browserTheme.text,
  },

  // ONE template theme for ALL templates
  template: {
    primary: "var(--primary)",
    background: "var(--background)",
    text: "var(--text)",
  },
};

export const useTheme = (type = "dashboard", customColors = null) => {
  if (type === "template" && customColors) {
    return customColors;
  }
  return themes[type];
};
