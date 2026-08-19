module.exports = [
"[project]/node_modules/@prismicio/client/dist/_virtual/_rolldown/runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__exportAll",
    ()=>__exportAll
]);
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols)=>{
    let target = {};
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
    if (!no_symbols) __defProp(target, Symbol.toStringTag, {
        value: "Module"
    });
    return target;
};
;
}),
"[project]/node_modules/@prismicio/client/dist/helpers/asLinkAttrs.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asLinkAttrs",
    ()=>asLinkAttrs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/helpers/asLink.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/lib/isInternalURL.js [app-rsc] (ecmascript)");
;
;
;
//#region src/helpers/asLinkAttrs.ts
/**
* Resolves any type of link field or Prismic page to a set of link attributes. The attributes are
* designed to be passed to link HTML elements, like `<a>`.
*
* If a resolved URL is external (i.e. starts with a protocol like `https://`), `rel` is returned as
* `"noreferrer"`.
*
* @typeParam LinkResolverFunctionReturnType - Link resolver function return
* type
* @typeParam Field - Link field or Prismic page to resolve to link attributes
* @param linkFieldOrDocument - Any kind of link field or a page to resolve
* @param config - Configuration that determines the output of `asLinkAttrs()`
* @returns Resolved set of link attributes or, if the provided link field or page is empty, and
*   empty object
* @see Learn about route resolvers and link resolvers: {@link https://prismic.io/docs/routes}
*/ const asLinkAttrs = (linkFieldOrDocument, config = {})=>{
    if (linkFieldOrDocument && ("link_type" in linkFieldOrDocument ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["link"])(linkFieldOrDocument) : linkFieldOrDocument)) {
        const target = "target" in linkFieldOrDocument ? linkFieldOrDocument.target : void 0;
        const rawHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asLink"])(linkFieldOrDocument, config.linkResolver);
        const href = rawHref == null ? void 0 : rawHref;
        const isExternal = typeof href === "string" ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$lib$2f$isInternalURL$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInternalURL"])(href) : false;
        const rel = config.rel ? config.rel({
            href,
            isExternal,
            target
        }) : isExternal ? "noreferrer" : void 0;
        return {
            href,
            target,
            rel: rel == null ? void 0 : rel
        };
    }
    return {};
};
;
}),
"[project]/node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageThumbnail",
    ()=>imageThumbnail,
    "isFilled_exports",
    ()=>isFilled_exports,
    "link",
    ()=>link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$_virtual$2f$_rolldown$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/_virtual/_rolldown/runtime.js [app-rsc] (ecmascript)");
