// vite.config.js
import {
  defineConfig
} from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import {
  createStyleImportPlugin,
  AntdResolve
} from "vite-plugin-style-import";
var __vite_injected_original_dirname = "/Users/cuisheng/Documents/partimeJob/web3/game/GamePhylum_Frontend";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@body-background": "#06192b",
          "@primary-color": "rgba(3,190,202,1)",
          "@border-color-base": "#133752",
          "@input-bg": "transparent",
          "@table-bg": "transparent",
          "@input-addon-bg": "transparent",
          "@pagination-item-bg": "transparent",
          "@pagination-item-bg-active": "transparent",
          "@pagination-item-link-bg": "transparent",
          "@disabled-color": "rgb(54, 77, 94)",
          "@item-active-bg": "rgba(3,190,202,1)",
          "@text-color": "#fff",
          "@card-background": "transparent",
          "@menu-item-color": "@text-color-secondary",
          "@item-hover-bg": "rgba(3,190,202,1)",
          "@background-color-light": "rgba(3,190,202,1)",
          "@text-color-secondary": "#ccc",
          "@border-color-split": "#133752",
          "@component-background": "@body-background",
          "@btn-default-color": "#001321",
          "@btn-default-bg": "#fff",
          "@table-header-sort-bg": "rgb(51, 74, 91)",
          "@table-body-sort-bg": "rgb(51, 74, 91)",
          "@table-header-bg": "rgb(8, 38, 58)",
          "@table-header-color": "rgb(154, 162, 170)",
          "@table-row-hover-bg": "#233545",
          "@table-border-color": "transparent",
          "@menu-item-active-bg": "transparent",
          "@primary-1": "rgba(3,190,202,0.5)",
          "@radio-button-bg": "transparent",
          "@btn-default-color": "@text-color",
          "@radio-disabled-button-checked-bg": "transparent",
          "@radio-button-checked-bg": "transparent"
        }
      }
    }
  },
  plugins: [react(), createStyleImportPlugin({
    resolves: [AntdResolve()]
  })]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY3Vpc2hlbmcvRG9jdW1lbnRzL3BhcnRpbWVKb2Ivd2ViMy9nYW1lL0dhbWVQaHlsdW1fRnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jdWlzaGVuZy9Eb2N1bWVudHMvcGFydGltZUpvYi93ZWIzL2dhbWUvR2FtZVBoeWx1bV9Gcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY3Vpc2hlbmcvRG9jdW1lbnRzL3BhcnRpbWVKb2Ivd2ViMy9nYW1lL0dhbWVQaHlsdW1fRnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQge1xuICBkZWZpbmVDb25maWdcbn0gZnJvbSAndml0ZSdcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQge1xuICBjcmVhdGVTdHlsZUltcG9ydFBsdWdpbixcbiAgQW50ZFJlc29sdmVcbn0gZnJvbSAndml0ZS1wbHVnaW4tc3R5bGUtaW1wb3J0JztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIGxlc3M6IHtcbiAgICAgICAgLy8gXHU2NTJGXHU2MzAxXHU1MTg1XHU4MDU0IGphdmFzY3JpcHRcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICAgIG1vZGlmeVZhcnM6IHtcbiAgICAgICAgICBcIkBib2R5LWJhY2tncm91bmRcIjogJyMwNjE5MmInLFxuICAgICAgICAgICdAcHJpbWFyeS1jb2xvcic6ICdyZ2JhKDMsMTkwLDIwMiwxKScsXG4gICAgICAgICAgXCJAYm9yZGVyLWNvbG9yLWJhc2VcIjogJyMxMzM3NTInLFxuICAgICAgICAgIFwiQGlucHV0LWJnXCI6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgXCJAdGFibGUtYmdcIjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBcIkBpbnB1dC1hZGRvbi1iZ1wiOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIFwiQHBhZ2luYXRpb24taXRlbS1iZ1wiOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIFwiQHBhZ2luYXRpb24taXRlbS1iZy1hY3RpdmVcIjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICBcIkBwYWdpbmF0aW9uLWl0ZW0tbGluay1iZ1wiOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIFwiQGRpc2FibGVkLWNvbG9yXCI6ICdyZ2IoNTQsIDc3LCA5NCknLFxuXG4gICAgICAgICAgXCJAaXRlbS1hY3RpdmUtYmdcIjogJ3JnYmEoMywxOTAsMjAyLDEpJyxcbiAgICAgICAgICBcIkB0ZXh0LWNvbG9yXCI6IFwiI2ZmZlwiLFxuICAgICAgICAgIFwiQGNhcmQtYmFja2dyb3VuZFwiOiBcInRyYW5zcGFyZW50XCIsXG5cbiAgICAgICAgICBcIkBtZW51LWl0ZW0tY29sb3JcIjogXCJAdGV4dC1jb2xvci1zZWNvbmRhcnlcIixcbiAgICAgICAgICAvLyBcIkB0ZXh0LWNvbG9yXCI6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiLFxuICAgICAgICAgIFwiQGl0ZW0taG92ZXItYmdcIjogJ3JnYmEoMywxOTAsMjAyLDEpJyxcbiAgICAgICAgICBcIkBiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0XCI6ICdyZ2JhKDMsMTkwLDIwMiwxKScsXG4gICAgICAgICAgLy8gXCJAdGV4dC1jb2xvclwiOiBcInJnYigxNTQsIDE2MiwgMTcwKVwiLFxuICAgICAgICAgIFwiQHRleHQtY29sb3Itc2Vjb25kYXJ5XCI6IFwiI2NjY1wiLFxuICAgICAgICAgIFwiQGJvcmRlci1jb2xvci1zcGxpdFwiOiBcIiMxMzM3NTJcIixcblxuICAgICAgICAgIC8vY29tbW9uXG4gICAgICAgICAgXCJAY29tcG9uZW50LWJhY2tncm91bmRcIjogXCJAYm9keS1iYWNrZ3JvdW5kXCIsXG4gICAgICAgICAgLy9idXR0b25cbiAgICAgICAgICBcIkBidG4tZGVmYXVsdC1jb2xvclwiOiBcIiMwMDEzMjFcIixcbiAgICAgICAgICBcIkBidG4tZGVmYXVsdC1iZ1wiOiBcIiNmZmZcIixcblxuICAgICAgICAgIC8vdGFibGVcbiAgICAgICAgICBcIkB0YWJsZS1oZWFkZXItc29ydC1iZ1wiOiBcInJnYig1MSwgNzQsIDkxKVwiLFxuICAgICAgICAgIFwiQHRhYmxlLWJvZHktc29ydC1iZ1wiOiBcInJnYig1MSwgNzQsIDkxKVwiLFxuICAgICAgICAgIFwiQHRhYmxlLWhlYWRlci1iZ1wiOiBcInJnYig4LCAzOCwgNTgpXCIsXG4gICAgICAgICAgXCJAdGFibGUtaGVhZGVyLWNvbG9yXCI6IFwicmdiKDE1NCwgMTYyLCAxNzApXCIsXG4gICAgICAgICAgXCJAdGFibGUtcm93LWhvdmVyLWJnXCI6IFwiIzIzMzU0NVwiLFxuICAgICAgICAgIFwiQHRhYmxlLWJvcmRlci1jb2xvclwiOiBcInRyYW5zcGFyZW50XCIsXG5cbiAgICAgICAgICAvL21lbnVcbiAgICAgICAgICBcIkBtZW51LWl0ZW0tYWN0aXZlLWJnXCI6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAvL3NlbGVjdFxuICAgICAgICAgIFwiQHByaW1hcnktMVwiOiBcInJnYmEoMywxOTAsMjAyLDAuNSlcIixcbiAgICAgICAgICAvL3JhZGlvXG4gICAgICAgICAgXCJAcmFkaW8tYnV0dG9uLWJnXCI6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICBcIkBidG4tZGVmYXVsdC1jb2xvclwiOiBcIkB0ZXh0LWNvbG9yXCIsXG4gICAgICAgICAgXCJAcmFkaW8tZGlzYWJsZWQtYnV0dG9uLWNoZWNrZWQtYmdcIjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgIFwiQHJhZGlvLWJ1dHRvbi1jaGVja2VkLWJnXCI6IFwidHJhbnNwYXJlbnRcIixcblxuICAgICAgICAgIC8vIERyb3Bkb3duXG4gICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuXG5cbiAgcGx1Z2luczogW3JlYWN0KCksIGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luKHtcbiAgICByZXNvbHZlczogW0FudGRSZXNvbHZlKCldXG4gIH0pXVxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXdYO0FBQUEsRUFDdFg7QUFBQSxPQUNLO0FBQ1AsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sV0FBVztBQUNsQjtBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsT0FDSztBQVJQLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUVKLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxVQUNWLG9CQUFvQjtBQUFBLFVBQ3BCLGtCQUFrQjtBQUFBLFVBQ2xCLHNCQUFzQjtBQUFBLFVBQ3RCLGFBQWE7QUFBQSxVQUNiLGFBQWE7QUFBQSxVQUNiLG1CQUFtQjtBQUFBLFVBQ25CLHVCQUF1QjtBQUFBLFVBQ3ZCLDhCQUE4QjtBQUFBLFVBQzlCLDRCQUE0QjtBQUFBLFVBQzVCLG1CQUFtQjtBQUFBLFVBRW5CLG1CQUFtQjtBQUFBLFVBQ25CLGVBQWU7QUFBQSxVQUNmLG9CQUFvQjtBQUFBLFVBRXBCLG9CQUFvQjtBQUFBLFVBRXBCLGtCQUFrQjtBQUFBLFVBQ2xCLDJCQUEyQjtBQUFBLFVBRTNCLHlCQUF5QjtBQUFBLFVBQ3pCLHVCQUF1QjtBQUFBLFVBR3ZCLHlCQUF5QjtBQUFBLFVBRXpCLHNCQUFzQjtBQUFBLFVBQ3RCLG1CQUFtQjtBQUFBLFVBR25CLHlCQUF5QjtBQUFBLFVBQ3pCLHVCQUF1QjtBQUFBLFVBQ3ZCLG9CQUFvQjtBQUFBLFVBQ3BCLHVCQUF1QjtBQUFBLFVBQ3ZCLHVCQUF1QjtBQUFBLFVBQ3ZCLHVCQUF1QjtBQUFBLFVBR3ZCLHdCQUF3QjtBQUFBLFVBRXhCLGNBQWM7QUFBQSxVQUVkLG9CQUFvQjtBQUFBLFVBQ3BCLHNCQUFzQjtBQUFBLFVBQ3RCLHFDQUFxQztBQUFBLFVBQ3JDLDRCQUE0QjtBQUFBLFFBSTlCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFHQSxTQUFTLENBQUMsTUFBTSxHQUFHLHdCQUF3QjtBQUFBLElBQ3pDLFVBQVUsQ0FBQyxZQUFZLENBQUM7QUFBQSxFQUMxQixDQUFDLENBQUM7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
