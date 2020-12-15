import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/',
  mode: 'site',
  title: 'zc-react-comp',
  favicon: '/images/React.svg',
  logo: '/images/React.svg',
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },
  // more config: https://d.umijs.org/config
});