;
//#region src/helpers/isFilled.ts
var isFilled_exports = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$_virtual$2f$_rolldown$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__exportAll"])({
    color: ()=>color,
    contentRelationship: ()=>contentRelationship,
    date: ()=>date,
    embed: ()=>embed,
    geoPoint: ()=>geoPoint,
    group: ()=>group,
    image: ()=>image,
    imageThumbnail: ()=>imageThumbnail,
    integration: ()=>integration,
    integrationField: ()=>integrationField,
    integrationFields: ()=>integrationFields,
    keyText: ()=>keyText,
    link: ()=>link,
    linkToMedia: ()=>linkToMedia,
    number: ()=>number,
    repeatable: ()=>repeatable,
    richText: ()=>richText,
    select: ()=>select,
    sliceZone: ()=>sliceZone,
    table: ()=>table,
    timestamp: ()=>timestamp,
    title: ()=>title
});
/**
* Determines if a value is not nullish (i.e. not `null` or `undefined`). This is used to check if
* nullable field values are filled.
*
* @param input - The value to check.
* @returns `true` if `input` is not nullish, `false` otherwise.
*/ const isNonNullish = (input)=>{
    return input != null;
};
/**
* Determines if an array is not empty. This is used to check if array-based fields are filled.
*
* @param input - The array to check.
* @returns `true` if `input` has at least one element, `false` otherwise.
*/ const isNonEmptyArray = (input)=>{
    return !!input.length;
};
/**
* Determines if a rich text field is filled.
*
* @param field - Rich text field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const richText = (field)=>{
    if (!isNonNullish(field)) return false;
    else if (field.length === 1 && "text" in field[0]) return !!field[0].text;
    else return !!field.length;
};
/**
* Determines if a title field is filled.
*
* @param field - Title field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const title = richText;
/**
* Determines if an image thumbnail is filled.
*
* @param thumbnail - Image thumbnail to check.
* @returns `true` if the thumbnail is filled, `false` otherwise.
*/ const imageThumbnail = (thumbnail)=>{
    return isNonNullish(thumbnail) && !!thumbnail.url;
};
/**
* Determines if an image field is filled.
*
* @param field - Image field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const image = imageThumbnail;
/**
* Determines if a link field is filled.
*
* @param field - Link field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const link = (field)=>{
    return isNonNullish(field) && ("id" in field || "url" in field);
};
/**
* Determines if a link to media field is filled.
*
* @param field - Link to media field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const linkToMedia = link;
/**
* Determines if a content relationship field is filled.
*
* @param field - Content relationship field to check.
* @returns `true` if the field is filled, `false` otherwise.
*/ const contentRelationship = link;
/**
* Determines if a date field is filled.
*
* @param field - Date field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const date = isNonNullish;
/**
* Determines if a timestamp field is filled.
*
* @param field - Timestamp field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const timestamp = isNonNullish;
/**
* Determines if a color field is filled.
*
* @param field - Color field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const color = isNonNullish;
/**
* Determines if a number field is filled.
*
* @param field - Number field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const number = isNonNullish;
/**
* Determines if a key text field is filled.
*
* @param field - Key text field to check.
* @returns `true` if the field is filled, `false` otherwise.
*/ const keyText = (field)=>{
    return !!field;
};
/**
* Determines if a select field is filled.
*
* @param field - Select field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const select = isNonNullish;
/**
* Determines if an embed field is filled.
*
* @param field - Embed field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const embed = (field)=>{
    return isNonNullish(field) && !!field.embed_url;
};
/**
* Determines if a geopoint field is filled.
*
* @param field - Geopoint field to check.
* @returns `true` if the field is filled, `false` otherwise.
*/ const geoPoint = (field)=>{
    return isNonNullish(field) && "longitude" in field;
};
/**
* Determines if a table field is filled.
*
* @param field - Table field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const table = isNonNullish;
/**
* Determines if an integration field is filled.
*
* @param field - Integration field to check.
* @returns `true` if `field` is filled, `false` otherwise.
*/ const integration = isNonNullish;
/** @deprecated Renamed to `integration`. */ const integrationField = integration;
/** @deprecated Renamed to `integrationField`. */ const integrationFields = integration;
/**
* Determines if a repeatable field has at least one item.
*
* @param repeatable - Repeatable to check.
* @returns `true` if `repeatable` contains at least one item, `false`
* otherwise.
*/ const repeatable = (repeatable)=>{
    return isNonNullish(repeatable) && isNonEmptyArray(repeatable);
};
/**
* Determines if a group has at least one item.
*
* @param group - Group to check.
* @returns `true` if the group contains at least one item, `false` otherwise.
*/ const group = (group)=>{
    return isNonNullish(group) && isNonEmptyArray(group);
};
/**
* Determines if a slice zone has at least one slice.
*
* @param slices - Slice zone to check.
* @returns `true` if the slice zone contains at least one slice, `false`
* otherwise.
*/ const sliceZone = (slices)=>{
    return isNonNullish(slices) && isNonEmptyArray(slices);
};
;
}),
"[project]/node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript) <export isFilled_exports as isFilled>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFilled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilled_exports"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/@prismicio/client/dist/lib/isInternalURL.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInternalURL",
    ()=>isInternalURL
]);
//#region src/lib/isInternalURL.ts
/**
* Determines if a URL is internal or external.
*
* @param url - The URL to check if internal or external.
* @returns `true` if `url` is internal, `false` otherwise.
*/ const isInternalURL = (url)=>{
    const isInternal = /^(\/(?!\/)|#)/.test(url);
    const isSpecialLink = !isInternal && !/^https?:\/\//.test(url);
    return isInternal && !isSpecialLink;
};
;
}),
"[project]/node_modules/@prismicio/client/dist/richtext/asTree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asTree",
    ()=>asTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/types/value/richText.js [app-rsc] (ecmascript)");
