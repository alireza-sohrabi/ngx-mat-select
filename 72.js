"use strict";(self.webpackChunkngx_mat_select=self.webpackChunkngx_mat_select||[]).push([[72],{9072:(N,h,t)=>{t.r(h),t.d(h,{DynamicComponent:()=>C,DynamicModule:()=>G});var m=t(2117),o=t(6814),u=t(6286),_=t(2286),x=t(2941),g=t(95),s=t(5879),y=t(121),v=t(8685),d=t(4170),T=t(8525),b=t(3680),w=t(2599),Z=t(2032),M=t(2296);function B(a,c){if(1&a&&(s.TgZ(0,"mat-option",10),s._uU(1),s.qZA()),2&a){const n=c.$implicit;s.Q6J("value",n),s.xp6(1),s.Oqu(n)}}function k(a,c){if(1&a){const n=s.EpF();s.TgZ(0,"div",1)(1,"div",2)(2,"mat-slide-toggle",3),s.NdJ("toggleChange",function(){s.CHM(n);const l=s.oxw();return s.KtG(l.onThemeModeChange())}),s._uU(3," Dark Mode? "),s.qZA(),s.TgZ(4,"mat-slide-toggle",3),s.NdJ("toggleChange",function(){s.CHM(n);const l=s.oxw();return s.KtG(l.onConfigChange("multiple",!l.config.multiple,!0))}),s._uU(5," Is Multiple Select? "),s.qZA(),s.TgZ(6,"mat-slide-toggle",3),s.NdJ("toggleChange",function(){s.CHM(n);const l=s.oxw();return s.KtG(l.onConfigChange("required",!l.config.required))}),s._uU(7," Is required? "),s.qZA(),s.TgZ(8,"mat-slide-toggle",3),s.NdJ("toggleChange",function(){s.CHM(n);const l=s.oxw();return s.KtG(l.onConfigChange("hasSearchBox",!l.config.hasSearchBox))}),s._uU(9," Has Search-box? "),s.qZA(),s.TgZ(10,"mat-slide-toggle",3),s.NdJ("toggleChange",function(){s.CHM(n);const l=s.oxw();return s.KtG(l.onConfigChange("disabled",!l.config.disabled))}),s._uU(11," Disabled? "),s.qZA(),s.TgZ(12,"button",4),s.NdJ("click",function(){s.CHM(n);const l=s.oxw();return s.KtG(l.clearForms.emit())}),s._uU(13," Reset Form "),s.qZA()(),s.TgZ(14,"div",5)(15,"mat-form-field")(16,"mat-label"),s._uU(17,"Multiple Display Type"),s.qZA(),s.TgZ(18,"mat-select",6),s.NdJ("selectionChange",function(l){s.CHM(n);const p=s.oxw();return s.KtG(p.onConfigChange("multipleDisplay",l.value))}),s.YNc(19,B,2,2,"mat-option",7),s.qZA()(),s.TgZ(20,"mat-form-field")(21,"mat-label"),s._uU(22," placeholder "),s.qZA(),s.TgZ(23,"input",8),s.NdJ("change",function(l){s.CHM(n);const p=s.oxw();return s.KtG(p.onConfigChange("placeholder",p.getValue(l)))}),s.qZA()(),s.TgZ(24,"mat-form-field")(25,"mat-label"),s._uU(26," Search-Box placeholder "),s.qZA(),s.TgZ(27,"input",8),s.NdJ("change",function(l){s.CHM(n);const p=s.oxw();return s.KtG(p.onConfigChange("searchBoxPlaceholder",p.getValue(l)))}),s.qZA()(),s.TgZ(28,"mat-form-field")(29,"mat-label"),s._uU(30," Option Height "),s.qZA(),s.TgZ(31,"input",9),s.NdJ("change",function(l){s.CHM(n);const p=s.oxw();return s.KtG(p.onConfigChange("optionHeight",p.getValue(l)))}),s.qZA(),s.TgZ(32,"mat-hint"),s._uU(33," it can be a number "),s.qZA()(),s.TgZ(34,"mat-form-field")(35,"mat-label"),s._uU(36," Panel Height "),s.qZA(),s.TgZ(37,"input",9),s.NdJ("change",function(l){s.CHM(n);const p=s.oxw();return s.KtG(p.onConfigChange("panelHeight",p.getValue(l)))}),s.qZA(),s.TgZ(38,"mat-hint"),s._uU(39," it can be a number "),s.qZA()(),s.TgZ(40,"mat-form-field")(41,"mat-label"),s._uU(42," Panel Width "),s.qZA(),s.TgZ(43,"input",8),s.NdJ("change",function(l){s.CHM(n);const p=s.oxw();return s.KtG(p.onConfigChange("panelWidth",p.getDimension(p.getValue(l))))}),s.qZA(),s.TgZ(44,"mat-hint"),s._uU(45," it can be in px or number or 'auto', the default value is 'auto' "),s.qZA()()(),s.Hsn(46),s.qZA()}if(2&a){const n=s.oxw();s.xp6(2),s.Q6J("checked",n.darkMode),s.xp6(2),s.Q6J("checked",n.config.multiple),s.xp6(2),s.Q6J("checked",n.config.required),s.xp6(2),s.Q6J("checked",n.config.hasSearchBox),s.xp6(2),s.Q6J("checked",n.config.disabled),s.xp6(8),s.Q6J("disabled",!n.config.multiple)("value",n.config.multipleDisplay)("placeholder","select Multiple Display Type")("multiple",!1),s.xp6(1),s.Q6J("ngForOf",n.multipleViewType),s.xp6(4),s.Q6J("ngModel",n.config.placeholder),s.xp6(4),s.Q6J("ngModel",n.config.searchBoxPlaceholder),s.xp6(4),s.Q6J("ngModel",n.config.optionHeight),s.xp6(6),s.Q6J("ngModel",n.config.panelHeight),s.xp6(6),s.Q6J("ngModel",n.config.panelWidth)}}const A=["*"];let V=(()=>{class a{constructor(){this.configChange=new s.vpe,this.clearForms=new s.vpe,this.multipleViewType=["oneRowChip","multipleRowChip","text"],this.viewTypes=["Default","FullScreen","BottomSheet"],this.darkMode=!0}onConfigChange(n,e,l){this.config&&(this.config[n]=e,this.configChange.emit({...this.config,recreate:l}))}onThemeModeChange(){this.darkMode=!this.darkMode;for(const n of this.getBodyEl())this.darkMode?(n.classList.remove("lightMode"),n.classList.add("darkMode")):(n.classList.remove("darkMode"),n.classList.add("lightMode"))}ngAfterViewInit(){this.onThemeModeChange()}getBodyEl(){return Array.from(document.getElementsByTagName("app-customize"))}getDimension(n){return isNaN(n)?n:Number(n)}getValue(n){return n.target?.value}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-config"]],inputs:{config:"config"},outputs:{configChange:"configChange",clearForms:"clearForms"},ngContentSelectors:A,decls:1,vars:1,consts:[["class","ngx-mat-select-config-container",4,"ngIf"],[1,"ngx-mat-select-config-container"],[1,"ngx-mat-select-toggle-configs"],[3,"checked","toggleChange"],["color","primary","mat-raised-button","",2,"margin","auto","width","250px",3,"click"],[1,"ngx-mat-select-more-configs"],[3,"disabled","value","placeholder","multiple","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text",3,"ngModel","change"],["matInput","","type","number",3,"ngModel","change"],[3,"value"]],template:function(n,e){1&n&&(s.F$t(),s.YNc(0,k,47,15,"div",0)),2&n&&s.Q6J("ngIf",e.config)},dependencies:[o.sg,o.O5,d.KE,d.hX,d.bx,T.gD,b.ey,w.Rr,g.Fj,g.wV,g.JJ,g.On,Z.Nt,M.lW],styles:["[_nghost-%COMP%]{margin:1rem;display:block}.ngx-mat-select-config-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;padding:1rem;flex-direction:column;grid-gap:32px}.ngx-mat-select-toggle-configs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;grid-gap:32px;flex-wrap:wrap}.ngx-mat-select-more-configs[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,250px);grid-gap:2rem;align-items:center}mat-form-field[_ngcontent-%COMP%]{max-width:550px}"],changeDetection:0}),a})();var r=t(5195);function F(a,c){if(1&a&&(s.ynx(0),s.TgZ(1,"form",2)(2,"mat-form-field",3)(3,"mat-label"),s._uU(4,"Customize"),s.qZA(),s._UZ(5,"ngx-mat-select",4,5),s.qZA()(),s.TgZ(7,"code")(8,"div")(9,"b"),s._uU(10,"Form Value"),s.qZA(),s._uU(11),s.ALo(12,"json"),s.qZA(),s.TgZ(13,"div")(14,"b"),s._uU(15,"Select Box Value"),s.qZA(),s._uU(16),s.ALo(17,"json"),s.qZA()(),s.BQk()),2&a){const n=s.MAs(6),e=s.oxw();s.xp6(1),s.Q6J("formGroup",e.reactiveFormGroup),s.xp6(4),s.Q6J("options",e.options)("multiple",e.config.multiple)("formControlName",e.config.multiple?"multipleControl":"singleControl")("hasSearchBox",e.config.hasSearchBox)("hasBackButton",e.config.hasBackButton)("placeholder",e.config.placeholder)("multipleDisplay",e.config.multipleDisplay)("optionLabel",e.config.optionLabel)("searchBoxPlaceholder",e.config.searchBoxPlaceholder)("optionHeight",e.config.optionHeight)("panelHeight",e.config.panelHeight)("panelWidth",e.config.panelWidth),s.xp6(6),s.hij(": ",e.config.multiple?s.lcZ(12,15,e.reactiveFormGroup.value.multipleControl):e.reactiveFormGroup.value.singleControl," "),s.xp6(5),s.hij(": ",s.lcZ(17,17,n.value)," ")}}let J=(()=>{class a{onConfigChange(n){n.recreate&&(this.show=!1,setTimeout(()=>{this.show=!0,this.cdk.detectChanges()}));const e=this.reactiveFormGroup;if(e){const l=e.controls;if(l)for(const p in l){const i=l[p];n.disabled!==i.disabled&&(n.disabled?e.disable():e.enable()),i.hasValidator(g.kI.required)&&!n.required?(i.removeValidators(g.kI.required),i.updateValueAndValidity()):!i.hasValidator(g.kI.required)&&n.required&&(i.addValidators(g.kI.required),i.updateValueAndValidity())}}}onClearForms(){this.reactiveFormGroup?.reset()}constructor(n){this.cdk=n,this.options=Array.from(new Array(2e3)).map((e,l)=>({name:"options_"+l,id:l})),this.show=!0,this.config={optionLabel:"name",optionValue:"id",hasSearchBox:!0,hasBackButton:!1,multipleDisplay:"text",placeholder:"select an option",viewType:"Default",searchBoxPlaceholder:"search",disabled:!1,required:!1,multiple:!0,optionHeight:48,panelHeight:350,panelWidth:"auto",dataKey:"id",overlayPanelClass:"",recreate:!1},this.defaultValue=[{id:150,name:"option_150"},{id:250,name:"option_250"},{id:160,name:"option_160"}],this.reactiveFormGroup=new g.cw({multipleControl:new g.NI(this.defaultValue,{initialValueIsDefault:!1}),singleControl:new g.NI({value:this.defaultValue[0],disabled:!1},{initialValueIsDefault:!0})})}}return a.\u0275fac=function(n){return new(n||a)(s.Y36(s.sBO))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-customize"]],decls:5,vars:2,consts:[[3,"config","clearForms","configChange"],[4,"ngIf"],[2,"display","flex","justify-content","center",3,"formGroup"],[2,"width","100%"],["clientSide","",3,"options","multiple","formControlName","hasSearchBox","hasBackButton","placeholder","multipleDisplay","optionLabel","searchBoxPlaceholder","optionHeight","panelHeight","panelWidth"],["selectBox",""]],template:function(n,e){1&n&&(s.TgZ(0,"mat-card")(1,"mat-card-header")(2,"app-config",0),s.NdJ("clearForms",function(){return e.onClearForms()})("configChange",function(p){return e.onConfigChange(p)}),s.qZA()(),s.TgZ(3,"mat-card-content"),s.YNc(4,F,18,19,"ng-container",1),s.qZA()()),2&n&&(s.xp6(2),s.Q6J("config",e.config),s.xp6(2),s.Q6J("ngIf",e.show))},dependencies:[o.O5,y.K,v.G,d.KE,d.hX,V,g._Y,g.JJ,g.JL,g.sg,g.u,r.a8,r.dn,r.dk,o.Ts],encapsulation:2}),a})();var z=t(2707),D=t(3647);let j=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[o.ez,z.LW,d.lN,D.p,g.UX,r.QW]}),a})();const f={title:"Customize Select Box",mdFile:"./index.md",category:x.Z,order:6,imports:[j],demos:{CustomizeComponent:J}};let H=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[o.ez]}),a})();const q={CustomizeComponent:[{title:"TypeScript",codeType:"TypeScript",code:'<pre class="ngde hljs"><code lang="typescript" class="hljs language-typescript code-lines ngde"><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">ChangeDetectorRef</span>, <span class="hljs-title class_ ngde">Component</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">"@angular/core"</span>;\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">NgxMatSelectConfigExample</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">"./customize-model"</span>;\n</span><span class="line ngde"><span class="hljs-keyword ngde">import</span> { <span class="hljs-title class_ ngde">FormControl</span>, <span class="hljs-title class_ ngde">FormGroup</span>, <span class="hljs-title class_ ngde">Validators</span> } <span class="hljs-keyword ngde">from</span> <span class="hljs-string ngde">"@angular/forms"</span>;\n</span><span class="line ngde">\n</span><span class="line ngde"><span class="hljs-meta ngde">@Component</span>({\n</span><span class="line ngde">  <span class="hljs-attr ngde">selector</span>: <span class="hljs-string ngde">"app-customize"</span>,\n</span><span class="line ngde">  <span class="hljs-attr ngde">templateUrl</span>: <span class="hljs-string ngde">"./customize.component.html"</span>,\n</span><span class="line ngde">})\n</span><span class="line ngde"><span class="hljs-keyword ngde">export</span> <span class="hljs-keyword ngde">class</span> <span class="hljs-title class_ ngde">CustomizeComponent</span> {\n</span><span class="line ngde">  options = <span class="hljs-title class_ ngde">Array</span>.<span class="hljs-title function_ ngde">from</span>(<span class="hljs-keyword ngde">new</span> <span class="hljs-title class_ ngde">Array</span>(<span class="hljs-number ngde">2000</span>)).<span class="hljs-title function_ ngde">map</span>(<span class="hljs-function ngde">(<span class="hljs-params ngde">_, index</span>) =></span> ({\n</span><span class="line ngde">    <span class="hljs-attr ngde">name</span>: <span class="hljs-string ngde">"options_"</span> + index,\n</span><span class="line ngde">    <span class="hljs-attr ngde">id</span>: index,\n</span><span class="line ngde">  }));\n</span><span class="line ngde">  show = <span class="hljs-literal ngde">true</span>;\n</span><span class="line ngde">\n</span><span class="line ngde">  <span class="hljs-attr ngde">config</span>: <span class="hljs-title class_ ngde">NgxMatSelectConfigExample</span> = {\n</span><span class="line ngde">    <span class="hljs-attr ngde">optionLabel</span>: <span class="hljs-string ngde">"name"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">optionValue</span>: <span class="hljs-string ngde">"id"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">hasSearchBox</span>: <span class="hljs-literal ngde">true</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">hasBackButton</span>: <span class="hljs-literal ngde">false</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">multipleDisplay</span>: <span class="hljs-string ngde">"text"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">placeholder</span>: <span class="hljs-string ngde">"select an option"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">viewType</span>: <span class="hljs-string ngde">"Default"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">searchBoxPlaceholder</span>: <span class="hljs-string ngde">"search"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">disabled</span>: <span class="hljs-literal ngde">false</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">required</span>: <span class="hljs-literal ngde">false</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">multiple</span>: <span class="hljs-literal ngde">true</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">optionHeight</span>: <span class="hljs-number ngde">48</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">panelHeight</span>: <span class="hljs-number ngde">350</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">panelWidth</span>: <span class="hljs-string ngde">"auto"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">dataKey</span>: <span class="hljs-string ngde">"id"</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">overlayPanelClass</span>: <span class="hljs-string ngde">""</span>,\n</span><span class="line ngde">    <span class="hljs-attr ngde">recreate</span>: <span class="hljs-literal ngde">false</span>,\n</span><span class="line ngde">  };\n</span><span class="line ngde">\n</span><span class="line ngde">  defaultValue = [\n</span><span class="line ngde">    { <span class="hljs-attr ngde">id</span>: <span class="hljs-number ngde">150</span>, <span class="hljs-attr ngde">name</span>: <span class="hljs-string ngde">`option_<span class="hljs-subst ngde">${<span class="hljs-number ngde">150</span>}</span>`</span> },\n</span><span class="line ngde">    { <span class="hljs-attr ngde">id</span>: <span class="hljs-number ngde">250</span>, <span class="hljs-attr ngde">name</span>: <span class="hljs-string ngde">`option_<span class="hljs-subst ngde">${<span class="hljs-number ngde">250</span>}</span>`</span> },\n</span><span class="line ngde">    {\n</span><span class="line ngde">      <span class="hljs-attr ngde">id</span>: <span class="hljs-number ngde">160</span>,\n</span><span class="line ngde">      <span class="hljs-attr ngde">name</span>: <span class="hljs-string ngde">`option_<span class="hljs-subst ngde">${<span class="hljs-number ngde">160</span>}</span>`</span>,\n</span><span class="line ngde">    },\n</span><span class="line ngde">  ];\n</span><span class="line ngde">\n</span><span class="line ngde">  reactiveFormGroup = <span class="hljs-keyword ngde">new</span> <span class="hljs-title class_ ngde">FormGroup</span>({\n</span><span class="line ngde">    <span class="hljs-attr ngde">multipleControl</span>: <span class="hljs-keyword ngde">new</span> <span class="hljs-title class_ ngde">FormControl</span>(<span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">defaultValue</span>, {\n</span><span class="line ngde">      <span class="hljs-attr ngde">initialValueIsDefault</span>: <span class="hljs-literal ngde">false</span>,\n</span><span class="line ngde">    }),\n</span><span class="line ngde">    <span class="hljs-attr ngde">singleControl</span>: <span class="hljs-keyword ngde">new</span> <span class="hljs-title class_ ngde">FormControl</span>(\n</span><span class="line ngde">      { <span class="hljs-attr ngde">value</span>: <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">defaultValue</span>[<span class="hljs-number ngde">0</span>], <span class="hljs-attr ngde">disabled</span>: <span class="hljs-literal ngde">false</span> },\n</span><span class="line ngde">      { <span class="hljs-attr ngde">initialValueIsDefault</span>: <span class="hljs-literal ngde">true</span> }\n</span><span class="line ngde">    ),\n</span><span class="line ngde">  });\n</span><span class="line ngde">\n</span><span class="line ngde">  <span class="hljs-title function_ ngde">onConfigChange</span>(<span class="hljs-params ngde">config: NgxMatSelectConfigExample</span>) {\n</span><span class="line ngde">    <span class="hljs-keyword ngde">if</span> (config.<span class="hljs-property ngde">recreate</span>) {\n</span><span class="line ngde">      <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">show</span> = <span class="hljs-literal ngde">false</span>;\n</span><span class="line ngde">\n</span><span class="line ngde">      <span class="hljs-built_in ngde">setTimeout</span>(<span class="hljs-function ngde">() =></span> {\n</span><span class="line ngde">        <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">show</span> = <span class="hljs-literal ngde">true</span>;\n</span><span class="line ngde">        <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">cdk</span>.<span class="hljs-title function_ ngde">detectChanges</span>();\n</span><span class="line ngde">      });\n</span><span class="line ngde">    }\n</span><span class="line ngde">\n</span><span class="line ngde">    <span class="hljs-keyword ngde">const</span> form = <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">reactiveFormGroup</span>;\n</span><span class="line ngde">    <span class="hljs-keyword ngde">if</span> (form) {\n</span><span class="line ngde">      <span class="hljs-keyword ngde">const</span> controls = form.<span class="hljs-property ngde">controls</span>;\n</span><span class="line ngde">\n</span><span class="line ngde">      <span class="hljs-keyword ngde">if</span> (controls) {\n</span><span class="line ngde">        <span class="hljs-keyword ngde">for</span> (<span class="hljs-keyword ngde">const</span> controlKey <span class="hljs-keyword ngde">in</span> controls) {\n</span><span class="line ngde">          <span class="hljs-keyword ngde">const</span> control = (controls <span class="hljs-keyword ngde">as</span> <span class="hljs-built_in ngde">any</span>)[controlKey];\n</span><span class="line ngde">\n</span><span class="line ngde">          <span class="hljs-keyword ngde">if</span> (config.<span class="hljs-property ngde">disabled</span> !== control.<span class="hljs-property ngde">disabled</span>) {\n</span><span class="line ngde">            <span class="hljs-keyword ngde">if</span> (config.<span class="hljs-property ngde">disabled</span>) {\n</span><span class="line ngde">              form.<span class="hljs-title function_ ngde">disable</span>();\n</span><span class="line ngde">            } <span class="hljs-keyword ngde">else</span> {\n</span><span class="line ngde">              form.<span class="hljs-title function_ ngde">enable</span>();\n</span><span class="line ngde">            }\n</span><span class="line ngde">          }\n</span><span class="line ngde">\n</span><span class="line ngde">          <span class="hljs-keyword ngde">if</span> (control.<span class="hljs-title function_ ngde">hasValidator</span>(<span class="hljs-title class_ ngde">Validators</span>.<span class="hljs-property ngde">required</span>) &#x26;&#x26; !config.<span class="hljs-property ngde">required</span>) {\n</span><span class="line ngde">            control.<span class="hljs-title function_ ngde">removeValidators</span>(<span class="hljs-title class_ ngde">Validators</span>.<span class="hljs-property ngde">required</span>);\n</span><span class="line ngde">            control.<span class="hljs-title function_ ngde">updateValueAndValidity</span>();\n</span><span class="line ngde">          } <span class="hljs-keyword ngde">else</span> <span class="hljs-keyword ngde">if</span> (\n</span><span class="line ngde">            !control.<span class="hljs-title function_ ngde">hasValidator</span>(<span class="hljs-title class_ ngde">Validators</span>.<span class="hljs-property ngde">required</span>) &#x26;&#x26;\n</span><span class="line ngde">            config.<span class="hljs-property ngde">required</span>\n</span><span class="line ngde">          ) {\n</span><span class="line ngde">            control.<span class="hljs-title function_ ngde">addValidators</span>(<span class="hljs-title class_ ngde">Validators</span>.<span class="hljs-property ngde">required</span>);\n</span><span class="line ngde">            control.<span class="hljs-title function_ ngde">updateValueAndValidity</span>();\n</span><span class="line ngde">          }\n</span><span class="line ngde">        }\n</span><span class="line ngde">      }\n</span><span class="line ngde">    }\n</span><span class="line ngde">  }\n</span><span class="line ngde">\n</span><span class="line ngde">  <span class="hljs-title function_ ngde">onClearForms</span>(<span class="hljs-params ngde"></span>) {\n</span><span class="line ngde">    <span class="hljs-variable language_ ngde">this</span>.<span class="hljs-property ngde">reactiveFormGroup</span>?.<span class="hljs-title function_ ngde">reset</span>();\n</span><span class="line ngde">  }\n</span><span class="line ngde">\n</span><span class="line ngde">  <span class="hljs-title function_ ngde">constructor</span>(<span class="hljs-params ngde"><span class="hljs-keyword ngde">private</span> cdk: ChangeDetectorRef</span>) {}\n</span><span class="line ngde">}\n</span></code></pre>'},{title:"HTML",codeType:"HTML",code:'<pre class="ngde hljs"><code lang="html" class="hljs language-html code-lines ngde"><span class="line ngde"><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-card</span>></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-card-header</span>></span>\n</span><span class="line ngde">    &#x3C;<span class="hljs-name ngde">app-config</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">      [</span><span class="hljs-attr ngde">config</span>]=<span class="hljs-string ngde">"config"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">      (</span><span class="hljs-attr ngde">clearForms</span>)=<span class="hljs-string ngde">"onClearForms()"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">      (</span><span class="hljs-attr ngde">configChange</span>)=<span class="hljs-string ngde">"onConfigChange($event)"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">    ></span><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">app-config</span>></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-card-header</span>></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-card-content</span>></span>\n</span><span class="line ngde">    <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">ng-container</span> *<span class="hljs-attr ngde">ngIf</span>=<span class="hljs-string ngde">"show"</span>></span>\n</span><span class="line ngde">      &#x3C;<span class="hljs-name ngde">form</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">        [</span><span class="hljs-attr ngde">formGroup</span>]=<span class="hljs-string ngde">"reactiveFormGroup"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">        </span><span class="hljs-attr ngde">style</span>=<span class="hljs-string ngde">"display: flex; justify-content: center"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">      ></span>\n</span><span class="line ngde">        <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-form-field</span> <span class="hljs-attr ngde">style</span>=<span class="hljs-string ngde">"width: 100%"</span>></span>\n</span><span class="line ngde">          <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">mat-label</span>></span>Customize<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-label</span>></span>\n</span><span class="line ngde">\n</span><span class="line ngde">          &#x3C;<span class="hljs-name ngde">ngx-mat-select</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            </span><span class="hljs-attr ngde">clientSide</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            #</span><span class="hljs-attr ngde">selectBox</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">options</span>]=<span class="hljs-string ngde">"options"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">multiple</span>]=<span class="hljs-string ngde">"config.multiple"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">formControlName</span>]=<span class="hljs-string ngde">"config.multiple? \'multipleControl\': \'singleControl\'"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">hasSearchBox</span>]=<span class="hljs-string ngde">"config.hasSearchBox"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">hasBackButton</span>]=<span class="hljs-string ngde">"config.hasBackButton"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">placeholder</span>]=<span class="hljs-string ngde">"config.placeholder"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">multipleDisplay</span>]=<span class="hljs-string ngde">"config.multipleDisplay"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">optionLabel</span>]=<span class="hljs-string ngde">"config.optionLabel"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">searchBoxPlaceholder</span>]=<span class="hljs-string ngde">"config.searchBoxPlaceholder"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">optionHeight</span>]=<span class="hljs-string ngde">"config.optionHeight"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">panelHeight</span>]=<span class="hljs-string ngde">"config.panelHeight"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">            [</span><span class="hljs-attr ngde">panelWidth</span>]=<span class="hljs-string ngde">"config.panelWidth"</span><span class="hljs-tag ngde"></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">          ></span><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">ngx-mat-select</span>></span>\n</span><span class="line ngde">        <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-form-field</span>></span>\n</span><span class="line ngde">      <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">form</span>></span>\n</span><span class="line ngde">      <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">code</span>></span>\n</span><span class="line ngde">        <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">div</span>></span>\n</span><span class="line ngde">          <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">b</span>></span>Form Value<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">b</span>></span>: {{config.multiple ?\n</span><span class="line ngde">          (reactiveFormGroup.value.multipleControl | json) :\n</span><span class="line ngde">          reactiveFormGroup.value.singleControl}}\n</span><span class="line ngde">        <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">div</span>></span>\n</span><span class="line ngde">        <span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">div</span>></span><span class="hljs-tag ngde">&#x3C;<span class="hljs-name ngde">b</span>></span>Select Box Value<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">b</span>></span>: {{selectBox.value | json}}<span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">div</span>></span>\n</span><span class="line ngde">      <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">code</span>></span>\n</span><span class="line ngde">    <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">ng-container</span>></span>\n</span><span class="line ngde">  <span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-card-content</span>></span>\n</span><span class="line ngde"><span class="hljs-tag ngde">&#x3C;/<span class="hljs-name ngde">mat-card</span>></span>\n</span></code></pre>'}]};let C=(()=>{class a extends u.a{constructor(){super(),this.routePrefix="",this.pageType="guide",this.pageContent='<h1 id="customize-select-box" class="ngde">Customize Select Box<a title="Link to heading" class="ng-doc-header-link ngde" href="/other-examples/customize#customize-select-box"><ng-doc-icon icon="link-2" size="16" class="ngde"></ng-doc-icon></a></h1><ng-doc-demo componentname="CustomizeComponent" indexable="false" class="ngde"><div id="options" class="ngde">{"expanded":false}</div></ng-doc-demo>',this.page=f,this.demoAssets=q}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=s.Xpm({type:a,selectors:[["ng-doc-page-other-examples-customize"]],standalone:!0,features:[s._Bn([{provide:u.a,useExisting:a}]),s.qOj,s.jDz],decls:1,vars:0,template:function(n,e){1&n&&s._UZ(0,"ng-doc-page")},dependencies:[_.z,j,H],encapsulation:2,changeDetection:0}),a})(),G=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({providers:f.providers,imports:[o.ez,m.Bz.forChild([{path:"",component:C,title:"Customize Select Box"}]),m.Bz]}),a})()}}]);