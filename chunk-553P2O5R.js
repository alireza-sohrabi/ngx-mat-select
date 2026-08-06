import{f as tn,g as nn,h as gt,i as an,j as _t,k as zt,m as on,p as rn}from"./chunk-TSNOT6FV.js";import{C as we,E as Qe,F as Se,H as ht,I as Te,J as Q,K as Ui,L as Ki,M as Xi,N as ut,O as Yi,Q as Zi,R as re,S as Re,X as Ji,Y as ft,Z as en,b as qi,d as ct,e as dt,f as Gi,i as mt,k as Qi,o as pt,q as Wi}from"./chunk-UX5SBSI7.js";import{$a as _,Aa as ce,Ab as xe,B as _i,Ba as S,Bb as Z,C as vi,Cb as rt,D as it,Db as Ce,Eb as Ni,Fa as y,Fb as Bi,G as bi,Ga as R,Gb as zi,H as nt,Ha as I,Hb as Rt,Ia as Ei,Ib as J,Jb as Vi,K as yi,Ka as de,Kb as At,La as K,Lb as Lt,M as q,Mb as oe,N as Ve,Na as Fi,Nb as He,O as k,Ob as $e,Q as P,Qb as st,Ra as w,S as xi,Sb as lt,Ub as ji,V as ke,W as T,Wa as m,Wb as qe,X as C,Xa as p,Xb as Hi,Ya as Ii,Z as s,Za as Oi,Zb as Pt,_a as Ti,_b as z,a as hi,aa as _e,ab as c,ac as V,ba as ve,bb as d,bc as Oe,c as ui,ca as be,cb as v,cc as $i,da as Ee,db as X,e as A,ea as Fe,eb as Y,f as ze,fb as me,g as Et,ga as E,gb as Ri,ha as N,hb as Ai,hc as Nt,ia as at,ib as ot,ja as Ci,jb as ye,jc as Ge,ka as je,kb as pe,kc as Bt,la as It,lb as M,ma as wi,n as Ft,na as L,nb as h,nc as ue,oa as Si,ob as B,p as ne,pb as b,q as fi,qb as ae,ra as Mi,rb as G,sb as f,tb as g,u as gi,ub as Li,vb as Pi,w as le,wa as l,wb as Tt,xa as Di,xb as he,y as $,ya as Ot,yb as Ie,za as ki,zb as x}from"./chunk-IZ2P4M6F.js";import{a as H}from"./chunk-CEWFFWI2.js";function Me(i){return i!=null&&`${i}`!="false"}var Ae,sn=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Cr(){if(Ae)return Ae;if(typeof document!="object"||!document)return Ae=new Set(sn),Ae;let i=document.createElement("input");return Ae=new Set(sn.filter(a=>(i.setAttribute("type",a),i.type===a))),Ae}var Vt=class{_box;_destroyed=new A;_resizeSubject=new A;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new ui(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe($(e=>e.some(t=>t.target===a)),yi({bufferSize:1,refCount:!0}),k(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ln=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(N);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Vt(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ar={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var ia=new C("MATERIAL_ANIMATIONS"),cn=null;function jt(){return s(ia,{optional:!0})?.animationsDisabled||s(Mi,{optional:!0})==="NoopAnimations"?"di-disabled":(cn??=s(zt).matchMedia("(prefers-reduced-motion)").matches,cn?"reduced-motion":"enabled")}function ee(){return jt()!=="enabled"}var na=["notch"],aa=["matFormFieldNotchedOutline",""],oa=["*"],dn=["iconPrefixContainer"],mn=["textPrefixContainer"],pn=["iconSuffixContainer"],hn=["textSuffixContainer"],ra=["textField"],sa=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],la=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function ca(i,a){i&1&&v(0,"span",21)}function da(i,a){if(i&1&&(c(0,"label",20),b(1,1),m(2,ca,1,0,"span",21),d()),i&2){let e=h(2);_("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),w("for",e._control.disableAutomaticLabeling?null:e._control.id),l(2),p(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ma(i,a){if(i&1&&m(0,da,3,5,"label",20),i&2){let e=h();p(e._hasFloatingLabel()?0:-1)}}function pa(i,a){i&1&&v(0,"div",7)}function ha(i,a){}function ua(i,a){if(i&1&&K(0,ha,0,0,"ng-template",13),i&2){h(2);let e=he(1);_("ngTemplateOutlet",e)}}function fa(i,a){if(i&1&&(c(0,"div",9),m(1,ua,1,1,null,13),d()),i&2){let e=h();_("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),l(),p(e._forceDisplayInfixLabel()?-1:1)}}function ga(i,a){i&1&&(c(0,"div",10,2),b(2,2),d())}function _a(i,a){i&1&&(c(0,"div",11,3),b(2,3),d())}function va(i,a){}function ba(i,a){if(i&1&&K(0,va,0,0,"ng-template",13),i&2){h();let e=he(1);_("ngTemplateOutlet",e)}}function ya(i,a){i&1&&(c(0,"div",14,4),b(2,4),d())}function xa(i,a){i&1&&(c(0,"div",15,5),b(2,5),d())}function Ca(i,a){i&1&&v(0,"div",16)}function wa(i,a){i&1&&(c(0,"div",18),b(1,6),d())}function Sa(i,a){if(i&1&&(c(0,"mat-hint",22),Z(1),d()),i&2){let e=h(2);_("id",e._hintLabelId),l(),rt(e.hintLabel)}}function Ma(i,a){if(i&1&&(c(0,"div",19),m(1,Sa,2,2,"mat-hint",22),b(2,7),v(3,"div",23),b(4,8),d()),i&2){let e=h();l(),p(e.hintLabel?1:-1)}}var Ht=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["mat-label"]]})}return i})(),yn=new C("MatError");var $t=(()=>{class i{align="start";id=s(re).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(pe("id",n.id),w("align",null),x("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),xn=new C("MatPrefix");var Cn=new C("MatSuffix");var wn=new C("FloatingLabelParent"),un=(()=>{class i{_elementRef=s(L);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(ln);_ngZone=s(N);_parent=s(wn);_resizeSubscription=new hi;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Da(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&x("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Da(i){let a=i;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var fn="mdc-line-ripple--active",vt="mdc-line-ripple--deactivating",gn=(()=>{class i{_elementRef=s(L);_cleanupTransitionEnd;constructor(){let e=s(N),t=s(ce);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(vt),e.add(fn)}deactivate(){this._elementRef.nativeElement.classList.add(vt)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(vt);e.propertyName==="opacity"&&n&&t.remove(fn,vt)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),_n=(()=>{class i{_elementRef=s(L);_ngZone=s(N);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&G(na,5),t&2){let o;f(o=g())&&(n._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&x("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:aa,ngContentSelectors:oa,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(B(),me(0,"div",1),X(1,"div",2,0),b(3),Y(),me(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),Le=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i})}return i})();var Pe=new C("MatFormField"),Sn=new C("MAT_FORM_FIELD_DEFAULT_OPTIONS"),vn="fill",ka="auto",bn="fixed",Ea="translateY(-50%)",Mn=(()=>{class i{_elementRef=s(L);_changeDetectorRef=s(z);_platform=s(we);_idGenerator=s(re);_ngZone=s(N);_defaults=s(Sn,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=qe("iconPrefixContainer");_textPrefixContainerSignal=qe("textPrefixContainer");_iconSuffixContainerSignal=qe("iconSuffixContainer");_textSuffixContainerSignal=qe("textSuffixContainer");_prefixSuffixContainers=lt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Hi(Ht);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Me(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ka}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||vn;this._appearanceSignal.set(t)}_appearanceSignal=at(vn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||bn}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||bn}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new A;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ee();constructor(){let e=this._defaults,t=s(Te);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ci(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=lt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(q([void 0,void 0]),ne(()=>[t.errorState,t.userAriaDescribedBy]),nt(),$(([[o,r],[u,O]])=>o!==u||r!==O)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(k(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),le(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){$i({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=lt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(u=>u.align==="start"):null,r=this._hintChildren?this._hintChildren.find(u=>u.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,n;if(t){let o=this._describedByIds||e;n=e.concat(t.filter(r=>r&&!o.includes(r)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,u=t?.getBoundingClientRect().width??0,O=n?.getBoundingClientRect().width??0,F=o?.getBoundingClientRect().width??0,D=this._currentDirection==="rtl"?"-1":"1",ge=`${r+u}px`,et=`calc(${D} * (${ge} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Be=`var(--mat-mdc-form-field-label-transform, ${Ea} translateX(${et}))`,ie=r+u+O+F;return[Be,ie]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,o){if(t&1&&(Li(o,n._labelChild,Ht,5),ae(o,Le,5)(o,xn,5)(o,Cn,5)(o,yn,5)(o,$t,5)),t&2){Tt();let r;f(r=g())&&(n._formFieldControl=r.first),f(r=g())&&(n._prefixChildren=r),f(r=g())&&(n._suffixChildren=r),f(r=g())&&(n._errorChildren=r),f(r=g())&&(n._hintChildren=r)}},viewQuery:function(t,n){if(t&1&&(Pi(n._iconPrefixContainerSignal,dn,5)(n._textPrefixContainerSignal,mn,5)(n._iconSuffixContainerSignal,pn,5)(n._textSuffixContainerSignal,hn,5),G(ra,5)(dn,5)(mn,5)(pn,5)(hn,5)(un,5)(_n,5)(gn,5)),t&2){Tt(4);let o;f(o=g())&&(n._textField=o.first),f(o=g())&&(n._iconPrefixContainer=o.first),f(o=g())&&(n._textPrefixContainer=o.first),f(o=g())&&(n._iconSuffixContainer=o.first),f(o=g())&&(n._textSuffixContainer=o.first),f(o=g())&&(n._floatingLabel=o.first),f(o=g())&&(n._notchedOutline=o.first),f(o=g())&&(n._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&x("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[J([{provide:Pe,useExisting:i},{provide:wn,useExisting:i}])],ngContentSelectors:la,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(B(sa),K(0,ma,1,1,"ng-template",null,0,st),c(2,"div",6,1),M("click",function(r){return n._control.onContainerClick(r)}),m(4,pa,1,0,"div",7),c(5,"div",8),m(6,fa,2,2,"div",9),m(7,ga,3,0,"div",10),m(8,_a,3,0,"div",11),c(9,"div",12),m(10,ba,1,1,null,13),b(11),d(),m(12,ya,3,0,"div",14),m(13,xa,3,0,"div",15),d(),m(14,Ca,1,0,"div",16),d(),c(15,"div",17),m(16,wa,2,0,"div",18)(17,Ma,5,1,"div",19),d()),t&2){let o;l(2),x("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),l(2),p(!n._hasOutline()&&!n._control.disabled?4:-1),l(2),p(n._hasOutline()?6:-1),l(),p(n._hasIconPrefix?7:-1),l(),p(n._hasTextPrefix?8:-1),l(2),p(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),l(2),p(n._hasTextSuffix?12:-1),l(),p(n._hasIconSuffix?13:-1),l(),p(n._hasOutline()?-1:14),l(),x("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let r=n._getSubscriptMessageType();l(),p((o=r)==="error"?16:o==="hint"?17:-1)}},dependencies:[un,_n,Ge,gn,$t],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var us=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=R({type:i});static \u0275inj=T({imports:[on,Mn,Q]})}return i})();var W=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(W||{}),qt=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=W.HIDDEN;constructor(a,e,t,n=!1){this._renderer=a,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},Dn=gt({passive:!0,capture:!0}),Gt=class{_events=new Map;addHandler(a,e,t,n){let o=this._events.get(e);if(o){let r=o.get(t);r?r.add(n):o.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),a.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Dn)})}removeHandler(a,e,t){let n=this._events.get(a);if(!n)return;let o=n.get(e);o&&(o.delete(t),o.size===0&&n.delete(e),n.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Dn)))}_delegateEventHandler=a=>{let e=Qe(a);e&&this._events.get(a.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(o=>o.handleEvent(a))})}},We={enterDuration:225,exitDuration:150},Fa=800,kn=gt({passive:!0,capture:!0}),En=["mousedown","touchstart"],Fn=["mouseup","mouseleave","touchend","touchcancel"],Ia=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Ue=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Gt;constructor(a,e,t,n,o){this._target=a,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=ht(t)),o&&o.get(Se).load(Ia)}fadeInRipple(a,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=H(H({},We),t.animation);t.centered&&(a=n.left+n.width/2,e=n.top+n.height/2);let r=t.radius||Oa(a,e,n),u=a-n.left,O=e-n.top,F=o.enterDuration,D=document.createElement("div");D.classList.add("mat-ripple-element"),D.style.left=`${u-r}px`,D.style.top=`${O-r}px`,D.style.height=`${r*2}px`,D.style.width=`${r*2}px`,t.color!=null&&(D.style.backgroundColor=t.color),D.style.transitionDuration=`${F}ms`,this._containerElement.appendChild(D);let ge=window.getComputedStyle(D),se=ge.transitionProperty,et=ge.transitionDuration,Be=se==="none"||et==="0s"||et==="0s, 0s"||n.width===0&&n.height===0,ie=new qt(this,D,t,Be);D.style.transform="scale3d(1, 1, 1)",ie.state=W.FADING_IN,t.persistent||(this._mostRecentTransientRipple=ie);let tt=null;return!Be&&(F||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let mi=()=>{tt&&(tt.fallbackTimer=null),clearTimeout(pi),this._finishRippleTransition(ie)},kt=()=>this._destroyRipple(ie),pi=setTimeout(kt,F+100);D.addEventListener("transitionend",mi),D.addEventListener("transitioncancel",kt),tt={onTransitionEnd:mi,onTransitionCancel:kt,fallbackTimer:pi}}),this._activeRipples.set(ie,tt),(Be||!F)&&this._finishRippleTransition(ie),ie}fadeOutRipple(a){if(a.state===W.FADING_OUT||a.state===W.HIDDEN)return;let e=a.element,t=H(H({},We),a.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",a.state=W.FADING_OUT,(a._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let e=ht(a);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,En.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(a){a.type==="mousedown"?this._onMousedown(a):a.type==="touchstart"?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Fn.forEach(e=>{this._triggerElement.addEventListener(e,this,kn)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===W.FADING_IN?this._startFadeOutTransition(a):a.state===W.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let e=a===this._mostRecentTransientRipple,{persistent:t}=a.config;a.state=W.VISIBLE,!t&&(!e||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let e=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=W.HIDDEN,e!==null&&(a.element.removeEventListener("transitionend",e.onTransitionEnd),a.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),a.element.remove()}_onMousedown(a){let e=tn(a),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Fa;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!nn(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=a.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let e=a.state===W.VISIBLE||a.config.terminateOnPointerUp&&a.state===W.FADING_IN;!a.config.persistent&&e&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(En.forEach(e=>i._eventManager.removeHandler(e,a,this)),this._pointerUpEventsRegistered&&(Fn.forEach(e=>a.removeEventListener(e,this,kn)),this._pointerUpEventsRegistered=!1))}};function Oa(i,a,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(a-e.top),Math.abs(a-e.bottom));return Math.sqrt(t*t+n*n)}var Ke=new C("mat-ripple-global-options"),In=(()=>{class i{_elementRef=s(L);_animationsDisabled=ee();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(N),t=s(we),n=s(Ke,{optional:!0}),o=s(Ee);this._globalOptions=n||{},this._rippleRenderer=new Ue(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:H(H(H({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,H(H({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,H(H({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&x("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=R({type:i});static \u0275inj=T({imports:[Q]})}return i})();var On=(()=>{class i{_animationsDisabled=ee();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&x("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Tn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=R({type:i});static \u0275inj=T({imports:[Q]})}return i})();var Xe=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Ta=["text"],Ra=[[["mat-icon"]],"*"],Aa=["mat-icon","*"];function La(i,a){if(i&1&&v(0,"mat-pseudo-checkbox",1),i&2){let e=h();_("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Pa(i,a){if(i&1&&v(0,"mat-pseudo-checkbox",3),i&2){let e=h();_("disabled",e.disabled)}}function Na(i,a){if(i&1&&(c(0,"span",4),Z(1),d()),i&2){let e=h();l(),Ce("(",e.group.label,")")}}var Ct=new C("MAT_OPTION_PARENT_COMPONENT"),Rn=new C("MatOptgroup");var yt=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},fe=(()=>{class i{_element=s(L);_changeDetectorRef=s(z);_parent=s(Ct,{optional:!0});group=s(Rn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(re).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=at(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new E;_text;_stateChanges=new A;constructor(){let e=s(Se);e.load(Xe),e.load(_t),this._signalDisableRipple=!!this._parent&&Fi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Re(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new yt(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&G(Ta,7),t&2){let o;f(o=g())&&(n._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&M("click",function(){return n._selectViaInteraction()})("keydown",function(r){return n._handleKeydown(r)}),t&2&&(pe("id",n.id),w("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),x("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",V]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Aa,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(B(Ra),m(0,La,1,2,"mat-pseudo-checkbox",1),b(1),c(2,"span",2,0),b(4,1),d(),m(5,Pa,1,1,"mat-pseudo-checkbox",3),m(6,Na,2,1,"span",4),v(7,"div",5)),t&2&&(p(n.multiple?0:-1),l(5),p(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),l(),p(n.group&&n.group._inert?6:-1),l(),_("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[On,In],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function Ba(i,a,e){if(e.length){let t=a.toArray(),n=e.toArray(),o=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===n[o]&&o++;return o}return 0}function za(i,a,e,t){return i<e?i:i+a>e+t?Math.max(0,i-t+a):e}var Qt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=R({type:i});static \u0275inj=T({imports:[bt,Tn,fe,Q]})}return i})();var Ne=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Va={capture:!0},ja=["focus","mousedown","mouseenter","touchstart"],Wt="mat-ripple-loader-uninitialized",Ut="mat-ripple-loader-class-name",An="mat-ripple-loader-centered",wt="mat-ripple-loader-disabled",Ln=(()=>{class i{_document=s(Fe);_animationsDisabled=ee();_globalRippleOptions=s(Ke,{optional:!0});_platform=s(we);_ngZone=s(N);_injector=s(Ee);_eventCleanups;_hosts=new Map;constructor(){let e=s(ki).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ja.map(t=>e.listen(this._document,t,this._onInteraction,Va)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Wt,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ut))&&e.setAttribute(Ut,t.className||""),t.centered&&e.setAttribute(An,""),t.disabled&&e.setAttribute(wt,"")}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(wt,""):e.removeAttribute(wt)}_onInteraction=e=>{let t=Qe(e);if(t instanceof HTMLElement){let n=t.closest(`[${Wt}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ut)),e.append(t);let n=this._globalRippleOptions,o=this._animationsDisabled?0:n?.animation?.enterDuration??We.enterDuration,r=this._animationsDisabled?0:n?.animation?.exitDuration??We.exitDuration,u={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(wt),rippleConfig:{centered:e.hasAttribute(An),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},O=new Ue(u,this._ngZone,t,this._platform,this._injector),F=!u.rippleDisabled;F&&O.setupTriggerEvents(e),this._hosts.set(e,{target:u,renderer:O,hasSetUpEvents:F}),e.removeAttribute(Wt)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var St=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(a,e,t,n,o){this._defaultMatcher=a,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o}updateErrorState(){let a=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(n,e)??!1;o!==a&&(this.errorState=o,this._stateChanges.next())}};var Ha=["mat-internal-form-field",""],$a=["*"],pl=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&x("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Ha,ngContentSelectors:$a,decls:1,vars:0,template:function(t,n){t&1&&(B(),b(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ye=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new A;constructor(a=!1,e,t=!0,n){this._multiple=a,this._emitChanges=t,this.compareWith=n,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var te=(function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i})(te||{}),Ga="*";function Mt(i,a){return{type:te.Trigger,name:i,definitions:a,options:{}}}function Dt(i,a=null){return{type:te.Animate,styles:a,timings:i}}function Dl(i,a=null){return{type:te.Sequence,steps:i,options:a}}function Ze(i){return{type:te.Style,styles:i,offset:null}}function Yt(i,a,e){return{type:te.State,name:i,styles:a,options:e}}function Je(i,a,e=null){return{type:te.Transition,expr:i,animation:a,options:e}}function Zt(i=null){return{type:te.AnimateChild,options:i}}function Jt(i,a,e=null){return{type:te.Query,selector:i,animation:a,options:e}}var Kt=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(a=0,e=0){this.totalTime=a+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(a=>a()),this._onDoneFns=[])}onStart(a){this._originalOnStartFns.push(a),this._onStartFns.push(a)}onDone(a){this._originalOnDoneFns.push(a),this._onDoneFns.push(a)}onDestroy(a){this._onDestroyFns.push(a)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(a=>a()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(a=>a()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(a){this._position=this.totalTime?a*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(a){let e=a=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Xt=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(a){this.players=a;let e=0,t=0,n=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(r=>{r.onDone(()=>{++e==o&&this._onFinish()}),r.onDestroy(()=>{++t==o&&this._onDestroy()}),r.onStart(()=>{++n==o&&this._onStart()})}),this.totalTime=this.players.reduce((r,u)=>Math.max(r,u.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(a=>a()),this._onDoneFns=[])}init(){this.players.forEach(a=>a.init())}onStart(a){this._onStartFns.push(a)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(a=>a()),this._onStartFns=[])}onDone(a){this._onDoneFns.push(a)}onDestroy(a){this._onDestroyFns.push(a)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(a=>a.play())}pause(){this.players.forEach(a=>a.pause())}restart(){this.players.forEach(a=>a.restart())}finish(){this._onFinish(),this.players.forEach(a=>a.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(a=>a.destroy()),this._onDestroyFns.forEach(a=>a()),this._onDestroyFns=[])}reset(){this.players.forEach(a=>a.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(a){let e=a*this.totalTime;this.players.forEach(t=>{let n=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(n)})}getPosition(){let a=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return a!=null?a.getPosition():0}beforeDestroy(){this.players.forEach(a=>{a.beforeDestroy&&a.beforeDestroy()})}triggerCallback(a){let e=a=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Qa="!";function Wa(i,a){i&1&&me(0,"div",2)}var Ua=new C("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Nn=(()=>{class i{_elementRef=s(L);_ngZone=s(N);_changeDetectorRef=s(z);_renderer=s(ce);_cleanupTransitionEnd;constructor(){let e=jt(),t=s(Ua,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Pn(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Pn(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new E;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,n){t&2&&(w("aria-valuenow",n._isIndeterminate()?null:n.value)("mode",n.mode),xe("mat-"+n.color),x("_mat-animation-noopable",n._isNoopAnimation)("mdc-linear-progress--animation-ready",!n._isNoopAnimation)("mdc-linear-progress--indeterminate",n._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Oe],bufferValue:[2,"bufferValue","bufferValue",Oe],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,n){t&1&&(X(0,"div",0),me(1,"div",1),m(2,Wa,1,0,"div",2),Y(),X(3,"div",3),me(4,"span",4),Y(),X(5,"div",5),me(6,"span",4),Y()),t&2&&(l(),Ie("flex-basis",n._getBufferBarFlexBasis()),l(),p(n.mode==="buffer"?2:-1),l(),Ie("transform",n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Pn(i,a=0,e=100){return Math.max(a,Math.min(e,i))}var Bn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=R({type:i});static \u0275inj=T({imports:[Q]})}return i})();var Ja=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],eo=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function to(i,a){i&1&&(c(0,"span",3),b(1,1),d())}function io(i,a){i&1&&(c(0,"span",6),b(1,2),d())}var no=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`,ao=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],oo=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function ro(i,a){i&1&&v(0,"span",0)}function so(i,a){i&1&&(c(0,"span",1),b(1),d())}function lo(i,a){i&1&&(c(0,"span",3),b(1,1),d())}function co(i,a){i&1&&b(0,2)}function mo(i,a){i&1&&v(0,"span",7)}function po(i,a){if(i&1&&m(0,co,1,0)(1,mo,1,0,"span",7),i&2){let e=h();p(e.contentEditInput?0:1)}}function ho(i,a){i&1&&b(0,3)}function uo(i,a){i&1&&(c(0,"span",6),b(1,4),d())}var qn=["*"],fo=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,Gn=new C("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Vn=new C("MatChipAvatar"),jn=new C("MatChipTrailingIcon"),Hn=new C("MatChipEdit"),ti=new C("MatChipRemove"),ai=new C("MatChip"),Qn=(()=>{class i{_elementRef=s(L);_parentChip=s(ai);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(Se).load(Xe),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,n){t&2&&(w("disabled",n._getDisabledAttribute())("aria-disabled",n.disabled),x("mdc-evolution-chip__action--primary",n._isPrimary)("mdc-evolution-chip__action--secondary",!n._isPrimary)("mdc-evolution-chip__action--trailing",!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,"disabled","disabled",V],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Oe(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),oi=(()=>{class i extends Qn{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=It(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,n){t&1&&M("click",function(r){return n._handleClick(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&(w("tabindex",n._getTabindex()),x("mdc-evolution-chip__action--presentational",!1))},features:[de]})}return i})();var Wn=(()=>{class i extends oi{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=It(i)))(n||i)}})();static \u0275dir=I({type:i,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,n){t&2&&w("aria-hidden",null)},features:[J([{provide:ti,useExisting:i}]),de]})}return i})(),ii=(()=>{class i{_changeDetectorRef=s(z);_elementRef=s(L);_tagName=s(ji);_ngZone=s(N);_focusMonitor=s(an);_globalRippleOptions=s(Ke,{optional:!0});_document=s(Fe);_onFocus=new A;_onBlur=new A;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ee();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(re).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new E;destroyed=new E;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(Ln);_injector=s(Ee);constructor(){let e=s(Se);e.load(Xe),e.load(_t),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=le(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let n=t._elementRef.nativeElement;return n===e||n.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,n,o){if(t&1&&ae(o,Vn,5)(o,Hn,5)(o,jn,5)(o,ti,5)(o,Vn,5)(o,jn,5)(o,Hn,5)(o,ti,5),t&2){let r;f(r=g())&&(n.leadingIcon=r.first),f(r=g())&&(n.editIcon=r.first),f(r=g())&&(n.trailingIcon=r.first),f(r=g())&&(n.removeIcon=r.first),f(r=g())&&(n._allLeadingIcons=r),f(r=g())&&(n._allTrailingIcons=r),f(r=g())&&(n._allEditIcons=r),f(r=g())&&(n._allRemoveIcons=r)}},viewQuery:function(t,n){if(t&1&&G(oi,5),t&2){let o;f(o=g())&&(n.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,n){t&1&&M("keydown",function(r){return n._handleKeydown(r)}),t&2&&(pe("id",n.id),w("role",n.role)("aria-label",n.ariaLabel),xe("mat-"+(n.color||"primary")),x("mdc-evolution-chip",!n._isBasicChip)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-basic-chip",n._isBasicChip)("mat-mdc-standard-chip",!n._isBasicChip)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon())("_mat-animation-noopable",n._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",V],highlighted:[2,"highlighted","highlighted",V],disableRipple:[2,"disableRipple","disableRipple",V],disabled:[2,"disabled","disabled",V]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[J([{provide:ai,useExisting:i}])],ngContentSelectors:eo,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,n){t&1&&(B(Ja),v(0,"span",0),c(1,"span",1)(2,"span",2),m(3,to,2,0,"span",3),c(4,"span",4),b(5),v(6,"span",5),d()()(),m(7,io,2,0,"span",6)),t&2&&(l(3),p(n.leadingIcon?3:-1),l(4),p(n._hasTrailingIcon()?7:-1))},dependencies:[Qn],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var ei=(()=>{class i{_elementRef=s(L);_document=s(Fe);constructor(){}initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let t=window.getSelection();t.removeAllRanges(),t.addRange(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return i})(),ri=(()=>{class i extends ii{basicChipAttrName="mat-basic-chip-row";_renderer=s(ce);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new E;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(k(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let t=this.value;this._isEditing=this._editStartPending=!0,Di(()=>{this._getEditInput().initialize(t),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(t,n,o){if(t&1&&ae(o,ei,5),t&2){let r;f(r=g())&&(n.contentEditInput=r.first)}},viewQuery:function(t,n){if(t&1&&G(ei,5),t&2){let o;f(o=g())&&(n.defaultEditInput=o.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(t,n){t&1&&M("focus",function(){return n._handleFocus()})("click",function(r){return n._hasInteractiveActions()?n._handleClick(r):null})("dblclick",function(r){return n._handleDoubleclick(r)}),t&2&&(pe("id",n.id),w("tabindex",n.disabled?null:-1)("aria-label",null)("aria-description",null)("role",n.role),x("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-chip-editing",n._isEditing)("mat-mdc-chip-editable",n.editable)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-leading-action",n._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[J([{provide:ii,useExisting:i},{provide:ai,useExisting:i}]),de],ngContentSelectors:oo,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(t,n){t&1&&(B(ao),m(0,ro,1,0,"span",0),m(1,so,2,0,"span",1),c(2,"span",2),m(3,lo,2,0,"span",3),c(4,"span",4),m(5,po,2,1)(6,ho,1,0),v(7,"span",5),d()(),m(8,uo,2,0,"span",6)),t&2&&(p(n._isEditing?-1:0),l(),p(n._hasLeadingActionIcon()?1:-1),l(),_("disabled",n.disabled),w("aria-description",n.ariaDescription)("aria-label",n.ariaLabel),l(),p(n.leadingIcon?3:-1),l(2),p(n._isEditing?5:6),l(3),p(n._hasTrailingIcon()?8:-1))},dependencies:[oi,ei],styles:[no],encapsulation:2,changeDetection:0})}return i})(),go=(()=>{class i{_elementRef=s(L);_changeDetectorRef=s(z);_dir=s(Te,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new A;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Si;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(q(null),Ve(()=>le(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(q(this._chips)).subscribe(e=>{let t=[];e.forEach(n=>n._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new rn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(k(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(k(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(q(null),k(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(k(this._destroyed)).subscribe(e=>{let n=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),r=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),u=o||r;this._isValidIndex(n)&&u&&(this._lastDestroyedFocusedChipIndex=n)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-chip-set"]],contentQueries:function(t,n,o){if(t&1&&ae(o,ii,5),t&2){let r;f(r=g())&&(n._chips=r)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,n){t&1&&M("keydown",function(r){return n._handleKeydown(r)}),t&2&&w("role",n.role)},inputs:{disabled:[2,"disabled","disabled",V],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Oe(e)]},ngContentSelectors:qn,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,n){t&1&&(B(),X(0,"div",0),b(1),Y())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var ni=class{source;value;constructor(a,e){this.source=a,this.value=e}},Un=(()=>{class i extends go{ngControl=s(dt,{optional:!0,self:!0});controlType="mat-chip-grid";_chipInput;_defaultRole="grid";_errorStateTracker;_uid=s(re).getId("mat-chip-grid-");_ariaDescribedbyIds=[];_onTouched=()=>{};_onChange=()=>{};get disabled(){return this.ngControl?!!this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=e,this._syncChipsState(),this.stateChanges.next()}get id(){return this._chipInput?this._chipInput.id:this._uid}get empty(){return(!this._chipInput||this._chipInput.empty)&&(!this._chips||this._chips.length===0)}get placeholder(){return this._chipInput?this._chipInput.placeholder:this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder="";get focused(){return this._chipInput?.focused||this._hasFocusedChip()}get required(){return this._required??this.ngControl?.control?.hasValidator(ct.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get shouldLabelFloat(){return!this.empty||this.focused}get value(){return this._value}set value(e){this._value=e}_value=[];get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}change=new E;valueChange=new E;_chips=void 0;stateChanges=new A;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(){super();let e=s(mt,{optional:!0}),t=s(pt,{optional:!0}),n=s(Ne);this.ngControl&&(this.ngControl.valueAccessor=this),this._errorStateTracker=new St(n,this.ngControl,t,e,this.stateChanges)}ngAfterContentInit(){this.chipBlurChanges.pipe(k(this._destroyed)).subscribe(()=>{this._blur(),this.stateChanges.next()}),le(this.chipFocusChanges,this._chips.changes).pipe(k(this._destroyed)).subscribe(()=>this.stateChanges.next())}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnDestroy(){super.ngOnDestroy(),this.stateChanges.complete()}registerInput(e){this._chipInput=e,this._chipInput.setDescribedByIds(this._ariaDescribedbyIds),this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(e){!this.disabled&&!this._originatesFromChip(e)&&this.focus()}focus(){if(!(this.disabled||this._chipInput?.focused)){if(!this._chips.length||this._chips.first.disabled){if(!this._chipInput)return;Promise.resolve().then(()=>this._chipInput.focus())}else{let e=this._keyManager.activeItem;e?e.focus():this._keyManager.setFirstItemActive()}this.stateChanges.next()}}get describedByIds(){if(this._chipInput)return this._chipInput.describedByIds||[];let e=this._elementRef.nativeElement.getAttribute("aria-describedby");return e?e.split(" "):[]}setDescribedByIds(e){this._ariaDescribedbyIds=e,this._chipInput?this._chipInput.setDescribedByIds(e):e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}writeValue(e){this._value=e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this.stateChanges.next()}updateErrorState(){this._errorStateTracker.updateErrorState()}_blur(){this.disabled||setTimeout(()=>{this.focused||(this._propagateChanges(),this._markAsTouched())})}_allowFocusEscape(){this._chipInput?.focused||super._allowFocusEscape()}_handleKeydown(e){let t=e.keyCode,n=this._keyManager.activeItem;if(t===9)this._chipInput?.focused&&Re(e,"shiftKey")&&this._chips.length&&!this._chips.last.disabled?(e.preventDefault(),n?this._keyManager.setActiveItem(n):this._focusLastChip()):super._allowFocusEscape();else if(!this._chipInput?.focused)if((t===38||t===40)&&n){let o=this._chipActions.filter(O=>O._isPrimary===n._isPrimary&&!this._skipPredicate(O)),r=o.indexOf(n),u=e.keyCode===38?-1:1;e.preventDefault(),r>-1&&this._isValidIndex(r+u)&&this._keyManager.setActiveItem(o[r+u])}else super._handleKeydown(e);this.stateChanges.next()}_focusLastChip(){this._chips.length&&this._chips.last.focus()}_propagateChanges(){let e=this._chips.length?this._chips.toArray().map(t=>t.value):[];this._value=e,this.change.emit(new ni(this,e)),this.valueChange.emit(e),this._onChange(e),this._changeDetectorRef.markForCheck()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=y({type:i,selectors:[["mat-chip-grid"]],contentQueries:function(t,n,o){if(t&1&&ae(o,ri,5),t&2){let r;f(r=g())&&(n._chips=r)}},hostAttrs:[1,"mat-mdc-chip-set","mat-mdc-chip-grid","mdc-evolution-chip-set"],hostVars:10,hostBindings:function(t,n){t&1&&M("focus",function(){return n.focus()})("blur",function(){return n._blur()}),t&2&&(w("role",n.role)("tabindex",n.disabled||n._chips&&n._chips.length===0?-1:n.tabIndex)("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState),x("mat-mdc-chip-list-disabled",n.disabled)("mat-mdc-chip-list-invalid",n.errorState)("mat-mdc-chip-list-required",n.required))},inputs:{disabled:[2,"disabled","disabled",V],placeholder:"placeholder",required:[2,"required","required",V],value:"value",errorStateMatcher:"errorStateMatcher"},outputs:{change:"change",valueChange:"valueChange"},features:[J([{provide:Le,useExisting:i}]),de],ngContentSelectors:qn,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,n){t&1&&(B(),X(0,"div",0),b(1),Y())},styles:[fo],encapsulation:2,changeDetection:0})}return i})(),Kn=(()=>{class i{_elementRef=s(L);focused=!1;get chipGrid(){return this._chipGrid}set chipGrid(e){e&&(this._chipGrid=e,this._chipGrid.registerInput(this))}_chipGrid;addOnBlur=!1;separatorKeyCodes;chipEnd=new E;placeholder="";id=s(re).getId("mat-mdc-chip-list-input-");get disabled(){return this._disabled||this._chipGrid&&this._chipGrid.disabled}set disabled(e){this._disabled=e}_disabled=!1;readonly=!1;disabledInteractive;get empty(){return!this.inputElement.value}inputElement;constructor(){let e=s(Gn),t=s(Pe,{optional:!0});this.inputElement=this._elementRef.nativeElement,this.separatorKeyCodes=e.separatorKeyCodes,this.disabledInteractive=e.inputDisabledInteractive??!1,t&&this.inputElement.classList.add("mat-mdc-form-field-input-control")}ngOnChanges(){this._chipGrid.stateChanges.next()}ngOnDestroy(){this.chipEnd.complete()}_keydown(e){this.empty&&e.keyCode===8?(e.repeat||this._chipGrid._focusLastChip(),e.preventDefault()):this._emitChipEnd(e)}_blur(){this.addOnBlur&&this._emitChipEnd(),this.focused=!1,this._chipGrid.focused||this._chipGrid._blur(),this._chipGrid.stateChanges.next()}_focus(){this.focused=!0,this._chipGrid.stateChanges.next()}_emitChipEnd(e){(!e||this._isSeparatorKey(e)&&!e.repeat)&&(this.chipEnd.emit({input:this.inputElement,value:this.inputElement.value,chipInput:this}),e?.preventDefault())}_onInput(){this._chipGrid.stateChanges.next()}focus(){this.inputElement.focus()}clear(){this.inputElement.value=""}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}_isSeparatorKey(e){if(!this.separatorKeyCodes)return!1;for(let t of this.separatorKeyCodes){let n,o;typeof t=="number"?(n=t,o=null):(n=t.keyCode,o=t.modifiers);let r=o?.length?Re(e,...o):!Re(e);if(n===e.keyCode&&r)return!0}return!1}_getReadonlyAttribute(){return this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=I({type:i,selectors:[["input","matChipInputFor",""]],hostAttrs:[1,"mat-mdc-chip-input","mat-mdc-input-element","mdc-text-field__input","mat-input-element"],hostVars:8,hostBindings:function(t,n){t&1&&M("keydown",function(r){return n._keydown(r)})("blur",function(){return n._blur()})("focus",function(){return n._focus()})("input",function(){return n._onInput()}),t&2&&(pe("id",n.id),w("disabled",n.disabled&&!n.disabledInteractive?"":null)("placeholder",n.placeholder||null)("aria-invalid",n._chipGrid&&n._chipGrid.ngControl?n._chipGrid.ngControl.invalid:null)("aria-required",n._chipGrid&&n._chipGrid.required||null)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("readonly",n._getReadonlyAttribute())("required",n._chipGrid&&n._chipGrid.required||null))},inputs:{chipGrid:[0,"matChipInputFor","chipGrid"],addOnBlur:[2,"matChipInputAddOnBlur","addOnBlur",V],separatorKeyCodes:[0,"matChipInputSeparatorKeyCodes","separatorKeyCodes"],placeholder:"placeholder",id:"id",disabled:[2,"disabled","disabled",V],readonly:[2,"readonly","readonly",V],disabledInteractive:[2,"matChipInputDisabledInteractive","disabledInteractive",V]},outputs:{chipEnd:"matChipInputTokenEnd"},exportAs:["matChipInput","matChipInputFor"],features:[je]})}return i})();var Xn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=R({type:i});static \u0275inj=T({providers:[Ne,{provide:Gn,useValue:{separatorKeyCodes:[13]}}],imports:[bt,Q]})}return i})();var vo=["*"],bo=(i,a)=>[i,a];function yo(i,a){if(i&1&&(c(0,"div",1),oe(1,"async"),b(2),d()),i&2){let e=h();xe(Rt("ngx-mat-select-panel mdc-menu-surface mdc-menu-surface--open ",e.theme)),Ie("height",e.viewType==="Default"?e.height:"","px"),_("ngClass",e.panelClass)("@transformPanel",He(1,7,e.isOpen$)?"showing":"")}}function xo(i,a){if(i&1&&(be(),c(0,"svg",0),v(1,"path",4),d()),i&2){let e=h();w("width",e.width)("height",e.height)}}function Co(i,a){if(i&1&&(be(),c(0,"svg",1)(1,"g",5),v(2,"path",6),d()()),i&2){let e=h();w("width",e.width)("height",e.height)}}function wo(i,a){if(i&1&&(be(),c(0,"svg",2),v(1,"path",7),d()),i&2){let e=h();w("width",e.width)("height",e.height)}}function So(i,a){if(i&1&&(be(),c(0,"svg",3),v(1,"path",8),d()),i&2){let e=h();w("width",e.width)("height",e.height)}}function Mo(i,a){if(i&1&&(be(),c(0,"svg",3),v(1,"path",9),d()),i&2){let e=h();w("width",e.width)("height",e.height)}}var Do=["searchBox"];function ko(i,a){i&1&&(c(0,"div"),v(1,"ngx-mat-select-icon",3),d())}function Eo(i,a){if(i&1){let e=ye();c(0,"div",4),M("click",function(){_e(e);let n=h();return ve(n.clear())}),v(1,"ngx-mat-select-icon",5),d()}}function Fo(i,a){i&1&&(c(0,"div",0),v(1,"mat-progress-bar",1),d())}var Io=i=>["ngx-mat-select-chip-grid-row",i],Oo=i=>({$implicit:i});function To(i,a){if(i&1){let e=ye();c(0,"mat-chip-row",11),M("removed",function(){let n=_e(e).$implicit,o=h(4);return ve(o.deselect.emit(n))}),Z(1),oe(2,"toOptionLabel"),c(3,"button",12),v(4,"ngx-mat-select-icon",13),d()()}if(i&2){let e=a.$implicit,t=h(4);_("editable",!1),l(),Ce(" ",$e(2,4,e,t.optionLabel)," "),l(3),_("width",18)("height",18)}}function Ro(i,a){if(i&1&&(c(0,"mat-chip-grid",7,1)(2,"div",8),Oi(3,To,5,7,"mat-chip-row",9,Ii),d(),v(5,"input",10),d()),i&2){let e=he(1),t=h(3);_("disabled",t.disabled),l(2),_("ngClass",At(3,Io,"ngx-mat-select-chip-grid-row--"+t.multipleDisplay)),l(),Ti(t.selection),l(2),_("matChipInputFor",e)}}function Ao(i,a){if(i&1&&(c(0,"div",6),Z(1),oe(2,"toOptionLabel"),d()),i&2){let e=h(3);l(),Ce(" ",$e(2,1,e.selection,e.optionLabel)," ")}}function Lo(i,a){if(i&1&&(m(0,Ro,6,5,"mat-chip-grid",7),m(1,Ao,3,4,"div",6)),i&2){let e=h(2);p(e.multipleDisplay!=="text"?0:-1),l(),p(e.multipleDisplay==="text"?1:-1)}}function Po(i,a){if(i&1&&(c(0,"div",6),Z(1),oe(2,"toOptionLabel"),d()),i&2){let e=h(2);l(),Ce(" ",$e(2,1,e.selection[0],e.optionLabel)," ")}}function No(i,a){if(i&1&&m(0,Lo,2,2)(1,Po,3,4,"div",6),i&2){let e=h();p(e.multiple?0:1)}}function Bo(i,a){if(i&1&&(c(0,"span",2),Z(1),d()),i&2){let e=h();l(),rt(e.placeholder)}}function zo(i,a){if(i&1&&(c(0,"span",14),ot(1,15),d()),i&2){h(2);let e=he(1);l(),_("ngTemplateOutlet",e)}}function Vo(i,a){i&1&&ot(0)}function jo(i,a){if(i&1&&K(0,Vo,1,0,"ng-container",16),i&2){let e=h(3);_("ngTemplateOutlet",e.customTrigger)("ngTemplateOutletContext",At(2,Oo,e.multiple?e.selection:e.selection[0]))}}function Ho(i,a){if(i&1&&m(0,jo,1,4,"ng-container"),i&2){let e=h(2);p(e.customTrigger?0:-1)}}function $o(i,a){if(i&1&&(c(0,"span",3),m(1,zo,2,1,"span",14)(2,Ho,1,1),d()),i&2){let e,t=h();l(),p((e=!!t.customTrigger)?2:1)}}var qo=[[["","ngxMatSelectFooter",""]]],Go=["[ngxMatSelectFooter]"],Qo=()=>[],Wo=(i,a)=>({$implicit:i,isSelected:a});function Uo(i,a){if(i&1){let e=ye();c(0,"ngx-mat-select-search-box",13),M("handleKeydown",function(n){_e(e);let o=h(2);return ve(o._handleKeydown(n))}),d()}if(i&2){let e=h(2);_("placeholder",e.searchBoxPlaceholder)}}function Ko(i,a){if(i&1){let e=ye();c(0,"div",14),M("click",function(){_e(e);let n=h(2);return ve(n.panel.close())}),v(1,"ngx-mat-select-icon",15),d()}i&2&&(l(),_("width",32)("height",32))}function Xo(i,a){if(i&1&&(c(0,"div",4),m(1,Uo,1,1,"ngx-mat-select-search-box",10),v(2,"div",11),m(3,Ko,2,2,"div",12),d()),i&2){let e=h();l(),p(e.hasSearchBox?1:-1),l(2),p(e.hasBackButton?3:-1)}}function Yo(i,a){i&1&&ot(0)}function Zo(i,a){if(i&1&&K(0,Yo,1,0,"ng-container",17),i&2){let e=h().$implicit,t=h();_("ngTemplateOutlet",t.selectOptionContent.template)("ngTemplateOutletContext",Lt(2,Wo,e,t.isSelected(e)))}}function Jo(i,a){if(i&1&&(Z(0),oe(1,"toOptionLabel")),i&2){let e=h().$implicit,t=h();Ce(" ",$e(1,1,e,t.optionLabel)," ")}}function er(i,a){if(i&1){let e=ye();Ri(0),c(1,"mat-option",16,1),M("onSelectionChange",function(n){_e(e);let o=h();return ve(o.onSelectionChange(n))}),m(3,Zo,1,5,"ng-container")(4,Jo,2,4),d(),Ai()}if(i&2){let e=a.$implicit,t=a.index,n=he(2),o=h();l(),Ie("height",o.optionHeight,"px"),_("disabled",o.isOptionDisabled(e))("id",t.toString())("activated",o.activeItemIndex===n.id)("selected",o.isSelected(e))("value",e),l(2),p(o.selectOptionContent?3:4)}}var Jn={transformPanelWrap:Mt("transformPanelWrap",[Je("* => void",Jt("@transformPanel",[Zt()],{optional:!0}))]),transformPanel:Mt("transformPanel",[Yt("void",Ze({opacity:0,transform:"scale(1, 0.8)"})),Je("void => showing",Dt("120ms cubic-bezier(0, 0, 0.2, 1)",Ze({opacity:1,transform:"scale(1, 1)"}))),Je("* => void",Dt("100ms linear",Ze({opacity:0})))])};function U(i){return i==null}var Yn=(()=>{class i{get overlayClass(){return this._overlayClass}set overlayClass(e){this._overlayClass=Array.isArray(e)?e.join(" "):e}get connectedOverlayOrigin(){return this._connectedOverlayOrigin}set connectedOverlayOrigin(e){this._connectedOverlayOrigin=e,this.updateOverlayWidth()}get width(){return this._width}set width(e){this._width=e,this.updateOverlayWidth()}get viewType(){return this._viewType}set viewType(e){this._viewType=e;let t="";switch(e){case"BottomSheet":t="bottom-sheet";break;case"FullScreen":t="full-screen";break;default:case"Default":t="default";break}this.overlayClassViewType=`ngx-mat-select-panel-${t}-view-type`}constructor(e,t,n){this.dir=e,this.changeDetectorRef=t,this.viewportRuler=n,this.beforeClose=new E,this.afterClose=new E,this.afterOpen=new E,this.beforeOpen=new E,this.hasBackdrop=!0,this.disabled=!1,this._overlayClass="",this.panelClass=[],this._width="auto",this.height=350,this._viewType="Default",this.overlayClassViewType="ngx-mat-select-default-view-type",this._panelWidth="auto",this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"ngx-mat-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"ngx-mat-select-panel-above"}],this.destroy$=new A,this.isOpen$$=new ze(!1),this.isOpen$=this.isOpen$$.asObservable()}ngOnInit(){this.viewportRuler.change().pipe(k(this.destroy$)).subscribe(()=>{this.isOpen&&(this.updateOverlayWidth(),this.changeDetectorRef.detectChanges())})}get isOpen(){return this.isOpen$$.getValue()}ngAfterViewInit(){this.syncDirection()}updatePosition(){this.overlay.overlayRef.updatePosition()}onOutsideClick(e){e.target&&this.connectedOverlayOrigin?.nativeElement.contains(e.target)&&e.stopPropagation(),this.close()}open(){this.beforeOpen.emit(),this.disabled||this.isOpen$$.next(!0)}close(){this.beforeClose.emit(),this.isOpen$$.next(!1)}onOverlayKeyDown(e){e.code==="Escape"&&this.close()}updateOverlayWidth(){this.width==="auto"?this._panelWidth=this.connectedOverlayOrigin?.nativeElement.getBoundingClientRect().width:this._panelWidth=U(this.width)?"":this.width,this.changeDetectorRef.markForCheck()}ngOnDestroy(){this.destroy$.next(void 0),this.destroy$.complete(),this.isOpen$$.complete()}syncDirection(){this.dir.change.pipe(q(this.dir.value),P(e=>{this.overlay.overlayRef?.setDirection(e),this.changeDetectorRef.detectChanges()}),k(this.destroy$)).subscribe()}static{this.\u0275fac=function(t){return new(t||i)(S(Te),S(z),S(Xi))}}static{this.\u0275cmp=y({type:i,selectors:[["ngx-mat-select-panel"]],viewQuery:function(t,n){if(t&1&&G(ft,5),t&2){let o;f(o=g())&&(n.overlay=o.first)}},inputs:{hasBackdrop:"hasBackdrop",disabled:"disabled",theme:"theme",overlayClass:"overlayClass",panelClass:"panelClass",connectedOverlayOrigin:"connectedOverlayOrigin",width:"width",height:"height",viewType:"viewType"},outputs:{beforeClose:"beforeClose",afterClose:"afterClose",afterOpen:"afterOpen",beforeOpen:"beforeOpen"},standalone:!1,ngContentSelectors:vo,decls:2,vars:12,consts:[["cdkConnectedOverlay","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"overlayOutsideClick","attach","overlayKeydown","detach","cdkConnectedOverlayWidth","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayLockPosition","cdkConnectedOverlayPanelClass","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayPositions"],["role","listbox",3,"ngClass"]],template:function(t,n){t&1&&(B(),K(0,yo,3,9,"ng-template",0),oe(1,"async"),M("overlayOutsideClick",function(r){return n.onOutsideClick(r)})("attach",function(){return n.afterOpen.emit()})("overlayKeydown",function(r){return n.onOverlayKeyDown(r)})("detach",function(){return n.afterClose.emit()})),t&2&&_("cdkConnectedOverlayWidth",n._panelWidth)("cdkConnectedOverlayOrigin",n.connectedOverlayOrigin)("cdkConnectedOverlayOpen",He(1,7,n.isOpen$)===!0)("cdkConnectedOverlayLockPosition",!0)("cdkConnectedOverlayPanelClass",Lt(9,bo,n.overlayClassViewType,n._overlayClass))("cdkConnectedOverlayHasBackdrop",n.hasBackdrop)("cdkConnectedOverlayPositions",n._positions)},dependencies:[Nt,ft,Bt],encapsulation:2,data:{animation:[Jn.transformPanel]},changeDetection:0})}}return i})(),si=(()=>{class i{constructor(){this.width=24,this.height=24}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["ngx-mat-select-icon"]],inputs:{icon:"icon",width:"width",height:"height"},standalone:!1,decls:5,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","x","0px","y","0px","viewBox","0 0 24 24"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","none"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["xmlns","http://www.w3.org/2000/svg","x","0px","y","0px","viewBox","0 0 50 50"],["d","M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"],["id","Arrow / Arrow_Right_LG"],["id","Vector","d","M21 12L16 7M21 12L16 17M21 12H3","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M7 10l5 5 5-5z"],["d","M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"],["d","M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"]],template:function(t,n){if(t&1&&m(0,xo,2,2,":svg:svg",0)(1,Co,3,2,":svg:svg",1)(2,wo,2,2,":svg:svg",2)(3,So,2,2,":svg:svg",3)(4,Mo,2,2,":svg:svg",3),t&2){let o;p((o=n.icon)==="Times"?0:o==="ArrowRight"?1:o==="ArrowDown"?2:o==="Remove"?3:o==="Search"?4:-1)}},encapsulation:2,changeDetection:0})}}return i})(),Zn=(()=>{class i{constructor(){this.search=new E,this.handleKeydown=new E,this.debounceTime=200,this.placeholder="",this.value="",this.focused=!0,this.destroy$=new A}ngAfterViewInit(){this.initializeSearchBox()}focus(){this.focused||(this.focused=!0),this.searchBox.nativeElement.focus()}blur(){this.focused&&(this.focused=!1),this.searchBox.nativeElement.blur()}clear(){this.value="",this.search.emit("")}_onBlur(){this.focused=!1}_onFocus(){this.focused=!0}ngOnDestroy(){this.destroy$.next(void 0),this.destroy$.complete()}initializeSearchBox(){gi(this.searchBox.nativeElement,"input").pipe(ne(e=>e.target.value),vi(this.debounceTime),q(""),P(e=>{this.search.emit(e)}),k(this.destroy$)).subscribe()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["ngx-mat-select-search-box"]],viewQuery:function(t,n){if(t&1&&G(Do,5),t&2){let o;f(o=g())&&(n.searchBox=o.first)}},hostAttrs:[1,"ngx-mat-select-search-box"],hostVars:2,hostBindings:function(t,n){t&2&&x("ngx-mat-select-search-box--focused",n.focused)},inputs:{debounceTime:"debounceTime",placeholder:"placeholder"},outputs:{search:"search",handleKeydown:"handleKeydown"},standalone:!1,decls:5,vars:4,consts:[["searchBox",""],[1,"ngx-mat-select-search-box-icon"],["type","text",1,"ngx-mat-select-search-box-input",3,"blur","focus","ngModelChange","keydown","ngModel","placeholder"],["icon","Search"],[3,"click"],["icon","Times"]],template:function(t,n){if(t&1){let o=ye();c(0,"div",1),m(1,ko,2,0,"div"),m(2,Eo,2,0,"div"),d(),c(3,"input",2,0),M("blur",function(){return n._onBlur()})("focus",function(){return n._onFocus()}),zi("ngModelChange",function(u){return _e(o),Bi(n.value,u)||(n.value=u),ve(u)}),M("keydown",function(u){return n.handleKeydown.emit(u)}),d()}t&2&&(l(),p(n.value?-1:1),l(),p(n.value?2:-1),l(),Ni("ngModel",n.value),_("placeholder",n.placeholder||""))},dependencies:[qi,Gi,Qi,si],styles:[`.ngx-mat-select-search-box{display:flex;align-items:center;width:100%;height:56px;border:1px solid;outline:0;border-radius:4px;padding-top:16px;padding-bottom:16px;font-size:14px}.ngx-mat-select-search-box--focused{outline:1px solid}.ngx-mat-select-search-box-icon{display:flex;align-items:baseline;justify-content:center;width:36px;cursor:pointer}.ngx-mat-select-search-box-input{outline:0;border:0;width:100%;background-color:#0000;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit}
`],encapsulation:2,changeDetection:0})}}return i})(),tr=(()=>{class i{constructor(e){this.template=e}static{this.\u0275fac=function(t){return new(t||i)(S(Ot))}}static{this.\u0275dir=I({type:i,selectors:[["","ngxMatSelectOptionContent",""]],standalone:!1})}}return i})(),ir=(()=>{class i{constructor(e){this.template=e}static{this.\u0275fac=function(t){return new(t||i)(S(Ot))}}static{this.\u0275dir=I({type:i,selectors:[["","ngxMatSelectTrigger",""]],standalone:!1})}}return i})(),nr=new C("NGX_MAT_SELECT_CONFIG");function ar(){return Error("Cannot change `multiple` mode of select after initialization.")}function or(){return Error("lib-select error: optionLabel is not defined")}var rr=(()=>{class i{set selected(e){e?this.option.select():this.option.deselect()}set activated(e){e?this.option.setActiveStyles():this.option.setInactiveStyles()}constructor(e){this.option=e}static{this.\u0275fac=function(t){return new(t||i)(S(fe))}}static{this.\u0275dir=I({type:i,selectors:[["mat-option","ngxMatSelectOption",""]],hostAttrs:[1,"ngx-mat-select-option"],inputs:{selected:"selected",activated:"activated"},standalone:!1})}}return i})(),sr=(()=>{class i{constructor(){this.loading=!1}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["ngx-mat-select-loading"]],inputs:{loading:"loading"},standalone:!1,decls:1,vars:1,consts:[[1,"lib-select-loading"],["mode","indeterminate"]],template:function(t,n){t&1&&m(0,Fo,2,0,"div",0),t&2&&p(n.loading?0:-1)},dependencies:[Nn],styles:[".lib-select-loading[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;left:0;right:0;backdrop-filter:blur(1.2px)}"],changeDetection:0})}}return i})(),li=(()=>{class i{transform(e,t){return this.getOptionLabel(e,t)}getOptionLabel(e,t){return Array.isArray(e)?e.map(n=>this.getOptionLabel(n,t)).join(", "):e!==null&&t&&typeof e=="object"?e[t]:e}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275pipe=Ei({name:"toOptionLabel",type:i,pure:!0,standalone:!1})}}return i})(),lr=(()=>{class i{constructor(){this.deselect=new E,this.empty=!0,this.disabled=!1,this.multiple=!1,this.multipleDisplay="multipleRowChip"}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=y({type:i,selectors:[["ngx-mat-select-trigger"]],hostAttrs:[1,"ngx-mat-select-trigger"],inputs:{customTrigger:"customTrigger",selection:"selection",empty:"empty",placeholder:"placeholder",disabled:"disabled",multiple:"multiple",optionLabel:"optionLabel",multipleDisplay:"multipleDisplay"},outputs:{deselect:"deselect"},standalone:!1,decls:7,vars:4,consts:[["defaultTrigger",""],["multipleTemplate",""],[1,"ngx-mat-select-placeholder","ngx-mat-select-min-line"],[1,"ngx-mat-select-value-text"],[1,"ngx-mat-select-arrow-wrapper"],["icon","ArrowDown",1,"ngx-mat-select-arrow"],[1,"ngx-mat-select-value"],[1,"ngx-mat-select-chips",3,"disabled"],[3,"ngClass"],[3,"editable"],["readonly","","type","text",1,"ngx-mat-select-input-chips",3,"matChipInputFor"],[3,"removed","editable"],["matChipRemove",""],["icon","Remove",1,"ngx-mat-select-chip-grid-row-icon",3,"width","height"],[1,"ngx-mat-select-min-line"],[3,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){if(t&1&&(K(0,No,2,1,"ng-template",null,0,st),c(2,"div"),m(3,Bo,2,1,"span",2)(4,$o,3,1,"span",3),d(),c(5,"div",4),v(6,"ngx-mat-select-icon",5),d()),t&2){let o;l(2),xe(Rt("ngx-mat-select-value ngx-mat-select-value--",n.multipleDisplay)),l(),p((o=n.empty)===!0?3:o===!1?4:-1)}},dependencies:[Nt,Ge,Un,Kn,Wn,ri,si,li],encapsulation:2,changeDetection:0})}}return i})(),cr=0,ci=(()=>{class i{get disabled(){return this._disabled}set disabled(e){this._disabled=Me(e)}isOptionDisabled(e){return!!(e&&typeof e=="object"&&"disabled"in e&&e.disabled)}updateErrorState(){let e=this.errorStateMatcher??this._defaultErrorStateMatcher,t=this._parentFormGroup??this._parentForm,n=e.isErrorState(this.ngControl?.control??null,t);n!==this.errorState&&(this.errorState=n,this.stateChanges.next())}get multiple(){return this._multiple}set multiple(e){if(this.selectionModel&&Pt())throw ar();this._multiple=Me(e)}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=U(e)?"":e,this.stateChanges.next()}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(ct.required)??!1}set required(e){this._required=Me(e),this.stateChanges.next()}get value(){return this._toFlat(this.getValue())}set value(e){this.setValue(e,!0,!1),this._onChange(e)}get empty(){return!this.selectionModel||this.selectionModel.isEmpty()}get focused(){return this._focused||this.panelOpen}get shouldLabelFloat(){return this.panelOpen||!this.empty||this._focused&&!!this._placeholder}constructor(e,t,n,o,r,u,O,F,D,ge){this._changeDetectorRef=e,this.renderer=t,this._defaultErrorStateMatcher=n,this._elementRef=o,this._parentForm=u,this._parentFormGroup=O,this._parentFormField=F,this.ngControl=D,this.defaultOptions=ge,this.stateChanges=new A,this.disableRipple=!1,this.tabIndex=0,this._disabled=!1,this.errorState=!1,this.openedChange=new E,this.selectionChange=new E,this.opened=this.openedChange.pipe($(se=>se),ne(()=>{})),this.closed=this.openedChange.pipe($(se=>!se),ne(()=>{})),this.valueChange=new E,this._multiple=!1,this.ariaLabel="",this.hasBackButton=this.defaultOptions?.hasBackButton??!1,this.optionHeight=this.defaultOptions?.optionHeight??48,this.panelHeight=this.defaultOptions?.panelHeight??350,this.viewType=this.defaultOptions?.viewType??"Default",this.panelWidth=this.defaultOptions&&typeof this.defaultOptions.panelWidth<"u"?this.defaultOptions.panelWidth:"auto",this.panelClass=[],this.optionLabel=this.defaultOptions?.optionLabel,this.optionValue=this.defaultOptions?.optionValue,this.multipleDisplay=this.defaultOptions?.multipleDisplay??"text",this.hasSearchBox=this.defaultOptions?.hasSearchBox??!1,this.searchBoxPlaceholder=this.defaultOptions?.searchBoxPlaceholder??"",this.filteredOptions$=Ft([]),this.loading$=Ft(!1),this.controlType="ngx-mat-select",this._overlayPanelClass=this.defaultOptions?.overlayPanelClass||"",this._focused=!1,this.scrollTop=0,this._uid=`ngx-mat-select-${cr++}`,this.value$$=new Et(1),this._onChange=()=>{},this._onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this),this.value$=this.value$$.asObservable(),this.tabIndex=parseInt(r)||0,this.id=this.id}ngOnInit(){this.selectionModel=new Ye(this.multiple,[],!1,this._getCompareWithFn())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next()}ngDoCheck(){let e=this.ngControl;e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}writeValue(e){this.setValue(e,!0,!1)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}onDeselect(e){this.selectionModel?.deselect(e);let t=this.getFlatValueFromSelection();this.setValue(t,!1,!0),this.panel.isOpen?this.stateChanges.next():this.blur(),this.selectionChange.emit({selected:!1,value:this.getOptionValue(e)})}onSelectionChange(e){if(e.isUserInput){let t=e.source.value;e.source.selected?this.selectionModel?.select(t):this.selectionModel?.deselect(t);let n=this.getFlatValueFromSelection();this.setValue(n,!1,!0),this.panel.isOpen?this.stateChanges.next():this.blur(),this.multiple?(this._changeDetectorRef.detectChanges(),this.panel.updatePosition()):this.panel.close(),this.selectionChange.emit({selected:e.source.selected,value:this.getOptionValue(t)})}}onContainerClick(e){this.panel.open()}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onBeforePanelOpen(){this.focus(),this._parentFormField&&(this.preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin())}onAfterPanelOpen(){this.focus(),this.renderer.setProperty(this.virtualScroll.elementRef.nativeElement,"scrollTop",this.scrollTop),setTimeout(()=>{this.virtualScroll.checkViewportSize()}),this.openedChange.emit(this.panelOpen)}onBeforePanelClose(){this.scrollTop=this.virtualScroll.elementRef.nativeElement.scrollTop||0,this.blur()}onAfterPanelClose(){this.blur(),this.openedChange.emit(this.panelOpen)}blur(){this.disabled||(this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),this.searchBoxComponent?.blur())}focus(){this.disabled||(this._focused=!0,this._changeDetectorRef.markForCheck(),this.stateChanges.next(),this.searchBoxComponent?.focus())}getOptionValue(e){return this.getObjectValue(e,this.optionValue)}isSelected(e){return this.selectionModel?.isSelected(e)||!1}get selected(){return this.multiple?this.selectionModel?.selected||[]:this.selectionModel?.selected[0]}getValue(){let e;return this.value$$.pipe(it(1)).subscribe(t=>{e=t.value}),e||[]}setValue(e,t,n=!1){this.value$$.next({value:U(e)?e:this._toArray(e),shouldBeSyncedWithSelection:t}),n&&(this.valueChange.emit(e),this._onChange(e))}toggle(){this.panelOpen?this.panel.close():this.panel.open()}get panelOpen(){return this.panel?.isOpen||!1}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_handleKeydown(e){if(e.code==="Enter"){if(this.visibleOptions&&!U(this.activeItemIndex)){let t=this.visibleOptions.find(n=>n.active);t&&!t.disabled&&t?._getHostElement().click()}return}if(this.visibleOptions&&(e.code==="ArrowDown"||e.code==="ArrowUp")){e.preventDefault();let t=-1,n=!0,o=this.visibleOptions.length;switch(this.visibleOptions.find((r,u)=>r.active?(t=u,!0):!1),e.code){case"ArrowDown":t<o-1?t++:n=!1;break;case"ArrowUp":t>0?t--:n=!1;break}if(n){let r=this.visibleOptions.get(t);r?._getHostElement().scrollIntoView({block:"end"}),this.activeItemIndex=r?.id?.toString()}}}_toFlat(e){return U(e)?e:this.multiple?this._toArray(e):e[0]}_toArray(e){return Array.isArray(e)?e:[e]}_getCompareWithFn(){return(e,t)=>{if(this.compareWith&&typeof this.compareWith=="function")return this.compareWith(e,t);let n=this.getObjectValue(e,this.dataKey||this.optionValue),o=this.getObjectValue(t,this.dataKey||this.optionValue);return n===o}}getFlatValueFromSelection(){let e=this.selectionModel?.selected.map(t=>this.getOptionValue(t));return this._toFlat(e)}getObjectValue(e,t){return e!==null&&t&&typeof e=="object"?e[t]:e}static{this.\u0275fac=function(t){return new(t||i)(S(z),S(ce),S(Ne),S(L),wi("tabindex"),S(mt,8),S(pt,8),S(Pe,8),S(dt,10),S(nr,8))}}static{this.\u0275cmp=y({type:i,selectors:[["ngx-mat-select"]],contentQueries:function(t,n,o){if(t&1&&ae(o,ir,5)(o,tr,5),t&2){let r;f(r=g())&&(n.triggerContent=r.first),f(r=g())&&(n.selectOptionContent=r.first)}},viewQuery:function(t,n){if(t&1&&G(Zn,5)(ut,5)(Yn,5)(fe,5),t&2){let o;f(o=g())&&(n.searchBoxComponent=o.first),f(o=g())&&(n.virtualScroll=o.first),f(o=g())&&(n.panel=o.first),f(o=g())&&(n.visibleOptions=o)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox","ngSkipHydration","",1,"ngx-mat-select"],hostVars:18,hostBindings:function(t,n){t&1&&M("keydown",function(r){return n._handleKeydown(r)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(w("id",n.id)("tabindex",n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState),x("ngx-mat-select-disabled",n.disabled)("ngx-mat-select-invalid",n.errorState)("ngx-mat-select-required",n.required)("ngx-mat-select-empty",n.empty)("ngx-mat-select-multiple",n.multiple))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex",errorStateMatcher:"errorStateMatcher",disabled:"disabled",multiple:"multiple",ariaLabel:[0,"aria-label","ariaLabel"],hasBackButton:"hasBackButton",compareWith:"compareWith",optionHeight:"optionHeight",panelHeight:"panelHeight",viewType:"viewType",panelWidth:"panelWidth",panelClass:"panelClass",optionLabel:"optionLabel",optionValue:"optionValue",dataKey:"dataKey",multipleDisplay:"multipleDisplay",placeholder:"placeholder",id:"id",required:"required",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value"},outputs:{openedChange:"openedChange",selectionChange:"selectionChange",opened:"opened",closed:"closed",valueChange:"valueChange"},exportAs:["ngxMatSelect"],standalone:!1,features:[J([{provide:Ct,useExisting:i},{provide:Le,useExisting:i}]),je],ngContentSelectors:Go,decls:12,vars:25,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin"],["matOption",""],["cdk-overlay-origin","",3,"click","deselect","disabled","multipleDisplay","selection","customTrigger","multiple","optionLabel","placeholder","empty"],[3,"beforeOpen","afterOpen","beforeClose","afterClose","width","height","overlayClass","panelClass","theme","disabled","viewType","connectedOverlayOrigin"],[1,"ngx-mat-select-panel-header"],[1,"ngx-mat-select-panel-content"],[1,"ngx-mat-select-virtual-scroll",3,"itemSize"],[4,"cdkVirtualFor","cdkVirtualForOf"],[1,"ngx-mat-select-panel-footer"],[3,"loading"],[1,"ngx-mat-select-panel-search-box",3,"placeholder"],[1,"ngx-mat-select-panel-header-filler"],[1,"ngx-mat-select-back-button"],[1,"ngx-mat-select-panel-search-box",3,"handleKeydown","placeholder"],[1,"ngx-mat-select-back-button",3,"click"],["icon","ArrowRight",3,"width","height"],["ngxMatSelectOption","",3,"onSelectionChange","disabled","id","activated","selected","value"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){if(t&1&&(B(qo),c(0,"ngx-mat-select-trigger",2,0),M("click",function(){return n.toggle()})("deselect",function(r){return n.onDeselect(r)}),d(),c(2,"ngx-mat-select-panel",3),M("beforeOpen",function(){return n.onBeforePanelOpen()})("afterOpen",function(){return n.onAfterPanelOpen()})("beforeClose",function(){return n.onBeforePanelClose()})("afterClose",function(){return n.onAfterPanelClose()}),m(3,Xo,4,2,"div",4),c(4,"div",5)(5,"cdk-virtual-scroll-viewport",6),K(6,er,5,8,"ng-container",7),oe(7,"async"),d()(),c(8,"div",8),b(9),d(),v(10,"ngx-mat-select-loading",9),oe(11,"async"),d()),t&2){let o=he(1);_("disabled",n.disabled)("multipleDisplay",n.multipleDisplay)("selection",(n.selectionModel==null?null:n.selectionModel.selected)||Vi(24,Qo))("customTrigger",(n.triggerContent==null?null:n.triggerContent.template)||null)("multiple",n.multiple)("optionLabel",n.optionLabel)("placeholder",n.placeholder)("empty",n.empty),l(2),_("width",n.panelWidth)("height",n.panelHeight)("overlayClass",n._overlayPanelClass)("panelClass",n.panelClass)("theme",n._getPanelTheme())("disabled",n.disabled)("viewType",n.viewType)("connectedOverlayOrigin",n.preferredOverlayOrigin||o.elementRef),l(),p(n.hasSearchBox||n.hasBackButton?3:-1),l(2),_("itemSize",n.optionHeight),l(),_("cdkVirtualForOf",He(7,20,n.filteredOptions$)),l(4),_("loading",He(11,22,n.loading$)===!0)}},dependencies:[Ge,Ui,Yi,ut,Ji,rr,sr,Yn,Zn,si,lr,fe,Bt,li],styles:[`.ngx-mat-select-panel *{box-sizing:border-box}.ngx-mat-select{display:inline-block;width:100%;outline:none}.ngx-mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.ngx-mat-select-disabled .ngx-mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.ngx-mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-mat-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .ngx-mat-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .ngx-mat-select-arrow-wrapper{transform:none}.ngx-mat-select-arrow{width:10px;height:5px;position:relative}.ngx-mat-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@media(forced-colors:active){.ngx-mat-select-arrow svg{fill:CanvasText}.ngx-mat-select-disabled .ngx-mat-select-arrow svg{fill:GrayText}}.mdc-menu-surface.ngx-mat-select-panel{width:100%;max-height:auto;position:static;outline:0}@media(forced-colors:active){.mdc-menu-surface.ngx-mat-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.ngx-mat-select-panel-above) .mdc-menu-surface.ngx-mat-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.ngx-mat-select-panel-above .mdc-menu-surface.ngx-mat-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.ngx-mat-select-placeholder{transition:color .18s 60ms cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .ngx-mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .ngx-mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-mdc-form-field-type-ngx-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-ngx-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100% / .75 - 24px)}.mat-mdc-form-field-type-ngx-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-ngx-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.ngx-mat-select-min-line:empty:before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}ngx-mat-select-panel{width:0;height:0;position:absolute}.ngx-mat-select-panel{display:flex!important;flex-direction:column;box-sizing:border-box;padding:0!important}.ngx-mat-select-panel-header{display:flex;align-items:center;width:100%;padding:1rem}.ngx-mat-select-panel-search-box{flex:1 1 100%;margin:0 .5rem}.ngx-mat-select-panel-content{padding:0!important;height:100%;position:relative}.ngx-mat-select-virtual-scroll{height:100%}.ngx-mat-select-panel-bottom-sheet-view-type{inset:20% 0 0!important;width:100%!important}.ngx-mat-select-panel-full-screen-view-type{inset:0!important;width:100%!important;height:100%!important}.ngx-mat-select-panel-default-view-type{height:350px}.ngx-mat-select-panel-header-filler{flex:1 1 auto;min-height:56px}.ngx-mat-select-back-button{opacity:.7;flex:0 0 40px;display:flex;justify-content:center;cursor:pointer;transition:opacity .15s ease-in-out}.ngx-mat-select-chips{overflow:hidden}.ngx-mat-select-chip-grid-row{display:flex}.ngx-mat-select-chip-grid-row--oneRowChip{flex-wrap:nowrap}.ngx-mat-select-chip-grid-row--multipleRowChip{flex-wrap:wrap}.ngx-mat-select-chip-grid-row .ngx-mat-select-chip-grid-row-icon{display:flex;align-items:center}.ngx-mat-select-input-chips{height:0!important;width:0!important}.ngx-mat-select-value.ngx-mat-select-value--oneRowChip,.ngx-mat-select-value.ngx-mat-select-value--multipleRowChip{padding-right:.5rem}body[dir=rtl] .ngx-mat-select-value.ngx-mat-select-value--oneRowChip,body[dir=rtl] .ngx-mat-select-value.ngx-mat-select-value--multipleRowChip{padding-left:.5rem;padding-right:0}body[dir=rtl] .ngx-mat-select-back-button{transform:rotate(180deg)}
`],encapsulation:2,data:{animation:[Jn.transformPanelWrap]},changeDetection:0})}}return i})(),ea=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=T({providers:[li],imports:[ue]})}}return i})(),ta=(()=>{class i{get hasSearchBox(){return this._hasSearchBox}set hasSearchBox(e){this._hasSearchBox=Me(e),this.host.hasSearchBox!==this._hasSearchBox&&(this.host.hasSearchBox=this._hasSearchBox,this._changeDetectorRef.detectChanges()),this.checkOptionLabel(),this.initializeSearch()}set searchBoxPlaceholder(e){this.host.searchBoxComponent&&!U(e)&&(this.host.searchBoxPlaceholder=e)}constructor(e,t){this.host=e,this._changeDetectorRef=t,this._hasSearchBox=!1,this.filteredOptions$=new ze([]),this.loading$=new ze(!1),this.destroy$=new A,this.optionType="unknown",this.initialized=!1,this.isFirstEmptySearch=!0,this.host.filteredOptions$=this.filteredOptions$.asObservable(),this.host.loading$=this.loading$.asObservable().pipe(bi())}ngOnInit(){this.initialized=!0,this.searchSubscription||(this.hasSearchBox=this.host.hasSearchBox),this.checkOptionLabel(),this.listenToValueChanges(),this.initSortValues()}ngAfterViewInit(){this.initScrollIntoSelectedOption()}ngOnDestroy(){this.destroy$.next(void 0),this.destroy$.complete(),this.filteredOptions$.complete(),this.loading$.complete()}checkOptionsType(){let e=this.options;!U(e)&&e.length>0&&(e[0]&&typeof e[0]=="object"?this.optionType="object":this.optionType="primitive"),this.checkOptionLabel()}initializeSearch(){this.searchSubscription?.unsubscribe(),this.hasSearchBox?this.searchSubscription=this.host.searchBoxComponent?.search.pipe(q(""),P(()=>{this.isFirstEmptySearch||(this.host.virtualScroll.scrollToIndex(0),this.host.activeItemIndex="0",this._changeDetectorRef.markForCheck()),this.isFirstEmptySearch=!1}),P(e=>this.search(e)),k(this.destroy$)).subscribe():this.search("")}checkOptionLabel(){if(Pt()&&this.optionType==="object"&&this.initialized&&!this.host.optionLabel)throw or()}listenToValueChanges(){this.host.value$.pipe($(({shouldBeSyncedWithSelection:e})=>e),P(()=>{this.syncValueAndOptions()}),k(this.destroy$)).subscribe()}initScrollIntoSelectedOption(){let e=this.host.selectionModel?.changed;e&&this.host.panel.afterOpen.pipe(_i(this.filteredOptions$.pipe(it(1)),e.pipe(q(this.host.selectionModel?.selected))),xi(this.filteredOptions$),ne(([[t],n])=>{let o,r=-1,u=this.host.selectionModel?.selected;if(u){let O=this.host._getCompareWithFn();n.some((F,D)=>u.findIndex(se=>O(se,F))!==-1?(r=D,o=F,!0):!1)}return{selectedIndex:r,selected:o}}),$(({selectedIndex:t})=>t!==-1),P(({selectedIndex:t})=>{this.host.virtualScroll.scrollToIndex(t)}),$(({selected:t})=>!this.scrollIntoVisibleOptionView(t)),Ve(({selected:t})=>this.host.visibleOptions.changes.pipe(P(()=>this.scrollIntoVisibleOptionView(t)),it(1))),k(this.destroy$)).subscribe()}scrollIntoVisibleOptionView(e){let t=this.host._getCompareWithFn(),n=this.host.visibleOptions.find(o=>t(o.value,e));return n&&(this.host.activeItemIndex=n.id?.toString(),n._getHostElement().scrollIntoView({block:"end"}),this._changeDetectorRef.detectChanges()),!!n}initSortValues(){le(this.host.selectionChange,this.host.value$).pipe(P(()=>{this.sortValues()}),k(this.destroy$)).subscribe()}static{this.\u0275fac=function(t){return new(t||i)(S(ci),S(z))}}static{this.\u0275dir=I({type:i,inputs:{sortComparator:"sortComparator",hasSearchBox:"hasSearchBox",searchBoxPlaceholder:"searchBoxPlaceholder"}})}}return i})(),Jc=(()=>{class i extends ta{set loading(e){this.loading$.next(e||!1)}constructor(e,t){super(e,t),this.search=n=>{let o=r=>!U(n)&&n!==""?this.searchComparison?this.searchComparison(n,r):this.host.optionLabel&&this.optionType==="object"?r[this.host.optionLabel]?.toString().includes(n):r?.toString().includes(n):!0;U(this.options)||this.filteredOptions$.next(this.options.filter(o).slice())},this.sortValues=()=>{if(this.host.multiple){let n=this.options||[];this.host.selectionModel?.sort((o,r)=>this.sortComparator?this.sortComparator(o,r,n):n.indexOf(o)-n.indexOf(r)),this.host.stateChanges.next()}},this.syncValueAndOptions=()=>{if(this.host.selectionModel){let n=this.host.getValue(),o=this.host._getCompareWithFn(),r=this.options||[];if(U(n)){let u=r.filter(O=>o(O,void 0)||o(O,null)).length>0;r.length>0&&u?this.host.selectionModel.setSelection(n):this.host.selectionModel.clear()}else if(r.length>0&&n.length>0){let u=[];n.forEach(F=>{r.some(D=>o(D,F)?(u.push({option:D,value:F}),!0):!1)}),this.host.selectionModel.setSelection(...u.map(F=>F.option));let O=u.map(F=>F.value);this.host.setValue(this.host._toFlat(O),!1,!0)}else this.loading$.getValue()||(this.host.selectionModel.clear(),this.host.setValue(null,!1,!0));this._changeDetectorRef.markForCheck(),this.host.stateChanges.next()}}}ngOnChanges(e){let t=e.options;t&&t.previousValue!==t.currentValue&&(this.host.searchBoxComponent?.clear(),this.search(""),this.checkOptionsType(),this.syncValueAndOptions())}static{this.\u0275fac=function(t){return new(t||i)(S(ci),S(z))}}static{this.\u0275dir=I({type:i,selectors:[["ngx-mat-select","clientSide","",5,"ngx-mat-select","serverSide",""]],inputs:{options:"options",loading:"loading",searchComparison:"searchComparison"},exportAs:["ngxMatSelectClientSide"],standalone:!1,features:[de,je]})}}return i})(),ed=(()=>{class i extends ta{set fetchOptions(e){this.destroy$.next(void 0),fi([this.search$,this.fetchNext$]).pipe(q(["",""]),nt(),ne(([[t],[n]])=>(t!==n&&(this.pageNumber=1,this.hasMore=!0,this.options=[]),n)),P(()=>{this.loading$.next(!0),this._changeDetectorRef.detectChanges()}),Ve(t=>e({searchTerm:t,pageNumber:this.pageNumber,pageSize:this.pageSize}).pipe(P(n=>{n.length>0&&this.pageNumber++,this.hasMore=n?.length===this.pageSize}),ne(n=>(this.options=this.options.concat(...n),[...this.options])),P(n=>{this.filteredOptions$.next(n),this.loading$.next(!1)}),P(()=>{this.checkOptionsType(),this.sortValues()}),P(()=>{this._changeDetectorRef.detectChanges()}))),k(this.destroy$)).subscribe()}constructor(e,t,n){super(t,e),this.scrollDispatcher=n,this.pageSize=10,this.options=[],this.pageNumber=1,this.search$=new Et(1),this.fetchNext$=new ze(void 0),this.hasMore=!0,this.search=o=>{this.search$.next(o)},this.sortValues=()=>{if(this.host.multiple&&this.options.length>0&&!U(this.sortComparator)&&typeof this.sortComparator=="function"){let o=this.sortComparator;this.host.selectionModel?.sort((r,u)=>o(r,u,this.options)),this.host.stateChanges.next()}},this.syncValueAndOptions=()=>{let o=this.host.getValue();U(o)?this.host.selectionModel?.clear():(this.host.selectionModel?.setSelection(...o),this.sortValues()),this._changeDetectorRef.markForCheck(),this.host.stateChanges.next()}}fetchNext(){this.hasMore&&this.fetchNext$.next(void 0)}ngAfterViewInit(){super.ngAfterViewInit(),this.initializeInfiniteScroll()}ngOnDestroy(){super.ngOnDestroy(),this.search$.complete(),this.fetchNext$.complete()}initializeInfiniteScroll(){this.scrollDispatcher.scrolled().pipe($(()=>this.host.virtualScroll.getRenderedRange().end===this.host.virtualScroll.getDataLength()),$(()=>!this.loading$.getValue()),P(()=>{this.fetchNext()}),k(this.destroy$)).subscribe()}static{this.\u0275fac=function(t){return new(t||i)(S(z),S(ci),S(Ki))}}static{this.\u0275dir=I({type:i,selectors:[["ngx-mat-select","serverSide","",5,"ngx-mat-select","clientSide",""]],inputs:{pageSize:"pageSize",fetchOptions:"fetchOptions"},exportAs:["ngxMatSelectServerSide"],standalone:!1,features:[de]})}}return i})(),dr=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=T({imports:[ue,Bn]})}}return i})(),mr=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=T({imports:[ue,en]})}}return i})(),di=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=T({imports:[ue]})}}return i})(),pr=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=T({imports:[ue,Wi,di]})}}return i})(),hr=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=T({imports:[ue,Xn,di,ea]})}}return i})(),td=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275mod=R({type:i})}static{this.\u0275inj=T({imports:[ue,Zi,ea,dr,mr,pr,di,hr,Qt]})}}return i})();export{Ar as a,Ye as b,Me as c,Cr as d,ee as e,Ht as f,$t as g,Le as h,Pe as i,Mn as j,us as k,Ne as l,In as m,Xe as n,Ct as o,Rn as p,fe as q,Ba as r,za as s,bt as t,Tn as u,Qt as v,Ln as w,St as x,pl as y,te as z,Ga as A,Dl as B,Ze as C,Kt as D,Xt as E,Qa as F,tr as G,ir as H,nr as I,ci as J,Jc as K,ed as L,td as M};