;
//#region src/richtext/asTree.ts
const uuid = ()=>{
    return (++uuid.i).toString();
};
uuid.i = 0;
/**
* Parses a rich text or title field into a tree
*
* @remarks
*   This is a low level helper mainly intended to be used by higher level packages. Most users
*   aren't expected to this function directly.
* @param nodes - A rich text or title field from Prismic
* @returns Tree from given rich text or title field
*/ const asTree = (nodes)=>{
    const preparedNodes = prepareNodes(nodes);
    const children = [];
    for(let i = 0; i < preparedNodes.length; i++)children.push(nodeToTreeNode(preparedNodes[i]));
    return {
        key: uuid(),
        children
    };
};
const createTreeNode = (node, children = [])=>{
    return {
        key: uuid(),
        type: node.type,
        text: "text" in node ? node.text : void 0,
        node,
        children
    };
};
const createTextTreeNode = (text)=>{
    return createTreeNode({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].span,
        text,
        spans: []
    });
};
const prepareNodes = (nodes)=>{
    const mutNodes = nodes.slice(0);
    for(let i = 0; i < mutNodes.length; i++){
        const node = mutNodes[i];
        if (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem || node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oListItem) {
            const items = [
                node
            ];
            while(mutNodes[i + 1] && mutNodes[i + 1].type === node.type){
                items.push(mutNodes[i + 1]);
                mutNodes.splice(i, 1);
            }
            if (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem) mutNodes[i] = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].list,
                items
            };
            else mutNodes[i] = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oList,
                items
            };
        }
    }
    return mutNodes;
};
const nodeToTreeNode = (node)=>{
    if ("text" in node) return createTreeNode(node, textNodeSpansToTreeNodeChildren(node.spans, node));
    if ("items" in node) {
        const children = [];
        for(let i = 0; i < node.items.length; i++)children.push(nodeToTreeNode(node.items[i]));
        return createTreeNode(node, children);
    }
    return createTreeNode(node);
};
const textNodeSpansToTreeNodeChildren = (spans, node, parentSpan)=>{
    if (!spans.length) return [
        createTextTreeNode(node.text)
    ];
    const mutSpans = spans.slice(0);
    mutSpans.sort((a, b)=>a.start - b.start || b.end - a.end);
    const children = [];
    for(let i = 0; i < mutSpans.length; i++){
        const span = mutSpans[i];
        const parentSpanStart = parentSpan && parentSpan.start || 0;
        const spanStart = span.start - parentSpanStart;
        const spanEnd = span.end - parentSpanStart;
        const text = node.text.slice(spanStart, spanEnd);
        const childSpans = [];
        for(let j = i; j < mutSpans.length; j++){
            const siblingSpan = mutSpans[j];
            if (siblingSpan !== span) {
                if (siblingSpan.start >= span.start && siblingSpan.end <= span.end) {
                    childSpans.push(siblingSpan);
                    mutSpans.splice(j, 1);
                    j--;
                } else if (siblingSpan.start < span.end && siblingSpan.end > span.start) {
                    childSpans.push({
                        ...siblingSpan,
                        end: span.end
                    });
                    mutSpans[j] = {
                        ...siblingSpan,
                        start: span.end
                    };
                }
            }
        }
        if (i === 0 && spanStart > 0) children.push(createTextTreeNode(node.text.slice(0, spanStart)));
        const spanWithText = {
            ...span,
            text
        };
        children.push(createTreeNode(spanWithText, textNodeSpansToTreeNodeChildren(childSpans, {
            ...node,
            text
        }, span)));
        if (spanEnd < node.text.length) children.push(createTextTreeNode(node.text.slice(spanEnd, mutSpans[i + 1] ? mutSpans[i + 1].start - parentSpanStart : void 0)));
    }
    return children;
};
;
}),
"[project]/node_modules/@prismicio/client/dist/richtext/composeSerializers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeSerializers",
    ()=>composeSerializers
]);
//#region src/richtext/composeSerializers.ts
/**
* Takes an array of serializers and returns a serializer applying provided serializers sequentially
* until a result is returned
*
* @remarks
*   This is a low level helper mainly intended to be used by higher level packages Most users
*   aren't expected to this function directly
* @typeParam SerializerReturnType - Return type of serializers
* @param serializers - Serializers to compose
* @returns Composed serializer
*/ const composeSerializers = (...serializers)=>{
    return (...args)=>{
        for(let i = 0; i < serializers.length; i++){
            const serializer = serializers[i];
            if (serializer) {
                const res = serializer(...args);
                if (res != null) return res;
            }
        }
    };
};
;
}),
"[project]/node_modules/@prismicio/client/dist/richtext/serialize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$asTree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/richtext/asTree.js [app-rsc] (ecmascript)");
;
//#region src/richtext/serialize.ts
/**
* Serializes a rich text field with a given serializer.
*
* @remarks
*   This is a low-level helper mainly intended to be used by higher-level packages. Most users
*   aren't expected to use this function directly.
* @typeParam SerializerReturnType - Return type of the serializer.
* @param richTextField - A rich text field from Prismic.
* @param serializer - A function serializer to apply.
* @returns An array of serialized nodes.
* @see Learn how to work with rich text fields: {@link https://prismic.io/docs/fields/rich-text}
*/ const serialize = (richTextField, serializer)=>{
    return serializeTreeNodes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$asTree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asTree"])(richTextField).children, serializer);
};
const serializeTreeNodes = (nodes, serializer)=>{
    const serializedTreeNodes = [];
    for(let i = 0; i < nodes.length; i++){
        const treeNode = nodes[i];
        const serializedTreeNode = serializer(treeNode.type, treeNode.node, treeNode.text, serializeTreeNodes(treeNode.children, serializer), treeNode.key);
        if (serializedTreeNode != null) serializedTreeNodes.push(serializedTreeNode);
    }
    return serializedTreeNodes;
};
;
}),
"[project]/node_modules/@prismicio/client/dist/richtext/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextReversedNodeType",
    ()=>RichTextReversedNodeType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/types/value/richText.js [app-rsc] (ecmascript)");
