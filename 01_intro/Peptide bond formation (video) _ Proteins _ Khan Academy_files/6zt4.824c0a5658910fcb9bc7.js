(window.webpackJsonp=window.webpackJsonp||[]).push([["6zt4"],{Zfii:function(e,t,o){"use strict";var r=o("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.QUERY_FOR_TESTING=void 0,t.default=function(e){const t=e.path.startsWith("/")?e.path.substring(1):e.path,{queryParams:o={}}=e,r=(0,s.default)((0,a.default)({},e.queryParams,{lang:d.default.kaLocale})),n="1"===o.modal,l=function(e){if(void 0===e.follow_redirects)return!u.default.isServerSide();return"1"===e.follow_redirects}(o),c={path:t,queryParams:r,isModal:n,followRedirects:l,countryCode:d.default.remoteCountry};return function(e,t){return(0,i.getUnsafeGqlClient)().cachedQuery(e,{variables:t,fastlyCaching:"PERSIST_UNTIL_PUBLISH"}).then((e=>{var t;return JSON.parse((null==(t=e.data)?void 0:t.contentJson)||"")}))}(P(t,n),c)},t.getContentQuery=P;var a=r(o("pVnL")),n=r(o("lTCR")),l=o("8r+/"),s=r(o("gXb0")),i=o("z39W"),d=r(o("Q8Wn")),u=r(o("FCtg"));let c,$,y,p,f,g=e=>e;const C=(0,l.gqlOp)((0,n.default)(c||(c=g`
    query FetchContentData(
        $path: String!
        $queryParams: String!
        $isModal: Boolean
        $followRedirects: Boolean
        $countryCode: String!
    ) {
        contentJson: curatedContentLibraryJson(
            path: $path
            queryParams: $queryParams
            isModal: $isModal
            followRedirects: $followRedirects
            countryCode: $countryCode
        )
    }
`))),q=C;t.QUERY_FOR_TESTING=q;const h=(0,l.gqlOp)((0,n.default)($||($=g`
    query FetchArticleContentData(
        $path: String!
        $queryParams: String!
        $isModal: Boolean
        $followRedirects: Boolean
        $countryCode: String!
    ) {
        contentJson: curatedArticleContentLibraryJson(
            path: $path
            queryParams: $queryParams
            isModal: $isModal
            followRedirects: $followRedirects
            countryCode: $countryCode
        )
    }
`))),R=(0,l.gqlOp)((0,n.default)(y||(y=g`
    query FetchVideoContentData(
        $path: String!
        $queryParams: String!
        $isModal: Boolean
        $followRedirects: Boolean
        $countryCode: String!
    ) {
        contentJson: curatedVideoContentLibraryJson(
            path: $path
            queryParams: $queryParams
            isModal: $isModal
            followRedirects: $followRedirects
            countryCode: $countryCode
        )
    }
`))),m=(0,l.gqlOp)((0,n.default)(p||(p=g`
    query FetchExerciseContentData(
        $path: String!
        $queryParams: String!
        $isModal: Boolean
        $followRedirects: Boolean
        $countryCode: String!
    ) {
        contentJson: curatedExerciseContentLibraryJson(
            path: $path
            queryParams: $queryParams
            isModal: $isModal
            followRedirects: $followRedirects
            countryCode: $countryCode
        )
    }
`))),w=(0,l.gqlOp)((0,n.default)(f||(f=g`
    query FetchProgrammingContentData(
        $path: String!
        $queryParams: String!
        $isModal: Boolean
        $followRedirects: Boolean
        $countryCode: String!
    ) {
        contentJson: curatedProgrammingContentLibraryJson(
            path: $path
            queryParams: $queryParams
            isModal: $isModal
            followRedirects: $followRedirects
            countryCode: $countryCode
        )
    }
`)));function P(e,t){return t?C:RegExp(".*/a/.*").test(e)?h:RegExp(".*/v/.*").test(e)?R:RegExp(".*/e/.*").test(e)?m:RegExp(".*/(?:pc|pi|pp|pt)/.*").test(e)?w:C}}}]);
//# sourceMappingURL=../../sourcemaps/en/6zt4.824c0a5658910fcb9bc7.js.map