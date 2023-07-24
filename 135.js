"use strict";(self.webpackChunkngx_mat_select=self.webpackChunkngx_mat_select||[]).push([[135],{8135:(M,c,e)=>{e.r(c),e.d(c,{DynamicComponent:()=>r,DynamicModule:()=>I});var p=e(2117),t=e(6814),o=e(6286),h=e(2286),n=e(5879),u=e(121),j=e(8685),d=e(4170);let x=(()=>{class s{constructor(){this.options=[1,2,3,4,5,6,7]}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["ng-component"]],decls:4,vars:2,consts:[[2,"max-width","350px","width","100%"],["clientSide","",3,"hasSearchBox","options"]],template:function(a,m){1&a&&(n.TgZ(0,"mat-form-field",0)(1,"mat-label"),n._uU(2," Select Box "),n.qZA(),n._UZ(3,"ngx-mat-select",1),n.qZA()),2&a&&(n.xp6(3),n.Q6J("hasSearchBox",!0)("options",m.options))},dependencies:[u.K,j.G,d.KE,d.hX],encapsulation:2}),s})();var y=e(2707),f=e(2032);let g=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[t.ez,y.LW,f.c]}),s})();const i={title:"Introduction",mdFile:"./index.md",order:1,demos:{IntroductionComponent:x},imports:[g]};let C=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[t.ez]}),s})();const v={IntroductionComponent:[{title:"TypeScript",codeType:"TypeScript",code:'<pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">Component</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">"@angular/core"</span>;\n</span><span class="line ngde">\n</span><span class="line ngde"><span class="hljs-meta ngde">@Component</span>({\n</span><span class="line ngde">  <span class="hljs-attr ngde">templateUrl</span>: <span class="hljs-string ngde">"./introduction.component.html"</span>,\n</span><span class="line ngde">})\n</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">IntroductionComponent</span> {\n</span><span class="line ngde">  options = [<span class="hljs-number ngde">1</span>, <span class="hljs-number ngde">2</span>, <span class="hljs-number ngde">3</span>, <span class="hljs-number ngde">4</span>, <span class="hljs-number ngde">5</span>, <span class="hljs-number ngde">6</span>, <span class="hljs-number ngde">7</span>];\n</span><span class="line ngde">}\n</span></code></pre>'},{title:"HTML",codeType:"HTML",code:'<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-form-field</span> <span class="hljs-attr ngde">style</span>=<span class="hljs-string ngde">"max-width: 350px; width: 100%"</span>></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-label</span>></span> Select Box <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-label</span>></span>\n</span><span class="line ngde">\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">ngx-mat-select</span> <span class="hljs-attr ngde">clientSide</span> [<span class="hljs-attr ngde">hasSearchBox</span>]=<span class="hljs-string ngde">"true"</span> [<span class="hljs-attr ngde">options</span>]=<span class="hljs-string ngde">"options"</span>></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">ngx-mat-select</span>></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-form-field</span>></span>\n</span></code></pre>'}]};let r=(()=>{class s extends o.a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent='<h1 id="introduction" class="ngde">Introduction<a title="Link to heading" class="ng-doc-header-link ngde" href="/introduction#introduction"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">You are reading the documentation for NgxMatSelect Component.</p><h1 id="what-is-ngxmatselect" class="ngde">What is NgxMatSelect?<a title="Link to heading" class="ng-doc-header-link ngde" href="/introduction#what-is-ngxmatselect"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><p class="ngde">This is an Angular Material custom component, redesigned and inspired by the Angular <code class="ngde">mat-select</code> component to concentrate on specific needs like being searchable and using virtual scroll at the same time because Angular <code class="ngde">mat-select</code> does not support them at all.</p><p class="ngde">It is common knowledge among <code class="ngde">Angular Material</code> developers that combining <code class="ngde">mat-auto-complete</code> and <code class="ngde">mat-form-field</code> can be a good solution to solve the searching issue, but yet there is a need to solve this issue in an open-source, versatile, independent, union, and progressive way, that\'s where <code class="ngde">ngx-mat-select</code> comes up.</p><p class="ngde">Here is a minimal example:</p><pre class="ngde hljs"><code class="hljs language-typescript code-lines ngde" lang="typescript" name="my.component.ts" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-meta ngde">@Component</span>({\n</span><span class="line ngde">  <span class="hljs-attr ngde">templateUrl</span>: <span class="hljs-string ngde">\'./my-component.html\'</span>\n</span><span class="line ngde">})\n</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">MyComponent</span> {\n</span><span class="line ngde">  options = [<span class="hljs-number ngde">1</span>,<span class="hljs-number ngde">2</span>,<span class="hljs-number ngde">3</span>,<span class="hljs-number ngde">4</span>,<span class="hljs-number ngde">5</span>,<span class="hljs-number ngde">6</span>,<span class="hljs-number ngde">7</span>];\n</span><span class="line ngde">}\n</span></code></pre><pre class="ngde hljs"><code class="hljs language-html code-lines ngde" lang="html" name="my.component.html" icon="" highlightedlines="[]"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-form-field</span>></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-label</span>></span>\n</span><span class="line ngde">    Select Box\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-label</span>></span>\n</span><span class="line ngde">\n</span><span class="line ngde">  &#x3C;<span class="hljs-name ngde">ngx-mat-select</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">    </span><span class="hljs-attr ngde">clientSide</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">    [</span><span class="hljs-attr ngde">hasSearchBox</span>]=<span class="hljs-string ngde">"true"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">    [</span><span class="hljs-attr ngde">options</span>]=<span class="hljs-string ngde">"options"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">  ></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">ngx-mat-select</span>></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-form-field</span>></span>\n</span></code></pre><ng-doc-demo componentname="IntroductionComponent" indexable="false" class="ngde"><div id="options" class="ngde">{}</div></ng-doc-demo><ng-doc-blockquote type="note" class="ngde"><p class="ngde">As you can see, <code class="ngde">ngx-mat-select</code> is compatible with <code class="ngde">mat-form-field</code> which means, it can be used inside a form, and it has all advantages of the Angular form controller</p></ng-doc-blockquote>',this.page=i,this.demoAssets=v}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["ng-doc-page-introduction"]],standalone:!0,features:[n._Bn([{provide:o.a,useExisting:s}]),n.qOj,n.jDz],decls:1,vars:0,template:function(a,m){1&a&&n._UZ(0,"ng-doc-page")},dependencies:[h.z,g,C],encapsulation:2,changeDetection:0}),s})(),I=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({providers:i.providers,imports:[t.ez,p.Bz.forChild([{path:"",component:r,title:"Introduction"}]),p.Bz]}),s})()}}]);