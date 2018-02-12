webpackJsonpCoveo__temporary([64],{172:function(e,t,o){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=o(6),i=o(7),s=o(2),l=o(10),a=o(9),p=o(8),c=o(5),u=o(1),h=o(3);o(371);var d=function(e){function t(o,r,n){var a=e.call(this,o,t.ID,n)||this;a.element=o,a.options=r,a.options=i.ComponentOptions.initComponentOptions(o,t,r),a.container=s.$$("div",{className:"coveo-error-report-container"});var p=s.$$("div",{className:"coveo-error-report-title"},"<h1></h1><h3></h3>");return a.element.appendChild(a.container.el),a.container.append(p.el),a.options.showDetailedError&&(a.message=s.$$("div",{className:"coveo-error-report-message"}),a.container.append(a.message.el)),a.helpSuggestion=s.$$("div",{className:"coveo-error-report-help-suggestion"}),s.$$(a.element).hide(),a.bind.onRootElement(l.QueryEvents.newQuery,function(){return a.handleNewQuery()}),a.bind.onRootElement(l.QueryEvents.queryError,function(e){return a.handleQueryError(e)}),a}return r(t,e),t.prototype.back=function(){this.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.errorBack,{},this.root),this.usageAnalytics.logSearchEvent(a.analyticsActionCauseList.errorBack,{}),history.back()},t.prototype.reset=function(){this.queryStateModel.reset(),this.usageAnalytics.logSearchEvent(a.analyticsActionCauseList.errorClearQuery,{}),this.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.errorClearQuery,{},this.root),this.queryController.executeQuery()},t.prototype.retry=function(){this.usageAnalytics.logSearchEvent(a.analyticsActionCauseList.errorRetry,{}),this.usageAnalytics.logCustomEvent(a.analyticsActionCauseList.errorRetry,{},this.root),this.queryController.executeQuery()},t.prototype.setErrorTitle=function(e,t){var o={h1:e?p.l(e):p.l("OopsError"),h3:t?p.l(t):p.l("ProblemPersists")},r=s.$$(this.element).find("h1"),n=s.$$(this.element).find("h3");r&&n&&(s.$$(r).text(o.h1),s.$$(n).text(o.h3))},t.prototype.buildPrevious=function(){var e=this,t=s.$$("span",{className:"coveo-error-report-previous"},p.l("GoBack"));return t.on("click",function(){return e.back()}),t.el},t.prototype.buildReset=function(){var e=this,t=s.$$("span",{className:"coveo-error-report-clear"},p.l("Reset"));return t.on("click",function(){return e.reset()}),t.el},t.prototype.buildRetry=function(){var e=this,t=s.$$("span",{className:"coveo-error-report-retry"},p.l("Retry"));return t.on("click",function(){return e.retry()}),t.el},t.prototype.handleNewQuery=function(){s.$$(this.element).hide(),null!=this.closePopup&&this.closePopup()},t.prototype.handleQueryError=function(e){var t=this;if(c.Assert.exists(e),c.Assert.exists(e.error),e.endpoint.options.queryStringArguments.organizationId?this.organizationId=e.endpoint.options.queryStringArguments.organizationId:this.organizationId=p.l("CoveoOrganization"),!e.error.isMissingAuthentication){switch(e.error.name){case"NoEndpointsException":this.options.showDetailedError=!1,this.buildEndpointErrorElements("http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=257"),this.setErrorTitle(p.l("NoEndpoints",this.organizationId),p.l("AddSources"));break;case"InvalidTokenException":this.options.showDetailedError=!1,this.buildEndpointErrorElements("https://developers.coveo.com/x/XICE"),this.setErrorTitle(p.l("CannotAccess",this.organizationId),p.l("InvalidToken"));break;default:this.buildOptionsElement(),this.setErrorTitle()}if(this.options.showDetailedError){this.message.empty();var o=s.$$("span",{className:"coveo-error-report-more-info"},p.l("MoreInfo"));o.on("click",function(){o.empty(),t.message.el.appendChild(t.buildErrorInfo(e.error))}),this.message.el.appendChild(o.el)}s.$$(this.element).show()}},t.prototype.buildErrorInfo=function(e){var t=s.$$("div",{className:"coveo-error-info"}),o=s.$$("textarea",void 0,JSON.stringify(e,null,2));t.el.appendChild(o.el);var r=s.$$("div",{className:"coveo-error-info-label"},p.l("CopyPasteToSupport"));return t.el.appendChild(r.el),t.el},t.prototype.buildOptionsElement=function(){var e=this.container.find(".coveo-error-report-options");e&&s.$$(e).remove();var t=s.$$("div",{className:"coveo-error-report-options"});t.el.appendChild(this.buildPrevious()),t.el.appendChild(this.buildReset()),t.el.appendChild(this.buildRetry()),this.container.append(t.el)},t.prototype.buildEndpointErrorElements=function(e){void 0===e&&(e="http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=254"),this.helpSuggestion.empty();var t=s.$$("a",{href:e,className:"coveo-error-report-help-link"});t.setHtml(p.l("CoveoOnlineHelp")),this.helpSuggestion.append(t.el),this.container.el.insertBefore(this.helpSuggestion.el,this.message.el)},t.ID="ErrorReport",t.doExport=function(){h.exportGlobally({ErrorReport:t})},t.options={showDetailedError:i.ComponentOptions.buildBooleanOption({defaultValue:!0})},t}(n.Component);t.ErrorReport=d,u.Initialization.registerAutoCreateComponent(d)},371:function(e,t){}});