import{u as n,c as o,w as l,_ as r,o as i,a as e,d as t}from"./app-7ArEREWa.js";const g=e("div",{class:"prose m-auto slide-enter-content"},[e("p",null,[t("When you want to get the real file path of a certain package, you could use "),e("code",null,"require.resolve"),t(" to fetch their main entry path.")]),e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-bash"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},">"),e("span",{style:{"--s-dark":"#DBD7CAEE","--s-light":"#393A34"}}," require.resolve"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"'vite'"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"'/Users/.../node_modules/vite/dist/node/index.js'")]),t(`
`),e("span",{class:"line"}),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},">"),e("span",{style:{"--s-dark":"#DBD7CAEE","--s-light":"#393A34"}}," require.resolve"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"'windicss'"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"'/Users/.../node_modules/windicss/index.js'")])])]),e("p",null,[t("However, when you want to get the root directory of the package, you will find the result of "),e("code",null,"require.resolve"),t(" could vary based on different packages’ configurations.")]),e("p",null,[t("A trick for this is to resolve the "),e("code",null,"package.json"),t(" instead, as the "),e("code",null,"package.json"),t(" is always located at the root of the package. Combining with "),e("code",null,"path.dirname"),t(", you could always get the package root.")]),e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-bash"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},">"),e("span",{style:{"--s-dark":"#DBD7CAEE","--s-light":"#393A34"}}," path.dirname"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"require.resolve("),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"'vite/package.json'"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")"),e("span",{style:{"--s-dark":"#DBD7CAEE","--s-light":"#393A34"}},")")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"'/Users/.../node_modules/vite'")])])]),e("p",null,[t("Update: or you can use my package "),e("a",{href:"https://github.com/antfu/local-pkg",target:"_blank",rel:"noopener"},[e("code",null,"local-pkg")]),t(" now :)")])],-1),u={__name:"get-package-root",setup(c){const s={title:"Get Package Root",date:"2021-07-14T16:00:00.000Z",lang:"en",duration:"1min",type:"note",image:"https://antfu.me/og/get-package-root.png",meta:[{property:"og:title",content:"Get Package Root"},{name:"twitter:title",content:"Get Package Root"},{property:"og:image",content:"https://antfu.me/og/get-package-root.png"},{name:"twitter:image",content:"https://antfu.me/og/get-package-root.png"},{name:"twitter:card",content:"summary_large_image"}]};return n({title:"Get Package Root",meta:[{property:"og:title",content:"Get Package Root"},{name:"twitter:title",content:"Get Package Root"},{property:"og:image",content:"https://antfu.me/og/get-package-root.png"},{name:"twitter:image",content:"https://antfu.me/og/get-package-root.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,h)=>{const a=r;return i(),o(a,{frontmatter:s},{default:l(()=>[g]),_:1})}}};export{u as default};
