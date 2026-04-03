(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="172",wl=0,Ia=1,bl=2,zo=1,Rl=2,dn=3,Ln=0,Ie=1,pn=2,Rn=0,xi=1,Ua=2,Fa=3,Na=4,Cl=5,Vn=100,Pl=101,Ll=102,Dl=103,Il=104,Ul=200,Fl=201,Nl=202,Ol=203,Er=204,Tr=205,Bl=206,zl=207,Hl=208,Gl=209,Vl=210,kl=211,Wl=212,Xl=213,Yl=214,Ar=0,wr=1,br=2,Ei=3,Rr=4,Cr=5,Pr=6,Lr=7,Ho=0,ql=1,$l=2,Cn=0,Zl=1,Kl=2,Jl=3,jl=4,Ql=5,tc=6,ec=7,Go=300,Ti=301,Ai=302,Dr=303,Ir=304,Bs=306,Ur=1e3,Wn=1001,Fr=1002,en=1003,nc=1004,Ji=1005,He=1006,Vs=1007,Xn=1008,vn=1009,Vo=1010,ko=1011,Vi=1012,pa=1013,$n=1014,mn=1015,Wi=1016,ma=1017,ga=1018,wi=1020,Wo=35902,Xo=1021,Yo=1022,tn=1023,qo=1024,$o=1025,Si=1026,bi=1027,Zo=1028,_a=1029,Ko=1030,va=1031,xa=1033,ws=33776,bs=33777,Rs=33778,Cs=33779,Nr=35840,Or=35841,Br=35842,zr=35843,Hr=36196,Gr=37492,Vr=37496,kr=37808,Wr=37809,Xr=37810,Yr=37811,qr=37812,$r=37813,Zr=37814,Kr=37815,Jr=37816,jr=37817,Qr=37818,ta=37819,ea=37820,na=37821,Ps=36492,ia=36494,sa=36495,Jo=36283,ra=36284,aa=36285,oa=36286,ic=3200,sc=3201,rc=0,ac=1,bn="",ze="srgb",Ri="srgb-linear",Is="linear",te="srgb",jn=7680,Oa=519,oc=512,lc=513,cc=514,jo=515,hc=516,uc=517,fc=518,dc=519,la=35044,Ba="300 es",gn=2e3,Us=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const i=s.indexOf(e);i!==-1&&s.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,ca=180/Math.PI;function Pn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[r&255]+Me[r>>8&255]+Me[r>>16&255]+Me[r>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Ht(r,t,e){return Math.max(t,Math.min(e,r))}function pc(r,t){return(r%t+t)%t}function Ws(r,t,e){return(1-e)*r+e*t}function rn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ee(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*n-a*s+t.x,this.y=i*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,i,a,o,c,u){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,o,c,u)}set(t,e,n,s,i,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=i,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],d=n[7],f=n[2],l=n[5],m=n[8],g=s[0],p=s[3],_=s[6],A=s[1],w=s[4],E=s[7],x=s[2],M=s[5],y=s[8];return i[0]=a*g+o*A+c*x,i[3]=a*p+o*w+c*M,i[6]=a*_+o*E+c*y,i[1]=u*g+h*A+d*x,i[4]=u*p+h*w+d*M,i[7]=u*_+h*E+d*y,i[2]=f*g+l*A+m*x,i[5]=f*p+l*w+m*M,i[8]=f*_+l*E+m*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*i*h+n*o*c+s*i*u-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],d=h*a-o*u,f=o*c-h*i,l=u*i-a*c,m=e*d+n*f+s*l;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=d*g,t[1]=(s*u-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(h*e-s*c)*g,t[5]=(s*i-o*e)*g,t[6]=l*g,t[7]=(n*c-u*e)*g,t[8]=(a*e-n*i)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,i,a,o){const c=Math.cos(i),u=Math.sin(i);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new It;function Qo(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ki(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mc(){const r=ki("canvas");return r.style.display="block",r}const za={};function _i(r){r in za||(za[r]=!0,console.warn(r))}function gc(r,t,e){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}function _c(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vc(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ha=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ga=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xc(){const r={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(s,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===te&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},fromWorkingColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},toWorkingColorSpace:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bn?Is:this.spaces[s].transfer},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,a){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ri]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:Ha,fromXYZ:Ga,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Ha,fromXYZ:Ga,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),r}const qt=xc();function _n(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Qn;class Sc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=ki("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ki("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=_n(i[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mc=0;class tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?i.push(Ys(s[a].image)):i.push(Ys(s[a]))}else i=Ys(s);n.url=i}return e||(t.images[this.uuid]=n),n}}function Ys(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yc=0;class Ee extends Pi{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Wn,s=Wn,i=He,a=Xn,o=tn,c=vn,u=Ee.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Pn(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Go)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Go;Ee.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,i;const c=t.elements,u=c[0],h=c[4],d=c[8],f=c[1],l=c[5],m=c[9],g=c[2],p=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+p)<.1&&Math.abs(u+l+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(u+1)/2,E=(l+1)/2,x=(_+1)/2,M=(h+f)/4,y=(d+g)/4,T=(m+p)/4;return w>E&&w>x?w<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(w),s=M/n,i=y/n):E>x?E<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(E),n=M/s,i=T/s):x<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(x),n=y/i,s=T/i),this.set(n,s,i,e),this}let A=Math.sqrt((p-m)*(p-m)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-m)/A,this.y=(d-g)/A,this.z=(f-h)/A,this.w=Math.acos((u+l+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ec extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const i=new Ee(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new tl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class el extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tc extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,i,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],d=n[s+3];const f=i[a+0],l=i[a+1],m=i[a+2],g=i[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=l,t[e+2]=m,t[e+3]=g;return}if(d!==g||c!==f||u!==l||h!==m){let p=1-o;const _=c*f+u*l+h*m+d*g,A=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const x=Math.sqrt(w),M=Math.atan2(x,_*A);p=Math.sin(p*M)/x,o=Math.sin(o*M)/x}const E=o*A;if(c=c*p+f*E,u=u*p+l*E,h=h*p+m*E,d=d*p+g*E,p===1-o){const x=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=x,u*=x,h*=x,d*=x}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,i,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],d=i[a],f=i[a+1],l=i[a+2],m=i[a+3];return t[e]=o*m+h*d+c*l-u*f,t[e+1]=c*m+h*f+u*d-o*l,t[e+2]=u*m+h*l+o*f-c*d,t[e+3]=h*m-o*d-c*f-u*l,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,i=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),d=o(i/2),f=c(n/2),l=c(s/2),m=c(i/2);switch(a){case"XYZ":this._x=f*h*d+u*l*m,this._y=u*l*d-f*h*m,this._z=u*h*m+f*l*d,this._w=u*h*d-f*l*m;break;case"YXZ":this._x=f*h*d+u*l*m,this._y=u*l*d-f*h*m,this._z=u*h*m-f*l*d,this._w=u*h*d+f*l*m;break;case"ZXY":this._x=f*h*d-u*l*m,this._y=u*l*d+f*h*m,this._z=u*h*m+f*l*d,this._w=u*h*d-f*l*m;break;case"ZYX":this._x=f*h*d-u*l*m,this._y=u*l*d+f*h*m,this._z=u*h*m-f*l*d,this._w=u*h*d+f*l*m;break;case"YZX":this._x=f*h*d+u*l*m,this._y=u*l*d+f*h*m,this._z=u*h*m-f*l*d,this._w=u*h*d-f*l*m;break;case"XZY":this._x=f*h*d-u*l*m,this._y=u*l*d-f*h*m,this._z=u*h*m+f*l*d,this._w=u*h*d+f*l*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],i=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const l=.5/Math.sqrt(f+1);this._w=.25/l,this._x=(h-c)*l,this._y=(i-u)*l,this._z=(a-s)*l}else if(n>o&&n>d){const l=2*Math.sqrt(1+n-o-d);this._w=(h-c)/l,this._x=.25*l,this._y=(s+a)/l,this._z=(i+u)/l}else if(o>d){const l=2*Math.sqrt(1+o-n-d);this._w=(i-u)/l,this._x=(s+a)/l,this._y=.25*l,this._z=(c+h)/l}else{const l=2*Math.sqrt(1+d-n-o);this._w=(a-s)/l,this._x=(i+u)/l,this._y=(c+h)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,i=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-i*c,this._y=s*h+a*c+i*o-n*u,this._z=i*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-i*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,i=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+i*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const c=1-o*o;if(c<=Number.EPSILON){const l=1-e;return this._w=l*a+e*this._w,this._x=l*n+e*this._x,this._y=l*s+e*this._y,this._z=l*i+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),d=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=i*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Va.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Va.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*s,this.y=i[1]*e+i[4]*n+i[7]*s,this.z=i[2]*e+i[5]*n+i[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*e+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*e+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,i=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*n),h=2*(o*e-i*s),d=2*(i*n-a*e);return this.x=e+c*u+a*d-o*h,this.y=n+c*h+o*u-i*d,this.z=s+c*d+i*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*s,this.y=i[1]*e+i[5]*n+i[9]*s,this.z=i[2]*e+i[6]*n+i[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,i=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-i*o,this.y=i*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new V,Va=new Xi;class Yi{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(i,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const s=t.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),Qi.subVectors(this.max,Ii),ti.subVectors(t.a,Ii),ei.subVectors(t.b,Ii),ni.subVectors(t.c,Ii),Mn.subVectors(ei,ti),yn.subVectors(ni,ei),Un.subVectors(ti,ni);let e=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Un.z,Un.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Un.z,0,-Un.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Un.y,Un.x,0];return!$s(e,ti,ei,ni,Qi)||(e=[1,0,0,0,1,0,0,0,1],!$s(e,ti,ei,ni,Qi))?!1:(ts.crossVectors(Mn,yn),e=[ts.x,ts.y,ts.z],$s(e,ti,ei,ni,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new V,new V,new V,new V,new V,new V,new V,new V],$e=new V,ji=new Yi,ti=new V,ei=new V,ni=new V,Mn=new V,yn=new V,Un=new V,Ii=new V,Qi=new V,ts=new V,Fn=new V;function $s(r,t,e,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){Fn.fromArray(r,i);const o=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),c=t.dot(Fn),u=e.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Ac=new Yi,Ui=new V,Zs=new V;class qi{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ac.setFromPoints(t).getCenter(n);let s=0;for(let i=0,a=t.length;i<a;i++)s=Math.max(s,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(Zs)),this.expandByPoint(Ui.copy(t.center).sub(Zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new V,Ks=new V,es=new V,En=new V,Js=new V,ns=new V,js=new V;class Sa{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ks.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Ks);const i=t.distanceTo(e)*.5,a=-this.direction.dot(es),o=En.dot(this.direction),c=-En.dot(es),u=En.lengthSq(),h=Math.abs(1-a*a);let d,f,l,m;if(h>0)if(d=a*c-o,f=a*o-c,m=i*h,d>=0)if(f>=-m)if(f<=m){const g=1/h;d*=g,f*=g,l=d*(d+a*f+2*o)+f*(a*d+f+2*c)+u}else f=i,d=Math.max(0,-(a*f+o)),l=-d*d+f*(f+2*c)+u;else f=-i,d=Math.max(0,-(a*f+o)),l=-d*d+f*(f+2*c)+u;else f<=-m?(d=Math.max(0,-(-a*i+o)),f=d>0?-i:Math.min(Math.max(-i,-c),i),l=-d*d+f*(f+2*c)+u):f<=m?(d=0,f=Math.min(Math.max(-i,-c),i),l=f*(f+2*c)+u):(d=Math.max(0,-(a*i+o)),f=d>0?i:Math.min(Math.max(-i,-c),i),l=-d*d+f*(f+2*c)+u);else f=a>0?-i:i,d=Math.max(0,-(a*f+o)),l=-d*d+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ks).addScaledVector(es,f),l}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,i=t.radius*t.radius;if(s>i)return null;const a=Math.sqrt(i-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,i,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),h>=0?(i=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(i=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,i){Js.subVectors(e,t),ns.subVectors(n,t),js.crossVectors(Js,ns);let a=this.direction.dot(js),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const c=o*this.direction.dot(ns.crossVectors(En,ns));if(c<0)return null;const u=o*this.direction.dot(Js.cross(En));if(u<0||c+u>a)return null;const h=-o*En.dot(js);return h<0?null:this.at(h/a,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,i,a,o,c,u,h,d,f,l,m,g,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,o,c,u,h,d,f,l,m,g,p)}set(t,e,n,s,i,a,o,c,u,h,d,f,l,m,g,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=i,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=d,_[14]=f,_[3]=l,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),i=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,i=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(i),d=Math.sin(i);if(t.order==="XYZ"){const f=a*h,l=a*d,m=o*h,g=o*d;e[0]=c*h,e[4]=-c*d,e[8]=u,e[1]=l+m*u,e[5]=f-g*u,e[9]=-o*c,e[2]=g-f*u,e[6]=m+l*u,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,l=c*d,m=u*h,g=u*d;e[0]=f+g*o,e[4]=m*o-l,e[8]=a*u,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=l*o-m,e[6]=g+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,l=c*d,m=u*h,g=u*d;e[0]=f-g*o,e[4]=-a*d,e[8]=m+l*o,e[1]=l+m*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,l=a*d,m=o*h,g=o*d;e[0]=c*h,e[4]=m*u-l,e[8]=f*u+g,e[1]=c*d,e[5]=g*u+f,e[9]=l*u-m,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,l=a*u,m=o*c,g=o*u;e[0]=c*h,e[4]=g-f*d,e[8]=m*d+l,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=l*d+m,e[10]=f-g*d}else if(t.order==="XZY"){const f=a*c,l=a*u,m=o*c,g=o*u;e[0]=c*h,e[4]=-d,e[8]=u*h,e[1]=f*d+g,e[5]=a*h,e[9]=l*d-m,e[2]=m*d-l,e[6]=o*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wc,t,bc)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Tn.crossVectors(n,Oe),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Tn.crossVectors(n,Oe)),Tn.normalize(),is.crossVectors(Oe,Tn),s[0]=Tn.x,s[4]=is.x,s[8]=Oe.x,s[1]=Tn.y,s[5]=is.y,s[9]=Oe.y,s[2]=Tn.z,s[6]=is.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],d=n[5],f=n[9],l=n[13],m=n[2],g=n[6],p=n[10],_=n[14],A=n[3],w=n[7],E=n[11],x=n[15],M=s[0],y=s[4],T=s[8],S=s[12],v=s[1],b=s[5],P=s[9],D=s[13],U=s[2],F=s[6],z=s[10],G=s[14],H=s[3],J=s[7],it=s[11],ct=s[15];return i[0]=a*M+o*v+c*U+u*H,i[4]=a*y+o*b+c*F+u*J,i[8]=a*T+o*P+c*z+u*it,i[12]=a*S+o*D+c*G+u*ct,i[1]=h*M+d*v+f*U+l*H,i[5]=h*y+d*b+f*F+l*J,i[9]=h*T+d*P+f*z+l*it,i[13]=h*S+d*D+f*G+l*ct,i[2]=m*M+g*v+p*U+_*H,i[6]=m*y+g*b+p*F+_*J,i[10]=m*T+g*P+p*z+_*it,i[14]=m*S+g*D+p*G+_*ct,i[3]=A*M+w*v+E*U+x*H,i[7]=A*y+w*b+E*F+x*J,i[11]=A*T+w*P+E*z+x*it,i[15]=A*S+w*D+E*G+x*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],i=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],d=t[6],f=t[10],l=t[14],m=t[3],g=t[7],p=t[11],_=t[15];return m*(+i*c*d-s*u*d-i*o*f+n*u*f+s*o*l-n*c*l)+g*(+e*c*l-e*u*f+i*a*f-s*a*l+s*u*h-i*c*h)+p*(+e*u*d-e*o*l-i*a*d+n*a*l+i*o*h-n*u*h)+_*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],d=t[9],f=t[10],l=t[11],m=t[12],g=t[13],p=t[14],_=t[15],A=d*p*u-g*f*u+g*c*l-o*p*l-d*c*_+o*f*_,w=m*f*u-h*p*u-m*c*l+a*p*l+h*c*_-a*f*_,E=h*g*u-m*d*u+m*o*l-a*g*l-h*o*_+a*d*_,x=m*d*c-h*g*c-m*o*f+a*g*f+h*o*p-a*d*p,M=e*A+n*w+s*E+i*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/M;return t[0]=A*y,t[1]=(g*f*i-d*p*i-g*s*l+n*p*l+d*s*_-n*f*_)*y,t[2]=(o*p*i-g*c*i+g*s*u-n*p*u-o*s*_+n*c*_)*y,t[3]=(d*c*i-o*f*i-d*s*u+n*f*u+o*s*l-n*c*l)*y,t[4]=w*y,t[5]=(h*p*i-m*f*i+m*s*l-e*p*l-h*s*_+e*f*_)*y,t[6]=(m*c*i-a*p*i-m*s*u+e*p*u+a*s*_-e*c*_)*y,t[7]=(a*f*i-h*c*i+h*s*u-e*f*u-a*s*l+e*c*l)*y,t[8]=E*y,t[9]=(m*d*i-h*g*i-m*n*l+e*g*l+h*n*_-e*d*_)*y,t[10]=(a*g*i-m*o*i+m*n*u-e*g*u-a*n*_+e*o*_)*y,t[11]=(h*o*i-a*d*i-h*n*u+e*d*u+a*n*l-e*o*l)*y,t[12]=x*y,t[13]=(h*g*s-m*d*s+m*n*f-e*g*f-h*n*p+e*d*p)*y,t[14]=(m*o*s-a*g*s-m*n*c+e*g*c+a*n*p-e*o*p)*y,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*y,this}scale(t){const e=this.elements,n=t.x,s=t.y,i=t.z;return e[0]*=n,e[4]*=s,e[8]*=i,e[1]*=n,e[5]*=s,e[9]*=i,e[2]*=n,e[6]*=s,e[10]*=i,e[3]*=n,e[7]*=s,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),i=1-n,a=t.x,o=t.y,c=t.z,u=i*a,h=i*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,i*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,i,a){return this.set(1,n,i,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,i=e._x,a=e._y,o=e._z,c=e._w,u=i+i,h=a+a,d=o+o,f=i*u,l=i*h,m=i*d,g=a*h,p=a*d,_=o*d,A=c*u,w=c*h,E=c*d,x=n.x,M=n.y,y=n.z;return s[0]=(1-(g+_))*x,s[1]=(l+E)*x,s[2]=(m-w)*x,s[3]=0,s[4]=(l-E)*M,s[5]=(1-(f+_))*M,s[6]=(p+A)*M,s[7]=0,s[8]=(m+w)*y,s[9]=(p-A)*y,s[10]=(1-(f+g))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let i=ii.set(s[0],s[1],s[2]).length();const a=ii.set(s[4],s[5],s[6]).length(),o=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const u=1/i,h=1/a,d=1/o;return Ze.elements[0]*=u,Ze.elements[1]*=u,Ze.elements[2]*=u,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=i,n.y=a,n.z=o,this}makePerspective(t,e,n,s,i,a,o=gn){const c=this.elements,u=2*i/(e-t),h=2*i/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let l,m;if(o===gn)l=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===Us)l=-a/(a-i),m=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,i,a,o=gn){const c=this.elements,u=1/(e-t),h=1/(n-s),d=1/(a-i),f=(e+t)*u,l=(n+s)*h;let m,g;if(o===gn)m=(a+i)*d,g=-2*d;else if(o===Us)m=i*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-l,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new V,Ze=new ae,wc=new V(0,0,0),bc=new V(1,1,1),Tn=new V,is=new V,Oe=new V,ka=new ae,Wa=new Xi;class xn{constructor(t=0,e=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,i=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],d=s[2],f=s[6],l=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,l),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,l),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,l),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,i));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,l),this._z=Math.atan2(c,i)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(o,l));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ka.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ka,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wa.setFromEuler(this),this.setFromQuaternion(Wa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rc=0;const Xa=new V,si=new Xi,cn=new ae,ss=new V,Fi=new V,Cc=new V,Pc=new Xi,Ya=new V(1,0,0),qa=new V(0,1,0),$a=new V(0,0,1),Za={type:"added"},Lc={type:"removed"},ri={type:"childadded",child:null},Qs={type:"childremoved",child:null};class Te extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new V,e=new xn,n=new Xi,s=new V(1,1,1);function i(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new It}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(Ya,t)}rotateY(t){return this.rotateOnAxis(qa,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return Xa.copy(t).applyQuaternion(this.quaternion),this.position.add(Xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ya,t)}translateY(t){return this.translateOnAxis(qa,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ss.copy(t):ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Fi,ss,this.up):cn.lookAt(ss,Fi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),si.setFromRotationMatrix(cn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Za),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lc),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Za),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Cc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Pc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function i(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];i(t.shapes,d)}else i(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(i(t.materials,this.material[c]));s.material=o}else s.material=i(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(i(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),l=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),l.length>0&&(n.animations=l),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new V(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new V,hn=new V,tr=new V,un=new V,ai=new V,oi=new V,Ka=new V,er=new V,nr=new V,ir=new V,sr=new he,rr=new he,ar=new he;class Xe{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(t,e,n,s,i){Ke.subVectors(s,e),hn.subVectors(n,e),tr.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(hn),c=Ke.dot(tr),u=hn.dot(hn),h=hn.dot(tr),d=a*u-o*o;if(d===0)return i.set(0,0,0),null;const f=1/d,l=(u*c-o*h)*f,m=(a*h-o*c)*f;return i.set(1-l-m,m,l)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,i,a,o,c){return this.getBarycoord(t,e,n,s,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(i,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c)}static getInterpolatedAttribute(t,e,n,s,i,a){return sr.setScalar(0),rr.setScalar(0),ar.setScalar(0),sr.fromBufferAttribute(t,e),rr.fromBufferAttribute(t,n),ar.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(sr,i.x),a.addScaledVector(rr,i.y),a.addScaledVector(ar,i.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),hn.subVectors(t,e),Ke.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ke.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,i){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,i)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,i=this.c;let a,o;ai.subVectors(s,n),oi.subVectors(i,n),er.subVectors(t,n);const c=ai.dot(er),u=oi.dot(er);if(c<=0&&u<=0)return e.copy(n);nr.subVectors(t,s);const h=ai.dot(nr),d=oi.dot(nr);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ai,a);ir.subVectors(t,i);const l=ai.dot(ir),m=oi.dot(ir);if(m>=0&&l<=m)return e.copy(i);const g=l*u-c*m;if(g<=0&&u>=0&&m<=0)return o=u/(u-m),e.copy(n).addScaledVector(oi,o);const p=h*m-l*d;if(p<=0&&d-h>=0&&l-m>=0)return Ka.subVectors(i,s),o=(d-h)/(d-h+(l-m)),e.copy(s).addScaledVector(Ka,o);const _=1/(p+g+f);return a=g*_,o=f*_,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},rs={h:0,s:0,l:0};function or(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=pc(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,a=2*n-i;this.r=or(a,i,t+1/3),this.g=or(a,i,t),this.b=or(a,i,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Ht(ye.r*255,0,255))*65536+Math.round(Ht(ye.g*255,0,255))*256+Math.round(Ht(ye.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,s=ye.g,i=ye.b,a=Math.max(n,s,i),o=Math.min(n,s,i);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-i)/d+(s<i?6:0);break;case s:c=(i-n)/d+2;break;case i:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ze){qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,s=ye.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(rs);const n=Ws(An.h,rs.h,e),s=Ws(An.s,rs.s,e),i=Ws(An.l,rs.l,e);return this.setHSL(n,s,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*s,this.g=i[1]*e+i[4]*n+i[7]*s,this.b=i[2]*e+i[5]*n+i[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Wt;Wt.NAMES=il;let Dc=0;class Kn extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=xi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const o in i){const c=i[o];delete c.metadata,a.push(c)}return a}if(e){const i=s(t.textures),a=s(t.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ue extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new V,as=new Gt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==la&&(t.usage=this.usage),t}}class sl extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rl extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ic=0;const We=new ae,lr=new Te,li=new V,Be=new Yi,Ni=new Yi,_e=new V;class Ge extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qo(t)?rl:sl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new It().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return lr.lookAt(t),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,i=t.length;s<i;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const i=t[s];e.setXYZ(s,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const i=e[n];Be.setFromBufferAttribute(i),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Be.min,Ni.min),Be.expandByPoint(_e),_e.addVectors(Be.max,Ni.max),Be.expandByPoint(_e)):(Be.expandByPoint(Ni.min),Be.expandByPoint(Ni.max))}Be.getCenter(n);let s=0;for(let i=0,a=t.count;i<a;i++)_e.fromBufferAttribute(t,i),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let i=0,a=e.length;i<a;i++){const o=e[i],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)_e.fromBufferAttribute(o,u),c&&(li.fromBufferAttribute(t,u),_e.add(li)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let T=0;T<n.count;T++)o[T]=new V,c[T]=new V;const u=new V,h=new V,d=new V,f=new Gt,l=new Gt,m=new Gt,g=new V,p=new V;function _(T,S,v){u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),f.fromBufferAttribute(i,T),l.fromBufferAttribute(i,S),m.fromBufferAttribute(i,v),h.sub(u),d.sub(u),l.sub(f),m.sub(f);const b=1/(l.x*m.y-m.x*l.y);isFinite(b)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-l.y).multiplyScalar(b),p.copy(d).multiplyScalar(l.x).addScaledVector(h,-m.x).multiplyScalar(b),o[T].add(g),o[S].add(g),o[v].add(g),c[T].add(p),c[S].add(p),c[v].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,S=A.length;T<S;++T){const v=A[T],b=v.start,P=v.count;for(let D=b,U=b+P;D<U;D+=3)_(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const w=new V,E=new V,x=new V,M=new V;function y(T){x.fromBufferAttribute(s,T),M.copy(x);const S=o[T];w.copy(S),w.sub(x.multiplyScalar(x.dot(S))).normalize(),E.crossVectors(M,S);const b=E.dot(c[T])<0?-1:1;a.setXYZW(T,w.x,w.y,w.z,b)}for(let T=0,S=A.length;T<S;++T){const v=A[T],b=v.start,P=v.count;for(let D=b,U=b+P;D<U;D+=3)y(t.getX(D+0)),y(t.getX(D+1)),y(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,l=n.count;f<l;f++)n.setXYZ(f,0,0,0);const s=new V,i=new V,a=new V,o=new V,c=new V,u=new V,h=new V,d=new V;if(t)for(let f=0,l=t.count;f<l;f+=3){const m=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,i),d.subVectors(s,i),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,p),o.add(h),c.add(h),u.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,l=e.count;f<l;f+=3)s.fromBufferAttribute(e,f+0),i.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,i),d.subVectors(s,i),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(c.length*h);let l=0,m=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?l=c[g]*o.data.stride+o.offset:l=c[g]*h;for(let _=0;_<h;_++)f[m++]=u[l++]}return new Fe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,n);e.setAttribute(o,u)}const i=this.morphAttributes;for(const o in i){const c=[],u=i[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],l=t(f,n);c.push(l)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let i=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){const l=u[d];h.push(l.toJSON(t.data))}h.length>0&&(s[c]=h,i=!0)}i&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const i=t.morphAttributes;for(const u in i){const h=[],d=i[u];for(let f=0,l=d.length;f<l;f++)h.push(d[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ja=new ae,Nn=new Sa,os=new qi,ja=new V,ls=new V,cs=new V,hs=new V,cr=new V,us=new V,Qa=new V,fs=new V;class re extends Te{constructor(t=new Ge,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(i&&o){us.set(0,0,0);for(let c=0,u=i.length;c<u;c++){const h=o[c],d=i[c];h!==0&&(cr.fromBufferAttribute(d,t),a?us.addScaledVector(cr,h):us.addScaledVector(cr.sub(e),h))}e.add(us)}return e}raycast(t,e){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(i),Nn.copy(t.ray).recast(t.near),!(os.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(os,ja)===null||Nn.origin.distanceToSquared(ja)>(t.far-t.near)**2))&&(Ja.copy(i).invert(),Nn.copy(t.ray).applyMatrix4(Ja),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s;const i=this.geometry,a=this.material,o=i.index,c=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv1,d=i.attributes.normal,f=i.groups,l=i.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=a[p.materialIndex],A=Math.max(p.start,l.start),w=Math.min(o.count,Math.min(p.start+p.count,l.start+l.count));for(let E=A,x=w;E<x;E+=3){const M=o.getX(E),y=o.getX(E+1),T=o.getX(E+2);s=ds(this,_,t,n,u,h,d,M,y,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,l.start),g=Math.min(o.count,l.start+l.count);for(let p=m,_=g;p<_;p+=3){const A=o.getX(p),w=o.getX(p+1),E=o.getX(p+2);s=ds(this,a,t,n,u,h,d,A,w,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=a[p.materialIndex],A=Math.max(p.start,l.start),w=Math.min(c.count,Math.min(p.start+p.count,l.start+l.count));for(let E=A,x=w;E<x;E+=3){const M=E,y=E+1,T=E+2;s=ds(this,_,t,n,u,h,d,M,y,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,l.start),g=Math.min(c.count,l.start+l.count);for(let p=m,_=g;p<_;p+=3){const A=p,w=p+1,E=p+2;s=ds(this,a,t,n,u,h,d,A,w,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Uc(r,t,e,n,s,i,a,o){let c;if(t.side===Ie?c=n.intersectTriangle(a,i,s,!0,o):c=n.intersectTriangle(s,i,a,t.side===Ln,o),c===null)return null;fs.copy(o),fs.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(fs);return u<e.near||u>e.far?null:{distance:u,point:fs.clone(),object:r}}function ds(r,t,e,n,s,i,a,o,c,u){r.getVertexPosition(o,ls),r.getVertexPosition(c,cs),r.getVertexPosition(u,hs);const h=Uc(r,t,e,n,ls,cs,hs,Qa);if(h){const d=new V;Xe.getBarycoord(Qa,ls,cs,hs,d),s&&(h.uv=Xe.getInterpolatedAttribute(s,o,c,u,d,new Gt)),i&&(h.uv1=Xe.getInterpolatedAttribute(i,o,c,u,d,new Gt)),a&&(h.normal=Xe.getInterpolatedAttribute(a,o,c,u,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new V,materialIndex:0};Xe.getNormal(ls,cs,hs,f.normal),h.face=f,h.barycoord=d}return h}class $i extends Ge{constructor(t=1,e=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const o=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const c=[],u=[],h=[],d=[];let f=0,l=0;m("z","y","x",-1,-1,n,e,t,a,i,0),m("z","y","x",1,-1,n,e,-t,a,i,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,i,4),m("x","y","z",-1,-1,t,e,-n,s,i,5),this.setIndex(c),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function m(g,p,_,A,w,E,x,M,y,T,S){const v=E/y,b=x/T,P=E/2,D=x/2,U=M/2,F=y+1,z=T+1;let G=0,H=0;const J=new V;for(let it=0;it<z;it++){const ct=it*b-D;for(let Mt=0;Mt<F;Mt++){const Lt=Mt*v-P;J[g]=Lt*A,J[p]=ct*w,J[_]=U,u.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[_]=M>0?1:-1,h.push(J.x,J.y,J.z),d.push(Mt/y),d.push(1-it/T),G+=1}}for(let it=0;it<T;it++)for(let ct=0;ct<y;ct++){const Mt=f+ct+F*it,Lt=f+ct+F*(it+1),q=f+(ct+1)+F*(it+1),tt=f+(ct+1)+F*it;c.push(Mt,Lt,tt),c.push(Lt,q,tt),H+=6}o.addGroup(l,H,S),l+=H,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const s=r[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(r){const t={};for(let e=0;e<r.length;e++){const n=Ci(r[e]);for(const s in n)t[s]=n[s]}return t}function Fc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function al(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Nc={clone:Ci,merge:be};var Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=Fc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let Ma=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const wn=new V,to=new Gt,eo=new Gt;class Qe extends Ma{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,to,eo),e.subVectors(eo,to)}setViewOffset(t,e,n,s,i,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;i+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(i+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,hi=1;class zc extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(ci,hi,t,e);s.layers=this.layers,this.add(s);const i=new Qe(ci,hi,t,e);i.layers=this.layers,this.add(i);const a=new Qe(ci,hi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(ci,hi,t,e);o.layers=this.layers,this.add(o);const c=new Qe(ci,hi,t,e);c.layers=this.layers,this.add(c);const u=new Qe(ci,hi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,i,a,o,c]=e;for(const u of e)this.remove(u);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,c,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),l=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,i),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,l),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ol extends Ee{constructor(t,e,n,s,i,a,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,s,i,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hc extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $i(5,5,5),i=new Sn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Rn});i.uniforms.tEquirect.value=e;const a=new re(s,i),o=e.minFilter;return e.minFilter===Xn&&(e.minFilter=He),new zc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const i=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(i)}}class no extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=la,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,i=this.stride;s<i;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const we=new V;class Fs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=i,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[s+i])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[s+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ll extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ui;const Oi=new V,fi=new V,di=new V,pi=new Gt,Bi=new Gt,cl=new ae,ps=new V,zi=new V,ms=new V,io=new Gt,hr=new Gt,so=new Gt;class Vc extends Te{constructor(t=new ll){if(super(),this.isSprite=!0,this.type="Sprite",ui===void 0){ui=new Ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gc(e,5);ui.setIndex([0,1,2,0,2,3]),ui.setAttribute("position",new Fs(n,3,0,!1)),ui.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=ui,this.material=t,this.center=new Gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fi.setFromMatrixScale(this.matrixWorld),cl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fi.multiplyScalar(-di.z);const n=this.material.rotation;let s,i;n!==0&&(i=Math.cos(n),s=Math.sin(n));const a=this.center;gs(ps.set(-.5,-.5,0),di,a,fi,s,i),gs(zi.set(.5,-.5,0),di,a,fi,s,i),gs(ms.set(.5,.5,0),di,a,fi,s,i),io.set(0,0),hr.set(1,0),so.set(1,1);let o=t.ray.intersectTriangle(ps,zi,ms,!1,Oi);if(o===null&&(gs(zi.set(-.5,.5,0),di,a,fi,s,i),hr.set(0,1),o=t.ray.intersectTriangle(ps,ms,zi,!1,Oi),o===null))return;const c=t.ray.origin.distanceTo(Oi);c<t.near||c>t.far||e.push({distance:c,point:Oi.clone(),uv:Xe.getInterpolation(Oi,ps,zi,ms,io,hr,so,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gs(r,t,e,n,s,i){pi.subVectors(r,e).addScalar(.5).multiply(n),s!==void 0?(Bi.x=i*pi.x-s*pi.y,Bi.y=s*pi.x+i*pi.y):Bi.copy(pi),r.copy(t),r.x+=Bi.x,r.y+=Bi.y,r.applyMatrix4(cl)}const ur=new V,kc=new V,Wc=new It;class Hn{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ur.subVectors(n,e).cross(kc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ur),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wc.getNormalMatrix(t),s=this.coplanarPoint(ur).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new qi,_s=new V;class hl{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,i=new Hn,a=new Hn){this.planes=[t,e,n,s,i,a]}set(t,e,n,s,i,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(i),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,s=t.elements,i=s[0],a=s[1],o=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],l=s[8],m=s[9],g=s[10],p=s[11],_=s[12],A=s[13],w=s[14],E=s[15];if(n[0].setComponents(c-i,f-u,p-l,E-_).normalize(),n[1].setComponents(c+i,f+u,p+l,E+_).normalize(),n[2].setComponents(c+a,f+h,p+m,E+A).normalize(),n[3].setComponents(c-a,f-h,p-m,E-A).normalize(),n[4].setComponents(c-o,f-d,p-g,E-w).normalize(),e===gn)n[5].setComponents(c+o,f+d,p+g,E+w).normalize();else if(e===Us)n[5].setComponents(o,d,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_s.x=s.normal.x>0?t.max.x:t.min.x,_s.y=s.normal.y>0?t.max.y:t.min.y,_s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ul extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ns=new V,Os=new V,ro=new ae,Hi=new Sa,vs=new qi,fr=new V,ao=new V;class Xc extends Te{constructor(t=new Ge,e=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,i=e.count;s<i;s++)Ns.fromBufferAttribute(e,s-1),Os.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ns.distanceTo(Os);t.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,i=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),vs.radius+=i,t.ray.intersectsSphere(vs)===!1)return;ro.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(ro);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const l=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=l,p=m-1;g<p;g+=u){const _=h.getX(g),A=h.getX(g+1),w=xs(this,t,Hi,c,_,A);w&&e.push(w)}if(this.isLineLoop){const g=h.getX(m-1),p=h.getX(l),_=xs(this,t,Hi,c,g,p);_&&e.push(_)}}else{const l=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=l,p=m-1;g<p;g+=u){const _=xs(this,t,Hi,c,g,g+1);_&&e.push(_)}if(this.isLineLoop){const g=xs(this,t,Hi,c,m-1,l);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function xs(r,t,e,n,s,i){const a=r.geometry.attributes.position;if(Ns.fromBufferAttribute(a,s),Os.fromBufferAttribute(a,i),e.distanceSqToSegment(Ns,Os,fr,ao)>n)return;fr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(fr);if(!(c<t.near||c>t.far))return{distance:c,point:ao.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}class fl extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oo=new ae,ha=new Sa,Ss=new qi,Ms=new V;class Yc extends Te{constructor(t=new Ge,e=new fl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,i=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Ss.radius+=i,t.ray.intersectsSphere(Ss)===!1)return;oo.copy(s).invert(),ha.copy(t.ray).applyMatrix4(oo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),l=Math.min(u.count,a.start+a.count);for(let m=f,g=l;m<g;m++){const p=u.getX(m);Ms.fromBufferAttribute(d,p),lo(Ms,p,c,s,t,e,this)}}else{const f=Math.max(0,a.start),l=Math.min(d.count,a.start+a.count);for(let m=f,g=l;m<g;m++)Ms.fromBufferAttribute(d,m),lo(Ms,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function lo(r,t,e,n,s,i,a){const o=ha.distanceSqToPoint(r);if(o<e){const c=new V;ha.closestPointToPoint(r,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;i.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ya extends Ee{constructor(t,e,n,s,i,a,o,c,u){super(t,e,n,s,i,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dl extends Ee{constructor(t,e,n,s,i,a,o,c,u,h=Si){if(h!==Si&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=$n),n===void 0&&h===bi&&(n=wi),super(null,s,i,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ea extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const i=[],a=[],o=[],c=[],u=new V,h=new Gt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const l=n+d/e*s;u.x=t*Math.cos(l),u.y=t*Math.sin(l),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)i.push(d,d+1,0);this.setIndex(i),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(o,3)),this.setAttribute("uv",new nn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xe extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const i=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,d=t/o,f=e/c,l=[],m=[],g=[],p=[];for(let _=0;_<h;_++){const A=_*f-a;for(let w=0;w<u;w++){const E=w*d-i;m.push(E,-A,0),g.push(0,0,1),p.push(w/o),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let A=0;A<o;A++){const w=A+u*_,E=A+u*(_+1),x=A+1+u*(_+1),M=A+1+u*_;l.push(w,E,M),l.push(E,x,M)}this.setIndex(l),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.widthSegments,t.heightSegments)}}class qc extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $c extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const co={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Zc{constructor(t,e,n){const s=this;let i=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,i===!1&&s.onStart!==void 0&&s.onStart(h,a,o),i=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(i=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const l=u[d],m=u[d+1];if(l.global&&(l.lastIndex=0),l.test(h))return m}return null}}}const Kc=new Zc;class Ta{constructor(t){this.manager=t!==void 0?t:Kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,i){n.load(t,s,e,i)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jc extends Ta{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const i=this,a=co.get(t);if(a!==void 0)return i.manager.itemStart(t),setTimeout(function(){e&&e(a),i.manager.itemEnd(t)},0),a;const o=ki("img");function c(){h(),co.add(t,this),e&&e(this),i.manager.itemEnd(t)}function u(d){h(),s&&s(d),i.manager.itemError(t),i.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(t),o.src=t,o}}class jc extends Ta{constructor(t){super(t)}load(t,e,n,s){const i=new Ee,a=new Jc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){i.image=o,i.needsUpdate=!0,e!==void 0&&e(i)},n,s),i}}class pl extends Ma{constructor(t=-1,e=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=u*this.view.offsetX,a=i+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qc extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function ho(r,t,e,n){const s=th(n);switch(e){case Xo:return r*t;case qo:return r*t;case $o:return r*t*2;case Zo:return r*t/s.components*s.byteLength;case _a:return r*t/s.components*s.byteLength;case Ko:return r*t*2/s.components*s.byteLength;case va:return r*t*2/s.components*s.byteLength;case Yo:return r*t*3/s.components*s.byteLength;case tn:return r*t*4/s.components*s.byteLength;case xa:return r*t*4/s.components*s.byteLength;case ws:case bs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Cs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Or:case zr:return Math.max(r,16)*Math.max(t,8)/4;case Nr:case Br:return Math.max(r,8)*Math.max(t,8)/2;case Hr:case Gr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case qr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case $r:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jr:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ta:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ea:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case na:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ps:case ia:case sa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Jo:case ra:return Math.ceil(r/4)*Math.ceil(t/4)*8;case aa:case oa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function th(r){switch(r){case vn:case Vo:return{byteLength:1,components:1};case Vi:case ko:case Wi:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case $n:case pa:case mn:return{byteLength:4,components:1};case Wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ml(){let r=null,t=!1,e=null,n=null;function s(i,a){e(i,a),n=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){r=i}}}function eh(r){const t=new WeakMap;function e(o,c){const u=o.array,h=o.usage,d=u.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,u,h),o.onUploadCallback();let l;if(u instanceof Float32Array)l=r.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?l=r.HALF_FLOAT:l=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)l=r.SHORT;else if(u instanceof Uint32Array)l=r.UNSIGNED_INT;else if(u instanceof Int32Array)l=r.INT;else if(u instanceof Int8Array)l=r.BYTE;else if(u instanceof Uint8Array)l=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)l=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:l,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,u){const h=c.array,d=c.updateRanges;if(r.bindBuffer(u,o),d.length===0)r.bufferSubData(u,0,h);else{d.sort((l,m)=>l.start-m.start);let f=0;for(let l=1;l<d.length;l++){const m=d[f],g=d[l];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let l=0,m=d.length;l<m;l++){const g=d[l];r.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:s,remove:i,update:a}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_u=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Su=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$u=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ku=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:sh,alphamap_pars_fragment:rh,alphatest_fragment:ah,alphatest_pars_fragment:oh,aomap_fragment:lh,aomap_pars_fragment:ch,batching_pars_vertex:hh,batching_vertex:uh,begin_vertex:fh,beginnormal_vertex:dh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Sh,color_fragment:Mh,color_pars_fragment:yh,color_pars_vertex:Eh,color_vertex:Th,common:Ah,cube_uv_reflection_fragment:wh,defaultnormal_vertex:bh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ch,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Ih,envmap_fragment:Uh,envmap_common_pars_fragment:Fh,envmap_pars_fragment:Nh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:$h,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Hh,fog_fragment:Gh,fog_pars_fragment:Vh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:Yh,lights_pars_begin:qh,lights_toon_fragment:Zh,lights_toon_pars_fragment:Kh,lights_phong_fragment:Jh,lights_phong_pars_fragment:jh,lights_physical_fragment:Qh,lights_physical_pars_fragment:tu,lights_fragment_begin:eu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:ou,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:hu,map_particle_pars_fragment:uu,metalnessmap_fragment:fu,metalnessmap_pars_fragment:du,morphinstance_vertex:pu,morphcolor_vertex:mu,morphnormal_vertex:gu,morphtarget_pars_vertex:_u,morphtarget_vertex:vu,normal_fragment_begin:xu,normal_fragment_maps:Su,normal_pars_fragment:Mu,normal_pars_vertex:yu,normal_vertex:Eu,normalmap_pars_fragment:Tu,clearcoat_normal_fragment_begin:Au,clearcoat_normal_fragment_maps:wu,clearcoat_pars_fragment:bu,iridescence_pars_fragment:Ru,opaque_fragment:Cu,packing:Pu,premultiplied_alpha_fragment:Lu,project_vertex:Du,dithering_fragment:Iu,dithering_pars_fragment:Uu,roughnessmap_fragment:Fu,roughnessmap_pars_fragment:Nu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:Bu,shadowmap_vertex:zu,shadowmask_pars_fragment:Hu,skinbase_vertex:Gu,skinning_pars_vertex:Vu,skinning_vertex:ku,skinnormal_vertex:Wu,specularmap_fragment:Xu,specularmap_pars_fragment:Yu,tonemapping_fragment:qu,tonemapping_pars_fragment:$u,transmission_fragment:Zu,transmission_pars_fragment:Ku,uv_pars_fragment:Ju,uv_pars_vertex:ju,uv_vertex:Qu,worldpos_vertex:tf,background_vert:ef,background_frag:nf,backgroundCube_vert:sf,backgroundCube_frag:rf,cube_vert:af,cube_frag:of,depth_vert:lf,depth_frag:cf,distanceRGBA_vert:hf,distanceRGBA_frag:uf,equirect_vert:ff,equirect_frag:df,linedashed_vert:pf,linedashed_frag:mf,meshbasic_vert:gf,meshbasic_frag:_f,meshlambert_vert:vf,meshlambert_frag:xf,meshmatcap_vert:Sf,meshmatcap_frag:Mf,meshnormal_vert:yf,meshnormal_frag:Ef,meshphong_vert:Tf,meshphong_frag:Af,meshphysical_vert:wf,meshphysical_frag:bf,meshtoon_vert:Rf,meshtoon_frag:Cf,points_vert:Pf,points_frag:Lf,shadow_vert:Df,shadow_frag:If,sprite_vert:Uf,sprite_frag:Ff},rt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},sn={basic:{uniforms:be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:be([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:be([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:be([rt.points,rt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:be([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:be([rt.common,rt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:be([rt.sprite,rt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:be([rt.common,rt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:be([rt.lights,rt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};sn.physical={uniforms:be([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ys={r:0,b:0,g:0},Bn=new xn,Nf=new ae;function Of(r,t,e,n,s,i,a){const o=new Wt(0);let c=i===!0?0:1,u,h,d=null,f=0,l=null;function m(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function g(w){let E=!1;const x=m(w);x===null?_(o,c):x&&x.isColor&&(_(x,1),E=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(w,E){const x=m(E);x&&(x.isCubeTexture||x.mapping===Bs)?(h===void 0&&(h=new re(new $i(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ci(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bn.copy(E.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(Bn)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,(d!==x||f!==x.version||l!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,l=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new re(new xe(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ci(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||l!==r.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,l=r.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null))}function _(w,E){w.getRGB(ys,al(r)),n.buffers.color.setClear(ys.r,ys.g,ys.b,E,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),c=E,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,_(o,c)},render:g,addToRenderList:p,dispose:A}}function Bf(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=f(null);let i=s,a=!1;function o(v,b,P,D,U){let F=!1;const z=d(D,P,b);i!==z&&(i=z,u(i.object)),F=l(v,D,P,U),F&&m(v,D,P,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,E(v,b,P,D),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return r.createVertexArray()}function u(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function d(v,b,P){const D=P.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let F=U[b.id];F===void 0&&(F={},U[b.id]=F);let z=F[D];return z===void 0&&(z=f(c()),F[D]=z),z}function f(v){const b=[],P=[],D=[];for(let U=0;U<e;U++)b[U]=0,P[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:P,attributeDivisors:D,object:v,attributes:{},index:null}}function l(v,b,P,D){const U=i.attributes,F=b.attributes;let z=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){const it=U[H];let ct=F[H];if(ct===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),it===void 0||it.attribute!==ct||ct&&it.data!==ct.data)return!0;z++}return i.attributesNum!==z||i.index!==D}function m(v,b,P,D){const U={},F=b.attributes;let z=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){let it=F[H];it===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));const ct={};ct.attribute=it,it&&it.data&&(ct.data=it.data),U[H]=ct,z++}i.attributes=U,i.attributesNum=z,i.index=D}function g(){const v=i.newAttributes;for(let b=0,P=v.length;b<P;b++)v[b]=0}function p(v){_(v,0)}function _(v,b){const P=i.newAttributes,D=i.enabledAttributes,U=i.attributeDivisors;P[v]=1,D[v]===0&&(r.enableVertexAttribArray(v),D[v]=1),U[v]!==b&&(r.vertexAttribDivisor(v,b),U[v]=b)}function A(){const v=i.newAttributes,b=i.enabledAttributes;for(let P=0,D=b.length;P<D;P++)b[P]!==v[P]&&(r.disableVertexAttribArray(P),b[P]=0)}function w(v,b,P,D,U,F,z){z===!0?r.vertexAttribIPointer(v,b,P,U,F):r.vertexAttribPointer(v,b,P,D,U,F)}function E(v,b,P,D){g();const U=D.attributes,F=P.getAttributes(),z=b.defaultAttributeValues;for(const G in F){const H=F[G];if(H.location>=0){let J=U[G];if(J===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const it=J.normalized,ct=J.itemSize,Mt=t.get(J);if(Mt===void 0)continue;const Lt=Mt.buffer,q=Mt.type,tt=Mt.bytesPerElement,Q=q===r.INT||q===r.UNSIGNED_INT||J.gpuType===pa;if(J.isInterleavedBufferAttribute){const st=J.data,dt=st.stride,Tt=J.offset;if(st.isInstancedInterleavedBuffer){for(let wt=0;wt<H.locationSize;wt++)_(H.location+wt,st.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let wt=0;wt<H.locationSize;wt++)p(H.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let wt=0;wt<H.locationSize;wt++)w(H.location+wt,ct/H.locationSize,q,it,dt*tt,(Tt+ct/H.locationSize*wt)*tt,Q)}else{if(J.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)_(H.location+st,J.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let st=0;st<H.locationSize;st++)p(H.location+st);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let st=0;st<H.locationSize;st++)w(H.location+st,ct/H.locationSize,q,it,ct*tt,ct/H.locationSize*st*tt,Q)}}else if(z!==void 0){const it=z[G];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(H.location,it);break;case 3:r.vertexAttrib3fv(H.location,it);break;case 4:r.vertexAttrib4fv(H.location,it);break;default:r.vertexAttrib1fv(H.location,it)}}}}A()}function x(){T();for(const v in n){const b=n[v];for(const P in b){const D=b[P];for(const U in D)h(D[U].object),delete D[U];delete b[P]}delete n[v]}}function M(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const P in b){const D=b[P];for(const U in D)h(D[U].object),delete D[U];delete b[P]}delete n[v.id]}function y(v){for(const b in n){const P=n[b];if(P[v.id]===void 0)continue;const D=P[v.id];for(const U in D)h(D[U].object),delete D[U];delete P[v.id]}}function T(){S(),a=!0,i!==s&&(i=s,u(i.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:S,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:y,initAttributes:g,enableAttribute:p,disableUnusedAttributes:A}}function zf(r,t,e){let n;function s(u){n=u}function i(u,h){r.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,d){d!==0&&(r.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function o(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let l=0;for(let m=0;m<d;m++)l+=h[m];e.update(l,n,1)}function c(u,h,d,f){if(d===0)return;const l=t.get("WEBGL_multi_draw");if(l===null)for(let m=0;m<u.length;m++)a(u[m],h[m],f[m]);else{l.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g]*f[g];e.update(m,n,1)}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Hf(r,t,e,n){let s;function i(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==tn&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const T=y===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==vn&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==mn&&!T)}function c(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:l,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:x,maxSamples:M}}function Gf(r){const t=this;let e=null,n=0,s=!1,i=!1;const a=new Hn,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const l=d.length!==0||f||n!==0||s;return s=f,n=d.length,l},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,l){const m=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,_=r.get(d);if(!s||m===null||m.length===0||i&&!p)i?h(null):u();else{const A=i?0:n,w=A*4;let E=_.clippingState||null;c.value=E,E=h(m,f,w,l);for(let x=0;x!==w;++x)E[x]=e[x];_.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,l,m){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=c.value,m!==!0||p===null){const _=l+g*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<_)&&(p=new Float32Array(_));for(let w=0,E=l;w!==g;++w,E+=4)a.copy(d[w]).applyMatrix4(A,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Vf(r){let t=new WeakMap;function e(a,o){return o===Dr?a.mapping=Ti:o===Ir&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Dr||o===Ir)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Hc(c.height);return u.fromEquirectangularTexture(r,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}const vi=4,uo=[.125,.215,.35,.446,.526,.582],kn=20,dr=new pl,fo=new Wt;let pr=null,mr=0,gr=0,_r=!1;const Gn=(1+Math.sqrt(5))/2,mi=1/Gn,po=[new V(-Gn,mi,0),new V(Gn,mi,0),new V(-mi,0,Gn),new V(mi,0,Gn),new V(0,Gn,-mi),new V(0,Gn,mi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class mo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(t,n,s,i),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pr,mr,gr),this._renderer.xr.enabled=_r,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Wi,format:tn,colorSpace:Ri,depthBuffer:!1},s=go(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kf(i)),this._blurMaterial=Wf(i,t,e)}return s}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,s){const o=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(fo),h.toneMapping=Cn,h.autoClear=!1;const l=new Ue({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),m=new re(new $i,l);let g=!1;const p=t.background;p?p.isColor&&(l.color.copy(p),t.background=null,g=!0):(l.color.copy(fo),g=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(o.up.set(0,c[_],0),o.lookAt(u[_],0,0)):A===1?(o.up.set(0,0,c[_]),o.lookAt(0,u[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,u[_]));const w=this._cubeSize;Es(s,A*w,_>2?w:0,w,w),h.setRenderTarget(s),g&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ti||t.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new re(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=t;const c=this._cubeSize;Es(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=po[(s-i-1)%po.length];this._blur(t,i-1,i,a,o)}e.autoClear=n}_blur(t,e,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",i),this._halfBlur(a,t,n,n,s,"longitudinal",i)}_halfBlur(t,e,n,s,i,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new re(this._lodPlanes[s],u),f=u.uniforms,l=this._sizeLods[n]-1,m=isFinite(i)?Math.PI/(2*l):2*Math.PI/(2*kn-1),g=i/m,p=isFinite(i)?1+Math.floor(h*g):kn;p>kn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const _=[];let A=0;for(let y=0;y<kn;++y){const T=y/g,S=Math.exp(-T*T/2);_.push(S),y===0?A+=S:y<p&&(A+=2*S)}for(let y=0;y<_.length;y++)_[y]=_[y]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=m,f.mipInt.value=w-n;const E=this._sizeLods[s],x=3*E*(s>w-vi?s-w+vi:0),M=4*(this._cubeSize-E);Es(e,x,M,3*E,2*E),c.setRenderTarget(e),c.render(d,dr)}}function kf(r){const t=[],e=[],n=[];let s=r;const i=r-vi+1+uo.length;for(let a=0;a<i;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>r-vi?c=uo[a-r+vi-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],l=6,m=6,g=3,p=2,_=1,A=new Float32Array(g*m*l),w=new Float32Array(p*m*l),E=new Float32Array(_*m*l);for(let M=0;M<l;M++){const y=M%3*2/3-1,T=M>2?0:-1,S=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];A.set(S,g*m*M),w.set(f,p*m*M);const v=[M,M,M,M,M,M];E.set(v,_*m*M)}const x=new Ge;x.setAttribute("position",new Fe(A,g)),x.setAttribute("uv",new Fe(w,p)),x.setAttribute("faceIndex",new Fe(E,_)),t.push(x),s>vi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function go(r,t,e){const n=new Zn(r,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(r,t,e,n,s){r.viewport.set(t,e,n,s),r.scissor.set(t,e,n,s)}function Wf(r,t,e){const n=new Float32Array(kn),s=new V(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function _o(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function vo(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xf(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Dr||c===Ir,h=c===Ti||c===Ai;if(u||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new mo(r)),d=u?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const l=o.image;return u&&l&&l.height>0||h&&l&&s(l)?(e===null&&(e=new mo(r)),d=u?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",i),d.texture):null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function i(o){const c=o.target;c.removeEventListener("dispose",i);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yf(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_i("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qf(r,t,e,n){const s={},i=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const l=i.get(f);l&&(t.remove(l),i.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const l in f)t.update(f[l],r.ARRAY_BUFFER)}function u(d){const f=[],l=d.index,m=d.attributes.position;let g=0;if(l!==null){const A=l.array;g=l.version;for(let w=0,E=A.length;w<E;w+=3){const x=A[w+0],M=A[w+1],y=A[w+2];f.push(x,M,M,y,y,x)}}else if(m!==void 0){const A=m.array;g=m.version;for(let w=0,E=A.length/3-1;w<E;w+=3){const x=w+0,M=w+1,y=w+2;f.push(x,M,M,y,y,x)}}else return;const p=new(Qo(f)?rl:sl)(f,1);p.version=g;const _=i.get(d);_&&t.remove(_),i.set(d,p)}function h(d){const f=i.get(d);if(f){const l=d.index;l!==null&&f.version<l.version&&u(d)}else u(d);return i.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function $f(r,t,e){let n;function s(f){n=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function c(f,l){r.drawElements(n,l,i,f*a),e.update(l,n,1)}function u(f,l,m){m!==0&&(r.drawElementsInstanced(n,l,i,f*a,m),e.update(l,n,m))}function h(f,l,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,f,0,m);let p=0;for(let _=0;_<m;_++)p+=l[_];e.update(p,n,1)}function d(f,l,m,g){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f.length;_++)u(f[_]/a,l[_],g[_]);else{p.multiDrawElementsInstancedWEBGL(n,l,0,i,f,0,g,0,m);let _=0;for(let A=0;A<m;A++)_+=l[A]*g[A];e.update(_,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Zf(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(i/3);break;case r.LINES:e.lines+=o*(i/2);break;case r.LINE_STRIP:e.lines+=o*(i-1);break;case r.LINE_LOOP:e.lines+=o*i;break;case r.POINTS:e.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kf(r,t,e){const n=new WeakMap,s=new he;function i(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let v=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var l=v;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),g===!0&&(E=2),p===!0&&(E=3);let x=o.attributes.position.count*E,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const y=new Float32Array(x*M*4*d),T=new el(y,x,M,d);T.type=mn,T.needsUpdate=!0;const S=E*4;for(let b=0;b<d;b++){const P=_[b],D=A[b],U=w[b],F=x*M*4*b;for(let z=0;z<P.count;z++){const G=z*S;m===!0&&(s.fromBufferAttribute(P,z),y[F+G+0]=s.x,y[F+G+1]=s.y,y[F+G+2]=s.z,y[F+G+3]=0),g===!0&&(s.fromBufferAttribute(D,z),y[F+G+4]=s.x,y[F+G+5]=s.y,y[F+G+6]=s.z,y[F+G+7]=0),p===!0&&(s.fromBufferAttribute(U,z),y[F+G+8]=s.x,y[F+G+9]=s.y,y[F+G+10]=s.z,y[F+G+11]=U.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Gt(x,M)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<u.length;p++)m+=u[p];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",u)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:i}}function Jf(r,t,e,n){let s=new WeakMap;function i(c){const u=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:i,dispose:a}}const gl=new Ee,xo=new dl(1,1),_l=new el,vl=new Tc,xl=new ol,So=[],Mo=[],yo=new Float32Array(16),Eo=new Float32Array(9),To=new Float32Array(4);function Li(r,t,e){const n=r[0];if(n<=0||n>0)return r;const s=t*e;let i=So[s];if(i===void 0&&(i=new Float32Array(s),So[s]=i),t!==0){n.toArray(i,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(i,o)}return i}function me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function zs(r,t){let e=Mo[t];e===void 0&&(e=new Int32Array(t),Mo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function jf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Qf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function td(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function ed(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function nd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;To.set(n),r.uniformMatrix2fv(this.addr,!1,To),ge(e,n)}}function id(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Eo.set(n),r.uniformMatrix3fv(this.addr,!1,Eo),ge(e,n)}}function sd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;yo.set(n),r.uniformMatrix4fv(this.addr,!1,yo),ge(e,n)}}function rd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ad(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function od(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function ld(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function cd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function ud(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function fd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function dd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(xo.compareFunction=jo,i=xo):i=gl,e.setTexture2D(t||i,s)}function pd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vl,s)}function md(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xl,s)}function gd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_l,s)}function _d(r){switch(r){case 5126:return jf;case 35664:return Qf;case 35665:return td;case 35666:return ed;case 35674:return nd;case 35675:return id;case 35676:return sd;case 5124:case 35670:return rd;case 35667:case 35671:return ad;case 35668:case 35672:return od;case 35669:case 35673:return ld;case 5125:return cd;case 36294:return hd;case 36295:return ud;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return md;case 36289:case 36303:case 36311:case 36292:return gd}}function vd(r,t){r.uniform1fv(this.addr,t)}function xd(r,t){const e=Li(t,this.size,2);r.uniform2fv(this.addr,e)}function Sd(r,t){const e=Li(t,this.size,3);r.uniform3fv(this.addr,e)}function Md(r,t){const e=Li(t,this.size,4);r.uniform4fv(this.addr,e)}function yd(r,t){const e=Li(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ed(r,t){const e=Li(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Td(r,t){const e=Li(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ad(r,t){r.uniform1iv(this.addr,t)}function wd(r,t){r.uniform2iv(this.addr,t)}function bd(r,t){r.uniform3iv(this.addr,t)}function Rd(r,t){r.uniform4iv(this.addr,t)}function Cd(r,t){r.uniform1uiv(this.addr,t)}function Pd(r,t){r.uniform2uiv(this.addr,t)}function Ld(r,t){r.uniform3uiv(this.addr,t)}function Dd(r,t){r.uniform4uiv(this.addr,t)}function Id(r,t,e){const n=this.cache,s=t.length,i=zs(e,s);me(n,i)||(r.uniform1iv(this.addr,i),ge(n,i));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||gl,i[a])}function Ud(r,t,e){const n=this.cache,s=t.length,i=zs(e,s);me(n,i)||(r.uniform1iv(this.addr,i),ge(n,i));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vl,i[a])}function Fd(r,t,e){const n=this.cache,s=t.length,i=zs(e,s);me(n,i)||(r.uniform1iv(this.addr,i),ge(n,i));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xl,i[a])}function Nd(r,t,e){const n=this.cache,s=t.length,i=zs(e,s);me(n,i)||(r.uniform1iv(this.addr,i),ge(n,i));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_l,i[a])}function Od(r){switch(r){case 5126:return vd;case 35664:return xd;case 35665:return Sd;case 35666:return Md;case 35674:return yd;case 35675:return Ed;case 35676:return Td;case 5124:case 35670:return Ad;case 35667:case 35671:return wd;case 35668:case 35672:return bd;case 35669:case 35673:return Rd;case 5125:return Cd;case 36294:return Pd;case 36295:return Ld;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Nd}}class Bd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_d(e.type)}}class zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Od(e.type)}}class Hd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const o=s[i];o.setValue(t,e[o.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function Ao(r,t){r.seq.push(t),r.map[t.id]=t}function Gd(r,t,e){const n=r.name,s=n.length;for(vr.lastIndex=0;;){const i=vr.exec(n),a=vr.lastIndex;let o=i[1];const c=i[2]==="]",u=i[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){Ao(e,u===void 0?new Bd(o,r,t):new zd(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Hd(o),Ao(e,d)),e=d}}}class Ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=t.getActiveUniform(e,s),a=t.getUniformLocation(e,i.name);Gd(i,a,this)}}setValue(t,e,n,s){const i=this.map[e];i!==void 0&&i.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let i=0,a=e.length;i!==a;++i){const o=e[i],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,i=t.length;s!==i;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function wo(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Vd=37297;let kd=0;function Wd(r,t){const e=r.split(`
`),n=[],s=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let a=s;a<i;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const bo=new It;function Xd(r){qt._getMatrix(bo,qt.workingColorSpace,r);const t=`mat3( ${bo.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case Is:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ro(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=r.getShaderInfoLog(t).trim();if(n&&s==="")return"";const i=/ERROR: 0:(\d+)/.exec(s);if(i){const a=parseInt(i[1]);return e.toUpperCase()+`

`+s+`

`+Wd(r.getShaderSource(t),a)}else return s}function Yd(r,t){const e=Xd(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qd(r,t){let e;switch(t){case Zl:e="Linear";break;case Kl:e="Reinhard";break;case Jl:e="Cineon";break;case jl:e="ACESFilmic";break;case tc:e="AgX";break;case ec:e="Neutral";break;case Ql:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new V;function $d(){qt.getLuminanceCoefficients(Ts);const r=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zd(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function Kd(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jd(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(t,s),a=i.name;let o=1;i.type===r.FLOAT_MAT2&&(o=2),i.type===r.FLOAT_MAT3&&(o=3),i.type===r.FLOAT_MAT4&&(o=4),e[a]={type:i.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Gi(r){return r!==""}function Co(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Po(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(r){return r.replace(jd,tp)}const Qd=new Map;function tp(r,t){let e=Ft[t];if(e===void 0){const n=Qd.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ua(e)}const ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(r){return r.replace(ep,np)}function np(r,t,e,n){let s="";for(let i=parseInt(t);i<parseInt(e);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function Do(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ip(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zo?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function sp(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ti:case Ai:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function ap(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ho:t="ENVMAP_BLENDING_MULTIPLY";break;case ql:t="ENVMAP_BLENDING_MIX";break;case $l:t="ENVMAP_BLENDING_ADD";break}return t}function op(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lp(r,t,e,n){const s=r.getContext(),i=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ip(e),u=sp(e),h=rp(e),d=ap(e),f=op(e),l=Zd(e),m=Kd(i),g=s.createProgram();let p,_,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gi).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gi).join(`
`),_.length>0&&(_+=`
`)):(p=[Do(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),_=[Do(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Cn?qd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Yd("linearToOutputTexel",e.outputColorSpace),$d(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),a=ua(a),a=Co(a,e),a=Po(a,e),o=ua(o),o=Co(o,e),o=Po(o,e),a=Lo(a),o=Lo(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=A+p+a,E=A+_+o,x=wo(s,s.VERTEX_SHADER,w),M=wo(s,s.FRAGMENT_SHADER,E);s.attachShader(g,x),s.attachShader(g,M),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function y(b){if(r.debug.checkShaderErrors){const P=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(x).trim(),U=s.getShaderInfoLog(M).trim();let F=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,x,M);else{const G=Ro(s,x,"vertex"),H=Ro(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+G+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||U==="")&&(z=!1);z&&(b.diagnostics={runnable:F,programLog:P,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:_}})}s.deleteShader(x),s.deleteShader(M),T=new Ls(s,g),S=Jd(s,g)}let T;this.getUniforms=function(){return T===void 0&&y(this),T};let S;this.getAttributes=function(){return S===void 0&&y(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Vd)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=M,this}let cp=0;class hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new up(t),e.set(t,n)),n}}class up{constructor(t){this.id=cp++,this.code=t,this.usedTimes=0}}function fp(r,t,e,n,s,i,a){const o=new nl,c=new hp,u=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let l=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return u.add(S),S===0?"uv":`uv${S}`}function p(S,v,b,P,D){const U=P.fog,F=D.geometry,z=S.isMeshStandardMaterial?P.environment:null,G=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),H=G&&G.mapping===Bs?G.image.height:null,J=m[S.type];S.precision!==null&&(l=s.getMaxPrecision(S.precision),l!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",l,"instead."));const it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ct=it!==void 0?it.length:0;let Mt=0;F.morphAttributes.position!==void 0&&(Mt=1),F.morphAttributes.normal!==void 0&&(Mt=2),F.morphAttributes.color!==void 0&&(Mt=3);let Lt,q,tt,Q;if(J){const Kt=sn[J];Lt=Kt.vertexShader,q=Kt.fragmentShader}else Lt=S.vertexShader,q=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),Q=c.getFragmentShaderID(S);const st=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),Tt=D.isInstancedMesh===!0,wt=D.isBatchedMesh===!0,Vt=!!S.map,bt=!!S.matcap,se=!!G,I=!!S.aoMap,Re=!!S.lightMap,Ot=!!S.bumpMap,Bt=!!S.normalMap,xt=!!S.displacementMap,zt=!!S.emissiveMap,St=!!S.metalnessMap,L=!!S.roughnessMap,R=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,vt=S.transmission>0,at=R&&!!S.anisotropyMap,ut=k&&!!S.clearcoatMap,Nt=k&&!!S.clearcoatNormalMap,nt=k&&!!S.clearcoatRoughnessMap,mt=j&&!!S.iridescenceMap,At=j&&!!S.iridescenceThicknessMap,Rt=$&&!!S.sheenColorMap,gt=$&&!!S.sheenRoughnessMap,kt=!!S.specularMap,Ut=!!S.specularColorMap,ne=!!S.specularIntensityMap,N=vt&&!!S.transmissionMap,ot=vt&&!!S.thicknessMap,Y=!!S.gradientMap,K=!!S.alphaMap,ft=S.alphaTest>0,ht=!!S.alphaHash,Dt=!!S.extensions;let oe=Cn;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(oe=r.toneMapping);const Se={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:Lt,fragmentShader:q,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:l,batching:wt,batchingColor:wt&&D._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&D.instanceColor!==null,instancingMorph:Tt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ri,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:bt,envMap:se,envMapMode:se&&G.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Re,bumpMap:Ot,normalMap:Bt,displacementMap:f&&xt,emissiveMap:zt,normalMapObjectSpace:Bt&&S.normalMapType===ac,normalMapTangentSpace:Bt&&S.normalMapType===rc,metalnessMap:St,roughnessMap:L,anisotropy:R,anisotropyMap:at,clearcoat:k,clearcoatMap:ut,clearcoatNormalMap:Nt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:j,iridescenceMap:mt,iridescenceThicknessMap:At,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:gt,specularMap:kt,specularColorMap:Ut,specularIntensityMap:ne,transmission:vt,transmissionMap:N,thicknessMap:ot,gradientMap:Y,opaque:S.transparent===!1&&S.blending===xi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ht,combine:S.combine,mapUv:Vt&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:Re&&g(S.lightMap.channel),bumpMapUv:Ot&&g(S.bumpMap.channel),normalMapUv:Bt&&g(S.normalMap.channel),displacementMapUv:xt&&g(S.displacementMap.channel),emissiveMapUv:zt&&g(S.emissiveMap.channel),metalnessMapUv:St&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:at&&g(S.anisotropyMap.channel),clearcoatMapUv:ut&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(S.sheenRoughnessMap.channel),specularMapUv:kt&&g(S.specularMap.channel),specularColorMapUv:Ut&&g(S.specularColorMap.channel),specularIntensityMapUv:ne&&g(S.specularIntensityMap.channel),transmissionMapUv:N&&g(S.transmissionMap.channel),thicknessMapUv:ot&&g(S.thicknessMap.channel),alphaMapUv:K&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Bt||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Vt||K),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:dt,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&b.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:zt&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===Ie,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=u.has(1),Se.vertexUv2s=u.has(2),Se.vertexUv3s=u.has(3),u.clear(),Se}function _(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)v.push(b),v.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(A(v,S),w(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function A(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function w(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const v=m[S.type];let b;if(v){const P=sn[v];b=Nc.clone(P.uniforms)}else b=S.uniforms;return b}function x(S,v){let b;for(let P=0,D=h.length;P<D;P++){const U=h[P];if(U.cacheKey===v){b=U,++b.usedTimes;break}}return b===void 0&&(b=new lp(r,v,S,i),h.push(b)),b}function M(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function y(S){c.remove(S)}function T(){c.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:E,acquireProgram:x,releaseProgram:M,releaseShaderCache:y,programs:h,dispose:T}}function dp(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function s(a,o,c){r.get(a)[o]=c}function i(){r=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:i}}function pp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Io(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uo(){const r=[];let t=0;const e=[],n=[],s=[];function i(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,l,m,g,p){let _=r[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:l,groupOrder:m,renderOrder:d.renderOrder,z:g,group:p},r[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=l,_.groupOrder=m,_.renderOrder=d.renderOrder,_.z=g,_.group=p),t++,_}function o(d,f,l,m,g,p){const _=a(d,f,l,m,g,p);l.transmission>0?n.push(_):l.transparent===!0?s.push(_):e.push(_)}function c(d,f,l,m,g,p){const _=a(d,f,l,m,g,p);l.transmission>0?n.unshift(_):l.transparent===!0?s.unshift(_):e.unshift(_)}function u(d,f){e.length>1&&e.sort(d||pp),n.length>1&&n.sort(f||Io),s.length>1&&s.sort(f||Io)}function h(){for(let d=t,f=r.length;d<f;d++){const l=r[d];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:e,transmissive:n,transparent:s,init:i,push:o,unshift:c,finish:h,sort:u}}function mp(){let r=new WeakMap;function t(n,s){const i=r.get(n);let a;return i===void 0?(a=new Uo,r.set(n,[a])):s>=i.length?(a=new Uo,i.push(a)):a=i[s],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function gp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Wt};break;case"SpotLight":e={position:new V,direction:new V,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=e,e}}}function _p(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let vp=0;function xp(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Sp(r){const t=new gp,e=_p(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new V);const s=new V,i=new ae,a=new ae;function o(u){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let l=0,m=0,g=0,p=0,_=0,A=0,w=0,E=0,x=0,M=0,y=0;u.sort(xp);for(let S=0,v=u.length;S<v;S++){const b=u[S],P=b.color,D=b.intensity,U=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=P.r*D,d+=P.g*D,f+=P.b*D;else if(b.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(b.sh.coefficients[z],D);y++}else if(b.isDirectionalLight){const z=t.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const G=b.shadow,H=e.get(b);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.directionalShadow[l]=H,n.directionalShadowMap[l]=F,n.directionalShadowMatrix[l]=b.shadow.matrix,A++}n.directional[l]=z,l++}else if(b.isSpotLight){const z=t.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(P).multiplyScalar(D),z.distance=U,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,n.spot[g]=z;const G=b.shadow;if(b.map&&(n.spotLightMap[x]=b.map,x++,G.updateMatrices(b),b.castShadow&&M++),n.spotLightMatrix[g]=G.matrix,b.castShadow){const H=e.get(b);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=F,E++}g++}else if(b.isRectAreaLight){const z=t.get(b);z.color.copy(P).multiplyScalar(D),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=z,p++}else if(b.isPointLight){const z=t.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){const G=b.shadow,H=e.get(b);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=b.shadow.matrix,w++}n.point[m]=z,m++}else if(b.isHemisphereLight){const z=t.get(b);z.skyColor.copy(b.color).multiplyScalar(D),z.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[_]=z,_++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==l||T.pointLength!==m||T.spotLength!==g||T.rectAreaLength!==p||T.hemiLength!==_||T.numDirectionalShadows!==A||T.numPointShadows!==w||T.numSpotShadows!==E||T.numSpotMaps!==x||T.numLightProbes!==y)&&(n.directional.length=l,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=y,T.directionalLength=l,T.pointLength=m,T.spotLength=g,T.rectAreaLength=p,T.hemiLength=_,T.numDirectionalShadows=A,T.numPointShadows=w,T.numSpotShadows=E,T.numSpotMaps=x,T.numLightProbes=y,n.version=vp++)}function c(u,h){let d=0,f=0,l=0,m=0,g=0;const p=h.matrixWorldInverse;for(let _=0,A=u.length;_<A;_++){const w=u[_];if(w.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(w.isSpotLight){const E=n.spot[l];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),l++}else if(w.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),a.identity(),i.copy(w.matrixWorld),i.premultiply(p),a.extractRotation(i),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Fo(r){const t=new Sp(r),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function i(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:c,pushLight:i,pushShadow:a}}function Mp(r){let t=new WeakMap;function e(s,i=0){const a=t.get(s);let o;return a===void 0?(o=new Fo(r),t.set(s,[o])):i>=a.length?(o=new Fo(r),a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ep=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tp(r,t,e){let n=new hl;const s=new Gt,i=new Gt,a=new he,o=new qc({depthPacking:sc}),c=new $c,u={},h=e.maxTextureSize,d={[Ln]:Ie,[Ie]:Ln,[pn]:pn},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:yp,fragmentShader:Ep}),l=f.clone();l.defines.HORIZONTAL_PASS=1;const m=new Ge;m.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new re(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let _=this.type;this.render=function(M,y,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Rn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=_!==dn&&this.type===dn,U=_===dn&&this.type!==dn;for(let F=0,z=M.length;F<z;F++){const G=M[F],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),i.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/J.x),s.x=i.x*J.x,H.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/J.y),s.y=i.y*J.y,H.mapSize.y=i.y)),H.map===null||D===!0||U===!0){const ct=this.type!==dn?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new Zn(s.x,s.y,ct),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const it=H.getViewportCount();for(let ct=0;ct<it;ct++){const Mt=H.getViewport(ct);a.set(i.x*Mt.x,i.y*Mt.y,i.x*Mt.z,i.y*Mt.w),P.viewport(a),H.updateMatrices(G,ct),n=H.getFrustum(),E(y,T,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===dn&&A(H,T),H.needsUpdate=!1}_=this.type,p.needsUpdate=!1,r.setRenderTarget(S,v,b)};function A(M,y){const T=t.update(g);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,l.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,l.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zn(s.x,s.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(y,null,T,f,g,null),l.uniforms.shadow_pass.value=M.mapPass.texture,l.uniforms.resolution.value=M.mapSize,l.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(y,null,T,l,g,null)}function w(M,y,T,S){let v=null;const b=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)v=b;else if(v=T.isPointLight===!0?c:o,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const P=v.uuid,D=y.uuid;let U=u[P];U===void 0&&(U={},u[P]=U);let F=U[D];F===void 0&&(F=v.clone(),U[D]=F,y.addEventListener("dispose",x)),v=F}if(v.visible=y.visible,v.wireframe=y.wireframe,S===dn?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:d[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=r.properties.get(v);P.light=T}return v}function E(M,y,T,S,v){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===dn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const D=t.update(M),U=M.material;if(Array.isArray(U)){const F=D.groups;for(let z=0,G=F.length;z<G;z++){const H=F[z],J=U[H.materialIndex];if(J&&J.visible){const it=w(M,J,S,v);M.onBeforeShadow(r,M,y,T,D,it,H),r.renderBufferDirect(T,null,D,it,M,H),M.onAfterShadow(r,M,y,T,D,it,H)}}}else if(U.visible){const F=w(M,U,S,v);M.onBeforeShadow(r,M,y,T,D,F,null),r.renderBufferDirect(T,null,D,F,M,null),M.onAfterShadow(r,M,y,T,D,F,null)}}const P=M.children;for(let D=0,U=P.length;D<U;D++)E(P[D],y,T,S,v)}function x(M){M.target.removeEventListener("dispose",x);for(const T in u){const S=u[T],v=M.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Ap={[Ar]:wr,[br]:Pr,[Rr]:Lr,[Ei]:Cr,[wr]:Ar,[Pr]:br,[Lr]:Rr,[Cr]:Ei};function wp(r,t){function e(){let N=!1;const ot=new he;let Y=null;const K=new he(0,0,0,0);return{setMask:function(ft){Y!==ft&&!N&&(r.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){N=ft},setClear:function(ft,ht,Dt,oe,Se){Se===!0&&(ft*=oe,ht*=oe,Dt*=oe),ot.set(ft,ht,Dt,oe),K.equals(ot)===!1&&(r.clearColor(ft,ht,Dt,oe),K.copy(ot))},reset:function(){N=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,Y=null,K=null,ft=null;return{setReversed:function(ht){if(ot!==ht){const Dt=t.get("EXT_clip_control");ot?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const oe=ft;ft=null,this.setClear(oe)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?st(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!N&&(r.depthMask(ht),Y=ht)},setFunc:function(ht){if(ot&&(ht=Ap[ht]),K!==ht){switch(ht){case Ar:r.depthFunc(r.NEVER);break;case wr:r.depthFunc(r.ALWAYS);break;case br:r.depthFunc(r.LESS);break;case Ei:r.depthFunc(r.LEQUAL);break;case Rr:r.depthFunc(r.EQUAL);break;case Cr:r.depthFunc(r.GEQUAL);break;case Pr:r.depthFunc(r.GREATER);break;case Lr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ht}},setLocked:function(ht){N=ht},setClear:function(ht){ft!==ht&&(ot&&(ht=1-ht),r.clearDepth(ht),ft=ht)},reset:function(){N=!1,Y=null,K=null,ft=null,ot=!1}}}function s(){let N=!1,ot=null,Y=null,K=null,ft=null,ht=null,Dt=null,oe=null,Se=null;return{setTest:function(Kt){N||(Kt?st(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(Kt){ot!==Kt&&!N&&(r.stencilMask(Kt),ot=Kt)},setFunc:function(Kt,Ye,an){(Y!==Kt||K!==Ye||ft!==an)&&(r.stencilFunc(Kt,Ye,an),Y=Kt,K=Ye,ft=an)},setOp:function(Kt,Ye,an){(ht!==Kt||Dt!==Ye||oe!==an)&&(r.stencilOp(Kt,Ye,an),ht=Kt,Dt=Ye,oe=an)},setLocked:function(Kt){N=Kt},setClear:function(Kt){Se!==Kt&&(r.clearStencil(Kt),Se=Kt)},reset:function(){N=!1,ot=null,Y=null,K=null,ft=null,ht=null,Dt=null,oe=null,Se=null}}}const i=new e,a=new n,o=new s,c=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,l=[],m=null,g=!1,p=null,_=null,A=null,w=null,E=null,x=null,M=null,y=new Wt(0,0,0),T=0,S=!1,v=null,b=null,P=null,D=null,U=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=G>=2);let J=null,it={};const ct=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),Lt=new he().fromArray(ct),q=new he().fromArray(Mt);function tt(N,ot,Y,K){const ft=new Uint8Array(4),ht=r.createTexture();r.bindTexture(N,ht),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<Y;Dt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ot,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(ot+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return ht}const Q={};Q[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(r.DEPTH_TEST),a.setFunc(Ei),Ot(!1),Bt(Ia),st(r.CULL_FACE),I(Rn);function st(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function dt(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Tt(N,ot){return d[N]!==ot?(r.bindFramebuffer(N,ot),d[N]=ot,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ot),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ot),!0):!1}function wt(N,ot){let Y=l,K=!1;if(N){Y=f.get(ot),Y===void 0&&(Y=[],f.set(ot,Y));const ft=N.textures;if(Y.length!==ft.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Dt=ft.length;ht<Dt;ht++)Y[ht]=r.COLOR_ATTACHMENT0+ht;Y.length=ft.length,K=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,K=!0);K&&r.drawBuffers(Y)}function Vt(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const bt={[Vn]:r.FUNC_ADD,[Pl]:r.FUNC_SUBTRACT,[Ll]:r.FUNC_REVERSE_SUBTRACT};bt[Dl]=r.MIN,bt[Il]=r.MAX;const se={[Ul]:r.ZERO,[Fl]:r.ONE,[Nl]:r.SRC_COLOR,[Er]:r.SRC_ALPHA,[Vl]:r.SRC_ALPHA_SATURATE,[Hl]:r.DST_COLOR,[Bl]:r.DST_ALPHA,[Ol]:r.ONE_MINUS_SRC_COLOR,[Tr]:r.ONE_MINUS_SRC_ALPHA,[Gl]:r.ONE_MINUS_DST_COLOR,[zl]:r.ONE_MINUS_DST_ALPHA,[kl]:r.CONSTANT_COLOR,[Wl]:r.ONE_MINUS_CONSTANT_COLOR,[Xl]:r.CONSTANT_ALPHA,[Yl]:r.ONE_MINUS_CONSTANT_ALPHA};function I(N,ot,Y,K,ft,ht,Dt,oe,Se,Kt){if(N===Rn){g===!0&&(dt(r.BLEND),g=!1);return}if(g===!1&&(st(r.BLEND),g=!0),N!==Cl){if(N!==p||Kt!==S){if((_!==Vn||E!==Vn)&&(r.blendEquation(r.FUNC_ADD),_=Vn,E=Vn),Kt)switch(N){case xi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ua:r.blendFunc(r.ONE,r.ONE);break;case Fa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Na:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ua:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Na:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,w=null,x=null,M=null,y.set(0,0,0),T=0,p=N,S=Kt}return}ft=ft||ot,ht=ht||Y,Dt=Dt||K,(ot!==_||ft!==E)&&(r.blendEquationSeparate(bt[ot],bt[ft]),_=ot,E=ft),(Y!==A||K!==w||ht!==x||Dt!==M)&&(r.blendFuncSeparate(se[Y],se[K],se[ht],se[Dt]),A=Y,w=K,x=ht,M=Dt),(oe.equals(y)===!1||Se!==T)&&(r.blendColor(oe.r,oe.g,oe.b,Se),y.copy(oe),T=Se),p=N,S=!1}function Re(N,ot){N.side===pn?dt(r.CULL_FACE):st(r.CULL_FACE);let Y=N.side===Ie;ot&&(Y=!Y),Ot(Y),N.blending===xi&&N.transparent===!1?I(Rn):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),i.setMask(N.colorWrite);const K=N.stencilWrite;o.setTest(K),K&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(N){v!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),v=N)}function Bt(N){N!==wl?(st(r.CULL_FACE),N!==b&&(N===Ia?r.cullFace(r.BACK):N===bl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),b=N}function xt(N){N!==P&&(z&&r.lineWidth(N),P=N)}function zt(N,ot,Y){N?(st(r.POLYGON_OFFSET_FILL),(D!==ot||U!==Y)&&(r.polygonOffset(ot,Y),D=ot,U=Y)):dt(r.POLYGON_OFFSET_FILL)}function St(N){N?st(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function L(N){N===void 0&&(N=r.TEXTURE0+F-1),J!==N&&(r.activeTexture(N),J=N)}function R(N,ot,Y){Y===void 0&&(J===null?Y=r.TEXTURE0+F-1:Y=J);let K=it[Y];K===void 0&&(K={type:void 0,texture:void 0},it[Y]=K),(K.type!==N||K.texture!==ot)&&(J!==Y&&(r.activeTexture(Y),J=Y),r.bindTexture(N,ot||Q[N]),K.type=N,K.texture=ot)}function k(){const N=it[J];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(N){Lt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function gt(N){q.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function kt(N,ot){let Y=u.get(ot);Y===void 0&&(Y=new WeakMap,u.set(ot,Y));let K=Y.get(N);K===void 0&&(K=r.getUniformBlockIndex(ot,N.name),Y.set(N,K))}function Ut(N,ot){const K=u.get(ot).get(N);c.get(ot)!==K&&(r.uniformBlockBinding(ot,K,N.__bindingPointIndex),c.set(ot,K))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,it={},d={},f=new WeakMap,l=[],m=null,g=!1,p=null,_=null,A=null,w=null,E=null,x=null,M=null,y=new Wt(0,0,0),T=0,S=!1,v=null,b=null,P=null,D=null,U=null,Lt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:st,disable:dt,bindFramebuffer:Tt,drawBuffers:wt,useProgram:Vt,setBlending:I,setMaterial:Re,setFlipSided:Ot,setCullFace:Bt,setLineWidth:xt,setPolygonOffset:zt,setScissorTest:St,activeTexture:L,bindTexture:R,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:mt,texImage3D:At,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Nt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Rt,viewport:gt,reset:ne}}function bp(r,t,e,n,s,i,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Gt,h=new WeakMap;let d;const f=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,R){return l?new OffscreenCanvas(L,R):ki("canvas")}function g(L,R,k){let Z=1;const j=St(L);if((j.width>k||j.height>k)&&(Z=k/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(Z*j.width),vt=Math.floor(Z*j.height);d===void 0&&(d=m($,vt));const at=R?m($,vt):d;return at.width=$,at.height=vt,at.getContext("2d").drawImage(L,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+vt+")."),at}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function p(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function A(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(L,R,k,Z,j=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=R;if(R===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8)),R===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),R===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8)),R===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),R===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),R===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),R===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),R===r.RGBA){const vt=j?Is:qt.getTransfer(Z);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=vt===te?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function E(L,R){let k;return L?R===null||R===$n||R===wi?k=r.DEPTH24_STENCIL8:R===mn?k=r.DEPTH32F_STENCIL8:R===Vi&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===$n||R===wi?k=r.DEPTH_COMPONENT24:R===mn?k=r.DEPTH_COMPONENT32F:R===Vi&&(k=r.DEPTH_COMPONENT16),k}function x(L,R){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==He?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function M(L){const R=L.target;R.removeEventListener("dispose",M),T(R),R.isVideoTexture&&h.delete(R)}function y(L){const R=L.target;R.removeEventListener("dispose",y),v(R)}function T(L){const R=n.get(L);if(R.__webglInit===void 0)return;const k=L.source,Z=f.get(k);if(Z){const j=Z[R.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(L),Object.keys(Z).length===0&&f.delete(k)}n.remove(L)}function S(L){const R=n.get(L);r.deleteTexture(R.__webglTexture);const k=L.source,Z=f.get(k);delete Z[R.__cacheKey],a.memory.textures--}function v(L){const R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(R.__webglFramebuffer[Z]))for(let j=0;j<R.__webglFramebuffer[Z].length;j++)r.deleteFramebuffer(R.__webglFramebuffer[Z][j]);else r.deleteFramebuffer(R.__webglFramebuffer[Z]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[Z])}else{if(Array.isArray(R.__webglFramebuffer))for(let Z=0;Z<R.__webglFramebuffer.length;Z++)r.deleteFramebuffer(R.__webglFramebuffer[Z]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const k=L.textures;for(let Z=0,j=k.length;Z<j;Z++){const $=n.get(k[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[Z])}n.remove(L)}let b=0;function P(){b=0}function D(){const L=b;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),b+=1,L}function U(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function F(L,R){const k=n.get(L);if(L.isVideoTexture&&xt(L),L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,L,R);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+R)}function z(L,R){const k=n.get(L);if(L.version>0&&k.__version!==L.version){q(k,L,R);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+R)}function G(L,R){const k=n.get(L);if(L.version>0&&k.__version!==L.version){q(k,L,R);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+R)}function H(L,R){const k=n.get(L);if(L.version>0&&k.__version!==L.version){tt(k,L,R);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+R)}const J={[Ur]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[Fr]:r.MIRRORED_REPEAT},it={[en]:r.NEAREST,[nc]:r.NEAREST_MIPMAP_NEAREST,[Ji]:r.NEAREST_MIPMAP_LINEAR,[He]:r.LINEAR,[Vs]:r.LINEAR_MIPMAP_NEAREST,[Xn]:r.LINEAR_MIPMAP_LINEAR},ct={[oc]:r.NEVER,[dc]:r.ALWAYS,[lc]:r.LESS,[jo]:r.LEQUAL,[cc]:r.EQUAL,[fc]:r.GEQUAL,[hc]:r.GREATER,[uc]:r.NOTEQUAL};function Mt(L,R){if(R.type===mn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===He||R.magFilter===Vs||R.magFilter===Ji||R.magFilter===Xn||R.minFilter===He||R.minFilter===Vs||R.minFilter===Ji||R.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,J[R.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,J[R.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,J[R.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,it[R.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,it[R.minFilter]),R.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,ct[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===en||R.minFilter!==Ji&&R.minFilter!==Xn||R.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Lt(L,R){let k=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",M));const Z=R.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const $=U(R);if($!==L.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[$].usedTimes++;const vt=j[L.__cacheKey];vt!==void 0&&(j[L.__cacheKey].usedTimes--,vt.usedTimes===0&&S(R)),L.__cacheKey=$,L.__webglTexture=j[$].texture}return k}function q(L,R,k){let Z=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=r.TEXTURE_3D);const j=Lt(L,R),$=R.source;e.bindTexture(Z,L.__webglTexture,r.TEXTURE0+k);const vt=n.get($);if($.version!==vt.__version||j===!0){e.activeTexture(r.TEXTURE0+k);const at=qt.getPrimaries(qt.workingColorSpace),ut=R.colorSpace===bn?null:qt.getPrimaries(R.colorSpace),Nt=R.colorSpace===bn||at===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let nt=g(R.image,!1,s.maxTextureSize);nt=zt(R,nt);const mt=i.convert(R.format,R.colorSpace),At=i.convert(R.type);let Rt=w(R.internalFormat,mt,At,R.colorSpace,R.isVideoTexture);Mt(Z,R);let gt;const kt=R.mipmaps,Ut=R.isVideoTexture!==!0,ne=vt.__version===void 0||j===!0,N=$.dataReady,ot=x(R,nt);if(R.isDepthTexture)Rt=E(R.format===bi,R.type),ne&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,Rt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Rt,nt.width,nt.height,0,mt,At,null));else if(R.isDataTexture)if(kt.length>0){Ut&&ne&&e.texStorage2D(r.TEXTURE_2D,ot,Rt,kt[0].width,kt[0].height);for(let Y=0,K=kt.length;Y<K;Y++)gt=kt[Y],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,Y,Rt,gt.width,gt.height,0,mt,At,gt.data);R.generateMipmaps=!1}else Ut?(ne&&e.texStorage2D(r.TEXTURE_2D,ot,Rt,nt.width,nt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,At,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Rt,nt.width,nt.height,0,mt,At,nt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ut&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Rt,kt[0].width,kt[0].height,nt.depth);for(let Y=0,K=kt.length;Y<K;Y++)if(gt=kt[Y],R.format!==tn)if(mt!==null)if(Ut){if(N)if(R.layerUpdates.size>0){const ft=ho(gt.width,gt.height,R.format,R.type);for(const ht of R.layerUpdates){const Dt=gt.data.subarray(ht*ft/gt.data.BYTES_PER_ELEMENT,(ht+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,ht,gt.width,gt.height,1,mt,Dt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Rt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,At,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,Rt,gt.width,gt.height,nt.depth,0,mt,At,gt.data)}else{Ut&&ne&&e.texStorage2D(r.TEXTURE_2D,ot,Rt,kt[0].width,kt[0].height);for(let Y=0,K=kt.length;Y<K;Y++)gt=kt[Y],R.format!==tn?mt!==null?Ut?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,Rt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,Y,Rt,gt.width,gt.height,0,mt,At,gt.data)}else if(R.isDataArrayTexture)if(Ut){if(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Rt,nt.width,nt.height,nt.depth),N)if(R.layerUpdates.size>0){const Y=ho(nt.width,nt.height,R.format,R.type);for(const K of R.layerUpdates){const ft=nt.data.subarray(K*Y/nt.data.BYTES_PER_ELEMENT,(K+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,mt,At,ft)}R.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,At,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,nt.width,nt.height,nt.depth,0,mt,At,nt.data);else if(R.isData3DTexture)Ut?(ne&&e.texStorage3D(r.TEXTURE_3D,ot,Rt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,At,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,nt.width,nt.height,nt.depth,0,mt,At,nt.data);else if(R.isFramebufferTexture){if(ne)if(Ut)e.texStorage2D(r.TEXTURE_2D,ot,Rt,nt.width,nt.height);else{let Y=nt.width,K=nt.height;for(let ft=0;ft<ot;ft++)e.texImage2D(r.TEXTURE_2D,ft,Rt,Y,K,0,mt,At,null),Y>>=1,K>>=1}}else if(kt.length>0){if(Ut&&ne){const Y=St(kt[0]);e.texStorage2D(r.TEXTURE_2D,ot,Rt,Y.width,Y.height)}for(let Y=0,K=kt.length;Y<K;Y++)gt=kt[Y],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,mt,At,gt):e.texImage2D(r.TEXTURE_2D,Y,Rt,mt,At,gt);R.generateMipmaps=!1}else if(Ut){if(ne){const Y=St(nt);e.texStorage2D(r.TEXTURE_2D,ot,Rt,Y.width,Y.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,At,nt)}else e.texImage2D(r.TEXTURE_2D,0,Rt,mt,At,nt);p(R)&&_(Z),vt.__version=$.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function tt(L,R,k){if(R.image.length!==6)return;const Z=Lt(L,R),j=R.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+k);const $=n.get(j);if(j.version!==$.__version||Z===!0){e.activeTexture(r.TEXTURE0+k);const vt=qt.getPrimaries(qt.workingColorSpace),at=R.colorSpace===bn?null:qt.getPrimaries(R.colorSpace),ut=R.colorSpace===bn||vt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Nt=R.isCompressedTexture||R.image[0].isCompressedTexture,nt=R.image[0]&&R.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Nt&&!nt?mt[K]=g(R.image[K],!0,s.maxCubemapSize):mt[K]=nt?R.image[K].image:R.image[K],mt[K]=zt(R,mt[K]);const At=mt[0],Rt=i.convert(R.format,R.colorSpace),gt=i.convert(R.type),kt=w(R.internalFormat,Rt,gt,R.colorSpace),Ut=R.isVideoTexture!==!0,ne=$.__version===void 0||Z===!0,N=j.dataReady;let ot=x(R,At);Mt(r.TEXTURE_CUBE_MAP,R);let Y;if(Nt){Ut&&ne&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,kt,At.width,At.height);for(let K=0;K<6;K++){Y=mt[K].mipmaps;for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];R.format!==tn?Rt!==null?Ut?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,Rt,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,kt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,Rt,gt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,kt,ht.width,ht.height,0,Rt,gt,ht.data)}}}else{if(Y=R.mipmaps,Ut&&ne){Y.length>0&&ot++;const K=St(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,kt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Rt,gt,mt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,mt[K].width,mt[K].height,0,Rt,gt,mt[K].data);for(let ft=0;ft<Y.length;ft++){const Dt=Y[ft].image[K].image;Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Dt.width,Dt.height,Rt,gt,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,kt,Dt.width,Dt.height,0,Rt,gt,Dt.data)}}else{Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,gt,mt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,Rt,gt,mt[K]);for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Rt,gt,ht.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,kt,Rt,gt,ht.image[K])}}}p(R)&&_(r.TEXTURE_CUBE_MAP),$.__version=j.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Q(L,R,k,Z,j,$){const vt=i.convert(k.format,k.colorSpace),at=i.convert(k.type),ut=w(k.internalFormat,vt,at,k.colorSpace),Nt=n.get(R),nt=n.get(k);if(nt.__renderTarget=R,!Nt.__hasExternalTextures){const mt=Math.max(1,R.width>>$),At=Math.max(1,R.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,$,ut,mt,At,R.depth,0,vt,at,null):e.texImage2D(j,$,ut,mt,At,0,vt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),Bt(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,j,nt.__webglTexture,0,Ot(R)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,j,nt.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,R,k){if(r.bindRenderbuffer(r.RENDERBUFFER,L),R.depthBuffer){const Z=R.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=E(R.stencilBuffer,j),vt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Ot(R);Bt(R)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,$,R.width,R.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,$,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,$,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,L)}else{const Z=R.textures;for(let j=0;j<Z.length;j++){const $=Z[j],vt=i.convert($.format,$.colorSpace),at=i.convert($.type),ut=w($.internalFormat,vt,at,$.colorSpace),Nt=Ot(R);k&&Bt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,ut,R.width,R.height):Bt(R)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt,ut,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ut,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(R.depthTexture);Z.__renderTarget=R,(!Z.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);const j=Z.__webglTexture,$=Ot(R);if(R.depthTexture.format===Si)Bt(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(R.depthTexture.format===bi)Bt(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Tt(L){const R=n.get(L),k=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Z){const j=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),R.__depthDisposeCallback=j}R.__boundDepthTexture=Z}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");dt(R.__webglFramebuffer,L)}else if(k){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]===void 0)R.__webglDepthbuffer[Z]=r.createRenderbuffer(),st(R.__webglDepthbuffer[Z],L,!1);else{const j=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=R.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),st(R.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,j)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(L,R,k){const Z=n.get(L);R!==void 0&&Q(Z.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Tt(L)}function Vt(L){const R=L.texture,k=n.get(L),Z=n.get(R);L.addEventListener("dispose",y);const j=L.textures,$=L.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=R.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(R.mipmaps&&R.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let ut=0;ut<R.mipmaps.length;ut++)k.__webglFramebuffer[at][ut]=r.createFramebuffer()}else k.__webglFramebuffer[at]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<R.mipmaps.length;at++)k.__webglFramebuffer[at]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(vt)for(let at=0,ut=j.length;at<ut;at++){const Nt=n.get(j[at]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&Bt(L)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ut=j[at];k.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const Nt=i.convert(ut.format,ut.colorSpace),nt=i.convert(ut.type),mt=w(ut.internalFormat,Nt,nt,ut.colorSpace,L.isXRRenderTarget===!0),At=Ot(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,mt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,k.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),st(k.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Mt(r.TEXTURE_CUBE_MAP,R);for(let at=0;at<6;at++)if(R.mipmaps&&R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)Q(k.__webglFramebuffer[at][ut],L,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else Q(k.__webglFramebuffer[at],L,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(R)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=j.length;at<ut;at++){const Nt=j[at],nt=n.get(Nt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),Mt(r.TEXTURE_2D,Nt),Q(k.__webglFramebuffer,L,Nt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),p(Nt)&&_(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(at=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Mt(at,R),R.mipmaps&&R.mipmaps.length>0)for(let ut=0;ut<R.mipmaps.length;ut++)Q(k.__webglFramebuffer[ut],L,R,r.COLOR_ATTACHMENT0,at,ut);else Q(k.__webglFramebuffer,L,R,r.COLOR_ATTACHMENT0,at,0);p(R)&&_(at),e.unbindTexture()}L.depthBuffer&&Tt(L)}function bt(L){const R=L.textures;for(let k=0,Z=R.length;k<Z;k++){const j=R[k];if(p(j)){const $=A(L),vt=n.get(j).__webglTexture;e.bindTexture($,vt),_($),e.unbindTexture()}}}const se=[],I=[];function Re(L){if(L.samples>0){if(Bt(L)===!1){const R=L.textures,k=L.width,Z=L.height;let j=r.COLOR_BUFFER_BIT;const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(L),at=R.length>1;if(at)for(let ut=0;ut<R.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<R.length;ut++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Nt=n.get(R[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Nt,0)}r.blitFramebuffer(0,0,k,Z,0,0,k,Z,j,r.NEAREST),c===!0&&(se.length=0,I.length=0,se.push(r.COLOR_ATTACHMENT0+ut),L.depthBuffer&&L.resolveDepthBuffer===!1&&(se.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<R.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Nt=n.get(R[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,Nt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const R=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Ot(L){return Math.min(s.maxSamples,L.samples)}function Bt(L){const R=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function xt(L){const R=a.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function zt(L,R){const k=L.colorSpace,Z=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||k!==Ri&&k!==bn&&(qt.getTransfer(k)===te?(Z!==tn||j!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),R}function St(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=wt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Bt}function Rp(r,t){function e(n,s=bn){let i;const a=qt.getTransfer(s);if(n===vn)return r.UNSIGNED_BYTE;if(n===ma)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wo)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Vo)return r.BYTE;if(n===ko)return r.SHORT;if(n===Vi)return r.UNSIGNED_SHORT;if(n===pa)return r.INT;if(n===$n)return r.UNSIGNED_INT;if(n===mn)return r.FLOAT;if(n===Wi)return r.HALF_FLOAT;if(n===Xo)return r.ALPHA;if(n===Yo)return r.RGB;if(n===tn)return r.RGBA;if(n===qo)return r.LUMINANCE;if(n===$o)return r.LUMINANCE_ALPHA;if(n===Si)return r.DEPTH_COMPONENT;if(n===bi)return r.DEPTH_STENCIL;if(n===Zo)return r.RED;if(n===_a)return r.RED_INTEGER;if(n===Ko)return r.RG;if(n===va)return r.RG_INTEGER;if(n===xa)return r.RGBA_INTEGER;if(n===ws||n===bs||n===Rs||n===Cs)if(a===te)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===ws)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===ws)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cs)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Or||n===Br||n===zr)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Nr)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Or)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Br)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zr)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hr||n===Gr||n===Vr)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Hr||n===Gr)return a===te?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===Vr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kr||n===Wr||n===Xr||n===Yr||n===qr||n===$r||n===Zr||n===Kr||n===Jr||n===jr||n===Qr||n===ta||n===ea||n===na)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===kr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qr)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return a===te?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===ia||n===sa)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===Ps)return a===te?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===ra||n===aa||n===oa)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===Ps)return i.COMPRESSED_RED_RGTC1_EXT;if(n===ra)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Cp={type:"move"};class xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,i=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),_=this._getHandJoint(u,g);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),l=.02,m=.005;u.inputState.pinching&&f>l+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=l-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=i!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ee,i=t.properties.get(s);i.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:Pp,fragmentShader:Lp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ip extends Pi{constructor(t,e){super();const n=this;let s=null,i=1,a=null,o="local-floor",c=1,u=null,h=null,d=null,f=null,l=null,m=null;const g=new Dp,p=e.getContextAttributes();let _=null,A=null;const w=[],E=[],x=new Gt;let M=null;const y=new Qe;y.viewport=new he;const T=new Qe;T.viewport=new he;const S=[y,T],v=new Qc;let b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=w[q];return tt===void 0&&(tt=new xr,w[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=w[q];return tt===void 0&&(tt=new xr,w[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=w[q];return tt===void 0&&(tt=new xr,w[q]=tt),tt.getHandSpace()};function D(q){const tt=E.indexOf(q.inputSource);if(tt===-1)return;const Q=w[tt];Q!==void 0&&(Q.update(q.inputSource,q.frame,u||a),Q.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F);for(let q=0;q<w.length;q++){const tt=E[q];tt!==null&&(E[q]=null,w[q].disconnect(tt))}b=null,P=null,g.reset(),t.setRenderTarget(_),l=null,f=null,d=null,s=null,A=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){i=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:l},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(x),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Q=null,st=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?bi:Si,st=p.stencil?wi:$n);const Tt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:i};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Zn(f.textureWidth,f.textureHeight,{format:tn,type:vn,depthTexture:new dl(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};l=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:l}),t.setPixelRatio(1),t.setSize(l.framebufferWidth,l.framebufferHeight,!1),A=new Zn(l.framebufferWidth,l.framebufferHeight,{format:tn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(q){for(let tt=0;tt<q.removed.length;tt++){const Q=q.removed[tt],st=E.indexOf(Q);st>=0&&(E[st]=null,w[st].disconnect(Q))}for(let tt=0;tt<q.added.length;tt++){const Q=q.added[tt];let st=E.indexOf(Q);if(st===-1){for(let Tt=0;Tt<w.length;Tt++)if(Tt>=E.length){E.push(Q),st=Tt;break}else if(E[Tt]===null){E[Tt]=Q,st=Tt;break}if(st===-1)break}const dt=w[st];dt&&dt.connect(Q)}}const z=new V,G=new V;function H(q,tt,Q){z.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const st=z.distanceTo(G),dt=tt.projectionMatrix.elements,Tt=Q.projectionMatrix.elements,wt=dt[14]/(dt[10]-1),Vt=dt[14]/(dt[10]+1),bt=(dt[9]+1)/dt[5],se=(dt[9]-1)/dt[5],I=(dt[8]-1)/dt[0],Re=(Tt[8]+1)/Tt[0],Ot=wt*I,Bt=wt*Re,xt=st/(-I+Re),zt=xt*-I;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const St=wt+xt,L=Vt+xt,R=Ot-zt,k=Bt+(st-zt),Z=bt*Vt/L*St,j=se*Vt/L*St;q.projectionMatrix.makePerspective(R,k,Z,j,St,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,Q=q.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),v.near=T.near=y.near=tt,v.far=T.far=y.far=Q,(b!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,P=v.far),y.layers.mask=q.layers.mask|2,T.layers.mask=q.layers.mask|4,v.layers.mask=y.layers.mask|T.layers.mask;const st=q.parent,dt=v.cameras;J(v,st);for(let Tt=0;Tt<dt.length;Tt++)J(dt[Tt],st);dt.length===2?H(v,y,T):v.projectionMatrix.copy(y.projectionMatrix),it(q,v,st)};function it(q,tt,Q){Q===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(Q.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ca*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&l===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ct=null;function Mt(q,tt){if(h=tt.getViewerPose(u||a),m=tt,h!==null){const Q=h.views;l!==null&&(t.setRenderTargetFramebuffer(A,l.framebuffer),t.setRenderTarget(A));let st=!1;Q.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let Tt=0;Tt<Q.length;Tt++){const wt=Q[Tt];let Vt=null;if(l!==null)Vt=l.getViewport(wt);else{const se=d.getViewSubImage(f,wt);Vt=se.viewport,Tt===0&&(t.setRenderTargetTextures(A,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(A))}let bt=S[Tt];bt===void 0&&(bt=new Qe,bt.layers.enable(Tt),bt.viewport=new he,S[Tt]=bt),bt.matrix.fromArray(wt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(wt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Tt===0&&(v.matrix.copy(bt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(bt)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const Tt=d.getDepthInformation(Q[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,s.renderState)}}for(let Q=0;Q<w.length;Q++){const st=E[Q],dt=w[Q];st!==null&&dt!==void 0&&dt.update(st,tt,u||a)}ct&&ct(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const Lt=new ml;Lt.setAnimationLoop(Mt),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const zn=new xn,Up=new ae;function Fp(r,t){function e(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,al(r)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function s(p,_,A,w,E){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(p,_):_.isMeshToonMaterial?(i(p,_),d(p,_)):_.isMeshPhongMaterial?(i(p,_),h(p,_)):_.isMeshStandardMaterial?(i(p,_),f(p,_),_.isMeshPhysicalMaterial&&l(p,_,E)):_.isMeshMatcapMaterial?(i(p,_),m(p,_)):_.isMeshDepthMaterial?i(p,_):_.isMeshDistanceMaterial?(i(p,_),g(p,_)):_.isMeshNormalMaterial?i(p,_):_.isLineBasicMaterial?(a(p,_),_.isLineDashedMaterial&&o(p,_)):_.isPointsMaterial?c(p,_,A,w):_.isSpriteMaterial?u(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,e(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===Ie&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,e(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===Ie&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,e(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,e(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const A=t.get(_),w=A.envMap,E=A.envMapRotation;w&&(p.envMap.value=w,zn.copy(E),zn.x*=-1,zn.y*=-1,zn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Up.makeRotationFromEuler(zn)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,p.aoMapTransform))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform))}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function c(p,_,A,w){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*A,p.scale.value=w*.5,_.map&&(p.map.value=_.map,e(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function h(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function d(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function f(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function l(p,_,A){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ie&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function g(p,_){const A=t.get(_).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Np(r,t,e,n){let s={},i={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,w){const E=w.program;n.uniformBlockBinding(A,E)}function u(A,w){let E=s[A.id];E===void 0&&(m(A),E=h(A),s[A.id]=E,A.addEventListener("dispose",p));const x=w.program;n.updateUBOMapping(A,x);const M=t.render.frame;i[A.id]!==M&&(f(A),i[A.id]=M)}function h(A){const w=d();A.__bindingPointIndex=w;const E=r.createBuffer(),x=A.__size,M=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,x,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,E),E}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const w=s[A.id],E=A.uniforms,x=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let M=0,y=E.length;M<y;M++){const T=Array.isArray(E[M])?E[M]:[E[M]];for(let S=0,v=T.length;S<v;S++){const b=T[S];if(l(b,M,S,x)===!0){const P=b.__offset,D=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let F=0;F<D.length;F++){const z=D[F],G=g(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,P+U,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function l(A,w,E,x){const M=A.value,y=w+"_"+E;if(x[y]===void 0)return typeof M=="number"||typeof M=="boolean"?x[y]=M:x[y]=M.clone(),!0;{const T=x[y];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return x[y]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function m(A){const w=A.uniforms;let E=0;const x=16;for(let y=0,T=w.length;y<T;y++){const S=Array.isArray(w[y])?w[y]:[w[y]];for(let v=0,b=S.length;v<b;v++){const P=S[v],D=Array.isArray(P.value)?P.value:[P.value];for(let U=0,F=D.length;U<F;U++){const z=D[U],G=g(z),H=E%x,J=H%G.boundary,it=H+J;E+=J,it!==0&&x-it<G.storage&&(E+=x-it),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=G.storage}}}const M=E%x;return M>0&&(E+=x-M),A.__size=E,A.__cache={},this}function g(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function p(A){const w=A.target;w.removeEventListener("dispose",p);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete i[w.id]}function _(){for(const A in s)r.deleteBuffer(s[A]);a=[],s={},i={}}return{bind:c,update:u,dispose:_}}class Op{constructor(t={}){const{canvas:e=mc(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=a;const m=new Uint32Array(4),g=new Int32Array(4);let p=null,_=null;const A=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=Cn,this.toneMappingExposure=1;const E=this;let x=!1,M=0,y=0,T=null,S=-1,v=null;const b=new he,P=new he;let D=null;const U=new Wt(0);let F=0,z=e.width,G=e.height,H=1,J=null,it=null;const ct=new he(0,0,z,G),Mt=new he(0,0,z,G);let Lt=!1;const q=new hl;let tt=!1,Q=!1;this.transmissionResolutionScale=1;const st=new ae,dt=new ae,Tt=new V,wt=new he,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function se(){return T===null?H:1}let I=n;function Re(C,O){return e.getContext(C,O)}try{const C={alpha:!0,depth:s,stencil:i,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${da}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),I===null){const O="webgl2";if(I=Re(O,C),I===null)throw Re(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ot,Bt,xt,zt,St,L,R,k,Z,j,$,vt,at,ut,Nt,nt,mt,At,Rt,gt,kt,Ut,ne,N;function ot(){Ot=new Yf(I),Ot.init(),Ut=new Rp(I,Ot),Bt=new Hf(I,Ot,t,Ut),xt=new wp(I,Ot),Bt.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),zt=new Zf(I),St=new dp,L=new bp(I,Ot,xt,St,Bt,Ut,zt),R=new Vf(E),k=new Xf(E),Z=new eh(I),ne=new Bf(I,Z),j=new qf(I,Z,zt,ne),$=new Jf(I,j,Z,zt),Rt=new Kf(I,Bt,L),nt=new Gf(St),vt=new fp(E,R,k,Ot,Bt,ne,nt),at=new Fp(E,St),ut=new mp,Nt=new Mp(Ot),At=new Of(E,R,k,xt,$,l,c),mt=new Tp(E,$,Bt),N=new Np(I,zt,Bt,xt),gt=new zf(I,Ot,zt),kt=new $f(I,Ot,zt),zt.programs=vt.programs,E.capabilities=Bt,E.extensions=Ot,E.properties=St,E.renderLists=ut,E.shadowMap=mt,E.state=xt,E.info=zt}ot();const Y=new Ip(E,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(z,G,!1))},this.getSize=function(C){return C.set(z,G)},this.setSize=function(C,O,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,G=O,e.width=Math.floor(C*H),e.height=Math.floor(O*H),W===!0&&(e.style.width=C+"px",e.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(z*H,G*H).floor()},this.setDrawingBufferSize=function(C,O,W){z=C,G=O,H=W,e.width=Math.floor(C*W),e.height=Math.floor(O*W),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(ct)},this.setViewport=function(C,O,W,X){C.isVector4?ct.set(C.x,C.y,C.z,C.w):ct.set(C,O,W,X),xt.viewport(b.copy(ct).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(Mt)},this.setScissor=function(C,O,W,X){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,O,W,X),xt.scissor(P.copy(Mt).multiplyScalar(H).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(C){xt.setScissorTest(Lt=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){it=C},this.getClearColor=function(C){return C.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(C=!0,O=!0,W=!0){let X=0;if(C){let B=!1;if(T!==null){const et=T.texture.format;B=et===xa||et===va||et===_a}if(B){const et=T.texture.type,lt=et===vn||et===$n||et===Vi||et===wi||et===ma||et===ga,pt=At.getClearColor(),_t=At.getClearAlpha(),Ct=pt.r,Pt=pt.g,yt=pt.b;lt?(m[0]=Ct,m[1]=Pt,m[2]=yt,m[3]=_t,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ct,g[1]=Pt,g[2]=yt,g[3]=_t,I.clearBufferiv(I.COLOR,0,g))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),At.dispose(),ut.dispose(),Nt.dispose(),St.dispose(),R.dispose(),k.dispose(),$.dispose(),ne.dispose(),N.dispose(),vt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",wa),Y.removeEventListener("sessionend",ba),Dn.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=zt.autoReset,O=mt.enabled,W=mt.autoUpdate,X=mt.needsUpdate,B=mt.type;ot(),zt.autoReset=C,mt.enabled=O,mt.autoUpdate=W,mt.needsUpdate=X,mt.type=B}function ht(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Dt(C){const O=C.target;O.removeEventListener("dispose",Dt),oe(O)}function oe(C){Se(C),St.remove(C)}function Se(C){const O=St.get(C).programs;O!==void 0&&(O.forEach(function(W){vt.releaseProgram(W)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,W,X,B,et){O===null&&(O=Vt);const lt=B.isMesh&&B.matrixWorld.determinant()<0,pt=Sl(C,O,W,X,B);xt.setMaterial(X,lt);let _t=W.index,Ct=1;if(X.wireframe===!0){if(_t=j.getWireframeAttribute(W),_t===void 0)return;Ct=2}const Pt=W.drawRange,yt=W.attributes.position;let Xt=Pt.start*Ct,$t=(Pt.start+Pt.count)*Ct;et!==null&&(Xt=Math.max(Xt,et.start*Ct),$t=Math.min($t,(et.start+et.count)*Ct)),_t!==null?(Xt=Math.max(Xt,0),$t=Math.min($t,_t.count)):yt!=null&&(Xt=Math.max(Xt,0),$t=Math.min($t,yt.count));const ue=$t-Xt;if(ue<0||ue===1/0)return;ne.setup(B,X,pt,W,_t);let le,Yt=gt;if(_t!==null&&(le=Z.get(_t),Yt=kt,Yt.setIndex(le)),B.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*se()),Yt.setMode(I.LINES)):Yt.setMode(I.TRIANGLES);else if(B.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),xt.setLineWidth(Et*se()),B.isLineSegments?Yt.setMode(I.LINES):B.isLineLoop?Yt.setMode(I.LINE_LOOP):Yt.setMode(I.LINE_STRIP)}else B.isPoints?Yt.setMode(I.POINTS):B.isSprite&&Yt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,ve=B._multiDrawCounts,Zt=B._multiDrawCount,qe=_t?Z.get(_t).bytesPerElement:1,Jn=St.get(X).currentProgram.getUniforms();for(let Ne=0;Ne<Zt;Ne++)Jn.setValue(I,"_gl_DrawID",Ne),Yt.render(Et[Ne]/qe,ve[Ne])}else if(B.isInstancedMesh)Yt.renderInstances(Xt,ue,B.count);else if(W.isInstancedBufferGeometry){const Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ve=Math.min(W.instanceCount,Et);Yt.renderInstances(Xt,ue,ve)}else Yt.render(Xt,ue)};function Kt(C,O,W){C.transparent===!0&&C.side===pn&&C.forceSinglePass===!1?(C.side=Ie,C.needsUpdate=!0,Ki(C,O,W),C.side=Ln,C.needsUpdate=!0,Ki(C,O,W),C.side=pn):Ki(C,O,W)}this.compile=function(C,O,W=null){W===null&&(W=C),_=Nt.get(W),_.init(O),w.push(_),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),C!==W&&C.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const X=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const et=B.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const pt=et[lt];Kt(pt,W,B),X.add(pt)}else Kt(et,W,B),X.add(et)}),w.pop(),_=null,X},this.compileAsync=function(C,O,W=null){const X=this.compile(C,O,W);return new Promise(B=>{function et(){if(X.forEach(function(lt){St.get(lt).currentProgram.isReady()&&X.delete(lt)}),X.size===0){B(C);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ye=null;function an(C){Ye&&Ye(C)}function wa(){Dn.stop()}function ba(){Dn.start()}const Dn=new ml;Dn.setAnimationLoop(an),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(C){Ye=C,Y.setAnimationLoop(C),C===null?Dn.stop():Dn.start()},Y.addEventListener("sessionstart",wa),Y.addEventListener("sessionend",ba),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,O,T),_=Nt.get(C,w.length),_.init(O),w.push(_),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,Q),p=ut.get(C,A.length),p.init(),A.push(p),Y.enabled===!0&&Y.isPresenting===!0){const et=E.xr.getDepthSensingMesh();et!==null&&Hs(et,O,-1/0,E.sortObjects)}Hs(C,O,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(J,it),bt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,bt&&At.addToRenderList(p,C),this.info.render.frame++,tt===!0&&nt.beginShadows();const W=_.state.shadowsArray;mt.render(W,C,O),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,B=p.transmissive;if(_.setupLights(),O.isArrayCamera){const et=O.cameras;if(B.length>0)for(let lt=0,pt=et.length;lt<pt;lt++){const _t=et[lt];Ca(X,B,C,_t)}bt&&At.render(C);for(let lt=0,pt=et.length;lt<pt;lt++){const _t=et[lt];Ra(p,C,_t,_t.viewport)}}else B.length>0&&Ca(X,B,C,O),bt&&At.render(C),Ra(p,C,O);T!==null&&y===0&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(E,C,O),ne.resetDefaultState(),S=-1,v=null,w.pop(),w.length>0?(_=w[w.length-1],tt===!0&&nt.setGlobalState(E.clippingPlanes,_.state.camera)):_=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Hs(C,O,W,X){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){X&&wt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(dt);const lt=$.update(C),pt=C.material;pt.visible&&p.push(C,lt,pt,W,wt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const lt=$.update(C),pt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),wt.copy(C.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),wt.copy(lt.boundingSphere.center)),wt.applyMatrix4(C.matrixWorld).applyMatrix4(dt)),Array.isArray(pt)){const _t=lt.groups;for(let Ct=0,Pt=_t.length;Ct<Pt;Ct++){const yt=_t[Ct],Xt=pt[yt.materialIndex];Xt&&Xt.visible&&p.push(C,lt,Xt,W,wt.z,yt)}}else pt.visible&&p.push(C,lt,pt,W,wt.z,null)}}const et=C.children;for(let lt=0,pt=et.length;lt<pt;lt++)Hs(et[lt],O,W,X)}function Ra(C,O,W,X){const B=C.opaque,et=C.transmissive,lt=C.transparent;_.setupLightsView(W),tt===!0&&nt.setGlobalState(E.clippingPlanes,W),X&&xt.viewport(b.copy(X)),B.length>0&&Zi(B,O,W),et.length>0&&Zi(et,O,W),lt.length>0&&Zi(lt,O,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ca(C,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[X.id]===void 0&&(_.state.transmissionRenderTarget[X.id]=new Zn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Wi:vn,minFilter:Xn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=_.state.transmissionRenderTarget[X.id],lt=X.viewport||b;et.setSize(lt.z*E.transmissionResolutionScale,lt.w*E.transmissionResolutionScale);const pt=E.getRenderTarget();E.setRenderTarget(et),E.getClearColor(U),F=E.getClearAlpha(),F<1&&E.setClearColor(16777215,.5),E.clear(),bt&&At.render(W);const _t=E.toneMapping;E.toneMapping=Cn;const Ct=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),_.setupLightsView(X),tt===!0&&nt.setGlobalState(E.clippingPlanes,X),Zi(C,W,X),L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let yt=0,Xt=O.length;yt<Xt;yt++){const $t=O[yt],ue=$t.object,le=$t.geometry,Yt=$t.material,Et=$t.group;if(Yt.side===pn&&ue.layers.test(X.layers)){const ve=Yt.side;Yt.side=Ie,Yt.needsUpdate=!0,Pa(ue,W,X,le,Yt,Et),Yt.side=ve,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et))}E.setRenderTarget(pt),E.setClearColor(U,F),Ct!==void 0&&(X.viewport=Ct),E.toneMapping=_t}function Zi(C,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,et=C.length;B<et;B++){const lt=C[B],pt=lt.object,_t=lt.geometry,Ct=X===null?lt.material:X,Pt=lt.group;pt.layers.test(W.layers)&&Pa(pt,O,W,_t,Ct,Pt)}}function Pa(C,O,W,X,B,et){C.onBeforeRender(E,O,W,X,B,et),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(E,O,W,X,C,et),B.transparent===!0&&B.side===pn&&B.forceSinglePass===!1?(B.side=Ie,B.needsUpdate=!0,E.renderBufferDirect(W,O,X,B,C,et),B.side=Ln,B.needsUpdate=!0,E.renderBufferDirect(W,O,X,B,C,et),B.side=pn):E.renderBufferDirect(W,O,X,B,C,et),C.onAfterRender(E,O,W,X,B,et)}function Ki(C,O,W){O.isScene!==!0&&(O=Vt);const X=St.get(C),B=_.state.lights,et=_.state.shadowsArray,lt=B.state.version,pt=vt.getParameters(C,B.state,et,O,W),_t=vt.getProgramCacheKey(pt);let Ct=X.programs;X.environment=C.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(C.isMeshStandardMaterial?k:R).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Ct===void 0&&(C.addEventListener("dispose",Dt),Ct=new Map,X.programs=Ct);let Pt=Ct.get(_t);if(Pt!==void 0){if(X.currentProgram===Pt&&X.lightsStateVersion===lt)return Da(C,pt),Pt}else pt.uniforms=vt.getUniforms(C),C.onBeforeCompile(pt,E),Pt=vt.acquireProgram(pt,_t),Ct.set(_t,Pt),X.uniforms=pt.uniforms;const yt=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(yt.clippingPlanes=nt.uniform),Da(C,pt),X.needsLights=yl(C),X.lightsStateVersion=lt,X.needsLights&&(yt.ambientLightColor.value=B.state.ambient,yt.lightProbe.value=B.state.probe,yt.directionalLights.value=B.state.directional,yt.directionalLightShadows.value=B.state.directionalShadow,yt.spotLights.value=B.state.spot,yt.spotLightShadows.value=B.state.spotShadow,yt.rectAreaLights.value=B.state.rectArea,yt.ltc_1.value=B.state.rectAreaLTC1,yt.ltc_2.value=B.state.rectAreaLTC2,yt.pointLights.value=B.state.point,yt.pointLightShadows.value=B.state.pointShadow,yt.hemisphereLights.value=B.state.hemi,yt.directionalShadowMap.value=B.state.directionalShadowMap,yt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,yt.spotShadowMap.value=B.state.spotShadowMap,yt.spotLightMatrix.value=B.state.spotLightMatrix,yt.spotLightMap.value=B.state.spotLightMap,yt.pointShadowMap.value=B.state.pointShadowMap,yt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Pt,X.uniformsList=null,Pt}function La(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=Ls.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function Da(C,O){const W=St.get(C);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Sl(C,O,W,X,B){O.isScene!==!0&&(O=Vt),L.resetTextureUnits();const et=O.fog,lt=X.isMeshStandardMaterial?O.environment:null,pt=T===null?E.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ri,_t=(X.isMeshStandardMaterial?k:R).get(X.envMap||lt),Ct=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),yt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,$t=!!W.morphAttributes.color;let ue=Cn;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ue=E.toneMapping);const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=le!==void 0?le.length:0,Et=St.get(X),ve=_.state.lights;if(tt===!0&&(Q===!0||C!==v)){const Ae=C===v&&X.id===S;nt.setState(X,C,Ae)}let Zt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ve.state.version||Et.outputColorSpace!==pt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==_t||X.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==Pt||Et.morphTargets!==yt||Et.morphNormals!==Xt||Et.morphColors!==$t||Et.toneMapping!==ue||Et.morphTargetsCount!==Yt)&&(Zt=!0):(Zt=!0,Et.__version=X.version);let qe=Et.currentProgram;Zt===!0&&(qe=Ki(X,O,B));let Jn=!1,Ne=!1,Di=!1;const ie=qe.getUniforms(),Ve=Et.uniforms;if(xt.useProgram(qe.program)&&(Jn=!0,Ne=!0,Di=!0),X.id!==S&&(S=X.id,Ne=!0),Jn||v!==C){xt.buffers.depth.getReversed()?(st.copy(C.projectionMatrix),_c(st),vc(st),ie.setValue(I,"projectionMatrix",st)):ie.setValue(I,"projectionMatrix",C.projectionMatrix),ie.setValue(I,"viewMatrix",C.matrixWorldInverse);const Ce=ie.map.cameraPosition;Ce!==void 0&&Ce.setValue(I,Tt.setFromMatrixPosition(C.matrixWorld)),Bt.logarithmicDepthBuffer&&ie.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ie.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Ne=!0,Di=!0)}if(B.isSkinnedMesh){ie.setOptional(I,B,"bindMatrix"),ie.setOptional(I,B,"bindMatrixInverse");const Ae=B.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ie.setValue(I,"boneTexture",Ae.boneTexture,L))}B.isBatchedMesh&&(ie.setOptional(I,B,"batchingTexture"),ie.setValue(I,"batchingTexture",B._matricesTexture,L),ie.setOptional(I,B,"batchingIdTexture"),ie.setValue(I,"batchingIdTexture",B._indirectTexture,L),ie.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ie.setValue(I,"batchingColorTexture",B._colorsTexture,L));const ke=W.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&Rt.update(B,W,qe),(Ne||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,ie.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ve.envMap.value=_t,Ve.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Ve.envMapIntensity.value=O.environmentIntensity),Ne&&(ie.setValue(I,"toneMappingExposure",E.toneMappingExposure),Et.needsLights&&Ml(Ve,Di),et&&X.fog===!0&&at.refreshFogUniforms(Ve,et),at.refreshMaterialUniforms(Ve,X,H,G,_.state.transmissionRenderTarget[C.id]),Ls.upload(I,La(Et),Ve,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ls.upload(I,La(Et),Ve,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ie.setValue(I,"center",B.center),ie.setValue(I,"modelViewMatrix",B.modelViewMatrix),ie.setValue(I,"normalMatrix",B.normalMatrix),ie.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ae=X.uniformsGroups;for(let Ce=0,Gs=Ae.length;Ce<Gs;Ce++){const In=Ae[Ce];N.update(In,qe),N.bind(In,qe)}}return qe}function Ml(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function yl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,O,W){St.get(C.texture).__webglTexture=O,St.get(C.depthTexture).__webglTexture=W;const X=St.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const W=St.get(C);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const El=I.createFramebuffer();this.setRenderTarget=function(C,O=0,W=0){T=C,M=O,y=W;let X=!0,B=null,et=!1,lt=!1;if(C){const _t=St.get(C);if(_t.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(_t.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(_t.__hasExternalTextures)L.rebindTextures(C,St.get(C.texture).__webglTexture,St.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const yt=C.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&St.has(yt)&&(C.width!==yt.image.width||C.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Ct=C.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);const Pt=St.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pt[O])?B=Pt[O][W]:B=Pt[O],et=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?B=St.get(C).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[W]:B=Pt,b.copy(C.viewport),P.copy(C.scissor),D=C.scissorTest}else b.copy(ct).multiplyScalar(H).floor(),P.copy(Mt).multiplyScalar(H).floor(),D=Lt;if(W!==0&&(B=El),xt.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&xt.drawBuffers(C,B),xt.viewport(b),xt.scissor(P),xt.setScissorTest(D),et){const _t=St.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,W)}else if(lt){const _t=St.get(C.texture),Ct=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.__webglTexture,W,Ct)}else if(C!==null&&W!==0){const _t=St.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(C,O,W,X,B,et,lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){xt.bindFramebuffer(I.FRAMEBUFFER,pt);try{const _t=C.texture,Ct=_t.format,Pt=_t.type;if(!Bt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-X&&W>=0&&W<=C.height-B&&I.readPixels(O,W,X,B,Ut.convert(Ct),Ut.convert(Pt),et)}finally{const _t=T!==null?St.get(T).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(C,O,W,X,B,et,lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=St.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const _t=C.texture,Ct=_t.format,Pt=_t.type;if(!Bt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-X&&W>=0&&W<=C.height-B){xt.bindFramebuffer(I.FRAMEBUFFER,pt);const yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(O,W,X,B,Ut.convert(Ct),Ut.convert(Pt),0);const Xt=T!==null?St.get(T).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Xt);const $t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await gc(I,$t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(yt),I.deleteSync($t),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,O=null,W=0){C.isTexture!==!0&&(_i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(C.image.width*X),et=Math.floor(C.image.height*X),lt=O!==null?O.x:0,pt=O!==null?O.y:0;L.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,lt,pt,B,et),xt.unbindTexture()};const Tl=I.createFramebuffer(),Al=I.createFramebuffer();this.copyTextureToTexture=function(C,O,W=null,X=null,B=0,et=null){C.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],O=arguments[2],et=arguments[3]||0,W=null),et===null&&(B!==0?(_i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=B,B=0):et=0);let lt,pt,_t,Ct,Pt,yt,Xt,$t,ue;const le=C.isCompressedTexture?C.mipmaps[et]:C.image;if(W!==null)lt=W.max.x-W.min.x,pt=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,Pt=W.min.y,yt=W.isBox3?W.min.z:0;else{const ke=Math.pow(2,-B);lt=Math.floor(le.width*ke),pt=Math.floor(le.height*ke),C.isDataArrayTexture?_t=le.depth:C.isData3DTexture?_t=Math.floor(le.depth*ke):_t=1,Ct=0,Pt=0,yt=0}X!==null?(Xt=X.x,$t=X.y,ue=X.z):(Xt=0,$t=0,ue=0);const Yt=Ut.convert(O.format),Et=Ut.convert(O.type);let ve;O.isData3DTexture?(L.setTexture3D(O,0),ve=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(L.setTexture2DArray(O,0),ve=I.TEXTURE_2D_ARRAY):(L.setTexture2D(O,0),ve=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Zt=I.getParameter(I.UNPACK_ROW_LENGTH),qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ne=I.getParameter(I.UNPACK_SKIP_ROWS),Di=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,yt);const ie=C.isDataArrayTexture||C.isData3DTexture,Ve=O.isDataArrayTexture||O.isData3DTexture;if(C.isDepthTexture){const ke=St.get(C),Ae=St.get(O),Ce=St.get(ke.__renderTarget),Gs=St.get(Ae.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Ce.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let In=0;In<_t;In++)ie&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(C).__webglTexture,B,yt+In),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(O).__webglTexture,et,ue+In)),I.blitFramebuffer(Ct,Pt,lt,pt,Xt,$t,lt,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||C.isRenderTargetTexture||St.has(C)){const ke=St.get(C),Ae=St.get(O);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Tl),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Al);for(let Ce=0;Ce<_t;Ce++)ie?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,B,yt+Ce):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,B),Ve?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,et,ue+Ce):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,et),B!==0?I.blitFramebuffer(Ct,Pt,lt,pt,Xt,$t,lt,pt,I.COLOR_BUFFER_BIT,I.NEAREST):Ve?I.copyTexSubImage3D(ve,et,Xt,$t,ue+Ce,Ct,Pt,lt,pt):I.copyTexSubImage2D(ve,et,Xt,$t,Ct,Pt,lt,pt);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ve?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(ve,et,Xt,$t,ue,lt,pt,_t,Yt,Et,le.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(ve,et,Xt,$t,ue,lt,pt,_t,Yt,le.data):I.texSubImage3D(ve,et,Xt,$t,ue,lt,pt,_t,Yt,Et,le):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,Xt,$t,lt,pt,Yt,Et,le.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,Xt,$t,le.width,le.height,Yt,le.data):I.texSubImage2D(I.TEXTURE_2D,et,Xt,$t,lt,pt,Yt,Et,le);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Di),et===0&&O.generateMipmaps&&I.generateMipmap(ve),xt.unbindTexture()},this.copyTextureToTexture3D=function(C,O,W=null,X=null,B=0){return C.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,C=arguments[2],O=arguments[3],B=arguments[4]||0),_i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,O,W,X,B)},this.initRenderTarget=function(C){St.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),xt.unbindTexture()},this.resetState=function(){M=0,y=0,T=null,xt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Bp={MAJOR:1,MINOR:0,BUILD:1,toString(){return`v${this.MAJOR}.${this.MINOR} build ${this.BUILD}`}},fa={ASPECT:9/16},De={WIDTH:390,HEIGHT:844,BG_TOP:8900331,BG_BOTTOM:6005721},jt={PEG_ROWS:14,PEG_COLS:8,PEG_RADIUS:7,PEG_SPACING_X:44,PEG_SPACING_Y:44,TOP_OFFSET:160,WALL_THICKNESS:10},je={COUNT:7,HEIGHT:50,MULTIPLIERS:[1,3,5,10,5,3,1],COLORS:[5025616,9159498,16771899,16750592,16771899,9159498,5025616]},gi={RADIUS:10,RESTITUTION:.75,FRICTION:.02,DENSITY:.001},pe={BODY_RADIUS:18,Y_POS:65,SPEED:40,BOB_AMPLITUDE:4,BOB_SPEED:2.5,LAY_DURATION:.3,WARMUP_DURATION:1.8},Qt={FOLLOW_LERP:.08,FOLLOW_LERP_X:.1,ZOOM_LERP:.04,IDLE_ZOOM:4.6,WARMUP_ZOOM:5.2,DROP_ZOOM_START:1.4,DROP_ZOOM_MIN:.7,DROP_ZOOM_MAX:1.4,HATCH_ZOOM:1.6,HATCH_SHAKE_MAX:4,SHAKE_INTENSITY:2.5,SHAKE_DECAY:.9,SPEED_ZOOM_FACTOR:3e-4,BOARD_TOP_Y:160,BOARD_BOTTOM_Y:806,OVERVIEW_ZOOM:1.05,OVERVIEW_CENTER_Y:420},yi={BASE_GOLD:1,COMBO_WINDOW_MS:400,COMBO_MAX:10},Pe={HATCH_DELAY:.5,WOBBLE_DURATION:1.2,CRACK_DURATION:.3,TRANSITION_DURATION:1.5,IDLE_PROMPT_DELAY:.5,LAND_FREEZE:.08},Jt={MASTER_VOLUME:.3,PEG_BASE_FREQ:800,PEG_FREQ_RANGE:400,COIN_BASE_FREQ:1200},fn={GROUND_HEIGHT:400,GROUND_WIDTH:800,GROUND_COLOR:5999678,GROUND_TOP_COLOR:8308816,GROUND_TOP_HEIGHT:18,CLOUD_PARALLAX:.12,MOUNTAIN_PARALLAX:.05},qn={DUPLI_BOUNCE_COST:1e3,DUPLICATE_RADIUS_SCALE:.85,DUPLICATE_OPACITY:.75,DUPLICATE_RESTITUTION:.8,SPAWN_SPEED_MIN:1.5,SPAWN_SPEED_SPREAD:1},de={SCALE:.65,SPEED:35,WARMUP_DURATION:1.2,LAY_DURATION:.25,AUDIO_VOLUME_SCALE:.25,Z_POS:4,INTERVAL_REDUCTION:.12,MAX_LEVEL:10},Sr=[{id:"normal",name:"Chicken",emoji:"🐔",description:"Lays eggs on its own",baseCost:250,levelCostBase:200,levelCostMult:1.8,baseInterval:15,goldMultiplier:1,tint:null,eggTint:null,timerColor:"#FFFFFF",particleColor:16766720},{id:"rainbow",name:"Rainbow Chicken",emoji:"🌈",description:"Lays rainbow eggs worth 10x gold",baseCost:2e3,levelCostBase:1500,levelCostMult:2,baseInterval:30,goldMultiplier:10,tint:16738740,eggTint:16738740,timerColor:"#FF69B4",particleColor:16738740},{id:"cosmic",name:"Cosmic Chicken",emoji:"🌌",description:"Lays cosmic eggs worth 50x gold",baseCost:1e4,levelCostBase:8e3,levelCostMult:2.2,baseInterval:60,goldMultiplier:50,tint:10181046,eggTint:10181046,timerColor:"#9B59B6",particleColor:10181046}],Le={PEG_DEFAULT:14737632,PEG_HIT:16777215,WALL:9139029,BIN_BORDER:7035709,GOLD_PARTICLE:16766720,SHELL_PARTICLE:16774630,SPARK:16777130,DUST:13154454};class zp{constructor(t){this.container=t,this.scene=new no;const e=De.HEIGHT/2,n=e*fa.ASPECT;this.camera=new pl(-n,n,e,-e,.1,1e3),this.camera.position.z=100,this.renderer=new Op({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0),t.appendChild(this.renderer.domElement),this._createBackground(),this._resize(),window.addEventListener("resize",()=>this._resize())}_createBackground(){const t=new xe(2,2),e=new Sn({uniforms:{uTopColor:{value:new Wt(De.BG_TOP)},uBottomColor:{value:new Wt(De.BG_BOTTOM)},uBrightness:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform float uBrightness;
        varying vec2 vUv;
        void main() {
          vec3 color = mix(uBottomColor, uTopColor, vUv.y);
          color = mix(color, vec3(1.0), uBrightness);
          gl_FragColor = vec4(color, 1.0);
        }
      `,depthWrite:!1,depthTest:!1});this.bgMesh=new re(t,e),this.bgMesh.renderOrder=-1e3,this.bgMesh.frustumCulled=!1,this.bgScene=new no,this.bgCamera=new Ma,this.bgScene.add(this.bgMesh)}setBgBrightness(t){this.bgMesh.material.uniforms.uBrightness.value=t}_resize(){const t=this.container.clientWidth,e=this.container.clientHeight;if(t===0||e===0)return;this.renderer.setSize(t,e);const n=De.HEIGHT/2,s=n*fa.ASPECT;this.camera.left=-s,this.camera.right=s,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix()}render(){this.renderer.autoClear=!1,this.renderer.clear(),this.renderer.render(this.bgScene,this.bgCamera),this.renderer.render(this.scene,this.camera)}projectToScreen(t,e){const n=new V(t,e,0);n.project(this.camera);const s=this.container.clientWidth,i=this.container.clientHeight;return{x:(n.x*.5+.5)*s,y:(-n.y*.5+.5)*i}}getCanvas(){return this.renderer.domElement}}var No=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ds={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Gp=Ds.exports,Oo;function Vp(){return Oo||(Oo=1,(function(r,t){(function(n,s){r.exports=s()})(Gp,function(){return(function(e){var n={};function s(i){if(n[i])return n[i].exports;var a=n[i]={i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=e,s.c=n,s.d=function(i,a,o){s.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:o})},s.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,a){if(a&1&&(i=s(i)),a&8||a&4&&typeof i=="object"&&i&&i.__esModule)return i;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),a&2&&typeof i!="string")for(var c in i)s.d(o,c,(function(u){return i[u]}).bind(null,c));return o},s.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(a,"a",a),a},s.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},s.p="",s(s.s=20)})([(function(e,n){var s={};e.exports=s,(function(){s._baseDelta=1e3/60,s._nextId=0,s._seed=0,s._nowStartTime=+new Date,s._warnedOnce={},s._decomp=null,s.extend=function(a,o){var c,u;typeof o=="boolean"?(c=2,u=o):(c=1,u=!0);for(var h=c;h<arguments.length;h++){var d=arguments[h];if(d)for(var f in d)u&&d[f]&&d[f].constructor===Object&&(!a[f]||a[f].constructor===Object)?(a[f]=a[f]||{},s.extend(a[f],u,d[f])):a[f]=d[f]}return a},s.clone=function(a,o){return s.extend({},o,a)},s.keys=function(a){if(Object.keys)return Object.keys(a);var o=[];for(var c in a)o.push(c);return o},s.values=function(a){var o=[];if(Object.keys){for(var c=Object.keys(a),u=0;u<c.length;u++)o.push(a[c[u]]);return o}for(var h in a)o.push(a[h]);return o},s.get=function(a,o,c,u){o=o.split(".").slice(c,u);for(var h=0;h<o.length;h+=1)a=a[o[h]];return a},s.set=function(a,o,c,u,h){var d=o.split(".").slice(u,h);return s.get(a,o,0,-1)[d[d.length-1]]=c,c},s.shuffle=function(a){for(var o=a.length-1;o>0;o--){var c=Math.floor(s.random()*(o+1)),u=a[o];a[o]=a[c],a[c]=u}return a},s.choose=function(a){return a[Math.floor(s.random()*a.length)]},s.isElement=function(a){return typeof HTMLElement<"u"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},s.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},s.isFunction=function(a){return typeof a=="function"},s.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},s.isString=function(a){return toString.call(a)==="[object String]"},s.clamp=function(a,o,c){return a<o?o:a>c?c:a},s.sign=function(a){return a<0?-1:1},s.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-s._nowStartTime},s.random=function(a,o){return a=typeof a<"u"?a:0,o=typeof o<"u"?o:1,a+i()*(o-a)};var i=function(){return s._seed=(s._seed*9301+49297)%233280,s._seed/233280};s.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},s.logLevel=1,s.log=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.info=function(){console&&s.logLevel>0&&s.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warn=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");s._warnedOnce[a]||(s.warn(a),s._warnedOnce[a]=!0)},s.deprecated=function(a,o,c){a[o]=s.chain(function(){s.warnOnce("🔅 deprecated 🔅",c)},a[o])},s.nextId=function(){return s._nextId++},s.indexOf=function(a,o){if(a.indexOf)return a.indexOf(o);for(var c=0;c<a.length;c++)if(a[c]===o)return c;return-1},s.map=function(a,o){if(a.map)return a.map(o);for(var c=[],u=0;u<a.length;u+=1)c.push(o(a[u]));return c},s.topologicalSort=function(a){var o=[],c=[],u=[];for(var h in a)!c[h]&&!u[h]&&s._topologicalSort(h,c,u,a,o);return o},s._topologicalSort=function(a,o,c,u,h){var d=u[a]||[];c[a]=!0;for(var f=0;f<d.length;f+=1){var l=d[f];c[l]||o[l]||s._topologicalSort(l,o,c,u,h)}c[a]=!1,o[a]=!0,h.push(a)},s.chain=function(){for(var a=[],o=0;o<arguments.length;o+=1){var c=arguments[o];c._chained?a.push.apply(a,c._chained):a.push(c)}var u=function(){for(var h,d=new Array(arguments.length),f=0,l=arguments.length;f<l;f++)d[f]=arguments[f];for(f=0;f<a.length;f+=1){var m=a[f].apply(h,d);typeof m<"u"&&(h=m)}return h};return u._chained=a,u},s.chainPathBefore=function(a,o,c){return s.set(a,o,s.chain(c,s.get(a,o)))},s.chainPathAfter=function(a,o,c){return s.set(a,o,s.chain(s.get(a,o),c))},s.setDecomp=function(a){s._decomp=a},s.getDecomp=function(){var a=s._decomp;try{!a&&typeof window<"u"&&(a=window.decomp),!a&&typeof No<"u"&&(a=No.decomp)}catch{a=null}return a}})()}),(function(e,n){var s={};e.exports=s,(function(){s.create=function(i){var a={min:{x:0,y:0},max:{x:0,y:0}};return i&&s.update(a,i),a},s.update=function(i,a,o){i.min.x=1/0,i.max.x=-1/0,i.min.y=1/0,i.max.y=-1/0;for(var c=0;c<a.length;c++){var u=a[c];u.x>i.max.x&&(i.max.x=u.x),u.x<i.min.x&&(i.min.x=u.x),u.y>i.max.y&&(i.max.y=u.y),u.y<i.min.y&&(i.min.y=u.y)}o&&(o.x>0?i.max.x+=o.x:i.min.x+=o.x,o.y>0?i.max.y+=o.y:i.min.y+=o.y)},s.contains=function(i,a){return a.x>=i.min.x&&a.x<=i.max.x&&a.y>=i.min.y&&a.y<=i.max.y},s.overlaps=function(i,a){return i.min.x<=a.max.x&&i.max.x>=a.min.x&&i.max.y>=a.min.y&&i.min.y<=a.max.y},s.translate=function(i,a){i.min.x+=a.x,i.max.x+=a.x,i.min.y+=a.y,i.max.y+=a.y},s.shift=function(i,a){var o=i.max.x-i.min.x,c=i.max.y-i.min.y;i.min.x=a.x,i.max.x=a.x+o,i.min.y=a.y,i.max.y=a.y+c}})()}),(function(e,n){var s={};e.exports=s,(function(){s.create=function(i,a){return{x:i||0,y:a||0}},s.clone=function(i){return{x:i.x,y:i.y}},s.magnitude=function(i){return Math.sqrt(i.x*i.x+i.y*i.y)},s.magnitudeSquared=function(i){return i.x*i.x+i.y*i.y},s.rotate=function(i,a,o){var c=Math.cos(a),u=Math.sin(a);o||(o={});var h=i.x*c-i.y*u;return o.y=i.x*u+i.y*c,o.x=h,o},s.rotateAbout=function(i,a,o,c){var u=Math.cos(a),h=Math.sin(a);c||(c={});var d=o.x+((i.x-o.x)*u-(i.y-o.y)*h);return c.y=o.y+((i.x-o.x)*h+(i.y-o.y)*u),c.x=d,c},s.normalise=function(i){var a=s.magnitude(i);return a===0?{x:0,y:0}:{x:i.x/a,y:i.y/a}},s.dot=function(i,a){return i.x*a.x+i.y*a.y},s.cross=function(i,a){return i.x*a.y-i.y*a.x},s.cross3=function(i,a,o){return(a.x-i.x)*(o.y-i.y)-(a.y-i.y)*(o.x-i.x)},s.add=function(i,a,o){return o||(o={}),o.x=i.x+a.x,o.y=i.y+a.y,o},s.sub=function(i,a,o){return o||(o={}),o.x=i.x-a.x,o.y=i.y-a.y,o},s.mult=function(i,a){return{x:i.x*a,y:i.y*a}},s.div=function(i,a){return{x:i.x/a,y:i.y/a}},s.perp=function(i,a){return a=a===!0?-1:1,{x:a*-i.y,y:a*i.x}},s.neg=function(i){return{x:-i.x,y:-i.y}},s.angle=function(i,a){return Math.atan2(a.y-i.y,a.x-i.x)},s._temp=[s.create(),s.create(),s.create(),s.create(),s.create(),s.create()]})()}),(function(e,n,s){var i={};e.exports=i;var a=s(2),o=s(0);(function(){i.create=function(c,u){for(var h=[],d=0;d<c.length;d++){var f=c[d],l={x:f.x,y:f.y,index:d,body:u,isInternal:!1};h.push(l)}return h},i.fromPath=function(c,u){var h=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return c.replace(h,function(f,l,m){d.push({x:parseFloat(l),y:parseFloat(m)})}),i.create(d,u)},i.centre=function(c){for(var u=i.area(c,!0),h={x:0,y:0},d,f,l,m=0;m<c.length;m++)l=(m+1)%c.length,d=a.cross(c[m],c[l]),f=a.mult(a.add(c[m],c[l]),d),h=a.add(h,f);return a.div(h,6*u)},i.mean=function(c){for(var u={x:0,y:0},h=0;h<c.length;h++)u.x+=c[h].x,u.y+=c[h].y;return a.div(u,c.length)},i.area=function(c,u){for(var h=0,d=c.length-1,f=0;f<c.length;f++)h+=(c[d].x-c[f].x)*(c[d].y+c[f].y),d=f;return u?h/2:Math.abs(h)/2},i.inertia=function(c,u){for(var h=0,d=0,f=c,l,m,g=0;g<f.length;g++)m=(g+1)%f.length,l=Math.abs(a.cross(f[m],f[g])),h+=l*(a.dot(f[m],f[m])+a.dot(f[m],f[g])+a.dot(f[g],f[g])),d+=l;return u/6*(h/d)},i.translate=function(c,u,h){h=typeof h<"u"?h:1;var d=c.length,f=u.x*h,l=u.y*h,m;for(m=0;m<d;m++)c[m].x+=f,c[m].y+=l;return c},i.rotate=function(c,u,h){if(u!==0){var d=Math.cos(u),f=Math.sin(u),l=h.x,m=h.y,g=c.length,p,_,A,w;for(w=0;w<g;w++)p=c[w],_=p.x-l,A=p.y-m,p.x=l+(_*d-A*f),p.y=m+(_*f+A*d);return c}},i.contains=function(c,u){for(var h=u.x,d=u.y,f=c.length,l=c[f-1],m,g=0;g<f;g++){if(m=c[g],(h-l.x)*(m.y-l.y)+(d-l.y)*(l.x-m.x)>0)return!1;l=m}return!0},i.scale=function(c,u,h,d){if(u===1&&h===1)return c;d=d||i.centre(c);for(var f,l,m=0;m<c.length;m++)f=c[m],l=a.sub(f,d),c[m].x=d.x+l.x*u,c[m].y=d.y+l.y*h;return c},i.chamfer=function(c,u,h,d,f){typeof u=="number"?u=[u]:u=u||[8],h=typeof h<"u"?h:-1,d=d||2,f=f||14;for(var l=[],m=0;m<c.length;m++){var g=c[m-1>=0?m-1:c.length-1],p=c[m],_=c[(m+1)%c.length],A=u[m<u.length?m:u.length-1];if(A===0){l.push(p);continue}var w=a.normalise({x:p.y-g.y,y:g.x-p.x}),E=a.normalise({x:_.y-p.y,y:p.x-_.x}),x=Math.sqrt(2*Math.pow(A,2)),M=a.mult(o.clone(w),A),y=a.normalise(a.mult(a.add(w,E),.5)),T=a.sub(p,a.mult(y,x)),S=h;h===-1&&(S=Math.pow(A,.32)*1.75),S=o.clamp(S,d,f),S%2===1&&(S+=1);for(var v=Math.acos(a.dot(w,E)),b=v/S,P=0;P<S;P++)l.push(a.add(a.rotate(M,b*P),T))}return l},i.clockwiseSort=function(c){var u=i.mean(c);return c.sort(function(h,d){return a.angle(u,h)-a.angle(u,d)}),c},i.isConvex=function(c){var u=0,h=c.length,d,f,l,m;if(h<3)return null;for(d=0;d<h;d++)if(f=(d+1)%h,l=(d+2)%h,m=(c[f].x-c[d].x)*(c[l].y-c[f].y),m-=(c[f].y-c[d].y)*(c[l].x-c[f].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},i.hull=function(c){var u=[],h=[],d,f;for(c=c.slice(0),c.sort(function(l,m){var g=l.x-m.x;return g!==0?g:l.y-m.y}),f=0;f<c.length;f+=1){for(d=c[f];h.length>=2&&a.cross3(h[h.length-2],h[h.length-1],d)<=0;)h.pop();h.push(d)}for(f=c.length-1;f>=0;f-=1){for(d=c[f];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],d)<=0;)u.pop();u.push(d)}return u.pop(),h.pop(),u.concat(h)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(2),c=s(7),u=s(0),h=s(1),d=s(11);(function(){i._timeCorrection=!0,i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i._baseDelta=1e3/60,i.create=function(l){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},g=u.extend(m,l);return f(g,l),g},i.nextGroup=function(l){return l?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var f=function(l,m){m=m||{},i.set(l,{bounds:l.bounds||h.create(l.vertices),positionPrev:l.positionPrev||o.clone(l.position),anglePrev:l.anglePrev||l.angle,vertices:l.vertices,parts:l.parts||[l],isStatic:l.isStatic,isSleeping:l.isSleeping,parent:l.parent||l}),a.rotate(l.vertices,l.angle,l.position),d.rotate(l.axes,l.angle),h.update(l.bounds,l.vertices,l.velocity),i.set(l,{axes:m.axes||l.axes,area:m.area||l.area,mass:m.mass||l.mass,inertia:m.inertia||l.inertia});var g=l.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),p=l.isStatic?"#555":"#ccc",_=l.isStatic&&l.render.fillStyle===null?1:0;l.render.fillStyle=l.render.fillStyle||g,l.render.strokeStyle=l.render.strokeStyle||p,l.render.lineWidth=l.render.lineWidth||_,l.render.sprite.xOffset+=-(l.bounds.min.x-l.position.x)/(l.bounds.max.x-l.bounds.min.x),l.render.sprite.yOffset+=-(l.bounds.min.y-l.position.y)/(l.bounds.max.y-l.bounds.min.y)};i.set=function(l,m,g){var p;typeof m=="string"&&(p=m,m={},m[p]=g);for(p in m)if(Object.prototype.hasOwnProperty.call(m,p))switch(g=m[p],p){case"isStatic":i.setStatic(l,g);break;case"isSleeping":c.set(l,g);break;case"mass":i.setMass(l,g);break;case"density":i.setDensity(l,g);break;case"inertia":i.setInertia(l,g);break;case"vertices":i.setVertices(l,g);break;case"position":i.setPosition(l,g);break;case"angle":i.setAngle(l,g);break;case"velocity":i.setVelocity(l,g);break;case"angularVelocity":i.setAngularVelocity(l,g);break;case"speed":i.setSpeed(l,g);break;case"angularSpeed":i.setAngularSpeed(l,g);break;case"parts":i.setParts(l,g);break;case"centre":i.setCentre(l,g);break;default:l[p]=g}},i.setStatic=function(l,m){for(var g=0;g<l.parts.length;g++){var p=l.parts[g];m?(p.isStatic||(p._original={restitution:p.restitution,friction:p.friction,mass:p.mass,inertia:p.inertia,density:p.density,inverseMass:p.inverseMass,inverseInertia:p.inverseInertia}),p.restitution=0,p.friction=1,p.mass=p.inertia=p.density=1/0,p.inverseMass=p.inverseInertia=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.angularVelocity=0,p.speed=0,p.angularSpeed=0,p.motion=0):p._original&&(p.restitution=p._original.restitution,p.friction=p._original.friction,p.mass=p._original.mass,p.inertia=p._original.inertia,p.density=p._original.density,p.inverseMass=p._original.inverseMass,p.inverseInertia=p._original.inverseInertia,p._original=null),p.isStatic=m}},i.setMass=function(l,m){var g=l.inertia/(l.mass/6);l.inertia=g*(m/6),l.inverseInertia=1/l.inertia,l.mass=m,l.inverseMass=1/l.mass,l.density=l.mass/l.area},i.setDensity=function(l,m){i.setMass(l,m*l.area),l.density=m},i.setInertia=function(l,m){l.inertia=m,l.inverseInertia=1/l.inertia},i.setVertices=function(l,m){m[0].body===l?l.vertices=m:l.vertices=a.create(m,l),l.axes=d.fromVertices(l.vertices),l.area=a.area(l.vertices),i.setMass(l,l.density*l.area);var g=a.centre(l.vertices);a.translate(l.vertices,g,-1),i.setInertia(l,i._inertiaScale*a.inertia(l.vertices,l.mass)),a.translate(l.vertices,l.position),h.update(l.bounds,l.vertices,l.velocity)},i.setParts=function(l,m,g){var p;for(m=m.slice(0),l.parts.length=0,l.parts.push(l),l.parent=l,p=0;p<m.length;p++){var _=m[p];_!==l&&(_.parent=l,l.parts.push(_))}if(l.parts.length!==1){if(g=typeof g<"u"?g:!0,g){var A=[];for(p=0;p<m.length;p++)A=A.concat(m[p].vertices);a.clockwiseSort(A);var w=a.hull(A),E=a.centre(w);i.setVertices(l,w),a.translate(l.vertices,E)}var x=i._totalProperties(l);l.area=x.area,l.parent=l,l.position.x=x.centre.x,l.position.y=x.centre.y,l.positionPrev.x=x.centre.x,l.positionPrev.y=x.centre.y,i.setMass(l,x.mass),i.setInertia(l,x.inertia),i.setPosition(l,x.centre)}},i.setCentre=function(l,m,g){g?(l.positionPrev.x+=m.x,l.positionPrev.y+=m.y,l.position.x+=m.x,l.position.y+=m.y):(l.positionPrev.x=m.x-(l.position.x-l.positionPrev.x),l.positionPrev.y=m.y-(l.position.y-l.positionPrev.y),l.position.x=m.x,l.position.y=m.y)},i.setPosition=function(l,m,g){var p=o.sub(m,l.position);g?(l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.velocity.x=p.x,l.velocity.y=p.y,l.speed=o.magnitude(p)):(l.positionPrev.x+=p.x,l.positionPrev.y+=p.y);for(var _=0;_<l.parts.length;_++){var A=l.parts[_];A.position.x+=p.x,A.position.y+=p.y,a.translate(A.vertices,p),h.update(A.bounds,A.vertices,l.velocity)}},i.setAngle=function(l,m,g){var p=m-l.angle;g?(l.anglePrev=l.angle,l.angularVelocity=p,l.angularSpeed=Math.abs(p)):l.anglePrev+=p;for(var _=0;_<l.parts.length;_++){var A=l.parts[_];A.angle+=p,a.rotate(A.vertices,p,l.position),d.rotate(A.axes,p),h.update(A.bounds,A.vertices,l.velocity),_>0&&o.rotateAbout(A.position,p,l.position,A.position)}},i.setVelocity=function(l,m){var g=l.deltaTime/i._baseDelta;l.positionPrev.x=l.position.x-m.x*g,l.positionPrev.y=l.position.y-m.y*g,l.velocity.x=(l.position.x-l.positionPrev.x)/g,l.velocity.y=(l.position.y-l.positionPrev.y)/g,l.speed=o.magnitude(l.velocity)},i.getVelocity=function(l){var m=i._baseDelta/l.deltaTime;return{x:(l.position.x-l.positionPrev.x)*m,y:(l.position.y-l.positionPrev.y)*m}},i.getSpeed=function(l){return o.magnitude(i.getVelocity(l))},i.setSpeed=function(l,m){i.setVelocity(l,o.mult(o.normalise(i.getVelocity(l)),m))},i.setAngularVelocity=function(l,m){var g=l.deltaTime/i._baseDelta;l.anglePrev=l.angle-m*g,l.angularVelocity=(l.angle-l.anglePrev)/g,l.angularSpeed=Math.abs(l.angularVelocity)},i.getAngularVelocity=function(l){return(l.angle-l.anglePrev)*i._baseDelta/l.deltaTime},i.getAngularSpeed=function(l){return Math.abs(i.getAngularVelocity(l))},i.setAngularSpeed=function(l,m){i.setAngularVelocity(l,u.sign(i.getAngularVelocity(l))*m)},i.translate=function(l,m,g){i.setPosition(l,o.add(l.position,m),g)},i.rotate=function(l,m,g,p){if(!g)i.setAngle(l,l.angle+m,p);else{var _=Math.cos(m),A=Math.sin(m),w=l.position.x-g.x,E=l.position.y-g.y;i.setPosition(l,{x:g.x+(w*_-E*A),y:g.y+(w*A+E*_)},p),i.setAngle(l,l.angle+m,p)}},i.scale=function(l,m,g,p){var _=0,A=0;p=p||l.position;for(var w=0;w<l.parts.length;w++){var E=l.parts[w];a.scale(E.vertices,m,g,p),E.axes=d.fromVertices(E.vertices),E.area=a.area(E.vertices),i.setMass(E,l.density*E.area),a.translate(E.vertices,{x:-E.position.x,y:-E.position.y}),i.setInertia(E,i._inertiaScale*a.inertia(E.vertices,E.mass)),a.translate(E.vertices,{x:E.position.x,y:E.position.y}),w>0&&(_+=E.area,A+=E.inertia),E.position.x=p.x+(E.position.x-p.x)*m,E.position.y=p.y+(E.position.y-p.y)*g,h.update(E.bounds,E.vertices,l.velocity)}l.parts.length>1&&(l.area=_,l.isStatic||(i.setMass(l,l.density*_),i.setInertia(l,A))),l.circleRadius&&(m===g?l.circleRadius*=m:l.circleRadius=null)},i.update=function(l,m){m=(typeof m<"u"?m:1e3/60)*l.timeScale;var g=m*m,p=i._timeCorrection?m/(l.deltaTime||m):1,_=1-l.frictionAir*(m/u._baseDelta),A=(l.position.x-l.positionPrev.x)*p,w=(l.position.y-l.positionPrev.y)*p;l.velocity.x=A*_+l.force.x/l.mass*g,l.velocity.y=w*_+l.force.y/l.mass*g,l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.position.x+=l.velocity.x,l.position.y+=l.velocity.y,l.deltaTime=m,l.angularVelocity=(l.angle-l.anglePrev)*_*p+l.torque/l.inertia*g,l.anglePrev=l.angle,l.angle+=l.angularVelocity;for(var E=0;E<l.parts.length;E++){var x=l.parts[E];a.translate(x.vertices,l.velocity),E>0&&(x.position.x+=l.velocity.x,x.position.y+=l.velocity.y),l.angularVelocity!==0&&(a.rotate(x.vertices,l.angularVelocity,l.position),d.rotate(x.axes,l.angularVelocity),E>0&&o.rotateAbout(x.position,l.angularVelocity,l.position,x.position)),h.update(x.bounds,x.vertices,l.velocity)}},i.updateVelocities=function(l){var m=i._baseDelta/l.deltaTime,g=l.velocity;g.x=(l.position.x-l.positionPrev.x)*m,g.y=(l.position.y-l.positionPrev.y)*m,l.speed=Math.sqrt(g.x*g.x+g.y*g.y),l.angularVelocity=(l.angle-l.anglePrev)*m,l.angularSpeed=Math.abs(l.angularVelocity)},i.applyForce=function(l,m,g){var p={x:m.x-l.position.x,y:m.y-l.position.y};l.force.x+=g.x,l.force.y+=g.y,l.torque+=p.x*g.y-p.y*g.x},i._totalProperties=function(l){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},g=l.parts.length===1?0:1;g<l.parts.length;g++){var p=l.parts[g],_=p.mass!==1/0?p.mass:1;m.mass+=_,m.area+=p.area,m.inertia+=p.inertia,m.centre=o.add(m.centre,o.mult(p.position,_))}return m.centre=o.div(m.centre,m.mass),m}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0);(function(){i.on=function(o,c,u){for(var h=c.split(" "),d,f=0;f<h.length;f++)d=h[f],o.events=o.events||{},o.events[d]=o.events[d]||[],o.events[d].push(u);return u},i.off=function(o,c,u){if(!c){o.events={};return}typeof c=="function"&&(u=c,c=a.keys(o.events).join(" "));for(var h=c.split(" "),d=0;d<h.length;d++){var f=o.events[h[d]],l=[];if(u&&f)for(var m=0;m<f.length;m++)f[m]!==u&&l.push(f[m]);o.events[h[d]]=l}},i.trigger=function(o,c,u){var h,d,f,l,m=o.events;if(m&&a.keys(m).length>0){u||(u={}),h=c.split(" ");for(var g=0;g<h.length;g++)if(d=h[g],f=m[d],f){l=a.clone(u,!1),l.name=d,l.source=o;for(var p=0;p<f.length;p++)f[p].apply(o,[l])}}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(5),o=s(0),c=s(1),u=s(4);(function(){i.create=function(h){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},h)},i.setModified=function(h,d,f,l){if(h.isModified=d,d&&h.cache&&(h.cache.allBodies=null,h.cache.allConstraints=null,h.cache.allComposites=null),f&&h.parent&&i.setModified(h.parent,d,f,l),l)for(var m=0;m<h.composites.length;m++){var g=h.composites[m];i.setModified(g,d,f,l)}},i.add=function(h,d){var f=[].concat(d);a.trigger(h,"beforeAdd",{object:d});for(var l=0;l<f.length;l++){var m=f[l];switch(m.type){case"body":if(m.parent!==m){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(h,m);break;case"constraint":i.addConstraint(h,m);break;case"composite":i.addComposite(h,m);break;case"mouseConstraint":i.addConstraint(h,m.constraint);break}}return a.trigger(h,"afterAdd",{object:d}),h},i.remove=function(h,d,f){var l=[].concat(d);a.trigger(h,"beforeRemove",{object:d});for(var m=0;m<l.length;m++){var g=l[m];switch(g.type){case"body":i.removeBody(h,g,f);break;case"constraint":i.removeConstraint(h,g,f);break;case"composite":i.removeComposite(h,g,f);break;case"mouseConstraint":i.removeConstraint(h,g.constraint);break}}return a.trigger(h,"afterRemove",{object:d}),h},i.addComposite=function(h,d){return h.composites.push(d),d.parent=h,i.setModified(h,!0,!0,!1),h},i.removeComposite=function(h,d,f){var l=o.indexOf(h.composites,d);if(l!==-1){var m=i.allBodies(d);i.removeCompositeAt(h,l);for(var g=0;g<m.length;g++)m[g].sleepCounter=0}if(f)for(var g=0;g<h.composites.length;g++)i.removeComposite(h.composites[g],d,!0);return h},i.removeCompositeAt=function(h,d){return h.composites.splice(d,1),i.setModified(h,!0,!0,!1),h},i.addBody=function(h,d){return h.bodies.push(d),i.setModified(h,!0,!0,!1),h},i.removeBody=function(h,d,f){var l=o.indexOf(h.bodies,d);if(l!==-1&&(i.removeBodyAt(h,l),d.sleepCounter=0),f)for(var m=0;m<h.composites.length;m++)i.removeBody(h.composites[m],d,!0);return h},i.removeBodyAt=function(h,d){return h.bodies.splice(d,1),i.setModified(h,!0,!0,!1),h},i.addConstraint=function(h,d){return h.constraints.push(d),i.setModified(h,!0,!0,!1),h},i.removeConstraint=function(h,d,f){var l=o.indexOf(h.constraints,d);if(l!==-1&&i.removeConstraintAt(h,l),f)for(var m=0;m<h.composites.length;m++)i.removeConstraint(h.composites[m],d,!0);return h},i.removeConstraintAt=function(h,d){return h.constraints.splice(d,1),i.setModified(h,!0,!0,!1),h},i.clear=function(h,d,f){if(f)for(var l=0;l<h.composites.length;l++)i.clear(h.composites[l],d,!0);return d?h.bodies=h.bodies.filter(function(m){return m.isStatic}):h.bodies.length=0,h.constraints.length=0,h.composites.length=0,i.setModified(h,!0,!0,!1),h},i.allBodies=function(h){if(h.cache&&h.cache.allBodies)return h.cache.allBodies;for(var d=[].concat(h.bodies),f=0;f<h.composites.length;f++)d=d.concat(i.allBodies(h.composites[f]));return h.cache&&(h.cache.allBodies=d),d},i.allConstraints=function(h){if(h.cache&&h.cache.allConstraints)return h.cache.allConstraints;for(var d=[].concat(h.constraints),f=0;f<h.composites.length;f++)d=d.concat(i.allConstraints(h.composites[f]));return h.cache&&(h.cache.allConstraints=d),d},i.allComposites=function(h){if(h.cache&&h.cache.allComposites)return h.cache.allComposites;for(var d=[].concat(h.composites),f=0;f<h.composites.length;f++)d=d.concat(i.allComposites(h.composites[f]));return h.cache&&(h.cache.allComposites=d),d},i.get=function(h,d,f){var l,m;switch(f){case"body":l=i.allBodies(h);break;case"constraint":l=i.allConstraints(h);break;case"composite":l=i.allComposites(h).concat(h);break}return l?(m=l.filter(function(g){return g.id.toString()===d.toString()}),m.length===0?null:m[0]):null},i.move=function(h,d,f){return i.remove(h,d),i.add(f,d),h},i.rebase=function(h){for(var d=i.allBodies(h).concat(i.allConstraints(h)).concat(i.allComposites(h)),f=0;f<d.length;f++)d[f].id=o.nextId();return h},i.translate=function(h,d,f){for(var l=f?i.allBodies(h):h.bodies,m=0;m<l.length;m++)u.translate(l[m],d);return h},i.rotate=function(h,d,f,l){for(var m=Math.cos(d),g=Math.sin(d),p=l?i.allBodies(h):h.bodies,_=0;_<p.length;_++){var A=p[_],w=A.position.x-f.x,E=A.position.y-f.y;u.setPosition(A,{x:f.x+(w*m-E*g),y:f.y+(w*g+E*m)}),u.rotate(A,d)}return h},i.scale=function(h,d,f,l,m){for(var g=m?i.allBodies(h):h.bodies,p=0;p<g.length;p++){var _=g[p],A=_.position.x-l.x,w=_.position.y-l.y;u.setPosition(_,{x:l.x+A*d,y:l.y+w*f}),u.scale(_,d,f)}return h},i.bounds=function(h){for(var d=i.allBodies(h),f=[],l=0;l<d.length;l+=1){var m=d[l];f.push(m.bounds.min,m.bounds.max)}return c.create(f)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(4),o=s(5),c=s(0);(function(){i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(u,h){for(var d=h/c._baseDelta,f=i._motionSleepThreshold,l=0;l<u.length;l++){var m=u[l],g=a.getSpeed(m),p=a.getAngularSpeed(m),_=g*g+p*p;if(m.force.x!==0||m.force.y!==0){i.set(m,!1);continue}var A=Math.min(m.motion,_),w=Math.max(m.motion,_);m.motion=i._minBias*A+(1-i._minBias)*w,m.sleepThreshold>0&&m.motion<f?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/d&&i.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},i.afterCollisions=function(u){for(var h=i._motionSleepThreshold,d=0;d<u.length;d++){var f=u[d];if(f.isActive){var l=f.collision,m=l.bodyA.parent,g=l.bodyB.parent;if(!(m.isSleeping&&g.isSleeping||m.isStatic||g.isStatic)&&(m.isSleeping||g.isSleeping)){var p=m.isSleeping&&!m.isStatic?m:g,_=p===m?g:m;!p.isStatic&&_.motion>h&&i.set(p,!1)}}}},i.set=function(u,h){var d=u.isSleeping;h?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,d||o.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,d&&o.trigger(u,"sleepEnd"))}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(9);(function(){var c=[],u={overlap:0,axis:null},h={overlap:0,axis:null};i.create=function(d,f){return{pair:null,collided:!1,bodyA:d,bodyB:f,parentA:d.parent,parentB:f.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},i.collides=function(d,f,l){if(i._overlapAxes(u,d.vertices,f.vertices,d.axes),u.overlap<=0||(i._overlapAxes(h,f.vertices,d.vertices,f.axes),h.overlap<=0))return null;var m=l&&l.table[o.id(d,f)],g;m?g=m.collision:(g=i.create(d,f),g.collided=!0,g.bodyA=d.id<f.id?d:f,g.bodyB=d.id<f.id?f:d,g.parentA=g.bodyA.parent,g.parentB=g.bodyB.parent),d=g.bodyA,f=g.bodyB;var p;u.overlap<h.overlap?p=u:p=h;var _=g.normal,A=g.tangent,w=g.penetration,E=g.supports,x=p.overlap,M=p.axis,y=M.x,T=M.y,S=f.position.x-d.position.x,v=f.position.y-d.position.y;y*S+T*v>=0&&(y=-y,T=-T),_.x=y,_.y=T,A.x=-T,A.y=y,w.x=y*x,w.y=T*x,g.depth=x;var b=i._findSupports(d,f,_,1),P=0;if(a.contains(d.vertices,b[0])&&(E[P++]=b[0]),a.contains(d.vertices,b[1])&&(E[P++]=b[1]),P<2){var D=i._findSupports(f,d,_,-1);a.contains(f.vertices,D[0])&&(E[P++]=D[0]),P<2&&a.contains(f.vertices,D[1])&&(E[P++]=D[1])}return P===0&&(E[P++]=b[0]),g.supportCount=P,g},i._overlapAxes=function(d,f,l,m){var g=f.length,p=l.length,_=f[0].x,A=f[0].y,w=l[0].x,E=l[0].y,x=m.length,M=Number.MAX_VALUE,y=0,T,S,v,b,P,D;for(P=0;P<x;P++){var U=m[P],F=U.x,z=U.y,G=_*F+A*z,H=w*F+E*z,J=G,it=H;for(D=1;D<g;D+=1)b=f[D].x*F+f[D].y*z,b>J?J=b:b<G&&(G=b);for(D=1;D<p;D+=1)b=l[D].x*F+l[D].y*z,b>it?it=b:b<H&&(H=b);if(S=J-H,v=it-G,T=S<v?S:v,T<M&&(M=T,y=P,T<=0))break}d.axis=m[y],d.overlap=M},i._findSupports=function(d,f,l,m){var g=f.vertices,p=g.length,_=d.position.x,A=d.position.y,w=l.x*m,E=l.y*m,x=g[0],M=x,y=w*(_-M.x)+E*(A-M.y),T,S,v;for(v=1;v<p;v+=1)M=g[v],S=w*(_-M.x)+E*(A-M.y),S<y&&(y=S,x=M);return T=g[(p+x.index-1)%p],y=w*(_-T.x)+E*(A-T.y),M=g[(x.index+1)%p],w*(_-M.x)+E*(A-M.y)<y?(c[0]=x,c[1]=M,c):(c[0]=x,c[1]=T,c)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(16);(function(){i.create=function(o,c){var u=o.bodyA,h=o.bodyB,d={id:i.id(u,h),bodyA:u,bodyB:h,collision:o,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||h.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(d,o,c),d},i.update=function(o,c,u){var h=c.supports,d=c.supportCount,f=o.contacts,l=c.parentA,m=c.parentB;o.isActive=!0,o.timeUpdated=u,o.collision=c,o.separation=c.depth,o.inverseMass=l.inverseMass+m.inverseMass,o.friction=l.friction<m.friction?l.friction:m.friction,o.frictionStatic=l.frictionStatic>m.frictionStatic?l.frictionStatic:m.frictionStatic,o.restitution=l.restitution>m.restitution?l.restitution:m.restitution,o.slop=l.slop>m.slop?l.slop:m.slop,o.contactCount=d,c.pair=o;var g=h[0],p=f[0],_=h[1],A=f[1];(A.vertex===g||p.vertex===_)&&(f[1]=p,f[0]=p=A,A=f[1]),p.vertex=g,A.vertex=_},i.setActive=function(o,c,u){c?(o.isActive=!0,o.timeUpdated=u):(o.isActive=!1,o.contactCount=0)},i.id=function(o,c){return o.id<c.id?o.id.toString(36)+":"+c.id.toString(36):c.id.toString(36)+":"+o.id.toString(36)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(2),c=s(7),u=s(1),h=s(11),d=s(0);(function(){i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(f){var l=f;l.bodyA&&!l.pointA&&(l.pointA={x:0,y:0}),l.bodyB&&!l.pointB&&(l.pointB={x:0,y:0});var m=l.bodyA?o.add(l.bodyA.position,l.pointA):l.pointA,g=l.bodyB?o.add(l.bodyB.position,l.pointB):l.pointB,p=o.magnitude(o.sub(m,g));l.length=typeof l.length<"u"?l.length:p,l.id=l.id||d.nextId(),l.label=l.label||"Constraint",l.type="constraint",l.stiffness=l.stiffness||(l.length>0?1:.7),l.damping=l.damping||0,l.angularStiffness=l.angularStiffness||0,l.angleA=l.bodyA?l.bodyA.angle:l.angleA,l.angleB=l.bodyB?l.bodyB.angle:l.angleB,l.plugin={};var _={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return l.length===0&&l.stiffness>.1?(_.type="pin",_.anchors=!1):l.stiffness<.9&&(_.type="spring"),l.render=d.extend(_,l.render),l},i.preSolveAll=function(f){for(var l=0;l<f.length;l+=1){var m=f[l],g=m.constraintImpulse;m.isStatic||g.x===0&&g.y===0&&g.angle===0||(m.position.x+=g.x,m.position.y+=g.y,m.angle+=g.angle)}},i.solveAll=function(f,l){for(var m=d.clamp(l/d._baseDelta,0,1),g=0;g<f.length;g+=1){var p=f[g],_=!p.bodyA||p.bodyA&&p.bodyA.isStatic,A=!p.bodyB||p.bodyB&&p.bodyB.isStatic;(_||A)&&i.solve(f[g],m)}for(g=0;g<f.length;g+=1)p=f[g],_=!p.bodyA||p.bodyA&&p.bodyA.isStatic,A=!p.bodyB||p.bodyB&&p.bodyB.isStatic,!_&&!A&&i.solve(f[g],m)},i.solve=function(f,l){var m=f.bodyA,g=f.bodyB,p=f.pointA,_=f.pointB;if(!(!m&&!g)){m&&!m.isStatic&&(o.rotate(p,m.angle-f.angleA,p),f.angleA=m.angle),g&&!g.isStatic&&(o.rotate(_,g.angle-f.angleB,_),f.angleB=g.angle);var A=p,w=_;if(m&&(A=o.add(m.position,p)),g&&(w=o.add(g.position,_)),!(!A||!w)){var E=o.sub(A,w),x=o.magnitude(E);x<i._minLength&&(x=i._minLength);var M=(x-f.length)/x,y=f.stiffness>=1||f.length===0,T=y?f.stiffness*l:f.stiffness*l*l,S=f.damping*l,v=o.mult(E,M*T),b=(m?m.inverseMass:0)+(g?g.inverseMass:0),P=(m?m.inverseInertia:0)+(g?g.inverseInertia:0),D=b+P,U,F,z,G,H;if(S>0){var J=o.create();z=o.div(E,x),H=o.sub(g&&o.sub(g.position,g.positionPrev)||J,m&&o.sub(m.position,m.positionPrev)||J),G=o.dot(z,H)}m&&!m.isStatic&&(F=m.inverseMass/b,m.constraintImpulse.x-=v.x*F,m.constraintImpulse.y-=v.y*F,m.position.x-=v.x*F,m.position.y-=v.y*F,S>0&&(m.positionPrev.x-=S*z.x*G*F,m.positionPrev.y-=S*z.y*G*F),U=o.cross(p,v)/D*i._torqueDampen*m.inverseInertia*(1-f.angularStiffness),m.constraintImpulse.angle-=U,m.angle-=U),g&&!g.isStatic&&(F=g.inverseMass/b,g.constraintImpulse.x+=v.x*F,g.constraintImpulse.y+=v.y*F,g.position.x+=v.x*F,g.position.y+=v.y*F,S>0&&(g.positionPrev.x+=S*z.x*G*F,g.positionPrev.y+=S*z.y*G*F),U=o.cross(_,v)/D*i._torqueDampen*g.inverseInertia*(1-f.angularStiffness),g.constraintImpulse.angle+=U,g.angle+=U)}}},i.postSolveAll=function(f){for(var l=0;l<f.length;l++){var m=f[l],g=m.constraintImpulse;if(!(m.isStatic||g.x===0&&g.y===0&&g.angle===0)){c.set(m,!1);for(var p=0;p<m.parts.length;p++){var _=m.parts[p];a.translate(_.vertices,g),p>0&&(_.position.x+=g.x,_.position.y+=g.y),g.angle!==0&&(a.rotate(_.vertices,g.angle,m.position),h.rotate(_.axes,g.angle),p>0&&o.rotateAbout(_.position,g.angle,m.position,_.position)),u.update(_.bounds,_.vertices,m.velocity)}g.angle*=i._warming,g.x*=i._warming,g.y*=i._warming}}},i.pointAWorld=function(f){return{x:(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),y:(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0)}},i.pointBWorld=function(f){return{x:(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),y:(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0)}},i.currentLength=function(f){var l=(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),m=(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0),g=(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),p=(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0),_=l-g,A=m-p;return Math.sqrt(_*_+A*A)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(2),o=s(0);(function(){i.fromVertices=function(c){for(var u={},h=0;h<c.length;h++){var d=(h+1)%c.length,f=a.normalise({x:c[d].y-c[h].y,y:c[h].x-c[d].x}),l=f.y===0?1/0:f.x/f.y;l=l.toFixed(3).toString(),u[l]=f}return o.values(u)},i.rotate=function(c,u){if(u!==0)for(var h=Math.cos(u),d=Math.sin(u),f=0;f<c.length;f++){var l=c[f],m;m=l.x*h-l.y*d,l.y=l.x*d+l.y*h,l.x=m}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(0),c=s(4),u=s(1),h=s(2);(function(){i.rectangle=function(d,f,l,m,g){g=g||{};var p={label:"Rectangle Body",position:{x:d,y:f},vertices:a.fromPath("L 0 0 L "+l+" 0 L "+l+" "+m+" L 0 "+m)};if(g.chamfer){var _=g.chamfer;p.vertices=a.chamfer(p.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete g.chamfer}return c.create(o.extend({},p,g))},i.trapezoid=function(d,f,l,m,g,p){p=p||{},g>=1&&o.warn("Bodies.trapezoid: slope parameter must be < 1."),g*=.5;var _=(1-g*2)*l,A=l*g,w=A+_,E=w+A,x;g<.5?x="L 0 0 L "+A+" "+-m+" L "+w+" "+-m+" L "+E+" 0":x="L 0 0 L "+w+" "+-m+" L "+E+" 0";var M={label:"Trapezoid Body",position:{x:d,y:f},vertices:a.fromPath(x)};if(p.chamfer){var y=p.chamfer;M.vertices=a.chamfer(M.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete p.chamfer}return c.create(o.extend({},M,p))},i.circle=function(d,f,l,m,g){m=m||{};var p={label:"Circle Body",circleRadius:l};g=g||25;var _=Math.ceil(Math.max(10,Math.min(g,l)));return _%2===1&&(_+=1),i.polygon(d,f,_,l,o.extend({},p,m))},i.polygon=function(d,f,l,m,g){if(g=g||{},l<3)return i.circle(d,f,m,g);for(var p=2*Math.PI/l,_="",A=p*.5,w=0;w<l;w+=1){var E=A+w*p,x=Math.cos(E)*m,M=Math.sin(E)*m;_+="L "+x.toFixed(3)+" "+M.toFixed(3)+" "}var y={label:"Polygon Body",position:{x:d,y:f},vertices:a.fromPath(_)};if(g.chamfer){var T=g.chamfer;y.vertices=a.chamfer(y.vertices,T.radius,T.quality,T.qualityMin,T.qualityMax),delete g.chamfer}return c.create(o.extend({},y,g))},i.fromVertices=function(d,f,l,m,g,p,_,A){var w=o.getDecomp(),E,x,M,y,T,S,v,b,P,D,U;for(E=!!(w&&w.quickDecomp),m=m||{},M=[],g=typeof g<"u"?g:!1,p=typeof p<"u"?p:.01,_=typeof _<"u"?_:10,A=typeof A<"u"?A:.01,o.isArray(l[0])||(l=[l]),D=0;D<l.length;D+=1)if(S=l[D],y=a.isConvex(S),T=!y,T&&!E&&o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),y||!E)y?S=a.clockwiseSort(S):S=a.hull(S),M.push({position:{x:d,y:f},vertices:S});else{var F=S.map(function(Q){return[Q.x,Q.y]});w.makeCCW(F),p!==!1&&w.removeCollinearPoints(F,p),A!==!1&&w.removeDuplicatePoints&&w.removeDuplicatePoints(F,A);var z=w.quickDecomp(F);for(v=0;v<z.length;v++){var G=z[v],H=G.map(function(Q){return{x:Q[0],y:Q[1]}});_>0&&a.area(H)<_||M.push({position:a.centre(H),vertices:H})}}for(v=0;v<M.length;v++)M[v]=c.create(o.extend(M[v],m));if(g){var J=5;for(v=0;v<M.length;v++){var it=M[v];for(b=v+1;b<M.length;b++){var ct=M[b];if(u.overlaps(it.bounds,ct.bounds)){var Mt=it.vertices,Lt=ct.vertices;for(P=0;P<it.vertices.length;P++)for(U=0;U<ct.vertices.length;U++){var q=h.magnitudeSquared(h.sub(Mt[(P+1)%Mt.length],Lt[U])),tt=h.magnitudeSquared(h.sub(Mt[P],Lt[(U+1)%Lt.length]));q<J&&tt<J&&(Mt[P].isInternal=!0,Lt[U].isInternal=!0)}}}}}return M.length>1?(x=c.create(o.extend({parts:M.slice(0)},m)),c.setPosition(x,{x:d,y:f}),x):M[0]}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0),o=s(8);(function(){i.create=function(c){var u={bodies:[],collisions:[],pairs:null};return a.extend(u,c)},i.setBodies=function(c,u){c.bodies=u.slice(0)},i.clear=function(c){c.bodies=[],c.collisions=[]},i.collisions=function(c){var u=c.pairs,h=c.bodies,d=h.length,f=i.canCollide,l=o.collides,m=c.collisions,g=0,p,_;for(h.sort(i._compareBoundsX),p=0;p<d;p++){var A=h[p],w=A.bounds,E=A.bounds.max.x,x=A.bounds.max.y,M=A.bounds.min.y,y=A.isStatic||A.isSleeping,T=A.parts.length,S=T===1;for(_=p+1;_<d;_++){var v=h[_],b=v.bounds;if(b.min.x>E)break;if(!(x<b.min.y||M>b.max.y)&&!(y&&(v.isStatic||v.isSleeping))&&f(A.collisionFilter,v.collisionFilter)){var P=v.parts.length;if(S&&P===1){var D=l(A,v,u);D&&(m[g++]=D)}else for(var U=T>1?1:0,F=P>1?1:0,z=U;z<T;z++)for(var G=A.parts[z],w=G.bounds,H=F;H<P;H++){var J=v.parts[H],b=J.bounds;if(!(w.min.x>b.max.x||w.max.x<b.min.x||w.max.y<b.min.y||w.min.y>b.max.y)){var D=l(G,J,u);D&&(m[g++]=D)}}}}}return m.length!==g&&(m.length=g),m},i.canCollide=function(c,u){return c.group===u.group&&c.group!==0?c.group>0:(c.mask&u.category)!==0&&(u.mask&c.category)!==0},i._compareBoundsX=function(c,u){return c.bounds.min.x-u.bounds.min.x}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0);(function(){i.create=function(o){var c={};return o||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=o||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(u){var h=i._getRelativeMousePosition(u,c.element,c.pixelRatio),d=u.changedTouches;d&&(c.button=0,u.preventDefault()),c.absolute.x=h.x,c.absolute.y=h.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=u},c.mousedown=function(u){var h=i._getRelativeMousePosition(u,c.element,c.pixelRatio),d=u.changedTouches;d?(c.button=0,u.preventDefault()):c.button=u.button,c.absolute.x=h.x,c.absolute.y=h.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=u},c.mouseup=function(u){var h=i._getRelativeMousePosition(u,c.element,c.pixelRatio),d=u.changedTouches;d&&u.preventDefault(),c.button=-1,c.absolute.x=h.x,c.absolute.y=h.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=u},c.mousewheel=function(u){c.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),c.sourceEvents.mousewheel=u},i.setElement(c,c.element),c},i.setElement=function(o,c){o.element=c,c.addEventListener("mousemove",o.mousemove,{passive:!0}),c.addEventListener("mousedown",o.mousedown,{passive:!0}),c.addEventListener("mouseup",o.mouseup,{passive:!0}),c.addEventListener("wheel",o.mousewheel,{passive:!1}),c.addEventListener("touchmove",o.mousemove,{passive:!1}),c.addEventListener("touchstart",o.mousedown,{passive:!1}),c.addEventListener("touchend",o.mouseup,{passive:!1})},i.clearSourceEvents=function(o){o.sourceEvents.mousemove=null,o.sourceEvents.mousedown=null,o.sourceEvents.mouseup=null,o.sourceEvents.mousewheel=null,o.wheelDelta=0},i.setOffset=function(o,c){o.offset.x=c.x,o.offset.y=c.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},i.setScale=function(o,c){o.scale.x=c.x,o.scale.y=c.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},i._getRelativeMousePosition=function(o,c,u){var h=c.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,f=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,l=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,m=o.changedTouches,g,p;return m?(g=m[0].pageX-h.left-f,p=m[0].pageY-h.top-l):(g=o.pageX-h.left-f,p=o.pageY-h.top-l),{x:g/(c.clientWidth/(c.width||c.clientWidth)*u),y:p/(c.clientHeight/(c.height||c.clientHeight)*u)}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0);(function(){i._registry={},i.register=function(o){if(i.isPlugin(o)||a.warn("Plugin.register:",i.toString(o),"does not implement all required fields."),o.name in i._registry){var c=i._registry[o.name],u=i.versionParse(o.version).number,h=i.versionParse(c.version).number;u>h?(a.warn("Plugin.register:",i.toString(c),"was upgraded to",i.toString(o)),i._registry[o.name]=o):u<h?a.warn("Plugin.register:",i.toString(c),"can not be downgraded to",i.toString(o)):o!==c&&a.warn("Plugin.register:",i.toString(o),"is already registered to different plugin object")}else i._registry[o.name]=o;return o},i.resolve=function(o){return i._registry[i.dependencyParse(o).name]},i.toString=function(o){return typeof o=="string"?o:(o.name||"anonymous")+"@"+(o.version||o.range||"0.0.0")},i.isPlugin=function(o){return o&&o.name&&o.version&&o.install},i.isUsed=function(o,c){return o.used.indexOf(c)>-1},i.isFor=function(o,c){var u=o.for&&i.dependencyParse(o.for);return!o.for||c.name===u.name&&i.versionSatisfies(c.version,u.range)},i.use=function(o,c){if(o.uses=(o.uses||[]).concat(c||[]),o.uses.length===0){a.warn("Plugin.use:",i.toString(o),"does not specify any dependencies to install.");return}for(var u=i.dependencies(o),h=a.topologicalSort(u),d=[],f=0;f<h.length;f+=1)if(h[f]!==o.name){var l=i.resolve(h[f]);if(!l){d.push("❌ "+h[f]);continue}i.isUsed(o,l.name)||(i.isFor(l,o)||(a.warn("Plugin.use:",i.toString(l),"is for",l.for,"but installed on",i.toString(o)+"."),l._warned=!0),l.install?l.install(o):(a.warn("Plugin.use:",i.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(d.push("🔶 "+i.toString(l)),delete l._warned):d.push("✅ "+i.toString(l)),o.used.push(l.name))}d.length>0&&a.info(d.join("  "))},i.dependencies=function(o,c){var u=i.dependencyParse(o),h=u.name;if(c=c||{},!(h in c)){o=i.resolve(o)||o,c[h]=a.map(o.uses||[],function(f){i.isPlugin(f)&&i.register(f);var l=i.dependencyParse(f),m=i.resolve(f);return m&&!i.versionSatisfies(m.version,l.range)?(a.warn("Plugin.dependencies:",i.toString(m),"does not satisfy",i.toString(l),"used by",i.toString(u)+"."),m._warned=!0,o._warned=!0):m||(a.warn("Plugin.dependencies:",i.toString(f),"used by",i.toString(u),"could not be resolved."),o._warned=!0),l.name});for(var d=0;d<c[h].length;d+=1)i.dependencies(c[h][d],c);return c}},i.dependencyParse=function(o){if(a.isString(o)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(o)||a.warn("Plugin.dependencyParse:",o,"is not a valid dependency string."),{name:o.split("@")[0],range:o.split("@")[1]||"*"}}return{name:o.name,range:o.range||o.version}},i.versionParse=function(o){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(o)||a.warn("Plugin.versionParse:",o,"is not a valid version or range.");var u=c.exec(o),h=Number(u[4]),d=Number(u[5]),f=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:o,operator:u[1]||u[2]||"",major:h,minor:d,patch:f,parts:[h,d,f],prerelease:u[7],number:h*1e8+d*1e4+f}},i.versionSatisfies=function(o,c){c=c||"*";var u=i.versionParse(c),h=i.versionParse(o);if(u.isRange){if(u.operator==="*"||o==="*")return!0;if(u.operator===">")return h.number>u.number;if(u.operator===">=")return h.number>=u.number;if(u.operator==="~")return h.major===u.major&&h.minor===u.minor&&h.patch>=u.patch;if(u.operator==="^")return u.major>0?h.major===u.major&&h.number>=u.number:u.minor>0?h.minor===u.minor&&h.patch>=u.patch:h.patch===u.patch}return o===c||o==="*"}})()}),(function(e,n){var s={};e.exports=s,(function(){s.create=function(i){return{vertex:i,normalImpulse:0,tangentImpulse:0}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(7),o=s(18),c=s(13),u=s(19),h=s(5),d=s(6),f=s(10),l=s(0),m=s(4);(function(){i._deltaMax=1e3/60,i.create=function(g){g=g||{};var p={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},_=l.extend(p,g);return _.world=g.world||d.create({label:"World"}),_.pairs=g.pairs||u.create(),_.detector=g.detector||c.create(),_.detector.pairs=_.pairs,_.grid={buckets:[]},_.world.gravity=_.gravity,_.broadphase=_.grid,_.metrics={},_},i.update=function(g,p){var _=l.now(),A=g.world,w=g.detector,E=g.pairs,x=g.timing,M=x.timestamp,y;p>i._deltaMax&&l.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",i._deltaMax.toFixed(3),"ms."),p=typeof p<"u"?p:l._baseDelta,p*=x.timeScale,x.timestamp+=p,x.lastDelta=p;var T={timestamp:x.timestamp,delta:p};h.trigger(g,"beforeUpdate",T);var S=d.allBodies(A),v=d.allConstraints(A);for(A.isModified&&(c.setBodies(w,S),d.setModified(A,!1,!1,!0)),g.enableSleeping&&a.update(S,p),i._bodiesApplyGravity(S,g.gravity),p>0&&i._bodiesUpdate(S,p),h.trigger(g,"beforeSolve",T),f.preSolveAll(S),y=0;y<g.constraintIterations;y++)f.solveAll(v,p);f.postSolveAll(S);var b=c.collisions(w);u.update(E,b,M),g.enableSleeping&&a.afterCollisions(E.list),E.collisionStart.length>0&&h.trigger(g,"collisionStart",{pairs:E.collisionStart,timestamp:x.timestamp,delta:p});var P=l.clamp(20/g.positionIterations,0,1);for(o.preSolvePosition(E.list),y=0;y<g.positionIterations;y++)o.solvePosition(E.list,p,P);for(o.postSolvePosition(S),f.preSolveAll(S),y=0;y<g.constraintIterations;y++)f.solveAll(v,p);for(f.postSolveAll(S),o.preSolveVelocity(E.list),y=0;y<g.velocityIterations;y++)o.solveVelocity(E.list,p);return i._bodiesUpdateVelocities(S),E.collisionActive.length>0&&h.trigger(g,"collisionActive",{pairs:E.collisionActive,timestamp:x.timestamp,delta:p}),E.collisionEnd.length>0&&h.trigger(g,"collisionEnd",{pairs:E.collisionEnd,timestamp:x.timestamp,delta:p}),i._bodiesClearForces(S),h.trigger(g,"afterUpdate",T),g.timing.lastElapsed=l.now()-_,g},i.merge=function(g,p){if(l.extend(g,p),p.world){g.world=p.world,i.clear(g);for(var _=d.allBodies(g.world),A=0;A<_.length;A++){var w=_[A];a.set(w,!1),w.id=l.nextId()}}},i.clear=function(g){u.clear(g.pairs),c.clear(g.detector)},i._bodiesClearForces=function(g){for(var p=g.length,_=0;_<p;_++){var A=g[_];A.force.x=0,A.force.y=0,A.torque=0}},i._bodiesApplyGravity=function(g,p){var _=typeof p.scale<"u"?p.scale:.001,A=g.length;if(!(p.x===0&&p.y===0||_===0))for(var w=0;w<A;w++){var E=g[w];E.isStatic||E.isSleeping||(E.force.y+=E.mass*p.y*_,E.force.x+=E.mass*p.x*_)}},i._bodiesUpdate=function(g,p){for(var _=g.length,A=0;A<_;A++){var w=g[A];w.isStatic||w.isSleeping||m.update(w,p)}},i._bodiesUpdateVelocities=function(g){for(var p=g.length,_=0;_<p;_++)m.updateVelocities(g[_])}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(0),c=s(1);(function(){i._restingThresh=2,i._restingThreshTangent=Math.sqrt(6),i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i._frictionMaxStatic=Number.MAX_VALUE,i.preSolvePosition=function(u){var h,d,f,l=u.length;for(h=0;h<l;h++)d=u[h],d.isActive&&(f=d.contactCount,d.collision.parentA.totalContacts+=f,d.collision.parentB.totalContacts+=f)},i.solvePosition=function(u,h,d){var f,l,m,g,p,_,A,w,E=i._positionDampen*(d||1),x=o.clamp(h/o._baseDelta,0,1),M=u.length;for(f=0;f<M;f++)l=u[f],!(!l.isActive||l.isSensor)&&(m=l.collision,g=m.parentA,p=m.parentB,_=m.normal,l.separation=m.depth+_.x*(p.positionImpulse.x-g.positionImpulse.x)+_.y*(p.positionImpulse.y-g.positionImpulse.y));for(f=0;f<M;f++)l=u[f],!(!l.isActive||l.isSensor)&&(m=l.collision,g=m.parentA,p=m.parentB,_=m.normal,w=l.separation-l.slop*x,(g.isStatic||p.isStatic)&&(w*=2),g.isStatic||g.isSleeping||(A=E/g.totalContacts,g.positionImpulse.x+=_.x*w*A,g.positionImpulse.y+=_.y*w*A),p.isStatic||p.isSleeping||(A=E/p.totalContacts,p.positionImpulse.x-=_.x*w*A,p.positionImpulse.y-=_.y*w*A))},i.postSolvePosition=function(u){for(var h=i._positionWarming,d=u.length,f=a.translate,l=c.update,m=0;m<d;m++){var g=u[m],p=g.positionImpulse,_=p.x,A=p.y,w=g.velocity;if(g.totalContacts=0,_!==0||A!==0){for(var E=0;E<g.parts.length;E++){var x=g.parts[E];f(x.vertices,p),l(x.bounds,x.vertices,w),x.position.x+=_,x.position.y+=A}g.positionPrev.x+=_,g.positionPrev.y+=A,_*w.x+A*w.y<0?(p.x=0,p.y=0):(p.x*=h,p.y*=h)}}},i.preSolveVelocity=function(u){var h=u.length,d,f;for(d=0;d<h;d++){var l=u[d];if(!(!l.isActive||l.isSensor)){var m=l.contacts,g=l.contactCount,p=l.collision,_=p.parentA,A=p.parentB,w=p.normal,E=p.tangent;for(f=0;f<g;f++){var x=m[f],M=x.vertex,y=x.normalImpulse,T=x.tangentImpulse;if(y!==0||T!==0){var S=w.x*y+E.x*T,v=w.y*y+E.y*T;_.isStatic||_.isSleeping||(_.positionPrev.x+=S*_.inverseMass,_.positionPrev.y+=v*_.inverseMass,_.anglePrev+=_.inverseInertia*((M.x-_.position.x)*v-(M.y-_.position.y)*S)),A.isStatic||A.isSleeping||(A.positionPrev.x-=S*A.inverseMass,A.positionPrev.y-=v*A.inverseMass,A.anglePrev-=A.inverseInertia*((M.x-A.position.x)*v-(M.y-A.position.y)*S))}}}}},i.solveVelocity=function(u,h){var d=h/o._baseDelta,f=d*d,l=f*d,m=-i._restingThresh*d,g=i._restingThreshTangent,p=i._frictionNormalMultiplier*d,_=i._frictionMaxStatic,A=u.length,w,E,x,M;for(x=0;x<A;x++){var y=u[x];if(!(!y.isActive||y.isSensor)){var T=y.collision,S=T.parentA,v=T.parentB,b=T.normal.x,P=T.normal.y,D=T.tangent.x,U=T.tangent.y,F=y.inverseMass,z=y.friction*y.frictionStatic*p,G=y.contacts,H=y.contactCount,J=1/H,it=S.position.x-S.positionPrev.x,ct=S.position.y-S.positionPrev.y,Mt=S.angle-S.anglePrev,Lt=v.position.x-v.positionPrev.x,q=v.position.y-v.positionPrev.y,tt=v.angle-v.anglePrev;for(M=0;M<H;M++){var Q=G[M],st=Q.vertex,dt=st.x-S.position.x,Tt=st.y-S.position.y,wt=st.x-v.position.x,Vt=st.y-v.position.y,bt=it-Tt*Mt,se=ct+dt*Mt,I=Lt-Vt*tt,Re=q+wt*tt,Ot=bt-I,Bt=se-Re,xt=b*Ot+P*Bt,zt=D*Ot+U*Bt,St=y.separation+xt,L=Math.min(St,1);L=St<0?0:L;var R=L*z;zt<-R||zt>R?(E=zt>0?zt:-zt,w=y.friction*(zt>0?1:-1)*l,w<-E?w=-E:w>E&&(w=E)):(w=zt,E=_);var k=dt*P-Tt*b,Z=wt*P-Vt*b,j=J/(F+S.inverseInertia*k*k+v.inverseInertia*Z*Z),$=(1+y.restitution)*xt*j;if(w*=j,xt<m)Q.normalImpulse=0;else{var vt=Q.normalImpulse;Q.normalImpulse+=$,Q.normalImpulse>0&&(Q.normalImpulse=0),$=Q.normalImpulse-vt}if(zt<-g||zt>g)Q.tangentImpulse=0;else{var at=Q.tangentImpulse;Q.tangentImpulse+=w,Q.tangentImpulse<-E&&(Q.tangentImpulse=-E),Q.tangentImpulse>E&&(Q.tangentImpulse=E),w=Q.tangentImpulse-at}var ut=b*$+D*w,Nt=P*$+U*w;S.isStatic||S.isSleeping||(S.positionPrev.x+=ut*S.inverseMass,S.positionPrev.y+=Nt*S.inverseMass,S.anglePrev+=(dt*Nt-Tt*ut)*S.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=ut*v.inverseMass,v.positionPrev.y-=Nt*v.inverseMass,v.anglePrev-=(wt*Nt-Vt*ut)*v.inverseInertia)}}}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(9),o=s(0);(function(){i.create=function(c){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},i.update=function(c,u,h){var d=a.update,f=a.create,l=a.setActive,m=c.table,g=c.list,p=g.length,_=p,A=c.collisionStart,w=c.collisionEnd,E=c.collisionActive,x=u.length,M=0,y=0,T=0,S,v,b;for(b=0;b<x;b++)S=u[b],v=S.pair,v?(v.isActive&&(E[T++]=v),d(v,S,h)):(v=f(S,h),m[v.id]=v,A[M++]=v,g[_++]=v);for(_=0,p=g.length,b=0;b<p;b++)v=g[b],v.timeUpdated>=h?g[_++]=v:(l(v,!1,h),v.collision.bodyA.sleepCounter>0&&v.collision.bodyB.sleepCounter>0?g[_++]=v:(w[y++]=v,delete m[v.id]));g.length!==_&&(g.length=_),A.length!==M&&(A.length=M),w.length!==y&&(w.length=y),E.length!==T&&(E.length=T)},i.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()}),(function(e,n,s){var i=e.exports=s(21);i.Axes=s(11),i.Bodies=s(12),i.Body=s(4),i.Bounds=s(1),i.Collision=s(8),i.Common=s(0),i.Composite=s(6),i.Composites=s(22),i.Constraint=s(10),i.Contact=s(16),i.Detector=s(13),i.Engine=s(17),i.Events=s(5),i.Grid=s(23),i.Mouse=s(14),i.MouseConstraint=s(24),i.Pair=s(9),i.Pairs=s(19),i.Plugin=s(15),i.Query=s(25),i.Render=s(26),i.Resolver=s(18),i.Runner=s(27),i.SAT=s(28),i.Sleeping=s(7),i.Svg=s(29),i.Vector=s(2),i.Vertices=s(3),i.World=s(30),i.Engine.run=i.Runner.run,i.Common.deprecated(i.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(e,n,s){var i={};e.exports=i;var a=s(15),o=s(0);(function(){i.name="matter-js",i.version="0.20.0",i.uses=[],i.used=[],i.use=function(){a.use(i,Array.prototype.slice.call(arguments))},i.before=function(c,u){return c=c.replace(/^Matter./,""),o.chainPathBefore(i,c,u)},i.after=function(c,u){return c=c.replace(/^Matter./,""),o.chainPathAfter(i,c,u)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(6),o=s(10),c=s(0),u=s(4),h=s(12),d=c.deprecated;(function(){i.stack=function(f,l,m,g,p,_,A){for(var w=a.create({label:"Stack"}),E=f,x=l,M,y=0,T=0;T<g;T++){for(var S=0,v=0;v<m;v++){var b=A(E,x,v,T,M,y);if(b){var P=b.bounds.max.y-b.bounds.min.y,D=b.bounds.max.x-b.bounds.min.x;P>S&&(S=P),u.translate(b,{x:D*.5,y:P*.5}),E=b.bounds.max.x+p,a.addBody(w,b),M=b,y+=1}else E+=p}x+=S+_,E=f}return w},i.chain=function(f,l,m,g,p,_){for(var A=f.bodies,w=1;w<A.length;w++){var E=A[w-1],x=A[w],M=E.bounds.max.y-E.bounds.min.y,y=E.bounds.max.x-E.bounds.min.x,T=x.bounds.max.y-x.bounds.min.y,S=x.bounds.max.x-x.bounds.min.x,v={bodyA:E,pointA:{x:y*l,y:M*m},bodyB:x,pointB:{x:S*g,y:T*p}},b=c.extend(v,_);a.addConstraint(f,o.create(b))}return f.label+=" Chain",f},i.mesh=function(f,l,m,g,p){var _=f.bodies,A,w,E,x,M;for(A=0;A<m;A++){for(w=1;w<l;w++)E=_[w-1+A*l],x=_[w+A*l],a.addConstraint(f,o.create(c.extend({bodyA:E,bodyB:x},p)));if(A>0)for(w=0;w<l;w++)E=_[w+(A-1)*l],x=_[w+A*l],a.addConstraint(f,o.create(c.extend({bodyA:E,bodyB:x},p))),g&&w>0&&(M=_[w-1+(A-1)*l],a.addConstraint(f,o.create(c.extend({bodyA:M,bodyB:x},p)))),g&&w<l-1&&(M=_[w+1+(A-1)*l],a.addConstraint(f,o.create(c.extend({bodyA:M,bodyB:x},p))))}return f.label+=" Mesh",f},i.pyramid=function(f,l,m,g,p,_,A){return i.stack(f,l,m,g,p,_,function(w,E,x,M,y,T){var S=Math.min(g,Math.ceil(m/2)),v=y?y.bounds.max.x-y.bounds.min.x:0;if(!(M>S)){M=S-M;var b=M,P=m-1-M;if(!(x<b||x>P)){T===1&&u.translate(y,{x:(x+(m%2===1?1:-1))*v,y:0});var D=y?x*v:0;return A(f+D+x*p,E,x,M,y,T)}}})},i.newtonsCradle=function(f,l,m,g,p){for(var _=a.create({label:"Newtons Cradle"}),A=0;A<m;A++){var w=1.9,E=h.circle(f+A*(g*w),l+p,g,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=o.create({pointA:{x:f+A*(g*w),y:l},bodyB:E});a.addBody(_,E),a.addConstraint(_,x)}return _},d(i,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),i.car=function(f,l,m,g,p){var _=u.nextGroup(!0),A=20,w=-m*.5+A,E=m*.5-A,x=0,M=a.create({label:"Car"}),y=h.rectangle(f,l,m,g,{collisionFilter:{group:_},chamfer:{radius:g*.5},density:2e-4}),T=h.circle(f+w,l+x,p,{collisionFilter:{group:_},friction:.8}),S=h.circle(f+E,l+x,p,{collisionFilter:{group:_},friction:.8}),v=o.create({bodyB:y,pointB:{x:w,y:x},bodyA:T,stiffness:1,length:0}),b=o.create({bodyB:y,pointB:{x:E,y:x},bodyA:S,stiffness:1,length:0});return a.addBody(M,y),a.addBody(M,T),a.addBody(M,S),a.addConstraint(M,v),a.addConstraint(M,b),M},d(i,"car","Composites.car ➤ moved to car example"),i.softBody=function(f,l,m,g,p,_,A,w,E,x){E=c.extend({inertia:1/0},E),x=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var M=i.stack(f,l,m,g,p,_,function(y,T){return h.circle(y,T,w,E)});return i.mesh(M,m,g,A,x),M.label="Soft Body",M},d(i,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(e,n,s){var i={};e.exports=i;var a=s(9),o=s(0),c=o.deprecated;(function(){i.create=function(u){var h={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(h,u)},i.update=function(u,h,d,f){var l,m,g,p=d.world,_=u.buckets,A,w,E=!1;for(l=0;l<h.length;l++){var x=h[l];if(!(x.isSleeping&&!f)&&!(p.bounds&&(x.bounds.max.x<p.bounds.min.x||x.bounds.min.x>p.bounds.max.x||x.bounds.max.y<p.bounds.min.y||x.bounds.min.y>p.bounds.max.y))){var M=i._getRegion(u,x);if(!x.region||M.id!==x.region.id||f){(!x.region||f)&&(x.region=M);var y=i._regionUnion(M,x.region);for(m=y.startCol;m<=y.endCol;m++)for(g=y.startRow;g<=y.endRow;g++){w=i._getBucketId(m,g),A=_[w];var T=m>=M.startCol&&m<=M.endCol&&g>=M.startRow&&g<=M.endRow,S=m>=x.region.startCol&&m<=x.region.endCol&&g>=x.region.startRow&&g<=x.region.endRow;!T&&S&&S&&A&&i._bucketRemoveBody(u,A,x),(x.region===M||T&&!S||f)&&(A||(A=i._createBucket(_,w)),i._bucketAddBody(u,A,x))}x.region=M,E=!0}}}E&&(u.pairsList=i._createActivePairsList(u))},c(i,"update","Grid.update ➤ replaced by Matter.Detector"),i.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},c(i,"clear","Grid.clear ➤ replaced by Matter.Detector"),i._regionUnion=function(u,h){var d=Math.min(u.startCol,h.startCol),f=Math.max(u.endCol,h.endCol),l=Math.min(u.startRow,h.startRow),m=Math.max(u.endRow,h.endRow);return i._createRegion(d,f,l,m)},i._getRegion=function(u,h){var d=h.bounds,f=Math.floor(d.min.x/u.bucketWidth),l=Math.floor(d.max.x/u.bucketWidth),m=Math.floor(d.min.y/u.bucketHeight),g=Math.floor(d.max.y/u.bucketHeight);return i._createRegion(f,l,m,g)},i._createRegion=function(u,h,d,f){return{id:u+","+h+","+d+","+f,startCol:u,endCol:h,startRow:d,endRow:f}},i._getBucketId=function(u,h){return"C"+u+"R"+h},i._createBucket=function(u,h){var d=u[h]=[];return d},i._bucketAddBody=function(u,h,d){var f=u.pairs,l=a.id,m=h.length,g;for(g=0;g<m;g++){var p=h[g];if(!(d.id===p.id||d.isStatic&&p.isStatic)){var _=l(d,p),A=f[_];A?A[2]+=1:f[_]=[d,p,1]}}h.push(d)},i._bucketRemoveBody=function(u,h,d){var f=u.pairs,l=a.id,m;h.splice(o.indexOf(h,d),1);var g=h.length;for(m=0;m<g;m++){var p=f[l(d,h[m])];p&&(p[2]-=1)}},i._createActivePairsList=function(u){var h,d=u.pairs,f=o.keys(d),l=f.length,m=[],g;for(g=0;g<l;g++)h=d[f[g]],h[2]>0?m.push(h):delete d[f[g]];return m}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(7),c=s(14),u=s(5),h=s(13),d=s(10),f=s(6),l=s(0),m=s(1);(function(){i.create=function(g,p){var _=(g?g.mouse:null)||(p?p.mouse:null);_||(g&&g.render&&g.render.canvas?_=c.create(g.render.canvas):p&&p.element?_=c.create(p.element):(_=c.create(),l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var A=d.create({label:"Mouse Constraint",pointA:_.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),w={type:"mouseConstraint",mouse:_,element:null,body:null,constraint:A,collisionFilter:{category:1,mask:4294967295,group:0}},E=l.extend(w,p);return u.on(g,"beforeUpdate",function(){var x=f.allBodies(g.world);i.update(E,x),i._triggerEvents(E)}),E},i.update=function(g,p){var _=g.mouse,A=g.constraint,w=g.body;if(_.button===0){if(A.bodyB)o.set(A.bodyB,!1),A.pointA=_.position;else for(var E=0;E<p.length;E++)if(w=p[E],m.contains(w.bounds,_.position)&&h.canCollide(w.collisionFilter,g.collisionFilter))for(var x=w.parts.length>1?1:0;x<w.parts.length;x++){var M=w.parts[x];if(a.contains(M.vertices,_.position)){A.pointA=_.position,A.bodyB=g.body=w,A.pointB={x:_.position.x-w.position.x,y:_.position.y-w.position.y},A.angleB=w.angle,o.set(w,!1),u.trigger(g,"startdrag",{mouse:_,body:w});break}}}else A.bodyB=g.body=null,A.pointB=null,w&&u.trigger(g,"enddrag",{mouse:_,body:w})},i._triggerEvents=function(g){var p=g.mouse,_=p.sourceEvents;_.mousemove&&u.trigger(g,"mousemove",{mouse:p}),_.mousedown&&u.trigger(g,"mousedown",{mouse:p}),_.mouseup&&u.trigger(g,"mouseup",{mouse:p}),c.clearSourceEvents(p)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(2),o=s(8),c=s(1),u=s(12),h=s(3);(function(){i.collides=function(d,f){for(var l=[],m=f.length,g=d.bounds,p=o.collides,_=c.overlaps,A=0;A<m;A++){var w=f[A],E=w.parts.length,x=E===1?0:1;if(_(w.bounds,g))for(var M=x;M<E;M++){var y=w.parts[M];if(_(y.bounds,g)){var T=p(y,d);if(T){l.push(T);break}}}}return l},i.ray=function(d,f,l,m){m=m||1e-100;for(var g=a.angle(f,l),p=a.magnitude(a.sub(f,l)),_=(l.x+f.x)*.5,A=(l.y+f.y)*.5,w=u.rectangle(_,A,p,m,{angle:g}),E=i.collides(w,d),x=0;x<E.length;x+=1){var M=E[x];M.body=M.bodyB=M.bodyA}return E},i.region=function(d,f,l){for(var m=[],g=0;g<d.length;g++){var p=d[g],_=c.overlaps(p.bounds,f);(_&&!l||!_&&l)&&m.push(p)}return m},i.point=function(d,f){for(var l=[],m=0;m<d.length;m++){var g=d[m];if(c.contains(g.bounds,f))for(var p=g.parts.length===1?0:1;p<g.parts.length;p++){var _=g.parts[p];if(c.contains(_.bounds,f)&&h.contains(_.vertices,f)){l.push(g);break}}}return l}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(4),o=s(0),c=s(6),u=s(1),h=s(5),d=s(2),f=s(14);(function(){var l,m;typeof window<"u"&&(l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(o.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i._goodFps=30,i._goodDelta=1e3/60,i.create=function(x){var M={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},y=o.extend(M,x);return y.canvas&&(y.canvas.width=y.options.width||y.canvas.width,y.canvas.height=y.options.height||y.canvas.height),y.mouse=x.mouse,y.engine=x.engine,y.canvas=y.canvas||_(y.options.width,y.options.height),y.context=y.canvas.getContext("2d"),y.textures={},y.bounds=y.bounds||{min:{x:0,y:0},max:{x:y.canvas.width,y:y.canvas.height}},y.controller=i,y.options.showBroadphase=!1,y.options.pixelRatio!==1&&i.setPixelRatio(y,y.options.pixelRatio),o.isElement(y.element)&&y.element.appendChild(y.canvas),y},i.run=function(x){(function M(y){x.frameRequestId=l(M),g(x,y),i.world(x,y),x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0),(x.options.showStats||x.options.showDebug)&&i.stats(x,x.context,y),(x.options.showPerformance||x.options.showDebug)&&i.performance(x,x.context,y),x.context.setTransform(1,0,0,1,0,0)})()},i.stop=function(x){m(x.frameRequestId)},i.setPixelRatio=function(x,M){var y=x.options,T=x.canvas;M==="auto"&&(M=A(T)),y.pixelRatio=M,T.setAttribute("data-pixel-ratio",M),T.width=y.width*M,T.height=y.height*M,T.style.width=y.width+"px",T.style.height=y.height+"px"},i.setSize=function(x,M,y){x.options.width=M,x.options.height=y,x.bounds.max.x=x.bounds.min.x+M,x.bounds.max.y=x.bounds.min.y+y,x.options.pixelRatio!==1?i.setPixelRatio(x,x.options.pixelRatio):(x.canvas.width=M,x.canvas.height=y)},i.lookAt=function(x,M,y,T){T=typeof T<"u"?T:!0,M=o.isArray(M)?M:[M],y=y||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},v=0;v<M.length;v+=1){var b=M[v],P=b.bounds?b.bounds.min:b.min||b.position||b,D=b.bounds?b.bounds.max:b.max||b.position||b;P&&D&&(P.x<S.min.x&&(S.min.x=P.x),D.x>S.max.x&&(S.max.x=D.x),P.y<S.min.y&&(S.min.y=P.y),D.y>S.max.y&&(S.max.y=D.y))}var U=S.max.x-S.min.x+2*y.x,F=S.max.y-S.min.y+2*y.y,z=x.canvas.height,G=x.canvas.width,H=G/z,J=U/F,it=1,ct=1;J>H?ct=J/H:it=H/J,x.options.hasBounds=!0,x.bounds.min.x=S.min.x,x.bounds.max.x=S.min.x+U*it,x.bounds.min.y=S.min.y,x.bounds.max.y=S.min.y+F*ct,T&&(x.bounds.min.x+=U*.5-U*it*.5,x.bounds.max.x+=U*.5-U*it*.5,x.bounds.min.y+=F*.5-F*ct*.5,x.bounds.max.y+=F*.5-F*ct*.5),x.bounds.min.x-=y.x,x.bounds.max.x-=y.x,x.bounds.min.y-=y.y,x.bounds.max.y-=y.y,x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),f.setOffset(x.mouse,x.bounds.min))},i.startViewTransform=function(x){var M=x.bounds.max.x-x.bounds.min.x,y=x.bounds.max.y-x.bounds.min.y,T=M/x.options.width,S=y/x.options.height;x.context.setTransform(x.options.pixelRatio/T,0,0,x.options.pixelRatio/S,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},i.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},i.world=function(x,M){var y=o.now(),T=x.engine,S=T.world,v=x.canvas,b=x.context,P=x.options,D=x.timing,U=c.allBodies(S),F=c.allConstraints(S),z=P.wireframes?P.wireframeBackground:P.background,G=[],H=[],J,it={timestamp:T.timing.timestamp};if(h.trigger(x,"beforeRender",it),x.currentBackground!==z&&E(x,z),b.globalCompositeOperation="source-in",b.fillStyle="transparent",b.fillRect(0,0,v.width,v.height),b.globalCompositeOperation="source-over",P.hasBounds){for(J=0;J<U.length;J++){var ct=U[J];u.overlaps(ct.bounds,x.bounds)&&G.push(ct)}for(J=0;J<F.length;J++){var Mt=F[J],Lt=Mt.bodyA,q=Mt.bodyB,tt=Mt.pointA,Q=Mt.pointB;Lt&&(tt=d.add(Lt.position,Mt.pointA)),q&&(Q=d.add(q.position,Mt.pointB)),!(!tt||!Q)&&(u.contains(x.bounds,tt)||u.contains(x.bounds,Q))&&H.push(Mt)}i.startViewTransform(x),x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),f.setOffset(x.mouse,x.bounds.min))}else H=F,G=U,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!P.wireframes||T.enableSleeping&&P.showSleeping?i.bodies(x,G,b):(P.showConvexHulls&&i.bodyConvexHulls(x,G,b),i.bodyWireframes(x,G,b)),P.showBounds&&i.bodyBounds(x,G,b),(P.showAxes||P.showAngleIndicator)&&i.bodyAxes(x,G,b),P.showPositions&&i.bodyPositions(x,G,b),P.showVelocity&&i.bodyVelocity(x,G,b),P.showIds&&i.bodyIds(x,G,b),P.showSeparations&&i.separations(x,T.pairs.list,b),P.showCollisions&&i.collisions(x,T.pairs.list,b),P.showVertexNumbers&&i.vertexNumbers(x,G,b),P.showMousePosition&&i.mousePosition(x,x.mouse,b),i.constraints(H,b),P.hasBounds&&i.endViewTransform(x),h.trigger(x,"afterRender",it),D.lastElapsed=o.now()-y},i.stats=function(x,M,y){for(var T=x.engine,S=T.world,v=c.allBodies(S),b=0,P=55,D=44,U=0,F=0,z=0;z<v.length;z+=1)b+=v[z].parts.length;var G={Part:b,Body:v.length,Cons:c.allConstraints(S).length,Comp:c.allComposites(S).length,Pair:T.pairs.list.length};M.fillStyle="#0e0f19",M.fillRect(U,F,P*5.5,D),M.font="12px Arial",M.textBaseline="top",M.textAlign="right";for(var H in G){var J=G[H];M.fillStyle="#aaa",M.fillText(H,U+P,F+8),M.fillStyle="#eee",M.fillText(J,U+P,F+26),U+=P}},i.performance=function(x,M){var y=x.engine,T=x.timing,S=T.deltaHistory,v=T.elapsedHistory,b=T.timestampElapsedHistory,P=T.engineDeltaHistory,D=T.engineUpdatesHistory,U=T.engineElapsedHistory,F=y.timing.lastUpdatesPerFrame,z=y.timing.lastDelta,G=p(S),H=p(v),J=p(P),it=p(D),ct=p(U),Mt=p(b),Lt=Mt/G||0,q=Math.round(G/z),tt=1e3/G||0,Q=4,st=12,dt=60,Tt=34,wt=10,Vt=69;M.fillStyle="#0e0f19",M.fillRect(0,50,st*5+dt*6+22,Tt),i.status(M,wt,Vt,dt,Q,S.length,Math.round(tt)+" fps",tt/i._goodFps,function(bt){return S[bt]/G-1}),i.status(M,wt+st+dt,Vt,dt,Q,P.length,z.toFixed(2)+" dt",i._goodDelta/z,function(bt){return P[bt]/J-1}),i.status(M,wt+(st+dt)*2,Vt,dt,Q,D.length,F+" upf",Math.pow(o.clamp(it/q||1,0,1),4),function(bt){return D[bt]/it-1}),i.status(M,wt+(st+dt)*3,Vt,dt,Q,U.length,ct.toFixed(2)+" ut",1-F*ct/i._goodFps,function(bt){return U[bt]/ct-1}),i.status(M,wt+(st+dt)*4,Vt,dt,Q,v.length,H.toFixed(2)+" rt",1-H/i._goodFps,function(bt){return v[bt]/H-1}),i.status(M,wt+(st+dt)*5,Vt,dt,Q,b.length,Lt.toFixed(2)+" x",Lt*Lt*Lt,function(bt){return(b[bt]/S[bt]/Lt||0)-1})},i.status=function(x,M,y,T,S,v,b,P,D){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(M,y+7,T,1),x.beginPath(),x.moveTo(M,y+7-S*o.clamp(.4*D(0),-2,2));for(var U=0;U<T;U+=1)x.lineTo(M+U,y+7-(U<v?S*o.clamp(.4*D(U),-2,2):0));x.stroke(),x.fillStyle="hsl("+o.clamp(25+95*P,0,120)+",100%,60%)",x.fillRect(M,y-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(b,M+T,y-5)},i.constraints=function(x,M){for(var y=M,T=0;T<x.length;T++){var S=x[T];if(!(!S.render.visible||!S.pointA||!S.pointB)){var v=S.bodyA,b=S.bodyB,P,D;if(v?P=d.add(v.position,S.pointA):P=S.pointA,S.render.type==="pin")y.beginPath(),y.arc(P.x,P.y,3,0,2*Math.PI),y.closePath();else{if(b?D=d.add(b.position,S.pointB):D=S.pointB,y.beginPath(),y.moveTo(P.x,P.y),S.render.type==="spring")for(var U=d.sub(D,P),F=d.perp(d.normalise(U)),z=Math.ceil(o.clamp(S.length/5,12,20)),G,H=1;H<z;H+=1)G=H%2===0?1:-1,y.lineTo(P.x+U.x*(H/z)+F.x*G*4,P.y+U.y*(H/z)+F.y*G*4);y.lineTo(D.x,D.y)}S.render.lineWidth&&(y.lineWidth=S.render.lineWidth,y.strokeStyle=S.render.strokeStyle,y.stroke()),S.render.anchors&&(y.fillStyle=S.render.strokeStyle,y.beginPath(),y.arc(P.x,P.y,3,0,2*Math.PI),y.arc(D.x,D.y,3,0,2*Math.PI),y.closePath(),y.fill())}}},i.bodies=function(x,M,y){var T=y;x.engine;var S=x.options,v=S.showInternalEdges||!S.wireframes,b,P,D,U;for(D=0;D<M.length;D++)if(b=M[D],!!b.render.visible){for(U=b.parts.length>1?1:0;U<b.parts.length;U++)if(P=b.parts[U],!!P.render.visible){if(S.showSleeping&&b.isSleeping?T.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(T.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!S.wireframes){var F=P.render.sprite,z=w(x,F.texture);T.translate(P.position.x,P.position.y),T.rotate(P.angle),T.drawImage(z,z.width*-F.xOffset*F.xScale,z.height*-F.yOffset*F.yScale,z.width*F.xScale,z.height*F.yScale),T.rotate(-P.angle),T.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)T.beginPath(),T.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{T.beginPath(),T.moveTo(P.vertices[0].x,P.vertices[0].y);for(var G=1;G<P.vertices.length;G++)!P.vertices[G-1].isInternal||v?T.lineTo(P.vertices[G].x,P.vertices[G].y):T.moveTo(P.vertices[G].x,P.vertices[G].y),P.vertices[G].isInternal&&!v&&T.moveTo(P.vertices[(G+1)%P.vertices.length].x,P.vertices[(G+1)%P.vertices.length].y);T.lineTo(P.vertices[0].x,P.vertices[0].y),T.closePath()}S.wireframes?(T.lineWidth=1,T.strokeStyle=x.options.wireframeStrokeStyle,T.stroke()):(T.fillStyle=P.render.fillStyle,P.render.lineWidth&&(T.lineWidth=P.render.lineWidth,T.strokeStyle=P.render.strokeStyle,T.stroke()),T.fill())}T.globalAlpha=1}}},i.bodyWireframes=function(x,M,y){var T=y,S=x.options.showInternalEdges,v,b,P,D,U;for(T.beginPath(),P=0;P<M.length;P++)if(v=M[P],!!v.render.visible)for(U=v.parts.length>1?1:0;U<v.parts.length;U++){for(b=v.parts[U],T.moveTo(b.vertices[0].x,b.vertices[0].y),D=1;D<b.vertices.length;D++)!b.vertices[D-1].isInternal||S?T.lineTo(b.vertices[D].x,b.vertices[D].y):T.moveTo(b.vertices[D].x,b.vertices[D].y),b.vertices[D].isInternal&&!S&&T.moveTo(b.vertices[(D+1)%b.vertices.length].x,b.vertices[(D+1)%b.vertices.length].y);T.lineTo(b.vertices[0].x,b.vertices[0].y)}T.lineWidth=1,T.strokeStyle=x.options.wireframeStrokeStyle,T.stroke()},i.bodyConvexHulls=function(x,M,y){var T=y,S,v,b;for(T.beginPath(),v=0;v<M.length;v++)if(S=M[v],!(!S.render.visible||S.parts.length===1)){for(T.moveTo(S.vertices[0].x,S.vertices[0].y),b=1;b<S.vertices.length;b++)T.lineTo(S.vertices[b].x,S.vertices[b].y);T.lineTo(S.vertices[0].x,S.vertices[0].y)}T.lineWidth=1,T.strokeStyle="rgba(255,255,255,0.2)",T.stroke()},i.vertexNumbers=function(x,M,y){var T=y,S,v,b;for(S=0;S<M.length;S++){var P=M[S].parts;for(b=P.length>1?1:0;b<P.length;b++){var D=P[b];for(v=0;v<D.vertices.length;v++)T.fillStyle="rgba(255,255,255,0.2)",T.fillText(S+"_"+v,D.position.x+(D.vertices[v].x-D.position.x)*.8,D.position.y+(D.vertices[v].y-D.position.y)*.8)}}},i.mousePosition=function(x,M,y){var T=y;T.fillStyle="rgba(255,255,255,0.8)",T.fillText(M.position.x+"  "+M.position.y,M.position.x+5,M.position.y-5)},i.bodyBounds=function(x,M,y){var T=y;x.engine;var S=x.options;T.beginPath();for(var v=0;v<M.length;v++){var b=M[v];if(b.render.visible)for(var P=M[v].parts,D=P.length>1?1:0;D<P.length;D++){var U=P[D];T.rect(U.bounds.min.x,U.bounds.min.y,U.bounds.max.x-U.bounds.min.x,U.bounds.max.y-U.bounds.min.y)}}S.wireframes?T.strokeStyle="rgba(255,255,255,0.08)":T.strokeStyle="rgba(0,0,0,0.1)",T.lineWidth=1,T.stroke()},i.bodyAxes=function(x,M,y){var T=y;x.engine;var S=x.options,v,b,P,D;for(T.beginPath(),b=0;b<M.length;b++){var U=M[b],F=U.parts;if(U.render.visible)if(S.showAxes)for(P=F.length>1?1:0;P<F.length;P++)for(v=F[P],D=0;D<v.axes.length;D++){var z=v.axes[D];T.moveTo(v.position.x,v.position.y),T.lineTo(v.position.x+z.x*20,v.position.y+z.y*20)}else for(P=F.length>1?1:0;P<F.length;P++)for(v=F[P],D=0;D<v.axes.length;D++)T.moveTo(v.position.x,v.position.y),T.lineTo((v.vertices[0].x+v.vertices[v.vertices.length-1].x)/2,(v.vertices[0].y+v.vertices[v.vertices.length-1].y)/2)}S.wireframes?(T.strokeStyle="indianred",T.lineWidth=1):(T.strokeStyle="rgba(255, 255, 255, 0.4)",T.globalCompositeOperation="overlay",T.lineWidth=2),T.stroke(),T.globalCompositeOperation="source-over"},i.bodyPositions=function(x,M,y){var T=y;x.engine;var S=x.options,v,b,P,D;for(T.beginPath(),P=0;P<M.length;P++)if(v=M[P],!!v.render.visible)for(D=0;D<v.parts.length;D++)b=v.parts[D],T.arc(b.position.x,b.position.y,3,0,2*Math.PI,!1),T.closePath();for(S.wireframes?T.fillStyle="indianred":T.fillStyle="rgba(0,0,0,0.5)",T.fill(),T.beginPath(),P=0;P<M.length;P++)v=M[P],v.render.visible&&(T.arc(v.positionPrev.x,v.positionPrev.y,2,0,2*Math.PI,!1),T.closePath());T.fillStyle="rgba(255,165,0,0.8)",T.fill()},i.bodyVelocity=function(x,M,y){var T=y;T.beginPath();for(var S=0;S<M.length;S++){var v=M[S];if(v.render.visible){var b=a.getVelocity(v);T.moveTo(v.position.x,v.position.y),T.lineTo(v.position.x+b.x,v.position.y+b.y)}}T.lineWidth=3,T.strokeStyle="cornflowerblue",T.stroke()},i.bodyIds=function(x,M,y){var T=y,S,v;for(S=0;S<M.length;S++)if(M[S].render.visible){var b=M[S].parts;for(v=b.length>1?1:0;v<b.length;v++){var P=b[v];T.font="12px Arial",T.fillStyle="rgba(255,255,255,0.5)",T.fillText(P.id,P.position.x+10,P.position.y-10)}}},i.collisions=function(x,M,y){var T=y,S=x.options,v,b,P,D;for(T.beginPath(),P=0;P<M.length;P++)if(v=M[P],!!v.isActive)for(b=v.collision,D=0;D<v.contactCount;D++){var U=v.contacts[D],F=U.vertex;T.rect(F.x-1.5,F.y-1.5,3.5,3.5)}for(S.wireframes?T.fillStyle="rgba(255,255,255,0.7)":T.fillStyle="orange",T.fill(),T.beginPath(),P=0;P<M.length;P++)if(v=M[P],!!v.isActive&&(b=v.collision,v.contactCount>0)){var z=v.contacts[0].vertex.x,G=v.contacts[0].vertex.y;v.contactCount===2&&(z=(v.contacts[0].vertex.x+v.contacts[1].vertex.x)/2,G=(v.contacts[0].vertex.y+v.contacts[1].vertex.y)/2),b.bodyB===b.supports[0].body||b.bodyA.isStatic===!0?T.moveTo(z-b.normal.x*8,G-b.normal.y*8):T.moveTo(z+b.normal.x*8,G+b.normal.y*8),T.lineTo(z,G)}S.wireframes?T.strokeStyle="rgba(255,165,0,0.7)":T.strokeStyle="orange",T.lineWidth=1,T.stroke()},i.separations=function(x,M,y){var T=y,S=x.options,v,b,P,D,U;for(T.beginPath(),U=0;U<M.length;U++)if(v=M[U],!!v.isActive){b=v.collision,P=b.bodyA,D=b.bodyB;var F=1;!D.isStatic&&!P.isStatic&&(F=.5),D.isStatic&&(F=0),T.moveTo(D.position.x,D.position.y),T.lineTo(D.position.x-b.penetration.x*F,D.position.y-b.penetration.y*F),F=1,!D.isStatic&&!P.isStatic&&(F=.5),P.isStatic&&(F=0),T.moveTo(P.position.x,P.position.y),T.lineTo(P.position.x+b.penetration.x*F,P.position.y+b.penetration.y*F)}S.wireframes?T.strokeStyle="rgba(255,165,0,0.5)":T.strokeStyle="orange",T.stroke()},i.inspector=function(x,M){x.engine;var y=x.selected,T=x.render,S=T.options,v;if(S.hasBounds){var b=T.bounds.max.x-T.bounds.min.x,P=T.bounds.max.y-T.bounds.min.y,D=b/T.options.width,U=P/T.options.height;M.scale(1/D,1/U),M.translate(-T.bounds.min.x,-T.bounds.min.y)}for(var F=0;F<y.length;F++){var z=y[F].data;switch(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.9)",M.setLineDash([1,2]),z.type){case"body":v=z.bounds,M.beginPath(),M.rect(Math.floor(v.min.x-3),Math.floor(v.min.y-3),Math.floor(v.max.x-v.min.x+6),Math.floor(v.max.y-v.min.y+6)),M.closePath(),M.stroke();break;case"constraint":var G=z.pointA;z.bodyA&&(G=z.pointB),M.beginPath(),M.arc(G.x,G.y,10,0,2*Math.PI),M.closePath(),M.stroke();break}M.setLineDash([]),M.translate(-.5,-.5)}x.selectStart!==null&&(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.6)",M.fillStyle="rgba(255,165,0,0.1)",v=x.selectBounds,M.beginPath(),M.rect(Math.floor(v.min.x),Math.floor(v.min.y),Math.floor(v.max.x-v.min.x),Math.floor(v.max.y-v.min.y)),M.closePath(),M.stroke(),M.fill(),M.translate(-.5,-.5)),S.hasBounds&&M.setTransform(1,0,0,1,0,0)};var g=function(x,M){var y=x.engine,T=x.timing,S=T.historySize,v=y.timing.timestamp;T.delta=M-T.lastTime||i._goodDelta,T.lastTime=M,T.timestampElapsed=v-T.lastTimestamp||0,T.lastTimestamp=v,T.deltaHistory.unshift(T.delta),T.deltaHistory.length=Math.min(T.deltaHistory.length,S),T.engineDeltaHistory.unshift(y.timing.lastDelta),T.engineDeltaHistory.length=Math.min(T.engineDeltaHistory.length,S),T.timestampElapsedHistory.unshift(T.timestampElapsed),T.timestampElapsedHistory.length=Math.min(T.timestampElapsedHistory.length,S),T.engineUpdatesHistory.unshift(y.timing.lastUpdatesPerFrame),T.engineUpdatesHistory.length=Math.min(T.engineUpdatesHistory.length,S),T.engineElapsedHistory.unshift(y.timing.lastElapsed),T.engineElapsedHistory.length=Math.min(T.engineElapsedHistory.length,S),T.elapsedHistory.unshift(T.lastElapsed),T.elapsedHistory.length=Math.min(T.elapsedHistory.length,S)},p=function(x){for(var M=0,y=0;y<x.length;y+=1)M+=x[y];return M/x.length||0},_=function(x,M){var y=document.createElement("canvas");return y.width=x,y.height=M,y.oncontextmenu=function(){return!1},y.onselectstart=function(){return!1},y},A=function(x){var M=x.getContext("2d"),y=window.devicePixelRatio||1,T=M.webkitBackingStorePixelRatio||M.mozBackingStorePixelRatio||M.msBackingStorePixelRatio||M.oBackingStorePixelRatio||M.backingStorePixelRatio||1;return y/T},w=function(x,M){var y=x.textures[M];return y||(y=x.textures[M]=new Image,y.src=M,y)},E=function(x,M){var y=M;/(jpg|gif|png)$/.test(M)&&(y="url("+M+")"),x.canvas.style.background=y,x.canvas.style.backgroundSize="contain",x.currentBackground=M}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(5),o=s(17),c=s(0);(function(){i._maxFrameDelta=1e3/15,i._frameDeltaFallback=1e3/60,i._timeBufferMargin=1.5,i._elapsedNextEstimate=1,i._smoothingLowerBound=.1,i._smoothingUpperBound=.9,i.create=function(h){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},f=c.extend(d,h);return f.fps=0,f},i.run=function(h,d){return h.timeBuffer=i._frameDeltaFallback,(function f(l){h.frameRequestId=i._onNextFrame(h,f),l&&h.enabled&&i.tick(h,d,l)})(),h},i.tick=function(h,d,f){var l=c.now(),m=h.delta,g=0,p=f-h.timeLastTick;if((!p||!h.timeLastTick||p>Math.max(i._maxFrameDelta,h.maxFrameTime))&&(p=h.frameDelta||i._frameDeltaFallback),h.frameDeltaSmoothing){h.frameDeltaHistory.push(p),h.frameDeltaHistory=h.frameDeltaHistory.slice(-h.frameDeltaHistorySize);var _=h.frameDeltaHistory.slice(0).sort(),A=h.frameDeltaHistory.slice(_.length*i._smoothingLowerBound,_.length*i._smoothingUpperBound),w=u(A);p=w||p}h.frameDeltaSnapping&&(p=1e3/Math.round(1e3/p)),h.frameDelta=p,h.timeLastTick=f,h.timeBuffer+=h.frameDelta,h.timeBuffer=c.clamp(h.timeBuffer,0,h.frameDelta+m*i._timeBufferMargin),h.lastUpdatesDeferred=0;var E=h.maxUpdates||Math.ceil(h.maxFrameTime/m),x={timestamp:d.timing.timestamp};a.trigger(h,"beforeTick",x),a.trigger(h,"tick",x);for(var M=c.now();m>0&&h.timeBuffer>=m*i._timeBufferMargin;){a.trigger(h,"beforeUpdate",x),o.update(d,m),a.trigger(h,"afterUpdate",x),h.timeBuffer-=m,g+=1;var y=c.now()-l,T=c.now()-M,S=y+i._elapsedNextEstimate*T/g;if(g>=E||S>h.maxFrameTime){h.lastUpdatesDeferred=Math.round(Math.max(0,h.timeBuffer/m-i._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=g,a.trigger(h,"afterTick",x),h.frameDeltaHistory.length>=100&&(h.lastUpdatesDeferred&&Math.round(h.frameDelta/m)>E?c.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):h.lastUpdatesDeferred&&c.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof h.isFixed<"u"&&c.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(h.deltaMin||h.deltaMax)&&c.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),h.fps!==0&&c.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},i.stop=function(h){i._cancelNextFrame(h)},i._onNextFrame=function(h,d){if(typeof window<"u"&&window.requestAnimationFrame)h.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return h.frameRequestId},i._cancelNextFrame=function(h){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(h.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(h){for(var d=0,f=h.length,l=0;l<f;l+=1)d+=h[l];return d/f||0}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(8),o=s(0),c=o.deprecated;(function(){i.collides=function(u,h){return a.collides(u,h)},c(i,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(e,n,s){var i={};e.exports=i,s(1);var a=s(0);(function(){i.pathToVertices=function(o,c){typeof window<"u"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,h,d,f,l,m,g,p,_,A,w=[],E,x,M=0,y=0,T=0;c=c||15;var S=function(b,P,D){var U=D%2===1&&D>1;if(!_||b!=_.x||P!=_.y){_&&U?(E=_.x,x=_.y):(E=0,x=0);var F={x:E+b,y:x+P};(U||!_)&&(_=F),w.push(F),y=E+b,T=x+P}},v=function(b){var P=b.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":y=b.x,T=b.y;break;case"H":y=b.x;break;case"V":T=b.y;break}S(y,T,b.pathSegType)}};for(i._svgPathToAbsolute(o),d=o.getTotalLength(),m=[],u=0;u<o.pathSegList.numberOfItems;u+=1)m.push(o.pathSegList.getItem(u));for(g=m.concat();M<d;){if(A=o.getPathSegAtLength(M),l=m[A],l!=p){for(;g.length&&g[0]!=l;)v(g.shift());p=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":f=o.getPointAtLength(M),S(f.x,f.y,0);break}M+=c}for(u=0,h=g.length;u<h;++u)v(g[u]);return w},i._svgPathToAbsolute=function(o){for(var c,u,h,d,f,l,m=o.pathSegList,g=0,p=0,_=m.numberOfItems,A=0;A<_;++A){var w=m.getItem(A),E=w.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(E))"x"in w&&(g=w.x),"y"in w&&(p=w.y);else switch("x1"in w&&(h=g+w.x1),"x2"in w&&(f=g+w.x2),"y1"in w&&(d=p+w.y1),"y2"in w&&(l=p+w.y2),"x"in w&&(g+=w.x),"y"in w&&(p+=w.y),E){case"m":m.replaceItem(o.createSVGPathSegMovetoAbs(g,p),A);break;case"l":m.replaceItem(o.createSVGPathSegLinetoAbs(g,p),A);break;case"h":m.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(g),A);break;case"v":m.replaceItem(o.createSVGPathSegLinetoVerticalAbs(p),A);break;case"c":m.replaceItem(o.createSVGPathSegCurvetoCubicAbs(g,p,h,d,f,l),A);break;case"s":m.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(g,p,f,l),A);break;case"q":m.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(g,p,h,d),A);break;case"t":m.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(g,p),A);break;case"a":m.replaceItem(o.createSVGPathSegArcAbs(g,p,w.r1,w.r2,w.angle,w.largeArcFlag,w.sweepFlag),A);break;case"z":case"Z":g=c,p=u;break}(E=="M"||E=="m")&&(c=g,u=p)}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(6);s(0),(function(){i.create=a.create,i.add=a.add,i.remove=a.remove,i.clear=a.clear,i.addComposite=a.addComposite,i.addBody=a.addBody,i.addConstraint=a.addConstraint})()})])})})(Ds)),Ds.exports}var kp=Vp();const Je=Hp(kp);class Wp{constructor(){this.engine=Je.Engine.create({gravity:{x:0,y:-.55}}),this.world=this.engine.world,this.listeners=new Map,Je.Events.on(this.engine,"collisionStart",t=>{for(const e of t.pairs)this._emit("collisionStart",e)})}addBody(t){Je.Composite.add(this.world,t)}removeBody(t){Je.Composite.remove(this.world,t)}update(t){let s=Math.min(t*1e3,50);for(;s>0;){const i=Math.min(s,16);Je.Engine.update(this.engine,i),s-=i}}on(t,e){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e)}off(t,e){const n=this.listeners.get(t);if(n){const s=n.indexOf(e);s>=0&&n.splice(s,1)}}_emit(t,e){const n=this.listeners.get(t);n&&n.forEach(s=>s(e))}createCircle(t,e,n,s={}){return Je.Bodies.circle(t,e,n,s)}createRect(t,e,n,s,i={}){return Je.Bodies.rectangle(t,e,n,s,i)}setStatic(t,e){Je.Body.setStatic(t,e)}setVelocity(t,e){Je.Body.setVelocity(t,e)}setPosition(t,e){Je.Body.setPosition(t,e)}applyForce(t,e){Je.Body.applyForce(t,t.position,e)}}class Xp{constructor(t){this.cam=t,this.targetX=0,this.currentX=0,this.targetY=0,this.currentY=0,this._initialized=!1,this.zoom=Qt.IDLE_ZOOM,this.targetZoom=Qt.IDLE_ZOOM,this.shakeX=0,this.shakeY=0,this.shakeIntensity=0,this._transitionActive=!1,this._transFrom={x:0,y:0,zoom:1},this._transTo={x:0,y:0,zoom:1},this._transDuration=0,this._transElapsed=0,this._transCallback=null}followX(t){this.targetX=t,this._initialized||(this.currentX=t)}followY(t){this.targetY=-t,this._initialized||(this.currentY=-t,this._initialized=!0)}setTargetZoom(t){this.targetZoom=t}shake(t){this.shakeIntensity=Math.max(this.shakeIntensity,t)}transitionTo(t,e,n,s,i){this._transitionActive=!0,this._transFrom={x:this.currentX,y:this.currentY,zoom:this.zoom},this._transTo={x:t,y:-e,zoom:n},this._transDuration=s,this._transElapsed=0,this._transCallback=i||null}update(t){if(this._transitionActive){this._transElapsed+=t;let s=Math.min(this._transElapsed/this._transDuration,1);s=this._easeInOut(s),this.currentX=this._transFrom.x+(this._transTo.x-this._transFrom.x)*s,this.currentY=this._transFrom.y+(this._transTo.y-this._transFrom.y)*s,this.zoom=this._transFrom.zoom+(this._transTo.zoom-this._transFrom.zoom)*s,this._transElapsed>=this._transDuration&&(this._transitionActive=!1,this._transCallback&&this._transCallback())}else this.currentX+=(this.targetX-this.currentX)*Qt.FOLLOW_LERP_X,this.currentY+=(this.targetY-this.currentY)*Qt.FOLLOW_LERP,this.zoom+=(this.targetZoom-this.zoom)*Qt.ZOOM_LERP;this.shakeIntensity>.1?(this.shakeX=(Math.random()-.5)*2*this.shakeIntensity,this.shakeY=(Math.random()-.5)*2*this.shakeIntensity,this.shakeIntensity*=Qt.SHAKE_DECAY):(this.shakeX=0,this.shakeY=0,this.shakeIntensity=0);const e=De.HEIGHT/2/this.zoom,n=e*fa.ASPECT;this.cam.left=-n,this.cam.right=n,this.cam.top=e,this.cam.bottom=-e,this.cam.position.x=this.currentX+this.shakeX,this.cam.position.y=this.currentY+this.shakeY,this.cam.updateProjectionMatrix()}isTransitioning(){return this._transitionActive}_easeInOut(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}}class Yp{constructor(t){this._callbacks=[],this._element=t,this._onPointerDown=e=>{e.preventDefault(),this._callbacks.forEach(n=>n(e))},this._onKeyDown=e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),this._callbacks.forEach(n=>n(e)))},t.addEventListener("pointerdown",this._onPointerDown,{passive:!1}),t.addEventListener("touchstart",e=>e.preventDefault(),{passive:!1}),window.addEventListener("keydown",this._onKeyDown)}onTap(t){this._callbacks.push(t)}offTap(t){const e=this._callbacks.indexOf(t);e>=0&&this._callbacks.splice(e,1)}destroy(){this._element.removeEventListener("pointerdown",this._onPointerDown),this._callbacks=[]}}class qp{constructor(){this.ctx=null,this._initialized=!1,this._rawSounds={},this._decodedSounds={}}_init(){this._initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this._initialized=!0)}async loadSound(t,e){const n=await fetch(e);this._rawSounds[t]=await n.arrayBuffer()}async _getBuffer(t){if(this._decodedSounds[t])return this._decodedSounds[t];const e=this._rawSounds[t];return e?(this._decodedSounds[t]=await this.ctx.decodeAudioData(e),delete this._rawSounds[t],this._decodedSounds[t]):null}async _playSound(t,e=Jt.MASTER_VOLUME){this._init();const n=await this._getBuffer(t);if(!n)return;const s=this.ctx.createBufferSource(),i=this.ctx.createGain();s.buffer=n,i.gain.value=e,s.connect(i),i.connect(this.ctx.destination),s.start()}_play(t,e,n="sine",s=Jt.MASTER_VOLUME,i=0){this._init();const a=this.ctx,o=a.createOscillator(),c=a.createGain();o.type=n,o.frequency.value=t,i&&(o.detune.value=i),c.gain.setValueAtTime(s,a.currentTime),c.gain.exponentialRampToValueAtTime(.001,a.currentTime+e),o.connect(c),c.connect(a.destination),o.start(a.currentTime),o.stop(a.currentTime+e)}_noise(t,e=Jt.MASTER_VOLUME*.5){this._init();const n=this.ctx,s=n.sampleRate*t,i=n.createBuffer(1,s,n.sampleRate),a=i.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*.5;const o=n.createBufferSource();o.buffer=i;const c=n.createGain();c.gain.setValueAtTime(e,n.currentTime),c.gain.exponentialRampToValueAtTime(.001,n.currentTime+t);const u=n.createBiquadFilter();u.type="highpass",u.frequency.value=2e3,o.connect(u),u.connect(c),c.connect(n.destination),o.start()}pegHit(t,e=1,n=1){const s=Jt.PEG_BASE_FREQ+Jt.PEG_FREQ_RANGE*(1-t),i=Math.min(e,8)*30;this._play(s+i,.08,"sine",Jt.MASTER_VOLUME*.6*n),this._play((s+i)*1.5,.05,"sine",Jt.MASTER_VOLUME*.2*n)}layEgg(){this._play(400,.12,"sine",Jt.MASTER_VOLUME*.5),this._play(600,.08,"sine",Jt.MASTER_VOLUME*.3)}chickenCluck(t=1){this._playSound("chickenCluck",Jt.MASTER_VOLUME*.8*t)}chickenSqueeze(t=1){const e=Math.floor(Math.random()*3)+1;this._playSound(`chickenSqueeze${e}`,Jt.MASTER_VOLUME*t)}eggPop(t=1){this._init();const e=this.ctx,n=e.currentTime,s=e.createOscillator(),i=e.createGain();s.type="sine",s.frequency.setValueAtTime(350,n),s.frequency.exponentialRampToValueAtTime(80,n+.12),i.gain.setValueAtTime(Jt.MASTER_VOLUME*.7*t,n),i.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(i),i.connect(e.destination),s.start(n),s.stop(n+.15);const a=e.createOscillator(),o=e.createGain();a.type="square",a.frequency.setValueAtTime(800,n),a.frequency.exponentialRampToValueAtTime(200,n+.06),o.gain.setValueAtTime(Jt.MASTER_VOLUME*.3*t,n),o.gain.exponentialRampToValueAtTime(.001,n+.08),a.connect(o),o.connect(e.destination),a.start(n),a.stop(n+.08),this._noise(.08,Jt.MASTER_VOLUME*.4*t)}eggLand(t=1){this._play(120,.2,"sine",Jt.MASTER_VOLUME*.5*t),this._noise(.1,Jt.MASTER_VOLUME*.2*t)}hatch(){this._noise(.15,Jt.MASTER_VOLUME*.6),setTimeout(()=>{this._play(600,.3,"sine",Jt.MASTER_VOLUME*.4),this._play(900,.25,"sine",Jt.MASTER_VOLUME*.3),this._play(1200,.2,"sine",Jt.MASTER_VOLUME*.2)},100)}coinCollect(t,e){const n=Jt.COIN_BASE_FREQ+t/e*600;this._play(n,.06,"square",Jt.MASTER_VOLUME*.15)}drumrollHit(t){const e=Jt.MASTER_VOLUME*(.15+t*.25);this._play(100+t*40,.04,"triangle",e),this._noise(.025,e*.4)}purchasePowerup(){this._init();const t=Jt.MASTER_VOLUME*.7;[523,659,784].forEach((n,s)=>{setTimeout(()=>{this._play(n,.2-s*.04,"sine",t*(1-s*.12))},s*70)}),setTimeout(()=>this._noise(.06,Jt.MASTER_VOLUME*.25),60)}duplicateSpawn(){this._play(1e3+Math.random()*200,.04,"sine",Jt.MASTER_VOLUME*.18),this._noise(.02,Jt.MASTER_VOLUME*.06)}whoosh(){this._init();const t=this.ctx,e=t.createOscillator(),n=t.createGain();e.type="sine",e.frequency.setValueAtTime(200,t.currentTime),e.frequency.exponentialRampToValueAtTime(80,t.currentTime+.4),n.gain.setValueAtTime(Jt.MASTER_VOLUME*.2,t.currentTime),n.gain.exponentialRampToValueAtTime(.001,t.currentTime+.4),e.connect(n),n.connect(t.destination),e.start(),e.stop(t.currentTime+.4),this._noise(.2,Jt.MASTER_VOLUME*.15)}}const $p={chickenFly1:"sprites/T_Char_Chicken_Flying1.png",chickenFly2:"sprites/T_Char_Chicken_Flying2.png",chickenLay0:"sprites/T_Bird_LayingEgg_00.png",chickenLay1:"sprites/T_Bird_LayingEgg_01.png",egg:"sprites/T_Egg_Static_01.png",cloudLarge:"sprites/T_Env_Cloud_Large.png",cloudMedium:"sprites/T_Env_Cloud_Medium.png",cloudSmall:"sprites/T_Env_Cloud_Small.png",mountainsNear:"sprites/T_Env_Mountains_Near.png",mountainsFar:"sprites/T_Env_Mountains_Far.png",grass01:"sprites/T_Env_Grass_01.png",bush01:"sprites/T_Env_Bush_01.png",hut01:"sprites/T_Env_Hut_01.png"},As={},Zp={async loadAll(){const r=new jc,t=Object.entries($p);return await Promise.all(t.map(([e,n])=>new Promise((s,i)=>{r.load(n,a=>{a.minFilter=He,a.magFilter=He,a.colorSpace=ze,As[e]=a,s()},void 0,i)}))),As},get(r){return As[r]},textures:As};class Kp{constructor(t,e,n){this.x=t,this.y=e,this.baseScale=1,this._hitTimer=0,this.body=n.createCircle(t,-e,jt.PEG_RADIUS,{isStatic:!0,restitution:.7,friction:.05,label:"peg"}),this.body.pegRef=this,n.addBody(this.body);const s=new Ea(jt.PEG_RADIUS,16),i=new Ue({color:Le.PEG_DEFAULT});this.mesh=new re(s,i),this.mesh.position.set(t,-e,0)}hit(){this._hitTimer=1,this.mesh.material.color.setHex(Le.PEG_HIT)}nudge(t){this._hitTimer<t&&(this._hitTimer=t)}update(t){if(this._hitTimer>0){this._hitTimer-=t*6;const e=1+.4*Math.max(this._hitTimer,0);this.mesh.scale.set(e,e,1),this._hitTimer<=0&&(this._hitTimer=0,this.mesh.scale.set(1,1,1),this.mesh.material.color.setHex(Le.PEG_DEFAULT))}}}class Jp{constructor(t,e,n,s,i){this.index=t,this.multiplier=je.MULTIPLIERS[t],this.x=e,this.y=n,this.width=s,this._glowTimer=0,this.sensor=i.createRect(e,-n,s-4,je.HEIGHT,{isStatic:!0,isSensor:!0,label:`bin_${t}`}),this.sensor.binRef=this,i.addBody(this.sensor);const a=new Yn;a.position.set(e,-n,0);const o=new xe(s-2,je.HEIGHT),c=new Ue({color:je.COLORS[t],transparent:!0,opacity:.5});this.bgMesh=new re(o,c),a.add(this.bgMesh);const u=`x${this.multiplier}`,h=document.createElement("canvas");h.width=64,h.height=32;const d=h.getContext("2d");d.fillStyle="#fff",d.font="bold 22px sans-serif",d.textAlign="center",d.textBaseline="middle",d.fillText(u,32,16);const f=new ya(h),l=new xe(32,16),m=new Ue({map:f,transparent:!0}),g=new re(l,m);g.position.z=1,a.add(g),this.mesh=a}glow(){this._glowTimer=1}update(t){this._glowTimer>0&&(this._glowTimer-=t*2,this.bgMesh.material.opacity=.5+.5*Math.max(this._glowTimer,0),this._glowTimer<=0&&(this._glowTimer=0,this.bgMesh.material.opacity=.5))}}class jp{constructor(t,e){this.pegs=[],this.bins=[],this.scene=t,this.physics=e,this._createPegs(),this._createWalls(),this._createBins(),this._createBinDividers()}_createPegs(){const t=De.WIDTH-jt.WALL_THICKNESS*2-jt.PEG_RADIUS*4,e=t/(jt.PEG_COLS-1),n=-t/2;this._pegSpacingX=e;for(let s=0;s<jt.PEG_ROWS;s++){const i=s%2===1,a=i?jt.PEG_COLS-1:jt.PEG_COLS,o=i?e/2:0;for(let c=0;c<a;c++){const u=n+c*e+o,h=jt.TOP_OFFSET+s*jt.PEG_SPACING_Y,d=new Kp(u,h,this.physics);this.pegs.push(d),this.scene.add(d.mesh)}}}_createWalls(){const t=jt.TOP_OFFSET+jt.PEG_ROWS*jt.PEG_SPACING_Y+je.HEIGHT+100,e=De.WIDTH/2,n={isStatic:!0,friction:.02,restitution:.8,label:"wall"},s=this.physics.createRect(-e+jt.WALL_THICKNESS/2,-t/2,jt.WALL_THICKNESS,t*2,n),i=this.physics.createRect(e-jt.WALL_THICKNESS/2,-t/2,jt.WALL_THICKNESS,t*2,n);this.physics.addBody(s),this.physics.addBody(i);const a=new Ue({color:Le.WALL,transparent:!0,opacity:.3}),o=new re(new xe(jt.WALL_THICKNESS,t*2),a);o.position.set(-e+jt.WALL_THICKNESS/2,-t/2,0),this.scene.add(o);const c=new re(new xe(jt.WALL_THICKNESS,t*2),a.clone());c.position.set(e-jt.WALL_THICKNESS/2,-t/2,0),this.scene.add(c)}_createBins(){const t=jt.TOP_OFFSET+jt.PEG_ROWS*jt.PEG_SPACING_Y+30,e=De.WIDTH/2-jt.WALL_THICKNESS,n=e*2,s=n/je.COUNT,i=-e+s/2;for(let a=0;a<je.COUNT;a++){const o=i+a*s,c=new Jp(a,o,t,s,this.physics);this.bins.push(c),this.scene.add(c.mesh)}this.boardBottom=t,this._binWidth=s,this._binStartX=-e,this._binTotalWidth=n}_createBinDividers(){const t=this.boardBottom,e=this._binWidth,n=this._binStartX,s=4,i=new Ue({color:Le.BIN_BORDER});for(let c=0;c<=je.COUNT;c++){const u=n+c*e,h=this.physics.createRect(u,-t,s,je.HEIGHT+10,{isStatic:!0,label:"divider",restitution:.7,friction:.05});this.physics.addBody(h);const d=new re(new xe(s,je.HEIGHT+10),i);d.position.set(u,-t,1),this.scene.add(d)}const a=t+je.HEIGHT/2+5,o=this.physics.createRect(0,-a,De.WIDTH,10,{isStatic:!0,label:"floor"});this.physics.addBody(o)}rippleFrom(t){const e=(this._pegSpacingX||jt.PEG_SPACING_X)*1.8;for(const n of this.pegs){if(n===t)continue;const s=n.x-t.x,i=n.y-t.y,a=Math.sqrt(s*s+i*i);if(a<e){const o=1-a/e;n.nudge(o*.3)}}}update(t){for(const e of this.pegs)e.update(t);for(const e of this.bins)e.update(t)}getBoardBottom(){return this.boardBottom}getNormalizedY(t){return Math.max(0,Math.min(1,(t-jt.TOP_OFFSET)/(jt.PEG_ROWS*jt.PEG_SPACING_Y)))}}class Qp{constructor(){this.totalGold=0,this.currentRunGold=0,this.pegHits=0,this.combo=0,this._lastHitTime=0}onPegHit(t){this.pegHits++,t-this._lastHitTime<yi.COMBO_WINDOW_MS?this.combo=Math.min(this.combo+1,yi.COMBO_MAX):this.combo=1,this._lastHitTime=t;const e=yi.BASE_GOLD*this.combo;return this.currentRunGold+=e,{gold:e,combo:this.combo}}calculateLanding(t){return Math.ceil(this.currentRunGold*t)}canAfford(t){return this.totalGold>=t}spendGold(t){return this.canAfford(t)?(this.totalGold-=t,!0):!1}collectGold(t){this.totalGold+=t}resetRun(){this.currentRunGold=0,this.pegHits=0,this.combo=0,this._lastHitTime=0}}class tm{constructor(t,e,n,s,i,a,o,c=0,u=.98){this.x=t,this.y=e,this.vx=n,this.vy=s,this.size=i,this.color=a,this.life=o,this.maxLife=o,this.gravity=c,this.drag=u,this.alive=!0}}class em{constructor(t){this.scene=t,this.particles=[],this._maxParticles=300;const e=new Ge,n=new Float32Array(this._maxParticles*3),s=new Float32Array(this._maxParticles*3),i=new Float32Array(this._maxParticles);for(let o=0;o<this._maxParticles;o++)n[o*3+2]=-9999;e.setAttribute("position",new Fe(n,3)),e.setAttribute("color",new Fe(s,3)),e.setAttribute("size",new Fe(i,1));const a=new fl({size:4,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!1,depthWrite:!1});this.points=new Yc(e,a),this.points.frustumCulled=!1,this.points.renderOrder=100,this.points.visible=!1,t.add(this.points),this._floatingTexts=[]}emit(t,e,n,s={}){const{color:i=Le.SPARK,speed:a=80,life:o=.5,size:c=3,spread:u=Math.PI*2,angle:h=-Math.PI/2,gravity:d=200,drag:f=.97}=s,l=new Wt(i);for(let m=0;m<n&&!(this.particles.length>=this._maxParticles);m++){const g=h+(Math.random()-.5)*u,p=a*(.5+Math.random()*.5);this.particles.push(new tm(t,e,Math.cos(g)*p,Math.sin(g)*p,c*(.5+Math.random()*.5),l,o*(.7+Math.random()*.3),d,f))}}emitTrail(t,e,n){const s=Math.min(Math.ceil(n/3),3);this.emit(t,e,s,{color:16770229,speed:10,life:.2+n*.01,size:2,spread:Math.PI,angle:Math.PI/2,gravity:0,drag:.95})}emitPegSpark(t,e){this.emit(t,e,5,{color:Le.SPARK,speed:60,life:.25,size:2.5,spread:Math.PI*2,angle:0,gravity:100,drag:.96})}emitHatchExplosion(t,e){this.emit(t,e,15,{color:Le.SHELL_PARTICLE,speed:150,life:.8,size:5,spread:Math.PI*2,angle:0,gravity:300,drag:.97}),this.emit(t,e,20,{color:Le.GOLD_PARTICLE,speed:120,life:.6,size:4,spread:Math.PI,angle:-Math.PI/2,gravity:100,drag:.96}),this.emit(t,e,10,{color:Le.SPARK,speed:200,life:.4,size:2,spread:Math.PI*2,angle:0,gravity:50,drag:.95})}emitEggPop(t,e){this.emit(t,e,12,{color:Le.SPARK,speed:100,life:.4,size:3.5,spread:Math.PI*2,angle:0,gravity:60,drag:.96}),this.emit(t,e,8,{color:Le.GOLD_PARTICLE,speed:70,life:.35,size:3,spread:Math.PI*2,angle:0,gravity:80,drag:.95}),this.emit(t,e-10,5,{color:Le.SHELL_PARTICLE,speed:40,life:.5,size:4,spread:Math.PI*.6,angle:Math.PI/2,gravity:200,drag:.97})}emitDust(t,e){this.emit(t,e,8,{color:Le.DUST,speed:30,life:.6,size:3,spread:Math.PI,angle:-Math.PI/2,gravity:-20,drag:.93})}spawnFloatingText(t,e,n,s,i){const a=document.createElement("canvas"),o=2;a.width=256*o,a.height=96*o;const c=a.getContext("2d");c.scale(o,o),c.font=`bold ${s}px "Arial Black", sans-serif`,c.textAlign="center",c.textBaseline="middle",c.strokeStyle="#000",c.lineWidth=4,c.lineJoin="round",c.strokeText(n,128,48),c.fillStyle=i||"#fff",c.fillText(n,128,48);const u=new ya(a),h=new xe(128,48),d=new Ue({map:u,transparent:!0,depthWrite:!1}),f=new re(h,d);f.position.set(t,e,10),f.renderOrder=200,this.scene.add(f),this._floatingTexts.push({mesh:f,vy:50,life:.9,maxLife:.9,scale:1.5,targetScale:1})}update(t){const e=this.points.geometry.attributes.position.array,n=this.points.geometry.attributes.color.array,s=this.points.geometry.attributes.size.array;for(let i=this.particles.length-1;i>=0;i--){const a=this.particles[i];if(a.life-=t,a.life<=0){this.particles.splice(i,1);continue}a.vy-=a.gravity*t,a.vx*=a.drag,a.vy*=a.drag,a.x+=a.vx*t,a.y+=a.vy*t}for(let i=0;i<this._maxParticles;i++)if(i<this.particles.length){const a=this.particles[i],o=a.life/a.maxLife;e[i*3]=a.x,e[i*3+1]=a.y,e[i*3+2]=5,n[i*3]=a.color.r*o,n[i*3+1]=a.color.g*o,n[i*3+2]=a.color.b*o,s[i]=a.size*o}else e[i*3]=-9999,e[i*3+1]=-9999,e[i*3+2]=-9999,s[i]=0;this.points.visible=this.particles.length>0,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0,this.points.geometry.attributes.size.needsUpdate=!0;for(let i=this._floatingTexts.length-1;i>=0;i--){const a=this._floatingTexts[i];a.life-=t,a.mesh.position.y+=a.vy*t,a.mesh.material.opacity=Math.max(0,a.life/a.maxLife),a.scale!==void 0&&(a.scale+=(a.targetScale-a.scale)*Math.min(t*12,1),a.mesh.scale.set(a.scale,a.scale,1)),a.life<=0&&(this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.map.dispose(),a.mesh.material.dispose(),this._floatingTexts.splice(i,1))}}}class Mr{constructor(t,e,n,s,i=!1,a=null){this.physics=n,this.isDuplicate=i,this.goldMultiplier=(a==null?void 0:a.goldMultiplier)||1,this.typeId=(a==null?void 0:a.typeId)||null,this.pegHits=0,this.alive=!0,this.landed=!1,this.landedBin=null;const o=i?gi.RADIUS*qn.DUPLICATE_RADIUS_SCALE:gi.RADIUS,c=i?qn.DUPLICATE_RESTITUTION:gi.RESTITUTION;this.body=n.createCircle(t,-e,o,{restitution:c,friction:gi.FRICTION,density:gi.DENSITY,label:i?"egg_duplicate":"egg",collisionFilter:{group:-1}}),this.body.eggRef=this,n.addBody(this.body);const u=o*2.4,h=new xe(u,u),d=new Ue({map:s,transparent:!0,opacity:i?qn.DUPLICATE_OPACITY:1});i?d.color.set(16770688):a!=null&&a.tint&&d.color.set(a.tint),this.mesh=new re(h,d),this.mesh.position.set(t,-e,i?1.5:2),this._crackLines=[],this._squashX=1,this._squashY=1}getX(){return this.body.position.x}getY(){return-this.body.position.y}getVelX(){return this.body.velocity.x}getVelY(){return this.body.velocity.y}getSpeed(){const t=this.body.velocity.x,e=this.body.velocity.y;return Math.sqrt(t*t+e*e)}setSquash(t,e){this._squashX=t,this._squashY=e}showCracks(){if(this._crackLines.length>0)return;const t=new ul({color:9139029});for(let e=0;e<3;e++){const n=[],s=(Math.random()-.5)*Math.PI,i=gi.RADIUS*.6;if(n.push(new V(0,0,0)),n.push(new V(Math.cos(s)*i,Math.sin(s)*i,0)),Math.random()>.4){const c=s+(Math.random()-.5)*1.2;n.push(new V(Math.cos(s)*i*.6+Math.cos(c)*i*.4,Math.sin(s)*i*.6+Math.sin(c)*i*.4,0))}const a=new Ge().setFromPoints(n),o=new Xc(a,t);o.position.z=3,this.mesh.add(o),this._crackLines.push(o)}}update(){this.alive&&(this.mesh.position.x=this.body.position.x,this.mesh.position.y=this.body.position.y,this.mesh.scale.set(this._squashX,this._squashY,1),this.mesh.rotation.z=this.body.angle)}destroy(t){this.alive=!1,this.physics.removeBody(this.body),t.remove(this.mesh)}}const yr=.18;class nm{constructor(t,e,n=1){this.typeConfig=e,this._level=n,this._time=Math.random()*100;const s=["normal","rainbow","cosmic"].indexOf(e.id);this._dir=s%2===0?1:-1,this._flipTimer=Math.random()*yr,this._frameIndex=0,this._layInterval=this._calcInterval(n),this._laying=!1,this._layTimer=this._layInterval,this._warmingUp=!1,this._warmupTimer=0,this._layAnimTimer=0,this._lastDisplayedSecond=Math.ceil(this._layTimer),this._flyFrames=[t.chickenFly1,t.chickenFly2],this._layFrames=[t.chickenLay0,t.chickenLay1],this._frames=this._flyFrames,this.group=new Yn;const i=(s*97+43)%(De.WIDTH-80)-(De.WIDTH/2-40);this.group.position.set(i,-110,de.Z_POS),this.group.scale.set(de.SCALE*(this._dir===1?-1:1),de.SCALE,1);const a=pe.BODY_RADIUS*2.8,o=new xe(a,a),c=new Ue({map:this._frames[0],transparent:!0});e.tint&&c.color.set(e.tint),this.sprite=new re(o,c),this.group.add(this.sprite),this._minX=-390/2+40,this._maxX=De.WIDTH/2-40,this._timerCanvas=document.createElement("canvas"),this._timerCanvas.width=64,this._timerCanvas.height=32,this._timerCtx=this._timerCanvas.getContext("2d"),this._timerTexture=new ya(this._timerCanvas),this._timerTexture.minFilter=He;const u=new ll({map:this._timerTexture,transparent:!0,depthTest:!1});this._timerSprite=new Vc(u),this._timerScaleBase=28/de.SCALE;const h=this.group.scale.x>0?1:-1;this._timerSprite.scale.set(this._timerScaleBase*h,this._timerScaleBase*.5,1),this._timerSprite.position.y=a*.55,this._timerSprite.position.z=1,this.group.add(this._timerSprite),this._drawTimerText(Math.ceil(this._layTimer))}_calcInterval(t){return this.typeConfig.baseInterval*Math.pow(1-de.INTERVAL_REDUCTION,t-1)}setLevel(t){this._level=t,this._layInterval=this._calcInterval(t),!this._warmingUp&&!this._laying&&(this._layTimer=Math.min(this._layTimer,this._layInterval))}_drawTimerText(t){const e=this._timerCtx;e.clearRect(0,0,64,32),e.font='bold 22px "Segoe UI", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.strokeStyle="rgba(0,0,0,0.7)",e.lineWidth=3,e.strokeText(`${t}s`,32,17),e.fillStyle=this.typeConfig.timerColor,e.fillText(`${t}s`,32,17),this._timerTexture.needsUpdate=!0}triggerImmediateLay(){this._warmingUp=!0,this._warmupTimer=0,this._frames=this._layFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this._timerSprite.visible=!1}getX(){return this.group.position.x}getDropX(){return this.group.position.x}getDropY(){return-this.group.position.y+pe.BODY_RADIUS*de.SCALE+3}update(t){this._time+=t;let e=!1;if(this._flipTimer+=t,this._flipTimer>=yr&&(this._flipTimer-=yr,this._frameIndex=(this._frameIndex+1)%this._frames.length,this.sprite.material.map=this._frames[this._frameIndex]),this._warmingUp){this._warmupTimer+=t;const s=Math.min(this._warmupTimer/de.WARMUP_DURATION,1),i=s*s,a=1-.25*i,o=1+.2*i;this.sprite.scale.set(o,a,1);const c=i*1*(Math.random()-.5)*2;this.sprite.position.x=c,this._warmupTimer>=de.WARMUP_DURATION&&(this._warmingUp=!1,this._laying=!0,this._layAnimTimer=de.LAY_DURATION,this._frames=this._flyFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this.sprite.position.x=0,e=!0)}else if(this._laying){this._layAnimTimer-=t;const s=1-this._layAnimTimer/de.LAY_DURATION,i=s<.5?1-.25*(s*2):.75+.25*((s-.5)*2);this.sprite.scale.set(1+(1-i)*.4,i,1),this._layAnimTimer<=0&&(this._laying=!1,this.sprite.scale.set(1,1,1),this._layTimer=this._layInterval,this._lastDisplayedSecond=Math.ceil(this._layTimer),this._drawTimerText(this._lastDisplayedSecond),this._timerSprite.visible=!0)}else{this._layTimer-=t;const s=Math.max(Math.ceil(this._layTimer),0);s!==this._lastDisplayedSecond&&(this._lastDisplayedSecond=s,this._drawTimerText(s)),this._layTimer<=de.WARMUP_DURATION&&(this._warmingUp||(this._warmingUp=!0,this._warmupTimer=0,this._frames=this._layFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this._timerSprite.visible=!1))}!this._warmingUp&&!this._laying&&(this.group.position.x+=de.SPEED*this._dir*t,this.group.position.x>this._maxX?(this._dir=-1,this.group.scale.x=de.SCALE):this.group.position.x<this._minX&&(this._dir=1,this.group.scale.x=-.65)),this._timerSprite.scale.x=this._timerScaleBase*Math.sign(this.group.scale.x);const n=Math.sin(this._time*pe.BOB_SPEED*.9)*pe.BOB_AMPLITUDE*.8;if(this.group.position.y=-110+n,this.typeConfig.id==="cosmic"){const s=1+Math.sin(this._time*3)*.03;this.sprite.scale.x*=s,this.sprite.scale.y*=s}return{shouldLay:e}}}const ce={IDLE:"idle",WARMUP:"warmup",DROP:"drop",LAND:"land",HATCH:"hatch",TRANSITION:"transition"},im=.5,sm=2,rm=25,am=.05,om=-.035;class lm{constructor({renderer:t,physics:e,camera:n,board:s,chicken:i,scoreManager:a,particleSystem:o,hud:c,audio:u,input:h,textures:d}){this.renderer=t,this.physics=e,this.camera=n,this.board=s,this.chicken=i,this.score=a,this.particles=o,this.hud=c,this.audio=u,this.input=h,this.textures=d,this.state=ce.IDLE,this.egg=null,this._stateTimer=0,this._wobblePhase=0,this._landingGold=0,this._idleDelay=0,this._stuckTimer=0,this._freezeTimer=0,this._drumrollTimer=0,this._coinFountainActive=!1,this._hatchEggX=0,this._hatchEggY=0,this._dupliBounceActive=!1,this._dupliBounceInFlight=!1,this._duplicateEggs=[],this._bonusGold=0,this._hasPlayedRound=!1,this._hasPulsedToggle=!1,this._chickenSlots=Sr.map(f=>({config:f,owned:!1,level:0,chicken:null})),this._autoEggs=[],this._onCollision=this._onCollision.bind(this),this.physics.on("collisionStart",this._onCollision),this._onTap=this._onTap.bind(this),this.input.onTap(this._onTap),this.hud.onPowerupClick(()=>this.purchaseDupliBounce()),this.hud.initUpgradeRows(Sr),this.hud.revealUpgradeRow(Sr[0].id),this.hud.onUpgradeRowClick(f=>this._handleUpgradeClick(f)),this._enterIdle()}_onTap(){this.state===ce.IDLE&&!this.hud.isPanelOpen()&&this._enterWarmup()}_onCollision(t){const{bodyA:e,bodyB:n}=t,s=this.state===ce.DROP||this.state===ce.LAND;if(s&&this.egg&&this.egg.alive&&this.state===ce.DROP){let i=null;if(e===this.egg.body?i=n:n===this.egg.body&&(i=e),i){i.label==="peg"&&i.pegRef?(this._handlePegHit(i.pegRef),this._dupliBounceInFlight&&this._spawnDuplicate(i.pegRef.x,i.pegRef.y)):i.label&&i.label.startsWith("bin_")&&i.binRef?this._handleBinLand(i.binRef):i.label==="floor"&&!this.egg.landed&&this._handleFloorLand();return}}if(s)for(const i of this._duplicateEggs){if(!i.alive||i.landed)continue;let a=null;if(e===i.body?a=n:n===i.body&&(a=e),!!a){a.label==="peg"&&a.pegRef?this._handleDupePegHit(a.pegRef,i):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleDupeBinLand(a.binRef,i):a.label==="floor"&&this._handleDupeFloorLand(i);return}}for(const i of this._autoEggs){if(!i.alive||i.landed)continue;let a=null;if(e===i.body?a=n:n===i.body&&(a=e),!!a){a.label==="peg"&&a.pegRef?this._handleAutoEggPegHit(a.pegRef,i):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleAutoEggBinLand(a.binRef,i):a.label==="floor"&&this._handleAutoEggFloorLand(i);return}}}_handlePegHit(t){t.hit(),this.egg.pegHits++,this.board.rippleFrom(t);const e=performance.now(),{gold:n,combo:s}=this.score.onPegHit(e),i=this.board.getNormalizedY(t.y);this.audio.pegHit(i,s);const a=this.egg.getSpeed();this.camera.shake(Qt.SHAKE_INTENSITY*Math.min(a/5,1.5)),this.particles.emitPegSpark(t.x,-t.y);const o=s>3?42:s>1?34:28,c=s>3?"#FF6B35":s>1?"#FFD700":"#FFFFFF";this.particles.spawnFloatingText(t.x,-t.y+20,`+${n}g`,o,c),this.hud.setRunGold(this.score.currentRunGold),this.hud.setCombo(s),this.hud.setEdgeGlow(s/yi.COMBO_MAX)}_handleBinLand(t){this.egg.landed||(this.egg.landed=!0,this.egg.landedBin=t,t.glow(),this.audio.eggLand(),this.particles.emitDust(t.x,-t.y+15),this._landingGold=this.score.calculateLanding(t.multiplier),this.state=ce.LAND,this._stateTimer=0,this._freezeTimer=Pe.LAND_FREEZE,this.camera.shake(3),this.egg&&this.egg.setSquash(1.3,.7))}_handleFloorLand(){!this.egg||this.egg.landed||(this.egg.landed=!0,this.audio.eggLand(),this._landingGold=this.score.calculateLanding(1),this.state=ce.LAND,this._stateTimer=0,this._freezeTimer=Pe.LAND_FREEZE,this.camera.shake(2),this.egg&&this.egg.setSquash(1.3,.7))}_spawnDuplicate(t,e){const n=new Mr(t,e,this.physics,this.textures.egg,!0),s=Math.random()*Math.PI*2,i=qn.SPAWN_SPEED_MIN+Math.random()*qn.SPAWN_SPEED_SPREAD;this.physics.setVelocity(n.body,{x:Math.cos(s)*i,y:-Math.abs(Math.sin(s)*i)-.5}),this.renderer.scene.add(n.mesh),this._duplicateEggs.push(n),this.audio.duplicateSpawn(),this.particles.emitPegSpark(t,-e)}_handleDupePegHit(t,e){t.hit(),e.pegHits++,this.board.rippleFrom(t),this.score.currentRunGold+=1;const n=this.board.getNormalizedY(t.y);this.audio.pegHit(n,1),this.particles.emitPegSpark(t.x,-t.y),this.particles.spawnFloatingText(t.x,-t.y+20,"+1g",22,"#DDDDDD"),this.hud.setRunGold(this.score.currentRunGold)}_handleDupeBinLand(t,e){if(e.landed)return;e.landed=!0,e.landedBin=t,t.glow(),this.audio.eggLand(),this.particles.emitDust(t.x,-t.y+15);const n=this.score.calculateLanding(t.multiplier);this._bonusGold+=n,this.particles.spawnFloatingText(t.x,-t.y+25,`+${n}g`,26,"#FFE680"),setTimeout(()=>{if(e.alive){e.destroy(this.renderer.scene);const s=this._duplicateEggs.indexOf(e);s!==-1&&this._duplicateEggs.splice(s,1)}},200)}_handleDupeFloorLand(t){t.landed||(t.landed=!0,setTimeout(()=>{if(t.alive){t.destroy(this.renderer.scene);const e=this._duplicateEggs.indexOf(t);e!==-1&&this._duplicateEggs.splice(e,1)}},100))}_cleanupDuplicates(){for(const t of this._duplicateEggs)t.alive&&t.destroy(this.renderer.scene);this._duplicateEggs=[]}_getSlot(t){return this._chickenSlots.find(e=>e.config.id===t)}_getSlotCost(t){return t.owned?t.level>=de.MAX_LEVEL?1/0:Math.floor(t.config.levelCostBase*Math.pow(t.config.levelCostMult,t.level-1)):t.config.baseCost}_handleUpgradeClick(t){if(this.state!==ce.IDLE)return;const e=this._getSlot(t);if(!e)return;const n=this._getSlotCost(e);this.score.canAfford(n)&&(e.owned?e.level<de.MAX_LEVEL&&this._upgradeChicken(e):this._purchaseChicken(e))}_purchaseChicken(t){const e=t.config.baseCost;this.score.spendGold(e),this.hud.setGold(this.score.totalGold),t.owned=!0,t.level=1,t.chicken=new nm(this.textures,t.config,1),this.renderer.scene.add(t.chicken.group),t.chicken.triggerImmediateLay(),this.audio.purchasePowerup();const n=this._chickenSlots.indexOf(t);n+1<this._chickenSlots.length&&this.hud.revealUpgradeRow(this._chickenSlots[n+1].config.id),this._syncAllUpgradeRows()}_upgradeChicken(t){const e=this._getSlotCost(t);this.score.spendGold(e),this.hud.setGold(this.score.totalGold),t.level++,t.chicken.setLevel(t.level),this.audio.purchasePowerup(),this._syncAllUpgradeRows()}_syncAllUpgradeRows(){let t=!1;for(const e of this._chickenSlots){const n=this._getSlotCost(e),s=this.score.canAfford(n);s&&n!==1/0&&(t=!0);const i=this._chickenSlots[this._chickenSlots.indexOf(e)-1],a=!i||i.owned;!e.owned&&!a||this.hud.updateUpgradeRow(e.config.id,{owned:e.owned,level:e.level,cost:n===1/0?"---":n,canAfford:s,maxLevel:de.MAX_LEVEL})}this.hud.setUpgradeToggleHighlight(t),this._updateGoalBar()}_getNextGoal(){let t=null;for(const e of this._chickenSlots){const n=this._getSlotCost(e);if(n!==1/0){if(!e.owned){const s=this._chickenSlots[this._chickenSlots.indexOf(e)-1];if(s&&!s.owned)continue}if(!t||n<t.cost){const s=e.owned?`${e.config.name} Lv.${e.level+1}`:e.config.name;t={emoji:e.config.emoji,name:s,cost:n}}}}return t}_updateGoalBar(){const t=this._getNextGoal();if(!t){this.hud.hideGoalBar();return}this.hud.updateGoalBar({emoji:t.emoji,name:t.name,current:this.score.totalGold,target:t.cost})}_spawnAutoEgg(t){const e=de.AUDIO_VOLUME_SCALE;this.audio.eggPop(e),this.audio.chickenCluck(e);const n=t.getDropX(),s=t.getDropY(),i=t.typeConfig,a=new Mr(n,s,this.physics,this.textures.egg,!1,{tint:i.eggTint,goldMultiplier:i.goldMultiplier,typeId:i.id});a.body.label="egg_auto",a.mesh.position.z=1.5,a._autoAge=0,this.renderer.scene.add(a.mesh),this._autoEggs.push(a)}_handleAutoEggPegHit(t,e){t.hit(),e.pegHits++,this.board.rippleFrom(t);const n=de.AUDIO_VOLUME_SCALE,s=this.board.getNormalizedY(t.y);this.audio.pegHit(s,1,n),this.particles.emitPegSpark(t.x,-t.y)}_handleAutoEggBinLand(t,e){if(e.landed)return;e.landed=!0,t.glow(),this.audio.eggLand(de.AUDIO_VOLUME_SCALE),this.particles.emitDust(t.x,-t.y+15);const s=Math.max(1,Math.ceil(e.pegHits*yi.BASE_GOLD*t.multiplier))*e.goldMultiplier;this._fireAutoEggFountain(e,s)}_handleAutoEggFloorLand(t){if(t.landed)return;t.landed=!0;const n=Math.max(1,Math.ceil(t.pegHits*yi.BASE_GOLD))*t.goldMultiplier;this._fireAutoEggFountain(t,n)}_fireAutoEggFountain(t,e){const n=t.getX(),s=-t.getY();this.particles.emitHatchExplosion(n,s);const i=this.renderer.projectToScreen(n,s),a=Math.min(Math.max(Math.ceil(Math.sqrt(e)),2),12),o=Math.round(e/a);this.hud.spawnCoinFountain(i.x,i.y,a,o,c=>{this.score.collectGold(c),this.hud.setGold(this.score.totalGold),this._syncAllUpgradeRows(),this._updateGoalBar()},null),setTimeout(()=>{if(t.alive){t.destroy(this.renderer.scene);const c=this._autoEggs.indexOf(t);c!==-1&&this._autoEggs.splice(c,1)}},150)}purchaseDupliBounce(){this.state===ce.IDLE&&(this._dupliBounceActive||this.score.canAfford(qn.DUPLI_BOUNCE_COST)&&(this.score.spendGold(qn.DUPLI_BOUNCE_COST),this.hud.setGold(this.score.totalGold),this._dupliBounceActive=!0,this.audio.purchasePowerup(),this.hud.setPowerupActive(),this._syncAllUpgradeRows()))}_enterIdle(){this.state=ce.IDLE,this.score.resetRun(),this._idleDelay=Pe.IDLE_PROMPT_DELAY,this.hud.hideRunGold(),this._hasPlayedRound?(this.camera.setTargetZoom(Qt.OVERVIEW_ZOOM),this.camera.followX(0),this.camera.followY(Qt.OVERVIEW_CENTER_Y)):(this.camera.setTargetZoom(Qt.IDLE_ZOOM),this.camera.followX(this.chicken.getX()),this.camera.followY(pe.Y_POS)),this._hasPlayedRound&&(this._syncAllUpgradeRows(),this.hud.showUpgradeToggle(),this._updateGoalBar(),this._hasPulsedToggle||(this._hasPulsedToggle=!0,setTimeout(()=>this.hud.pulseUpgradeToggle(),400)))}_enterWarmup(){this.state=ce.WARMUP,this._stateTimer=0,this._bonusGold=0,this.hud.hideTapPrompt(),this.hud.hideSubtleTapPrompt(),this.hud.hidePowerupButton(),this.hud.closeUpgradePanel(),this.hud.hideUpgradeToggle(),this.hud.hideGoalBar(),this._dupliBounceActive&&(this._dupliBounceInFlight=!0,this._dupliBounceActive=!1),this.chicken.warmup([this.textures.chickenLay0,this.textures.chickenLay1],pe.WARMUP_DURATION),this.audio.chickenSqueeze(),this.camera.setTargetZoom(Qt.WARMUP_ZOOM)}_enterDrop(){this.state=ce.DROP,this._stateTimer=0,this._stuckTimer=0,this.chicken.stopWarmup(),this.chicken.lay(),this.audio.eggPop(),this.audio.chickenCluck(),this.camera.shake(5);const t=this.chicken.getDropX(),e=this.chicken.getDropY();this.egg=new Mr(t,e,this.physics,this.textures.egg),this.renderer.scene.add(this.egg.mesh),this.particles.emitEggPop(t,-e),this.camera.setTargetZoom(Qt.DROP_ZOOM_START)}_enterHatch(){this.state=ce.HATCH,this._stateTimer=0,this._wobblePhase=0,this._drumrollTimer=0,this._coinFountainActive=!1,this._landingGold+=this._bonusGold,this._cleanupDuplicates(),this.physics.setStatic(this.egg.body,!0),this.camera.setTargetZoom(Qt.HATCH_ZOOM)}_enterTransition(){this.state=ce.TRANSITION,this._stateTimer=0,this._hasPlayedRound=!0,this._dupliBounceInFlight=!1,this._bonusGold=0,this._cleanupDuplicates(),this.egg&&(this.egg.destroy(this.renderer.scene),this.egg=null),this.audio.whoosh(),this.chicken.celebrate(),this.camera.transitionTo(0,Qt.OVERVIEW_CENTER_Y,Qt.OVERVIEW_ZOOM,Pe.TRANSITION_DURATION,()=>{this._enterIdle()})}update(t){this.chicken.update(t),this.board.update(t),this.particles.update(t);for(const e of this._chickenSlots){if(!e.chicken)continue;e.chicken.update(t).shouldLay&&this._spawnAutoEgg(e.chicken)}for(let e=this._autoEggs.length-1;e>=0;e--){const n=this._autoEggs[e];n.alive&&(n.landed||(n._autoAge+=t,n.update(),n._autoAge>20&&this._handleAutoEggFloorLand(n)))}switch(this.state){case ce.IDLE:this._updateIdle(t);break;case ce.WARMUP:this._updateWarmup(t);break;case ce.DROP:this._updateDrop(t);break;case ce.LAND:this._updateLand(t);break;case ce.HATCH:this._updateHatch(t);break;case ce.TRANSITION:this._updateTransition(t);break}this.camera.update(t)}_updateIdle(t){this._hasPlayedRound?(this.camera.followX(0),this.camera.followY(Qt.OVERVIEW_CENTER_Y)):(this.camera.followX(this.chicken.getX()),this.camera.followY(pe.Y_POS)),this._idleDelay-=t,this._idleDelay<=0&&(this._hasPlayedRound?this.hud.showSubtleTapPrompt():this.hud.showTapPrompt())}_updateWarmup(t){this._stateTimer+=t,this.camera.followX(this.chicken.getX()),this.camera.followY(pe.Y_POS);const e=Math.min(this._stateTimer/pe.WARMUP_DURATION,1);this.camera.shake(e*e*.8),this._stateTimer>=pe.WARMUP_DURATION&&this._enterDrop()}_updateDrop(t){if(!this.egg||!this.egg.alive)return;if(this._stateTimer+=t,this._stateTimer>20&&!this.egg.landed){this._handleFloorLand();return}this.egg.update();for(const d of this._duplicateEggs)d.alive&&d.update();this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY());const e=this.egg.getY(),n=Math.max(0,Math.min(1,(e-Qt.BOARD_TOP_Y)/(Qt.BOARD_BOTTOM_Y-Qt.BOARD_TOP_Y))),s=Qt.DROP_ZOOM_MAX+(Qt.DROP_ZOOM_MIN-Qt.DROP_ZOOM_MAX)*n,i=this.egg.getSpeed(),a=Qt.DROP_ZOOM_MAX-i*Qt.SPEED_ZOOM_FACTOR,o=Math.max(Qt.DROP_ZOOM_MIN,Math.min(Qt.DROP_ZOOM_MAX,a));this.camera.setTargetZoom(Math.min(s,o));const c=this.egg.getVelX(),u=this.egg.getVelY(),h=Math.sqrt(c*c+u*u);if(h>1){const d=Math.min(h*.03,.3),l=Math.atan2(Math.abs(u),Math.abs(c))/(Math.PI/2);this.egg.setSquash(1-d*(1-l)+d*l*.3,1+d*l-d*(1-l)*.3)}else this.egg.setSquash(1,1);i>1.5&&this.particles.emitTrail(this.egg.getX(),this.egg.body.position.y,i),this._checkStuck(t)}_checkStuck(t){if(!this.egg||this.egg.landed)return;const e=this.egg.getSpeed(),n=this.egg.getX(),s=De.WIDTH/2-rm;if(e<im&&Math.abs(n)>s?this._stuckTimer+=t:this._stuckTimer=Math.max(0,this._stuckTimer-t*2),this._stuckTimer>=sm){const i=n>0?-1:1;this.physics.applyForce(this.egg.body,{x:i*am,y:om}),this.particles.spawnFloatingText(n,-this.egg.getY(),"BLAST OFF!",48,"#FF4400"),this._stuckTimer=0}}_updateLand(t){for(const e of this._duplicateEggs)e.alive&&e.update();if(this._freezeTimer>0){this._freezeTimer-=t,this.egg&&(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY()));return}if(this._stateTimer+=t,this.egg){const e=Math.min(this._stateTimer/Pe.HATCH_DELAY,1),n=1.3+(1-1.3)*e,s=.7+(1-.7)*e;this.egg.setSquash(n,s),this.egg.update(),this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY())}this._stateTimer>=Pe.HATCH_DELAY&&this._enterHatch()}_updateHatch(t){if(this._stateTimer+=t,this.egg&&(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY())),this._stateTimer<Pe.WOBBLE_DURATION){const e=this._stateTimer/Pe.WOBBLE_DURATION,n=e*e;if(this._wobblePhase+=t*(20+n*30),this.egg){const i=Math.sin(this._wobblePhase)*(.15+n*.25);this.egg.mesh.rotation.z=i}this.camera.shake(n*Qt.HATCH_SHAKE_MAX),this._drumrollTimer-=t;const s=.15-n*.11;this._drumrollTimer<=0&&(this.audio.drumrollHit(n),this._drumrollTimer=s)}else if(this._stateTimer<Pe.WOBBLE_DURATION+Pe.CRACK_DURATION)this.egg&&this.egg._crackLines.length===0&&this.egg.showCracks(),this.camera.shake(Qt.HATCH_SHAKE_MAX*.8);else if(this._stateTimer>=Pe.WOBBLE_DURATION+Pe.CRACK_DURATION&&this.egg&&!this._coinFountainActive){const e=this.egg.getX(),n=-this.egg.getY();this._hatchEggX=e,this._hatchEggY=n,this.hud.screenFlash(),this.audio.hatch(),this.particles.emitHatchExplosion(e,n),this.renderer.setBgBrightness(.15),this.egg.destroy(this.renderer.scene),this.egg=null,this._startCoinFountain(e,n)}if(this._coinFountainActive){const e=this._stateTimer-(Pe.WOBBLE_DURATION+Pe.CRACK_DURATION);this.renderer.setBgBrightness(Math.max(0,.15-e*.2))}}_startCoinFountain(t,e){this._coinFountainActive=!0;const n=this.renderer.projectToScreen(t,e),s=Math.min(Math.max(Math.ceil(Math.sqrt(this._landingGold)),3),20),i=Math.round(this._landingGold/s);let a=0;this.hud.spawnCoinFountain(n.x,n.y,s,i,(o,c,u)=>{a+=o,Math.min(this.score.totalGold+o,this.score.totalGold+this._landingGold-(a-o)),this.score.collectGold(o),this.hud.setGold(this.score.totalGold),this.audio.coinCollect(c,u)},()=>{this._coinFountainActive=!1,this.renderer.setBgBrightness(0),this.hud.hideRunGold(),setTimeout(()=>{this.state===ce.HATCH&&this._enterTransition()},300)})}_updateTransition(t){this._stateTimer+=t}}const Bo=.15;class cm{constructor(t){this._time=0,this._dir=1,this._laying=!1,this._layTimer=0,this._celebTimer=0,this._flipTimer=0,this._frameIndex=0,this._warmingUp=!1,this._warmupTimer=0,this._warmupDuration=0,this._flyFrames=[t.chickenFly1,t.chickenFly2],this._frames=this._flyFrames,this.group=new Yn,this.group.position.set(0,-65,5),this.group.scale.x=-1;const e=pe.BODY_RADIUS*2.8,n=new xe(e,e),s=new Ue({map:this._frames[0],transparent:!0});this.sprite=new re(n,s),this.group.add(this.sprite),this._minX=-390/2+40,this._maxX=De.WIDTH/2-40}getX(){return this.group.position.x}getDropX(){return this.group.position.x}getDropY(){return-this.group.position.y+pe.BODY_RADIUS+5}warmup(t,e){this._warmingUp=!0,this._warmupTimer=0,this._warmupDuration=e,this._frames=t,this._frameIndex=0,this._flipTimer=0,this.sprite.material.map=this._frames[0]}stopWarmup(){this._warmingUp=!1,this._warmupTimer=0,this._frames=this._flyFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this.sprite.scale.set(1,1,1),this.sprite.position.x=0}lay(){this._laying=!0,this._layTimer=pe.LAY_DURATION}celebrate(){this._celebTimer=.6}update(t){if(this._time+=t,this._flipTimer+=t,this._flipTimer>=Bo&&(this._flipTimer-=Bo,this._frameIndex=(this._frameIndex+1)%this._frames.length,this.sprite.material.map=this._frames[this._frameIndex]),this._warmingUp){this._warmupTimer+=t;const n=Math.min(this._warmupTimer/this._warmupDuration,1),s=n*n,i=1-.3*s,a=1+.25*s;this.sprite.scale.set(a,i,1);const o=s*1.5*(Math.random()-.5)*2;this.sprite.position.x=o;const c=Math.sin(this._time*pe.BOB_SPEED)*pe.BOB_AMPLITUDE*(1-s*.5);this.group.position.y=-65+c;return}if(this._laying){this._layTimer-=t;const n=1-this._layTimer/pe.LAY_DURATION,s=n<.5?1-.3*(n*2):.7+.3*((n-.5)*2);this.sprite.scale.set(1+(1-s)*.5,s,1),this._layTimer<=0&&(this._laying=!1,this.sprite.scale.set(1,1,1));return}if(this._celebTimer>0){this._celebTimer-=t;const n=Math.sin(this._celebTimer*30)*3;this.group.position.y=-65+n,this._celebTimer<=0&&(this.group.position.y=-65);return}this.group.position.x+=pe.SPEED*this._dir*t,this.group.position.x>this._maxX?(this._dir=-1,this.group.scale.x=1):this.group.position.x<this._minX&&(this._dir=1,this.group.scale.x=-1);const e=Math.sin(this._time*pe.BOB_SPEED)*pe.BOB_AMPLITUDE;this.group.position.y=-65+e}}class hm{constructor(t,e){this.scene=t,this.textures=e,this._clouds=[],this._mountains=[],this._groundDetails=[],this._createGround(),this._createMountains(),this._createClouds(),this._createGroundDetails()}_makeSprite(t,e,n,s,i,a,o=1){const c=new xe(e,n),u=new Ue({map:t,transparent:!0,opacity:o,depthWrite:!1}),h=new re(c,u);return h.position.set(s,i,a),this.scene.add(h),h}_createGround(){const e=fn.GROUND_HEIGHT,n=fn.GROUND_WIDTH,s=new Ue({color:fn.GROUND_COLOR}),i=new re(new xe(n,e),s);i.position.set(0,-810-e/2,-1),this.scene.add(i);const a=fn.GROUND_TOP_HEIGHT,o=new Ue({color:fn.GROUND_TOP_COLOR}),c=new re(new xe(n,a),o);c.position.set(0,-810-a/2,-.9),this.scene.add(c)}_createMountains(){const t=this.textures,e=-810;if(t.mountainsFar){const n=this._makeSprite(t.mountainsFar,550,220,-40,e+100,-4,.7);n._baseY=e+100,n._parallax=fn.MOUNTAIN_PARALLAX*.6,this._mountains.push(n);const s=this._makeSprite(t.mountainsFar,500,190,180,e+80,-4,.5);s.scale.x=-1,s._baseY=e+80,s._parallax=fn.MOUNTAIN_PARALLAX*.6,this._mountains.push(s)}if(t.mountainsNear){const n=this._makeSprite(t.mountainsNear,600,240,0,e+90,-3,.85);n._baseY=e+90,n._parallax=fn.MOUNTAIN_PARALLAX,this._mountains.push(n)}}_createClouds(){const t=this.textures,e=[{key:"cloudLarge",x:-120,gameY:20,w:160,h:80,z:-6,opacity:.9},{key:"cloudMedium",x:100,gameY:60,w:120,h:60,z:-5,opacity:.85},{key:"cloudSmall",x:-60,gameY:130,w:90,h:35,z:-5,opacity:.7},{key:"cloudLarge",x:150,gameY:200,w:130,h:65,z:-6,opacity:.6},{key:"cloudMedium",x:-140,gameY:280,w:100,h:50,z:-5,opacity:.55},{key:"cloudSmall",x:50,gameY:350,w:80,h:30,z:-6,opacity:.45},{key:"cloudSmall",x:-100,gameY:450,w:70,h:28,z:-5,opacity:.35}];for(const n of e){const s=t[n.key];if(!s)continue;const i=-n.gameY,a=this._makeSprite(s,n.w,n.h,n.x,i,n.z,n.opacity);a._baseY=i,this._clouds.push(a)}}_createGroundDetails(){const t=this.textures,e=-810,n=[{key:"grass01",x:-130,w:30,h:35,offsetY:12},{key:"bush01",x:-60,w:40,h:28,offsetY:8},{key:"hut01",x:20,w:55,h:50,offsetY:20},{key:"grass01",x:100,w:25,h:30,offsetY:10},{key:"bush01",x:160,w:35,h:25,offsetY:7},{key:"grass01",x:-170,w:22,h:26,offsetY:8}];for(const s of n){const i=t[s.key];if(!i)continue;const a=e+s.offsetY;this._makeSprite(i,s.w,s.h,s.x,a,-.5)}}update(t){const n=t.currentY;for(const s of this._clouds)s.position.y=s._baseY+n*fn.CLOUD_PARALLAX;for(const s of this._mountains)s.position.y=s._baseY+n*s._parallax}}class um{constructor(){this._goldEl=document.getElementById("gold-count"),this._runGoldEl=document.getElementById("run-gold-count"),this._runGoldDisplay=document.getElementById("run-gold-display"),this._comboDisplay=document.getElementById("combo-display"),this._tapPrompt=document.getElementById("tap-prompt"),this._screenFlash=document.getElementById("screen-flash"),this._edgeGlow=document.getElementById("edge-glow"),this._goldPill=document.querySelector(".gold-pill"),this._viewport=document.getElementById("game-viewport"),this._powerupBar=document.getElementById("powerup-bar"),this._powerupBtn=document.getElementById("powerup-dupli-bounce"),this._powerupNameEl=this._powerupBtn.querySelector(".powerup-name"),this._subtleTapPrompt=document.getElementById("tap-prompt-subtle"),this._upgradeToggle=document.getElementById("upgrade-toggle"),this._upgradeBackdrop=document.getElementById("upgrade-backdrop"),this._upgradePanel=document.getElementById("upgrade-panel"),this._upgradeClose=document.getElementById("upgrade-close"),this._upgradeList=document.getElementById("upgrade-list"),this._goalBar=document.getElementById("goal-bar"),this._goalBarFill=document.getElementById("goal-bar-fill"),this._goalBarEmoji=document.getElementById("goal-bar-emoji"),this._goalBarText=document.getElementById("goal-bar-text"),this._goalBarProgress=document.getElementById("goal-bar-progress"),this._panelOpen=!1,this._upgradeRows={},this._upgradeCallback=null,this._upgradeToggle.addEventListener("pointerdown",t=>{t.stopPropagation(),this.openUpgradePanel()}),this._upgradeClose.addEventListener("pointerdown",t=>{t.stopPropagation(),this.closeUpgradePanel()}),this._upgradeBackdrop.addEventListener("pointerdown",t=>{t.stopPropagation(),this.closeUpgradePanel()}),this._goalBar.addEventListener("pointerdown",t=>{t.stopPropagation(),this.openUpgradePanel()})}setGold(t){this._goldEl.textContent=t}throbGold(){this._goldPill.classList.remove("throb"),this._goldPill.offsetWidth,this._goldPill.classList.add("throb"),setTimeout(()=>this._goldPill.classList.remove("throb"),120)}setRunGold(t){this._runGoldEl.textContent=t,this._runGoldDisplay.classList.add("visible")}setCombo(t){t>1?(this._comboDisplay.textContent=`x${t}`,this._comboDisplay.classList.add("visible"),this._comboDisplay.style.transform=`translateX(-50%) scale(${1+t*.05})`):this._comboDisplay.classList.remove("visible")}setEdgeGlow(t){this._edgeGlow.style.opacity=Math.min(t,1)}showTapPrompt(){this._tapPrompt.classList.add("visible")}hideTapPrompt(){this._tapPrompt.classList.remove("visible")}showSubtleTapPrompt(){this._subtleTapPrompt.classList.add("visible")}hideSubtleTapPrompt(){this._subtleTapPrompt.classList.remove("visible")}hideRunGold(){this._runGoldDisplay.classList.remove("visible"),this._comboDisplay.classList.remove("visible"),this._edgeGlow.style.opacity=0}showGoalBar(){this._goalBar.classList.add("visible")}hideGoalBar(){this._goalBar.classList.remove("visible")}updateGoalBar({emoji:t,name:e,current:n,target:s}){if(!s||s===1/0){this.hideGoalBar();return}this._goalBarEmoji.textContent=t,this._goalBarText.textContent=e,this._goalBarProgress.textContent=`${n} / ${s}g`;const i=Math.min(n/s,1)*100;this._goalBarFill.style.width=`${i}%`,this.showGoalBar()}screenFlash(t=.15){this._screenFlash.style.opacity=.6,setTimeout(()=>{this._screenFlash.style.transition=`opacity ${t}s ease`,this._screenFlash.style.opacity=0},30),setTimeout(()=>{this._screenFlash.style.transition="opacity 0.1s ease"},t*1e3+50)}showPowerupButton(t){this._powerupBar.classList.add("visible"),this.updatePowerupAffordability(t),this.setPowerupIdle()}hidePowerupButton(){this._powerupBar.classList.remove("visible")}setPowerupActive(){this._powerupBtn.classList.remove("disabled"),this._powerupBtn.classList.add("active"),this._powerupNameEl.textContent="ACTIVE!"}setPowerupIdle(){this._powerupBtn.classList.remove("active"),this._powerupNameEl.textContent="Dupli-Bounce!"}updatePowerupAffordability(t){t?this._powerupBtn.classList.remove("disabled"):this._powerupBtn.classList.add("disabled")}onPowerupClick(t){this._powerupBtn.addEventListener("pointerdown",e=>{e.stopPropagation(),t()})}showUpgradeToggle(){this._upgradeToggle.classList.add("visible")}hideUpgradeToggle(){this._upgradeToggle.classList.remove("visible")}pulseUpgradeToggle(){this._upgradeToggle.classList.remove("pulse"),this._upgradeToggle.offsetWidth,this._upgradeToggle.classList.add("pulse"),this._upgradeToggle.addEventListener("animationend",()=>{this._upgradeToggle.classList.remove("pulse")},{once:!0})}setUpgradeToggleHighlight(t){t?this._upgradeToggle.classList.add("can-afford"):this._upgradeToggle.classList.remove("can-afford")}openUpgradePanel(){this._panelOpen||(this._panelOpen=!0,this._upgradePanel.classList.add("open"),this._upgradeBackdrop.classList.add("open"))}closeUpgradePanel(){this._panelOpen&&(this._panelOpen=!1,this._upgradePanel.classList.remove("open"),this._upgradeBackdrop.classList.remove("open"))}isPanelOpen(){return this._panelOpen}initUpgradeRows(t){this._upgradeList.innerHTML="";for(const e of t){const n=document.createElement("div");n.className="upgrade-item",n.dataset.type=e.id,n.style.display="none",n.innerHTML=`
        <div class="upgrade-item-icon">${e.emoji}</div>
        <div class="upgrade-item-info">
          <span class="upgrade-item-name">${e.name}</span>
          <span class="upgrade-item-desc">${e.description}</span>
          <span class="upgrade-item-level"></span>
        </div>
        <button class="upgrade-item-buy" data-type="${e.id}">
          <img class="buy-coin" src="sprites/icons/Coin.svg" alt="" />
          <span class="buy-price">${e.baseCost}</span>
        </button>
      `;const s=n.querySelector(".upgrade-item-buy");s.addEventListener("pointerdown",i=>{i.stopPropagation(),this._upgradeCallback&&this._upgradeCallback(e.id)}),this._upgradeList.appendChild(n),this._upgradeRows[e.id]={row:n,btn:s,priceEl:n.querySelector(".buy-price"),levelEl:n.querySelector(".upgrade-item-level"),descEl:n.querySelector(".upgrade-item-desc")}}}revealUpgradeRow(t){const e=this._upgradeRows[t];e&&(e.row.style.display="")}updateUpgradeRow(t,e){const n=this._upgradeRows[t];n&&(e.owned?e.level>=e.maxLevel?(n.priceEl.textContent="MAX",n.btn.querySelector(".buy-coin").style.display="none",n.levelEl.textContent=`Lv.${e.level}`,n.btn.disabled=!0,n.btn.classList.add("locked")):(n.priceEl.textContent=e.cost,n.btn.querySelector(".buy-coin").style.display="",n.levelEl.textContent=`Lv.${e.level}`,n.btn.disabled=!1,n.btn.classList.remove("locked")):(n.priceEl.textContent=e.cost,n.levelEl.textContent="",n.btn.disabled=!1,n.btn.classList.remove("locked")),e.canAfford&&!n.btn.disabled?n.btn.classList.remove("cannot-afford"):n.btn.classList.add("cannot-afford"))}onUpgradeRowClick(t){this._upgradeCallback=t}spawnCoinFountain(t,e,n,s,i,a){const o=this._goldPill.getBoundingClientRect(),c=this._viewport.getBoundingClientRect(),u=o.left+o.width/2-c.left,h=o.top+o.height/2-c.top,d=[];for(let p=0;p<n;p++){const _=document.createElement("div");_.className="flying-coin",_.style.left=`${t-10}px`,_.style.top=`${e-10}px`,_.style.transform="translate(0, 0) scale(1)",this._viewport.appendChild(_),d.push(_)}requestAnimationFrame(()=>{for(const p of d){const _=Math.random()*Math.PI*2,A=40+Math.random()*60,w=Math.cos(_)*A,E=Math.sin(_)*A-20;p.style.transform=`translate(${w}px, ${E}px) scale(1.1)`}});const f=700,l=100,m=350;let g=0;setTimeout(()=>{d.forEach((p,_)=>{setTimeout(()=>{const A=p.getBoundingClientRect(),w=A.left+A.width/2-c.left,E=A.top+A.height/2-c.top;p.style.transition="none",p.style.left=`${w-10}px`,p.style.top=`${E-10}px`,p.style.transform="translate(0, 0) scale(1)";const x=u-w,M=h-E,y=p.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${x*.5}px, ${M*.5-30}px) scale(0.8)`,opacity:1,offset:.5},{transform:`translate(${x}px, ${M}px) scale(0.3)`,opacity:.8}],{duration:m,easing:"ease-in",fill:"forwards"});y.onfinish=()=>{p.remove(),g++,i(s,g,n),this.throbGold(),g>=n&&a&&a()}},_*l)})},f)}}async function fm(){const r=await Zp.loadAll(),t=document.getElementById("game"),e=new zp(t),n=new Wp,s=new Xp(e.camera),i=new Yp(e.getCanvas()),a=new qp;await a.loadSound("chickenCluck","sounds/SFX_ChickenCluck.ogg"),await a.loadSound("chickenSqueeze1","sounds/SFX_Branny_ChickenSqueeze01.ogg"),await a.loadSound("chickenSqueeze2","sounds/SFX_Branny_ChickenSqueeze02.ogg"),await a.loadSound("chickenSqueeze3","sounds/SFX_Branny_ChickenSqueeze03.ogg");const o=new Qp,c=new em(e.scene),u=new jp(e.scene,n),h=new hm(e.scene,r),d=new cm(r);e.scene.add(d.group);const f=new um;document.getElementById("version-label").textContent=Bp.toString();const l=new lm({renderer:e,physics:n,camera:s,board:u,chicken:d,scoreManager:o,particleSystem:c,hud:f,audio:a,input:i,textures:r});let m=-1;function g(p){if(requestAnimationFrame(g),m<0){m=p;return}const _=Math.min((p-m)/1e3,1/20);m=p,n.update(_),l.update(_),h.update(s),e.render()}requestAnimationFrame(g)}fm();
