import {
  defineConfig
} from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'
import {
  createStyleImportPlugin,
  AntdResolve
} from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: '0.0.0.0', //ip地址
    port: 8080, //端口号
    open: true //启动后是否自动打开浏览器
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 javascript
        javascriptEnabled: true,
        modifyVars: {
          "@body-background": '#06192b',
          '@primary-color': 'rgba(3,190,202,1)',
          "@border-color-base": '#133752',
          "@input-bg": 'transparent',
          "@table-bg": 'transparent',
          "@input-addon-bg": 'transparent',
          "@pagination-item-bg": 'transparent',
          "@pagination-item-bg-active": 'transparent',
          "@pagination-item-link-bg": 'transparent',
          "@disabled-color": 'rgb(54, 77, 94)',

          "@item-active-bg": 'rgba(3,190,202,1)',
          "@text-color": "#fff",
          "@card-background": "transparent",

          "@menu-item-color": "@text-color-secondary",
          // "@text-color": "rgba(255, 255, 255, 1)",
          "@item-hover-bg": 'rgba(3,190,202,1)',
          "@background-color-light": 'rgba(3,190,202,1)',
          // "@text-color": "rgb(154, 162, 170)",
          "@text-color-secondary": "#ccc",
          "@border-color-split": "#133752",

          //common
          "@component-background": "@body-background",
          //button
          "@btn-default-color": "#001321",
          "@btn-default-bg": "#fff",

          //table
          "@table-header-sort-bg": "rgb(51, 74, 91)",
          "@table-body-sort-bg": "rgb(51, 74, 91)",
          "@table-header-bg": "rgb(8, 38, 58)",
          "@table-header-color": "rgb(154, 162, 170)",
          "@table-row-hover-bg": "#233545",
          "@table-border-color": "transparent",

          //menu
          "@menu-item-active-bg": "transparent",
          //select
          "@primary-1": "rgba(3,190,202,0.5)",
          //radio
          "@radio-button-bg": "transparent",
          "@btn-default-color": "@text-color",
          "@radio-disabled-button-checked-bg": "transparent",
          "@radio-button-checked-bg": "transparent",

          // Dropdown
         
        },
      },
    }
  },


  plugins: [react(), createStyleImportPlugin({
    resolves: [AntdResolve()]
  })]
})