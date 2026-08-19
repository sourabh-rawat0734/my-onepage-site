module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prismicio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prismicio.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$SliceZone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/SliceZone.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$slices$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/slices/index.ts [app-rsc] (ecmascript)");
;
;
;
;
async function Home() {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$prismicio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
    try {
        // Fetch the published Homepage document from Prismic
        const page = await client.getSingle("homepage");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-white text-slate-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$SliceZone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SliceZone"], {
                slices: page.data.slices,
                components: __TURBOPACK__imported__module__$5b$project$5d2f$slices$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["components"]
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    } catch (error) {
        // If the document isn't published yet in Prismic
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen flex-col items-center justify-center p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-2",
                    children: "Homepage Not Found in Prismic"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600 max-w-md",
                    children: [
                        "Please make sure you created a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Homepage"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 42
                        }, this),
                        " document on Prismic.io and clicked ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Publish"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 103
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/prismicio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "repositoryName",
    ()=>repositoryName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$createClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/createClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/next/dist/index.cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$slicemachine$2e$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/slicemachine.config.json.[json].cjs [app-rsc] (ecmascript)");
;
;
;
const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || __TURBOPACK__imported__module__$5b$project$5d2f$slicemachine$2e$config$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].repositoryName;
const createClient = (config = {})=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$createClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"](repositoryName, {
        routes: [],
        ...config
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enableAutoPreviews"]({
        client
    });
    return client;
};
}),
"[project]/slicemachine.config.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "repositoryName": "cb704fc6",
    "adapter": "@slicemachine/adapter-next",
    "libraries": [
        "src/slices"
    ],
    "localSliceSimUrl": "http://localhost:3000/slice-simulator"
};
}),
"[project]/slices/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "components",
    ()=>components
]);
// Code generated by Slice Machine. DO NOT EDIT.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const components = {
    core_team_grid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/CoreTeamGrid/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/CoreTeamGrid/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    cta_hero_banner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/CtaHeroBanner/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/CtaHeroBanner/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    feature_columns_intro: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/FeatureColumnsIntro/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/FeatureColumnsIntro/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    featured_slider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/FeaturedSlider/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/FeaturedSlider/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    featured_updates: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/FeaturedUpdates/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/FeaturedUpdates/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    header_navigation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/HeaderNavigation/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/HeaderNavigation/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    headline_cta_image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/HeroBanner/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/HeroBanner/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    headline_description_graph_cta: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/HeadlineDescriptionGraphCta/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/HeadlineDescriptionGraphCta/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    icon_bulletlist_intro: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/IconBulletlistIntro/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/IconBulletlistIntro/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    icon_headline_columns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/IconHeadlineColumns/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/IconHeadlineColumns/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    media_side_intro: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/MediaSideIntro/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/MediaSideIntro/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    milestone_highlights: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/MilestoneHighlights/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/MilestoneHighlights/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    milestone_timeline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/MilestoneTimeline/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/MilestoneTimeline/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    multi_column_footer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/MultiColumnFooter/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/MultiColumnFooter/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    side_by_side_feature_list: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/SideBySideFeatureList/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/SideBySideFeatureList/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    timeline_grid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/TimelineGrid/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/TimelineGrid/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    timeline_highlights: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/TimelineHighlights/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/TimelineHighlights/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    two_column_image_text_intro: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/TwoColumnImageTextIntro/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/TwoColumnImageTextIntro/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    }),
    visual_text_split: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/slices/VisualTextSplit/index.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)"), {
        loadableGenerated: {
            modules: [
                "[project]/slices/VisualTextSplit/index.tsx [app-client] (ecmascript, next/dynamic entry)"
            ]
        }
    })
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1a2bbiv._.js.map