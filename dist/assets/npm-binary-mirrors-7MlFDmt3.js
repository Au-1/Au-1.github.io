import{v as r,q as e,x as l,y as i,o as p,e as s,f as t}from"./app-_ltulvYF.js";const h=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,[t("在 NPM 安装 Electron, Puppeteer 等包时，他们会通过 "),s("code",null,"postinstall"),t(" 脚本下载对应的二进制文件。因为一些不得而知的原因这个过程在某些网络下可能会很慢或不可用。你可以复制以下配置至 "),s("code",null,".bashrc"),t(" 或 "),s("code",null,".zshrc"),t(" 中，使用 npmmirror.com 提供的二进制镜像。数据来源于 "),s("a",{href:"https://github.com/cnpm/binary-mirror-config",target:"_blank",rel:"noopener"},[s("code",null,"binary-mirror-config")]),t("。")]),s("p",null,[t("感谢 "),s("a",{href:"https://github.com/xiaoxiangmoe",target:"_blank",rel:"noopener"},"@xiaoxiangmoe"),t("，"),s("a",{href:"https://github.com/Kingwl",target:"_blank",rel:"noopener"},"@Kingwl"),t("。")]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"# === NPM BINARY CHINA ===")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"# https://github.com/cnpm/binary-mirror-config/blob/master/package.json#L53")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," NODEJS_ORG_MIRROR"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/node"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," NVM_NODEJS_ORG_MIRROR"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/node"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," PHANTOMJS_CDNURL"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/phantomjs"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," CHROMEDRIVER_CDNURL"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/chromedriver"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," OPERADRIVER_CDNURL"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/operadriver"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," ELECTRON_MIRROR"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/electron/"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," ELECTRON_BUILDER_BINARIES_MIRROR"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/electron-builder-binaries/"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," SASS_BINARY_SITE"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/node-sass"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," SWC_BINARY_SITE"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/node-swc"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," NWJS_URLBASE"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/nwjs/v"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," PUPPETEER_DOWNLOAD_HOST"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," SENTRYCLI_CDNURL"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/sentry-cli"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," SAUCECTL_INSTALL_BINARY_MIRROR"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/saucectl"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," npm_config_sharp_binary_host"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/sharp"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," npm_config_sharp_libvips_binary_host"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/sharp-libvips"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," npm_config_robotjs_binary_host"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"'),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/robotj"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"# For Cypress >=10.6.0, https://docs.cypress.io/guides/references/changelog#10-6-0")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"export"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," CYPRESS_DOWNLOAD_PATH_TEMPLATE"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://cdn.npmmirror.com/binaries/cypress/${version}/${platform}-${arch}/cypress.zip"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")])])])],-1),c={__name:"npm-binary-mirrors",setup(o){const a={title:"NPM Binary 镜像配置",date:"2022-02-18T16:00:00.000Z",lang:"zh",duration:"1min",type:"note",image:"https://antfu.me/og/npm-binary-mirrors.png",meta:[{property:"og:title",content:"NPM Binary 镜像配置"},{name:"twitter:title",content:"NPM Binary 镜像配置"},{property:"og:image",content:"https://antfu.me/og/npm-binary-mirrors.png"},{name:"twitter:image",content:"https://antfu.me/og/npm-binary-mirrors.png"},{name:"twitter:card",content:"summary_large_image"}]};return r({title:"NPM Binary 镜像配置",meta:[{property:"og:title",content:"NPM Binary 镜像配置"},{name:"twitter:title",content:"NPM Binary 镜像配置"},{property:"og:image",content:"https://antfu.me/og/npm-binary-mirrors.png"},{name:"twitter:image",content:"https://antfu.me/og/npm-binary-mirrors.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,y)=>{const n=i;return p(),e(n,{frontmatter:a},{default:l(()=>[h]),_:1})}}};export{c as default};
