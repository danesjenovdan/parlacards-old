// TODO
// kdaj se izklopi označba za stranko?

// jquery ui

/*! jQuery UI - v1.12.0 - 2016-08-21
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.0";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(o){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,a,o,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],a=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new a(t,e)},t.extend(a,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),o=new i,o.options=t.widget.extend({},o.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,a=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=a,e}}(),void 0):(r[e]=s,void 0)}),a.prototype=t.widget.extend(o,{widgetEventPrefix:n?o.widgetEventPrefix||e:e},r,{constructor:a,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,a,i._proto)}),delete n._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var s,n,a=i.call(arguments,1),o=0,r=a.length;r>o;o++)for(s in a[o])n=a[o][s],a[o].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(a){var o="string"==typeof a,r=i.call(arguments,1),l=this;return o?this.each(function(){var i,s=t.data(this,n);return"instance"===a?(l=s,!1):s?t.isFunction(s[a])&&"_"!==a.charAt(0)?(i=s[a].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+a+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=t.widget.extend.apply(null,[a].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(a||{}),e._init&&e._init()):t.data(this,n,new s(a,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,a,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},s=e.split("."),e=s.shift(),s.length){for(n=o[e]=t.widget.extend({},this.options[e]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,a){var o,r;for(r=0;i.length>r;r++)o=n.classesElementLookup[i[r]]||t(),o=e.add?t(t.unique(o.get().concat(e.element.get()))):t(o.not(e.element).get()),n.classesElementLookup[i[r]]=o,s.push(i[r]),a&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,a={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return a.element.toggleClass(this._classes(a),s),this},_on:function(e,i,s){var n,a=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,o){function r(){return e||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+a.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,a,o=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(t.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),o=!t.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){t(this)[e](),a&&a.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;a=function(){var e=t("<div>").css("position","absolute").appendTo("body").offset({top:1.5,left:1.5}),i=1.5===e.offset().top;return e.remove(),a=function(){return i},i},t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return t("body").append(s),e=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,a=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:a?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=t.extend({},n);var p,g,m,_,v,b,y=t(n.of),k=t.position.getWithinInfo(n.within),w=t.position.getScrollInfo(k),D=(n.collision||"flip").split(" "),x={};return b=s(y),y[0].preventDefault&&(n.at="left top"),g=b.width,m=b.height,_=b.offset,v=t.extend({},_),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=h.test(i[0])?i.concat(["center"]):c.test(i[0])?["center"].concat(i):["center","center"]),i[0]=h.test(i[0])?i[0]:"center",i[1]=c.test(i[1])?i[1]:"center",t=u.exec(i[0]),e=u.exec(i[1]),x[this]=[t?t[0]:0,e?e[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===D.length&&(D[1]=D[0]),"right"===n.at[0]?v.left+=g:"center"===n.at[0]&&(v.left+=g/2),"bottom"===n.at[1]?v.top+=m:"center"===n.at[1]&&(v.top+=m/2),p=e(x.at,g,m),v.left+=p[0],v.top+=p[1],this.each(function(){var s,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),C=u+f+i(this,"marginRight")+w.width,I=d+b+i(this,"marginBottom")+w.height,M=t.extend({},v),T=e(x.my,c.outerWidth(),c.outerHeight());"right"===n.my[0]?M.left-=u:"center"===n.my[0]&&(M.left-=u/2),"bottom"===n.my[1]?M.top-=d:"center"===n.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],a()||(M.left=l(M.left),M.top=l(M.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[D[e]]&&t.ui.position[D[e]][i](M,{targetWidth:g,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:s,collisionWidth:C,collisionHeight:I,offset:[p[0]+T[0],p[1]+T[1]],my:n.my,at:n.at,within:k,elem:c})}),n.using&&(h=function(t){var e=_.left-M.left,i=e+g-u,s=_.top-M.top,a=s+m-d,l={target:{element:y,left:_.left,top:_.top,width:g,height:m},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>i?"left":e>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};u>g&&g>r(e+i)&&(l.horizontal="center"),d>m&&m>r(s+a)&&(l.vertical="middle"),l.important=o(r(e),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,a,o=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(e.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,a,o=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);o._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);o._isDivider(e)&&o._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),a=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(a,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a||!o&&this._isContentEditable(this.element),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var a=t.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:e=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case a.UP:e=!0,this._keyEvent("previous",n);break;case a.DOWN:e=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete});

// end of jquery ui

function makeSwitchEvent(acronym) {
    $('#partyswitch-' + acronym).on('click', function() {
        if (d3.select('#kompashull' + acronym).classed('hidden')) {
            d3.select('#kompashull' + acronym).classed('hidden', false);
            $(this).css('background-color', color(acronym));
        } else {
            $(this).css('background-color', '#f0f0f0');
            d3.select('#kompashull' + acronym).classed('hidden', true);
        }
        $(this).toggleClass('turnedon');
    });
}

function makeSwitchEvent2(selection) {
    $('#partyswitch-' + d3.select(selection[0][0]).datum().person.party.acronym.replace(' ', '_')).on('click', function() {
        if (!$(this).hasClass('turnedon')) {

            $(this).css('background-color', color($(this).attr('id').split('-')[1]));

            for (var i = 0; i < selection[0].length; i++) {
                // show photos
                showPersonPicture(d3.select(selection[0][i]).datum())

                // move to front
                var parent = $('#_' + d3.select(selection[0][i]).datum().person.id).parent()[0];
                moveToFront(parent, d3.select(selection[0][i]).datum());
            }
        } else {
            $(this).css('background-color', '#f0f0f0');

            for (var i = 0; i < selection[0].length; i++) {
                d3.select('#personcard' + d3.select(selection[0][i]).datum().person.id).classed('hidden', true);
                d3.select(selection[0][i])
                    .attr('r', function(d) {
                        return 3;
                    })
                    .style("fill", function(d) {
                        return color(d.person.party.acronym.replace(' ', '_'));
                    })
                    .on('click', function(d) {
                        // show photo
                        showPersonPicture(d);

                        // move to front
                        var parent = $('#_' + d.person.id).parent()[0];
                        moveToFront(parent, d);
                    });
            }
        }
        $(this).toggleClass('turnedon');
    });
}

function groupBy(array, f) {
    var groups = {};
    array.forEach(function(o) {
        var group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map(function(group) {
        return groups[group];
    })
}

var groupedData = groupBy(kompas_data, function(item) {
    return [item.person.party.acronym]
});

var margin = {
        top: 50,
        right: 300,
        bottom: 50,
        left: 50
    },
    outerWidth = 1050,
    outerHeight = 500,
    width = outerWidth - margin.left - margin.right,
    height = outerHeight - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]).nice();

var y = d3.scale.linear()
    .range([height, 0]).nice();

var xCat = "ideology1";
var yCat = "ideology2";

kompas_data.forEach(function(d) {
    d.ideology1 = +d.score.vT1;
    d.ideology2 = +d.score.vT2;
});

var xMax = d3.max(kompas_data, function(d) {
        return d[xCat];
    }) * 1.05,
    xMin = d3.min(kompas_data, function(d) {
        return d[xCat];
    }),
    xMin = xMin > 0 ? 0 : xMin,
    yMax = d3.max(kompas_data, function(d) {
        return d[yCat];
    }) * 1.05,
    yMin = d3.min(kompas_data, function(d) {
        return d[yCat];
    }),
    yMin = yMin > 0 ? 0 : yMin;

x.domain([xMin, xMax]);
y.domain([yMin, yMax]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickSize(0);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickSize(0);

var parties = [];
for (group in groupedData) {
    parties.push(groupedData[group][0].person.party.acronym.replace(' ', '_'));
}

var color = d3.scale.ordinal()
    .range(["#8FCFEE", "#4FB5E6", "#AA7375", "#534961", "#4F6379", "#5388AA", "#D9776B", "#BA594C"]);

var zoomBeh = d3.behavior.zoom()
    .x(x)
    .y(y)
    .scaleExtent([0, 500])
    .on("zoom", zoom);

var svg = d3.select("#kompas-scatter")
    .append("svg")
    .attr('viewBox', '0 0 700 400')
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .append("g")
    .call(zoomBeh);

svg.append("rect")
    .attr("width", width)
    .attr("height", height);

svg.append("g")
    .classed("x axis", true)
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)

svg.append("g")
    .classed("y axis", true)
    .call(yAxis)

svg.selectAll(".tick")
    .each(function(d, i) {
        this.remove();
    });

var objects = svg.append("svg")
    .classed("objects", true)
    .attr("width", width)
    .attr("height", height);

var parties = objects.selectAll('g')
    .data(groupedData)
    .enter()
    .append('g')
    .attr('id', function(d, i) {
        return 'kompasgroup' + d[0].person.party.acronym.replace(' ', '_');
    });

var defs = svg.append('defs');

for (i in kompas_data) {
    defs.append("pattern")
        .attr("id", kompas_data[i].person.gov_id)
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 40)
        .attr("height", 40)
        .attr("x", -20)
        .attr("y", 20)
        .append("image")
        .attr("xlink:href", 'https://cdn.parlameter.si/v1/parlassets/img/people/square/' + kompas_data[i].person.gov_id + '.png')
        .attr("width", 40)
        .attr("height", 40)
        .attr("x", 0)
        .attr("y", 0);
}

for (group in groupedData) {

    var currentselection = d3.select('#kompasgroup' + groupedData[group][0].person.party.acronym.replace(' ', '_')).classed('partygroup', true)
        .selectAll('.dot')
        .data(groupedData[group])
        .enter()
        .append("circle")
        .classed("dot", true)
        .attr('id', function(d) {
            return '_' + d.person.id;
        })
        .attr("r", function(d) {
            return 3;
        })
        .attr("transform", transform)
        // .style('border', '3px solid')
        .style("fill", function(d) {
            return color(d.person.party.acronym.replace(' ', '_'));
        })
        .style("stroke", function(d) {
            return color(d.person.party.acronym.replace(' ', '_'));
        })
        // .style('fill', function(d) {
        //     return 'url(#' + d.person.gov_id + ')'
        // })
        .on('click', function(d, i) {
            // var element = d3.select('#_' + d.person.id);
            // if (element.classed('selected')) {
            //     removeSingleHull(d);
            //     element.classed('selected', false);
            // } else {

            // show photo
            showPersonPicture(d);

            // move to front
            var parent = $('#_' + d.person.id).parent()[0];
            moveToFront(parent, d);

            //     element.classed('selected', true);
            // }
        });
    // .style('filter', 'url(#glow)');
    // .on('mouseover', overGroup)
    // .off('mouseover', offGroup);

    // drawHull(currentselection, groupedData[group]);
    makeSwitchEvent2(currentselection); // TODO

}

function zoom() {

    svg.selectAll(".dot")
        .attr("transform", transform);

    svg.selectAll(".singlehull")
        .attr("d", function(d) {
            var parent = d3.select('#' + d3.select(this).attr('data-parent'));
            var translateX = parseInt(parent.attr('transform').split('(')[1].split(',')[0]);
            var translateY = parseInt(parent.attr('transform').split('(')[1].split(',')[1].split(')')[0]);
            console.log(translateX, translateY)
            return "M" + translateX + ',' + translateY + "L" + (translateX + 0.01) + ',' + translateY + "Z";
        });

    // for (group in groupedData) {
    //
    //     var currentselection = d3.select('#kompasgroup' + groupedData[group][0].person.party.acronym.replace(' ', '_'))
    //
    //     redrawHull(currentselection, groupedData[group]);
    //
    // }
}

function transform(d) {
    return "translate(" + x(d[xCat]) + "," + y(d[yCat]) + ")";
}

function overGroup() {};

function offGroup() {};

function drawSingleHull(datum) {

    // display card
    $('#personcard' + datum.person.id).removeClass('hidden').detach().prependTo('.kompas-people-wide');
    updatePeopleScroller();

    // create hull
    var hull = objects.append('path')
        .classed('hull', true)
        .classed('singlehull', true)
        .attr('data-parent', '_' + datum.person.id)
        .attr('id', function() {
            return 'singlehull' + datum.person.id;
        })
        .attr('data-id', datum.person.id);

    var vertices = [
        [x(datum[xCat]), y(datum[yCat])]
    ];

    hull.datum(vertices)
        .attr("d", function(d) {
            return "M" + d[0][0] + ',' + d[0][1] + "L" + (d[0][0] + 0.1) + ',' + d[0][1] + "Z";
        })
        .style('fill', function(d) {
            return color(datum.person.party.acronym.replace(' ', '_'));
        })
        .style('stroke', function(d) {
            return color(datum.person.party.acronym.replace(' ', '_'));
        })
        .on('click', function() {
            d3.select('#personcard' + d3.select(this).attr('data-id')).classed('hidden', true);
            d3.select(this).remove();
        });
}

function moveToFront(parent, selected) {
    // move person to group front
    d3.select(parent).selectAll('.dot')
        .sort(function(a, b) {
            s = selected.person.id;
            return (a.person.id == s) - (b.person.id == s);
        });

     // move group in front of other groups
     d3.select(parent.parentNode).selectAll('.partygroup')
         .sort(function(a, b) {
             s = selected.person.party.id;
             return (a[0].person.party.id == s) - (b[0].person.party.id == s);
         });
}

function showPersonPicture(datum) {

    // display card
    $('#personcard' + datum.person.id).removeClass('hidden').detach().prependTo('.kompas-people-wide');
    updatePeopleScroller();

    // create hull
    d3.select('#_' + datum.person.id)
        .attr('r', function(d) {
            return 20;
        })
        .style('fill', function(d) {
            return 'url(#' + d.person.gov_id + ')'
        })
        .on('click', function() {
                d3.select('#personcard' + d3.select(this).datum().person.id).classed('hidden', true);
                d3.select(this)
                    .attr('r', function(d) {
                        return 3;
                    })
                    .style("fill", function(d) {
                        return color(d.person.party.acronym.replace(' ', '_'));
                    })
                    .on('click', function(d) {
                        // show photo
                        showPersonPicture(d);

                        // move to front
                        var parent = $('#_' + d.person.id).parent()[0];
                        moveToFront(parent, d);
                    });
            });
}

function drawHull(group, dataset) {
    var hull = objects.append("path")
        .attr("class", "hull")
        .attr('id', function() {
            return 'kompashull' + dataset[0].person.party.acronym.replace(' ', '_');
        })
        .classed('hidden', true);

    var vertices = dataset.map(function(d) {
        return [x(d[xCat]), y(d[yCat])];
    });

    if (vertices.length > 2) {
        hull.datum(d3.geom.hull(vertices))
            .attr("d", function(d) {
                return "M" + d.join("L") + "Z";
            })
            .style('fill', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            })
            .style('stroke', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            });
    } else if (vertices.length === 2) {
        hull.datum(vertices)
            .attr("d", function(d) {
                return "M" + d.join("L") + "Z";
            })
            .style('fill', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            })
            .style('stroke', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            });
    } else {
        hull.datum(vertices)
            .attr("d", function(d) {
                return "M" + d[0][0] + ',' + d[0][1] + "L" + (d[0][0] + 0.1) + ',' + d[0][1] + "Z";
            })
            .style('fill', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            })
            .style('stroke', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            });
    }

    makeSwitchEvent(dataset[0].person.party.acronym.replace(' ', '_'));
}

function redrawHull(group, dataset) {
    var hull = objects.select("#kompashull" + dataset[0].person.party.acronym.replace(' ', '_'));

    var vertices = dataset.map(function(d) {
        return [x(d[xCat]), y(d[yCat])];
    });

    if (vertices.length > 2) {
        hull.datum(d3.geom.hull(vertices))
            .attr("d", function(d) {
                return "M" + d.join("L") + "Z";
            })
            .style('fill', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            })
            .style('stroke', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            });
    } else if (vertices.length === 2) {
        hull.datum(vertices)
            .attr("d", function(d) {
                return "M" + d.join("L") + "Z";
            })
            .style('fill', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            })
            .style('stroke', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            });
    } else {
        hull.datum(vertices)
            .attr("d", function(d) {
                return "M" + d[0][0] + ',' + d[0][1] + "L" + (d[0][0] + 0.01) + ',' + d[0][1] + "Z";
            })
            .style('fill', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            })
            .style('stroke', function(d) {
                return color(dataset[0].person.party.acronym.replace(' ', '_'));
            });
    }
}

$.each($('.kompas-stranka'), function(i, e) {
    $(e).css('border-bottom', '10px solid ' + color($(e).data('acronym')));
});

function updatePeopleScroller() {
    var thewidth = 0;
    $('.kompas-people-wide').width(100000);
    $('.kompas-person').not('.hidden').each(function(i, e) {
        thewidth = thewidth + $(e).outerWidth() + 21;
    });
    // console.log(thewidth);
    $('.kompas-people-wide').width(thewidth);
}

function removeSearchPerson(name) {
    for (person_i in searchpeople) {
        if (searchpeople[person_i]['label'] == name) {
            console.log(name);
            searchpeople.splice(person_i, 1);
        }
    }
}
function addSearchPerson(name, id) {
    searchpeople.push({
        'label': name,
        'value': id
    });
}

$('.kompas-person').on('click', function() {
    // hide card
    $(this).addClass('hidden');

    // turn picture back to dot
    d3.select('#_' + $(this).data('id'))
        .attr('r', function(d) {
            return 3;
        })
        .style("fill", function(d) {
            return color(d.person.party.acronym.replace(' ', '_'));
        })
        .on('click', function(d) {
            // show photo
            showPersonPicture(d);

            // move to front
            var parent = $('#_' + d.person.id).parent()[0];
            moveToFront(parent, d);
        });

    // handle search
    var persondata = d3.select('#_' + $(this).data('id')).datum()
    addSearchPerson(persondata.person.name, persondata.person.id);
});

$('.kompas-person').each(function(i, e) {
    $(e).children('.kompas-person-party').css('background-color', color($(e).data('acronym')));
});

function updatePeopleSearch() {
    $('.kompas-search-input').autocomplete({
        'source': searchpeople,
        'select': function(event, ui) {
            event.preventDefault();
            $('.kompas-search-input').val('');
            drawSingleHull(d3.select('#_' + ui.item.value).datum());
            removeSearchPerson(ui.item.label);
        },
        'focus': function(event, ui) {
            event.preventDefault();
            $('.kompas-search-input').val(ui.item.label);
        }
    });
}

updatePeopleSearch();
