import { defineConfig } from 'dumi';

export default defineConfig({
  publicPath: './',
  base: '/',
  mode: 'site',
  title: 'zc-react-comp',
  favicon: './images/React.svg',
  logo: './images/React.svg',
  headScripts: [
    { src: './lib/babel-polyfill.min.js' }
  ],
  outputPath: 'docs-dist',
  navs: {
    'en-US': [
      { title: 'component', path: '/component' },
      { title: 'github', path: 'https://github.com/z5829984520/zc-react-comp' },
    ],
    'zh-CN': [
      { title: '组件', path: '/zh-CN/component' },
      { title: 'github', path: 'https://github.com/z5829984520/zc-react-comp' },
    ],
  },
  history: {
    type: 'hash',
  },
  // more config: https://d.umijs.org/config
});
