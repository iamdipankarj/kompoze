import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  staticDirs: ['./public'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links'],
  features: {
    argTypeTargetsV7: true
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  stories: ['../src/components/**/*.stories.@(ts|js|tsx)']
}

export default config;
