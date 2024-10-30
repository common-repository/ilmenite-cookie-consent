(()=>{"use strict";var t,c={360:()=>{var t,c={consentRememberDuration:ilcc.rememberDuration,setPreferencesCookieName:ilcc.preferencesCookieName,consentedCategories:ilcc.consentedCategoriesCookieName};function e(){return o()||n()}function n(){return 1==ilcc.isAnalyticsShown}function o(){return 1==ilcc.isMarketingShown}function s(){return 1===ilcc.debug}function i(){return"undefined"!=typeof _paq}function a(t){for(var c=t+"=",e=document.cookie.split(";"),n=e.length,o=0;o<n;o++){for(var s=e[o];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(c))return s.substring(c.length,s.length)}return null}function l(t){return JSON.parse(a(t))}function r(t,e){if(s())return console.log("Debug Mode Active. Not Setting Cookie."),console.log("Name: "+t),console.log("Value:"),void console.log(e);var n=new Date;n.setTime(n.getTime()+24*c.consentRememberDuration*60*60*1e3),document.cookie=t+"="+e+"; expires="+n.toUTCString()+"; path=/"}function d(){var t="1";!(arguments.length>0&&void 0!==arguments[0])||arguments[0]||(t="0"),r(c.setPreferencesCookieName,t)}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(c.consentedCategories,JSON.stringify(t)),i()&&p("analytics")&&_paq.push(["setCookieConsentGiven"])}function u(){return l(c.consentedCategories)}function p(t){var c=u();return!(!c||c.length<=0)&&c.includes(t)}function f(){var t=document.querySelector(".js--ilcc-cookie-consent-notice");t&&(document.body.classList.contains("ilcc-style-top")&&(document.body.style.paddingTop=0,t.style.top=-t.offsetHeight-50+"px"),document.body.classList.contains("ilcc-style-overlay")&&(t.style.bottom=-t.offsetHeight-50+"px"),t.classList.add("is-closed"),document.body.classList.add("ilcc-banner-closed"),setTimeout((function(){var c;c=document.body,["has-ilcc-banner"].forEach((function(t){!function(t,c){t.classList.contains(c)&&t.classList.remove(c)}(c,t)})),t.remove()}),750))}function k(t){return p(t)?"ilcc-toggle-active":""}function v(t){var c=t.dataset.category;t.classList.contains("ilcc-toggle-active")?(!function(t){var c=u();!c||c.length<=0||c.includes(t)&&g(c=c.filter((function(c){return c!==t})))}(c),t.classList.remove("ilcc-toggle-active")):(!function(t){var c=u();c&&c.length>0?c.includes(t)||c.push(t):c=[t],g(c)}(c),t.classList.add("ilcc-toggle-active"))}function y(t){s()&&console.debug(t)}function m(t){s()&&console.info(t)}t="=========== COOKIE CONSENT DEBUGGING ===========",s()&&console.log(t),m("Blacklisted Domains"),m(window.YETT_BLACKLIST),m("Whitelisted Domains"),m(window.YETT_WHITELIST),"1"===a(c.setPreferencesCookieName)?(y("✅ User has expressed consent."),y("The following categories were granted:"),y(l(c.consentedCategories)),document.body.classList.add("has-ilcc-consented"),i()&&p("analytics")&&_paq.push(["setCookieConsentGiven"])):(y("❌ User has not expressed consent."),document.body.classList.add("has-ilcc-banner"),document.body.classList.add("ilcc-style-"+ilcc.style),function(){var t=document.createElement("div");if(t.id="cookie-consent-block",t.classList.add("ilcc-cookie-consent-notice"),t.classList.add("js--ilcc-cookie-consent-notice"),t.innerHTML='\n\t\t<div class="ilcc-cookie-consent-notice-content">\n\t\t\t<p><span>'.concat(ilcc.cookieConsentTitle,"</span>").concat(ilcc.cookieConsentText,'</p>\n\t\t\t<div class="ilcc-cookie-consent-actions">\n\t\t\t\t').concat(e()?'<button class="ilcc-cookie-consent-necessary js--ilcc-cookie-consent-necessary ilcc-cookie-consent-button">'.concat(ilcc.necessaryText,"</button>"):"",'\n\t\t\t\t<button class="ilcc-cookie-consent-close js--ilcc-cookie-consent-close close-cookie-block ilcc-cookie-consent-button">').concat(ilcc.acceptText,"</button>\n\t\t\t\t").concat(e()?'<button class="ilcc-cookie-consent-settings-toggle js--ilcc-cookie-consent-settings-toggle">'.concat(ilcc.configureSettingsText,"</button>"):"","\n\t\t\t</div>\n\t\t</div>\n\t\t").concat(function(){if(!e())return"";var t='<div class="ilcc-cookie-consent-settings js--ilcc-cookie-consent-settings">\n\t\t<p class="ilcc-cookie-consent-settings-title">'.concat(ilcc.settingsTitle,'</p>\n\t\t<p class="ilcc-cookie-consent-settings-intro">').concat(ilcc.settingsDescription,'</p>\n\t\t<div class="ilcc-cookie-consent-categories">\n<a href="#" class="ilcc-cookie-consent-category ilcc-toggle-disabled" data-category="necessary">\n\t\t\t\t<span class="ilcc-cookie-consent-category-info">\n\t\t\t\t\t<strong>').concat(ilcc.necessaryHeading,"</strong>\n\t\t\t\t\t<p>").concat(ilcc.necessaryDescription,'</p>\n\t\t\t\t</span>\n\t\t\t\t<span class="ilcc-cookie-consent-category-toggle">\n\t\t\t\t').concat('<span class="ilcc-cookie-consent-toggle"><span class="ilcc-cookie-consent-toggle-handle"></span></span>',"\n\t\t\t\t</span>\n\t\t\t</a>");return n()&&(t+='\n\t\t\t<a href="#" class="ilcc-cookie-consent-category js--ilcc-cookie-consent-toggle '.concat(k("analytics"),'" data-category="analytics">\n\t\t\t\t<span class="ilcc-cookie-consent-category-info">\n\t\t\t\t\t<strong>').concat(ilcc.analyticsHeading,"</strong>\n\t\t\t\t\t<p>").concat(ilcc.analyticsDescription,'</p>\n\t\t\t\t</span>\n\t\t\t\t<span class="ilcc-cookie-consent-category-toggle">\n\t\t\t\t').concat('<span class="ilcc-cookie-consent-toggle"><span class="ilcc-cookie-consent-toggle-handle"></span></span>',"\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t")),o()&&(t+='\n\t\t\t<a href="#" class="ilcc-cookie-consent-category js--ilcc-cookie-consent-toggle '.concat(k("marketing"),'" data-category="marketing">\n\t\t\t\t<span class="ilcc-cookie-consent-category-info">\n\t\t\t\t\t<strong>').concat(ilcc.marketingHeading,"</strong>\n\t\t\t\t\t<p>").concat(ilcc.marketingDescription,'</p>\n\t\t\t\t</span>\n\t\t\t\t<span class="ilcc-cookie-consent-category-toggle">\n\t\t\t\t').concat('<span class="ilcc-cookie-consent-toggle"><span class="ilcc-cookie-consent-toggle-handle"></span></span>',"\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t")),t+'</div>\n\t\t<div class="ilcc-cookie-consent-settings-save">\n\t\t\t<button class="ilcc-cookie-consent-button js--ilcc-cookie-consent-settings-save-button">'.concat(ilcc.saveSettingsText,"</button>\n\t\t</div>\n</div>")}(),"\n\t"),document.body.appendChild(t),document.body.classList.contains("ilcc-style-top")){var c=document.querySelector(".js--ilcc-cookie-consent-notice").offsetHeight;document.body.style.paddingTop=c+"px"}}()),s()&&document.body.classList.add("ilcc-is-debugging"),document.querySelector(".js--ilcc-cookie-consent-notice")&&(document.querySelector(".js--ilcc-cookie-consent-close").addEventListener("click",(function(t){t.preventDefault(),window.yett.unblock(),f(),d(),g(["necessary","marketing","analytics"])})),e()&&(document.querySelector(".js--ilcc-cookie-consent-necessary").addEventListener("click",(function(t){t.preventDefault(),f(),d(),g(["necessary"])})),document.querySelector(".js--ilcc-cookie-consent-settings-toggle").addEventListener("click",(function(t){t.preventDefault(),document.querySelector(".js--ilcc-cookie-consent-settings").classList.toggle("is-open")})),document.querySelector(".js--ilcc-cookie-consent-settings-save-button").addEventListener("click",(function(t){t.preventDefault(),d(),f()})),document.querySelectorAll(".js--ilcc-cookie-consent-toggle").forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),v(this)}))}))))},996:()=>{}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var s=e[t]={exports:{}};return c[t](s,s.exports,n),s.exports}n.m=c,t=[],n.O=(c,e,o,s)=>{if(!e){var i=1/0;for(d=0;d<t.length;d++){for(var[e,o,s]=t[d],a=!0,l=0;l<e.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((t=>n.O[t](e[l])))?e.splice(l--,1):(a=!1,s<i&&(i=s));if(a){t.splice(d--,1);var r=o();void 0!==r&&(c=r)}}return c}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[e,o,s]},n.o=(t,c)=>Object.prototype.hasOwnProperty.call(t,c),(()=>{var t={984:0,528:0};n.O.j=c=>0===t[c];var c=(c,e)=>{var o,s,[i,a,l]=e,r=0;if(i.some((c=>0!==t[c]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var d=l(n)}for(c&&c(e);r<i.length;r++)s=i[r],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},e=self.webpackChunkilmenite_cookie_consent=self.webpackChunkilmenite_cookie_consent||[];e.forEach(c.bind(null,0)),e.push=c.bind(null,e.push.bind(e))})(),n.O(void 0,[528],(()=>n(360)));var o=n.O(void 0,[528],(()=>n(996)));o=n.O(o)})();