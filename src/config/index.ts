import { nanoid } from 'nanoid'

interface AudioItem {
  name?: string
  artist?: string
  url?: string
  cover?: string
  lrc?: string
}

interface MenuItem {
  id: string
  url: { en?: string, zh?: string }
  title: string
  tags: string[]
  content?: string
  showConfig: boolean
}

export interface MenuList { [key: string]: { title: string, data: MenuItem[] } }

interface NavItem {
  id: string
  navName: string
  active: boolean
  href: string
}

export default () => {
  const navList: NavItem[] = [
    // { id: nanoid(), navName: '首页', active: true },
    { id: nanoid(), navName: '博客', active: false, href: 'https://huberyyang.site:82/' },
    // { id: nanoid(), navName: '个人健身管理系统', active: false, href: '' },
    // { id: nanoid(), navName: '个人摄影作品集', active: false, href: '' },
    { id: nanoid(), navName: 'GitHub', active: false, href: 'https://github.com/Hub-yang' },
    { id: nanoid(), navName: '主页', active: false, href: 'https://huberyyang.site/' },
    { id: nanoid(), navName: '音乐', active: false, href: 'https://huberyyang.site:83/' },
  ]
  const audioList: AudioItem[] = [
    {
      name: '黑色泡沫',
      artist: '林俊杰',
      url: 'https://www.huberyyang.site/audios/%E6%9E%97%E4%BF%8A%E6%9D%B0/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac',
      cover: 'https://www.huberyyang.site/covers/%E6%9E%97%E4%BF%8A%E6%9D%B0/%E9%87%8D%E6%8B%BE_%E5%BF%AB%E4%B9%90.jpg',
      lrc: 'https://www.huberyyang.site/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.lrc',
    },
    {
      name: 'FIND YOU',
      artist: '邓紫棋',
      url: 'https://www.huberyyang.site/audios/%E9%82%93%E7%B4%AB%E6%A3%8B/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-FIND%20YOU.flac',
      cover: 'https://www.huberyyang.site/covers/%E9%82%93%E7%B4%AB%E6%A3%8B/%E5%90%AF%E7%A4%BA%E5%BD%95.jpg',
      lrc: 'https://www.huberyyang.site/lrcs/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-FIND%20YOU.lrc',
    },
    {
      name: '粉色海洋',
      artist: '周杰伦',
      url: 'https://www.huberyyang.site/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B.flac',
      cover:
        'https://www.huberyyang.site/covers/%E5%91%A8%E6%9D%B0%E4%BC%A6/%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BD%9C%E5%93%81.jpg',
      lrc: 'https://www.huberyyang.site/lrcs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%B2%89%E8%89%B2%E6%B5%B7%E6%B4%8B.lrc',
    },
  ]
  const menuList: MenuList = {
    // 框架与生态
    list1: {
      title: '框架与生态',
      data: [
        {
          id: '001',
          url: {
            en: 'https://vuejs.org/',
            zh: 'https://cn.vuejs.org/',
          },
          title: 'Vue.js',
          tags: ['vue', 'js', '框架'],
          content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架',
          showConfig: false,
        },
        {
          id: '002',
          url: {
            zh: 'https://vuex.vuejs.org/zh/',
            en: 'https://vuex.vuejs.org/',
          },
          title: 'Vuex',
          tags: ['vue', '库'],
          content: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库',
          showConfig: false,
        },
        {
          id: '003',
          url: {
            zh: 'https://router.vuejs.org/zh/',
            en: 'https://router.vuejs.org/',
          },
          title: 'Vue Router',
          tags: ['vue', '库'],
          content: 'Vue.js 的官方路由',
          showConfig: false,
        },
        {
          id: '004',
          url: {
            zh: 'https://pinia.vuejs.org/zh/',
            en: 'https://pinia.vuejs.org/',
          },
          title: 'Pinia',
          tags: ['vue', '库'],
          content: 'Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态',
          showConfig: false,
        },
        {
          id: '005',
          url: {
            zh: 'https://zh-hans.react.dev/',
            en: 'https://react.dev/',
          },
          title: 'React',
          tags: ['react', 'js', '框架'],
          content: '用于构建用户界面的 JavaScript 库',
          showConfig: false,
        },
        {
          id: '006',
          url: {
            zh: 'https://reactrouter.cn/',
            en: 'https://reactrouter.com/',
          },
          title: 'React Router',
          tags: ['react', '库'],
          content: 'React.js的官方路由',
          showConfig: false,
        },
        {
          id: '007',
          url: {
            zh: 'https://cn.redux.js.org/',
            en: 'https://redux.js.org/',
          },
          title: 'Redux',
          tags: ['redux', '库'],
          content: 'JS 应用的状态容器，提供可预测的状态管理',
          showConfig: false,
        },
        {
          id: '008',
          url: {
            zh: 'https://reactnative.cn/',
            en: 'https://reactnative.dev/',
          },
          title: 'React Native',
          tags: ['react native', 'js', '框架'],
          content: '一次学习，随处编写',
          showConfig: false,
        },
        {
          id: '009',
          url: {
            zh: 'https://nuxt.com.cn/',
            en: 'https://nuxt.com/',
          },
          title: 'NuxtJS',
          tags: ['nuxtjs', 'vue', '框架'],
          content: '使用简便的 Vue 框架',
          showConfig: false,
        },
        {
          id: '010',
          url: {
            zh: 'https://www.nextjs.cn/',
            en: 'https://nextjs.org/',
          },
          title: 'Next.js',
          tags: ['nextjs', 'react', '框架'],
          content: '这是一个用于 生产环境的 React 框架',
          showConfig: false,
        },
        {
          id: '011',
          url: {
            zh: 'https://www.solidjs.com/',
            en: 'https://www.solidjs.com/',
          },
          title: 'solid.js',
          tags: ['solidjs', 'js', '框架'],
          content: '一个用于构建用户界面，简单高效、性能卓越的JavaScript库',
          showConfig: false,
        },
        {
          id: '012',
          url: {
            zh: 'https://www.svelte.cn/',
            en: 'https://svelte.dev/',
          },
          title: 'Svelte.js',
          tags: ['sveltejs', 'js', '框架'],
          content: 'Svelte 是一种全新的构建用户界面的方法',
          showConfig: false,
        },
        {
          id: '013',
          url: {
            zh: 'https://flutter.cn/',
            en: 'https://flutter.dev/',
          },
          title: 'Flutter',
          tags: ['flutter', '框架'],
          content: 'Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用',
          showConfig: false,
        },
        {
          id: '014',
          url: {
            en: 'https://angular.dev/',
            zh: 'https://angular.cn/',
          },
          title: 'Angular.js',
          tags: ['amgular', 'js', '框架'],
          content: '现代 Web 开发平台',
          showConfig: false,
        },
        {
          id: '015',
          url: {
            en: 'https://preactjs.com/',
            zh: 'https://preactjs.com/',
          },
          title: 'Preact.js',
          tags: ['preact', 'js', '框架'],
          content: 'React 的轻量级替代方案，体积仅有 3kB，并且拥有与 React 相同的 API',
          showConfig: false,
        },
        {
          id: '016',
          url: {
            zh: 'https://uniapp.dcloud.net.cn/',
            en: 'https://en.uniapp.dcloud.io/',
          },
          title: 'uni-app',
          tags: ['uni-app', '框架'],
          content:
        'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台',
          showConfig: false,
        },
        {
          id: '017',
          url: {
            zh: 'https://ionic.nodejs.cn/',
            en: 'https://ionicframework.com/',
          },
          title: 'Ionic',
          tags: ['ionic', '框架'],
          content: 'Ionic 是目前最有潜力的一款 HTML5 手机应用开发框架',
          showConfig: false,
        },
        {
          id: '018',
          url: {
            zh: 'https://nodejs.org/zh-cn',
            en: 'https://nodejs.org/en',
          },
          title: 'Node.js',
          tags: ['nodejs', 'js'],
          content: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时',
          showConfig: false,
        },
        {
          id: '019',
          url: {
            zh: 'https://qwikcn.netlify.app/docs/overview/',
            en: 'https://qwik.dev/',
          },
          title: 'quik',
          tags: ['quik', 'js'],
          content: '毫不费力地构建即时交互的网络应用程序',
          showConfig: false,
        },
      ],
    },
    // 打包构建工具
    list2: {
      title: '打包/构建工具',
      data: [
        {
          id: '020',
          url: {
            en: 'https://webpack.js.org/',
            zh: 'https://www.webpackjs.com/concepts/',
          },
          title: 'Webpack',
          tags: ['Webpack', '打包工具'],
          content: '构建你的 assets',
          showConfig: false,
        },
        {
          id: '021',
          url: {
            en: 'https://vite.dev/',
            zh: 'https://cn.vitejs.dev/',
          },
          title: 'Vite',
          tags: ['vite', '工具链'],
          content: '下一代的前端工具链，为开发提供极速响应',
          showConfig: false,
        },
        {
          id: '022',
          url: {
            en: 'https://esbuild.github.io/',
            zh: 'https://esbuild.bootcss.com/getting-started/',
          },
          title: 'esbuild',
          tags: ['esbuild', '打包工具'],
          content: '速度极快的网络捆绑器',
          showConfig: false,
        },
        {
          id: '023',
          url: {
            en: 'https://parceljs.org/',
            zh: 'https://zh.parceljs.org/',
          },
          title: 'Parcel',
          tags: ['parceljs', '打包工具'],
          content: '极速零配置Web应用打包工具',
          showConfig: false,
        },
        {
          id: '024',
          url: {
            en: 'https://rollupjs.org/',
            zh: 'https://www.rollupjs.com/',
          },
          title: 'Rollup',
          tags: ['rollupjs', '打包工具'],
          content: 'Rollup 是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用',
          showConfig: false,
        },
        {
          id: '025',
          url: {
            en: 'https://babeljs.io/',
            zh: 'https://www.babeljs.cn/',
          },
          title: 'Babel',
          tags: ['babeljs', '编译器'],
          content: 'Babel 是一个 JavaScript 编译器',
          showConfig: false,
        },
        {
          id: '026',
          url: {
            en: 'https://gruntjs.com/',
            zh: 'https://www.gruntjs.net/',
          },
          title: 'Grunt.js',
          tags: ['gruntjs', '构建工具'],
          content: 'JavaScript 世界的构建工具',
          showConfig: false,
        },
        {
          id: '027',
          url: {
            en: 'https://gulpjs.com/',
            zh: 'https://www.gulpjs.com.cn/',
          },
          title: 'Gulp.js',
          tags: ['gulpjs', '构建工具'],
          content: '用自动化构建工具增强你的工作流程！',
          showConfig: false,
        },
        {
          id: '029',
          url: {
            en: 'https://www.biomejs.cn/en/',
            zh: 'https://www.biomejs.cn/',
          },
          title: 'Rome.js',
          tags: ['romejs', '工具链'],
          content: 'Rome 是一个完整的 JavaScript 工具链，集代码检测、打包、编译、测试等功能于一身',
          showConfig: false,
        },
      ],
    },
    // css/组件库
    // list3: {
    //   title: 'css框架/组件库',
    //   data: [
    //     {
    //       id: nanoid(),
    //       url: 'https://ant.design/index-cn',
    //       img: 'ant.design/index-cn.png',
    //       title: 'Ant Design',
    //       tags: ['AntDesign', '组件库', 'react'],
    //       content: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://antdv.com/components/overview-cn',
    //       img: 'antdv.com/components/overview-cn.png',
    //       title: 'Ant Design Vue',
    //       tags: ['AntDesign', '组件库', 'vue'],
    //       content: 'ant-design-vue 为 Web 应用提供了丰富的基础 UI 组件',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://element-plus.gitee.io/zh-CN/',
    //       img: 'element-plus.gitee.io/zh-CN/.png',
    //       title: 'Element Plus',
    //       tags: ['element', '组件库', ' vue3'],
    //       content: '基于 Vue 3，面向设计师和开发者的组件库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://element.eleme.cn/#/zh-CN',
    //       img: 'element.eleme.cn.png',
    //       title: 'Element',
    //       tags: ['element', '组件库', 'vue2'],
    //       content: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://vant-contrib.gitee.io/vant/#/zh-CN/',
    //       img: 'vant-ui.github.io.png',
    //       title: 'Vant',
    //       tags: ['vant', '移动端组件库', 'vue3'],
    //       content: '轻量、可定制的移动端 Vue 组件库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.naiveui.com/zh-CN/os-theme',
    //       img: 'www.naiveui.com/zh-CN/os-theme.png',
    //       title: 'Naive UI',
    //       tags: ['naiveui', '组件库', 'vue3'],
    //       content: '一个 Vue 3 组件库，比较完整，主题可调，使用 TypeScript，快',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://echarts.apache.org/zh/index.html',
    //       img: 'echarts.apache.org/zh.png',
    //       title: 'ECharts',
    //       tags: ['ECharts', '组件库'],
    //       content: '一个基于 JavaScript 的开源可视化图表库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.bootcss.com/',
    //       img: 'www.bootcss.com.png',
    //       title: 'Bootstrap',
    //       tags: ['Bootstrap', '框架'],
    //       content: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://unocss.dev/',
    //       img: 'unocss.dev.png',
    //       title: 'UnoCSS',
    //       tags: ['unocss', 'css'],
    //       content: '即时按需原子CSS引擎',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://cn.windicss.org/',
    //       img: 'cn.windicss.org.png',
    //       title: 'Windi CSS',
    //       tags: ['windicss', 'css', '框架'],
    //       content: '下一代工具类 CSS 框架',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.tailwindcss.cn/',
    //       img: 'www.tailwindcss.cn.png',
    //       title: 'tailwindcss',
    //       tags: ['tailwindcss', 'css', '框架'],
    //       content: '无需离开您的HTML，即可快速建立现代网站',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://bulma.zcopy.site/',
    //       img: 'bulma.zcopy.site.png',
    //       title: 'Bulma',
    //       tags: ['Bulma', 'css', '框架'],
    //       content: 'Bulma是一个免费、开源的CSS框架，它提供了易于使用的前端的组件，您可以轻松地组合这些组件来构建响应式Web界面',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://purecss.bootcss.com/',
    //       img: 'purecss.bootcss.com.png',
    //       title: 'Pure.CSS',
    //       tags: ['Pure', 'css', '框架'],
    //       content: 'Pure 是一组小巧且支持响应式布局的 CSS 模块，可用于任何 web 项目',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.sass.hk/',
    //       img: 'www.sass.hk.png',
    //       title: 'Sass',
    //       tags: ['sass', '预处理器'],
    //       content: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.stylus-lang.cn/',
    //       img: 'www.stylus-lang.cn.png',
    //       title: 'Stylus',
    //       tags: ['stylus', '预处理器'],
    //       content: '富于表现力、动态的、健壮的 CSS',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://less.devjs.cn/',
    //       img: 'lesscss.org.png',
    //       title: 'less',
    //       tags: ['less', '预处理器'],
    //       content: 'Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言',
    //     },
    //   ],
    // },
  }

  return {
    navList,
    audioList,
    menuList,
  }
}
