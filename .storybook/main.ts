import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: (config) => {
    if (config.resolve?.alias) {
      config.resolve.alias["@"] = path.resolve(__dirname + "./../src");
      return config;
    }
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
