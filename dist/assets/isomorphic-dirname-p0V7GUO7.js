import{u as n,c as i,w as l,_ as r,o,a as s,d as t}from"./app-KLa9ccO2.js";const p=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,[t("In ESM, you might found your old friends "),s("code",null,"__dirname"),t(" and "),s("code",null,"__filename"),t(" are no longer available. When you search for "),s("a",{href:"https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag",target:"_blank",rel:"noopener"},"solutions"),t(", you will find that you will need to parse "),s("code",null,"import.meta.url"),t(" to get the equivalents. While most of the solutions only show you the way to get them in ESM only, If you like me, who write modules in TypeScript and transpile to both CJS and ESM at the same time using tools like "),s("a",{href:"https://tsup.egoist.sh/",target:"_blank",rel:"noopener"},[s("code",null,"tsup")]),t(". Here is the isomorphic solution:")]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-js"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," dirname"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"node:path"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," fileURLToPath"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"node:url"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"const"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," _dirname"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," typeof"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," __dirname"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," !=="),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"undefined"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"  ?"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," __dirname")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"  :"),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}}," dirname"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"fileURLToPath"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#B8A965","--s-light":"#998418"}},"meta"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"url"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"))")])])])],-1),y={__name:"isomorphic-dirname",setup(d){const e={title:"Isomorphic `__dirname`",date:"2021-08-30T16:00:00.000Z",lang:"en",duration:"1min",type:"note",image:"https://antfu.me/og/isomorphic-dirname.png",meta:[{property:"og:title",content:"Isomorphic `__dirname`"},{name:"twitter:title",content:"Isomorphic `__dirname`"},{property:"og:image",content:"https://antfu.me/og/isomorphic-dirname.png"},{name:"twitter:image",content:"https://antfu.me/og/isomorphic-dirname.png"},{name:"twitter:card",content:"summary_large_image"}]};return n({title:"Isomorphic `__dirname`",meta:[{property:"og:title",content:"Isomorphic `__dirname`"},{name:"twitter:title",content:"Isomorphic `__dirname`"},{property:"og:image",content:"https://antfu.me/og/isomorphic-dirname.png"},{name:"twitter:image",content:"https://antfu.me/og/isomorphic-dirname.png"},{name:"twitter:card",content:"summary_large_image"}]}),(m,g)=>{const a=r;return o(),i(a,{frontmatter:e},{default:l(()=>[p]),_:1})}}};export{y as default};
