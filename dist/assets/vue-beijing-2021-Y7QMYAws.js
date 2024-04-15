import{u as i,c as o,w as l,_ as r,o as h,a as e,b as d,d as t}from"./app-7ArEREWa.js";import{_ as p}from"./YouTubeEmbed.vue_vue_type_script_setup_true_lang-N29Ju5KZ.js";const u={class:"prose m-auto slide-enter-content"},c=e("blockquote",null,[e("p",null,[t("This is the transcript of my talk at "),e("a",{href:"https://twitter.com/beijing_vue",target:"_blank",rel:"noopener"},"Vue Beijing")]),e("p",null,[t("Slides: "),e("a",{href:"https://antfu.me/talks/2021-03-28/en",target:"_blank",rel:"noopener"},"English ver."),t(" | "),e("a",{href:"https://antfu.me/talks/2021-03-28/zh",target:"_blank",rel:"noopener"},"中文 ver.")]),e("p",null,[t("Recording: "),e("a",{href:"https://www.youtube.com/watch?v=xx8gEHet6n8",target:"_blank",rel:"noopener"},"YouTube (English)")])],-1),g=e("h2",{id:"transcript",tabindex:"-1"},[t("Transcript "),e("a",{class:"header-anchor",href:"#transcript","aria-hidden":"true"},"#")],-1),m=e("p",null,[t("I guess many of you have already heard about "),e("a",{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener"},"Vite"),t(', as the next thing replacing other bundlers like Webpack. Well, it’s actually not 100% true. While we are used to "Build with Webpack", and now, more precisely, we are '),e("strong",null,"Developing with Vite"),t(".")],-1),y=e("p",null,"Today I am going to present you with a brief introduction to Vite, the next-generation development tools. And I believe you will find out the answer after it.",-1),f=e("h2",{id:"what-is-vite",tabindex:"-1"},[t("What is Vite? "),e("a",{class:"header-anchor",href:"#what-is-vite","aria-hidden":"true"},"#")],-1),b=e("p",null,"Vite is a French word meaning fast. The initial motivation of it is that Evan You, the creator of Vue, got an idea of making a dev server with hot reload for Vue Single File Component without a bundler. And yeah, after a few days, Vite comes out.",-1),k=e("p",null,"With the name of fast, it has to be fast. And it is.",-1),_=e("p",null,[t("Let me show you a quick "),e("a",{href:"https://twitter.com/amasad/status/1355379680275128321",target:"_blank",rel:"noopener"},"demonstration of how fast it is"),t(". On the left-hand side, we have Create React App, and on the right we have Vite. And you can see during I am introducing to them, the Vite app is already ready and playable, while the other one just finishes installing its dependencies. In this demo, we can see we have over 4x faster boot-up speed improvement over Create React App, on the single component starter template. And actually, it’s not even showing the full potential of Vite.")],-1),v=e("p",null,"So how could Vite be so fast?",-1),w=e("p",null,"First, Vite is opinionated on providing better DX. It assumes that you are using modern browsers for development, so we don’t need to have complex transpiling and polyfills involved. Also since your browser already understands Native ES module, we can even skip the bundling process and let the browser do it for us. We also involved with some optimizations to make it even faster, which I will go through them later.",-1),V=e("p",null,"We have a build mode for production powered by rollup. The difference between development and production make Vite capable of having good experiences for both of them.",-1),D=e("h3",{id:"the-dev-server",tabindex:"-1"},[t("The Dev Server "),e("a",{class:"header-anchor",href:"#the-dev-server","aria-hidden":"true"},"#")],-1),A=e("p",null,"In a traditional bundle-based dev server, when we start the server, it will bundle your entire app and the server is ready only until the bundling is finished. In a large-scale app, it could take quite a lot of time.",-1),x=e("p",null,"Native ESM bases server, on the other hand, does need to do the bundling at all. The server is ready immediately and it will only transpile the modules of the pages you have opened on-demanded. So even you have a huge app with thousands of pages, it will be constantly fast as it only needs to transpile the modules for one page.",-1),B=e("p",null,[t("The transpling is powered by "),e("a",{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener"},"esbuild"),t(". It is a transpiler and bundler written in Go and build to native code. It is optimized with speed in mind and utilizes the potential of parallelism. It claims that it can be 10-100x faster than the traditional build tools.")],-1),C=e("p",null,[t("With the support "),e("a",{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener"},"esbuild"),t(", we are able to support JSX, TypeScript out-of-the-box.")],-1),I=e("h3",{id:"dependencies-pre-bundling",tabindex:"-1"},[t("Dependencies Pre-bundling "),e("a",{class:"header-anchor",href:"#dependencies-pre-bundling","aria-hidden":"true"},"#")],-1),E=e("p",null,"Another optimization of Vite is the dependencies pre-bundling. Normally, your dependencies do not change really often unless you are upgrading them, but on the other hand, your user code can change everyday.",-1),S=e("p",null,[t("So by treating the user code and dependencies differently, we pre bundles your dependencies into a single file standard ESM that can be understood by the browser. In this way, we ease out the difference of packages shipping different js formats like "),e("code",null,"cjs"),t(" or node favored modules. It also reduced HTTP request overhead and importing waterfall.")],-1),j=e("p",null,[t("And this bundling process is also powered by "),e("a",{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener"},"esbuild"),t(", with over 20x faster performance.")],-1),T=e("h3",{id:"hot-module-replacement",tabindex:"-1"},[t("Hot Module Replacement "),e("a",{class:"header-anchor",href:"#hot-module-replacement","aria-hidden":"true"},"#")],-1),F=e("p",null,"Another important part of Vite is that it has out-of-box hot module replacement support. Whenever you made a change to your code, the HMR is triggered. It’s smart enough to know which modules would be affected by the changes and replace them efficiently. And we have first-party support for Vue single-file components and React Refresh.",-1),W=e("p",null,"As Vite is made by Evan, you may think it’s only Vue. Well, initially, it was kind of true, but things are different now.",-1),H=e("p",null,"From Vite 2.0, it’s now framework-agnostic and Vue is supported through a plugin. It also comes with a bunch of new features and improvements, for example the universal plugin system and first-class SSR. For more details, you check out the links in the slide.",-1),R=e("p",null,[t("You can use "),e("code",null,"npm init"),t(" to create the starter project with the official templates. As you can see, we have supported Vue, React, Preact, Lit Element, Svelte, and even vanilla. It’s not limited to these, we will keep adding more as we go.")],-1),N=e("hr",null,null,-1),P=e("h2",{id:"powerful-plugins-system",tabindex:"-1"},[t("Powerful Plugins System "),e("a",{class:"header-anchor",href:"#powerful-plugins-system","aria-hidden":"true"},"#")],-1),L=e("p",null,"Vite’s plugins are compatible with Rollup plugins. This means you can use the huge amount of existing plugins from rollup on Vite.",-1),M=e("p",null,[t("You can check out "),e("a",{href:"https://github.com/patak-js/vite-rollup-plugins",target:"_blank",rel:"noopener"},"this Vite Rollup Plugins site"),t(" by our team member "),e("a",{href:"https://github.com/patak-js",target:"_blank",rel:"noopener"},"@patak-js"),t(". It lists all the compatibility of popular rollup plugins with some demo and guides of how to use them.")],-1),z=e("p",null,[t("We also have "),e("a",{href:"https://github.com/vitejs/awesome-vite",target:"_blank",rel:"noopener"},"an awesome list"),t(" that lists Vite plugins for different ecosystems. Check it out, I believe you will find some of them useful to you.")],-1),q=e("hr",null,null,-1),Y=e("h2",{id:"fresh-vue-authoring-experience",tabindex:"-1"},[t("Fresh Vue Authoring Experience "),e("a",{class:"header-anchor",href:"#fresh-vue-authoring-experience","aria-hidden":"true"},"#")],-1),J=e("p",null,"I’d like to feature some Vite plugins for Vue that provide the Fresh authoring experience on creating Vue apps.",-1),X=e("h3",{id:"vite-plugin-pages-by-hannoeru",tabindex:"-1"},[e("a",{href:"https://github.com/hannoeru/vite-plugin-pages",target:"_blank",rel:"noopener"},[e("code",null,"vite-plugin-pages")]),t(" by "),e("a",{href:"https://github.com/hannoeru",target:"_blank",rel:"noopener"},"@hannoeru"),t(),e("a",{class:"header-anchor",href:"#vite-plugin-pages-by-hannoeru","aria-hidden":"true"},"#")],-1),O=e("p",null,"It provides Nuxt.js-like file base routing, with dynamic routes support that can be accessed as the props in the page component.",-1),$=e("p",null,"Only with 3 lines of code, you can set up this feature and use it immediately.",-1),G=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-ts"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," createRouter"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"vue-router"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," routes"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"virtual:generated-pages"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"const "),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"router"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}}," createRouter"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"({ "),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"routes"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," })")])])],-1),K=e("p",null,[t("Check "),e("a",{href:"https://github.com/hannoeru/vite-plugin-pages",target:"_blank",rel:"noopener"},"its docs"),t(" for more.")],-1),Q=e("h3",{id:"vite-plugin-components-by-antfu",tabindex:"-1"},[e("a",{href:"https://github.com/hannoeru/vite-plugin-components",target:"_blank",rel:"noopener"},[e("code",null,"vite-plugin-components")]),t(" by "),e("a",{href:"https://github.com/antfu",target:"_blank",rel:"noopener"},"@antfu"),t(),e("a",{class:"header-anchor",href:"#vite-plugin-components-by-antfu","aria-hidden":"true"},"#")],-1),U=e("p",null,[t("In Vue, writing the name of the component four times in order to import them is kind of a pain for me. So I made this plugin to do the component auto-importing. Now you can put your components under "),e("code",null,"src/components"),t(" and then use them everywhere without needing to import them. We also have built-in support for auto importing component libraries with minimal configurations. For now, we have supported Vuetify, Ant Design Vue, Element Plus, Vant, and so on.")],-1),Z=e("p",null,"From:",-1),ee=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-vue"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"<"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"script"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," HelloWorld"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"./src/components/HelloWorld.vue"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"export"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," default"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"  components"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},":"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"    HelloWorld"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},",")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  },")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"}")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"</"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"script"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"<"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"template"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  <"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"HelloWorld"),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," msg"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"Hello Vue 3.0 + Vite"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"</"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"template"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")])])],-1),te=e("p",null,"To:",-1),se=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-vue"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"<"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"template"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  <"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"HelloWorld"),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," msg"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"Hello Vue 3.0 + Vite"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"</"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"template"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")])])],-1),ae=e("h3",{id:"vite-plugin-icons-by-antfu",tabindex:"-1"},[e("a",{href:"https://github.com/hannoeru/vite-plugin-icons",target:"_blank",rel:"noopener"},[e("code",null,"vite-plugin-icons")]),t(" by "),e("a",{href:"https://github.com/antfu",target:"_blank",rel:"noopener"},"@antfu"),t(),e("a",{class:"header-anchor",href:"#vite-plugin-icons-by-antfu","aria-hidden":"true"},"#")],-1),ne=e("p",null,[t("Another one is "),e("code",null,"vite-plugin-icons"),t(". It allows you to use icons from any icon set, for example, Material design icons and Font awesome. Which the on-demand spirit of Vite, this will only ship with the icons that you actually use. So you can say goodbye to the old-school icon font approach that downloads a huge font with all the icons that you don’t actually need.")],-1),ie=e("p",null,"It also works well with the component auto importing, and you can use them like magic.",-1),oe=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-vue"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"<"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"template"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  <"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"i-carbon-accessibility"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  <"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"i-mdi-account-box"),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}}," style"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),e("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"font-size"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},":"),e("span",{style:{"--s-dark":"#4C9A91","--s-light":"#2F798A"}}," 2"),e("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"em"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},";"),e("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}}," color"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},":"),e("span",{style:{"--s-dark":"#C99076","--s-light":"#A65E2B"}}," red"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," />")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"</"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"template"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},">")])])],-1),le=e("h3",{id:"vite-plugin-windicss-by-antfu",tabindex:"-1"},[e("a",{href:"https://github.com/windicss/vite-plugin-windicss",target:"_blank",rel:"noopener"},[e("code",null,"vite-plugin-windicss")]),t(" by "),e("a",{href:"https://github.com/antfu",target:"_blank",rel:"noopener"},"@antfu"),t(),e("a",{class:"header-anchor",href:"#vite-plugin-windicss-by-antfu","aria-hidden":"true"},"#")],-1),re=e("p",null,[t("If you have ever used "),e("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener"},"Tailwind CSS"),t(", you must aware it’s actually quite slow in the dev server as it ships all the utilities with megabytes of CSS to your client. This becomes the slowest part of my Vite app.")],-1),he=e("p",null,[t("Luckily, we have a new thing called "),e("a",{href:"https://github.com/windicss/windicss",target:"_blank",rel:"noopener"},"Windi CSS"),t(", which you can think of it as the on-demand Tailwind CSS. Instead of shipping all the combinations of classes and purge them down later. It only generates the classes you actually use. Turns out it can be 20-100x faster than the traditional Tailwind. While it’s on-demand, it also opens up more features like unit auto-inferring. Do check it out if you are using Tailwind.")],-1),de=e("h3",{id:"try-them-all",tabindex:"-1"},[t("Try them all "),e("a",{class:"header-anchor",href:"#try-them-all","aria-hidden":"true"},"#")],-1),pe=e("p",null,[t("If you found them interesting and want to try it yourself, I also made a starter template call "),e("a",{href:"https://github.com/antfu/vitesse",target:"_blank",rel:"noopener"},"Vitesse"),t(", with all of them included and more features. Pull it down and check out.")],-1),ue=e("p",null,[t("These are only a small part of our plugins ecosystem, we have more of them available in the "),e("a",{href:"https://github.com/vitejs/awesome-vite",target:"_blank",rel:"noopener"},"awesome list"),t(" do remember to check them out.")],-1),ce=e("h3",{id:"vue-2-for-vite",tabindex:"-1"},[t("Vue 2 for Vite "),e("a",{class:"header-anchor",href:"#vue-2-for-vite","aria-hidden":"true"},"#")],-1),ge=e("p",null,"If you are still using Vue 2, no worries, we have your covered!",-1),me=e("p",null,[t("While the official Vue plugin is for Vue 3. Another Vite team member "),e("a",{href:"http://github.com/underfin",target:"_blank",rel:"noopener"},"@underfin"),t(" made the plugin "),e("a",{href:"https://github.com/underfin/vite-plugin-vue2",target:"_blank",rel:"noopener"},[e("code",null,"vite-plugin-vue2")]),t(" for Vue 2. With a single line in the config, you are good to go. It’s been wildly adapted already, for example, "),e("a",{href:"https://github.com/nuxt/vite",target:"_blank",rel:"noopener"},"Nuxt 2 for Vite"),t(" is powered on it.")],-1),ye=e("p",null,[t("In the "),e("a",{href:"https://github.com/vitejs/awesome-vite",target:"_blank",rel:"noopener"},"awesome list"),t(", we have marked the compatibility for each plugin of the Vue 2 support. Many of them are isomorphic to both Vue 3 and 2. If you are going to try Vue 2, you don’t want to miss it.")],-1),fe=e("h3",{id:"legacy-browser-support",tabindex:"-1"},[t("Legacy Browser Support "),e("a",{class:"header-anchor",href:"#legacy-browser-support","aria-hidden":"true"},"#")],-1),be=e("p",null,"Vite uses native ESM on both development and production, but if you want to enable legacy browsers that do not support ESM, no problem, we have it.",-1),ke=e("p",null,[t("There is an official plugin "),e("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-legacy",target:"_blank",rel:"noopener"},[e("code",null,"@vitejs/plugin-legacy")]),t(" that uses Babel and System JS to transform the modules for legacy support.")],-1),_e=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-ts"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"// vite.config.js")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," legacy"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"@vitejs/plugin-legacy"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"export"),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," default"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"  plugins"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},": [")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"    legacy"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"({")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"      targets"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},": ["),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"defaults"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},", "),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"not IE 11"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"    })")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"  ]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"}")])])],-1),ve=e("p",null,"Check out the docs for more details.",-1),we=e("hr",null,null,-1),Ve=e("h2",{id:"ecosystem-and-community",tabindex:"-1"},[t("Ecosystem and Community "),e("a",{class:"header-anchor",href:"#ecosystem-and-community","aria-hidden":"true"},"#")],-1),De=e("p",null,"Then, let’s talk a bit about the community.",-1),Ae=e("p",null,"I bet you already have this question - Vite is great, but what does Vite mean for the existing Vue ecosystem? Let me help you to find it out.",-1),xe=e("p",null,[t("How about "),e("a",{href:"https://github.com/vuepress/vuepress-next",target:"_blank",rel:"noopener"},"VuePress"),t("? It’s actually "),e("a",{href:"https://twitter.com/meteorlxy_cn/status/1370728812971917315",target:"_blank",rel:"noopener"},"already supported Vite in the version 2 beta"),t("! In v2, you can swap the engine between Webpack and Vite, and have the instant reload from Vite. Check out the docs for how it works!")],-1),Be=e("p",null,[t("As for Nuxt, we actually have some exciting news! The "),e("a",{href:"https://twitter.com/_pi0_/status/1352344462954016768",target:"_blank",rel:"noopener"},"upcoming Nuxt 3 will support interchangeable engines between Webpack and Vite"),t(". And you can get the benefit of the huge Nuxt community. It will be available as a public beta at Q2 this year. They also release "),e("a",{href:"https://twitter.com/_pi0_/status/1365049110982778884",target:"_blank",rel:"noopener"},"an experimental project for Nuxt 2 to support Vite"),t(" where you can try it today.")],-1),Ce=e("p",null,[t("About Vue CLI, as "),e("a",{href:"https://twitter.com/youyuxi/status/1354584410482499585",target:"_blank",rel:"noopener"},"Evan mentioned"),t(", we weren’t intended to replace Vue CLI with Vite, but it turns out it could be. The long-term goal of Vue CLI is to support Vite with a powerful scaffolding capability and easier to get started.")],-1),Ie=e("p",null,[t("We also have a community plugin "),e("a",{href:"https://github.com/IndexXuan/vue-cli-plugin-vite",target:"_blank",rel:"noopener"},[e("code",null,"vue-cli-plugin-vite")]),t(" that enables Vite support in Vue CLI that you can play with it today.")],-1),Ee=e("hr",null,null,-1),Se=e("h2",{id:"higher-level-integrations",tabindex:"-1"},[t("Higher-level Integrations "),e("a",{class:"header-anchor",href:"#higher-level-integrations","aria-hidden":"true"},"#")],-1),je=e("p",null,"We also have a community plugin that enables Vite support in Vue CLI that you can try today. And on top of Vite, we are now having some cool higher-level integrations tools.",-1),Te=e("p",null,[t("The first one is "),e("a",{href:"https://github.com/vuejs/vitepress",target:"_blank",rel:"noopener"},"VitePress"),t(", a Vite and Vue powered static site generator. Similar to VuePress, but with more opinionated pre-configuration. This project is still experimental but already served as the generator for many official documentation sites, including the Vite docs itself.")],-1),Fe=e("p",null,[e("a",{href:"https://github.com/ream/ream",target:"_blank",rel:"noopener"},"Ream"),t(" is a Vite-based framework with the support of fast SSR built-in by "),e("a",{href:"https://github.com/egoist",target:"_blank",rel:"noopener"},"@egoist"),t(". At the time I am preparing these slides, it’s doing a rewrite to make not only for Vue but also for any frameworks. Stay tuned on that.")],-1),We=e("p",null,[t("Edge side rendering becomes quite popular recently, and we are also having a tool called "),e("a",{href:"https://github.com/frandiox/vitedge",target:"_blank",rel:"noopener"},"Vitedge"),t(" by "),e("a",{href:"https://github.com/frandiox",target:"_blank",rel:"noopener"},"@frandiox"),t(" to bring it to Vite. Take a look at its repo as well.")],-1),He=e("p",null,[t("Vite also supports "),e("a",{href:"https://vitejs.dev/guide/backend-integration.html",target:"_blank",rel:"noopener"},"backend integrations"),t(", now we already have "),e("a",{href:"https://github.com/ElMassimo/vite_ruby",target:"_blank",rel:"noopener"},"Vite Ruby"),t(" by "),e("a",{href:"https://github.com/ElMassimo",target:"_blank",rel:"noopener"},"@ElMassimo"),t(" and "),e("a",{href:"https://github.com/innocenzi/laravel-vite",target:"_blank",rel:"noopener"},"Laravel Vite"),t("by "),e("a",{href:"https://github.com/innocenzi",target:"_blank",rel:"noopener"},"@innocenzi"),t(" in the community. They leverage Vite to serve the front-end and benefit from Vite’s fast performance.")],-1),Re=e("p",null,"You can also set up your own backend integrations easily by following the docs below.",-1),Ne=e("hr",null,null,-1),Pe=e("h2",{id:"upcoming",tabindex:"-1"},[t("Upcoming "),e("a",{class:"header-anchor",href:"#upcoming","aria-hidden":"true"},"#")],-1),Le=e("p",null,"Not only for Vue and the new tools. The tools you love are also going to support Vite. Here are some news for upcoming things I’d like to share with you.",-1),Me=e("p",null,[e("a",{href:"https://github.com/sveltejs/kit",target:"_blank",rel:"noopener"},"Svelte Kit"),t(" is the next official build tools for Svelte, and "),e("a",{href:"https://github.com/sveltejs/kit/pull/409",target:"_blank",rel:"noopener"},"they are moving from Snowpack to Vite"),t(". It’s in the early beta now and you can check it out if it got you interested.")],-1),ze=e("p",null,[e("a",{href:"https://twitter.com/_jessicasachs/status/1354585366620221443",target:"_blank",rel:"noopener"},"Cypress is also adding the first-class Vite support"),t(". I believe we can see it ready within this year.")],-1),qe=e("p",null,[t("And "),e("a",{href:"https://twitter.com/storybookjs/status/1371894052015239170",target:"_blank",rel:"noopener"},"Storybook is also exploring the interchangeable engines for Vite and Snowpack"),t(". You can also keep an eye on that.")],-1),Ye=e("hr",null,null,-1),Je=e("h2",{id:"start-vite-today",tabindex:"-1"},[t("Start Vite today! "),e("a",{class:"header-anchor",href:"#start-vite-today","aria-hidden":"true"},"#")],-1),Xe=e("p",null,"We are waiting for you to join our community and start playing with us!",-1),Oe=e("p",null,"Just firing up this command in your terminal to get the first impressions!",-1),$e=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-bash"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"npm"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," init"),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}}," @vitejs/app")])])],-1),Ge=e("p",null,[t("That’s all for today. Join the "),e("a",{href:"http://chat.vitejs.dev/",target:"_blank",rel:"noopener"},"discord"),t(" to chat with us and follow us on "),e("a",{href:"https://twitter.com/vite_js",target:"_blank",rel:"noopener"},"Twitter"),t(" to get the latest news.")],-1),Ke=e("p",null,"See you in the community, thank you!",-1),at={__name:"vue-beijing-2021",setup(Qe){const s={title:"Develop with Vite",place:"Vue Beijing",type:"talk+blog",date:"2021-03-28T16:00:00.000Z",lang:"en",recording:!0,duration:"18min",image:"https://antfu.me/og/vue-beijing-2021.png",meta:[{property:"og:title",content:"Develop with Vite"},{name:"twitter:title",content:"Develop with Vite"},{property:"og:image",content:"https://antfu.me/og/vue-beijing-2021.png"},{name:"twitter:image",content:"https://antfu.me/og/vue-beijing-2021.png"},{name:"twitter:card",content:"summary_large_image"}]};return i({title:"Develop with Vite",meta:[{property:"og:title",content:"Develop with Vite"},{name:"twitter:title",content:"Develop with Vite"},{property:"og:image",content:"https://antfu.me/og/vue-beijing-2021.png"},{name:"twitter:image",content:"https://antfu.me/og/vue-beijing-2021.png"},{name:"twitter:card",content:"summary_large_image"}]}),(Ze,et)=>{const a=p,n=r;return h(),o(n,{frontmatter:s},{default:l(()=>[e("div",u,[c,d(a,{id:"xx8gEHet6n8"}),g,m,y,f,b,k,_,v,w,V,D,A,x,B,C,I,E,S,j,T,F,W,H,R,N,P,L,M,z,q,Y,J,X,O,$,G,K,Q,U,Z,ee,te,se,ae,ne,ie,oe,le,re,he,de,pe,ue,ce,ge,me,ye,fe,be,ke,_e,ve,we,Ve,De,Ae,xe,Be,Ce,Ie,Ee,Se,je,Te,Fe,We,He,Re,Ne,Pe,Le,Me,ze,qe,Ye,Je,Xe,Oe,$e,Ge,Ke])]),_:1})}}};export{at as default};
