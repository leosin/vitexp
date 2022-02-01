import App from './App.vue';
import { ViteSSG } from 'vite-ssg';

// 引入WindiCSS
import 'virtual:windi.css';
import 'virtual:windi-devtools';
// 自定义css
import '~/assets/css/main.scss';
// import '~/assets/css/swiper.min.css';
// import '~/assets/css/navigation.min.css';
// import '~/assets/css/pagination.min.css';

// 基于路由的布局
import { setupLayouts } from 'virtual:generated-layouts';
// 基于文件的路由系统
import generatedRoutes from 'virtual:generated-pages';

// 基于路由的布局
const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups

  ({ app, router, routes, isClient }) => {
    // router.push({ name: 's1', params: { userId: 123 } })

    // if (isClient) {
    //   console.log('isClient')
    // }

    // back to top
    router.afterEach((to, from) => {
      if (isClient) {
        let bodySrcollTop = document.body.scrollTop;
        if (bodySrcollTop !== 0) {
          document.body.scrollTop = 0;
          return;
        }
        let docSrcollTop = document.documentElement.scrollTop;
        if (docSrcollTop !== 0) {
          document.documentElement.scrollTop = 0;
        }
      }

      // ...
      // end.
    });
  }
);
