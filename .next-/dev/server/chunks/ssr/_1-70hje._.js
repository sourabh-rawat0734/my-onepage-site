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
"[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.mjs from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/lucide-react/dist/esm/Icon.mjs", "default");
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.mjs <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/lucide-react/dist/esm/Icon.mjs <module evaluation>", "default");
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Activity
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }
    ]
];
const Activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("activity", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-rsc] (ecmascript) <export default as Activity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/dna.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Dna
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m10 16 1.5 1.5",
            key: "11lckj"
        }
    ],
    [
        "path",
        {
            d: "m14 8-1.5-1.5",
            key: "1ohn8i"
        }
    ],
    [
        "path",
        {
            d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",
            key: "80uv8i"
        }
    ],
    [
        "path",
        {
            d: "m16.5 10.5 1 1",
            key: "696xn5"
        }
    ],
    [
        "path",
        {
            d: "m17 6-2.891-2.891",
            key: "xu6p2f"
        }
    ],
    [
        "path",
        {
            d: "M2 15c6.667-6 13.333 0 20-6",
            key: "1pyr53"
        }
    ],
    [
        "path",
        {
            d: "m20 9 .891.891",
            key: "3xwk7g"
        }
    ],
    [
        "path",
        {
            d: "M3.109 14.109 4 15",
            key: "q76aoh"
        }
    ],
    [
        "path",
        {
            d: "m6.5 12.5 1 1",
            key: "cs35ky"
        }
    ],
    [
        "path",
        {
            d: "m7 18 2.891 2.891",
            key: "1sisit"
        }
    ],
    [
        "path",
        {
            d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993",
            key: "q3hbxp"
        }
    ]
];
const Dna = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("dna", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/dna.mjs [app-rsc] (ecmascript) <export default as Dna>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dna",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dna.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>HeartPulse
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0"
        }
    ],
    [
        "path",
        {
            d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
            key: "auskq0"
        }
    ]
];
const HeartPulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("heart-pulse", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-rsc] (ecmascript) <export default as HeartPulse>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeartPulse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldCheck
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("shield-check", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-rsc] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.31.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-rsc] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
"[project]/slices/IconHeadlineColumns/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/react/dist/PrismicRichText.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prismicio/next/dist/index.cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dna.mjs [app-rsc] (ecmascript) <export default as Dna>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-rsc] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-rsc] (ecmascript) <export default as HeartPulse>");
;
;
;
;
// Fallback Lucide icons array mapped by index if no Prismic image icon is provided
const DEFAULT_ICONS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"]
];
const IconHeadlineColumns = ({ slice })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-slice-type": slice.slice_type,
        "data-slice-variation": slice.variation,
        className: "bg-[#D8F3F5] py-12 md:py-16 border-y border-teal-100/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 md:px-8 max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10",
                children: slice.primary.items?.map((item, index)=>{
                    const FallbackIcon = DEFAULT_ICONS[index % DEFAULT_ICONS.length];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-2 transition-transform duration-200 hover:translate-y-[-2px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 md:w-11 md:h-11 shrink-0 flex items-center justify-center rounded-2xl bg-[#00A896]/15 text-[#00A896] p-2.5 shadow-sm",
                                children: item.icon?.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$next$2f$dist$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicNextImage"], {
                                    field: item.icon,
                                    alt: "",
                                    className: "w-full h-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                    lineNumber: 39,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FallbackIcon, {
                                    className: "w-6 h-6 stroke-[2.25]"
                                }, void 0, false, {
                                    fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                    lineNumber: 45,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                lineNumber: 37,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 flex-1",
                                children: [
                                    item.headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-extrabold text-[#0B2545] text-lg leading-tight",
                                        children: typeof item.headline === "string" ? item.headline : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicRichText"], {
                                            field: item.headline
                                        }, void 0, false, {
                                            fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                            lineNumber: 57,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                        lineNumber: 53,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.subheadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-slate-700 leading-normal",
                                        children: typeof item.subheadline === "string" ? item.subheadline : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicRichText"], {
                                            field: item.subheadline
                                        }, void 0, false, {
                                            fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                            lineNumber: 68,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                        lineNumber: 64,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs italic font-medium text-[#00A896]",
                                        children: typeof item.description === "string" ? item.description : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prismicio$2f$react$2f$dist$2f$PrismicRichText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismicRichText"], {
                                            field: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                            lineNumber: 79,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                        lineNumber: 75,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                        lineNumber: 32,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/slices/IconHeadlineColumns/index.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = IconHeadlineColumns;
}),
"[project]/slices/IconHeadlineColumns/index.tsx [app-rsc] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/slices/IconHeadlineColumns/index.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=_1-70hje._.js.map