/*
 * XenForo acp_login.min.js
 * Copyright 2010-2017 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,c,e){a instanceof String&&(a=String(a));for(var d=a.length,b=0;b<d;b++){var h=a[b];if(c.call(e,h,b,a))return{i:b,v:h}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,e){a!=Array.prototype&&a!=Object.prototype&&(a[c]=e.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,c,e,d){if(c){e=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var b=a[d];b in e||(e[b]={});e=e[b]}a=a[a.length-1];d=e[a];c=c(d);c!=d&&null!=c&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,e){return $jscomp.findInternal(this,a,e).v}},"es6","es3");
!function(a,c,e,d){XenForo.AcpLoginForm=function(b){var d=a("#loginControls"),f=a("#loginLogo"),k=a("#errorMessage"),g=b.find('input[name="login"]');g.length&&""==g.val()?g.focus():b.find('input[name="password"]').focus();b.submit(function(g){g.preventDefault();f.data("width")||(f.data("width",f.width()),f.data("margintop",f.css("margin-top")));d.xfFadeOut(XenForo.speed.normal);XenForo.ajax(b.attr("action"),b.serializeArray(),function(b,g){k.hide();b._redirectStatus&&"ok"==b._redirectStatus?f.animate({width:100,
marginTop:0},XenForo.speed.normal,function(){if(b.repost){var d=a("<form />").attr({action:b._redirectTarget,method:"POST"}).appendTo(e.body),f=function(b,d,e){var c;for(c in b){var g=e?e+"["+c+"]":c;switch(typeof b[c]){case "array":case "object":f(b[c],d,g);break;default:d.append(a("<input />").attr({type:"hidden",name:g,value:b[c].toString()}))}}};b.postVars&&f(b.postVars,d,"");d.submit()}else c.location=b._redirectTarget}):(k.html(b.error[0]).xfFadeIn(XenForo.speed.fast),d.xfFadeIn(XenForo.speed.fast))})})};
XenForo.register("form.AcpLoginForm","XenForo.AcpLoginForm")}(jQuery,this,document);
