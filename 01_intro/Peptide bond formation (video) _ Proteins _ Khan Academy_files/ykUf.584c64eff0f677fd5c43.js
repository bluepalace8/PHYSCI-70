(window.webpackJsonp=window.webpackJsonp||[]).push([["ykUf"],{ghyX:function(t,e,i){"use strict";(function(){var s,n=this,r=n.Backbone,a=[],h=a.push,o=a.slice,u=a.splice;t.exports&&(e=t.exports),(s=n.Backbone=e).VERSION="1.0.0";var c=i("5pch"),l=i("96rG");s.$=l||n.jQuery||n.Zepto||n.ender||n.$,s.noConflict=function(){return n.Backbone=r,this},s.emulateHTTP=!1,s.emulateJSON=!1;var d=s.Events={on:function(t,e,i){return p(this,"on",t,[e,i])&&e?(this._events||(this._events={}),(this._events[t]||(this._events[t]=[])).push({callback:e,context:i,ctx:i||this}),this):this},once:function(t,e,i){if(!p(this,"once",t,[e,i])||!e)return this;var s=this,n=c.once((function(){s.off(t,n),e.apply(this,arguments)}));return n._callback=e,this.on(t,n,i)},off:function(t,e,i){var s,n,r,a,h,o,u,l;if(!this._events||!p(this,"off",t,[e,i]))return this;if(!t&&!e&&!i)return this._events={},this;for(h=0,o=(a=t?[t]:c.keys(this._events)).length;h<o;h++)if(t=a[h],r=this._events[t]){if(this._events[t]=s=[],e||i)for(u=0,l=r.length;u<l;u++)n=r[u],(e&&e!==n.callback&&e!==n.callback._callback||i&&i!==n.context)&&s.push(n);s.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=o.call(arguments,1);if(!p(this,"trigger",t,e))return this;var i=this._events[t],s=this._events.all;return i&&g(i,e),s&&g(s,arguments),this},stopListening:function(t,e,i){var s=this._listeners;if(!s)return this;var n=!e&&!i;for(var r in"object"==typeof e&&(i=this),t&&((s={})[t._listenerId]=t),s)s[r].off(e,i,this),n&&delete this._listeners[r];return this}},f=/\s+/,p=function(t,e,i,s){if(!i)return!0;if("object"==typeof i){for(var n in i)t[e].apply(t,[n,i[n]].concat(s));return!1}if(f.test(i)){for(var r=i.split(f),a=0,h=r.length;a<h;a++)t[e].apply(t,[r[a]].concat(s));return!1}return!0},g=function(t,e){var i,s=-1,n=t.length,r=e[0],a=e[1],h=e[2];switch(e.length){case 0:for(;++s<n;)(i=t[s]).callback.call(i.ctx);return;case 1:for(;++s<n;)(i=t[s]).callback.call(i.ctx,r);return;case 2:for(;++s<n;)(i=t[s]).callback.call(i.ctx,r,a);return;case 3:for(;++s<n;)(i=t[s]).callback.call(i.ctx,r,a,h);return;default:for(;++s<n;)(i=t[s]).callback.apply(i.ctx,e)}};c.each({listenTo:"on",listenToOnce:"once"},(function(t,e){d[e]=function(e,i,s){return(this._listeners||(this._listeners={}))[e._listenerId||(e._listenerId=c.uniqueId("l"))]=e,"object"==typeof i&&(s=this),e[t](i,s,this),this}})),d.bind=d.on,d.unbind=d.off,c.extend(s,d);var v=s.Model=function(t,e){var i,s=t||{};e||(e={}),this.cid=c.uniqueId("c"),this.attributes={},c.extend(this,c.pick(e,m)),e.parse&&(s=this.parse(s,e)||{}),(i=c.result(this,"defaults"))&&(s=c.defaults({},s,i)),this.set(s,e),this.changed={},this.initialize.apply(this,arguments)},m=["url","urlRoot","collection"];c.extend(v.prototype,d,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return c.clone(this.attributes)},sync:function(){return s.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return c.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,i){var s,n,r,a,h,o,u,l;if(null==t)return this;if("object"==typeof t?(n=t,i=e):(n={})[t]=e,i||(i={}),!this._validate(n,i))return!1;for(s in r=i.unset,h=i.silent,a=[],o=this._changing,this._changing=!0,o||(this._previousAttributes=c.clone(this.attributes),this.changed={}),l=this.attributes,u=this._previousAttributes,this.idAttribute in n&&(this.id=n[this.idAttribute]),n)e=n[s],c.isEqual(l[s],e)||a.push(s),c.isEqual(u[s],e)?delete this.changed[s]:this.changed[s]=e,r?delete l[s]:l[s]=e;if(!h){a.length&&(this._pending=!0);for(var d=0,f=a.length;d<f;d++)this.trigger("change:"+a[d],this,l[a[d]],i)}if(o)return this;if(!h)for(;this._pending;)this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,c.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,c.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!c.isEmpty(this.changed):c.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&c.clone(this.changed);var e,i=!1,s=this._changing?this._previousAttributes:this.attributes;for(var n in t)c.isEqual(s[n],e=t[n])||((i||(i={}))[n]=e);return i},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return c.clone(this._previousAttributes)},fetch:function(t){void 0===(t=t?c.clone(t):{}).parse&&(t.parse=!0);var e=this,i=t.success;return t.success=function(s){if(!e.set(e.parse(s,t),t))return!1;i&&i(e,s,t),e.trigger("sync",e,s,t)},j(this,t),this.sync("read",this,t)},save:function(t,e,i){var s,n,r,a=this.attributes;if(null==t||"object"==typeof t?(s=t,i=e):(s={})[t]=e,s&&(!i||!i.wait)&&!this.set(s,i))return!1;if(i=c.extend({validate:!0},i),!this._validate(s,i))return!1;s&&i.wait&&(this.attributes=c.extend({},a,s)),void 0===i.parse&&(i.parse=!0);var h=this,o=i.success;return i.success=function(t){h.attributes=a;var e=h.parse(t,i);if(i.wait&&(e=c.extend(s||{},e)),c.isObject(e)&&!h.set(e,i))return!1;o&&o(h,t,i),h.trigger("sync",h,t,i)},j(this,i),"patch"===(n=this.isNew()?"create":i.patch?"patch":"update")&&(i.attrs=s),r=this.sync(n,this,i),s&&i.wait&&(this.attributes=a),r},destroy:function(t){t=t?c.clone(t):{};var e=this,i=t.success,s=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(n){(t.wait||e.isNew())&&s(),i&&i(e,n,t),e.isNew()||e.trigger("sync",e,n,t)},this.isNew())return t.success(),!1;j(this,t);var n=this.sync("delete",this,t);return t.wait||s(),n},url:function(){var t=c.result(this,"urlRoot")||c.result(this.collection,"url")||U();return this.isNew()?t:t+("/"===t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(t){return this._validate({},c.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=c.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;return!i||(this.trigger("invalid",this,i,c.extend(e||{},{validationError:i})),!1)}});c.each(["keys","values","pairs","invert","pick","omit"],(function(t){v.prototype[t]=function(){var e=o.call(arguments);return e.unshift(this.attributes),c[t].apply(c,e)}}));var y=s.Collection=function(t,e){e||(e={}),e.url&&(this.url=e.url),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,c.extend({silent:!0},e))},_={add:!0,remove:!0,merge:!0},b={add:!0,merge:!1,remove:!1};c.extend(y.prototype,d,{model:v,initialize:function(){},toJSON:function(t){return this.map((function(e){return e.toJSON(t)}))},sync:function(){return s.sync.apply(this,arguments)},add:function(t,e){return this.set(t,c.defaults(e||{},b))},remove:function(t,e){var i,s,n,r;for(e||(e={}),i=0,s=(t=c.isArray(t)?t.slice():[t]).length;i<s;i++)(r=this.get(t[i]))&&(delete this._byId[r.id],delete this._byId[r.cid],n=this.indexOf(r),this.models.splice(n,1),this.length--,e.silent||(e.index=n,r.trigger("remove",r,this,e)),this._removeReference(r));return this},set:function(t,e){var i,s,n,r,a;(e=c.defaults(e||{},_)).parse&&(t=this.parse(t,e)),c.isArray(t)||(t=t?[t]:[]);var o=e.at,l=this.comparator&&null==o&&!1!==e.sort,d=c.isString(this.comparator)?this.comparator:null,f=[],p=[],g={};for(i=0,s=t.length;i<s;i++)(n=this._prepareModel(t[i],e))&&((r=this.get(n))?(e.remove&&(g[r.cid]=!0),e.merge&&(r.set(n.attributes,e),l&&!a&&r.hasChanged(d)&&(a=!0))):e.add&&(f.push(n),n.on("all",this._onModelEvent,this),this._byId[n.cid]=n,null!=n.id&&(this._byId[n.id]=n)));if(e.remove){for(i=0,s=this.length;i<s;++i)g[(n=this.models[i]).cid]||p.push(n);p.length&&this.remove(p,e)}if(f.length&&(l&&(a=!0),this.length+=f.length,null!=o?u.apply(this.models,[o,0].concat(f)):h.apply(this.models,f)),a&&this.sort({silent:!0}),e.silent)return this;for(i=0,s=f.length;i<s;i++)(n=f[i]).trigger("add",n,this,e);return a&&this.trigger("sort",this,e),this},reset:function(t,e){e||(e={});for(var i=0,s=this.models.length;i<s;i++)this._removeReference(this.models[i]);return e.previousModels=this.models,this._reset(),this.add(t,c.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),this},push:function(t,e){return t=this._prepareModel(t,e),this.add(t,c.extend({at:this.length},e)),t},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return t=this._prepareModel(t,e),this.add(t,c.extend({at:0},e)),t},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(null!=t)return this._byId[null!=t.id?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){return c.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"]((function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0}))},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),c.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(c.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},sortedIndex:function(t,e,i){e||(e=this.comparator);var s=c.isFunction(e)?e:function(t){return t.get(e)};return c.sortedIndex(this.models,t,s,i)},pluck:function(t){return c.invoke(this.models,"get",t)},fetch:function(t){void 0===(t=t?c.clone(t):{}).parse&&(t.parse=!0);var e=t.success,i=this;return t.success=function(s){var n=t.reset?"reset":"set";i[n](s,t),e&&e(i,s,t),i.trigger("sync",i,s,t)},j(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?c.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var i=this,s=e.success;return e.success=function(n){e.wait&&i.add(t,e),s&&s(t,n,e)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof v)return t.collection||(t.collection=this),t;e||(e={}),e.collection=this;var i=new this.model(t,e);return i._validate(t,e)?i:(this.trigger("invalid",this,t,e),!1)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,s){("add"!==t&&"remove"!==t||i===this)&&("destroy"===t&&this.remove(e,s),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});c.each(["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"],(function(t){y.prototype[t]=function(){var e=o.call(arguments);return e.unshift(this.models),c[t].apply(c,e)}}));c.each(["groupBy","countBy","sortBy"],(function(t){y.prototype[t]=function(e,i){var s=c.isFunction(e)?e:function(t){return t.get(e)};return c[t](this.models,s,i)}}));var w=s.View=function(t){this.cid=c.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},x=/^(\S+)\s*(.*)$/,E=["model","collection","el","id","attributes","className","tagName","events"];c.extend(w.prototype,d,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,e){return this.$el&&this.undelegateEvents(),this.$el=t instanceof s.$?t:s.$(t),this.el=this.$el[0],!1!==e&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=c.result(this,"events")))return this;for(var e in this.undelegateEvents(),t){var i=t[e];if(c.isFunction(i)||(i=this[t[e]]),i){var s=e.match(x),n=s[1],r=s[2];i=c.bind(i,this),n+=".delegateEvents"+this.cid,""===r?this.$el.on(n,i):this.$el.on(n,r,i)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(t){this.options&&(t=c.extend({},c.result(this,"options"),t)),c.extend(this,c.pick(t,E)),this.options=t},_ensureElement:function(){if(this.el)this.setElement(c.result(this,"el"),!1);else{var t=c.extend({},c.result(this,"attributes"));this.id&&(t.id=c.result(this,"id")),this.className&&(t.class=c.result(this,"className"));var e=s.$("<"+c.result(this,"tagName")+">").attr(t);this.setElement(e,!1)}}}),s.sync=function(t,e,i){var n=k[t];c.defaults(i||(i={}),{emulateHTTP:s.emulateHTTP,emulateJSON:s.emulateJSON});var r={type:n,dataType:"json"};if(i.url||(r.url=c.result(e,"url")||U()),null!=i.data||!e||"create"!==t&&"update"!==t&&"patch"!==t||(r.contentType="application/json",r.data=JSON.stringify(i.attrs||e.toJSON(i))),i.emulateJSON&&(r.contentType="application/x-www-form-urlencoded",r.data=r.data?{model:r.data}:{}),i.emulateHTTP&&("PUT"===n||"DELETE"===n||"PATCH"===n)){r.type="POST",i.emulateJSON&&(r.data._method=n);var a=i.beforeSend;i.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",n),a)return a.apply(this,arguments)}}"GET"===r.type||i.emulateJSON||(r.processData=!1),"PATCH"!==r.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(r.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var h=i.xhr=s.ajax(c.extend(r,i));return e.trigger("request",e,h,i),h};var k={create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"};s.ajax=function(){return s.$.ajax.apply(s.$,arguments)};var S=s.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},T=/\((.*?)\)/g,$=/(\(\?)?:\w+/g,H=/\*\w+/g,A=/[\-{}\[\]+?.,\\\^$|#\s]/g;c.extend(S.prototype,d,{initialize:function(){},route:function(t,e,i){c.isRegExp(t)||(t=this._routeToRegExp(t)),c.isFunction(e)&&(i=e,e=""),i||(i=this[e]);var n=this;return s.history.route(t,(function(r){var a=n._extractParameters(t,r);n.execute(i,a),n.trigger.apply(n,["route:"+e].concat(a)),n.trigger("route",e,a),s.history.trigger("route",n,e,a)})),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,e){return s.history.navigate(t,e),this},_bindRoutes:function(){if(this.routes){this.routes=c.result(this,"routes");for(var t,e=c.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(A,"\\$&").replace(T,"(?:$1)?").replace($,(function(t,e){return e?t:"([^/]+)"})).replace(H,"(.*?)"),new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return c.map(i,(function(t){return t?decodeURIComponent(t):null}))}});var I=s.History=function(){this.handlers=[],c.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},N=/^[#\/]|\s+$/g,P=/^\/+|\/+$/g,O=/msie [\w.]+/,C=/\/$/;I.started=!1,c.extend(I.prototype,d,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");t.indexOf(i)||(t=t.substr(i.length))}else t=this.getHash();return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=!0,this.options=c.extend({},{root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment(),i=document.documentMode,n=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/"),n&&this._wantsHashChange&&(this.iframe=s.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(e)),this._hasPushState?s.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!n?s.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=e;var r=this.location,a=r.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&r.hash&&(this.fragment=this.getHash().replace(N,""),this.history.replaceState({},document.title,this.root+this.fragment+r.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){s.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),I.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);return c.any(this.handlers,(function(t){if(t.route.test(e))return t.callback(e),!0}))},navigate:function(t,e){if(!I.started)return!1;if(e&&!0!==e||(e={trigger:e}),t=this.getFragment(t||""),this.fragment!==t){this.fragment=t;var i=this.root+t;if(this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}e.trigger&&this.loadUrl(t)}},_updateHash:function(t,e,i){if(i){var s=t.href.replace(/(javascript:|#).*$/,"");t.replace(s+"#"+e)}else t.hash="#"+e}}),s.history=new I;v.extend=y.extend=S.extend=w.extend=I.extend=function(t,e){var i,s=this;i=t&&c.has(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},c.extend(i,s,e);var n=function(){this.constructor=i};return n.prototype=s.prototype,i.prototype=new n,t&&c.extend(i.prototype,t),i.__super__=s.prototype,i};var U=function(){throw new Error('A "url" property or function must be specified')},j=function(t,e){var i=e.error;e.error=function(s){i&&i(t,s,e),t.trigger("error",t,s,e)}}}).call(globalThis)}}]);
//# sourceMappingURL=../../sourcemaps/en/ykUf.584c64eff0f677fd5c43.js.map