import{u as l,c as n,w as i,_ as r,o,a as e,d as t}from"./app-7ArEREWa.js";const d=e("div",{class:"prose m-auto slide-enter-content"},[e("h2",{id:"domains-redirects",tabindex:"-1"},[t("Domains Redirects "),e("a",{class:"header-anchor",href:"#domains-redirects","aria-hidden":"true"},"#")]),e("p",null,[t("On "),e("a",{href:"https://netlify.com",target:"_blank",rel:"noopener"},"Netlify"),t(", you can setup multiple domains for a site. When you add a custom domain, the "),e("code",null,"xxx.netlify.app"),t(" is still accessible. Which would potentially cause some confusion to users. In that way, you can setup the redirection in your "),e("code",null,"netlify.toml"),t(" file, for example:")]),e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-toml"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"[["),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"redirects"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"from"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},' "'),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://vueuse.netlify.app/*"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"to"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},' "'),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://vueuse.org/:splat"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"status"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#4C9A91","--s-light":"#2F798A"}}," 301")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"force"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," true")])])]),e("ul",null,[e("li",null,[e("code",null,"*"),t(" and "),e("code",null,":splat"),t(" mean it will redirect all the sub routes as-is to the new domain.")]),e("li",null,[e("code",null,"force = true"),t(" specifying it will always redirect even if the request page exists.")])]),e("h2",{id:"site-names-redirects",tabindex:"-1"},[t("Site Names Redirects "),e("a",{class:"header-anchor",href:"#site-names-redirects","aria-hidden":"true"},"#")]),e("p",null,[e("em",null,"2021/02/20")]),e("p",null,[t("Unlike domain redirection, sometimes you would need to rename the Netlify subdomain name (a.k.a site name), for example "),e("code",null,"xxx.netlify.app"),t(" to "),e("code",null,"yyy.netlify.app"),t(". After you do the rename, people visiting "),e("code",null,"xxx.netlify.app"),t(" will receive a 404. And since you no longer have controls over "),e("code",null,"xxx.netlify.app"),t(", you can’t just setup a redirect in your new site.")]),e("p",null,[t("A solution here is to create a new site with your original name "),e("code",null,"xxx"),t(" and upload the redirection rules. In this case, we can have "),e("code",null,"netlify.toml"),t(" like this:")]),e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--s-dark":"#dbd7caee","--s-light":"#393a34","--s-dark-bg":"#121212","--s-light-bg":"#ffffff"},tabindex:"0"},[e("code",{class:"language-toml"},[e("span",{class:"line"},[e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"[["),e("span",{style:{"--s-dark":"#80A665","--s-light":"#59873A"}},"redirects"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}},"]]")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"from"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},' "'),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"*"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"to"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},' "'),e("span",{style:{"--s-dark":"#C98A7D","--s-light":"#B56959"}},"https://yyy.netlify.app/:splat"),e("span",{style:{"--s-dark":"#C98A7D99","--s-light":"#B5695999"}},'"')]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"status"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#4C9A91","--s-light":"#2F798A"}}," 301")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--s-dark":"#BD976A","--s-light":"#B07D48"}},"force"),e("span",{style:{"--s-dark":"#666666","--s-light":"#999999"}}," ="),e("span",{style:{"--s-dark":"#4D9375","--s-light":"#1E754F"}}," true")])])]),e("p",null,[t("Note you don’t have to link a repo to that, Netlify offers a great feature that "),e("a",{href:"https://app.netlify.com/drop",target:"_blank",rel:"noopener"},"let you drag and drop for static files and serve as a site"),t(". So you can just save "),e("code",null,"netlify.toml"),t(" and upload it, rename the site to your original name. The redirection is done!")])],-1),u={__name:"netlify-redirects",setup(p){const s={title:"Netlify Redirects",date:"2021-02-20T16:00:00.000Z",lang:"en",duration:"5min",type:"note",image:"https://antfu.me/og/netlify-redirects.png",meta:[{property:"og:title",content:"Netlify Redirects"},{name:"twitter:title",content:"Netlify Redirects"},{property:"og:image",content:"https://antfu.me/og/netlify-redirects.png"},{name:"twitter:image",content:"https://antfu.me/og/netlify-redirects.png"},{name:"twitter:card",content:"summary_large_image"}]};return l({title:"Netlify Redirects",meta:[{property:"og:title",content:"Netlify Redirects"},{name:"twitter:title",content:"Netlify Redirects"},{property:"og:image",content:"https://antfu.me/og/netlify-redirects.png"},{name:"twitter:image",content:"https://antfu.me/og/netlify-redirects.png"},{name:"twitter:card",content:"summary_large_image"}]}),(h,y)=>{const a=r;return o(),n(a,{frontmatter:s},{default:i(()=>[d]),_:1})}}};export{u as default};
