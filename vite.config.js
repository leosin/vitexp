/*

*/
import path from 'path';
import { promises as fs } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 新添加插件
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import WindiCSS from 'vite-plugin-windicss';
import AutoImport from 'unplugin-auto-import/vite';

// loader helpers
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  build: {
    // minify: 'terser', // 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%
    cssCodeSplit: false, //如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    sourcemap: 'inline', // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的source map文件
    chunkSizeWarningLimit: 500, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
    rollupOptions: {
      output: {
        // entryFileNames: `assets/js/[name].[hash].js`,
        chunkFileNames: `assets/js/[name].[hash].js`,
        assetFileNames: `assets/[ext]/[name].[hash].[ext]`,
      },
    },
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    brotliSize: false, // 取消计算文件大小，加快打包速度
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, '/assets/images'),
      // '/images': './assets/images'
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // 全局导入注册
      imports: [
        // 预置的
        'vue',
        'vue-router',
        // 自定义
        {
          '@vueuse/core': [
            // named imports
            'useMouse',
            'useDark',
            'useToggle', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          '@vueuse/head': ['useHead'],
          axios: [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          '[package-name]': [
            '[import-names]',
            // alias
            ['[from]', '[alias]'],
          ],
        },
      ],
      resolvers: [
        // custom resolvers see https://github.com/antfu/unplugin-auto-import/pull/23/
        /* ... */
      ],
    }),

    /* 基于文件的路由 */
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/demos', baseRoute: '/demo' },
      ],
      extensions: ['vue', 'js'],
      syncIndex: true,
    }),

    /* 基于路由的布局 */
    Layouts({
      layoutsDir: 'src/layouts',
      defaultLayout: 'default',
    }),
    /* 自动引用组件 */
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      dts: false,
      directoryAsNamespace: true,
      globalNamespaces: [],
      directives: true,
      resolvers: IconsResolver({
        prefix: 'icon',
        scale: 1,
        enabledCollections: ['carbon', 'mdi'],
        customCollections: ['custom', 'home', 'base'],
      }),
    }),
    /* svg图标引入 */
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      customCollections: {
        custom: FileSystemIconLoader('./src/assets/svgs'),
        home: FileSystemIconLoader('./src/assets/svgs/home'),
        base: FileSystemIconLoader('./src/assets/svgs/base'),
      },
      // iconCustomizer(collection, icon, props) {
      //   const name = `${collection}`
      //   if (name === 'inline:async' || name === 'carbon:app-connectivity' || name === 'custom1') {
      //     props.width = '2em'
      //     props.height = '2em'
      //   }
      // },
    }),

    /* WindiCSS框架 */
    WindiCSS(),
  ],

  ssgOptions: {
    script: 'async',
    // mock: true,
    formatting: 'none', // 不压缩用'prettify'
    includedRoutes(routes) {
      return routes.filter((i) => !i.includes('foo')); // 排除所有包含 'foo' 的路由路径
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
    exclude: ['vue-demi', 'SmoothScroll'],
  },
});
