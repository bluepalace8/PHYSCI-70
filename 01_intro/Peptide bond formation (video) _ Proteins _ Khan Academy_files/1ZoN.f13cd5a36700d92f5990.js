(window.webpackJsonp=window.webpackJsonp||[]).push([["1ZoN"],{hvTQ:function(t,e,i){"use strict";var s=i("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("9HHG")).default.compile('<div class="subtitles-container desktop-only">\n    <ul itemprop="transcript" class="subtitles">\n        {{#each subtitles}}\n            {{#if kaIsValid}}\n            <li data-milliseconds="{{startTime}}">\n                <a href="javascript:void(0)" data-fmttime="{{formatTimestamp startTime}}">{{text}}</a>\n            </li>\n            {{/if}}\n        {{/each}}\n    </ul>\n</div>');e.default=n},jPIJ:function(t,e,i){"use strict";var s=i("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.VideoTranscript=e.InteractiveTranscriptView=void 0;var n=s(i("96rG")),r=s(i("ghyX")),a=s(i("5pch")),o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=d(e);if(i&&i.has(t))return i.get(t);var s={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var a=n?Object.getOwnPropertyDescriptor(t,r):null;a&&(a.get||a.set)?Object.defineProperty(s,r,a):s[r]=t[r]}s.default=t,i&&i.set(t,s);return s}(i("4PhQ")),l=s(i("hvTQ")),u=i("H4Y1"),c=i("z39W");function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(d=function(t){return t?i:e})(t)}const f=r.default.Model.extend({hasValid:function(){const t=this.get("subtitles").length;let e=!1;for(let i=0;i<t;i++)if(this.get("subtitles")[i].kaIsValid){e=!0;break}return o.default.log("Transcript data received.",{hasValidEntries:e?"Some":"No"}),e},sync:function(t,e,i){if("read"===t)return(0,u.getSubtitlesForVideo)((0,c.getUnsafeGqlClient)(),this.get("youtubeId"),this.get("kaLocale")||"en").then((t=>0!==t.length&&null!=i&&i.success?i.success(t):null!=i&&i.error?i.error():void 0));o.default.error("Unsupported method for sync in VideoTranscript",o.Errors.NotImplemented,{sentryData:{contexts:{extras:{method:t}}}})},parse:function(t){const e={subtitles:[]};return a.default.isObject(t)&&(e.subtitles=t),e}});e.VideoTranscript=f;const h=r.default.View.extend({autoscroll:!0,events:{"click a":"onSubtitleClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave"},render:function(){return this.model&&this.$el.html((0,l.default)({subtitles:this.model.get("subtitles")})),this},onMouseEnter:function(t){this.autoscroll=!1},onMouseLeave:function(){this.autoscroll=!0},onSubtitleClick:function(t){const e=(0,n.default)(t.target).parent(),i=parseFloat(e.data("milliseconds"))/1e3;isNaN(i)||this.trigger("subtitleSelection",i)},showWithSlide:function(){this.$(".subtitles-container").slideDown("fast")},hideWithSlide:function(){this.$(".subtitles-container").slideUp("fast")},onPlayerUpdate:function(t){let e,i;const s=this.$("li"),r=s.length;let a;for(a=0;a<r;a++)if(e=parseFloat((0,n.default)(s[a]).data("milliseconds"))/1e3,!isNaN(e)&&e>t){i=0===a?s[0]:s[a-1];break}(0,n.default)(i).is(".active")||this._setActiveSubtitle(i||s[r-1])},_setActiveSubtitle:function(t){let e,i;if(this.$(".active").removeClass("active"),(0,n.default)(t).addClass("active"),this.autoscroll){e=t.offsetTop,i=(0,n.default)(t).height();const s=Math.min(3*i,this.$(".subtitles").height()-i);this.$(".subtitles").stop().animate({scrollTop:e-s})}}});e.InteractiveTranscriptView=h}}]);
//# sourceMappingURL=../../sourcemaps/en/1ZoN.f13cd5a36700d92f5990.js.map