;
//#region src/richtext/types.ts
const RichTextReversedNodeType = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].listItem]: "listItem",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oListItem]: "oListItem",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].list]: "list",
    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$types$2f$value$2f$richText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextNodeType"].oList]: "oList"
};
;
}),
"[project]/node_modules/@prismicio/client/dist/richtext/wrapMapSerializer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapMapSerializer",
    ()=>wrapMapSerializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/richtext/types.js [app-rsc] (ecmascript)");
;
//#region src/richtext/wrapMapSerializer.ts
/**
* Wraps a map serializer into a regular function serializer
*
* @remarks
*   This is a low level helper mainly intended to be used by higher level packages Most users
*   aren't expected to this function directly
* @typeParam SerializerReturnType - Return type of the map serializer
* @param mapSerializer - Map serializer to wrap
* @returns A regular function serializer
*/ const wrapMapSerializer = (mapSerializer)=>{
    return (type, node, text, children, key)=>{
        const tagSerializer = mapSerializer[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RichTextReversedNodeType"][type] || type];
        if (tagSerializer) return tagSerializer({
            type,
            node,
            text,
            children,
            key
        });
    };
};
;
}),
"[project]/node_modules/@prismicio/client/dist/types/value/richText.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextNodeType",
    ()=>RichTextNodeType
]);
//#region src/types/value/richText.ts
/**
* Types enum for RichTextNodes
*
* @see More details: {@link https://prismic.io/docs/rich-text-title}
*/ const RichTextNodeType = {
    heading1: "heading1",
    heading2: "heading2",
    heading3: "heading3",
    heading4: "heading4",
    heading5: "heading5",
    heading6: "heading6",
    paragraph: "paragraph",
    preformatted: "preformatted",
    strong: "strong",
    em: "em",
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    image: "image",
    embed: "embed",
    hyperlink: "hyperlink",
    label: "label",
    span: "span"
};
;
}),
"[project]/node_modules/@prismicio/react/dist/PrismicLink.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrismicLink",
    ()=>PrismicLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLinkAttrs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/helpers/asLinkAttrs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esm$2d$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/esm-env/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DEV$3e$__ = __turbopack_context__.i("[project]/node_modules/esm-env/true.js [app-rsc] (ecmascript) <export default as DEV>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
;
;
;
;
;
//#region src/PrismicLink.tsx
/** The default component rendered for internal and external links. */ const defaultComponent = "a";
/**
* Renders a link from a Prismic link field or page.
*
* @example
* 	```tsx
* 	<PrismicLink field={slice.primary.link}>Click here</PrismicLink>;
* 	```
*
* @see Learn how to display links and use variants for styling: {@link https://prismic.io/docs/fields/link}
*/ const PrismicLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(function PrismicLink(props, ref) {
    const { field, document: doc, linkResolver, internalComponent, externalComponent, children, ...restProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DEV$3e$__["DEV"]) {
        if (field) {
            if (!field.link_type) {
                console.error(`[PrismicLink] This "field" prop value caused an error to be thrown.\n`, field);
                throw new Error(`[PrismicLink] The provided field is missing required properties to properly render a link. The link will not render. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`);
            } else if (("text" in field ? Object.keys(field).length > 2 : Object.keys(field).length > 1) && !("url" in field || "uid" in field || "id" in field)) console.warn(`[PrismicLink] The provided field is missing required properties to properly render a link. The link may not render correctly. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`, field);
        } else if (doc) {
            if (!("url" in doc || "id" in doc)) console.warn(`[PrismicLink] The provided document is missing required properties to properly render a link. The link may not render correctly. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("missing-link-properties")}`, doc);
        }
    }
    const { href: computedHref, rel: computedRel, ...attrs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$asLinkAttrs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asLinkAttrs"])(field ?? doc, {
        linkResolver,
        rel: typeof restProps.rel === "function" ? restProps.rel : void 0
    });
    let rel = computedRel;
    if ("rel" in restProps && typeof restProps.rel !== "function") rel = restProps.rel;
    const href = ("href" in restProps ? restProps.href : computedHref) || "";
    const InternalComponent = internalComponent || defaultComponent;
    const ExternalComponent = externalComponent || defaultComponent;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(href ? isInternalURL(href) ? InternalComponent : ExternalComponent : InternalComponent, {
        ref,
        ...attrs,
        ...restProps,
        href,
        rel,
        children: "children" in props ? children : field?.text
    });
});
/**
* Determines if a URL is internal or external.
*
* @param url - The URL to check if internal or external.
* @returns `true` if `url` is internal, `false` otherwise.
*/ function isInternalURL(url) {
    const isInternal = /^(\/(?!\/)|#)/.test(url);
    const isSpecialLink = !isInternal && !/^https?:\/\//.test(url);
    return isInternal && !isSpecialLink;
}
;
}),
"[project]/node_modules/@prismicio/react/dist/PrismicRichText.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrismicRichText",
    ()=>PrismicRichText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/PrismicLink.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__isFilled_exports__as__isFilled$3e$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/helpers/isFilled.js [app-rsc] (ecmascript) <export isFilled_exports as isFilled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esm$2d$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/esm-env/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DEV$3e$__ = __turbopack_context__.i("[project]/node_modules/esm-env/true.js [app-rsc] (ecmascript) <export default as DEV>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$composeSerializers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/richtext/composeSerializers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/richtext/serialize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$wrapMapSerializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/client/dist/richtext/wrapMapSerializer.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
//#region src/PrismicRichText.tsx
const getDir = (node)=>{
    if ("direction" in node && node.direction === "rtl") return "rtl";
};
const createDefaultSerializer = (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$wrapMapSerializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapMapSerializer"])({
        heading1: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                dir: getDir(node),
                children
            }, key),
        heading2: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h2", {
                dir: getDir(node),
                children
            }, key),
        heading3: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                dir: getDir(node),
                children
            }, key),
        heading4: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                dir: getDir(node),
                children
            }, key),
        heading5: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                dir: getDir(node),
                children
            }, key),
        heading6: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h6", {
                dir: getDir(node),
                children
            }, key),
        paragraph: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                dir: getDir(node),
                children
            }, key),
        preformatted: ({ node, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("pre", {
                children: node.text
            }, key),
        strong: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                children
            }, key),
        em: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("em", {
                children
            }, key),
        listItem: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                dir: getDir(node),
                children
            }, key),
        oListItem: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                dir: getDir(node),
                children
            }, key),
        list: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                children
            }, key),
        oList: ({ children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("ol", {
                children
            }, key),
        image: ({ node, key })=>{
            const img = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("img", {
                src: node.url,
                alt: node.alt ?? void 0,
                "data-copyright": node.copyright ? node.copyright : void 0
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: "block-img",
                children: node.linkTo ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicLink"], {
                    linkResolver: args.linkResolver,
                    internalComponent: args.internalLinkComponent,
                    externalComponent: args.externalLinkComponent,
                    field: node.linkTo,
                    children: img
                }) : img
            }, key);
        },
        embed: ({ node, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                "data-oembed": node.oembed.embed_url,
                "data-oembed-type": node.oembed.type,
                "data-oembed-provider": node.oembed.provider_name,
                dangerouslySetInnerHTML: {
                    __html: node.oembed.html ?? ""
                }
            }, key),
        hyperlink: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicLink"], {
                field: node.data,
                linkResolver: args.linkResolver,
                internalComponent: args.internalLinkComponent,
                externalComponent: args.externalLinkComponent,
                children
            }, key),
        label: ({ node, children, key })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: node.data.label,
                children
            }, key),
        span: ({ text, key })=>{
            const result = [];
            let i = 0;
            for (const line of text.split("\n")){
                if (i > 0) result.push(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("br", {}, `${i}__break`));
                result.push(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: line
                }, `${i}__line`));
                i++;
            }
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: result
            }, key);
        }
    });
