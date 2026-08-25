module.exports=[89578,a=>{a.v({className:"geist_a71539c9-module__T19VSG__className",variable:"geist_a71539c9-module__T19VSG__variable"})},35214,a=>{a.v({className:"geist_mono_8d43a2aa-module__8Li5zG__className",variable:"geist_mono_8d43a2aa-module__8Li5zG__variable"})},64525,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/CookieBanner.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/CookieBanner.tsx","default")},61524,a=>{"use strict";var b=a.i(64525);a.n(b)},2761,a=>{"use strict";var b=a.i(7997),c=a.i(89578);let d={className:c.default.className,style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"}};null!=c.default.variable&&(d.variable=c.default.variable);var e=a.i(35214);let f={className:e.default.className,style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"}};null!=e.default.variable&&(f.variable=e.default.variable);var g=a.i(71618),h=a.i(61524);async function i({children:a,params:c}){let e=c?await c:void 0,j=(e?.lang??"en").split("-")[0]||"en";return(0,b.jsx)("html",{lang:j,className:`${d.variable} ${f.variable} h-full antialiased`,children:(0,b.jsxs)("body",{className:"font-sans min-h-full flex flex-col",children:[a,(0,b.jsx)(h.default,{}),(0,b.jsx)(g.default,{id:"add-section-ids",strategy:"lazyOnload",children:`
            (function assignSectionIds() {
              const processSections = () => {
                const sections = document.querySelectorAll('main section');
                sections.forEach((section, index) => {
                  if (!section.id) {
                    const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
                    if (heading && heading.textContent) {
                      const slug = heading.textContent
                        .toLowerCase()
                        .trim()
                        .replace(/[^\\w\\s-]/g, '')
                        .replace(/[\\s_-]+/g, '-')
                        .replace(/^-+|-+$/g, '');
                      section.id = slug || ('section-' + (index + 1));
                    } else {
                      section.id = 'section-' + (index + 1);
                    }
                  }
                });
              };

              // Run immediately
              processSections();

              // Observe dynamic client-side renders & page changes
              const observer = new MutationObserver(() => processSections());
              observer.observe(document.body, { childList: true, subtree: true });
            })();
          `})]})})}a.s(["default",0,i,"metadata",0,{title:"SymVentra",description:"Choose the health future that fits you."}],2761)},95648,function(a){a.n(a.i(2761))},44536,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/script.js"))},11153,a=>{"use strict";var b=a.i(44536);a.n(b)},71618,(a,b,c)=>{b.exports=a.r(11153)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bs0yw7._.js.map