import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(ElementPlus);
  },
};
