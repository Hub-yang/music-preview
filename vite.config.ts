import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import plugins from "./src/config/plugins"

// https://vitejs.dev/config/
export default ({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    base: env.VITE_ENV === 'dev' ? '/' : './',
    plugins: plugins(),
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
      open: false,
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
