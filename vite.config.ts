import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import svgLoader from 'vite-svg-loader'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
// element plus自动导入（组件+样式）
import ElementPlus from 'unplugin-element-plus/vite'
// unocss
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: env.VITE_ENV === 'dev' ? '/' : './',
    plugins: [
      vue({ include: [/\.vue$/, /\.md$/] }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      svgLoader(),
      UnoCSS(),
      ElementPlus({}),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        // 指定配置文件生成的位置与文件名
        dts: './src/automatic/auto-imports.d.ts',
        // 指定引入utils目录下所有文件
        dirs: ['./src/utils/**', './src/store/**', './src/router', './src/composables'],
        resolvers: [ElementPlusResolver()],
        vueTemplate: true,
        // 配置开启eslint
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './src/automatic/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
      Components({
        // 指定组件位置，默认为 src/components
        dirs: ['./src/components'],
        // 指定配置文件生成的位置与文件名
        dts: './src/automatic/components.d.ts',
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [ElementPlusResolver(), VueUseComponentsResolver()],
      })
    ],
    // 别名设置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // 服务设置
    server: {
      host: '0.0.0.0',
      port: 3334,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_REQUEST_API,
          changeOrigin: true, //是否允许跨域
          rewrite: (pathStr: string) => pathStr.replace(env.VITE_APP_BASE_API, env.VITE_APP_TRUE_API),
        },
      },
    },
    // build配置
    build: {
      reportCompressedSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
    // css配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/styles/element/dark.scss" as *;
          @use "@/styles/variables.scss" as *;
          @use "@/styles/mixin.scss" as *;
        `,
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                // 去除elementPlus内部charset警告
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  })
}