/**
* Renders content from a Prismic rich text field as React components.
*
* @example
* 	```tsx
* 	<PrismicRichText field={slice.primary.text} />;
* 	```
*
* @see Learn how to style rich text, use custom components, and use labels for custom formatting: {@link https://prismic.io/docs/fields/rich-text}
*/ const PrismicRichText = (props)=>{
    const { linkResolver, field, fallback, components, externalLinkComponent, internalLinkComponent, ...restProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esm$2d$env$2f$true$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DEV$3e$__["DEV"]) {
        if ("className" in restProps) console.warn(`[PrismicRichText] className cannot be passed to <PrismicRichText> since it renders an array without a wrapping component. For more details, see ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$lib$2f$devMsg$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devMsg"])("classname-is-not-a-valid-prop")}.`, field);
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$helpers$2f$isFilled$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__isFilled_exports__as__isFilled$3e$__["isFilled"].richText(field)) return fallback != null ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: fallback
    }) : null;
    const serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$composeSerializers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["composeSerializers"])(typeof components === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$wrapMapSerializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrapMapSerializer"])(components) : components, createDefaultSerializer({
        linkResolver,
        internalLinkComponent,
        externalLinkComponent
    }));
    const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$client$2f$dist$2f$richtext$2f$serialize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serialize"])(field, (type, node, text, children, key)=>{
        const result = serializer(type, node, text, children, key);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidElement"])(result) && result.key == null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneElement"])(result, {
            key
        });
        else return result;
    });
    if (!serialized) return fallback != null ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: fallback
    }) : null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: serialized
    });
};
;
}),
"[project]/node_modules/@prismicio/react/dist/lib/devMsg.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "devMsg",
    ()=>devMsg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/package.js [app-rsc] (ecmascript)");
