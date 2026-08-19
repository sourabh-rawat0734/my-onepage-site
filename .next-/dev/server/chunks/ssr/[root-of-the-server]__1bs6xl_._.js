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
"[project]/app/slice-simulator/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SliceSimulatorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@slicemachine/adapter-next/dist/simulator/react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$react$2d$server$2f$SliceSimulator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$react$2d$server$2f$getSlices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$SliceZone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/SliceZone.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$slices$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/slices/index.ts [app-rsc] (ecmascript)");
;
;
;
;
async function SliceSimulatorPage({ searchParams }) {
    const { slices } = await searchParams;
    const resolvedSlices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$react$2d$server$2f$getSlices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSlices"])(slices);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$slicemachine$2f$adapter$2d$next$2f$dist$2f$simulator$2f$react$2d$server$2f$SliceSimulator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SliceSimulator"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$SliceZone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SliceZone"], {
            slices: resolvedSlices,
            components: __TURBOPACK__imported__module__$5b$project$5d2f$slices$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["components"]
        }, void 0, false, {
            fileName: "[project]/app/slice-simulator/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/slice-simulator/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/slice-simulator/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/slice-simulator/page.tsx [app-rsc] (ecmascript)"));
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1bs6xl_._.js.map