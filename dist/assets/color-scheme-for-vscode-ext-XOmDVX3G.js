import{u as l,c as n,w as r,_ as i,o,a as s,d as t}from"./app-KLa9ccO2.js";const h=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,"There is currently no API to access colors of current theme in VS Code Extensions, nor the meta information of them. It frustrated me for a long while, until today I came up with a dirty but working solution."),s("p",null,[t("Since most of the themes follow the conversions of having "),s("code",null,"Light"),t(" or "),s("code",null,"Dark"),t(" in their names. Then we can have:")]),s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"import"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {"),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," workspace"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," }"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," from"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," '"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"vscode"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"export"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," function"),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}}," isDarkTheme"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"()"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"  const "),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"theme"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}}," workspace"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"getConfiguration"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"    ."),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"get"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'"),s("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"workbench.colorTheme"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"'"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},","),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}}," ''"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"  // must be dark")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"  if"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ("),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"theme"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"match"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"/"),s("span",{style:{"--s-dark":"#C4704F","--s-light":"#AB5E3F"}},"dark"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}},"|"),s("span",{style:{"--s-dark":"#C4704F","--s-light":"#AB5E3F"}},"black"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"/"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"i"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," !="),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," null"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"    return"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," true")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"  // must be light")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"  if"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ("),s("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"theme"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"."),s("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"match"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"("),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"/"),s("span",{style:{"--s-dark":"#C4704F","--s-light":"#AB5E3F"}},"light"),s("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},"/"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"i"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")"),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," !="),s("span",{style:{"--s-dark":"#CB7676","--s-light":"#AB5959"}}," null"),s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"    return"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," false")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#758575DD","--s-light":"#A0ADA0"}},"  // IDK, maybe dark")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}},"  return"),s("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," true")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"}")])])]),s("p",null,[t("Simple, but surprisingly, it works really well. This is used for my "),s("a",{href:"https://github.com/antfu/vscode-browse-lite",target:"_blank",rel:"noopener"},"Browse Lite"),t(" extension to inject the preferred color schema matching with VS Code’s theme. And also "),s("a",{href:"https://github.com/antfu/vscode-iconify",target:"_blank",rel:"noopener"},"Iconify IntelliSense for VS Code"),t(" to update icons color with the theme.")])],-1),y={__name:"color-scheme-for-vscode-ext",setup(p){const e={title:"Color Scheme for VS Code",date:"2021-03-01T16:00:00.000Z",lang:"en",duration:"2min",type:"note",image:"https://antfu.me/og/color-scheme-for-vscode-ext.png",meta:[{property:"og:title",content:"Color Scheme for VS Code"},{name:"twitter:title",content:"Color Scheme for VS Code"},{property:"og:image",content:"https://antfu.me/og/color-scheme-for-vscode-ext.png"},{name:"twitter:image",content:"https://antfu.me/og/color-scheme-for-vscode-ext.png"},{name:"twitter:card",content:"summary_large_image"}]};return l({title:"Color Scheme for VS Code",meta:[{property:"og:title",content:"Color Scheme for VS Code"},{name:"twitter:title",content:"Color Scheme for VS Code"},{property:"og:image",content:"https://antfu.me/og/color-scheme-for-vscode-ext.png"},{name:"twitter:image",content:"https://antfu.me/og/color-scheme-for-vscode-ext.png"},{name:"twitter:card",content:"summary_large_image"}]}),(g,c)=>{const a=i;return o(),n(a,{frontmatter:e},{default:r(()=>[h]),_:1})}}};export{y as default};