;
//#region src/lib/devMsg.ts
/**
* Returns a `prismic.dev/msg` URL for a given message slug.
*
* @example
* 	```ts
* 	devMsg("missing-param");
* 	// => "https://prismic.dev/msg/react/v1.2.3/missing-param"
* 	```
*
* @param slug - Slug for the message. This corresponds to a Markdown file in the Git repository's
*   `/messages` directory.
* @returns The `prismic.dev/msg` URL for the given slug.
*/ function devMsg(slug) {
    return `https://prismic.dev/msg/react/v${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"]}/${slug}`;
}
;
}),
"[project]/node_modules/@prismicio/react/dist/package.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
//#region package.json
var version = "3.4.1";
;
}),
"[project]/slices/MediaSideIntro/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/PrismicRichText.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/next/dist/index.cjs [app-rsc] (ecmascript)");
;
;
;
const MediaSideIntro = ({ slice })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-slice-type": slice.slice_type,
        "data-slice-variation": slice.variation,
        className: "bg-[#EBF7F8] py-16 md:py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8 max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-4 lg:col-span-3 flex justify-center md:justify-start",
                        children: slice.primary.media && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-2xl border border-teal-100 shadow-sm w-full max-w-xs flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicNextImage"], {
                                field: slice.primary.media,
                                className: "w-full h-auto max-h-32 object-contain",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/slices/MediaSideIntro/index.tsx",
                                lineNumber: 23,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/slices/MediaSideIntro/index.tsx",
                            lineNumber: 22,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/slices/MediaSideIntro/index.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-8 lg:col-span-9 space-y-4 text-left",
                        children: [
                            slice.primary.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl md:text-4xl font-extrabold text-[#0B2545] leading-tight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicRichText"], {
                                    field: slice.primary.title
                                }, void 0, false, {
                                    fileName: "[project]/slices/MediaSideIntro/index.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/slices/MediaSideIntro/index.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            slice.primary.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-slate-600 text-base md:text-lg leading-relaxed space-y-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicRichText"], {
                                    field: slice.primary.description
                                }, void 0, false, {
                                    fileName: "[project]/slices/MediaSideIntro/index.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/slices/MediaSideIntro/index.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/slices/MediaSideIntro/index.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/slices/MediaSideIntro/index.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/slices/MediaSideIntro/index.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/slices/MediaSideIntro/index.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MediaSideIntro;
}),
"[project]/slices/MediaSideIntro/index.tsx [app-rsc] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/slices/MediaSideIntro/index.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=_0lb0by2._.js.map