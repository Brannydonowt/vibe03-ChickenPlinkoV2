(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="172",Fl=0,Oa=1,Nl=2,$o=1,Ol=2,pn=3,In=0,Ft=1,mn=2,Pn=0,Mi=1,wr=2,Ba=3,za=4,Bl=5,Xn=100,zl=101,Hl=102,Gl=103,kl=104,Vl=200,Wl=201,Xl=202,Yl=203,Rr=204,Cr=205,ql=206,$l=207,Zl=208,Kl=209,Jl=210,jl=211,Ql=212,ec=213,tc=214,Pr=0,Lr=1,Dr=2,Ai=3,Ir=4,Ur=5,Fr=6,Nr=7,Zo=0,nc=1,ic=2,Ln=0,sc=1,rc=2,ac=3,oc=4,lc=5,cc=6,hc=7,Ko=300,bi=301,wi=302,Or=303,Br=304,ks=306,zr=1e3,qn=1001,Hr=1002,tn=1003,uc=1004,ts=1005,Gt=1006,Ys=1007,$n=1008,xn=1009,Jo=1010,jo=1011,Xi=1012,xa=1013,Jn=1014,gn=1015,$i=1016,Sa=1017,ya=1018,Ri=1020,Qo=35902,el=1021,tl=1022,en=1023,nl=1024,il=1025,Ei=1026,Ci=1027,sl=1028,Ma=1029,rl=1030,Ea=1031,Ta=1033,Ps=33776,Ls=33777,Ds=33778,Is=33779,Gr=35840,kr=35841,Vr=35842,Wr=35843,Xr=36196,Yr=37492,qr=37496,$r=37808,Zr=37809,Kr=37810,Jr=37811,jr=37812,Qr=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,Us=36492,la=36494,ca=36495,al=36283,ha=36284,ua=36285,fa=36286,fc=3200,dc=3201,pc=0,mc=1,Cn="",Ht="srgb",Pi="srgb-linear",Os="linear",et="srgb",ti=7680,Ha=519,gc=512,_c=513,vc=514,ol=515,xc=516,Sc=517,yc=518,Mc=519,da=35044,Ga="300 es",_n=2e3,Bs=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,pa=180/Math.PI;function Dn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function He(r,e,t){return Math.max(e,Math.min(t,r))}function Ec(r,e){return(r%e+e)%e}function $s(r,e,t){return(1-t)*r+t*e}function an(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*s+e.x,this.y=i*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,s,i,a,o,l,u){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,o,l,u)}set(e,t,n,s,i,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=i,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],c=n[5],m=n[8],g=s[0],p=s[3],_=s[6],E=s[1],T=s[4],A=s[7],x=s[2],y=s[5],M=s[8];return i[0]=a*g+o*E+l*x,i[3]=a*p+o*T+l*y,i[6]=a*_+o*A+l*M,i[1]=u*g+h*E+d*x,i[4]=u*p+h*T+d*y,i[7]=u*_+h*A+d*M,i[2]=f*g+c*E+m*x,i[5]=f*p+c*T+m*y,i[8]=f*_+c*A+m*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*i*h+n*o*l+s*i*u-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=h*a-o*u,f=o*l-h*i,c=u*i-a*l,m=t*d+n*f+s*c;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(s*u-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(h*t-s*l)*g,e[5]=(s*i-o*t)*g,e[6]=c*g,e[7]=(n*l-u*t)*g,e[8]=(a*t-n*i)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,i,a,o){const l=Math.cos(i),u=Math.sin(i);return this.set(n*l,n*u,-n*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Ie;function ll(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tc(){const r=Yi("canvas");return r.style.display="block",r}const ka={};function Si(r){r in ka||(ka[r]=!0,console.warn(r))}function Ac(r,e,t){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:n()}}setTimeout(i,t)})}function bc(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wc(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Va=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wa=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rc(){const r={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(s,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===et&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},fromWorkingColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},toWorkingColorSpace:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Os:this.spaces[s].transfer},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,a){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Pi]:{primaries:e,whitePoint:n,transfer:Os,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),r}const qe=Rc();function vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ti(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ni;class Cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Yi("canvas")),ni.width=e.width,ni.height=e.height;const n=ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=vn(i[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pc=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?i.push(Ks(s[a].image)):i.push(Ks(s[a]))}else i=Ks(s);n.url=i}return t||(e.images[this.uuid]=n),n}}function Ks(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lc=0;class At extends Di{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=qn,s=qn,i=Gt,a=$n,o=en,l=xn,u=At.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Dn(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Ko;At.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,i;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],c=l[5],m=l[9],g=l[2],p=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+p)<.1&&Math.abs(u+c+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,A=(c+1)/2,x=(_+1)/2,y=(h+f)/4,M=(d+g)/4,b=(m+p)/4;return T>A&&T>x?T<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(T),s=y/n,i=M/n):A>x?A<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(A),n=y/s,i=b/s):x<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(x),n=M/i,s=b/i),this.set(n,s,i,t),this}let E=Math.sqrt((p-m)*(p-m)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(d-g)/E,this.z=(f-h)/E,this.w=Math.acos((u+c+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dc extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const i=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hl extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ic extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,i,a,o){let l=n[s+0],u=n[s+1],h=n[s+2],d=n[s+3];const f=i[a+0],c=i[a+1],m=i[a+2],g=i[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=c,e[t+2]=m,e[t+3]=g;return}if(d!==g||l!==f||u!==c||h!==m){let p=1-o;const _=l*f+u*c+h*m+d*g,E=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const x=Math.sqrt(T),y=Math.atan2(x,_*E);p=Math.sin(p*y)/x,o=Math.sin(o*y)/x}const A=o*E;if(l=l*p+f*A,u=u*p+c*A,h=h*p+m*A,d=d*p+g*A,p===1-o){const x=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=x,u*=x,h*=x,d*=x}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,i,a){const o=n[s],l=n[s+1],u=n[s+2],h=n[s+3],d=i[a],f=i[a+1],c=i[a+2],m=i[a+3];return e[t]=o*m+h*d+l*c-u*f,e[t+1]=l*m+h*f+u*d-o*c,e[t+2]=u*m+h*c+o*f-l*d,e[t+3]=h*m-o*d-l*f-u*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(s/2),d=o(i/2),f=l(n/2),c=l(s/2),m=l(i/2);switch(a){case"XYZ":this._x=f*h*d+u*c*m,this._y=u*c*d-f*h*m,this._z=u*h*m+f*c*d,this._w=u*h*d-f*c*m;break;case"YXZ":this._x=f*h*d+u*c*m,this._y=u*c*d-f*h*m,this._z=u*h*m-f*c*d,this._w=u*h*d+f*c*m;break;case"ZXY":this._x=f*h*d-u*c*m,this._y=u*c*d+f*h*m,this._z=u*h*m+f*c*d,this._w=u*h*d-f*c*m;break;case"ZYX":this._x=f*h*d-u*c*m,this._y=u*c*d+f*h*m,this._z=u*h*m-f*c*d,this._w=u*h*d+f*c*m;break;case"YZX":this._x=f*h*d+u*c*m,this._y=u*c*d+f*h*m,this._z=u*h*m-f*c*d,this._w=u*h*d-f*c*m;break;case"XZY":this._x=f*h*d-u*c*m,this._y=u*c*d-f*h*m,this._z=u*h*m+f*c*d,this._w=u*h*d+f*c*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],i=t[8],a=t[1],o=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const c=.5/Math.sqrt(f+1);this._w=.25/c,this._x=(h-l)*c,this._y=(i-u)*c,this._z=(a-s)*c}else if(n>o&&n>d){const c=2*Math.sqrt(1+n-o-d);this._w=(h-l)/c,this._x=.25*c,this._y=(s+a)/c,this._z=(i+u)/c}else if(o>d){const c=2*Math.sqrt(1+o-n-d);this._w=(i-u)/c,this._x=(s+a)/c,this._y=.25*c,this._z=(l+h)/c}else{const c=2*Math.sqrt(1+d-n-o);this._w=(a-s)/c,this._x=(i+u)/c,this._y=(l+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,i=e._z,a=e._w,o=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-i*l,this._y=s*h+a*l+i*o-n*u,this._z=i*h+a*u+n*l-s*o,this._w=a*h-n*o-s*l-i*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,i=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const c=1-t;return this._w=c*a+t*this._w,this._x=c*n+t*this._x,this._y=c*s+t*this._y,this._z=c*i+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=i*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*s,this.y=i[1]*t+i[4]*n+i[7]*s,this.z=i[2]*t+i[5]*n+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,i=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*s-o*n),h=2*(o*t-i*s),d=2*(i*n-a*t);return this.x=t+l*u+a*d-o*h,this.y=n+l*h+o*u-i*d,this.z=s+l*d+i*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s,this.y=i[1]*t+i[5]*n+i[9]*s,this.z=i[2]*t+i[6]*n+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-i*o,this.y=i*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new k,Xa=new Zi;class Ki{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const i=n.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(i,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const s=e.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fi),is.subVectors(this.max,Fi),ii.subVectors(e.a,Fi),si.subVectors(e.b,Fi),ri.subVectors(e.c,Fi),Mn.subVectors(si,ii),En.subVectors(ri,si),Nn.subVectors(ii,ri);let t=[0,-Mn.z,Mn.y,0,-En.z,En.y,0,-Nn.z,Nn.y,Mn.z,0,-Mn.x,En.z,0,-En.x,Nn.z,0,-Nn.x,-Mn.y,Mn.x,0,-En.y,En.x,0,-Nn.y,Nn.x,0];return!js(t,ii,si,ri,is)||(t=[1,0,0,0,1,0,0,0,1],!js(t,ii,si,ri,is))?!1:(ss.crossVectors(Mn,En),t=[ss.x,ss.y,ss.z],js(t,ii,si,ri,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new k,new k,new k,new k,new k,new k,new k,new k],Zt=new k,ns=new Ki,ii=new k,si=new k,ri=new k,Mn=new k,En=new k,Nn=new k,Fi=new k,is=new k,ss=new k,On=new k;function js(r,e,t,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){On.fromArray(r,i);const o=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),l=e.dot(On),u=t.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Uc=new Ki,Ni=new k,Qs=new k;class Ji{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uc.setFromPoints(e).getCenter(n);let s=0;for(let i=0,a=e.length;i<a;i++)s=Math.max(s,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(Qs)),this.expandByPoint(Ni.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new k,er=new k,rs=new k,Tn=new k,tr=new k,as=new k,nr=new k;class Aa{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){er.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(er);const i=e.distanceTo(t)*.5,a=-this.direction.dot(rs),o=Tn.dot(this.direction),l=-Tn.dot(rs),u=Tn.lengthSq(),h=Math.abs(1-a*a);let d,f,c,m;if(h>0)if(d=a*l-o,f=a*o-l,m=i*h,d>=0)if(f>=-m)if(f<=m){const g=1/h;d*=g,f*=g,c=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=i,d=Math.max(0,-(a*f+o)),c=-d*d+f*(f+2*l)+u;else f=-i,d=Math.max(0,-(a*f+o)),c=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-a*i+o)),f=d>0?-i:Math.min(Math.max(-i,-l),i),c=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-i,-l),i),c=f*(f+2*l)+u):(d=Math.max(0,-(a*i+o)),f=d>0?i:Math.min(Math.max(-i,-l),i),c=-d*d+f*(f+2*l)+u);else f=a>0?-i:i,d=Math.max(0,-(a*f+o)),c=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(er).addScaledVector(rs,f),c}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,i=e.radius*e.radius;if(s>i)return null;const a=Math.sqrt(i-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,i,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,s=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,s=(e.min.x-f.x)*u),h>=0?(i=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(i=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,i){tr.subVectors(t,e),as.subVectors(n,e),nr.crossVectors(tr,as);let a=this.direction.dot(nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const l=o*this.direction.dot(as.crossVectors(Tn,as));if(l<0)return null;const u=o*this.direction.dot(tr.cross(Tn));if(u<0||l+u>a)return null;const h=-o*Tn.dot(nr);return h<0?null:this.at(h/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,i,a,o,l,u,h,d,f,c,m,g,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,i,a,o,l,u,h,d,f,c,m,g,p)}set(e,t,n,s,i,a,o,l,u,h,d,f,c,m,g,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=i,_[5]=a,_[9]=o,_[13]=l,_[2]=u,_[6]=h,_[10]=d,_[14]=f,_[3]=c,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),i=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(i),d=Math.sin(i);if(e.order==="XYZ"){const f=a*h,c=a*d,m=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=c+m*u,t[5]=f-g*u,t[9]=-o*l,t[2]=g-f*u,t[6]=m+c*u,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,c=l*d,m=u*h,g=u*d;t[0]=f+g*o,t[4]=m*o-c,t[8]=a*u,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=c*o-m,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,c=l*d,m=u*h,g=u*d;t[0]=f-g*o,t[4]=-a*d,t[8]=m+c*o,t[1]=c+m*o,t[5]=a*h,t[9]=g-f*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,c=a*d,m=o*h,g=o*d;t[0]=l*h,t[4]=m*u-c,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=c*u-m,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,c=a*u,m=o*l,g=o*u;t[0]=l*h,t[4]=g-f*d,t[8]=m*d+c,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=c*d+m,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,c=a*u,m=o*l,g=o*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+g,t[5]=a*h,t[9]=c*d-m,t[2]=m*d-c,t[6]=o*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fc,e,Nc)}lookAt(e,t,n){const s=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),An.crossVectors(n,Bt),An.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),An.crossVectors(n,Bt)),An.normalize(),os.crossVectors(Bt,An),s[0]=An.x,s[4]=os.x,s[8]=Bt.x,s[1]=An.y,s[5]=os.y,s[9]=Bt.y,s[2]=An.z,s[6]=os.z,s[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,i=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],c=n[13],m=n[2],g=n[6],p=n[10],_=n[14],E=n[3],T=n[7],A=n[11],x=n[15],y=s[0],M=s[4],b=s[8],S=s[12],v=s[1],w=s[5],P=s[9],D=s[13],U=s[2],F=s[6],z=s[10],G=s[14],H=s[3],J=s[7],ie=s[11],ce=s[15];return i[0]=a*y+o*v+l*U+u*H,i[4]=a*M+o*w+l*F+u*J,i[8]=a*b+o*P+l*z+u*ie,i[12]=a*S+o*D+l*G+u*ce,i[1]=h*y+d*v+f*U+c*H,i[5]=h*M+d*w+f*F+c*J,i[9]=h*b+d*P+f*z+c*ie,i[13]=h*S+d*D+f*G+c*ce,i[2]=m*y+g*v+p*U+_*H,i[6]=m*M+g*w+p*F+_*J,i[10]=m*b+g*P+p*z+_*ie,i[14]=m*S+g*D+p*G+_*ce,i[3]=E*y+T*v+A*U+x*H,i[7]=E*M+T*w+A*F+x*J,i[11]=E*b+T*P+A*z+x*ie,i[15]=E*S+T*D+A*G+x*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],i=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],c=e[14],m=e[3],g=e[7],p=e[11],_=e[15];return m*(+i*l*d-s*u*d-i*o*f+n*u*f+s*o*c-n*l*c)+g*(+t*l*c-t*u*f+i*a*f-s*a*c+s*u*h-i*l*h)+p*(+t*u*d-t*o*c-i*a*d+n*a*c+i*o*h-n*u*h)+_*(-s*o*h-t*l*d+t*o*f+s*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],i=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],c=e[11],m=e[12],g=e[13],p=e[14],_=e[15],E=d*p*u-g*f*u+g*l*c-o*p*c-d*l*_+o*f*_,T=m*f*u-h*p*u-m*l*c+a*p*c+h*l*_-a*f*_,A=h*g*u-m*d*u+m*o*c-a*g*c-h*o*_+a*d*_,x=m*d*l-h*g*l-m*o*f+a*g*f+h*o*p-a*d*p,y=t*E+n*T+s*A+i*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=E*M,e[1]=(g*f*i-d*p*i-g*s*c+n*p*c+d*s*_-n*f*_)*M,e[2]=(o*p*i-g*l*i+g*s*u-n*p*u-o*s*_+n*l*_)*M,e[3]=(d*l*i-o*f*i-d*s*u+n*f*u+o*s*c-n*l*c)*M,e[4]=T*M,e[5]=(h*p*i-m*f*i+m*s*c-t*p*c-h*s*_+t*f*_)*M,e[6]=(m*l*i-a*p*i-m*s*u+t*p*u+a*s*_-t*l*_)*M,e[7]=(a*f*i-h*l*i+h*s*u-t*f*u-a*s*c+t*l*c)*M,e[8]=A*M,e[9]=(m*d*i-h*g*i-m*n*c+t*g*c+h*n*_-t*d*_)*M,e[10]=(a*g*i-m*o*i+m*n*u-t*g*u-a*n*_+t*o*_)*M,e[11]=(h*o*i-a*d*i-h*n*u+t*d*u+a*n*c-t*o*c)*M,e[12]=x*M,e[13]=(h*g*s-m*d*s+m*n*f-t*g*f-h*n*p+t*d*p)*M,e[14]=(m*o*s-a*g*s-m*n*l+t*g*l+a*n*p-t*o*p)*M,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*f+t*o*f)*M,this}scale(e){const t=this.elements,n=e.x,s=e.y,i=e.z;return t[0]*=n,t[4]*=s,t[8]*=i,t[1]*=n,t[5]*=s,t[9]*=i,t[2]*=n,t[6]*=s,t[10]*=i,t[3]*=n,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),i=1-n,a=e.x,o=e.y,l=e.z,u=i*a,h=i*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,h*o+n,h*l-s*a,0,u*l-s*o,h*l+s*a,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,i,a){return this.set(1,n,i,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,u=i+i,h=a+a,d=o+o,f=i*u,c=i*h,m=i*d,g=a*h,p=a*d,_=o*d,E=l*u,T=l*h,A=l*d,x=n.x,y=n.y,M=n.z;return s[0]=(1-(g+_))*x,s[1]=(c+A)*x,s[2]=(m-T)*x,s[3]=0,s[4]=(c-A)*y,s[5]=(1-(f+_))*y,s[6]=(p+E)*y,s[7]=0,s[8]=(m+T)*M,s[9]=(p-E)*M,s[10]=(1-(f+g))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let i=ai.set(s[0],s[1],s[2]).length();const a=ai.set(s[4],s[5],s[6]).length(),o=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const u=1/i,h=1/a,d=1/o;return Kt.elements[0]*=u,Kt.elements[1]*=u,Kt.elements[2]*=u,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=d,Kt.elements[9]*=d,Kt.elements[10]*=d,t.setFromRotationMatrix(Kt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,s,i,a,o=_n){const l=this.elements,u=2*i/(t-e),h=2*i/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let c,m;if(o===_n)c=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===Bs)c=-a/(a-i),m=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,i,a,o=_n){const l=this.elements,u=1/(t-e),h=1/(n-s),d=1/(a-i),f=(t+e)*u,c=(n+s)*h;let m,g;if(o===_n)m=(a+i)*d,g=-2*d;else if(o===Bs)m=i*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new k,Kt=new at,Fc=new k(0,0,0),Nc=new k(1,1,1),An=new k,os=new k,Bt=new k,Ya=new at,qa=new Zi;class Sn{constructor(e=0,t=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],a=s[4],o=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],c=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,c),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,c),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(o,c));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qa.setFromEuler(this),this.setFromQuaternion(qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oc=0;const $a=new k,oi=new Zi,hn=new at,ls=new k,Oi=new k,Bc=new k,zc=new Zi,Za=new k(1,0,0),Ka=new k(0,1,0),Ja=new k(0,0,1),ja={type:"added"},Hc={type:"removed"},li={type:"childadded",child:null},ir={type:"childremoved",child:null};class bt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new k,t=new Sn,n=new Zi,s=new k(1,1,1);function i(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ie}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(Ka,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(Ka,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ls.copy(e):ls.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Oi,ls,this.up):hn.lookAt(ls,Oi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(hn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),li.child=e,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hc),ir.child=e,this.dispatchEvent(ir),ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,Bc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,zc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];i(e.shapes,d)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(i(e.materials,this.material[l]));s.material=o}else s.material=i(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),c=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),c.length>0&&(n.animations=c),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new k(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new k,un=new k,sr=new k,fn=new k,ci=new k,hi=new k,Qa=new k,rr=new k,ar=new k,or=new k,lr=new ut,cr=new ut,hr=new ut;class Yt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(e,t,n,s,i){Jt.subVectors(s,t),un.subVectors(n,t),sr.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(un),l=Jt.dot(sr),u=un.dot(un),h=un.dot(sr),d=a*u-o*o;if(d===0)return i.set(0,0,0),null;const f=1/d,c=(u*l-o*h)*f,m=(a*h-o*l)*f;return i.set(1-c-m,m,c)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,s,i,a,o,l){return this.getBarycoord(e,t,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,n,s,i,a){return lr.setScalar(0),cr.setScalar(0),hr.setScalar(0),lr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),hr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lr,i.x),a.addScaledVector(cr,i.y),a.addScaledVector(hr,i.z),a}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),un.subVectors(e,t),Jt.cross(un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Jt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,i){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,s,i)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,i=this.c;let a,o;ci.subVectors(s,n),hi.subVectors(i,n),rr.subVectors(e,n);const l=ci.dot(rr),u=hi.dot(rr);if(l<=0&&u<=0)return t.copy(n);ar.subVectors(e,s);const h=ci.dot(ar),d=hi.dot(ar);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ci,a);or.subVectors(e,i);const c=ci.dot(or),m=hi.dot(or);if(m>=0&&c<=m)return t.copy(i);const g=c*u-l*m;if(g<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(n).addScaledVector(hi,o);const p=h*m-c*d;if(p<=0&&d-h>=0&&c-m>=0)return Qa.subVectors(i,s),o=(d-h)/(d-h+(c-m)),t.copy(s).addScaledVector(Qa,o);const _=1/(p+g+f);return a=g*_,o=f*_,t.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function ur(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Ec(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;this.r=ur(a,i,e+1/3),this.g=ur(a,i,e),this.b=ur(a,i,e-1/3)}return qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Ht){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=fl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return qe.fromWorkingColorSpace(Et.copy(this),e),Math.round(He(Et.r*255,0,255))*65536+Math.round(He(Et.g*255,0,255))*256+Math.round(He(Et.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,s=Et.g,i=Et.b,a=Math.max(n,s,i),o=Math.min(n,s,i);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-i)/d+(s<i?6:0);break;case s:l=(i-n)/d+2;break;case i:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ht){qe.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,s=Et.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(cs);const n=$s(bn.h,cs.h,t),s=$s(bn.s,cs.s,t),i=$s(bn.l,cs.l,t);return this.setHSL(n,s,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*s,this.g=i[1]*t+i[4]*n+i[7]*s,this.b=i[2]*t+i[5]*n+i[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ge;Ge.NAMES=fl;let Gc=0;class Qn extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Mi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Cr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rr&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(t){const i=s(e.textures),a=s(e.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wt extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new k,hs=new ke;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=da,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=an(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=an(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=an(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=an(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==da&&(e.usage=this.usage),e}}class dl extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pl extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kc=0;const Xt=new at,fr=new bt,ui=new k,zt=new Ki,Bi=new Ki,vt=new k;class kt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ll(e)?pl:dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new Ie().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,i=e.length;s<i;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const i=e[s];t.setXYZ(s,i.x,i.y,i.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const i=t[n];zt.setFromBufferAttribute(i),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(zt.min,Bi.min),zt.expandByPoint(vt),vt.addVectors(zt.max,Bi.max),zt.expandByPoint(vt)):(zt.expandByPoint(Bi.min),zt.expandByPoint(Bi.max))}zt.getCenter(n);let s=0;for(let i=0,a=e.count;i<a;i++)vt.fromBufferAttribute(e,i),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)vt.fromBufferAttribute(o,u),l&&(ui.fromBufferAttribute(e,u),vt.add(ui)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new k,l[b]=new k;const u=new k,h=new k,d=new k,f=new ke,c=new ke,m=new ke,g=new k,p=new k;function _(b,S,v){u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),f.fromBufferAttribute(i,b),c.fromBufferAttribute(i,S),m.fromBufferAttribute(i,v),h.sub(u),d.sub(u),c.sub(f),m.sub(f);const w=1/(c.x*m.y-m.x*c.y);isFinite(w)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-c.y).multiplyScalar(w),p.copy(d).multiplyScalar(c.x).addScaledVector(h,-m.x).multiplyScalar(w),o[b].add(g),o[S].add(g),o[v].add(g),l[b].add(p),l[S].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let b=0,S=E.length;b<S;++b){const v=E[b],w=v.start,P=v.count;for(let D=w,U=w+P;D<U;D+=3)_(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const T=new k,A=new k,x=new k,y=new k;function M(b){x.fromBufferAttribute(s,b),y.copy(x);const S=o[b];T.copy(S),T.sub(x.multiplyScalar(x.dot(S))).normalize(),A.crossVectors(y,S);const w=A.dot(l[b])<0?-1:1;a.setXYZW(b,T.x,T.y,T.z,w)}for(let b=0,S=E.length;b<S;++b){const v=E[b],w=v.start,P=v.count;for(let D=w,U=w+P;D<U;D+=3)M(e.getX(D+0)),M(e.getX(D+1)),M(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,c=n.count;f<c;f++)n.setXYZ(f,0,0,0);const s=new k,i=new k,a=new k,o=new k,l=new k,u=new k,h=new k,d=new k;if(e)for(let f=0,c=e.count;f<c;f+=3){const m=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,m),i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,i),d.subVectors(s,i),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,p),o.add(h),l.add(h),u.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,c=t.count;f<c;f+=3)s.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,i),d.subVectors(s,i),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(l.length*h);let c=0,m=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?c=l[g]*o.data.stride+o.offset:c=l[g]*h;for(let _=0;_<h;_++)f[m++]=u[c++]}return new Nt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,n);t.setAttribute(o,u)}const i=this.morphAttributes;for(const o in i){const l=[],u=i[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],c=e(f,n);l.push(c)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let i=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const c=u[d];h.push(c.toJSON(e.data))}h.length>0&&(s[l]=h,i=!0)}i&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const i=e.morphAttributes;for(const u in i){const h=[],d=i[u];for(let f=0,c=d.length;f<c;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eo=new at,Bn=new Aa,us=new Ji,to=new k,fs=new k,ds=new k,ps=new k,dr=new k,ms=new k,no=new k,gs=new k;class it extends bt{constructor(e=new kt,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(i&&o){ms.set(0,0,0);for(let l=0,u=i.length;l<u;l++){const h=o[l],d=i[l];h!==0&&(dr.fromBufferAttribute(d,e),a?ms.addScaledVector(dr,h):ms.addScaledVector(dr.sub(t),h))}t.add(ms)}return t}raycast(e,t){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),Bn.copy(e.ray).recast(e.near),!(us.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(us,to)===null||Bn.origin.distanceToSquared(to)>(e.far-e.near)**2))&&(eo.copy(i).invert(),Bn.copy(e.ray).applyMatrix4(eo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let s;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv1,d=i.attributes.normal,f=i.groups,c=i.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=a[p.materialIndex],E=Math.max(p.start,c.start),T=Math.min(o.count,Math.min(p.start+p.count,c.start+c.count));for(let A=E,x=T;A<x;A+=3){const y=o.getX(A),M=o.getX(A+1),b=o.getX(A+2);s=_s(this,_,e,n,u,h,d,y,M,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,c.start),g=Math.min(o.count,c.start+c.count);for(let p=m,_=g;p<_;p+=3){const E=o.getX(p),T=o.getX(p+1),A=o.getX(p+2);s=_s(this,a,e,n,u,h,d,E,T,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=a[p.materialIndex],E=Math.max(p.start,c.start),T=Math.min(l.count,Math.min(p.start+p.count,c.start+c.count));for(let A=E,x=T;A<x;A+=3){const y=A,M=A+1,b=A+2;s=_s(this,_,e,n,u,h,d,y,M,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,c.start),g=Math.min(l.count,c.start+c.count);for(let p=m,_=g;p<_;p+=3){const E=p,T=p+1,A=p+2;s=_s(this,a,e,n,u,h,d,E,T,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Vc(r,e,t,n,s,i,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,i,s,!0,o):l=n.intersectTriangle(s,i,a,e.side===In,o),l===null)return null;gs.copy(o),gs.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(gs);return u<t.near||u>t.far?null:{distance:u,point:gs.clone(),object:r}}function _s(r,e,t,n,s,i,a,o,l,u){r.getVertexPosition(o,fs),r.getVertexPosition(l,ds),r.getVertexPosition(u,ps);const h=Vc(r,e,t,n,fs,ds,ps,no);if(h){const d=new k;Yt.getBarycoord(no,fs,ds,ps,d),s&&(h.uv=Yt.getInterpolatedAttribute(s,o,l,u,d,new ke)),i&&(h.uv1=Yt.getInterpolatedAttribute(i,o,l,u,d,new ke)),a&&(h.normal=Yt.getInterpolatedAttribute(a,o,l,u,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new k,materialIndex:0};Yt.getNormal(fs,ds,ps,f.normal),h.face=f,h.barycoord=d}return h}class ji extends kt{constructor(e=1,t=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const o=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const l=[],u=[],h=[],d=[];let f=0,c=0;m("z","y","x",-1,-1,n,t,e,a,i,0),m("z","y","x",1,-1,n,t,-e,a,i,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,i,4),m("x","y","z",-1,-1,e,t,-n,s,i,5),this.setIndex(l),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function m(g,p,_,E,T,A,x,y,M,b,S){const v=A/M,w=x/b,P=A/2,D=x/2,U=y/2,F=M+1,z=b+1;let G=0,H=0;const J=new k;for(let ie=0;ie<z;ie++){const ce=ie*w-D;for(let ye=0;ye<F;ye++){const Le=ye*v-P;J[g]=Le*E,J[p]=ce*T,J[_]=U,u.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[_]=y>0?1:-1,h.push(J.x,J.y,J.z),d.push(ye/M),d.push(1-ie/b),G+=1}}for(let ie=0;ie<b;ie++)for(let ce=0;ce<M;ce++){const ye=f+ce+F*ie,Le=f+ce+F*(ie+1),q=f+(ce+1)+F*(ie+1),ee=f+(ce+1)+F*ie;l.push(ye,Le,ee),l.push(Le,q,ee),H+=6}o.addGroup(c,H,S),c+=H,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Pt(r){const e={};for(let t=0;t<r.length;t++){const n=Li(r[t]);for(const s in n)e[s]=n[s]}return e}function Wc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ml(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Xc={clone:Li,merge:Pt};var Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let ba=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const wn=new k,io=new ke,so=new ke;class Qt extends ba{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,io,so),t.subVectors(so,io)}setViewOffset(e,t,n,s,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;i+=a.offsetX*s/l,t-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,di=1;class $c extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(fi,di,e,t);s.layers=this.layers,this.add(s);const i=new Qt(fi,di,e,t);i.layers=this.layers,this.add(i);const a=new Qt(fi,di,e,t);a.layers=this.layers,this.add(a);const o=new Qt(fi,di,e,t);o.layers=this.layers,this.add(o);const l=new Qt(fi,di,e,t);l.layers=this.layers,this.add(l);const u=new Qt(fi,di,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,i,a,o,l]=t;for(const u of t)this.remove(u);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,i),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,c),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class gl extends At{constructor(e,t,n,s,i,a,o,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,n,s,i,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zc extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),i=new yn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Pn});i.uniforms.tEquirect.value=t;const a=new it(s,i),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Gt),new $c(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(i)}}class ro extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=da,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,i=this.stride;s<i;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new k;class zs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=an(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=an(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=an(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=an(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=an(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[s+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _l extends Qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const zi=new k,mi=new k,gi=new k,_i=new ke,Hi=new ke,vl=new at,vs=new k,Gi=new k,xs=new k,ao=new ke,pr=new ke,oo=new ke;class Jc extends bt{constructor(e=new _l){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kc(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new zs(n,3,0,!1)),pi.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=pi,this.material=e,this.center=new ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mi.setFromMatrixScale(this.matrixWorld),vl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mi.multiplyScalar(-gi.z);const n=this.material.rotation;let s,i;n!==0&&(i=Math.cos(n),s=Math.sin(n));const a=this.center;Ss(vs.set(-.5,-.5,0),gi,a,mi,s,i),Ss(Gi.set(.5,-.5,0),gi,a,mi,s,i),Ss(xs.set(.5,.5,0),gi,a,mi,s,i),ao.set(0,0),pr.set(1,0),oo.set(1,1);let o=e.ray.intersectTriangle(vs,Gi,xs,!1,zi);if(o===null&&(Ss(Gi.set(-.5,.5,0),gi,a,mi,s,i),pr.set(0,1),o=e.ray.intersectTriangle(vs,xs,Gi,!1,zi),o===null))return;const l=e.ray.origin.distanceTo(zi);l<e.near||l>e.far||t.push({distance:l,point:zi.clone(),uv:Yt.getInterpolation(zi,vs,Gi,xs,ao,pr,oo,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ss(r,e,t,n,s,i){_i.subVectors(r,t).addScalar(.5).multiply(n),s!==void 0?(Hi.x=i*_i.x-s*_i.y,Hi.y=s*_i.x+i*_i.y):Hi.copy(_i),r.copy(e),r.x+=Hi.x,r.y+=Hi.y,r.applyMatrix4(vl)}const mr=new k,jc=new k,Qc=new Ie;class Vn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mr.subVectors(n,t).cross(jc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qc.getNormalMatrix(e),s=this.coplanarPoint(mr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Ji,ys=new k;class xl{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,i=new Vn,a=new Vn){this.planes=[e,t,n,s,i,a]}set(e,t,n,s,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){const n=this.planes,s=e.elements,i=s[0],a=s[1],o=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],c=s[8],m=s[9],g=s[10],p=s[11],_=s[12],E=s[13],T=s[14],A=s[15];if(n[0].setComponents(l-i,f-u,p-c,A-_).normalize(),n[1].setComponents(l+i,f+u,p+c,A+_).normalize(),n[2].setComponents(l+a,f+h,p+m,A+E).normalize(),n[3].setComponents(l-a,f-h,p-m,A-E).normalize(),n[4].setComponents(l-o,f-d,p-g,A-T).normalize(),t===_n)n[5].setComponents(l+o,f+d,p+g,A+T).normalize();else if(t===Bs)n[5].setComponents(o,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ys.x=s.normal.x>0?e.max.x:e.min.x,ys.y=s.normal.y>0?e.max.y:e.min.y,ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sl extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hs=new k,Gs=new k,lo=new at,ki=new Aa,Ms=new Ji,gr=new k,co=new k;class eh extends bt{constructor(e=new kt,t=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,i=t.count;s<i;s++)Hs.fromBufferAttribute(t,s-1),Gs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Hs.distanceTo(Gs);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),Ms.radius+=i,e.ray.intersectsSphere(Ms)===!1)return;lo.copy(s).invert(),ki.copy(e.ray).applyMatrix4(lo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=c,p=m-1;g<p;g+=u){const _=h.getX(g),E=h.getX(g+1),T=Es(this,e,ki,l,_,E);T&&t.push(T)}if(this.isLineLoop){const g=h.getX(m-1),p=h.getX(c),_=Es(this,e,ki,l,g,p);_&&t.push(_)}}else{const c=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=c,p=m-1;g<p;g+=u){const _=Es(this,e,ki,l,g,g+1);_&&t.push(_)}if(this.isLineLoop){const g=Es(this,e,ki,l,m-1,c);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Es(r,e,t,n,s,i){const a=r.geometry.attributes.position;if(Hs.fromBufferAttribute(a,s),Gs.fromBufferAttribute(a,i),t.distanceSqToSegment(Hs,Gs,gr,co)>n)return;gr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(gr);if(!(l<e.near||l>e.far))return{distance:l,point:co.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}class yl extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ho=new at,ma=new Aa,Ts=new Ji,As=new k;class th extends bt{constructor(e=new kt,t=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ts.radius+=i,e.ray.intersectsSphere(Ts)===!1)return;ho.copy(s).invert(),ma.copy(e.ray).applyMatrix4(ho);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),c=Math.min(u.count,a.start+a.count);for(let m=f,g=c;m<g;m++){const p=u.getX(m);As.fromBufferAttribute(d,p),uo(As,p,l,s,e,t,this)}}else{const f=Math.max(0,a.start),c=Math.min(d.count,a.start+a.count);for(let m=f,g=c;m<g;m++)As.fromBufferAttribute(d,m),uo(As,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function uo(r,e,t,n,s,i,a){const o=ma.distanceSqToPoint(r);if(o<t){const l=new k;ma.closestPointToPoint(r,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;i.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qi extends At{constructor(e,t,n,s,i,a,o,l,u){super(e,t,n,s,i,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ml extends At{constructor(e,t,n,s,i,a,o,l,u,h=Ei){if(h!==Ei&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ei&&(n=Jn),n===void 0&&h===Ci&&(n=Ri),super(null,s,i,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wa extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const i=[],a=[],o=[],l=[],u=new k,h=new ke;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const c=n+d/t*s;u.x=e*Math.cos(c),u.y=e*Math.sin(c),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)i.push(d,d+1,0);this.setIndex(i),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(o,3)),this.setAttribute("uv",new nn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mt extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const i=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),u=o+1,h=l+1,d=e/o,f=t/l,c=[],m=[],g=[],p=[];for(let _=0;_<h;_++){const E=_*f-a;for(let T=0;T<u;T++){const A=T*d-i;m.push(A,-E,0),g.push(0,0,1),p.push(T/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<o;E++){const T=E+u*_,A=E+u*(_+1),x=E+1+u*(_+1),y=E+1+u*_;c.push(T,A,y),c.push(A,x,y)}this.setIndex(c),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.widthSegments,e.heightSegments)}}class nh extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ih extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class sh{constructor(e,t,n){const s=this;let i=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,i===!1&&s.onStart!==void 0&&s.onStart(h,a,o),i=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(i=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const c=u[d],m=u[d+1];if(c.global&&(c.lastIndex=0),c.test(h))return m}return null}}}const rh=new sh;class Ra{constructor(e){this.manager=e!==void 0?e:rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,i){n.load(e,s,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ra.DEFAULT_MATERIAL_NAME="__DEFAULT";class ah extends Ra{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=fo.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o=Yi("img");function l(){h(),fo.add(e,this),t&&t(this),i.manager.itemEnd(e)}function u(d){h(),s&&s(d),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class oh extends Ra{constructor(e){super(e)}load(e,t,n,s){const i=new At,a=new ah(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,s),i}}class El extends ba{constructor(e=-1,t=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=u*this.view.offsetX,a=i+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class lh extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function po(r,e,t,n){const s=ch(n);switch(t){case el:return r*e;case nl:return r*e;case il:return r*e*2;case sl:return r*e/s.components*s.byteLength;case Ma:return r*e/s.components*s.byteLength;case rl:return r*e*2/s.components*s.byteLength;case Ea:return r*e*2/s.components*s.byteLength;case tl:return r*e*3/s.components*s.byteLength;case en:return r*e*4/s.components*s.byteLength;case Ta:return r*e*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Is:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kr:case Wr:return Math.max(r,16)*Math.max(e,8)/4;case Gr:case Vr:return Math.max(r,8)*Math.max(e,8)/2;case Xr:case Yr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $r:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jr:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Us:case la:case ca:return Math.ceil(r/4)*Math.ceil(e/4)*16;case al:case ha:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ua:case fa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ch(r){switch(r){case xn:case Jo:return{byteLength:1,components:1};case Xi:case jo:case $i:return{byteLength:2,components:1};case Sa:case ya:return{byteLength:2,components:4};case Jn:case xa:case gn:return{byteLength:4,components:1};case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tl(){let r=null,e=!1,t=null,n=null;function s(i,a){t(i,a),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){r=i}}}function hh(r){const e=new WeakMap;function t(o,l){const u=o.array,h=o.usage,d=u.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,u,h),o.onUploadCallback();let c;if(u instanceof Float32Array)c=r.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?c=r.HALF_FLOAT:c=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=r.SHORT;else if(u instanceof Uint32Array)c=r.UNSIGNED_INT;else if(u instanceof Int32Array)c=r.INT;else if(u instanceof Int8Array)c=r.BYTE;else if(u instanceof Uint8Array)c=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,u){const h=l.array,d=l.updateRanges;if(r.bindBuffer(u,o),d.length===0)r.bufferSubData(u,0,h);else{d.sort((c,m)=>c.start-m.start);let f=0;for(let c=1;c<d.length;c++){const m=d[f],g=d[c];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let c=0,m=d.length;c<m;c++){const g=d[c];r.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:s,remove:i,update:a}}var uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fh=`#ifdef USE_ALPHAHASH
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
#endif`,dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_h=`#ifdef USE_AOMAP
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
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh=`#ifdef USE_BATCHING
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
#endif`,Sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Th=`#ifdef USE_IRIDESCENCE
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
#endif`,Ah=`#ifdef USE_BUMPMAP
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
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uh=`#define PI 3.141592653589793
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
} // validated`,Fh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jh=`#ifdef USE_GRADIENTMAP
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
}`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nu=`uniform bool receiveShadow;
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
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lu=`PhysicalMaterial material;
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
#endif`,cu=`struct PhysicalMaterial {
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
}`,hu=`
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
#endif`,uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Su=`#if defined( USE_POINTS_UV )
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
#endif`,yu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`#ifdef USE_MORPHTARGETS
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
#endif`,wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iu=`#ifdef USE_NORMALMAP
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
#endif`,Uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ou=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zu=`float getShadowMask() {
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
}`,Ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
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
#endif`,ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rf=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
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
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
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
}`,vf=`#if DEPTH_PACKING == 3200
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
}`,xf=`#define DISTANCE
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
}`,Sf=`#define DISTANCE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Af=`#include <common>
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
}`,bf=`uniform vec3 diffuse;
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
}`,wf=`#define LAMBERT
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
}`,Rf=`#define LAMBERT
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
}`,Cf=`#define MATCAP
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,Df=`#define NORMAL
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
}`,If=`#define PHONG
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
}`,Uf=`#define PHONG
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
}`,Ff=`#define STANDARD
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
}`,Nf=`#define STANDARD
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
}`,Of=`#define TOON
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
}`,Bf=`#define TOON
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
}`,zf=`uniform float size;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,kf=`uniform vec3 color;
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
}`,Vf=`uniform float rotation;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:uh,alphahash_pars_fragment:fh,alphamap_fragment:dh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:gh,aomap_fragment:_h,aomap_pars_fragment:vh,batching_pars_vertex:xh,batching_vertex:Sh,begin_vertex:yh,beginnormal_vertex:Mh,bsdfs:Eh,iridescence_fragment:Th,bumpmap_pars_fragment:Ah,clipping_planes_fragment:bh,clipping_planes_pars_fragment:wh,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ch,color_fragment:Ph,color_pars_fragment:Lh,color_pars_vertex:Dh,color_vertex:Ih,common:Uh,cube_uv_reflection_fragment:Fh,defaultnormal_vertex:Nh,displacementmap_pars_vertex:Oh,displacementmap_vertex:Bh,emissivemap_fragment:zh,emissivemap_pars_fragment:Hh,colorspace_fragment:Gh,colorspace_pars_fragment:kh,envmap_fragment:Vh,envmap_common_pars_fragment:Wh,envmap_pars_fragment:Xh,envmap_pars_vertex:Yh,envmap_physical_pars_fragment:iu,envmap_vertex:qh,fog_vertex:$h,fog_pars_vertex:Zh,fog_fragment:Kh,fog_pars_fragment:Jh,gradientmap_pars_fragment:jh,lightmap_pars_fragment:Qh,lights_lambert_fragment:eu,lights_lambert_pars_fragment:tu,lights_pars_begin:nu,lights_toon_fragment:su,lights_toon_pars_fragment:ru,lights_phong_fragment:au,lights_phong_pars_fragment:ou,lights_physical_fragment:lu,lights_physical_pars_fragment:cu,lights_fragment_begin:hu,lights_fragment_maps:uu,lights_fragment_end:fu,logdepthbuf_fragment:du,logdepthbuf_pars_fragment:pu,logdepthbuf_pars_vertex:mu,logdepthbuf_vertex:gu,map_fragment:_u,map_pars_fragment:vu,map_particle_fragment:xu,map_particle_pars_fragment:Su,metalnessmap_fragment:yu,metalnessmap_pars_fragment:Mu,morphinstance_vertex:Eu,morphcolor_vertex:Tu,morphnormal_vertex:Au,morphtarget_pars_vertex:bu,morphtarget_vertex:wu,normal_fragment_begin:Ru,normal_fragment_maps:Cu,normal_pars_fragment:Pu,normal_pars_vertex:Lu,normal_vertex:Du,normalmap_pars_fragment:Iu,clearcoat_normal_fragment_begin:Uu,clearcoat_normal_fragment_maps:Fu,clearcoat_pars_fragment:Nu,iridescence_pars_fragment:Ou,opaque_fragment:Bu,packing:zu,premultiplied_alpha_fragment:Hu,project_vertex:Gu,dithering_fragment:ku,dithering_pars_fragment:Vu,roughnessmap_fragment:Wu,roughnessmap_pars_fragment:Xu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:qu,shadowmap_vertex:$u,shadowmask_pars_fragment:Zu,skinbase_vertex:Ku,skinning_pars_vertex:Ju,skinning_vertex:ju,skinnormal_vertex:Qu,specularmap_fragment:ef,specularmap_pars_fragment:tf,tonemapping_fragment:nf,tonemapping_pars_fragment:sf,transmission_fragment:rf,transmission_pars_fragment:af,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:hf,background_vert:uf,background_frag:ff,backgroundCube_vert:df,backgroundCube_frag:pf,cube_vert:mf,cube_frag:gf,depth_vert:_f,depth_frag:vf,distanceRGBA_vert:xf,distanceRGBA_frag:Sf,equirect_vert:yf,equirect_frag:Mf,linedashed_vert:Ef,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:bf,meshlambert_vert:wf,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Df,meshphong_vert:If,meshphong_frag:Uf,meshphysical_vert:Ff,meshphysical_frag:Nf,meshtoon_vert:Of,meshtoon_frag:Bf,points_vert:zf,points_frag:Hf,shadow_vert:Gf,shadow_frag:kf,sprite_vert:Vf,sprite_frag:Wf},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},rn={basic:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Pt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Pt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Pt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Pt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Pt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Pt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Pt([re.common,re.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Pt([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};rn.physical={uniforms:Pt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const bs={r:0,b:0,g:0},Hn=new Sn,Xf=new at;function Yf(r,e,t,n,s,i,a){const o=new Ge(0);let l=i===!0?0:1,u,h,d=null,f=0,c=null;function m(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?t:e).get(A)),A}function g(T){let A=!1;const x=m(T);x===null?_(o,l):x&&x.isColor&&(_(x,1),A=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(T,A){const x=m(A);x&&(x.isCubeTexture||x.mapping===ks)?(h===void 0&&(h=new it(new ji(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Li(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hn.copy(A.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Hn)),h.material.toneMapped=qe.getTransfer(x.colorSpace)!==et,(d!==x||f!==x.version||c!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,c=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new it(new mt(2,2),new yn({name:"BackgroundMaterial",uniforms:Li(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=qe.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||c!==r.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,c=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function _(T,A){T.getRGB(bs,ml(r)),n.buffers.color.setClear(bs.r,bs.g,bs.b,A,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),l=A,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,_(o,l)},render:g,addToRenderList:p,dispose:E}}function qf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=f(null);let i=s,a=!1;function o(v,w,P,D,U){let F=!1;const z=d(D,P,w);i!==z&&(i=z,u(i.object)),F=c(v,D,P,U),F&&m(v,D,P,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,A(v,w,P,D),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function u(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function d(v,w,P){const D=P.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let F=U[w.id];F===void 0&&(F={},U[w.id]=F);let z=F[D];return z===void 0&&(z=f(l()),F[D]=z),z}function f(v){const w=[],P=[],D=[];for(let U=0;U<t;U++)w[U]=0,P[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:D,object:v,attributes:{},index:null}}function c(v,w,P,D){const U=i.attributes,F=w.attributes;let z=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){const ie=U[H];let ce=F[H];if(ce===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),ie===void 0||ie.attribute!==ce||ce&&ie.data!==ce.data)return!0;z++}return i.attributesNum!==z||i.index!==D}function m(v,w,P,D){const U={},F=w.attributes;let z=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){let ie=F[H];ie===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const ce={};ce.attribute=ie,ie&&ie.data&&(ce.data=ie.data),U[H]=ce,z++}i.attributes=U,i.attributesNum=z,i.index=D}function g(){const v=i.newAttributes;for(let w=0,P=v.length;w<P;w++)v[w]=0}function p(v){_(v,0)}function _(v,w){const P=i.newAttributes,D=i.enabledAttributes,U=i.attributeDivisors;P[v]=1,D[v]===0&&(r.enableVertexAttribArray(v),D[v]=1),U[v]!==w&&(r.vertexAttribDivisor(v,w),U[v]=w)}function E(){const v=i.newAttributes,w=i.enabledAttributes;for(let P=0,D=w.length;P<D;P++)w[P]!==v[P]&&(r.disableVertexAttribArray(P),w[P]=0)}function T(v,w,P,D,U,F,z){z===!0?r.vertexAttribIPointer(v,w,P,U,F):r.vertexAttribPointer(v,w,P,D,U,F)}function A(v,w,P,D){g();const U=D.attributes,F=P.getAttributes(),z=w.defaultAttributeValues;for(const G in F){const H=F[G];if(H.location>=0){let J=U[G];if(J===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const ie=J.normalized,ce=J.itemSize,ye=e.get(J);if(ye===void 0)continue;const Le=ye.buffer,q=ye.type,ee=ye.bytesPerElement,Q=q===r.INT||q===r.UNSIGNED_INT||J.gpuType===xa;if(J.isInterleavedBufferAttribute){const se=J.data,de=se.stride,Te=J.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)_(H.location+be,se.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<H.locationSize;be++)p(H.location+be);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let be=0;be<H.locationSize;be++)T(H.location+be,ce/H.locationSize,q,ie,de*ee,(Te+ce/H.locationSize*be)*ee,Q)}else{if(J.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)_(H.location+se,J.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let se=0;se<H.locationSize;se++)p(H.location+se);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let se=0;se<H.locationSize;se++)T(H.location+se,ce/H.locationSize,q,ie,ce*ee,ce/H.locationSize*se*ee,Q)}}else if(z!==void 0){const ie=z[G];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(H.location,ie);break;case 3:r.vertexAttrib3fv(H.location,ie);break;case 4:r.vertexAttrib4fv(H.location,ie);break;default:r.vertexAttrib1fv(H.location,ie)}}}}E()}function x(){b();for(const v in n){const w=n[v];for(const P in w){const D=w[P];for(const U in D)h(D[U].object),delete D[U];delete w[P]}delete n[v]}}function y(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const P in w){const D=w[P];for(const U in D)h(D[U].object),delete D[U];delete w[P]}delete n[v.id]}function M(v){for(const w in n){const P=n[w];if(P[v.id]===void 0)continue;const D=P[v.id];for(const U in D)h(D[U].object),delete D[U];delete P[v.id]}}function b(){S(),a=!0,i!==s&&(i=s,u(i.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:S,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function $f(r,e,t){let n;function s(u){n=u}function i(u,h){r.drawArrays(n,u,h),t.update(h,n,1)}function a(u,h,d){d!==0&&(r.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}function o(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let c=0;for(let m=0;m<d;m++)c+=h[m];t.update(c,n,1)}function l(u,h,d,f){if(d===0)return;const c=e.get("WEBGL_multi_draw");if(c===null)for(let m=0;m<u.length;m++)a(u[m],h[m],f[m]);else{c.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g]*f[g];t.update(m,n,1)}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zf(r,e,t,n){let s;function i(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==en&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const b=M===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==xn&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==gn&&!b)}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,y=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:c,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:x,maxSamples:y}}function Kf(r){const e=this;let t=null,n=0,s=!1,i=!1;const a=new Vn,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const c=d.length!==0||f||n!==0||s;return s=f,n=d.length,c},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,c){const m=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,_=r.get(d);if(!s||m===null||m.length===0||i&&!p)i?h(null):u();else{const E=i?0:n,T=E*4;let A=_.clippingState||null;l.value=A,A=h(m,f,T,c);for(let x=0;x!==T;++x)A[x]=t[x];_.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,c,m){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const _=c+g*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<_)&&(p=new Float32Array(_));for(let T=0,A=c;T!==g;++T,A+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Jf(r){let e=new WeakMap;function t(a,o){return o===Or?a.mapping=bi:o===Br&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Or||o===Br)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Zc(l.height);return u.fromEquirectangularTexture(r,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}const yi=4,mo=[.125,.215,.35,.446,.526,.582],Yn=20,_r=new El,go=new Ge;let vr=null,xr=0,Sr=0,yr=!1;const Wn=(1+Math.sqrt(5))/2,vi=1/Wn,_o=[new k(-Wn,vi,0),new k(Wn,vi,0),new k(-vi,0,Wn),new k(vi,0,Wn),new k(0,Wn,-vi),new k(0,Wn,vi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,s,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vr,xr,Sr),this._renderer.xr.enabled=yr,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:$i,format:en,colorSpace:Pi,depthBuffer:!1},s=xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(i)),this._blurMaterial=Qf(i,e,t)}return s}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,n,s){const o=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(go),h.toneMapping=Ln,h.autoClear=!1;const c=new wt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new it(new ji,c);let g=!1;const p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,g=!0):(c.color.copy(go),g=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(o.up.set(0,l[_],0),o.lookAt(u[_],0,0)):E===1?(o.up.set(0,0,l[_]),o.lookAt(0,u[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,u[_]));const T=this._cubeSize;ws(s,E*T,_>2?T:0,T,T),h.setRenderTarget(s),g&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bi||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,_r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_o[(s-i-1)%_o.length];this._blur(e,i-1,i,a,o)}t.autoClear=n}_blur(e,t,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",i),this._halfBlur(a,e,n,n,s,"longitudinal",i)}_halfBlur(e,t,n,s,i,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new it(this._lodPlanes[s],u),f=u.uniforms,c=this._sizeLods[n]-1,m=isFinite(i)?Math.PI/(2*c):2*Math.PI/(2*Yn-1),g=i/m,p=isFinite(i)?1+Math.floor(h*g):Yn;p>Yn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yn}`);const _=[];let E=0;for(let M=0;M<Yn;++M){const b=M/g,S=Math.exp(-b*b/2);_.push(S),M===0?E+=S:M<p&&(E+=2*S)}for(let M=0;M<_.length;M++)_[M]=_[M]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=m,f.mipInt.value=T-n;const A=this._sizeLods[s],x=3*A*(s>T-yi?s-T+yi:0),y=4*(this._cubeSize-A);ws(t,x,y,3*A,2*A),l.setRenderTarget(t),l.render(d,_r)}}function jf(r){const e=[],t=[],n=[];let s=r;const i=r-yi+1+mo.length;for(let a=0;a<i;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>r-yi?l=mo[a-r+yi-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],c=6,m=6,g=3,p=2,_=1,E=new Float32Array(g*m*c),T=new Float32Array(p*m*c),A=new Float32Array(_*m*c);for(let y=0;y<c;y++){const M=y%3*2/3-1,b=y>2?0:-1,S=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];E.set(S,g*m*y),T.set(f,p*m*y);const v=[y,y,y,y,y,y];A.set(v,_*m*y)}const x=new kt;x.setAttribute("position",new Nt(E,g)),x.setAttribute("uv",new Nt(T,p)),x.setAttribute("faceIndex",new Nt(A,_)),e.push(x),s>yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xo(r,e,t){const n=new jn(r,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function Qf(r,e,t){const n=new Float32Array(Yn),s=new k(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function So(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function yo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function ed(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Or||l===Br,h=l===bi||l===wi;if(u||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new vo(r)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const c=o.image;return u&&c&&c.height>0||h&&c&&s(c)?(t===null&&(t=new vo(r)),d=u?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",i),d.texture):null}}}return o}function s(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function td(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Si("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nd(r,e,t,n){const s={},i=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const c=i.get(f);c&&(e.remove(c),i.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const c in f)e.update(f[c],r.ARRAY_BUFFER)}function u(d){const f=[],c=d.index,m=d.attributes.position;let g=0;if(c!==null){const E=c.array;g=c.version;for(let T=0,A=E.length;T<A;T+=3){const x=E[T+0],y=E[T+1],M=E[T+2];f.push(x,y,y,M,M,x)}}else if(m!==void 0){const E=m.array;g=m.version;for(let T=0,A=E.length/3-1;T<A;T+=3){const x=T+0,y=T+1,M=T+2;f.push(x,y,y,M,M,x)}}else return;const p=new(ll(f)?pl:dl)(f,1);p.version=g;const _=i.get(d);_&&e.remove(_),i.set(d,p)}function h(d){const f=i.get(d);if(f){const c=d.index;c!==null&&f.version<c.version&&u(d)}else u(d);return i.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function id(r,e,t){let n;function s(f){n=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function l(f,c){r.drawElements(n,c,i,f*a),t.update(c,n,1)}function u(f,c,m){m!==0&&(r.drawElementsInstanced(n,c,i,f*a,m),t.update(c,n,m))}function h(f,c,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,i,f,0,m);let p=0;for(let _=0;_<m;_++)p+=c[_];t.update(p,n,1)}function d(f,c,m,g){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f.length;_++)u(f[_]/a,c[_],g[_]);else{p.multiDrawElementsInstancedWEBGL(n,c,0,i,f,0,g,0,m);let _=0;for(let E=0;E<m;E++)_+=c[E]*g[E];t.update(_,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function sd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(i/3);break;case r.LINES:t.lines+=o*(i/2);break;case r.LINE_STRIP:t.lines+=o*(i-1);break;case r.LINE_LOOP:t.lines+=o*i;break;case r.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function rd(r,e,t){const n=new WeakMap,s=new ut;function i(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let v=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var c=v;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),g===!0&&(A=2),p===!0&&(A=3);let x=o.attributes.position.count*A,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const M=new Float32Array(x*y*4*d),b=new hl(M,x,y,d);b.type=gn,b.needsUpdate=!0;const S=A*4;for(let w=0;w<d;w++){const P=_[w],D=E[w],U=T[w],F=x*y*4*w;for(let z=0;z<P.count;z++){const G=z*S;m===!0&&(s.fromBufferAttribute(P,z),M[F+G+0]=s.x,M[F+G+1]=s.y,M[F+G+2]=s.z,M[F+G+3]=0),g===!0&&(s.fromBufferAttribute(D,z),M[F+G+4]=s.x,M[F+G+5]=s.y,M[F+G+6]=s.z,M[F+G+7]=0),p===!0&&(s.fromBufferAttribute(U,z),M[F+G+8]=s.x,M[F+G+9]=s.y,M[F+G+10]=s.z,M[F+G+11]=U.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new ke(x,y)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let p=0;p<u.length;p++)m+=u[p];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",u)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:i}}function ad(r,e,t,n){let s=new WeakMap;function i(l){const u=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:i,dispose:a}}const Al=new At,Mo=new Ml(1,1),bl=new hl,wl=new Ic,Rl=new gl,Eo=[],To=[],Ao=new Float32Array(16),bo=new Float32Array(9),wo=new Float32Array(4);function Ii(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let i=Eo[s];if(i===void 0&&(i=new Float32Array(s),Eo[s]=i),e!==0){n.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(i,o)}return i}function gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vs(r,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function od(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function cd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function ud(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;wo.set(n),r.uniformMatrix2fv(this.addr,!1,wo),_t(t,n)}}function fd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;bo.set(n),r.uniformMatrix3fv(this.addr,!1,bo),_t(t,n)}}function dd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Ao.set(n),r.uniformMatrix4fv(this.addr,!1,Ao),_t(t,n)}}function pd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function _d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function vd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function Sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function Md(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(Mo.compareFunction=ol,i=Mo):i=Al,t.setTexture2D(e||i,s)}function Ed(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wl,s)}function Td(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rl,s)}function Ad(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bl,s)}function bd(r){switch(r){case 5126:return od;case 35664:return ld;case 35665:return cd;case 35666:return hd;case 35674:return ud;case 35675:return fd;case 35676:return dd;case 5124:case 35670:return pd;case 35667:case 35671:return md;case 35668:case 35672:return gd;case 35669:case 35673:return _d;case 5125:return vd;case 36294:return xd;case 36295:return Sd;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Md;case 35679:case 36299:case 36307:return Ed;case 35680:case 36300:case 36308:case 36293:return Td;case 36289:case 36303:case 36311:case 36292:return Ad}}function wd(r,e){r.uniform1fv(this.addr,e)}function Rd(r,e){const t=Ii(e,this.size,2);r.uniform2fv(this.addr,t)}function Cd(r,e){const t=Ii(e,this.size,3);r.uniform3fv(this.addr,t)}function Pd(r,e){const t=Ii(e,this.size,4);r.uniform4fv(this.addr,t)}function Ld(r,e){const t=Ii(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dd(r,e){const t=Ii(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Id(r,e){const t=Ii(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ud(r,e){r.uniform1iv(this.addr,e)}function Fd(r,e){r.uniform2iv(this.addr,e)}function Nd(r,e){r.uniform3iv(this.addr,e)}function Od(r,e){r.uniform4iv(this.addr,e)}function Bd(r,e){r.uniform1uiv(this.addr,e)}function zd(r,e){r.uniform2uiv(this.addr,e)}function Hd(r,e){r.uniform3uiv(this.addr,e)}function Gd(r,e){r.uniform4uiv(this.addr,e)}function kd(r,e,t){const n=this.cache,s=e.length,i=Vs(t,s);gt(n,i)||(r.uniform1iv(this.addr,i),_t(n,i));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Al,i[a])}function Vd(r,e,t){const n=this.cache,s=e.length,i=Vs(t,s);gt(n,i)||(r.uniform1iv(this.addr,i),_t(n,i));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wl,i[a])}function Wd(r,e,t){const n=this.cache,s=e.length,i=Vs(t,s);gt(n,i)||(r.uniform1iv(this.addr,i),_t(n,i));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Rl,i[a])}function Xd(r,e,t){const n=this.cache,s=e.length,i=Vs(t,s);gt(n,i)||(r.uniform1iv(this.addr,i),_t(n,i));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bl,i[a])}function Yd(r){switch(r){case 5126:return wd;case 35664:return Rd;case 35665:return Cd;case 35666:return Pd;case 35674:return Ld;case 35675:return Dd;case 35676:return Id;case 5124:case 35670:return Ud;case 35667:case 35671:return Fd;case 35668:case 35672:return Nd;case 35669:case 35673:return Od;case 5125:return Bd;case 36294:return zd;case 36295:return Hd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Xd}}class qd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bd(t.type)}}class $d{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yd(t.type)}}class Zd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const o=s[i];o.setValue(e,t[o.id],n)}}}const Mr=/(\w+)(\])?(\[|\.)?/g;function Ro(r,e){r.seq.push(e),r.map[e.id]=e}function Kd(r,e,t){const n=r.name,s=n.length;for(Mr.lastIndex=0;;){const i=Mr.exec(n),a=Mr.lastIndex;let o=i[1];const l=i[2]==="]",u=i[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Ro(t,u===void 0?new qd(o,r,e):new $d(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Zd(o),Ro(t,d)),t=d}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=e.getActiveUniform(t,s),a=e.getUniformLocation(t,i.name);Kd(i,a,this)}}setValue(e,t,n,s){const i=this.map[t];i!==void 0&&i.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let i=0,a=t.length;i!==a;++i){const o=t[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Co(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Jd=37297;let jd=0;function Qd(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=s;a<i;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Po=new Ie;function ep(r){qe._getMatrix(Po,qe.workingColorSpace,r);const e=`mat3( ${Po.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(r)){case Os:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Lo(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const i=/ERROR: 0:(\d+)/.exec(s);if(i){const a=parseInt(i[1]);return t.toUpperCase()+`

`+s+`

`+Qd(r.getShaderSource(e),a)}else return s}function tp(r,e){const t=ep(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function np(r,e){let t;switch(e){case sc:t="Linear";break;case rc:t="Reinhard";break;case ac:t="Cineon";break;case oc:t="ACESFilmic";break;case cc:t="AgX";break;case hc:t="Neutral";break;case lc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new k;function ip(){qe.getLuminanceCoefficients(Rs);const r=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function rp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ap(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(e,s),a=i.name;let o=1;i.type===r.FLOAT_MAT2&&(o=2),i.type===r.FLOAT_MAT3&&(o=3),i.type===r.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Vi(r){return r!==""}function Do(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Io(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const op=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(r){return r.replace(op,cp)}const lp=new Map;function cp(r,e){let t=Fe[e];if(t===void 0){const n=lp.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}const hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(r){return r.replace(hp,up)}function up(r,e,t,n){let s="";for(let i=parseInt(e);i<parseInt(t);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function Fo(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function dp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bi:case wi:e="ENVMAP_TYPE_CUBE";break;case ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function mp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case nc:e="ENVMAP_BLENDING_MIX";break;case ic:e="ENVMAP_BLENDING_ADD";break}return e}function gp(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _p(r,e,t,n){const s=r.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fp(t),u=dp(t),h=pp(t),d=mp(t),f=gp(t),c=sp(t),m=rp(i),g=s.createProgram();let p,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vi).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vi).join(`
`),_.length>0&&(_+=`
`)):(p=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),_=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Ln?np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,tp("linearToOutputTexel",t.outputColorSpace),ip(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),a=ga(a),a=Do(a,t),a=Io(a,t),o=ga(o),o=Do(o,t),o=Io(o,t),a=Uo(a),o=Uo(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=E+p+a,A=E+_+o,x=Co(s,s.VERTEX_SHADER,T),y=Co(s,s.FRAGMENT_SHADER,A);s.attachShader(g,x),s.attachShader(g,y),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function M(w){if(r.debug.checkShaderErrors){const P=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(x).trim(),U=s.getShaderInfoLog(y).trim();let F=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,x,y);else{const G=Lo(s,x,"vertex"),H=Lo(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+G+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||U==="")&&(z=!1);z&&(w.diagnostics={runnable:F,programLog:P,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:_}})}s.deleteShader(x),s.deleteShader(y),b=new Fs(s,g),S=ap(s,g)}let b;this.getUniforms=function(){return b===void 0&&M(this),b};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Jd)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jd++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=y,this}let vp=0;class xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sp(e),t.set(e,n)),n}}class Sp{constructor(e){this.id=vp++,this.code=e,this.usedTimes=0}}function yp(r,e,t,n,s,i,a){const o=new ul,l=new xp,u=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let c=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return u.add(S),S===0?"uv":`uv${S}`}function p(S,v,w,P,D){const U=P.fog,F=D.geometry,z=S.isMeshStandardMaterial?P.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),H=G&&G.mapping===ks?G.image.height:null,J=m[S.type];S.precision!==null&&(c=s.getMaxPrecision(S.precision),c!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",c,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=ie!==void 0?ie.length:0;let ye=0;F.morphAttributes.position!==void 0&&(ye=1),F.morphAttributes.normal!==void 0&&(ye=2),F.morphAttributes.color!==void 0&&(ye=3);let Le,q,ee,Q;if(J){const Ke=rn[J];Le=Ke.vertexShader,q=Ke.fragmentShader}else Le=S.vertexShader,q=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);const se=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),Te=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,Ve=!!S.map,we=!!S.matcap,rt=!!G,I=!!S.aoMap,It=!!S.lightMap,Oe=!!S.bumpMap,Be=!!S.normalMap,xe=!!S.displacementMap,ze=!!S.emissiveMap,Se=!!S.metalnessMap,L=!!S.roughnessMap,R=S.anisotropy>0,V=S.clearcoat>0,Z=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,ve=S.transmission>0,ae=R&&!!S.anisotropyMap,ue=V&&!!S.clearcoatMap,Ne=V&&!!S.clearcoatNormalMap,ne=V&&!!S.clearcoatRoughnessMap,me=j&&!!S.iridescenceMap,Ae=j&&!!S.iridescenceThicknessMap,Re=$&&!!S.sheenColorMap,ge=$&&!!S.sheenRoughnessMap,We=!!S.specularMap,Ue=!!S.specularColorMap,nt=!!S.specularIntensityMap,N=ve&&!!S.transmissionMap,oe=ve&&!!S.thicknessMap,Y=!!S.gradientMap,K=!!S.alphaMap,fe=S.alphaTest>0,he=!!S.alphaHash,De=!!S.extensions;let ot=Ln;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ot=r.toneMapping);const yt={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:c,batching:be,batchingColor:be&&D._colorsTexture!==null,instancing:Te,instancingColor:Te&&D.instanceColor!==null,instancingMorph:Te&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Pi,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:we,envMap:rt,envMapMode:rt&&G.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:It,bumpMap:Oe,normalMap:Be,displacementMap:f&&xe,emissiveMap:ze,normalMapObjectSpace:Be&&S.normalMapType===mc,normalMapTangentSpace:Be&&S.normalMapType===pc,metalnessMap:Se,roughnessMap:L,anisotropy:R,anisotropyMap:ae,clearcoat:V,clearcoatMap:ue,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:j,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:$,sheenColorMap:Re,sheenRoughnessMap:ge,specularMap:We,specularColorMap:Ue,specularIntensityMap:nt,transmission:ve,transmissionMap:N,thicknessMap:oe,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:fe,alphaHash:he,combine:S.combine,mapUv:Ve&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:It&&g(S.lightMap.channel),bumpMapUv:Oe&&g(S.bumpMap.channel),normalMapUv:Be&&g(S.normalMap.channel),displacementMapUv:xe&&g(S.displacementMap.channel),emissiveMapUv:ze&&g(S.emissiveMap.channel),metalnessMapUv:Se&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:ae&&g(S.anisotropyMap.channel),clearcoatMapUv:ue&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(S.sheenRoughnessMap.channel),specularMapUv:We&&g(S.specularMap.channel),specularColorMapUv:Ue&&g(S.specularColorMap.channel),specularIntensityMapUv:nt&&g(S.specularIntensityMap.channel),transmissionMapUv:N&&g(S.transmissionMap.channel),thicknessMapUv:oe&&g(S.thicknessMap.channel),alphaMapUv:K&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Be||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Ve||K),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:de,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ye,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&qe.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:ze&&S.emissiveMap.isVideoTexture===!0&&qe.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=u.has(1),yt.vertexUv2s=u.has(2),yt.vertexUv3s=u.has(3),u.clear(),yt}function _(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)v.push(w),v.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(E(v,S),T(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function T(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function A(S){const v=m[S.type];let w;if(v){const P=rn[v];w=Xc.clone(P.uniforms)}else w=S.uniforms;return w}function x(S,v){let w;for(let P=0,D=h.length;P<D;P++){const U=h[P];if(U.cacheKey===v){w=U,++w.usedTimes;break}}return w===void 0&&(w=new _p(r,v,S,i),h.push(w)),w}function y(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function M(S){l.remove(S)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:A,acquireProgram:x,releaseProgram:y,releaseShaderCache:M,programs:h,dispose:b}}function Mp(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function s(a,o,l){r.get(a)[o]=l}function i(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:i}}function Ep(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function No(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Oo(){const r=[];let e=0;const t=[],n=[],s=[];function i(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,c,m,g,p){let _=r[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:c,groupOrder:m,renderOrder:d.renderOrder,z:g,group:p},r[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=c,_.groupOrder=m,_.renderOrder=d.renderOrder,_.z=g,_.group=p),e++,_}function o(d,f,c,m,g,p){const _=a(d,f,c,m,g,p);c.transmission>0?n.push(_):c.transparent===!0?s.push(_):t.push(_)}function l(d,f,c,m,g,p){const _=a(d,f,c,m,g,p);c.transmission>0?n.unshift(_):c.transparent===!0?s.unshift(_):t.unshift(_)}function u(d,f){t.length>1&&t.sort(d||Ep),n.length>1&&n.sort(f||No),s.length>1&&s.sort(f||No)}function h(){for(let d=e,f=r.length;d<f;d++){const c=r[d];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:t,transmissive:n,transparent:s,init:i,push:o,unshift:l,finish:h,sort:u}}function Tp(){let r=new WeakMap;function e(n,s){const i=r.get(n);let a;return i===void 0?(a=new Oo,r.set(n,[a])):s>=i.length?(a=new Oo,i.push(a)):a=i[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ap(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ge};break;case"SpotLight":t={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function bp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wp=0;function Rp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cp(r){const e=new Ap,t=bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);const s=new k,i=new at,a=new at;function o(u){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let c=0,m=0,g=0,p=0,_=0,E=0,T=0,A=0,x=0,y=0,M=0;u.sort(Rp);for(let S=0,v=u.length;S<v;S++){const w=u[S],P=w.color,D=w.intensity,U=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=P.r*D,d+=P.g*D,f+=P.b*D;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],D);M++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,H=t.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.directionalShadow[c]=H,n.directionalShadowMap[c]=F,n.directionalShadowMatrix[c]=w.shadow.matrix,E++}n.directional[c]=z,c++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(P).multiplyScalar(D),z.distance=U,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[g]=z;const G=w.shadow;if(w.map&&(n.spotLightMap[x]=w.map,x++,G.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[g]=G.matrix,w.castShadow){const H=t.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=F,A++}g++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(P).multiplyScalar(D),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=z,p++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const G=w.shadow,H=t.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=w.shadow.matrix,T++}n.point[m]=z,m++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(D),z.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[_]=z,_++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==c||b.pointLength!==m||b.spotLength!==g||b.rectAreaLength!==p||b.hemiLength!==_||b.numDirectionalShadows!==E||b.numPointShadows!==T||b.numSpotShadows!==A||b.numSpotMaps!==x||b.numLightProbes!==M)&&(n.directional.length=c,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=A+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=M,b.directionalLength=c,b.pointLength=m,b.spotLength=g,b.rectAreaLength=p,b.hemiLength=_,b.numDirectionalShadows=E,b.numPointShadows=T,b.numSpotShadows=A,b.numSpotMaps=x,b.numLightProbes=M,n.version=wp++)}function l(u,h){let d=0,f=0,c=0,m=0,g=0;const p=h.matrixWorldInverse;for(let _=0,E=u.length;_<E;_++){const T=u[_];if(T.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(T.isSpotLight){const A=n.spot[c];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),c++}else if(T.isRectAreaLight){const A=n.rectArea[m];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),a.identity(),i.copy(T.matrixWorld),i.premultiply(p),a.extractRotation(i),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Bo(r){const e=new Cp(r),t=[],n=[];function s(h){u.camera=h,t.length=0,n.length=0}function i(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:a}}function Pp(r){let e=new WeakMap;function t(s,i=0){const a=e.get(s);let o;return a===void 0?(o=new Bo(r),e.set(s,[o])):i>=a.length?(o=new Bo(r),a.push(o)):o=a[i],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dp=`uniform sampler2D shadow_pass;
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
}`;function Ip(r,e,t){let n=new xl;const s=new ke,i=new ke,a=new ut,o=new nh({depthPacking:dc}),l=new ih,u={},h=t.maxTextureSize,d={[In]:Ft,[Ft]:In,[mn]:mn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Lp,fragmentShader:Dp}),c=f.clone();c.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new it(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o;let _=this.type;this.render=function(y,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Pn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=_!==pn&&this.type===pn,U=_===pn&&this.type!==pn;for(let F=0,z=y.length;F<z;F++){const G=y[F],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),i.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/J.x),s.x=i.x*J.x,H.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/J.y),s.y=i.y*J.y,H.mapSize.y=i.y)),H.map===null||D===!0||U===!0){const ce=this.type!==pn?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new jn(s.x,s.y,ce),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ie=H.getViewportCount();for(let ce=0;ce<ie;ce++){const ye=H.getViewport(ce);a.set(i.x*ye.x,i.y*ye.y,i.x*ye.z,i.y*ye.w),P.viewport(a),H.updateMatrices(G,ce),n=H.getFrustum(),A(M,b,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===pn&&E(H,b),H.needsUpdate=!1}_=this.type,p.needsUpdate=!1,r.setRenderTarget(S,v,w)};function E(y,M){const b=e.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,c.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,c.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,b,f,g,null),c.uniforms.shadow_pass.value=y.mapPass.texture,c.uniforms.resolution.value=y.mapSize,c.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,b,c,g,null)}function T(y,M,b,S){let v=null;const w=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)v=w;else if(v=b.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const P=v.uuid,D=M.uuid;let U=u[P];U===void 0&&(U={},u[P]=U);let F=U[D];F===void 0&&(F=v.clone(),U[D]=F,M.addEventListener("dispose",x)),v=F}if(v.visible=M.visible,v.wireframe=M.wireframe,S===pn?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:d[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=r.properties.get(v);P.light=b}return v}function A(y,M,b,S,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===pn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const D=e.update(y),U=y.material;if(Array.isArray(U)){const F=D.groups;for(let z=0,G=F.length;z<G;z++){const H=F[z],J=U[H.materialIndex];if(J&&J.visible){const ie=T(y,J,S,v);y.onBeforeShadow(r,y,M,b,D,ie,H),r.renderBufferDirect(b,null,D,ie,y,H),y.onAfterShadow(r,y,M,b,D,ie,H)}}}else if(U.visible){const F=T(y,U,S,v);y.onBeforeShadow(r,y,M,b,D,F,null),r.renderBufferDirect(b,null,D,F,y,null),y.onAfterShadow(r,y,M,b,D,F,null)}}const P=y.children;for(let D=0,U=P.length;D<U;D++)A(P[D],M,b,S,v)}function x(y){y.target.removeEventListener("dispose",x);for(const b in u){const S=u[b],v=y.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Up={[Pr]:Lr,[Dr]:Fr,[Ir]:Nr,[Ai]:Ur,[Lr]:Pr,[Fr]:Dr,[Nr]:Ir,[Ur]:Ai};function Fp(r,e){function t(){let N=!1;const oe=new ut;let Y=null;const K=new ut(0,0,0,0);return{setMask:function(fe){Y!==fe&&!N&&(r.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){N=fe},setClear:function(fe,he,De,ot,yt){yt===!0&&(fe*=ot,he*=ot,De*=ot),oe.set(fe,he,De,ot),K.equals(oe)===!1&&(r.clearColor(fe,he,De,ot),K.copy(oe))},reset:function(){N=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,Y=null,K=null,fe=null;return{setReversed:function(he){if(oe!==he){const De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const ot=fe;fe=null,this.setClear(ot)}oe=he},getReversed:function(){return oe},setTest:function(he){he?se(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(he){Y!==he&&!N&&(r.depthMask(he),Y=he)},setFunc:function(he){if(oe&&(he=Up[he]),K!==he){switch(he){case Pr:r.depthFunc(r.NEVER);break;case Lr:r.depthFunc(r.ALWAYS);break;case Dr:r.depthFunc(r.LESS);break;case Ai:r.depthFunc(r.LEQUAL);break;case Ir:r.depthFunc(r.EQUAL);break;case Ur:r.depthFunc(r.GEQUAL);break;case Fr:r.depthFunc(r.GREATER);break;case Nr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=he}},setLocked:function(he){N=he},setClear:function(he){fe!==he&&(oe&&(he=1-he),r.clearDepth(he),fe=he)},reset:function(){N=!1,Y=null,K=null,fe=null,oe=!1}}}function s(){let N=!1,oe=null,Y=null,K=null,fe=null,he=null,De=null,ot=null,yt=null;return{setTest:function(Ke){N||(Ke?se(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!N&&(r.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,qt,on){(Y!==Ke||K!==qt||fe!==on)&&(r.stencilFunc(Ke,qt,on),Y=Ke,K=qt,fe=on)},setOp:function(Ke,qt,on){(he!==Ke||De!==qt||ot!==on)&&(r.stencilOp(Ke,qt,on),he=Ke,De=qt,ot=on)},setLocked:function(Ke){N=Ke},setClear:function(Ke){yt!==Ke&&(r.clearStencil(Ke),yt=Ke)},reset:function(){N=!1,oe=null,Y=null,K=null,fe=null,he=null,De=null,ot=null,yt=null}}}const i=new t,a=new n,o=new s,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,c=[],m=null,g=!1,p=null,_=null,E=null,T=null,A=null,x=null,y=null,M=new Ge(0,0,0),b=0,S=!1,v=null,w=null,P=null,D=null,U=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=G>=2);let J=null,ie={};const ce=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),Le=new ut().fromArray(ce),q=new ut().fromArray(ye);function ee(N,oe,Y,K){const fe=new Uint8Array(4),he=r.createTexture();r.bindTexture(N,he),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<Y;De++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(oe+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return he}const Q={};Q[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(r.DEPTH_TEST),a.setFunc(Ai),Oe(!1),Be(Oa),se(r.CULL_FACE),I(Pn);function se(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function de(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Te(N,oe){return d[N]!==oe?(r.bindFramebuffer(N,oe),d[N]=oe,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=oe),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function be(N,oe){let Y=c,K=!1;if(N){Y=f.get(oe),Y===void 0&&(Y=[],f.set(oe,Y));const fe=N.textures;if(Y.length!==fe.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let he=0,De=fe.length;he<De;he++)Y[he]=r.COLOR_ATTACHMENT0+he;Y.length=fe.length,K=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,K=!0);K&&r.drawBuffers(Y)}function Ve(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const we={[Xn]:r.FUNC_ADD,[zl]:r.FUNC_SUBTRACT,[Hl]:r.FUNC_REVERSE_SUBTRACT};we[Gl]=r.MIN,we[kl]=r.MAX;const rt={[Vl]:r.ZERO,[Wl]:r.ONE,[Xl]:r.SRC_COLOR,[Rr]:r.SRC_ALPHA,[Jl]:r.SRC_ALPHA_SATURATE,[Zl]:r.DST_COLOR,[ql]:r.DST_ALPHA,[Yl]:r.ONE_MINUS_SRC_COLOR,[Cr]:r.ONE_MINUS_SRC_ALPHA,[Kl]:r.ONE_MINUS_DST_COLOR,[$l]:r.ONE_MINUS_DST_ALPHA,[jl]:r.CONSTANT_COLOR,[Ql]:r.ONE_MINUS_CONSTANT_COLOR,[ec]:r.CONSTANT_ALPHA,[tc]:r.ONE_MINUS_CONSTANT_ALPHA};function I(N,oe,Y,K,fe,he,De,ot,yt,Ke){if(N===Pn){g===!0&&(de(r.BLEND),g=!1);return}if(g===!1&&(se(r.BLEND),g=!0),N!==Bl){if(N!==p||Ke!==S){if((_!==Xn||A!==Xn)&&(r.blendEquation(r.FUNC_ADD),_=Xn,A=Xn),Ke)switch(N){case Mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.ONE,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case za:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case za:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,T=null,x=null,y=null,M.set(0,0,0),b=0,p=N,S=Ke}return}fe=fe||oe,he=he||Y,De=De||K,(oe!==_||fe!==A)&&(r.blendEquationSeparate(we[oe],we[fe]),_=oe,A=fe),(Y!==E||K!==T||he!==x||De!==y)&&(r.blendFuncSeparate(rt[Y],rt[K],rt[he],rt[De]),E=Y,T=K,x=he,y=De),(ot.equals(M)===!1||yt!==b)&&(r.blendColor(ot.r,ot.g,ot.b,yt),M.copy(ot),b=yt),p=N,S=!1}function It(N,oe){N.side===mn?de(r.CULL_FACE):se(r.CULL_FACE);let Y=N.side===Ft;oe&&(Y=!Y),Oe(Y),N.blending===Mi&&N.transparent===!1?I(Pn):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),i.setMask(N.colorWrite);const K=N.stencilWrite;o.setTest(K),K&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){v!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),v=N)}function Be(N){N!==Fl?(se(r.CULL_FACE),N!==w&&(N===Oa?r.cullFace(r.BACK):N===Nl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),w=N}function xe(N){N!==P&&(z&&r.lineWidth(N),P=N)}function ze(N,oe,Y){N?(se(r.POLYGON_OFFSET_FILL),(D!==oe||U!==Y)&&(r.polygonOffset(oe,Y),D=oe,U=Y)):de(r.POLYGON_OFFSET_FILL)}function Se(N){N?se(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function L(N){N===void 0&&(N=r.TEXTURE0+F-1),J!==N&&(r.activeTexture(N),J=N)}function R(N,oe,Y){Y===void 0&&(J===null?Y=r.TEXTURE0+F-1:Y=J);let K=ie[Y];K===void 0&&(K={type:void 0,texture:void 0},ie[Y]=K),(K.type!==N||K.texture!==oe)&&(J!==Y&&(r.activeTexture(Y),J=Y),r.bindTexture(N,oe||Q[N]),K.type=N,K.texture=oe)}function V(){const N=ie[J];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){Le.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function ge(N){q.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function We(N,oe){let Y=u.get(oe);Y===void 0&&(Y=new WeakMap,u.set(oe,Y));let K=Y.get(N);K===void 0&&(K=r.getUniformBlockIndex(oe,N.name),Y.set(N,K))}function Ue(N,oe){const K=u.get(oe).get(N);l.get(oe)!==K&&(r.uniformBlockBinding(oe,K,N.__bindingPointIndex),l.set(oe,K))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,ie={},d={},f=new WeakMap,c=[],m=null,g=!1,p=null,_=null,E=null,T=null,A=null,x=null,y=null,M=new Ge(0,0,0),b=0,S=!1,v=null,w=null,P=null,D=null,U=null,Le.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:se,disable:de,bindFramebuffer:Te,drawBuffers:be,useProgram:Ve,setBlending:I,setMaterial:It,setFlipSided:Oe,setCullFace:Be,setLineWidth:xe,setPolygonOffset:ze,setScissorTest:Se,activeTexture:L,bindTexture:R,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:me,texImage3D:Ae,updateUBOMapping:We,uniformBlockBinding:Ue,texStorage2D:Ne,texStorage3D:ne,texSubImage2D:$,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Re,viewport:ge,reset:nt}}function Np(r,e,t,n,s,i,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ke,h=new WeakMap;let d;const f=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,R){return c?new OffscreenCanvas(L,R):Yi("canvas")}function g(L,R,V){let Z=1;const j=Se(L);if((j.width>V||j.height>V)&&(Z=V/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(Z*j.width),ve=Math.floor(Z*j.height);d===void 0&&(d=m($,ve));const ae=R?m($,ve):d;return ae.width=$,ae.height=ve,ae.getContext("2d").drawImage(L,0,0,$,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+ve+")."),ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function p(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(L,R,V,Z,j=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=R;if(R===r.RED&&(V===r.FLOAT&&($=r.R32F),V===r.HALF_FLOAT&&($=r.R16F),V===r.UNSIGNED_BYTE&&($=r.R8)),R===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.R8UI),V===r.UNSIGNED_SHORT&&($=r.R16UI),V===r.UNSIGNED_INT&&($=r.R32UI),V===r.BYTE&&($=r.R8I),V===r.SHORT&&($=r.R16I),V===r.INT&&($=r.R32I)),R===r.RG&&(V===r.FLOAT&&($=r.RG32F),V===r.HALF_FLOAT&&($=r.RG16F),V===r.UNSIGNED_BYTE&&($=r.RG8)),R===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RG8UI),V===r.UNSIGNED_SHORT&&($=r.RG16UI),V===r.UNSIGNED_INT&&($=r.RG32UI),V===r.BYTE&&($=r.RG8I),V===r.SHORT&&($=r.RG16I),V===r.INT&&($=r.RG32I)),R===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGB8UI),V===r.UNSIGNED_SHORT&&($=r.RGB16UI),V===r.UNSIGNED_INT&&($=r.RGB32UI),V===r.BYTE&&($=r.RGB8I),V===r.SHORT&&($=r.RGB16I),V===r.INT&&($=r.RGB32I)),R===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGBA8UI),V===r.UNSIGNED_SHORT&&($=r.RGBA16UI),V===r.UNSIGNED_INT&&($=r.RGBA32UI),V===r.BYTE&&($=r.RGBA8I),V===r.SHORT&&($=r.RGBA16I),V===r.INT&&($=r.RGBA32I)),R===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),R===r.RGBA){const ve=j?Os:qe.getTransfer(Z);V===r.FLOAT&&($=r.RGBA32F),V===r.HALF_FLOAT&&($=r.RGBA16F),V===r.UNSIGNED_BYTE&&($=ve===et?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(L,R){let V;return L?R===null||R===Jn||R===Ri?V=r.DEPTH24_STENCIL8:R===gn?V=r.DEPTH32F_STENCIL8:R===Xi&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Jn||R===Ri?V=r.DEPTH_COMPONENT24:R===gn?V=r.DEPTH_COMPONENT32F:R===Xi&&(V=r.DEPTH_COMPONENT16),V}function x(L,R){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==tn&&L.minFilter!==Gt?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function y(L){const R=L.target;R.removeEventListener("dispose",y),b(R),R.isVideoTexture&&h.delete(R)}function M(L){const R=L.target;R.removeEventListener("dispose",M),v(R)}function b(L){const R=n.get(L);if(R.__webglInit===void 0)return;const V=L.source,Z=f.get(V);if(Z){const j=Z[R.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(L),Object.keys(Z).length===0&&f.delete(V)}n.remove(L)}function S(L){const R=n.get(L);r.deleteTexture(R.__webglTexture);const V=L.source,Z=f.get(V);delete Z[R.__cacheKey],a.memory.textures--}function v(L){const R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(R.__webglFramebuffer[Z]))for(let j=0;j<R.__webglFramebuffer[Z].length;j++)r.deleteFramebuffer(R.__webglFramebuffer[Z][j]);else r.deleteFramebuffer(R.__webglFramebuffer[Z]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[Z])}else{if(Array.isArray(R.__webglFramebuffer))for(let Z=0;Z<R.__webglFramebuffer.length;Z++)r.deleteFramebuffer(R.__webglFramebuffer[Z]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const V=L.textures;for(let Z=0,j=V.length;Z<j;Z++){const $=n.get(V[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(L)}let w=0;function P(){w=0}function D(){const L=w;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),w+=1,L}function U(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function F(L,R){const V=n.get(L);if(L.isVideoTexture&&xe(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,L,R);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+R)}function z(L,R){const V=n.get(L);if(L.version>0&&V.__version!==L.version){q(V,L,R);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+R)}function G(L,R){const V=n.get(L);if(L.version>0&&V.__version!==L.version){q(V,L,R);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+R)}function H(L,R){const V=n.get(L);if(L.version>0&&V.__version!==L.version){ee(V,L,R);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+R)}const J={[zr]:r.REPEAT,[qn]:r.CLAMP_TO_EDGE,[Hr]:r.MIRRORED_REPEAT},ie={[tn]:r.NEAREST,[uc]:r.NEAREST_MIPMAP_NEAREST,[ts]:r.NEAREST_MIPMAP_LINEAR,[Gt]:r.LINEAR,[Ys]:r.LINEAR_MIPMAP_NEAREST,[$n]:r.LINEAR_MIPMAP_LINEAR},ce={[gc]:r.NEVER,[Mc]:r.ALWAYS,[_c]:r.LESS,[ol]:r.LEQUAL,[vc]:r.EQUAL,[yc]:r.GEQUAL,[xc]:r.GREATER,[Sc]:r.NOTEQUAL};function ye(L,R){if(R.type===gn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Gt||R.magFilter===Ys||R.magFilter===ts||R.magFilter===$n||R.minFilter===Gt||R.minFilter===Ys||R.minFilter===ts||R.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,J[R.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,J[R.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,J[R.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ie[R.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ie[R.minFilter]),R.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,ce[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===tn||R.minFilter!==ts&&R.minFilter!==$n||R.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Le(L,R){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",y));const Z=R.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const $=U(R);if($!==L.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),j[$].usedTimes++;const ve=j[L.__cacheKey];ve!==void 0&&(j[L.__cacheKey].usedTimes--,ve.usedTimes===0&&S(R)),L.__cacheKey=$,L.__webglTexture=j[$].texture}return V}function q(L,R,V){let Z=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Z=r.TEXTURE_3D);const j=Le(L,R),$=R.source;t.bindTexture(Z,L.__webglTexture,r.TEXTURE0+V);const ve=n.get($);if($.version!==ve.__version||j===!0){t.activeTexture(r.TEXTURE0+V);const ae=qe.getPrimaries(qe.workingColorSpace),ue=R.colorSpace===Cn?null:qe.getPrimaries(R.colorSpace),Ne=R.colorSpace===Cn||ae===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ne=g(R.image,!1,s.maxTextureSize);ne=ze(R,ne);const me=i.convert(R.format,R.colorSpace),Ae=i.convert(R.type);let Re=T(R.internalFormat,me,Ae,R.colorSpace,R.isVideoTexture);ye(Z,R);let ge;const We=R.mipmaps,Ue=R.isVideoTexture!==!0,nt=ve.__version===void 0||j===!0,N=$.dataReady,oe=x(R,ne);if(R.isDepthTexture)Re=A(R.format===Ci,R.type),nt&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Re,ne.width,ne.height,0,me,Ae,null));else if(R.isDataTexture)if(We.length>0){Ue&&nt&&t.texStorage2D(r.TEXTURE_2D,oe,Re,We[0].width,We[0].height);for(let Y=0,K=We.length;Y<K;Y++)ge=We[Y],Ue?N&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(r.TEXTURE_2D,Y,Re,ge.width,ge.height,0,me,Ae,ge.data);R.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(r.TEXTURE_2D,oe,Re,ne.width,ne.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Ae,ne.data)):t.texImage2D(r.TEXTURE_2D,0,Re,ne.width,ne.height,0,me,Ae,ne.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Re,We[0].width,We[0].height,ne.depth);for(let Y=0,K=We.length;Y<K;Y++)if(ge=We[Y],R.format!==en)if(me!==null)if(Ue){if(N)if(R.layerUpdates.size>0){const fe=po(ge.width,ge.height,R.format,R.type);for(const he of R.layerUpdates){const De=ge.data.subarray(he*fe/ge.data.BYTES_PER_ELEMENT,(he+1)*fe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,he,ge.width,ge.height,1,me,De)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Re,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,ne.depth,me,Ae,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Re,ge.width,ge.height,ne.depth,0,me,Ae,ge.data)}else{Ue&&nt&&t.texStorage2D(r.TEXTURE_2D,oe,Re,We[0].width,We[0].height);for(let Y=0,K=We.length;Y<K;Y++)ge=We[Y],R.format!==en?me!==null?Ue?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?N&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ge.width,ge.height,me,Ae,ge.data):t.texImage2D(r.TEXTURE_2D,Y,Re,ge.width,ge.height,0,me,Ae,ge.data)}else if(R.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Re,ne.width,ne.height,ne.depth),N)if(R.layerUpdates.size>0){const Y=po(ne.width,ne.height,R.format,R.type);for(const K of R.layerUpdates){const fe=ne.data.subarray(K*Y/ne.data.BYTES_PER_ELEMENT,(K+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,me,Ae,fe)}R.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Ae,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,me,Ae,ne.data);else if(R.isData3DTexture)Ue?(nt&&t.texStorage3D(r.TEXTURE_3D,oe,Re,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Ae,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,me,Ae,ne.data);else if(R.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(r.TEXTURE_2D,oe,Re,ne.width,ne.height);else{let Y=ne.width,K=ne.height;for(let fe=0;fe<oe;fe++)t.texImage2D(r.TEXTURE_2D,fe,Re,Y,K,0,me,Ae,null),Y>>=1,K>>=1}}else if(We.length>0){if(Ue&&nt){const Y=Se(We[0]);t.texStorage2D(r.TEXTURE_2D,oe,Re,Y.width,Y.height)}for(let Y=0,K=We.length;Y<K;Y++)ge=We[Y],Ue?N&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,me,Ae,ge):t.texImage2D(r.TEXTURE_2D,Y,Re,me,Ae,ge);R.generateMipmaps=!1}else if(Ue){if(nt){const Y=Se(ne);t.texStorage2D(r.TEXTURE_2D,oe,Re,Y.width,Y.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,Ae,ne)}else t.texImage2D(r.TEXTURE_2D,0,Re,me,Ae,ne);p(R)&&_(Z),ve.__version=$.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ee(L,R,V){if(R.image.length!==6)return;const Z=Le(L,R),j=R.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+V);const $=n.get(j);if(j.version!==$.__version||Z===!0){t.activeTexture(r.TEXTURE0+V);const ve=qe.getPrimaries(qe.workingColorSpace),ae=R.colorSpace===Cn?null:qe.getPrimaries(R.colorSpace),ue=R.colorSpace===Cn||ve===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ne=R.isCompressedTexture||R.image[0].isCompressedTexture,ne=R.image[0]&&R.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!Ne&&!ne?me[K]=g(R.image[K],!0,s.maxCubemapSize):me[K]=ne?R.image[K].image:R.image[K],me[K]=ze(R,me[K]);const Ae=me[0],Re=i.convert(R.format,R.colorSpace),ge=i.convert(R.type),We=T(R.internalFormat,Re,ge,R.colorSpace),Ue=R.isVideoTexture!==!0,nt=$.__version===void 0||Z===!0,N=j.dataReady;let oe=x(R,Ae);ye(r.TEXTURE_CUBE_MAP,R);let Y;if(Ne){Ue&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,We,Ae.width,Ae.height);for(let K=0;K<6;K++){Y=me[K].mipmaps;for(let fe=0;fe<Y.length;fe++){const he=Y[fe];R.format!==en?Re!==null?Ue?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,he.width,he.height,Re,he.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,We,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,he.width,he.height,Re,ge,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,We,he.width,he.height,0,Re,ge,he.data)}}}else{if(Y=R.mipmaps,Ue&&nt){Y.length>0&&oe++;const K=Se(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,We,K.width,K.height)}for(let K=0;K<6;K++)if(ne){Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,Re,ge,me[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,me[K].width,me[K].height,0,Re,ge,me[K].data);for(let fe=0;fe<Y.length;fe++){const De=Y[fe].image[K].image;Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,De.width,De.height,Re,ge,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,We,De.width,De.height,0,Re,ge,De.data)}}else{Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,ge,me[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Re,ge,me[K]);for(let fe=0;fe<Y.length;fe++){const he=Y[fe];Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,Re,ge,he.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,We,Re,ge,he.image[K])}}}p(R)&&_(r.TEXTURE_CUBE_MAP),$.__version=j.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Q(L,R,V,Z,j,$){const ve=i.convert(V.format,V.colorSpace),ae=i.convert(V.type),ue=T(V.internalFormat,ve,ae,V.colorSpace),Ne=n.get(R),ne=n.get(V);if(ne.__renderTarget=R,!Ne.__hasExternalTextures){const me=Math.max(1,R.width>>$),Ae=Math.max(1,R.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,$,ue,me,Ae,R.depth,0,ve,ae,null):t.texImage2D(j,$,ue,me,Ae,0,ve,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Be(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,j,ne.__webglTexture,0,Oe(R)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,j,ne.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(L,R,V){if(r.bindRenderbuffer(r.RENDERBUFFER,L),R.depthBuffer){const Z=R.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=A(R.stencilBuffer,j),ve=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=Oe(R);Be(R)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,$,R.width,R.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,$,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,$,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,L)}else{const Z=R.textures;for(let j=0;j<Z.length;j++){const $=Z[j],ve=i.convert($.format,$.colorSpace),ae=i.convert($.type),ue=T($.internalFormat,ve,ae,$.colorSpace),Ne=Oe(R);V&&Be(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,ue,R.width,R.height):Be(R)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ne,ue,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,ue,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(R.depthTexture);Z.__renderTarget=R,(!Z.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);const j=Z.__webglTexture,$=Oe(R);if(R.depthTexture.format===Ei)Be(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(R.depthTexture.format===Ci)Be(R)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Te(L){const R=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Z){const j=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),R.__depthDisposeCallback=j}R.__boundDepthTexture=Z}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");de(R.__webglFramebuffer,L)}else if(V){R.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[Z]),R.__webglDepthbuffer[Z]===void 0)R.__webglDepthbuffer[Z]=r.createRenderbuffer(),se(R.__webglDepthbuffer[Z],L,!1);else{const j=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=R.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),se(R.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,j)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(L,R,V){const Z=n.get(L);R!==void 0&&Q(Z.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Te(L)}function Ve(L){const R=L.texture,V=n.get(L),Z=n.get(R);L.addEventListener("dispose",M);const j=L.textures,$=L.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=R.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer[ae]=[];for(let ue=0;ue<R.mipmaps.length;ue++)V.__webglFramebuffer[ae][ue]=r.createFramebuffer()}else V.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer=[];for(let ae=0;ae<R.mipmaps.length;ae++)V.__webglFramebuffer[ae]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ve)for(let ae=0,ue=j.length;ae<ue;ae++){const Ne=n.get(j[ae]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&Be(L)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const ue=j[ae];V.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ae]);const Ne=i.convert(ue.format,ue.colorSpace),ne=i.convert(ue.type),me=T(ue.internalFormat,Ne,ne,ue.colorSpace,L.isXRRenderTarget===!0),Ae=Oe(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,me,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,V.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),se(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ye(r.TEXTURE_CUBE_MAP,R);for(let ae=0;ae<6;ae++)if(R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)Q(V.__webglFramebuffer[ae][ue],L,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else Q(V.__webglFramebuffer[ae],L,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(R)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,ue=j.length;ae<ue;ae++){const Ne=j[ae],ne=n.get(Ne);t.bindTexture(r.TEXTURE_2D,ne.__webglTexture),ye(r.TEXTURE_2D,Ne),Q(V.__webglFramebuffer,L,Ne,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),p(Ne)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),ye(ae,R),R.mipmaps&&R.mipmaps.length>0)for(let ue=0;ue<R.mipmaps.length;ue++)Q(V.__webglFramebuffer[ue],L,R,r.COLOR_ATTACHMENT0,ae,ue);else Q(V.__webglFramebuffer,L,R,r.COLOR_ATTACHMENT0,ae,0);p(R)&&_(ae),t.unbindTexture()}L.depthBuffer&&Te(L)}function we(L){const R=L.textures;for(let V=0,Z=R.length;V<Z;V++){const j=R[V];if(p(j)){const $=E(L),ve=n.get(j).__webglTexture;t.bindTexture($,ve),_($),t.unbindTexture()}}}const rt=[],I=[];function It(L){if(L.samples>0){if(Be(L)===!1){const R=L.textures,V=L.width,Z=L.height;let j=r.COLOR_BUFFER_BIT;const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(L),ae=R.length>1;if(ae)for(let ue=0;ue<R.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<R.length;ue++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ne=n.get(R[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,V,Z,0,0,V,Z,j,r.NEAREST),l===!0&&(rt.length=0,I.length=0,rt.push(r.COLOR_ATTACHMENT0+ue),L.depthBuffer&&L.resolveDepthBuffer===!1&&(rt.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<R.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ne=n.get(R[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const R=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Oe(L){return Math.min(s.maxSamples,L.samples)}function Be(L){const R=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function xe(L){const R=a.render.frame;h.get(L)!==R&&(h.set(L,R),L.update())}function ze(L,R){const V=L.colorSpace,Z=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Pi&&V!==Cn&&(qe.getTransfer(V)===et?(Z!==en||j!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),R}function Se(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Be}function Op(r,e){function t(n,s=Cn){let i;const a=qe.getTransfer(s);if(n===xn)return r.UNSIGNED_BYTE;if(n===Sa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qo)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jo)return r.BYTE;if(n===jo)return r.SHORT;if(n===Xi)return r.UNSIGNED_SHORT;if(n===xa)return r.INT;if(n===Jn)return r.UNSIGNED_INT;if(n===gn)return r.FLOAT;if(n===$i)return r.HALF_FLOAT;if(n===el)return r.ALPHA;if(n===tl)return r.RGB;if(n===en)return r.RGBA;if(n===nl)return r.LUMINANCE;if(n===il)return r.LUMINANCE_ALPHA;if(n===Ei)return r.DEPTH_COMPONENT;if(n===Ci)return r.DEPTH_STENCIL;if(n===sl)return r.RED;if(n===Ma)return r.RED_INTEGER;if(n===rl)return r.RG;if(n===Ea)return r.RG_INTEGER;if(n===Ta)return r.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ds||n===Is)if(a===et)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Ps)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Ps)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===kr||n===Vr||n===Wr)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Gr)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===Yr||n===qr)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Xr||n===Yr)return a===et?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===qr)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$r||n===Zr||n===Kr||n===Jr||n===jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(n===$r)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jr)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jr)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===et?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===la||n===ca)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(n===Us)return a===et?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ha||n===ua||n===fa)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(n===Us)return i.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Bp={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,i=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),_=this._getHandJoint(u,g);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),c=.02,m=.005;u.inputState.pinching&&f>c+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=c-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=i!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hp=`
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

}`;class Gp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new At,i=e.properties.get(s);i.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yn({vertexShader:zp,fragmentShader:Hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kp extends Di{constructor(e,t){super();const n=this;let s=null,i=1,a=null,o="local-floor",l=1,u=null,h=null,d=null,f=null,c=null,m=null;const g=new Gp,p=t.getContextAttributes();let _=null,E=null;const T=[],A=[],x=new ke;let y=null;const M=new Qt;M.viewport=new ut;const b=new Qt;b.viewport=new ut;const S=[M,b],v=new lh;let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=T[q];return ee===void 0&&(ee=new Er,T[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=T[q];return ee===void 0&&(ee=new Er,T[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=T[q];return ee===void 0&&(ee=new Er,T[q]=ee),ee.getHandSpace()};function D(q){const ee=A.indexOf(q.inputSource);if(ee===-1)return;const Q=T[ee];Q!==void 0&&(Q.update(q.inputSource,q.frame,u||a),Q.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F);for(let q=0;q<T.length;q++){const ee=A[q];ee!==null&&(A[q]=null,T[q].disconnect(ee))}w=null,P=null,g.reset(),e.setRenderTarget(_),c=null,f=null,d=null,s=null,E=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){i=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:c},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Q=null,se=null,de=null;p.depth&&(de=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Ci:Ei,se=p.stencil?Ri:Jn);const Te={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:i};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new jn(f.textureWidth,f.textureHeight,{format:en,type:xn,depthTexture:new Ml(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};c=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),E=new jn(c.framebufferWidth,c.framebufferHeight,{format:en,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(q){for(let ee=0;ee<q.removed.length;ee++){const Q=q.removed[ee],se=A.indexOf(Q);se>=0&&(A[se]=null,T[se].disconnect(Q))}for(let ee=0;ee<q.added.length;ee++){const Q=q.added[ee];let se=A.indexOf(Q);if(se===-1){for(let Te=0;Te<T.length;Te++)if(Te>=A.length){A.push(Q),se=Te;break}else if(A[Te]===null){A[Te]=Q,se=Te;break}if(se===-1)break}const de=T[se];de&&de.connect(Q)}}const z=new k,G=new k;function H(q,ee,Q){z.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const se=z.distanceTo(G),de=ee.projectionMatrix.elements,Te=Q.projectionMatrix.elements,be=de[14]/(de[10]-1),Ve=de[14]/(de[10]+1),we=(de[9]+1)/de[5],rt=(de[9]-1)/de[5],I=(de[8]-1)/de[0],It=(Te[8]+1)/Te[0],Oe=be*I,Be=be*It,xe=se/(-I+It),ze=xe*-I;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(xe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),de[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Se=be+xe,L=Ve+xe,R=Oe-ze,V=Be+(se-ze),Z=we*Ve/L*Se,j=rt*Ve/L*Se;q.projectionMatrix.makePerspective(R,V,Z,j,Se,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,Q=q.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),v.near=b.near=M.near=ee,v.far=b.far=M.far=Q,(w!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,P=v.far),M.layers.mask=q.layers.mask|2,b.layers.mask=q.layers.mask|4,v.layers.mask=M.layers.mask|b.layers.mask;const se=q.parent,de=v.cameras;J(v,se);for(let Te=0;Te<de.length;Te++)J(de[Te],se);de.length===2?H(v,M,b):v.projectionMatrix.copy(M.projectionMatrix),ie(q,v,se)};function ie(q,ee,Q){Q===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(Q.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&c===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ce=null;function ye(q,ee){if(h=ee.getViewerPose(u||a),m=ee,h!==null){const Q=h.views;c!==null&&(e.setRenderTargetFramebuffer(E,c.framebuffer),e.setRenderTarget(E));let se=!1;Q.length!==v.cameras.length&&(v.cameras.length=0,se=!0);for(let Te=0;Te<Q.length;Te++){const be=Q[Te];let Ve=null;if(c!==null)Ve=c.getViewport(be);else{const rt=d.getViewSubImage(f,be);Ve=rt.viewport,Te===0&&(e.setRenderTargetTextures(E,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(E))}let we=S[Te];we===void 0&&(we=new Qt,we.layers.enable(Te),we.viewport=new ut,S[Te]=we),we.matrix.fromArray(be.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(be.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Te===0&&(v.matrix.copy(we.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),se===!0&&v.cameras.push(we)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")){const Te=d.getDepthInformation(Q[0]);Te&&Te.isValid&&Te.texture&&g.init(e,Te,s.renderState)}}for(let Q=0;Q<T.length;Q++){const se=A[Q],de=T[Q];se!==null&&de!==void 0&&de.update(se,ee,u||a)}ce&&ce(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Le=new Tl;Le.setAnimationLoop(ye),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}const Gn=new Sn,Vp=new at;function Wp(r,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,ml(r)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function s(p,_,E,T,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(p,_):_.isMeshToonMaterial?(i(p,_),d(p,_)):_.isMeshPhongMaterial?(i(p,_),h(p,_)):_.isMeshStandardMaterial?(i(p,_),f(p,_),_.isMeshPhysicalMaterial&&c(p,_,A)):_.isMeshMatcapMaterial?(i(p,_),m(p,_)):_.isMeshDepthMaterial?i(p,_):_.isMeshDistanceMaterial?(i(p,_),g(p,_)):_.isMeshNormalMaterial?i(p,_):_.isLineBasicMaterial?(a(p,_),_.isLineDashedMaterial&&o(p,_)):_.isPointsMaterial?l(p,_,E,T):_.isSpriteMaterial?u(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===Ft&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===Ft&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const E=e.get(_),T=E.envMap,A=E.envMapRotation;T&&(p.envMap.value=T,Gn.copy(A),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),p.envMapRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Gn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,E,T){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*E,p.scale.value=T*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function h(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function d(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function f(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function c(p,_,E){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ft&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function g(p,_){const E=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xp(r,e,t,n){let s={},i={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const A=T.program;n.uniformBlockBinding(E,A)}function u(E,T){let A=s[E.id];A===void 0&&(m(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",p));const x=T.program;n.updateUBOMapping(E,x);const y=e.render.frame;i[E.id]!==y&&(f(E),i[E.id]=y)}function h(E){const T=d();E.__bindingPointIndex=T;const A=r.createBuffer(),x=E.__size,y=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,x,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,A),A}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=s[E.id],A=E.uniforms,x=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let y=0,M=A.length;y<M;y++){const b=Array.isArray(A[y])?A[y]:[A[y]];for(let S=0,v=b.length;S<v;S++){const w=b[S];if(c(w,y,S,x)===!0){const P=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let F=0;F<D.length;F++){const z=D[F],G=g(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,P+U,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function c(E,T,A,x){const y=E.value,M=T+"_"+A;if(x[M]===void 0)return typeof y=="number"||typeof y=="boolean"?x[M]=y:x[M]=y.clone(),!0;{const b=x[M];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return x[M]=y,!0}else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function m(E){const T=E.uniforms;let A=0;const x=16;for(let M=0,b=T.length;M<b;M++){const S=Array.isArray(T[M])?T[M]:[T[M]];for(let v=0,w=S.length;v<w;v++){const P=S[v],D=Array.isArray(P.value)?P.value:[P.value];for(let U=0,F=D.length;U<F;U++){const z=D[U],G=g(z),H=A%x,J=H%G.boundary,ie=H+J;A+=J,ie!==0&&x-ie<G.storage&&(A+=x-ie),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=G.storage}}}const y=A%x;return y>0&&(A+=x-y),E.__size=A,E.__cache={},this}function g(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function p(E){const T=E.target;T.removeEventListener("dispose",p);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(s[T.id]),delete s[T.id],delete i[T.id]}function _(){for(const E in s)r.deleteBuffer(s[E]);a=[],s={},i={}}return{bind:l,update:u,dispose:_}}class Yp{constructor(e={}){const{canvas:t=Tc(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const m=new Uint32Array(4),g=new Int32Array(4);let p=null,_=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=Ln,this.toneMappingExposure=1;const A=this;let x=!1,y=0,M=0,b=null,S=-1,v=null;const w=new ut,P=new ut;let D=null;const U=new Ge(0);let F=0,z=t.width,G=t.height,H=1,J=null,ie=null;const ce=new ut(0,0,z,G),ye=new ut(0,0,z,G);let Le=!1;const q=new xl;let ee=!1,Q=!1;this.transmissionResolutionScale=1;const se=new at,de=new at,Te=new k,be=new ut,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function rt(){return b===null?H:1}let I=n;function It(C,O){return t.getContext(C,O)}try{const C={alpha:!0,depth:s,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",he,!1),I===null){const O="webgl2";if(I=It(O,C),I===null)throw It(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Oe,Be,xe,ze,Se,L,R,V,Z,j,$,ve,ae,ue,Ne,ne,me,Ae,Re,ge,We,Ue,nt,N;function oe(){Oe=new td(I),Oe.init(),Ue=new Op(I,Oe),Be=new Zf(I,Oe,e,Ue),xe=new Fp(I,Oe),Be.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),ze=new sd(I),Se=new Mp,L=new Np(I,Oe,xe,Se,Be,Ue,ze),R=new Jf(A),V=new ed(A),Z=new hh(I),nt=new qf(I,Z),j=new nd(I,Z,ze,nt),$=new ad(I,j,Z,ze),Re=new rd(I,Be,L),ne=new Kf(Se),ve=new yp(A,R,V,Oe,Be,nt,ne),ae=new Wp(A,Se),ue=new Tp,Ne=new Pp(Oe),Ae=new Yf(A,R,V,xe,$,c,l),me=new Ip(A,$,Be),N=new Xp(I,ze,Be,xe),ge=new $f(I,Oe,ze),We=new id(I,Oe,ze),ze.programs=ve.programs,A.capabilities=Be,A.extensions=Oe,A.properties=Se,A.renderLists=ue,A.shadowMap=me,A.state=xe,A.info=ze}oe();const Y=new kp(A,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(z,G,!1))},this.getSize=function(C){return C.set(z,G)},this.setSize=function(C,O,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,G=O,t.width=Math.floor(C*H),t.height=Math.floor(O*H),W===!0&&(t.style.width=C+"px",t.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(z*H,G*H).floor()},this.setDrawingBufferSize=function(C,O,W){z=C,G=O,H=W,t.width=Math.floor(C*W),t.height=Math.floor(O*W),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(ce)},this.setViewport=function(C,O,W,X){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,O,W,X),xe.viewport(w.copy(ce).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,O,W,X){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,O,W,X),xe.scissor(P.copy(ye).multiplyScalar(H).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){xe.setScissorTest(Le=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(C=!0,O=!0,W=!0){let X=0;if(C){let B=!1;if(b!==null){const te=b.texture.format;B=te===Ta||te===Ea||te===Ma}if(B){const te=b.texture.type,le=te===xn||te===Jn||te===Xi||te===Ri||te===Sa||te===ya,pe=Ae.getClearColor(),_e=Ae.getClearAlpha(),Ce=pe.r,Pe=pe.g,Me=pe.b;le?(m[0]=Ce,m[1]=Pe,m[2]=Me,m[3]=_e,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ce,g[1]=Pe,g[2]=Me,g[3]=_e,I.clearBufferiv(I.COLOR,0,g))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ae.dispose(),ue.dispose(),Ne.dispose(),Se.dispose(),R.dispose(),V.dispose(),$.dispose(),nt.dispose(),N.dispose(),ve.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Pa),Y.removeEventListener("sessionend",La),Un.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=ze.autoReset,O=me.enabled,W=me.autoUpdate,X=me.needsUpdate,B=me.type;oe(),ze.autoReset=C,me.enabled=O,me.autoUpdate=W,me.needsUpdate=X,me.type=B}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function De(C){const O=C.target;O.removeEventListener("dispose",De),ot(O)}function ot(C){yt(C),Se.remove(C)}function yt(C){const O=Se.get(C).programs;O!==void 0&&(O.forEach(function(W){ve.releaseProgram(W)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,W,X,B,te){O===null&&(O=Ve);const le=B.isMesh&&B.matrixWorld.determinant()<0,pe=Cl(C,O,W,X,B);xe.setMaterial(X,le);let _e=W.index,Ce=1;if(X.wireframe===!0){if(_e=j.getWireframeAttribute(W),_e===void 0)return;Ce=2}const Pe=W.drawRange,Me=W.attributes.position;let Xe=Pe.start*Ce,$e=(Pe.start+Pe.count)*Ce;te!==null&&(Xe=Math.max(Xe,te.start*Ce),$e=Math.min($e,(te.start+te.count)*Ce)),_e!==null?(Xe=Math.max(Xe,0),$e=Math.min($e,_e.count)):Me!=null&&(Xe=Math.max(Xe,0),$e=Math.min($e,Me.count));const ft=$e-Xe;if(ft<0||ft===1/0)return;nt.setup(B,X,pe,W,_e);let lt,Ye=ge;if(_e!==null&&(lt=Z.get(_e),Ye=We,Ye.setIndex(lt)),B.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*rt()),Ye.setMode(I.LINES)):Ye.setMode(I.TRIANGLES);else if(B.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),xe.setLineWidth(Ee*rt()),B.isLineSegments?Ye.setMode(I.LINES):B.isLineLoop?Ye.setMode(I.LINE_LOOP):Ye.setMode(I.LINE_STRIP)}else B.isPoints?Ye.setMode(I.POINTS):B.isSprite&&Ye.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ye.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ee=B._multiDrawStarts,St=B._multiDrawCounts,Ze=B._multiDrawCount,$t=_e?Z.get(_e).bytesPerElement:1,ei=Se.get(X).currentProgram.getUniforms();for(let Ot=0;Ot<Ze;Ot++)ei.setValue(I,"_gl_DrawID",Ot),Ye.render(Ee[Ot]/$t,St[Ot])}else if(B.isInstancedMesh)Ye.renderInstances(Xe,ft,B.count);else if(W.isInstancedBufferGeometry){const Ee=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,St=Math.min(W.instanceCount,Ee);Ye.renderInstances(Xe,ft,St)}else Ye.render(Xe,ft)};function Ke(C,O,W){C.transparent===!0&&C.side===mn&&C.forceSinglePass===!1?(C.side=Ft,C.needsUpdate=!0,es(C,O,W),C.side=In,C.needsUpdate=!0,es(C,O,W),C.side=mn):es(C,O,W)}this.compile=function(C,O,W=null){W===null&&(W=C),_=Ne.get(W),_.init(O),T.push(_),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),C!==W&&C.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const X=new Set;return C.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const te=B.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){const pe=te[le];Ke(pe,W,B),X.add(pe)}else Ke(te,W,B),X.add(te)}),T.pop(),_=null,X},this.compileAsync=function(C,O,W=null){const X=this.compile(C,O,W);return new Promise(B=>{function te(){if(X.forEach(function(le){Se.get(le).currentProgram.isReady()&&X.delete(le)}),X.size===0){B(C);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let qt=null;function on(C){qt&&qt(C)}function Pa(){Un.stop()}function La(){Un.start()}const Un=new Tl;Un.setAnimationLoop(on),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(C){qt=C,Y.setAnimationLoop(C),C===null?Un.stop():Un.start()},Y.addEventListener("sessionstart",Pa),Y.addEventListener("sessionend",La),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,O,b),_=Ne.get(C,T.length),_.init(O),T.push(_),de.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(de),Q=this.localClippingEnabled,ee=ne.init(this.clippingPlanes,Q),p=ue.get(C,E.length),p.init(),E.push(p),Y.enabled===!0&&Y.isPresenting===!0){const te=A.xr.getDepthSensingMesh();te!==null&&Ws(te,O,-1/0,A.sortObjects)}Ws(C,O,0,A.sortObjects),p.finish(),A.sortObjects===!0&&p.sort(J,ie),we=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,we&&Ae.addToRenderList(p,C),this.info.render.frame++,ee===!0&&ne.beginShadows();const W=_.state.shadowsArray;me.render(W,C,O),ee===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,B=p.transmissive;if(_.setupLights(),O.isArrayCamera){const te=O.cameras;if(B.length>0)for(let le=0,pe=te.length;le<pe;le++){const _e=te[le];Ia(X,B,C,_e)}we&&Ae.render(C);for(let le=0,pe=te.length;le<pe;le++){const _e=te[le];Da(p,C,_e,_e.viewport)}}else B.length>0&&Ia(X,B,C,O),we&&Ae.render(C),Da(p,C,O);b!==null&&M===0&&(L.updateMultisampleRenderTarget(b),L.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(A,C,O),nt.resetDefaultState(),S=-1,v=null,T.pop(),T.length>0?(_=T[T.length-1],ee===!0&&ne.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Ws(C,O,W,X){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){X&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const le=$.update(C),pe=C.material;pe.visible&&p.push(C,le,pe,W,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const le=$.update(C),pe=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),be.copy(le.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(pe)){const _e=le.groups;for(let Ce=0,Pe=_e.length;Ce<Pe;Ce++){const Me=_e[Ce],Xe=pe[Me.materialIndex];Xe&&Xe.visible&&p.push(C,le,Xe,W,be.z,Me)}}else pe.visible&&p.push(C,le,pe,W,be.z,null)}}const te=C.children;for(let le=0,pe=te.length;le<pe;le++)Ws(te[le],O,W,X)}function Da(C,O,W,X){const B=C.opaque,te=C.transmissive,le=C.transparent;_.setupLightsView(W),ee===!0&&ne.setGlobalState(A.clippingPlanes,W),X&&xe.viewport(w.copy(X)),B.length>0&&Qi(B,O,W),te.length>0&&Qi(te,O,W),le.length>0&&Qi(le,O,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ia(C,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[X.id]===void 0&&(_.state.transmissionRenderTarget[X.id]=new jn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?$i:xn,minFilter:$n,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const te=_.state.transmissionRenderTarget[X.id],le=X.viewport||w;te.setSize(le.z*A.transmissionResolutionScale,le.w*A.transmissionResolutionScale);const pe=A.getRenderTarget();A.setRenderTarget(te),A.getClearColor(U),F=A.getClearAlpha(),F<1&&A.setClearColor(16777215,.5),A.clear(),we&&Ae.render(W);const _e=A.toneMapping;A.toneMapping=Ln;const Ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),_.setupLightsView(X),ee===!0&&ne.setGlobalState(A.clippingPlanes,X),Qi(C,W,X),L.updateMultisampleRenderTarget(te),L.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Me=0,Xe=O.length;Me<Xe;Me++){const $e=O[Me],ft=$e.object,lt=$e.geometry,Ye=$e.material,Ee=$e.group;if(Ye.side===mn&&ft.layers.test(X.layers)){const St=Ye.side;Ye.side=Ft,Ye.needsUpdate=!0,Ua(ft,W,X,lt,Ye,Ee),Ye.side=St,Ye.needsUpdate=!0,Pe=!0}}Pe===!0&&(L.updateMultisampleRenderTarget(te),L.updateRenderTargetMipmap(te))}A.setRenderTarget(pe),A.setClearColor(U,F),Ce!==void 0&&(X.viewport=Ce),A.toneMapping=_e}function Qi(C,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,te=C.length;B<te;B++){const le=C[B],pe=le.object,_e=le.geometry,Ce=X===null?le.material:X,Pe=le.group;pe.layers.test(W.layers)&&Ua(pe,O,W,_e,Ce,Pe)}}function Ua(C,O,W,X,B,te){C.onBeforeRender(A,O,W,X,B,te),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.onBeforeRender(A,O,W,X,C,te),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,A.renderBufferDirect(W,O,X,B,C,te),B.side=In,B.needsUpdate=!0,A.renderBufferDirect(W,O,X,B,C,te),B.side=mn):A.renderBufferDirect(W,O,X,B,C,te),C.onAfterRender(A,O,W,X,B,te)}function es(C,O,W){O.isScene!==!0&&(O=Ve);const X=Se.get(C),B=_.state.lights,te=_.state.shadowsArray,le=B.state.version,pe=ve.getParameters(C,B.state,te,O,W),_e=ve.getProgramCacheKey(pe);let Ce=X.programs;X.environment=C.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(C.isMeshStandardMaterial?V:R).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Ce===void 0&&(C.addEventListener("dispose",De),Ce=new Map,X.programs=Ce);let Pe=Ce.get(_e);if(Pe!==void 0){if(X.currentProgram===Pe&&X.lightsStateVersion===le)return Na(C,pe),Pe}else pe.uniforms=ve.getUniforms(C),C.onBeforeCompile(pe,A),Pe=ve.acquireProgram(pe,_e),Ce.set(_e,Pe),X.uniforms=pe.uniforms;const Me=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Me.clippingPlanes=ne.uniform),Na(C,pe),X.needsLights=Ll(C),X.lightsStateVersion=le,X.needsLights&&(Me.ambientLightColor.value=B.state.ambient,Me.lightProbe.value=B.state.probe,Me.directionalLights.value=B.state.directional,Me.directionalLightShadows.value=B.state.directionalShadow,Me.spotLights.value=B.state.spot,Me.spotLightShadows.value=B.state.spotShadow,Me.rectAreaLights.value=B.state.rectArea,Me.ltc_1.value=B.state.rectAreaLTC1,Me.ltc_2.value=B.state.rectAreaLTC2,Me.pointLights.value=B.state.point,Me.pointLightShadows.value=B.state.pointShadow,Me.hemisphereLights.value=B.state.hemi,Me.directionalShadowMap.value=B.state.directionalShadowMap,Me.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Me.spotShadowMap.value=B.state.spotShadowMap,Me.spotLightMatrix.value=B.state.spotLightMatrix,Me.spotLightMap.value=B.state.spotLightMap,Me.pointShadowMap.value=B.state.pointShadowMap,Me.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Pe,X.uniformsList=null,Pe}function Fa(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=Fs.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function Na(C,O){const W=Se.get(C);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Cl(C,O,W,X,B){O.isScene!==!0&&(O=Ve),L.resetTextureUnits();const te=O.fog,le=X.isMeshStandardMaterial?O.environment:null,pe=b===null?A.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Pi,_e=(X.isMeshStandardMaterial?V:R).get(X.envMap||le),Ce=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Me=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,$e=!!W.morphAttributes.color;let ft=Ln;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ft=A.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=lt!==void 0?lt.length:0,Ee=Se.get(X),St=_.state.lights;if(ee===!0&&(Q===!0||C!==v)){const Rt=C===v&&X.id===S;ne.setState(X,C,Rt)}let Ze=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==St.state.version||Ee.outputColorSpace!==pe||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==_e||X.fog===!0&&Ee.fog!==te||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Pe||Ee.morphTargets!==Me||Ee.morphNormals!==Xe||Ee.morphColors!==$e||Ee.toneMapping!==ft||Ee.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,Ee.__version=X.version);let $t=Ee.currentProgram;Ze===!0&&($t=es(X,O,B));let ei=!1,Ot=!1,Ui=!1;const st=$t.getUniforms(),Vt=Ee.uniforms;if(xe.useProgram($t.program)&&(ei=!0,Ot=!0,Ui=!0),X.id!==S&&(S=X.id,Ot=!0),ei||v!==C){xe.buffers.depth.getReversed()?(se.copy(C.projectionMatrix),bc(se),wc(se),st.setValue(I,"projectionMatrix",se)):st.setValue(I,"projectionMatrix",C.projectionMatrix),st.setValue(I,"viewMatrix",C.matrixWorldInverse);const Ut=st.map.cameraPosition;Ut!==void 0&&Ut.setValue(I,Te.setFromMatrixPosition(C.matrixWorld)),Be.logarithmicDepthBuffer&&st.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&st.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Ot=!0,Ui=!0)}if(B.isSkinnedMesh){st.setOptional(I,B,"bindMatrix"),st.setOptional(I,B,"bindMatrixInverse");const Rt=B.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),st.setValue(I,"boneTexture",Rt.boneTexture,L))}B.isBatchedMesh&&(st.setOptional(I,B,"batchingTexture"),st.setValue(I,"batchingTexture",B._matricesTexture,L),st.setOptional(I,B,"batchingIdTexture"),st.setValue(I,"batchingIdTexture",B._indirectTexture,L),st.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&st.setValue(I,"batchingColorTexture",B._colorsTexture,L));const Wt=W.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Re.update(B,W,$t),(Ot||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,st.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Vt.envMap.value=_e,Vt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Vt.envMapIntensity.value=O.environmentIntensity),Ot&&(st.setValue(I,"toneMappingExposure",A.toneMappingExposure),Ee.needsLights&&Pl(Vt,Ui),te&&X.fog===!0&&ae.refreshFogUniforms(Vt,te),ae.refreshMaterialUniforms(Vt,X,H,G,_.state.transmissionRenderTarget[C.id]),Fs.upload(I,Fa(Ee),Vt,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fs.upload(I,Fa(Ee),Vt,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&st.setValue(I,"center",B.center),st.setValue(I,"modelViewMatrix",B.modelViewMatrix),st.setValue(I,"normalMatrix",B.normalMatrix),st.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Rt=X.uniformsGroups;for(let Ut=0,Xs=Rt.length;Ut<Xs;Ut++){const Fn=Rt[Ut];N.update(Fn,$t),N.bind(Fn,$t)}}return $t}function Pl(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function Ll(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,O,W){Se.get(C.texture).__webglTexture=O,Se.get(C.depthTexture).__webglTexture=W;const X=Se.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const W=Se.get(C);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Dl=I.createFramebuffer();this.setRenderTarget=function(C,O=0,W=0){b=C,y=O,M=W;let X=!0,B=null,te=!1,le=!1;if(C){const _e=Se.get(C);if(_e.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(_e.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(_e.__hasExternalTextures)L.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Me=C.depthTexture;if(_e.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(C.width!==Me.image.width||C.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Ce=C.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Pe=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?B=Pe[O][W]:B=Pe[O],te=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?B=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[W]:B=Pe,w.copy(C.viewport),P.copy(C.scissor),D=C.scissorTest}else w.copy(ce).multiplyScalar(H).floor(),P.copy(ye).multiplyScalar(H).floor(),D=Le;if(W!==0&&(B=Dl),xe.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&xe.drawBuffers(C,B),xe.viewport(w),xe.scissor(P),xe.setScissorTest(D),te){const _e=Se.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,W)}else if(le){const _e=Se.get(C.texture),Ce=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,W,Ce)}else if(C!==null&&W!==0){const _e=Se.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_e.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(C,O,W,X,B,te,le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){xe.bindFramebuffer(I.FRAMEBUFFER,pe);try{const _e=C.texture,Ce=_e.format,Pe=_e.type;if(!Be.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-X&&W>=0&&W<=C.height-B&&I.readPixels(O,W,X,B,Ue.convert(Ce),Ue.convert(Pe),te)}finally{const _e=b!==null?Se.get(b).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(C,O,W,X,B,te,le){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){const _e=C.texture,Ce=_e.format,Pe=_e.type;if(!Be.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-X&&W>=0&&W<=C.height-B){xe.bindFramebuffer(I.FRAMEBUFFER,pe);const Me=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.bufferData(I.PIXEL_PACK_BUFFER,te.byteLength,I.STREAM_READ),I.readPixels(O,W,X,B,Ue.convert(Ce),Ue.convert(Pe),0);const Xe=b!==null?Se.get(b).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,Xe);const $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ac(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Me),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,te),I.deleteBuffer(Me),I.deleteSync($e),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,O=null,W=0){C.isTexture!==!0&&(Si("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(C.image.width*X),te=Math.floor(C.image.height*X),le=O!==null?O.x:0,pe=O!==null?O.y:0;L.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,le,pe,B,te),xe.unbindTexture()};const Il=I.createFramebuffer(),Ul=I.createFramebuffer();this.copyTextureToTexture=function(C,O,W=null,X=null,B=0,te=null){C.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],O=arguments[2],te=arguments[3]||0,W=null),te===null&&(B!==0?(Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=B,B=0):te=0);let le,pe,_e,Ce,Pe,Me,Xe,$e,ft;const lt=C.isCompressedTexture?C.mipmaps[te]:C.image;if(W!==null)le=W.max.x-W.min.x,pe=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,Pe=W.min.y,Me=W.isBox3?W.min.z:0;else{const Wt=Math.pow(2,-B);le=Math.floor(lt.width*Wt),pe=Math.floor(lt.height*Wt),C.isDataArrayTexture?_e=lt.depth:C.isData3DTexture?_e=Math.floor(lt.depth*Wt):_e=1,Ce=0,Pe=0,Me=0}X!==null?(Xe=X.x,$e=X.y,ft=X.z):(Xe=0,$e=0,ft=0);const Ye=Ue.convert(O.format),Ee=Ue.convert(O.type);let St;O.isData3DTexture?(L.setTexture3D(O,0),St=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(L.setTexture2DArray(O,0),St=I.TEXTURE_2D_ARRAY):(L.setTexture2D(O,0),St=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Ze=I.getParameter(I.UNPACK_ROW_LENGTH),$t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),Ot=I.getParameter(I.UNPACK_SKIP_ROWS),Ui=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Me);const st=C.isDataArrayTexture||C.isData3DTexture,Vt=O.isDataArrayTexture||O.isData3DTexture;if(C.isDepthTexture){const Wt=Se.get(C),Rt=Se.get(O),Ut=Se.get(Wt.__renderTarget),Xs=Se.get(Rt.__renderTarget);xe.bindFramebuffer(I.READ_FRAMEBUFFER,Ut.__webglFramebuffer),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Fn=0;Fn<_e;Fn++)st&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(C).__webglTexture,B,Me+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(O).__webglTexture,te,ft+Fn)),I.blitFramebuffer(Ce,Pe,le,pe,Xe,$e,le,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||C.isRenderTargetTexture||Se.has(C)){const Wt=Se.get(C),Rt=Se.get(O);xe.bindFramebuffer(I.READ_FRAMEBUFFER,Il),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ul);for(let Ut=0;Ut<_e;Ut++)st?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,B,Me+Ut):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Wt.__webglTexture,B),Vt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,te,ft+Ut):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,te),B!==0?I.blitFramebuffer(Ce,Pe,le,pe,Xe,$e,le,pe,I.COLOR_BUFFER_BIT,I.NEAREST):Vt?I.copyTexSubImage3D(St,te,Xe,$e,ft+Ut,Ce,Pe,le,pe):I.copyTexSubImage2D(St,te,Xe,$e,Ce,Pe,le,pe);xe.bindFramebuffer(I.READ_FRAMEBUFFER,null),xe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Vt?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(St,te,Xe,$e,ft,le,pe,_e,Ye,Ee,lt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(St,te,Xe,$e,ft,le,pe,_e,Ye,lt.data):I.texSubImage3D(St,te,Xe,$e,ft,le,pe,_e,Ye,Ee,lt):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,te,Xe,$e,le,pe,Ye,Ee,lt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,te,Xe,$e,lt.width,lt.height,Ye,lt.data):I.texSubImage2D(I.TEXTURE_2D,te,Xe,$e,le,pe,Ye,Ee,lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ui),te===0&&O.generateMipmaps&&I.generateMipmap(St),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,O,W=null,X=null,B=0){return C.isTexture!==!0&&(Si("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,C=arguments[2],O=arguments[3],B=arguments[4]||0),Si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,O,W,X,B)},this.initRenderTarget=function(C){Se.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){y=0,M=0,b=null,xe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const qp={MAJOR:1,MINOR:1,BUILD:1,toString(){return`v${this.MAJOR}.${this.MINOR} build ${this.BUILD}`}},_a={ASPECT:9/16},Dt={WIDTH:390,HEIGHT:844,BG_TOP:8900331,BG_BOTTOM:6005721},je={PEG_ROWS:12,PEG_COLS:8,PEG_RADIUS:7,PEG_SPACING_X:44,PEG_SPACING_Y:44,TOP_OFFSET:180,WALL_THICKNESS:10},Tt={COUNT:7,HEIGHT:65,MULTIPLIERS:[1,3,5,10,5,3,1],COLORS:[5025616,9159498,16771899,16750592,16771899,9159498,5025616],TIERS:{1:{glowColor:5025616,glowIntensity:0,labelScale:1,labelColor:"#ffffff",labelStroke:3},3:{glowColor:9159498,glowIntensity:.15,labelScale:1.05,labelColor:"#ffffff",labelStroke:3},5:{glowColor:16771899,glowIntensity:.3,labelScale:1.1,labelColor:"#FFFFA0",labelStroke:3.5},10:{glowColor:16766720,glowIntensity:.6,labelScale:1.2,labelColor:"#FFD700",labelStroke:4}}},xi={RADIUS:10,RESTITUTION:.75,FRICTION:.02,DENSITY:.001},xt={BODY_RADIUS:18,Y_POS:105,SPEED:40,BOB_AMPLITUDE:4,BOB_SPEED:2.5,LAY_DURATION:.3,WARMUP_DURATION:1.8},Qe={FOLLOW_LERP:.08,FOLLOW_LERP_X:.1,ZOOM_LERP:.04,IDLE_ZOOM:4.6,WARMUP_ZOOM:5.2,DROP_ZOOM_START:1.4,DROP_ZOOM_MIN:.7,DROP_ZOOM_MAX:1.4,HATCH_ZOOM:1.6,HATCH_SHAKE_MAX:4,SHAKE_INTENSITY:2.5,SHAKE_DECAY:.9,SPEED_ZOOM_FACTOR:3e-4,BOARD_TOP_Y:180,BOARD_BOTTOM_Y:770,OVERVIEW_ZOOM:1.2,OVERVIEW_CENTER_Y:418},Wi={BASE_GOLD:1,COMBO_WINDOW_MS:400,COMBO_MAX:10},Rn={HATCH_DELAY:.5,WOBBLE_DURATION:1.2,CRACK_DURATION:.3,TRANSITION_DURATION:1.5,IDLE_PROMPT_DELAY:.5,LAND_FREEZE:.08},Je={MASTER_VOLUME:.3,PEG_BASE_FREQ:800,PEG_FREQ_RANGE:400,COIN_BASE_FREQ:1200},dn={GROUND_HEIGHT:400,GROUND_WIDTH:800,GROUND_COLOR:5999678,GROUND_TOP_COLOR:8308816,GROUND_TOP_HEIGHT:18,CLOUD_PARALLAX:.12,MOUNTAIN_PARALLAX:.05},Kn={DUPLI_BOUNCE_COST:1e3,DUPLICATE_RADIUS_SCALE:.85,DUPLICATE_OPACITY:.75,DUPLICATE_RESTITUTION:.8,SPAWN_SPEED_MIN:1.5,SPAWN_SPEED_SPREAD:1},pt={SCALE:.65,SPEED:35,WARMUP_DURATION:1.2,LAY_DURATION:.25,AUDIO_VOLUME_SCALE:.25,Z_POS:4,INTERVAL_REDUCTION:.12,MAX_LEVEL:10},Tr=[{id:"normal",name:"Chicken",emoji:"🐔",description:"Lays eggs on its own",baseCost:250,levelCostBase:200,levelCostMult:1.8,baseInterval:15,goldMultiplier:1,tint:null,eggTint:null,timerColor:"#FFFFFF",particleColor:16766720},{id:"rainbow",name:"Rainbow Chicken",emoji:"🌈",description:"Lays rainbow eggs worth 10x gold",baseCost:2e3,levelCostBase:1500,levelCostMult:2,baseInterval:30,goldMultiplier:10,tint:16738740,eggTint:16738740,timerColor:"#FF69B4",particleColor:16738740},{id:"cosmic",name:"Cosmic Chicken",emoji:"🌌",description:"Lays cosmic eggs worth 50x gold",baseCost:1e4,levelCostBase:8e3,levelCostMult:2.2,baseInterval:60,goldMultiplier:50,tint:10181046,eggTint:10181046,timerColor:"#9B59B6",particleColor:10181046}],kn=[{id:"bounciness",name:"Bouncy Egg",emoji:"🏀",description:"Eggs bounce higher off pegs",maxLevel:5,baseCost:150,costMult:2,effect:.04},{id:"multi_egg",name:"Double Yolk",emoji:"🥚",description:"Lay extra eggs each drop",maxLevel:3,baseCost:500,costMult:3,effect:1},{id:"golden_pegs",name:"Golden Pegs",emoji:"⭐",description:"Random pegs give 5x gold",maxLevel:5,baseCost:300,costMult:2.2,effect:3},{id:"diamond_pegs",name:"Diamond Pegs",emoji:"💎",description:"Random pegs give 25x gold",maxLevel:5,baseCost:1e4,costMult:2.5,effect:1},{id:"rainbow_pegs",name:"Rainbow Pegs",emoji:"🌈",description:"Random pegs give 50x gold",maxLevel:3,baseCost:75e3,costMult:3,effect:1}],sn={CYCLE_INTERVAL:30,golden:{multiplier:5,color:16766720,hitColor:16777130,textColor:"#FFFF00",scale:1.3},diamond:{multiplier:25,color:4517631,hitColor:11206655,textColor:"#44EEFF",scale:1.35},rainbow:{multiplier:50,color:16729343,hitColor:16755455,textColor:"#FF44FF",scale:1.4}},Lt={PEG_DEFAULT:14737632,PEG_HIT:16777215,WALL:9139029,BIN_BORDER:7035709,GOLD_PARTICLE:16766720,SHELL_PARTICLE:16774630,SPARK:16777130,DUST:13154454};class $p{constructor(e){this.container=e,this.scene=new ro;const t=Dt.HEIGHT/2,n=t*_a.ASPECT;this.camera=new El(-n,n,t,-t,.1,1e3),this.camera.position.z=100,this.renderer=new Yp({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0),e.appendChild(this.renderer.domElement),this._createBackground(),this._resize(),window.addEventListener("resize",()=>this._resize())}_createBackground(){const e=new mt(2,2),t=new yn({uniforms:{uTopColor:{value:new Ge(Dt.BG_TOP)},uBottomColor:{value:new Ge(Dt.BG_BOTTOM)},uBrightness:{value:0}},vertexShader:`
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
      `,depthWrite:!1,depthTest:!1});this.bgMesh=new it(e,t),this.bgMesh.renderOrder=-1e3,this.bgMesh.frustumCulled=!1,this.bgScene=new ro,this.bgCamera=new ba,this.bgScene.add(this.bgMesh)}setBgBrightness(e){this.bgMesh.material.uniforms.uBrightness.value=e}_resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(e===0||t===0)return;this.renderer.setSize(e,t);const n=Dt.HEIGHT/2,s=n*_a.ASPECT;this.camera.left=-s,this.camera.right=s,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix()}render(){this.renderer.autoClear=!1,this.renderer.clear(),this.renderer.render(this.bgScene,this.bgCamera),this.renderer.render(this.scene,this.camera)}projectToScreen(e,t){const n=new k(e,t,0);n.project(this.camera);const s=this.container.clientWidth,i=this.container.clientHeight;return{x:(n.x*.5+.5)*s,y:(-n.y*.5+.5)*i}}getCanvas(){return this.renderer.domElement}}var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ns={exports:{}};/*!
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
 */var Kp=Ns.exports,Ho;function Jp(){return Ho||(Ho=1,(function(r,e){(function(n,s){r.exports=s()})(Kp,function(){return(function(t){var n={};function s(i){if(n[i])return n[i].exports;var a=n[i]={i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=t,s.c=n,s.d=function(i,a,o){s.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:o})},s.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,a){if(a&1&&(i=s(i)),a&8||a&4&&typeof i=="object"&&i&&i.__esModule)return i;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),a&2&&typeof i!="string")for(var l in i)s.d(o,l,(function(u){return i[u]}).bind(null,l));return o},s.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(a,"a",a),a},s.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},s.p="",s(s.s=20)})([(function(t,n){var s={};t.exports=s,(function(){s._baseDelta=1e3/60,s._nextId=0,s._seed=0,s._nowStartTime=+new Date,s._warnedOnce={},s._decomp=null,s.extend=function(a,o){var l,u;typeof o=="boolean"?(l=2,u=o):(l=1,u=!0);for(var h=l;h<arguments.length;h++){var d=arguments[h];if(d)for(var f in d)u&&d[f]&&d[f].constructor===Object&&(!a[f]||a[f].constructor===Object)?(a[f]=a[f]||{},s.extend(a[f],u,d[f])):a[f]=d[f]}return a},s.clone=function(a,o){return s.extend({},o,a)},s.keys=function(a){if(Object.keys)return Object.keys(a);var o=[];for(var l in a)o.push(l);return o},s.values=function(a){var o=[];if(Object.keys){for(var l=Object.keys(a),u=0;u<l.length;u++)o.push(a[l[u]]);return o}for(var h in a)o.push(a[h]);return o},s.get=function(a,o,l,u){o=o.split(".").slice(l,u);for(var h=0;h<o.length;h+=1)a=a[o[h]];return a},s.set=function(a,o,l,u,h){var d=o.split(".").slice(u,h);return s.get(a,o,0,-1)[d[d.length-1]]=l,l},s.shuffle=function(a){for(var o=a.length-1;o>0;o--){var l=Math.floor(s.random()*(o+1)),u=a[o];a[o]=a[l],a[l]=u}return a},s.choose=function(a){return a[Math.floor(s.random()*a.length)]},s.isElement=function(a){return typeof HTMLElement<"u"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},s.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},s.isFunction=function(a){return typeof a=="function"},s.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},s.isString=function(a){return toString.call(a)==="[object String]"},s.clamp=function(a,o,l){return a<o?o:a>l?l:a},s.sign=function(a){return a<0?-1:1},s.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-s._nowStartTime},s.random=function(a,o){return a=typeof a<"u"?a:0,o=typeof o<"u"?o:1,a+i()*(o-a)};var i=function(){return s._seed=(s._seed*9301+49297)%233280,s._seed/233280};s.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},s.logLevel=1,s.log=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.info=function(){console&&s.logLevel>0&&s.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warn=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");s._warnedOnce[a]||(s.warn(a),s._warnedOnce[a]=!0)},s.deprecated=function(a,o,l){a[o]=s.chain(function(){s.warnOnce("🔅 deprecated 🔅",l)},a[o])},s.nextId=function(){return s._nextId++},s.indexOf=function(a,o){if(a.indexOf)return a.indexOf(o);for(var l=0;l<a.length;l++)if(a[l]===o)return l;return-1},s.map=function(a,o){if(a.map)return a.map(o);for(var l=[],u=0;u<a.length;u+=1)l.push(o(a[u]));return l},s.topologicalSort=function(a){var o=[],l=[],u=[];for(var h in a)!l[h]&&!u[h]&&s._topologicalSort(h,l,u,a,o);return o},s._topologicalSort=function(a,o,l,u,h){var d=u[a]||[];l[a]=!0;for(var f=0;f<d.length;f+=1){var c=d[f];l[c]||o[c]||s._topologicalSort(c,o,l,u,h)}l[a]=!1,o[a]=!0,h.push(a)},s.chain=function(){for(var a=[],o=0;o<arguments.length;o+=1){var l=arguments[o];l._chained?a.push.apply(a,l._chained):a.push(l)}var u=function(){for(var h,d=new Array(arguments.length),f=0,c=arguments.length;f<c;f++)d[f]=arguments[f];for(f=0;f<a.length;f+=1){var m=a[f].apply(h,d);typeof m<"u"&&(h=m)}return h};return u._chained=a,u},s.chainPathBefore=function(a,o,l){return s.set(a,o,s.chain(l,s.get(a,o)))},s.chainPathAfter=function(a,o,l){return s.set(a,o,s.chain(s.get(a,o),l))},s.setDecomp=function(a){s._decomp=a},s.getDecomp=function(){var a=s._decomp;try{!a&&typeof window<"u"&&(a=window.decomp),!a&&typeof zo<"u"&&(a=zo.decomp)}catch{a=null}return a}})()}),(function(t,n){var s={};t.exports=s,(function(){s.create=function(i){var a={min:{x:0,y:0},max:{x:0,y:0}};return i&&s.update(a,i),a},s.update=function(i,a,o){i.min.x=1/0,i.max.x=-1/0,i.min.y=1/0,i.max.y=-1/0;for(var l=0;l<a.length;l++){var u=a[l];u.x>i.max.x&&(i.max.x=u.x),u.x<i.min.x&&(i.min.x=u.x),u.y>i.max.y&&(i.max.y=u.y),u.y<i.min.y&&(i.min.y=u.y)}o&&(o.x>0?i.max.x+=o.x:i.min.x+=o.x,o.y>0?i.max.y+=o.y:i.min.y+=o.y)},s.contains=function(i,a){return a.x>=i.min.x&&a.x<=i.max.x&&a.y>=i.min.y&&a.y<=i.max.y},s.overlaps=function(i,a){return i.min.x<=a.max.x&&i.max.x>=a.min.x&&i.max.y>=a.min.y&&i.min.y<=a.max.y},s.translate=function(i,a){i.min.x+=a.x,i.max.x+=a.x,i.min.y+=a.y,i.max.y+=a.y},s.shift=function(i,a){var o=i.max.x-i.min.x,l=i.max.y-i.min.y;i.min.x=a.x,i.max.x=a.x+o,i.min.y=a.y,i.max.y=a.y+l}})()}),(function(t,n){var s={};t.exports=s,(function(){s.create=function(i,a){return{x:i||0,y:a||0}},s.clone=function(i){return{x:i.x,y:i.y}},s.magnitude=function(i){return Math.sqrt(i.x*i.x+i.y*i.y)},s.magnitudeSquared=function(i){return i.x*i.x+i.y*i.y},s.rotate=function(i,a,o){var l=Math.cos(a),u=Math.sin(a);o||(o={});var h=i.x*l-i.y*u;return o.y=i.x*u+i.y*l,o.x=h,o},s.rotateAbout=function(i,a,o,l){var u=Math.cos(a),h=Math.sin(a);l||(l={});var d=o.x+((i.x-o.x)*u-(i.y-o.y)*h);return l.y=o.y+((i.x-o.x)*h+(i.y-o.y)*u),l.x=d,l},s.normalise=function(i){var a=s.magnitude(i);return a===0?{x:0,y:0}:{x:i.x/a,y:i.y/a}},s.dot=function(i,a){return i.x*a.x+i.y*a.y},s.cross=function(i,a){return i.x*a.y-i.y*a.x},s.cross3=function(i,a,o){return(a.x-i.x)*(o.y-i.y)-(a.y-i.y)*(o.x-i.x)},s.add=function(i,a,o){return o||(o={}),o.x=i.x+a.x,o.y=i.y+a.y,o},s.sub=function(i,a,o){return o||(o={}),o.x=i.x-a.x,o.y=i.y-a.y,o},s.mult=function(i,a){return{x:i.x*a,y:i.y*a}},s.div=function(i,a){return{x:i.x/a,y:i.y/a}},s.perp=function(i,a){return a=a===!0?-1:1,{x:a*-i.y,y:a*i.x}},s.neg=function(i){return{x:-i.x,y:-i.y}},s.angle=function(i,a){return Math.atan2(a.y-i.y,a.x-i.x)},s._temp=[s.create(),s.create(),s.create(),s.create(),s.create(),s.create()]})()}),(function(t,n,s){var i={};t.exports=i;var a=s(2),o=s(0);(function(){i.create=function(l,u){for(var h=[],d=0;d<l.length;d++){var f=l[d],c={x:f.x,y:f.y,index:d,body:u,isInternal:!1};h.push(c)}return h},i.fromPath=function(l,u){var h=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return l.replace(h,function(f,c,m){d.push({x:parseFloat(c),y:parseFloat(m)})}),i.create(d,u)},i.centre=function(l){for(var u=i.area(l,!0),h={x:0,y:0},d,f,c,m=0;m<l.length;m++)c=(m+1)%l.length,d=a.cross(l[m],l[c]),f=a.mult(a.add(l[m],l[c]),d),h=a.add(h,f);return a.div(h,6*u)},i.mean=function(l){for(var u={x:0,y:0},h=0;h<l.length;h++)u.x+=l[h].x,u.y+=l[h].y;return a.div(u,l.length)},i.area=function(l,u){for(var h=0,d=l.length-1,f=0;f<l.length;f++)h+=(l[d].x-l[f].x)*(l[d].y+l[f].y),d=f;return u?h/2:Math.abs(h)/2},i.inertia=function(l,u){for(var h=0,d=0,f=l,c,m,g=0;g<f.length;g++)m=(g+1)%f.length,c=Math.abs(a.cross(f[m],f[g])),h+=c*(a.dot(f[m],f[m])+a.dot(f[m],f[g])+a.dot(f[g],f[g])),d+=c;return u/6*(h/d)},i.translate=function(l,u,h){h=typeof h<"u"?h:1;var d=l.length,f=u.x*h,c=u.y*h,m;for(m=0;m<d;m++)l[m].x+=f,l[m].y+=c;return l},i.rotate=function(l,u,h){if(u!==0){var d=Math.cos(u),f=Math.sin(u),c=h.x,m=h.y,g=l.length,p,_,E,T;for(T=0;T<g;T++)p=l[T],_=p.x-c,E=p.y-m,p.x=c+(_*d-E*f),p.y=m+(_*f+E*d);return l}},i.contains=function(l,u){for(var h=u.x,d=u.y,f=l.length,c=l[f-1],m,g=0;g<f;g++){if(m=l[g],(h-c.x)*(m.y-c.y)+(d-c.y)*(c.x-m.x)>0)return!1;c=m}return!0},i.scale=function(l,u,h,d){if(u===1&&h===1)return l;d=d||i.centre(l);for(var f,c,m=0;m<l.length;m++)f=l[m],c=a.sub(f,d),l[m].x=d.x+c.x*u,l[m].y=d.y+c.y*h;return l},i.chamfer=function(l,u,h,d,f){typeof u=="number"?u=[u]:u=u||[8],h=typeof h<"u"?h:-1,d=d||2,f=f||14;for(var c=[],m=0;m<l.length;m++){var g=l[m-1>=0?m-1:l.length-1],p=l[m],_=l[(m+1)%l.length],E=u[m<u.length?m:u.length-1];if(E===0){c.push(p);continue}var T=a.normalise({x:p.y-g.y,y:g.x-p.x}),A=a.normalise({x:_.y-p.y,y:p.x-_.x}),x=Math.sqrt(2*Math.pow(E,2)),y=a.mult(o.clone(T),E),M=a.normalise(a.mult(a.add(T,A),.5)),b=a.sub(p,a.mult(M,x)),S=h;h===-1&&(S=Math.pow(E,.32)*1.75),S=o.clamp(S,d,f),S%2===1&&(S+=1);for(var v=Math.acos(a.dot(T,A)),w=v/S,P=0;P<S;P++)c.push(a.add(a.rotate(y,w*P),b))}return c},i.clockwiseSort=function(l){var u=i.mean(l);return l.sort(function(h,d){return a.angle(u,h)-a.angle(u,d)}),l},i.isConvex=function(l){var u=0,h=l.length,d,f,c,m;if(h<3)return null;for(d=0;d<h;d++)if(f=(d+1)%h,c=(d+2)%h,m=(l[f].x-l[d].x)*(l[c].y-l[f].y),m-=(l[f].y-l[d].y)*(l[c].x-l[f].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},i.hull=function(l){var u=[],h=[],d,f;for(l=l.slice(0),l.sort(function(c,m){var g=c.x-m.x;return g!==0?g:c.y-m.y}),f=0;f<l.length;f+=1){for(d=l[f];h.length>=2&&a.cross3(h[h.length-2],h[h.length-1],d)<=0;)h.pop();h.push(d)}for(f=l.length-1;f>=0;f-=1){for(d=l[f];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],d)<=0;)u.pop();u.push(d)}return u.pop(),h.pop(),u.concat(h)}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(3),o=s(2),l=s(7),u=s(0),h=s(1),d=s(11);(function(){i._timeCorrection=!0,i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i._baseDelta=1e3/60,i.create=function(c){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},g=u.extend(m,c);return f(g,c),g},i.nextGroup=function(c){return c?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var f=function(c,m){m=m||{},i.set(c,{bounds:c.bounds||h.create(c.vertices),positionPrev:c.positionPrev||o.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),a.rotate(c.vertices,c.angle,c.position),d.rotate(c.axes,c.angle),h.update(c.bounds,c.vertices,c.velocity),i.set(c,{axes:m.axes||c.axes,area:m.area||c.area,mass:m.mass||c.mass,inertia:m.inertia||c.inertia});var g=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),p=c.isStatic?"#555":"#ccc",_=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||g,c.render.strokeStyle=c.render.strokeStyle||p,c.render.lineWidth=c.render.lineWidth||_,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};i.set=function(c,m,g){var p;typeof m=="string"&&(p=m,m={},m[p]=g);for(p in m)if(Object.prototype.hasOwnProperty.call(m,p))switch(g=m[p],p){case"isStatic":i.setStatic(c,g);break;case"isSleeping":l.set(c,g);break;case"mass":i.setMass(c,g);break;case"density":i.setDensity(c,g);break;case"inertia":i.setInertia(c,g);break;case"vertices":i.setVertices(c,g);break;case"position":i.setPosition(c,g);break;case"angle":i.setAngle(c,g);break;case"velocity":i.setVelocity(c,g);break;case"angularVelocity":i.setAngularVelocity(c,g);break;case"speed":i.setSpeed(c,g);break;case"angularSpeed":i.setAngularSpeed(c,g);break;case"parts":i.setParts(c,g);break;case"centre":i.setCentre(c,g);break;default:c[p]=g}},i.setStatic=function(c,m){for(var g=0;g<c.parts.length;g++){var p=c.parts[g];m?(p.isStatic||(p._original={restitution:p.restitution,friction:p.friction,mass:p.mass,inertia:p.inertia,density:p.density,inverseMass:p.inverseMass,inverseInertia:p.inverseInertia}),p.restitution=0,p.friction=1,p.mass=p.inertia=p.density=1/0,p.inverseMass=p.inverseInertia=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.angularVelocity=0,p.speed=0,p.angularSpeed=0,p.motion=0):p._original&&(p.restitution=p._original.restitution,p.friction=p._original.friction,p.mass=p._original.mass,p.inertia=p._original.inertia,p.density=p._original.density,p.inverseMass=p._original.inverseMass,p.inverseInertia=p._original.inverseInertia,p._original=null),p.isStatic=m}},i.setMass=function(c,m){var g=c.inertia/(c.mass/6);c.inertia=g*(m/6),c.inverseInertia=1/c.inertia,c.mass=m,c.inverseMass=1/c.mass,c.density=c.mass/c.area},i.setDensity=function(c,m){i.setMass(c,m*c.area),c.density=m},i.setInertia=function(c,m){c.inertia=m,c.inverseInertia=1/c.inertia},i.setVertices=function(c,m){m[0].body===c?c.vertices=m:c.vertices=a.create(m,c),c.axes=d.fromVertices(c.vertices),c.area=a.area(c.vertices),i.setMass(c,c.density*c.area);var g=a.centre(c.vertices);a.translate(c.vertices,g,-1),i.setInertia(c,i._inertiaScale*a.inertia(c.vertices,c.mass)),a.translate(c.vertices,c.position),h.update(c.bounds,c.vertices,c.velocity)},i.setParts=function(c,m,g){var p;for(m=m.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,p=0;p<m.length;p++){var _=m[p];_!==c&&(_.parent=c,c.parts.push(_))}if(c.parts.length!==1){if(g=typeof g<"u"?g:!0,g){var E=[];for(p=0;p<m.length;p++)E=E.concat(m[p].vertices);a.clockwiseSort(E);var T=a.hull(E),A=a.centre(T);i.setVertices(c,T),a.translate(c.vertices,A)}var x=i._totalProperties(c);c.area=x.area,c.parent=c,c.position.x=x.centre.x,c.position.y=x.centre.y,c.positionPrev.x=x.centre.x,c.positionPrev.y=x.centre.y,i.setMass(c,x.mass),i.setInertia(c,x.inertia),i.setPosition(c,x.centre)}},i.setCentre=function(c,m,g){g?(c.positionPrev.x+=m.x,c.positionPrev.y+=m.y,c.position.x+=m.x,c.position.y+=m.y):(c.positionPrev.x=m.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=m.y-(c.position.y-c.positionPrev.y),c.position.x=m.x,c.position.y=m.y)},i.setPosition=function(c,m,g){var p=o.sub(m,c.position);g?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=p.x,c.velocity.y=p.y,c.speed=o.magnitude(p)):(c.positionPrev.x+=p.x,c.positionPrev.y+=p.y);for(var _=0;_<c.parts.length;_++){var E=c.parts[_];E.position.x+=p.x,E.position.y+=p.y,a.translate(E.vertices,p),h.update(E.bounds,E.vertices,c.velocity)}},i.setAngle=function(c,m,g){var p=m-c.angle;g?(c.anglePrev=c.angle,c.angularVelocity=p,c.angularSpeed=Math.abs(p)):c.anglePrev+=p;for(var _=0;_<c.parts.length;_++){var E=c.parts[_];E.angle+=p,a.rotate(E.vertices,p,c.position),d.rotate(E.axes,p),h.update(E.bounds,E.vertices,c.velocity),_>0&&o.rotateAbout(E.position,p,c.position,E.position)}},i.setVelocity=function(c,m){var g=c.deltaTime/i._baseDelta;c.positionPrev.x=c.position.x-m.x*g,c.positionPrev.y=c.position.y-m.y*g,c.velocity.x=(c.position.x-c.positionPrev.x)/g,c.velocity.y=(c.position.y-c.positionPrev.y)/g,c.speed=o.magnitude(c.velocity)},i.getVelocity=function(c){var m=i._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*m,y:(c.position.y-c.positionPrev.y)*m}},i.getSpeed=function(c){return o.magnitude(i.getVelocity(c))},i.setSpeed=function(c,m){i.setVelocity(c,o.mult(o.normalise(i.getVelocity(c)),m))},i.setAngularVelocity=function(c,m){var g=c.deltaTime/i._baseDelta;c.anglePrev=c.angle-m*g,c.angularVelocity=(c.angle-c.anglePrev)/g,c.angularSpeed=Math.abs(c.angularVelocity)},i.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*i._baseDelta/c.deltaTime},i.getAngularSpeed=function(c){return Math.abs(i.getAngularVelocity(c))},i.setAngularSpeed=function(c,m){i.setAngularVelocity(c,u.sign(i.getAngularVelocity(c))*m)},i.translate=function(c,m,g){i.setPosition(c,o.add(c.position,m),g)},i.rotate=function(c,m,g,p){if(!g)i.setAngle(c,c.angle+m,p);else{var _=Math.cos(m),E=Math.sin(m),T=c.position.x-g.x,A=c.position.y-g.y;i.setPosition(c,{x:g.x+(T*_-A*E),y:g.y+(T*E+A*_)},p),i.setAngle(c,c.angle+m,p)}},i.scale=function(c,m,g,p){var _=0,E=0;p=p||c.position;for(var T=0;T<c.parts.length;T++){var A=c.parts[T];a.scale(A.vertices,m,g,p),A.axes=d.fromVertices(A.vertices),A.area=a.area(A.vertices),i.setMass(A,c.density*A.area),a.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),i.setInertia(A,i._inertiaScale*a.inertia(A.vertices,A.mass)),a.translate(A.vertices,{x:A.position.x,y:A.position.y}),T>0&&(_+=A.area,E+=A.inertia),A.position.x=p.x+(A.position.x-p.x)*m,A.position.y=p.y+(A.position.y-p.y)*g,h.update(A.bounds,A.vertices,c.velocity)}c.parts.length>1&&(c.area=_,c.isStatic||(i.setMass(c,c.density*_),i.setInertia(c,E))),c.circleRadius&&(m===g?c.circleRadius*=m:c.circleRadius=null)},i.update=function(c,m){m=(typeof m<"u"?m:1e3/60)*c.timeScale;var g=m*m,p=i._timeCorrection?m/(c.deltaTime||m):1,_=1-c.frictionAir*(m/u._baseDelta),E=(c.position.x-c.positionPrev.x)*p,T=(c.position.y-c.positionPrev.y)*p;c.velocity.x=E*_+c.force.x/c.mass*g,c.velocity.y=T*_+c.force.y/c.mass*g,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=m,c.angularVelocity=(c.angle-c.anglePrev)*_*p+c.torque/c.inertia*g,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var A=0;A<c.parts.length;A++){var x=c.parts[A];a.translate(x.vertices,c.velocity),A>0&&(x.position.x+=c.velocity.x,x.position.y+=c.velocity.y),c.angularVelocity!==0&&(a.rotate(x.vertices,c.angularVelocity,c.position),d.rotate(x.axes,c.angularVelocity),A>0&&o.rotateAbout(x.position,c.angularVelocity,c.position,x.position)),h.update(x.bounds,x.vertices,c.velocity)}},i.updateVelocities=function(c){var m=i._baseDelta/c.deltaTime,g=c.velocity;g.x=(c.position.x-c.positionPrev.x)*m,g.y=(c.position.y-c.positionPrev.y)*m,c.speed=Math.sqrt(g.x*g.x+g.y*g.y),c.angularVelocity=(c.angle-c.anglePrev)*m,c.angularSpeed=Math.abs(c.angularVelocity)},i.applyForce=function(c,m,g){var p={x:m.x-c.position.x,y:m.y-c.position.y};c.force.x+=g.x,c.force.y+=g.y,c.torque+=p.x*g.y-p.y*g.x},i._totalProperties=function(c){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},g=c.parts.length===1?0:1;g<c.parts.length;g++){var p=c.parts[g],_=p.mass!==1/0?p.mass:1;m.mass+=_,m.area+=p.area,m.inertia+=p.inertia,m.centre=o.add(m.centre,o.mult(p.position,_))}return m.centre=o.div(m.centre,m.mass),m}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(0);(function(){i.on=function(o,l,u){for(var h=l.split(" "),d,f=0;f<h.length;f++)d=h[f],o.events=o.events||{},o.events[d]=o.events[d]||[],o.events[d].push(u);return u},i.off=function(o,l,u){if(!l){o.events={};return}typeof l=="function"&&(u=l,l=a.keys(o.events).join(" "));for(var h=l.split(" "),d=0;d<h.length;d++){var f=o.events[h[d]],c=[];if(u&&f)for(var m=0;m<f.length;m++)f[m]!==u&&c.push(f[m]);o.events[h[d]]=c}},i.trigger=function(o,l,u){var h,d,f,c,m=o.events;if(m&&a.keys(m).length>0){u||(u={}),h=l.split(" ");for(var g=0;g<h.length;g++)if(d=h[g],f=m[d],f){c=a.clone(u,!1),c.name=d,c.source=o;for(var p=0;p<f.length;p++)f[p].apply(o,[c])}}}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(5),o=s(0),l=s(1),u=s(4);(function(){i.create=function(h){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},h)},i.setModified=function(h,d,f,c){if(h.isModified=d,d&&h.cache&&(h.cache.allBodies=null,h.cache.allConstraints=null,h.cache.allComposites=null),f&&h.parent&&i.setModified(h.parent,d,f,c),c)for(var m=0;m<h.composites.length;m++){var g=h.composites[m];i.setModified(g,d,f,c)}},i.add=function(h,d){var f=[].concat(d);a.trigger(h,"beforeAdd",{object:d});for(var c=0;c<f.length;c++){var m=f[c];switch(m.type){case"body":if(m.parent!==m){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(h,m);break;case"constraint":i.addConstraint(h,m);break;case"composite":i.addComposite(h,m);break;case"mouseConstraint":i.addConstraint(h,m.constraint);break}}return a.trigger(h,"afterAdd",{object:d}),h},i.remove=function(h,d,f){var c=[].concat(d);a.trigger(h,"beforeRemove",{object:d});for(var m=0;m<c.length;m++){var g=c[m];switch(g.type){case"body":i.removeBody(h,g,f);break;case"constraint":i.removeConstraint(h,g,f);break;case"composite":i.removeComposite(h,g,f);break;case"mouseConstraint":i.removeConstraint(h,g.constraint);break}}return a.trigger(h,"afterRemove",{object:d}),h},i.addComposite=function(h,d){return h.composites.push(d),d.parent=h,i.setModified(h,!0,!0,!1),h},i.removeComposite=function(h,d,f){var c=o.indexOf(h.composites,d);if(c!==-1){var m=i.allBodies(d);i.removeCompositeAt(h,c);for(var g=0;g<m.length;g++)m[g].sleepCounter=0}if(f)for(var g=0;g<h.composites.length;g++)i.removeComposite(h.composites[g],d,!0);return h},i.removeCompositeAt=function(h,d){return h.composites.splice(d,1),i.setModified(h,!0,!0,!1),h},i.addBody=function(h,d){return h.bodies.push(d),i.setModified(h,!0,!0,!1),h},i.removeBody=function(h,d,f){var c=o.indexOf(h.bodies,d);if(c!==-1&&(i.removeBodyAt(h,c),d.sleepCounter=0),f)for(var m=0;m<h.composites.length;m++)i.removeBody(h.composites[m],d,!0);return h},i.removeBodyAt=function(h,d){return h.bodies.splice(d,1),i.setModified(h,!0,!0,!1),h},i.addConstraint=function(h,d){return h.constraints.push(d),i.setModified(h,!0,!0,!1),h},i.removeConstraint=function(h,d,f){var c=o.indexOf(h.constraints,d);if(c!==-1&&i.removeConstraintAt(h,c),f)for(var m=0;m<h.composites.length;m++)i.removeConstraint(h.composites[m],d,!0);return h},i.removeConstraintAt=function(h,d){return h.constraints.splice(d,1),i.setModified(h,!0,!0,!1),h},i.clear=function(h,d,f){if(f)for(var c=0;c<h.composites.length;c++)i.clear(h.composites[c],d,!0);return d?h.bodies=h.bodies.filter(function(m){return m.isStatic}):h.bodies.length=0,h.constraints.length=0,h.composites.length=0,i.setModified(h,!0,!0,!1),h},i.allBodies=function(h){if(h.cache&&h.cache.allBodies)return h.cache.allBodies;for(var d=[].concat(h.bodies),f=0;f<h.composites.length;f++)d=d.concat(i.allBodies(h.composites[f]));return h.cache&&(h.cache.allBodies=d),d},i.allConstraints=function(h){if(h.cache&&h.cache.allConstraints)return h.cache.allConstraints;for(var d=[].concat(h.constraints),f=0;f<h.composites.length;f++)d=d.concat(i.allConstraints(h.composites[f]));return h.cache&&(h.cache.allConstraints=d),d},i.allComposites=function(h){if(h.cache&&h.cache.allComposites)return h.cache.allComposites;for(var d=[].concat(h.composites),f=0;f<h.composites.length;f++)d=d.concat(i.allComposites(h.composites[f]));return h.cache&&(h.cache.allComposites=d),d},i.get=function(h,d,f){var c,m;switch(f){case"body":c=i.allBodies(h);break;case"constraint":c=i.allConstraints(h);break;case"composite":c=i.allComposites(h).concat(h);break}return c?(m=c.filter(function(g){return g.id.toString()===d.toString()}),m.length===0?null:m[0]):null},i.move=function(h,d,f){return i.remove(h,d),i.add(f,d),h},i.rebase=function(h){for(var d=i.allBodies(h).concat(i.allConstraints(h)).concat(i.allComposites(h)),f=0;f<d.length;f++)d[f].id=o.nextId();return h},i.translate=function(h,d,f){for(var c=f?i.allBodies(h):h.bodies,m=0;m<c.length;m++)u.translate(c[m],d);return h},i.rotate=function(h,d,f,c){for(var m=Math.cos(d),g=Math.sin(d),p=c?i.allBodies(h):h.bodies,_=0;_<p.length;_++){var E=p[_],T=E.position.x-f.x,A=E.position.y-f.y;u.setPosition(E,{x:f.x+(T*m-A*g),y:f.y+(T*g+A*m)}),u.rotate(E,d)}return h},i.scale=function(h,d,f,c,m){for(var g=m?i.allBodies(h):h.bodies,p=0;p<g.length;p++){var _=g[p],E=_.position.x-c.x,T=_.position.y-c.y;u.setPosition(_,{x:c.x+E*d,y:c.y+T*f}),u.scale(_,d,f)}return h},i.bounds=function(h){for(var d=i.allBodies(h),f=[],c=0;c<d.length;c+=1){var m=d[c];f.push(m.bounds.min,m.bounds.max)}return l.create(f)}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(4),o=s(5),l=s(0);(function(){i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(u,h){for(var d=h/l._baseDelta,f=i._motionSleepThreshold,c=0;c<u.length;c++){var m=u[c],g=a.getSpeed(m),p=a.getAngularSpeed(m),_=g*g+p*p;if(m.force.x!==0||m.force.y!==0){i.set(m,!1);continue}var E=Math.min(m.motion,_),T=Math.max(m.motion,_);m.motion=i._minBias*E+(1-i._minBias)*T,m.sleepThreshold>0&&m.motion<f?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/d&&i.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},i.afterCollisions=function(u){for(var h=i._motionSleepThreshold,d=0;d<u.length;d++){var f=u[d];if(f.isActive){var c=f.collision,m=c.bodyA.parent,g=c.bodyB.parent;if(!(m.isSleeping&&g.isSleeping||m.isStatic||g.isStatic)&&(m.isSleeping||g.isSleeping)){var p=m.isSleeping&&!m.isStatic?m:g,_=p===m?g:m;!p.isStatic&&_.motion>h&&i.set(p,!1)}}}},i.set=function(u,h){var d=u.isSleeping;h?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,d||o.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,d&&o.trigger(u,"sleepEnd"))}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(3),o=s(9);(function(){var l=[],u={overlap:0,axis:null},h={overlap:0,axis:null};i.create=function(d,f){return{pair:null,collided:!1,bodyA:d,bodyB:f,parentA:d.parent,parentB:f.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},i.collides=function(d,f,c){if(i._overlapAxes(u,d.vertices,f.vertices,d.axes),u.overlap<=0||(i._overlapAxes(h,f.vertices,d.vertices,f.axes),h.overlap<=0))return null;var m=c&&c.table[o.id(d,f)],g;m?g=m.collision:(g=i.create(d,f),g.collided=!0,g.bodyA=d.id<f.id?d:f,g.bodyB=d.id<f.id?f:d,g.parentA=g.bodyA.parent,g.parentB=g.bodyB.parent),d=g.bodyA,f=g.bodyB;var p;u.overlap<h.overlap?p=u:p=h;var _=g.normal,E=g.tangent,T=g.penetration,A=g.supports,x=p.overlap,y=p.axis,M=y.x,b=y.y,S=f.position.x-d.position.x,v=f.position.y-d.position.y;M*S+b*v>=0&&(M=-M,b=-b),_.x=M,_.y=b,E.x=-b,E.y=M,T.x=M*x,T.y=b*x,g.depth=x;var w=i._findSupports(d,f,_,1),P=0;if(a.contains(d.vertices,w[0])&&(A[P++]=w[0]),a.contains(d.vertices,w[1])&&(A[P++]=w[1]),P<2){var D=i._findSupports(f,d,_,-1);a.contains(f.vertices,D[0])&&(A[P++]=D[0]),P<2&&a.contains(f.vertices,D[1])&&(A[P++]=D[1])}return P===0&&(A[P++]=w[0]),g.supportCount=P,g},i._overlapAxes=function(d,f,c,m){var g=f.length,p=c.length,_=f[0].x,E=f[0].y,T=c[0].x,A=c[0].y,x=m.length,y=Number.MAX_VALUE,M=0,b,S,v,w,P,D;for(P=0;P<x;P++){var U=m[P],F=U.x,z=U.y,G=_*F+E*z,H=T*F+A*z,J=G,ie=H;for(D=1;D<g;D+=1)w=f[D].x*F+f[D].y*z,w>J?J=w:w<G&&(G=w);for(D=1;D<p;D+=1)w=c[D].x*F+c[D].y*z,w>ie?ie=w:w<H&&(H=w);if(S=J-H,v=ie-G,b=S<v?S:v,b<y&&(y=b,M=P,b<=0))break}d.axis=m[M],d.overlap=y},i._findSupports=function(d,f,c,m){var g=f.vertices,p=g.length,_=d.position.x,E=d.position.y,T=c.x*m,A=c.y*m,x=g[0],y=x,M=T*(_-y.x)+A*(E-y.y),b,S,v;for(v=1;v<p;v+=1)y=g[v],S=T*(_-y.x)+A*(E-y.y),S<M&&(M=S,x=y);return b=g[(p+x.index-1)%p],M=T*(_-b.x)+A*(E-b.y),y=g[(x.index+1)%p],T*(_-y.x)+A*(E-y.y)<M?(l[0]=x,l[1]=y,l):(l[0]=x,l[1]=b,l)}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(16);(function(){i.create=function(o,l){var u=o.bodyA,h=o.bodyB,d={id:i.id(u,h),bodyA:u,bodyB:h,collision:o,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||h.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(d,o,l),d},i.update=function(o,l,u){var h=l.supports,d=l.supportCount,f=o.contacts,c=l.parentA,m=l.parentB;o.isActive=!0,o.timeUpdated=u,o.collision=l,o.separation=l.depth,o.inverseMass=c.inverseMass+m.inverseMass,o.friction=c.friction<m.friction?c.friction:m.friction,o.frictionStatic=c.frictionStatic>m.frictionStatic?c.frictionStatic:m.frictionStatic,o.restitution=c.restitution>m.restitution?c.restitution:m.restitution,o.slop=c.slop>m.slop?c.slop:m.slop,o.contactCount=d,l.pair=o;var g=h[0],p=f[0],_=h[1],E=f[1];(E.vertex===g||p.vertex===_)&&(f[1]=p,f[0]=p=E,E=f[1]),p.vertex=g,E.vertex=_},i.setActive=function(o,l,u){l?(o.isActive=!0,o.timeUpdated=u):(o.isActive=!1,o.contactCount=0)},i.id=function(o,l){return o.id<l.id?o.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+o.id.toString(36)}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(3),o=s(2),l=s(7),u=s(1),h=s(11),d=s(0);(function(){i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(f){var c=f;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var m=c.bodyA?o.add(c.bodyA.position,c.pointA):c.pointA,g=c.bodyB?o.add(c.bodyB.position,c.pointB):c.pointB,p=o.magnitude(o.sub(m,g));c.length=typeof c.length<"u"?c.length:p,c.id=c.id||d.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var _={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(_.type="pin",_.anchors=!1):c.stiffness<.9&&(_.type="spring"),c.render=d.extend(_,c.render),c},i.preSolveAll=function(f){for(var c=0;c<f.length;c+=1){var m=f[c],g=m.constraintImpulse;m.isStatic||g.x===0&&g.y===0&&g.angle===0||(m.position.x+=g.x,m.position.y+=g.y,m.angle+=g.angle)}},i.solveAll=function(f,c){for(var m=d.clamp(c/d._baseDelta,0,1),g=0;g<f.length;g+=1){var p=f[g],_=!p.bodyA||p.bodyA&&p.bodyA.isStatic,E=!p.bodyB||p.bodyB&&p.bodyB.isStatic;(_||E)&&i.solve(f[g],m)}for(g=0;g<f.length;g+=1)p=f[g],_=!p.bodyA||p.bodyA&&p.bodyA.isStatic,E=!p.bodyB||p.bodyB&&p.bodyB.isStatic,!_&&!E&&i.solve(f[g],m)},i.solve=function(f,c){var m=f.bodyA,g=f.bodyB,p=f.pointA,_=f.pointB;if(!(!m&&!g)){m&&!m.isStatic&&(o.rotate(p,m.angle-f.angleA,p),f.angleA=m.angle),g&&!g.isStatic&&(o.rotate(_,g.angle-f.angleB,_),f.angleB=g.angle);var E=p,T=_;if(m&&(E=o.add(m.position,p)),g&&(T=o.add(g.position,_)),!(!E||!T)){var A=o.sub(E,T),x=o.magnitude(A);x<i._minLength&&(x=i._minLength);var y=(x-f.length)/x,M=f.stiffness>=1||f.length===0,b=M?f.stiffness*c:f.stiffness*c*c,S=f.damping*c,v=o.mult(A,y*b),w=(m?m.inverseMass:0)+(g?g.inverseMass:0),P=(m?m.inverseInertia:0)+(g?g.inverseInertia:0),D=w+P,U,F,z,G,H;if(S>0){var J=o.create();z=o.div(A,x),H=o.sub(g&&o.sub(g.position,g.positionPrev)||J,m&&o.sub(m.position,m.positionPrev)||J),G=o.dot(z,H)}m&&!m.isStatic&&(F=m.inverseMass/w,m.constraintImpulse.x-=v.x*F,m.constraintImpulse.y-=v.y*F,m.position.x-=v.x*F,m.position.y-=v.y*F,S>0&&(m.positionPrev.x-=S*z.x*G*F,m.positionPrev.y-=S*z.y*G*F),U=o.cross(p,v)/D*i._torqueDampen*m.inverseInertia*(1-f.angularStiffness),m.constraintImpulse.angle-=U,m.angle-=U),g&&!g.isStatic&&(F=g.inverseMass/w,g.constraintImpulse.x+=v.x*F,g.constraintImpulse.y+=v.y*F,g.position.x+=v.x*F,g.position.y+=v.y*F,S>0&&(g.positionPrev.x+=S*z.x*G*F,g.positionPrev.y+=S*z.y*G*F),U=o.cross(_,v)/D*i._torqueDampen*g.inverseInertia*(1-f.angularStiffness),g.constraintImpulse.angle+=U,g.angle+=U)}}},i.postSolveAll=function(f){for(var c=0;c<f.length;c++){var m=f[c],g=m.constraintImpulse;if(!(m.isStatic||g.x===0&&g.y===0&&g.angle===0)){l.set(m,!1);for(var p=0;p<m.parts.length;p++){var _=m.parts[p];a.translate(_.vertices,g),p>0&&(_.position.x+=g.x,_.position.y+=g.y),g.angle!==0&&(a.rotate(_.vertices,g.angle,m.position),h.rotate(_.axes,g.angle),p>0&&o.rotateAbout(_.position,g.angle,m.position,_.position)),u.update(_.bounds,_.vertices,m.velocity)}g.angle*=i._warming,g.x*=i._warming,g.y*=i._warming}}},i.pointAWorld=function(f){return{x:(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),y:(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0)}},i.pointBWorld=function(f){return{x:(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),y:(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0)}},i.currentLength=function(f){var c=(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),m=(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0),g=(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),p=(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0),_=c-g,E=m-p;return Math.sqrt(_*_+E*E)}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(2),o=s(0);(function(){i.fromVertices=function(l){for(var u={},h=0;h<l.length;h++){var d=(h+1)%l.length,f=a.normalise({x:l[d].y-l[h].y,y:l[h].x-l[d].x}),c=f.y===0?1/0:f.x/f.y;c=c.toFixed(3).toString(),u[c]=f}return o.values(u)},i.rotate=function(l,u){if(u!==0)for(var h=Math.cos(u),d=Math.sin(u),f=0;f<l.length;f++){var c=l[f],m;m=c.x*h-c.y*d,c.y=c.x*d+c.y*h,c.x=m}}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(3),o=s(0),l=s(4),u=s(1),h=s(2);(function(){i.rectangle=function(d,f,c,m,g){g=g||{};var p={label:"Rectangle Body",position:{x:d,y:f},vertices:a.fromPath("L 0 0 L "+c+" 0 L "+c+" "+m+" L 0 "+m)};if(g.chamfer){var _=g.chamfer;p.vertices=a.chamfer(p.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete g.chamfer}return l.create(o.extend({},p,g))},i.trapezoid=function(d,f,c,m,g,p){p=p||{},g>=1&&o.warn("Bodies.trapezoid: slope parameter must be < 1."),g*=.5;var _=(1-g*2)*c,E=c*g,T=E+_,A=T+E,x;g<.5?x="L 0 0 L "+E+" "+-m+" L "+T+" "+-m+" L "+A+" 0":x="L 0 0 L "+T+" "+-m+" L "+A+" 0";var y={label:"Trapezoid Body",position:{x:d,y:f},vertices:a.fromPath(x)};if(p.chamfer){var M=p.chamfer;y.vertices=a.chamfer(y.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete p.chamfer}return l.create(o.extend({},y,p))},i.circle=function(d,f,c,m,g){m=m||{};var p={label:"Circle Body",circleRadius:c};g=g||25;var _=Math.ceil(Math.max(10,Math.min(g,c)));return _%2===1&&(_+=1),i.polygon(d,f,_,c,o.extend({},p,m))},i.polygon=function(d,f,c,m,g){if(g=g||{},c<3)return i.circle(d,f,m,g);for(var p=2*Math.PI/c,_="",E=p*.5,T=0;T<c;T+=1){var A=E+T*p,x=Math.cos(A)*m,y=Math.sin(A)*m;_+="L "+x.toFixed(3)+" "+y.toFixed(3)+" "}var M={label:"Polygon Body",position:{x:d,y:f},vertices:a.fromPath(_)};if(g.chamfer){var b=g.chamfer;M.vertices=a.chamfer(M.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete g.chamfer}return l.create(o.extend({},M,g))},i.fromVertices=function(d,f,c,m,g,p,_,E){var T=o.getDecomp(),A,x,y,M,b,S,v,w,P,D,U;for(A=!!(T&&T.quickDecomp),m=m||{},y=[],g=typeof g<"u"?g:!1,p=typeof p<"u"?p:.01,_=typeof _<"u"?_:10,E=typeof E<"u"?E:.01,o.isArray(c[0])||(c=[c]),D=0;D<c.length;D+=1)if(S=c[D],M=a.isConvex(S),b=!M,b&&!A&&o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),M||!A)M?S=a.clockwiseSort(S):S=a.hull(S),y.push({position:{x:d,y:f},vertices:S});else{var F=S.map(function(Q){return[Q.x,Q.y]});T.makeCCW(F),p!==!1&&T.removeCollinearPoints(F,p),E!==!1&&T.removeDuplicatePoints&&T.removeDuplicatePoints(F,E);var z=T.quickDecomp(F);for(v=0;v<z.length;v++){var G=z[v],H=G.map(function(Q){return{x:Q[0],y:Q[1]}});_>0&&a.area(H)<_||y.push({position:a.centre(H),vertices:H})}}for(v=0;v<y.length;v++)y[v]=l.create(o.extend(y[v],m));if(g){var J=5;for(v=0;v<y.length;v++){var ie=y[v];for(w=v+1;w<y.length;w++){var ce=y[w];if(u.overlaps(ie.bounds,ce.bounds)){var ye=ie.vertices,Le=ce.vertices;for(P=0;P<ie.vertices.length;P++)for(U=0;U<ce.vertices.length;U++){var q=h.magnitudeSquared(h.sub(ye[(P+1)%ye.length],Le[U])),ee=h.magnitudeSquared(h.sub(ye[P],Le[(U+1)%Le.length]));q<J&&ee<J&&(ye[P].isInternal=!0,Le[U].isInternal=!0)}}}}}return y.length>1?(x=l.create(o.extend({parts:y.slice(0)},m)),l.setPosition(x,{x:d,y:f}),x):y[0]}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(0),o=s(8);(function(){i.create=function(l){var u={bodies:[],collisions:[],pairs:null};return a.extend(u,l)},i.setBodies=function(l,u){l.bodies=u.slice(0)},i.clear=function(l){l.bodies=[],l.collisions=[]},i.collisions=function(l){var u=l.pairs,h=l.bodies,d=h.length,f=i.canCollide,c=o.collides,m=l.collisions,g=0,p,_;for(h.sort(i._compareBoundsX),p=0;p<d;p++){var E=h[p],T=E.bounds,A=E.bounds.max.x,x=E.bounds.max.y,y=E.bounds.min.y,M=E.isStatic||E.isSleeping,b=E.parts.length,S=b===1;for(_=p+1;_<d;_++){var v=h[_],w=v.bounds;if(w.min.x>A)break;if(!(x<w.min.y||y>w.max.y)&&!(M&&(v.isStatic||v.isSleeping))&&f(E.collisionFilter,v.collisionFilter)){var P=v.parts.length;if(S&&P===1){var D=c(E,v,u);D&&(m[g++]=D)}else for(var U=b>1?1:0,F=P>1?1:0,z=U;z<b;z++)for(var G=E.parts[z],T=G.bounds,H=F;H<P;H++){var J=v.parts[H],w=J.bounds;if(!(T.min.x>w.max.x||T.max.x<w.min.x||T.max.y<w.min.y||T.min.y>w.max.y)){var D=c(G,J,u);D&&(m[g++]=D)}}}}}return m.length!==g&&(m.length=g),m},i.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},i._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(0);(function(){i.create=function(o){var l={};return o||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=o||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&(l.button=0,u.preventDefault()),l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&u.preventDefault(),l.button=-1,l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},i.setElement(l,l.element),l},i.setElement=function(o,l){o.element=l,l.addEventListener("mousemove",o.mousemove,{passive:!0}),l.addEventListener("mousedown",o.mousedown,{passive:!0}),l.addEventListener("mouseup",o.mouseup,{passive:!0}),l.addEventListener("wheel",o.mousewheel,{passive:!1}),l.addEventListener("touchmove",o.mousemove,{passive:!1}),l.addEventListener("touchstart",o.mousedown,{passive:!1}),l.addEventListener("touchend",o.mouseup,{passive:!1})},i.clearSourceEvents=function(o){o.sourceEvents.mousemove=null,o.sourceEvents.mousedown=null,o.sourceEvents.mouseup=null,o.sourceEvents.mousewheel=null,o.wheelDelta=0},i.setOffset=function(o,l){o.offset.x=l.x,o.offset.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},i.setScale=function(o,l){o.scale.x=l.x,o.scale.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},i._getRelativeMousePosition=function(o,l,u){var h=l.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,f=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,m=o.changedTouches,g,p;return m?(g=m[0].pageX-h.left-f,p=m[0].pageY-h.top-c):(g=o.pageX-h.left-f,p=o.pageY-h.top-c),{x:g/(l.clientWidth/(l.width||l.clientWidth)*u),y:p/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(0);(function(){i._registry={},i.register=function(o){if(i.isPlugin(o)||a.warn("Plugin.register:",i.toString(o),"does not implement all required fields."),o.name in i._registry){var l=i._registry[o.name],u=i.versionParse(o.version).number,h=i.versionParse(l.version).number;u>h?(a.warn("Plugin.register:",i.toString(l),"was upgraded to",i.toString(o)),i._registry[o.name]=o):u<h?a.warn("Plugin.register:",i.toString(l),"can not be downgraded to",i.toString(o)):o!==l&&a.warn("Plugin.register:",i.toString(o),"is already registered to different plugin object")}else i._registry[o.name]=o;return o},i.resolve=function(o){return i._registry[i.dependencyParse(o).name]},i.toString=function(o){return typeof o=="string"?o:(o.name||"anonymous")+"@"+(o.version||o.range||"0.0.0")},i.isPlugin=function(o){return o&&o.name&&o.version&&o.install},i.isUsed=function(o,l){return o.used.indexOf(l)>-1},i.isFor=function(o,l){var u=o.for&&i.dependencyParse(o.for);return!o.for||l.name===u.name&&i.versionSatisfies(l.version,u.range)},i.use=function(o,l){if(o.uses=(o.uses||[]).concat(l||[]),o.uses.length===0){a.warn("Plugin.use:",i.toString(o),"does not specify any dependencies to install.");return}for(var u=i.dependencies(o),h=a.topologicalSort(u),d=[],f=0;f<h.length;f+=1)if(h[f]!==o.name){var c=i.resolve(h[f]);if(!c){d.push("❌ "+h[f]);continue}i.isUsed(o,c.name)||(i.isFor(c,o)||(a.warn("Plugin.use:",i.toString(c),"is for",c.for,"but installed on",i.toString(o)+"."),c._warned=!0),c.install?c.install(o):(a.warn("Plugin.use:",i.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(d.push("🔶 "+i.toString(c)),delete c._warned):d.push("✅ "+i.toString(c)),o.used.push(c.name))}d.length>0&&a.info(d.join("  "))},i.dependencies=function(o,l){var u=i.dependencyParse(o),h=u.name;if(l=l||{},!(h in l)){o=i.resolve(o)||o,l[h]=a.map(o.uses||[],function(f){i.isPlugin(f)&&i.register(f);var c=i.dependencyParse(f),m=i.resolve(f);return m&&!i.versionSatisfies(m.version,c.range)?(a.warn("Plugin.dependencies:",i.toString(m),"does not satisfy",i.toString(c),"used by",i.toString(u)+"."),m._warned=!0,o._warned=!0):m||(a.warn("Plugin.dependencies:",i.toString(f),"used by",i.toString(u),"could not be resolved."),o._warned=!0),c.name});for(var d=0;d<l[h].length;d+=1)i.dependencies(l[h][d],l);return l}},i.dependencyParse=function(o){if(a.isString(o)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(o)||a.warn("Plugin.dependencyParse:",o,"is not a valid dependency string."),{name:o.split("@")[0],range:o.split("@")[1]||"*"}}return{name:o.name,range:o.range||o.version}},i.versionParse=function(o){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(o)||a.warn("Plugin.versionParse:",o,"is not a valid version or range.");var u=l.exec(o),h=Number(u[4]),d=Number(u[5]),f=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:o,operator:u[1]||u[2]||"",major:h,minor:d,patch:f,parts:[h,d,f],prerelease:u[7],number:h*1e8+d*1e4+f}},i.versionSatisfies=function(o,l){l=l||"*";var u=i.versionParse(l),h=i.versionParse(o);if(u.isRange){if(u.operator==="*"||o==="*")return!0;if(u.operator===">")return h.number>u.number;if(u.operator===">=")return h.number>=u.number;if(u.operator==="~")return h.major===u.major&&h.minor===u.minor&&h.patch>=u.patch;if(u.operator==="^")return u.major>0?h.major===u.major&&h.number>=u.number:u.minor>0?h.minor===u.minor&&h.patch>=u.patch:h.patch===u.patch}return o===l||o==="*"}})()}),(function(t,n){var s={};t.exports=s,(function(){s.create=function(i){return{vertex:i,normalImpulse:0,tangentImpulse:0}}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(7),o=s(18),l=s(13),u=s(19),h=s(5),d=s(6),f=s(10),c=s(0),m=s(4);(function(){i._deltaMax=1e3/60,i.create=function(g){g=g||{};var p={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},_=c.extend(p,g);return _.world=g.world||d.create({label:"World"}),_.pairs=g.pairs||u.create(),_.detector=g.detector||l.create(),_.detector.pairs=_.pairs,_.grid={buckets:[]},_.world.gravity=_.gravity,_.broadphase=_.grid,_.metrics={},_},i.update=function(g,p){var _=c.now(),E=g.world,T=g.detector,A=g.pairs,x=g.timing,y=x.timestamp,M;p>i._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",i._deltaMax.toFixed(3),"ms."),p=typeof p<"u"?p:c._baseDelta,p*=x.timeScale,x.timestamp+=p,x.lastDelta=p;var b={timestamp:x.timestamp,delta:p};h.trigger(g,"beforeUpdate",b);var S=d.allBodies(E),v=d.allConstraints(E);for(E.isModified&&(l.setBodies(T,S),d.setModified(E,!1,!1,!0)),g.enableSleeping&&a.update(S,p),i._bodiesApplyGravity(S,g.gravity),p>0&&i._bodiesUpdate(S,p),h.trigger(g,"beforeSolve",b),f.preSolveAll(S),M=0;M<g.constraintIterations;M++)f.solveAll(v,p);f.postSolveAll(S);var w=l.collisions(T);u.update(A,w,y),g.enableSleeping&&a.afterCollisions(A.list),A.collisionStart.length>0&&h.trigger(g,"collisionStart",{pairs:A.collisionStart,timestamp:x.timestamp,delta:p});var P=c.clamp(20/g.positionIterations,0,1);for(o.preSolvePosition(A.list),M=0;M<g.positionIterations;M++)o.solvePosition(A.list,p,P);for(o.postSolvePosition(S),f.preSolveAll(S),M=0;M<g.constraintIterations;M++)f.solveAll(v,p);for(f.postSolveAll(S),o.preSolveVelocity(A.list),M=0;M<g.velocityIterations;M++)o.solveVelocity(A.list,p);return i._bodiesUpdateVelocities(S),A.collisionActive.length>0&&h.trigger(g,"collisionActive",{pairs:A.collisionActive,timestamp:x.timestamp,delta:p}),A.collisionEnd.length>0&&h.trigger(g,"collisionEnd",{pairs:A.collisionEnd,timestamp:x.timestamp,delta:p}),i._bodiesClearForces(S),h.trigger(g,"afterUpdate",b),g.timing.lastElapsed=c.now()-_,g},i.merge=function(g,p){if(c.extend(g,p),p.world){g.world=p.world,i.clear(g);for(var _=d.allBodies(g.world),E=0;E<_.length;E++){var T=_[E];a.set(T,!1),T.id=c.nextId()}}},i.clear=function(g){u.clear(g.pairs),l.clear(g.detector)},i._bodiesClearForces=function(g){for(var p=g.length,_=0;_<p;_++){var E=g[_];E.force.x=0,E.force.y=0,E.torque=0}},i._bodiesApplyGravity=function(g,p){var _=typeof p.scale<"u"?p.scale:.001,E=g.length;if(!(p.x===0&&p.y===0||_===0))for(var T=0;T<E;T++){var A=g[T];A.isStatic||A.isSleeping||(A.force.y+=A.mass*p.y*_,A.force.x+=A.mass*p.x*_)}},i._bodiesUpdate=function(g,p){for(var _=g.length,E=0;E<_;E++){var T=g[E];T.isStatic||T.isSleeping||m.update(T,p)}},i._bodiesUpdateVelocities=function(g){for(var p=g.length,_=0;_<p;_++)m.updateVelocities(g[_])}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(3),o=s(0),l=s(1);(function(){i._restingThresh=2,i._restingThreshTangent=Math.sqrt(6),i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i._frictionMaxStatic=Number.MAX_VALUE,i.preSolvePosition=function(u){var h,d,f,c=u.length;for(h=0;h<c;h++)d=u[h],d.isActive&&(f=d.contactCount,d.collision.parentA.totalContacts+=f,d.collision.parentB.totalContacts+=f)},i.solvePosition=function(u,h,d){var f,c,m,g,p,_,E,T,A=i._positionDampen*(d||1),x=o.clamp(h/o._baseDelta,0,1),y=u.length;for(f=0;f<y;f++)c=u[f],!(!c.isActive||c.isSensor)&&(m=c.collision,g=m.parentA,p=m.parentB,_=m.normal,c.separation=m.depth+_.x*(p.positionImpulse.x-g.positionImpulse.x)+_.y*(p.positionImpulse.y-g.positionImpulse.y));for(f=0;f<y;f++)c=u[f],!(!c.isActive||c.isSensor)&&(m=c.collision,g=m.parentA,p=m.parentB,_=m.normal,T=c.separation-c.slop*x,(g.isStatic||p.isStatic)&&(T*=2),g.isStatic||g.isSleeping||(E=A/g.totalContacts,g.positionImpulse.x+=_.x*T*E,g.positionImpulse.y+=_.y*T*E),p.isStatic||p.isSleeping||(E=A/p.totalContacts,p.positionImpulse.x-=_.x*T*E,p.positionImpulse.y-=_.y*T*E))},i.postSolvePosition=function(u){for(var h=i._positionWarming,d=u.length,f=a.translate,c=l.update,m=0;m<d;m++){var g=u[m],p=g.positionImpulse,_=p.x,E=p.y,T=g.velocity;if(g.totalContacts=0,_!==0||E!==0){for(var A=0;A<g.parts.length;A++){var x=g.parts[A];f(x.vertices,p),c(x.bounds,x.vertices,T),x.position.x+=_,x.position.y+=E}g.positionPrev.x+=_,g.positionPrev.y+=E,_*T.x+E*T.y<0?(p.x=0,p.y=0):(p.x*=h,p.y*=h)}}},i.preSolveVelocity=function(u){var h=u.length,d,f;for(d=0;d<h;d++){var c=u[d];if(!(!c.isActive||c.isSensor)){var m=c.contacts,g=c.contactCount,p=c.collision,_=p.parentA,E=p.parentB,T=p.normal,A=p.tangent;for(f=0;f<g;f++){var x=m[f],y=x.vertex,M=x.normalImpulse,b=x.tangentImpulse;if(M!==0||b!==0){var S=T.x*M+A.x*b,v=T.y*M+A.y*b;_.isStatic||_.isSleeping||(_.positionPrev.x+=S*_.inverseMass,_.positionPrev.y+=v*_.inverseMass,_.anglePrev+=_.inverseInertia*((y.x-_.position.x)*v-(y.y-_.position.y)*S)),E.isStatic||E.isSleeping||(E.positionPrev.x-=S*E.inverseMass,E.positionPrev.y-=v*E.inverseMass,E.anglePrev-=E.inverseInertia*((y.x-E.position.x)*v-(y.y-E.position.y)*S))}}}}},i.solveVelocity=function(u,h){var d=h/o._baseDelta,f=d*d,c=f*d,m=-i._restingThresh*d,g=i._restingThreshTangent,p=i._frictionNormalMultiplier*d,_=i._frictionMaxStatic,E=u.length,T,A,x,y;for(x=0;x<E;x++){var M=u[x];if(!(!M.isActive||M.isSensor)){var b=M.collision,S=b.parentA,v=b.parentB,w=b.normal.x,P=b.normal.y,D=b.tangent.x,U=b.tangent.y,F=M.inverseMass,z=M.friction*M.frictionStatic*p,G=M.contacts,H=M.contactCount,J=1/H,ie=S.position.x-S.positionPrev.x,ce=S.position.y-S.positionPrev.y,ye=S.angle-S.anglePrev,Le=v.position.x-v.positionPrev.x,q=v.position.y-v.positionPrev.y,ee=v.angle-v.anglePrev;for(y=0;y<H;y++){var Q=G[y],se=Q.vertex,de=se.x-S.position.x,Te=se.y-S.position.y,be=se.x-v.position.x,Ve=se.y-v.position.y,we=ie-Te*ye,rt=ce+de*ye,I=Le-Ve*ee,It=q+be*ee,Oe=we-I,Be=rt-It,xe=w*Oe+P*Be,ze=D*Oe+U*Be,Se=M.separation+xe,L=Math.min(Se,1);L=Se<0?0:L;var R=L*z;ze<-R||ze>R?(A=ze>0?ze:-ze,T=M.friction*(ze>0?1:-1)*c,T<-A?T=-A:T>A&&(T=A)):(T=ze,A=_);var V=de*P-Te*w,Z=be*P-Ve*w,j=J/(F+S.inverseInertia*V*V+v.inverseInertia*Z*Z),$=(1+M.restitution)*xe*j;if(T*=j,xe<m)Q.normalImpulse=0;else{var ve=Q.normalImpulse;Q.normalImpulse+=$,Q.normalImpulse>0&&(Q.normalImpulse=0),$=Q.normalImpulse-ve}if(ze<-g||ze>g)Q.tangentImpulse=0;else{var ae=Q.tangentImpulse;Q.tangentImpulse+=T,Q.tangentImpulse<-A&&(Q.tangentImpulse=-A),Q.tangentImpulse>A&&(Q.tangentImpulse=A),T=Q.tangentImpulse-ae}var ue=w*$+D*T,Ne=P*$+U*T;S.isStatic||S.isSleeping||(S.positionPrev.x+=ue*S.inverseMass,S.positionPrev.y+=Ne*S.inverseMass,S.anglePrev+=(de*Ne-Te*ue)*S.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=ue*v.inverseMass,v.positionPrev.y-=Ne*v.inverseMass,v.anglePrev-=(be*Ne-Ve*ue)*v.inverseInertia)}}}}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(9),o=s(0);(function(){i.create=function(l){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},i.update=function(l,u,h){var d=a.update,f=a.create,c=a.setActive,m=l.table,g=l.list,p=g.length,_=p,E=l.collisionStart,T=l.collisionEnd,A=l.collisionActive,x=u.length,y=0,M=0,b=0,S,v,w;for(w=0;w<x;w++)S=u[w],v=S.pair,v?(v.isActive&&(A[b++]=v),d(v,S,h)):(v=f(S,h),m[v.id]=v,E[y++]=v,g[_++]=v);for(_=0,p=g.length,w=0;w<p;w++)v=g[w],v.timeUpdated>=h?g[_++]=v:(c(v,!1,h),v.collision.bodyA.sleepCounter>0&&v.collision.bodyB.sleepCounter>0?g[_++]=v:(T[M++]=v,delete m[v.id]));g.length!==_&&(g.length=_),E.length!==y&&(E.length=y),T.length!==M&&(T.length=M),A.length!==b&&(A.length=b)},i.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()}),(function(t,n,s){var i=t.exports=s(21);i.Axes=s(11),i.Bodies=s(12),i.Body=s(4),i.Bounds=s(1),i.Collision=s(8),i.Common=s(0),i.Composite=s(6),i.Composites=s(22),i.Constraint=s(10),i.Contact=s(16),i.Detector=s(13),i.Engine=s(17),i.Events=s(5),i.Grid=s(23),i.Mouse=s(14),i.MouseConstraint=s(24),i.Pair=s(9),i.Pairs=s(19),i.Plugin=s(15),i.Query=s(25),i.Render=s(26),i.Resolver=s(18),i.Runner=s(27),i.SAT=s(28),i.Sleeping=s(7),i.Svg=s(29),i.Vector=s(2),i.Vertices=s(3),i.World=s(30),i.Engine.run=i.Runner.run,i.Common.deprecated(i.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(t,n,s){var i={};t.exports=i;var a=s(15),o=s(0);(function(){i.name="matter-js",i.version="0.20.0",i.uses=[],i.used=[],i.use=function(){a.use(i,Array.prototype.slice.call(arguments))},i.before=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathBefore(i,l,u)},i.after=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathAfter(i,l,u)}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(6),o=s(10),l=s(0),u=s(4),h=s(12),d=l.deprecated;(function(){i.stack=function(f,c,m,g,p,_,E){for(var T=a.create({label:"Stack"}),A=f,x=c,y,M=0,b=0;b<g;b++){for(var S=0,v=0;v<m;v++){var w=E(A,x,v,b,y,M);if(w){var P=w.bounds.max.y-w.bounds.min.y,D=w.bounds.max.x-w.bounds.min.x;P>S&&(S=P),u.translate(w,{x:D*.5,y:P*.5}),A=w.bounds.max.x+p,a.addBody(T,w),y=w,M+=1}else A+=p}x+=S+_,A=f}return T},i.chain=function(f,c,m,g,p,_){for(var E=f.bodies,T=1;T<E.length;T++){var A=E[T-1],x=E[T],y=A.bounds.max.y-A.bounds.min.y,M=A.bounds.max.x-A.bounds.min.x,b=x.bounds.max.y-x.bounds.min.y,S=x.bounds.max.x-x.bounds.min.x,v={bodyA:A,pointA:{x:M*c,y:y*m},bodyB:x,pointB:{x:S*g,y:b*p}},w=l.extend(v,_);a.addConstraint(f,o.create(w))}return f.label+=" Chain",f},i.mesh=function(f,c,m,g,p){var _=f.bodies,E,T,A,x,y;for(E=0;E<m;E++){for(T=1;T<c;T++)A=_[T-1+E*c],x=_[T+E*c],a.addConstraint(f,o.create(l.extend({bodyA:A,bodyB:x},p)));if(E>0)for(T=0;T<c;T++)A=_[T+(E-1)*c],x=_[T+E*c],a.addConstraint(f,o.create(l.extend({bodyA:A,bodyB:x},p))),g&&T>0&&(y=_[T-1+(E-1)*c],a.addConstraint(f,o.create(l.extend({bodyA:y,bodyB:x},p)))),g&&T<c-1&&(y=_[T+1+(E-1)*c],a.addConstraint(f,o.create(l.extend({bodyA:y,bodyB:x},p))))}return f.label+=" Mesh",f},i.pyramid=function(f,c,m,g,p,_,E){return i.stack(f,c,m,g,p,_,function(T,A,x,y,M,b){var S=Math.min(g,Math.ceil(m/2)),v=M?M.bounds.max.x-M.bounds.min.x:0;if(!(y>S)){y=S-y;var w=y,P=m-1-y;if(!(x<w||x>P)){b===1&&u.translate(M,{x:(x+(m%2===1?1:-1))*v,y:0});var D=M?x*v:0;return E(f+D+x*p,A,x,y,M,b)}}})},i.newtonsCradle=function(f,c,m,g,p){for(var _=a.create({label:"Newtons Cradle"}),E=0;E<m;E++){var T=1.9,A=h.circle(f+E*(g*T),c+p,g,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=o.create({pointA:{x:f+E*(g*T),y:c},bodyB:A});a.addBody(_,A),a.addConstraint(_,x)}return _},d(i,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),i.car=function(f,c,m,g,p){var _=u.nextGroup(!0),E=20,T=-m*.5+E,A=m*.5-E,x=0,y=a.create({label:"Car"}),M=h.rectangle(f,c,m,g,{collisionFilter:{group:_},chamfer:{radius:g*.5},density:2e-4}),b=h.circle(f+T,c+x,p,{collisionFilter:{group:_},friction:.8}),S=h.circle(f+A,c+x,p,{collisionFilter:{group:_},friction:.8}),v=o.create({bodyB:M,pointB:{x:T,y:x},bodyA:b,stiffness:1,length:0}),w=o.create({bodyB:M,pointB:{x:A,y:x},bodyA:S,stiffness:1,length:0});return a.addBody(y,M),a.addBody(y,b),a.addBody(y,S),a.addConstraint(y,v),a.addConstraint(y,w),y},d(i,"car","Composites.car ➤ moved to car example"),i.softBody=function(f,c,m,g,p,_,E,T,A,x){A=l.extend({inertia:1/0},A),x=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var y=i.stack(f,c,m,g,p,_,function(M,b){return h.circle(M,b,T,A)});return i.mesh(y,m,g,E,x),y.label="Soft Body",y},d(i,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(t,n,s){var i={};t.exports=i;var a=s(9),o=s(0),l=o.deprecated;(function(){i.create=function(u){var h={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(h,u)},i.update=function(u,h,d,f){var c,m,g,p=d.world,_=u.buckets,E,T,A=!1;for(c=0;c<h.length;c++){var x=h[c];if(!(x.isSleeping&&!f)&&!(p.bounds&&(x.bounds.max.x<p.bounds.min.x||x.bounds.min.x>p.bounds.max.x||x.bounds.max.y<p.bounds.min.y||x.bounds.min.y>p.bounds.max.y))){var y=i._getRegion(u,x);if(!x.region||y.id!==x.region.id||f){(!x.region||f)&&(x.region=y);var M=i._regionUnion(y,x.region);for(m=M.startCol;m<=M.endCol;m++)for(g=M.startRow;g<=M.endRow;g++){T=i._getBucketId(m,g),E=_[T];var b=m>=y.startCol&&m<=y.endCol&&g>=y.startRow&&g<=y.endRow,S=m>=x.region.startCol&&m<=x.region.endCol&&g>=x.region.startRow&&g<=x.region.endRow;!b&&S&&S&&E&&i._bucketRemoveBody(u,E,x),(x.region===y||b&&!S||f)&&(E||(E=i._createBucket(_,T)),i._bucketAddBody(u,E,x))}x.region=y,A=!0}}}A&&(u.pairsList=i._createActivePairsList(u))},l(i,"update","Grid.update ➤ replaced by Matter.Detector"),i.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(i,"clear","Grid.clear ➤ replaced by Matter.Detector"),i._regionUnion=function(u,h){var d=Math.min(u.startCol,h.startCol),f=Math.max(u.endCol,h.endCol),c=Math.min(u.startRow,h.startRow),m=Math.max(u.endRow,h.endRow);return i._createRegion(d,f,c,m)},i._getRegion=function(u,h){var d=h.bounds,f=Math.floor(d.min.x/u.bucketWidth),c=Math.floor(d.max.x/u.bucketWidth),m=Math.floor(d.min.y/u.bucketHeight),g=Math.floor(d.max.y/u.bucketHeight);return i._createRegion(f,c,m,g)},i._createRegion=function(u,h,d,f){return{id:u+","+h+","+d+","+f,startCol:u,endCol:h,startRow:d,endRow:f}},i._getBucketId=function(u,h){return"C"+u+"R"+h},i._createBucket=function(u,h){var d=u[h]=[];return d},i._bucketAddBody=function(u,h,d){var f=u.pairs,c=a.id,m=h.length,g;for(g=0;g<m;g++){var p=h[g];if(!(d.id===p.id||d.isStatic&&p.isStatic)){var _=c(d,p),E=f[_];E?E[2]+=1:f[_]=[d,p,1]}}h.push(d)},i._bucketRemoveBody=function(u,h,d){var f=u.pairs,c=a.id,m;h.splice(o.indexOf(h,d),1);var g=h.length;for(m=0;m<g;m++){var p=f[c(d,h[m])];p&&(p[2]-=1)}},i._createActivePairsList=function(u){var h,d=u.pairs,f=o.keys(d),c=f.length,m=[],g;for(g=0;g<c;g++)h=d[f[g]],h[2]>0?m.push(h):delete d[f[g]];return m}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(3),o=s(7),l=s(14),u=s(5),h=s(13),d=s(10),f=s(6),c=s(0),m=s(1);(function(){i.create=function(g,p){var _=(g?g.mouse:null)||(p?p.mouse:null);_||(g&&g.render&&g.render.canvas?_=l.create(g.render.canvas):p&&p.element?_=l.create(p.element):(_=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var E=d.create({label:"Mouse Constraint",pointA:_.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),T={type:"mouseConstraint",mouse:_,element:null,body:null,constraint:E,collisionFilter:{category:1,mask:4294967295,group:0}},A=c.extend(T,p);return u.on(g,"beforeUpdate",function(){var x=f.allBodies(g.world);i.update(A,x),i._triggerEvents(A)}),A},i.update=function(g,p){var _=g.mouse,E=g.constraint,T=g.body;if(_.button===0){if(E.bodyB)o.set(E.bodyB,!1),E.pointA=_.position;else for(var A=0;A<p.length;A++)if(T=p[A],m.contains(T.bounds,_.position)&&h.canCollide(T.collisionFilter,g.collisionFilter))for(var x=T.parts.length>1?1:0;x<T.parts.length;x++){var y=T.parts[x];if(a.contains(y.vertices,_.position)){E.pointA=_.position,E.bodyB=g.body=T,E.pointB={x:_.position.x-T.position.x,y:_.position.y-T.position.y},E.angleB=T.angle,o.set(T,!1),u.trigger(g,"startdrag",{mouse:_,body:T});break}}}else E.bodyB=g.body=null,E.pointB=null,T&&u.trigger(g,"enddrag",{mouse:_,body:T})},i._triggerEvents=function(g){var p=g.mouse,_=p.sourceEvents;_.mousemove&&u.trigger(g,"mousemove",{mouse:p}),_.mousedown&&u.trigger(g,"mousedown",{mouse:p}),_.mouseup&&u.trigger(g,"mouseup",{mouse:p}),l.clearSourceEvents(p)}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(2),o=s(8),l=s(1),u=s(12),h=s(3);(function(){i.collides=function(d,f){for(var c=[],m=f.length,g=d.bounds,p=o.collides,_=l.overlaps,E=0;E<m;E++){var T=f[E],A=T.parts.length,x=A===1?0:1;if(_(T.bounds,g))for(var y=x;y<A;y++){var M=T.parts[y];if(_(M.bounds,g)){var b=p(M,d);if(b){c.push(b);break}}}}return c},i.ray=function(d,f,c,m){m=m||1e-100;for(var g=a.angle(f,c),p=a.magnitude(a.sub(f,c)),_=(c.x+f.x)*.5,E=(c.y+f.y)*.5,T=u.rectangle(_,E,p,m,{angle:g}),A=i.collides(T,d),x=0;x<A.length;x+=1){var y=A[x];y.body=y.bodyB=y.bodyA}return A},i.region=function(d,f,c){for(var m=[],g=0;g<d.length;g++){var p=d[g],_=l.overlaps(p.bounds,f);(_&&!c||!_&&c)&&m.push(p)}return m},i.point=function(d,f){for(var c=[],m=0;m<d.length;m++){var g=d[m];if(l.contains(g.bounds,f))for(var p=g.parts.length===1?0:1;p<g.parts.length;p++){var _=g.parts[p];if(l.contains(_.bounds,f)&&h.contains(_.vertices,f)){c.push(g);break}}}return c}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(4),o=s(0),l=s(6),u=s(1),h=s(5),d=s(2),f=s(14);(function(){var c,m;typeof window<"u"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(o.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i._goodFps=30,i._goodDelta=1e3/60,i.create=function(x){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},M=o.extend(y,x);return M.canvas&&(M.canvas.width=M.options.width||M.canvas.width,M.canvas.height=M.options.height||M.canvas.height),M.mouse=x.mouse,M.engine=x.engine,M.canvas=M.canvas||_(M.options.width,M.options.height),M.context=M.canvas.getContext("2d"),M.textures={},M.bounds=M.bounds||{min:{x:0,y:0},max:{x:M.canvas.width,y:M.canvas.height}},M.controller=i,M.options.showBroadphase=!1,M.options.pixelRatio!==1&&i.setPixelRatio(M,M.options.pixelRatio),o.isElement(M.element)&&M.element.appendChild(M.canvas),M},i.run=function(x){(function y(M){x.frameRequestId=c(y),g(x,M),i.world(x,M),x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0),(x.options.showStats||x.options.showDebug)&&i.stats(x,x.context,M),(x.options.showPerformance||x.options.showDebug)&&i.performance(x,x.context,M),x.context.setTransform(1,0,0,1,0,0)})()},i.stop=function(x){m(x.frameRequestId)},i.setPixelRatio=function(x,y){var M=x.options,b=x.canvas;y==="auto"&&(y=E(b)),M.pixelRatio=y,b.setAttribute("data-pixel-ratio",y),b.width=M.width*y,b.height=M.height*y,b.style.width=M.width+"px",b.style.height=M.height+"px"},i.setSize=function(x,y,M){x.options.width=y,x.options.height=M,x.bounds.max.x=x.bounds.min.x+y,x.bounds.max.y=x.bounds.min.y+M,x.options.pixelRatio!==1?i.setPixelRatio(x,x.options.pixelRatio):(x.canvas.width=y,x.canvas.height=M)},i.lookAt=function(x,y,M,b){b=typeof b<"u"?b:!0,y=o.isArray(y)?y:[y],M=M||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},v=0;v<y.length;v+=1){var w=y[v],P=w.bounds?w.bounds.min:w.min||w.position||w,D=w.bounds?w.bounds.max:w.max||w.position||w;P&&D&&(P.x<S.min.x&&(S.min.x=P.x),D.x>S.max.x&&(S.max.x=D.x),P.y<S.min.y&&(S.min.y=P.y),D.y>S.max.y&&(S.max.y=D.y))}var U=S.max.x-S.min.x+2*M.x,F=S.max.y-S.min.y+2*M.y,z=x.canvas.height,G=x.canvas.width,H=G/z,J=U/F,ie=1,ce=1;J>H?ce=J/H:ie=H/J,x.options.hasBounds=!0,x.bounds.min.x=S.min.x,x.bounds.max.x=S.min.x+U*ie,x.bounds.min.y=S.min.y,x.bounds.max.y=S.min.y+F*ce,b&&(x.bounds.min.x+=U*.5-U*ie*.5,x.bounds.max.x+=U*.5-U*ie*.5,x.bounds.min.y+=F*.5-F*ce*.5,x.bounds.max.y+=F*.5-F*ce*.5),x.bounds.min.x-=M.x,x.bounds.max.x-=M.x,x.bounds.min.y-=M.y,x.bounds.max.y-=M.y,x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),f.setOffset(x.mouse,x.bounds.min))},i.startViewTransform=function(x){var y=x.bounds.max.x-x.bounds.min.x,M=x.bounds.max.y-x.bounds.min.y,b=y/x.options.width,S=M/x.options.height;x.context.setTransform(x.options.pixelRatio/b,0,0,x.options.pixelRatio/S,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},i.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},i.world=function(x,y){var M=o.now(),b=x.engine,S=b.world,v=x.canvas,w=x.context,P=x.options,D=x.timing,U=l.allBodies(S),F=l.allConstraints(S),z=P.wireframes?P.wireframeBackground:P.background,G=[],H=[],J,ie={timestamp:b.timing.timestamp};if(h.trigger(x,"beforeRender",ie),x.currentBackground!==z&&A(x,z),w.globalCompositeOperation="source-in",w.fillStyle="transparent",w.fillRect(0,0,v.width,v.height),w.globalCompositeOperation="source-over",P.hasBounds){for(J=0;J<U.length;J++){var ce=U[J];u.overlaps(ce.bounds,x.bounds)&&G.push(ce)}for(J=0;J<F.length;J++){var ye=F[J],Le=ye.bodyA,q=ye.bodyB,ee=ye.pointA,Q=ye.pointB;Le&&(ee=d.add(Le.position,ye.pointA)),q&&(Q=d.add(q.position,ye.pointB)),!(!ee||!Q)&&(u.contains(x.bounds,ee)||u.contains(x.bounds,Q))&&H.push(ye)}i.startViewTransform(x),x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),f.setOffset(x.mouse,x.bounds.min))}else H=F,G=U,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!P.wireframes||b.enableSleeping&&P.showSleeping?i.bodies(x,G,w):(P.showConvexHulls&&i.bodyConvexHulls(x,G,w),i.bodyWireframes(x,G,w)),P.showBounds&&i.bodyBounds(x,G,w),(P.showAxes||P.showAngleIndicator)&&i.bodyAxes(x,G,w),P.showPositions&&i.bodyPositions(x,G,w),P.showVelocity&&i.bodyVelocity(x,G,w),P.showIds&&i.bodyIds(x,G,w),P.showSeparations&&i.separations(x,b.pairs.list,w),P.showCollisions&&i.collisions(x,b.pairs.list,w),P.showVertexNumbers&&i.vertexNumbers(x,G,w),P.showMousePosition&&i.mousePosition(x,x.mouse,w),i.constraints(H,w),P.hasBounds&&i.endViewTransform(x),h.trigger(x,"afterRender",ie),D.lastElapsed=o.now()-M},i.stats=function(x,y,M){for(var b=x.engine,S=b.world,v=l.allBodies(S),w=0,P=55,D=44,U=0,F=0,z=0;z<v.length;z+=1)w+=v[z].parts.length;var G={Part:w,Body:v.length,Cons:l.allConstraints(S).length,Comp:l.allComposites(S).length,Pair:b.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(U,F,P*5.5,D),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var H in G){var J=G[H];y.fillStyle="#aaa",y.fillText(H,U+P,F+8),y.fillStyle="#eee",y.fillText(J,U+P,F+26),U+=P}},i.performance=function(x,y){var M=x.engine,b=x.timing,S=b.deltaHistory,v=b.elapsedHistory,w=b.timestampElapsedHistory,P=b.engineDeltaHistory,D=b.engineUpdatesHistory,U=b.engineElapsedHistory,F=M.timing.lastUpdatesPerFrame,z=M.timing.lastDelta,G=p(S),H=p(v),J=p(P),ie=p(D),ce=p(U),ye=p(w),Le=ye/G||0,q=Math.round(G/z),ee=1e3/G||0,Q=4,se=12,de=60,Te=34,be=10,Ve=69;y.fillStyle="#0e0f19",y.fillRect(0,50,se*5+de*6+22,Te),i.status(y,be,Ve,de,Q,S.length,Math.round(ee)+" fps",ee/i._goodFps,function(we){return S[we]/G-1}),i.status(y,be+se+de,Ve,de,Q,P.length,z.toFixed(2)+" dt",i._goodDelta/z,function(we){return P[we]/J-1}),i.status(y,be+(se+de)*2,Ve,de,Q,D.length,F+" upf",Math.pow(o.clamp(ie/q||1,0,1),4),function(we){return D[we]/ie-1}),i.status(y,be+(se+de)*3,Ve,de,Q,U.length,ce.toFixed(2)+" ut",1-F*ce/i._goodFps,function(we){return U[we]/ce-1}),i.status(y,be+(se+de)*4,Ve,de,Q,v.length,H.toFixed(2)+" rt",1-H/i._goodFps,function(we){return v[we]/H-1}),i.status(y,be+(se+de)*5,Ve,de,Q,w.length,Le.toFixed(2)+" x",Le*Le*Le,function(we){return(w[we]/S[we]/Le||0)-1})},i.status=function(x,y,M,b,S,v,w,P,D){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(y,M+7,b,1),x.beginPath(),x.moveTo(y,M+7-S*o.clamp(.4*D(0),-2,2));for(var U=0;U<b;U+=1)x.lineTo(y+U,M+7-(U<v?S*o.clamp(.4*D(U),-2,2):0));x.stroke(),x.fillStyle="hsl("+o.clamp(25+95*P,0,120)+",100%,60%)",x.fillRect(y,M-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(w,y+b,M-5)},i.constraints=function(x,y){for(var M=y,b=0;b<x.length;b++){var S=x[b];if(!(!S.render.visible||!S.pointA||!S.pointB)){var v=S.bodyA,w=S.bodyB,P,D;if(v?P=d.add(v.position,S.pointA):P=S.pointA,S.render.type==="pin")M.beginPath(),M.arc(P.x,P.y,3,0,2*Math.PI),M.closePath();else{if(w?D=d.add(w.position,S.pointB):D=S.pointB,M.beginPath(),M.moveTo(P.x,P.y),S.render.type==="spring")for(var U=d.sub(D,P),F=d.perp(d.normalise(U)),z=Math.ceil(o.clamp(S.length/5,12,20)),G,H=1;H<z;H+=1)G=H%2===0?1:-1,M.lineTo(P.x+U.x*(H/z)+F.x*G*4,P.y+U.y*(H/z)+F.y*G*4);M.lineTo(D.x,D.y)}S.render.lineWidth&&(M.lineWidth=S.render.lineWidth,M.strokeStyle=S.render.strokeStyle,M.stroke()),S.render.anchors&&(M.fillStyle=S.render.strokeStyle,M.beginPath(),M.arc(P.x,P.y,3,0,2*Math.PI),M.arc(D.x,D.y,3,0,2*Math.PI),M.closePath(),M.fill())}}},i.bodies=function(x,y,M){var b=M;x.engine;var S=x.options,v=S.showInternalEdges||!S.wireframes,w,P,D,U;for(D=0;D<y.length;D++)if(w=y[D],!!w.render.visible){for(U=w.parts.length>1?1:0;U<w.parts.length;U++)if(P=w.parts[U],!!P.render.visible){if(S.showSleeping&&w.isSleeping?b.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(b.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!S.wireframes){var F=P.render.sprite,z=T(x,F.texture);b.translate(P.position.x,P.position.y),b.rotate(P.angle),b.drawImage(z,z.width*-F.xOffset*F.xScale,z.height*-F.yOffset*F.yScale,z.width*F.xScale,z.height*F.yScale),b.rotate(-P.angle),b.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)b.beginPath(),b.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{b.beginPath(),b.moveTo(P.vertices[0].x,P.vertices[0].y);for(var G=1;G<P.vertices.length;G++)!P.vertices[G-1].isInternal||v?b.lineTo(P.vertices[G].x,P.vertices[G].y):b.moveTo(P.vertices[G].x,P.vertices[G].y),P.vertices[G].isInternal&&!v&&b.moveTo(P.vertices[(G+1)%P.vertices.length].x,P.vertices[(G+1)%P.vertices.length].y);b.lineTo(P.vertices[0].x,P.vertices[0].y),b.closePath()}S.wireframes?(b.lineWidth=1,b.strokeStyle=x.options.wireframeStrokeStyle,b.stroke()):(b.fillStyle=P.render.fillStyle,P.render.lineWidth&&(b.lineWidth=P.render.lineWidth,b.strokeStyle=P.render.strokeStyle,b.stroke()),b.fill())}b.globalAlpha=1}}},i.bodyWireframes=function(x,y,M){var b=M,S=x.options.showInternalEdges,v,w,P,D,U;for(b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.render.visible)for(U=v.parts.length>1?1:0;U<v.parts.length;U++){for(w=v.parts[U],b.moveTo(w.vertices[0].x,w.vertices[0].y),D=1;D<w.vertices.length;D++)!w.vertices[D-1].isInternal||S?b.lineTo(w.vertices[D].x,w.vertices[D].y):b.moveTo(w.vertices[D].x,w.vertices[D].y),w.vertices[D].isInternal&&!S&&b.moveTo(w.vertices[(D+1)%w.vertices.length].x,w.vertices[(D+1)%w.vertices.length].y);b.lineTo(w.vertices[0].x,w.vertices[0].y)}b.lineWidth=1,b.strokeStyle=x.options.wireframeStrokeStyle,b.stroke()},i.bodyConvexHulls=function(x,y,M){var b=M,S,v,w;for(b.beginPath(),v=0;v<y.length;v++)if(S=y[v],!(!S.render.visible||S.parts.length===1)){for(b.moveTo(S.vertices[0].x,S.vertices[0].y),w=1;w<S.vertices.length;w++)b.lineTo(S.vertices[w].x,S.vertices[w].y);b.lineTo(S.vertices[0].x,S.vertices[0].y)}b.lineWidth=1,b.strokeStyle="rgba(255,255,255,0.2)",b.stroke()},i.vertexNumbers=function(x,y,M){var b=M,S,v,w;for(S=0;S<y.length;S++){var P=y[S].parts;for(w=P.length>1?1:0;w<P.length;w++){var D=P[w];for(v=0;v<D.vertices.length;v++)b.fillStyle="rgba(255,255,255,0.2)",b.fillText(S+"_"+v,D.position.x+(D.vertices[v].x-D.position.x)*.8,D.position.y+(D.vertices[v].y-D.position.y)*.8)}}},i.mousePosition=function(x,y,M){var b=M;b.fillStyle="rgba(255,255,255,0.8)",b.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},i.bodyBounds=function(x,y,M){var b=M;x.engine;var S=x.options;b.beginPath();for(var v=0;v<y.length;v++){var w=y[v];if(w.render.visible)for(var P=y[v].parts,D=P.length>1?1:0;D<P.length;D++){var U=P[D];b.rect(U.bounds.min.x,U.bounds.min.y,U.bounds.max.x-U.bounds.min.x,U.bounds.max.y-U.bounds.min.y)}}S.wireframes?b.strokeStyle="rgba(255,255,255,0.08)":b.strokeStyle="rgba(0,0,0,0.1)",b.lineWidth=1,b.stroke()},i.bodyAxes=function(x,y,M){var b=M;x.engine;var S=x.options,v,w,P,D;for(b.beginPath(),w=0;w<y.length;w++){var U=y[w],F=U.parts;if(U.render.visible)if(S.showAxes)for(P=F.length>1?1:0;P<F.length;P++)for(v=F[P],D=0;D<v.axes.length;D++){var z=v.axes[D];b.moveTo(v.position.x,v.position.y),b.lineTo(v.position.x+z.x*20,v.position.y+z.y*20)}else for(P=F.length>1?1:0;P<F.length;P++)for(v=F[P],D=0;D<v.axes.length;D++)b.moveTo(v.position.x,v.position.y),b.lineTo((v.vertices[0].x+v.vertices[v.vertices.length-1].x)/2,(v.vertices[0].y+v.vertices[v.vertices.length-1].y)/2)}S.wireframes?(b.strokeStyle="indianred",b.lineWidth=1):(b.strokeStyle="rgba(255, 255, 255, 0.4)",b.globalCompositeOperation="overlay",b.lineWidth=2),b.stroke(),b.globalCompositeOperation="source-over"},i.bodyPositions=function(x,y,M){var b=M;x.engine;var S=x.options,v,w,P,D;for(b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.render.visible)for(D=0;D<v.parts.length;D++)w=v.parts[D],b.arc(w.position.x,w.position.y,3,0,2*Math.PI,!1),b.closePath();for(S.wireframes?b.fillStyle="indianred":b.fillStyle="rgba(0,0,0,0.5)",b.fill(),b.beginPath(),P=0;P<y.length;P++)v=y[P],v.render.visible&&(b.arc(v.positionPrev.x,v.positionPrev.y,2,0,2*Math.PI,!1),b.closePath());b.fillStyle="rgba(255,165,0,0.8)",b.fill()},i.bodyVelocity=function(x,y,M){var b=M;b.beginPath();for(var S=0;S<y.length;S++){var v=y[S];if(v.render.visible){var w=a.getVelocity(v);b.moveTo(v.position.x,v.position.y),b.lineTo(v.position.x+w.x,v.position.y+w.y)}}b.lineWidth=3,b.strokeStyle="cornflowerblue",b.stroke()},i.bodyIds=function(x,y,M){var b=M,S,v;for(S=0;S<y.length;S++)if(y[S].render.visible){var w=y[S].parts;for(v=w.length>1?1:0;v<w.length;v++){var P=w[v];b.font="12px Arial",b.fillStyle="rgba(255,255,255,0.5)",b.fillText(P.id,P.position.x+10,P.position.y-10)}}},i.collisions=function(x,y,M){var b=M,S=x.options,v,w,P,D;for(b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.isActive)for(w=v.collision,D=0;D<v.contactCount;D++){var U=v.contacts[D],F=U.vertex;b.rect(F.x-1.5,F.y-1.5,3.5,3.5)}for(S.wireframes?b.fillStyle="rgba(255,255,255,0.7)":b.fillStyle="orange",b.fill(),b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.isActive&&(w=v.collision,v.contactCount>0)){var z=v.contacts[0].vertex.x,G=v.contacts[0].vertex.y;v.contactCount===2&&(z=(v.contacts[0].vertex.x+v.contacts[1].vertex.x)/2,G=(v.contacts[0].vertex.y+v.contacts[1].vertex.y)/2),w.bodyB===w.supports[0].body||w.bodyA.isStatic===!0?b.moveTo(z-w.normal.x*8,G-w.normal.y*8):b.moveTo(z+w.normal.x*8,G+w.normal.y*8),b.lineTo(z,G)}S.wireframes?b.strokeStyle="rgba(255,165,0,0.7)":b.strokeStyle="orange",b.lineWidth=1,b.stroke()},i.separations=function(x,y,M){var b=M,S=x.options,v,w,P,D,U;for(b.beginPath(),U=0;U<y.length;U++)if(v=y[U],!!v.isActive){w=v.collision,P=w.bodyA,D=w.bodyB;var F=1;!D.isStatic&&!P.isStatic&&(F=.5),D.isStatic&&(F=0),b.moveTo(D.position.x,D.position.y),b.lineTo(D.position.x-w.penetration.x*F,D.position.y-w.penetration.y*F),F=1,!D.isStatic&&!P.isStatic&&(F=.5),P.isStatic&&(F=0),b.moveTo(P.position.x,P.position.y),b.lineTo(P.position.x+w.penetration.x*F,P.position.y+w.penetration.y*F)}S.wireframes?b.strokeStyle="rgba(255,165,0,0.5)":b.strokeStyle="orange",b.stroke()},i.inspector=function(x,y){x.engine;var M=x.selected,b=x.render,S=b.options,v;if(S.hasBounds){var w=b.bounds.max.x-b.bounds.min.x,P=b.bounds.max.y-b.bounds.min.y,D=w/b.options.width,U=P/b.options.height;y.scale(1/D,1/U),y.translate(-b.bounds.min.x,-b.bounds.min.y)}for(var F=0;F<M.length;F++){var z=M[F].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),z.type){case"body":v=z.bounds,y.beginPath(),y.rect(Math.floor(v.min.x-3),Math.floor(v.min.y-3),Math.floor(v.max.x-v.min.x+6),Math.floor(v.max.y-v.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var G=z.pointA;z.bodyA&&(G=z.pointB),y.beginPath(),y.arc(G.x,G.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}x.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",v=x.selectBounds,y.beginPath(),y.rect(Math.floor(v.min.x),Math.floor(v.min.y),Math.floor(v.max.x-v.min.x),Math.floor(v.max.y-v.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),S.hasBounds&&y.setTransform(1,0,0,1,0,0)};var g=function(x,y){var M=x.engine,b=x.timing,S=b.historySize,v=M.timing.timestamp;b.delta=y-b.lastTime||i._goodDelta,b.lastTime=y,b.timestampElapsed=v-b.lastTimestamp||0,b.lastTimestamp=v,b.deltaHistory.unshift(b.delta),b.deltaHistory.length=Math.min(b.deltaHistory.length,S),b.engineDeltaHistory.unshift(M.timing.lastDelta),b.engineDeltaHistory.length=Math.min(b.engineDeltaHistory.length,S),b.timestampElapsedHistory.unshift(b.timestampElapsed),b.timestampElapsedHistory.length=Math.min(b.timestampElapsedHistory.length,S),b.engineUpdatesHistory.unshift(M.timing.lastUpdatesPerFrame),b.engineUpdatesHistory.length=Math.min(b.engineUpdatesHistory.length,S),b.engineElapsedHistory.unshift(M.timing.lastElapsed),b.engineElapsedHistory.length=Math.min(b.engineElapsedHistory.length,S),b.elapsedHistory.unshift(b.lastElapsed),b.elapsedHistory.length=Math.min(b.elapsedHistory.length,S)},p=function(x){for(var y=0,M=0;M<x.length;M+=1)y+=x[M];return y/x.length||0},_=function(x,y){var M=document.createElement("canvas");return M.width=x,M.height=y,M.oncontextmenu=function(){return!1},M.onselectstart=function(){return!1},M},E=function(x){var y=x.getContext("2d"),M=window.devicePixelRatio||1,b=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return M/b},T=function(x,y){var M=x.textures[y];return M||(M=x.textures[y]=new Image,M.src=y,M)},A=function(x,y){var M=y;/(jpg|gif|png)$/.test(y)&&(M="url("+y+")"),x.canvas.style.background=M,x.canvas.style.backgroundSize="contain",x.currentBackground=y}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(5),o=s(17),l=s(0);(function(){i._maxFrameDelta=1e3/15,i._frameDeltaFallback=1e3/60,i._timeBufferMargin=1.5,i._elapsedNextEstimate=1,i._smoothingLowerBound=.1,i._smoothingUpperBound=.9,i.create=function(h){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},f=l.extend(d,h);return f.fps=0,f},i.run=function(h,d){return h.timeBuffer=i._frameDeltaFallback,(function f(c){h.frameRequestId=i._onNextFrame(h,f),c&&h.enabled&&i.tick(h,d,c)})(),h},i.tick=function(h,d,f){var c=l.now(),m=h.delta,g=0,p=f-h.timeLastTick;if((!p||!h.timeLastTick||p>Math.max(i._maxFrameDelta,h.maxFrameTime))&&(p=h.frameDelta||i._frameDeltaFallback),h.frameDeltaSmoothing){h.frameDeltaHistory.push(p),h.frameDeltaHistory=h.frameDeltaHistory.slice(-h.frameDeltaHistorySize);var _=h.frameDeltaHistory.slice(0).sort(),E=h.frameDeltaHistory.slice(_.length*i._smoothingLowerBound,_.length*i._smoothingUpperBound),T=u(E);p=T||p}h.frameDeltaSnapping&&(p=1e3/Math.round(1e3/p)),h.frameDelta=p,h.timeLastTick=f,h.timeBuffer+=h.frameDelta,h.timeBuffer=l.clamp(h.timeBuffer,0,h.frameDelta+m*i._timeBufferMargin),h.lastUpdatesDeferred=0;var A=h.maxUpdates||Math.ceil(h.maxFrameTime/m),x={timestamp:d.timing.timestamp};a.trigger(h,"beforeTick",x),a.trigger(h,"tick",x);for(var y=l.now();m>0&&h.timeBuffer>=m*i._timeBufferMargin;){a.trigger(h,"beforeUpdate",x),o.update(d,m),a.trigger(h,"afterUpdate",x),h.timeBuffer-=m,g+=1;var M=l.now()-c,b=l.now()-y,S=M+i._elapsedNextEstimate*b/g;if(g>=A||S>h.maxFrameTime){h.lastUpdatesDeferred=Math.round(Math.max(0,h.timeBuffer/m-i._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=g,a.trigger(h,"afterTick",x),h.frameDeltaHistory.length>=100&&(h.lastUpdatesDeferred&&Math.round(h.frameDelta/m)>A?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):h.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof h.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(h.deltaMin||h.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),h.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},i.stop=function(h){i._cancelNextFrame(h)},i._onNextFrame=function(h,d){if(typeof window<"u"&&window.requestAnimationFrame)h.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return h.frameRequestId},i._cancelNextFrame=function(h){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(h.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(h){for(var d=0,f=h.length,c=0;c<f;c+=1)d+=h[c];return d/f||0}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(8),o=s(0),l=o.deprecated;(function(){i.collides=function(u,h){return a.collides(u,h)},l(i,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(t,n,s){var i={};t.exports=i,s(1);var a=s(0);(function(){i.pathToVertices=function(o,l){typeof window<"u"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,h,d,f,c,m,g,p,_,E,T=[],A,x,y=0,M=0,b=0;l=l||15;var S=function(w,P,D){var U=D%2===1&&D>1;if(!_||w!=_.x||P!=_.y){_&&U?(A=_.x,x=_.y):(A=0,x=0);var F={x:A+w,y:x+P};(U||!_)&&(_=F),T.push(F),M=A+w,b=x+P}},v=function(w){var P=w.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":M=w.x,b=w.y;break;case"H":M=w.x;break;case"V":b=w.y;break}S(M,b,w.pathSegType)}};for(i._svgPathToAbsolute(o),d=o.getTotalLength(),m=[],u=0;u<o.pathSegList.numberOfItems;u+=1)m.push(o.pathSegList.getItem(u));for(g=m.concat();y<d;){if(E=o.getPathSegAtLength(y),c=m[E],c!=p){for(;g.length&&g[0]!=c;)v(g.shift());p=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":f=o.getPointAtLength(y),S(f.x,f.y,0);break}y+=l}for(u=0,h=g.length;u<h;++u)v(g[u]);return T},i._svgPathToAbsolute=function(o){for(var l,u,h,d,f,c,m=o.pathSegList,g=0,p=0,_=m.numberOfItems,E=0;E<_;++E){var T=m.getItem(E),A=T.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in T&&(g=T.x),"y"in T&&(p=T.y);else switch("x1"in T&&(h=g+T.x1),"x2"in T&&(f=g+T.x2),"y1"in T&&(d=p+T.y1),"y2"in T&&(c=p+T.y2),"x"in T&&(g+=T.x),"y"in T&&(p+=T.y),A){case"m":m.replaceItem(o.createSVGPathSegMovetoAbs(g,p),E);break;case"l":m.replaceItem(o.createSVGPathSegLinetoAbs(g,p),E);break;case"h":m.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(g),E);break;case"v":m.replaceItem(o.createSVGPathSegLinetoVerticalAbs(p),E);break;case"c":m.replaceItem(o.createSVGPathSegCurvetoCubicAbs(g,p,h,d,f,c),E);break;case"s":m.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(g,p,f,c),E);break;case"q":m.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(g,p,h,d),E);break;case"t":m.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(g,p),E);break;case"a":m.replaceItem(o.createSVGPathSegArcAbs(g,p,T.r1,T.r2,T.angle,T.largeArcFlag,T.sweepFlag),E);break;case"z":case"Z":g=l,p=u;break}(A=="M"||A=="m")&&(l=g,u=p)}}})()}),(function(t,n,s){var i={};t.exports=i;var a=s(6);s(0),(function(){i.create=a.create,i.add=a.add,i.remove=a.remove,i.clear=a.clear,i.addComposite=a.addComposite,i.addBody=a.addBody,i.addConstraint=a.addConstraint})()})])})})(Ns)),Ns.exports}var jp=Jp();const jt=Zp(jp);class Qp{constructor(){this.engine=jt.Engine.create({gravity:{x:0,y:-.55}}),this.world=this.engine.world,this.listeners=new Map,jt.Events.on(this.engine,"collisionStart",e=>{for(const t of e.pairs)this._emit("collisionStart",t)})}addBody(e){jt.Composite.add(this.world,e)}removeBody(e){jt.Composite.remove(this.world,e)}update(e){let s=Math.min(e*1e3,50);for(;s>0;){const i=Math.min(s,16);jt.Engine.update(this.engine,i),s-=i}}on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){const n=this.listeners.get(e);if(n){const s=n.indexOf(t);s>=0&&n.splice(s,1)}}_emit(e,t){const n=this.listeners.get(e);n&&n.forEach(s=>s(t))}createCircle(e,t,n,s={}){return jt.Bodies.circle(e,t,n,s)}createRect(e,t,n,s,i={}){return jt.Bodies.rectangle(e,t,n,s,i)}setStatic(e,t){jt.Body.setStatic(e,t)}setVelocity(e,t){jt.Body.setVelocity(e,t)}setPosition(e,t){jt.Body.setPosition(e,t)}applyForce(e,t){jt.Body.applyForce(e,e.position,t)}}class em{constructor(e){this.cam=e,this.targetX=0,this.currentX=0,this.targetY=0,this.currentY=0,this._initialized=!1,this.zoom=Qe.IDLE_ZOOM,this.targetZoom=Qe.IDLE_ZOOM,this.shakeX=0,this.shakeY=0,this.shakeIntensity=0,this._transitionActive=!1,this._transFrom={x:0,y:0,zoom:1},this._transTo={x:0,y:0,zoom:1},this._transDuration=0,this._transElapsed=0,this._transCallback=null}followX(e){this.targetX=e,this._initialized||(this.currentX=e)}followY(e){this.targetY=-e,this._initialized||(this.currentY=-e,this._initialized=!0)}setTargetZoom(e){this.targetZoom=e}shake(e){this.shakeIntensity=Math.max(this.shakeIntensity,e)}transitionTo(e,t,n,s,i){this._transitionActive=!0,this._transFrom={x:this.currentX,y:this.currentY,zoom:this.zoom},this._transTo={x:e,y:-t,zoom:n},this._transDuration=s,this._transElapsed=0,this._transCallback=i||null}update(e){if(this._transitionActive){this._transElapsed+=e;let s=Math.min(this._transElapsed/this._transDuration,1);s=this._easeInOut(s),this.currentX=this._transFrom.x+(this._transTo.x-this._transFrom.x)*s,this.currentY=this._transFrom.y+(this._transTo.y-this._transFrom.y)*s,this.zoom=this._transFrom.zoom+(this._transTo.zoom-this._transFrom.zoom)*s,this._transElapsed>=this._transDuration&&(this._transitionActive=!1,this._transCallback&&this._transCallback())}else this.currentX+=(this.targetX-this.currentX)*Qe.FOLLOW_LERP_X,this.currentY+=(this.targetY-this.currentY)*Qe.FOLLOW_LERP,this.zoom+=(this.targetZoom-this.zoom)*Qe.ZOOM_LERP;this.shakeIntensity>.1?(this.shakeX=(Math.random()-.5)*2*this.shakeIntensity,this.shakeY=(Math.random()-.5)*2*this.shakeIntensity,this.shakeIntensity*=Qe.SHAKE_DECAY):(this.shakeX=0,this.shakeY=0,this.shakeIntensity=0);const t=Dt.HEIGHT/2/this.zoom,n=t*_a.ASPECT;this.cam.left=-n,this.cam.right=n,this.cam.top=t,this.cam.bottom=-t,this.cam.position.x=this.currentX+this.shakeX,this.cam.position.y=this.currentY+this.shakeY,this.cam.updateProjectionMatrix()}isTransitioning(){return this._transitionActive}_easeInOut(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}}class tm{constructor(e){this._callbacks=[],this._element=e,this._onPointerDown=t=>{t.preventDefault(),this._callbacks.forEach(n=>n(t))},this._onKeyDown=t=>{(t.code==="Space"||t.code==="Enter")&&(t.preventDefault(),this._callbacks.forEach(n=>n(t)))},e.addEventListener("pointerdown",this._onPointerDown,{passive:!1}),e.addEventListener("touchstart",t=>t.preventDefault(),{passive:!1}),window.addEventListener("keydown",this._onKeyDown)}onTap(e){this._callbacks.push(e)}offTap(e){const t=this._callbacks.indexOf(e);t>=0&&this._callbacks.splice(t,1)}destroy(){this._element.removeEventListener("pointerdown",this._onPointerDown),this._callbacks=[]}}const ct={fastMode:!1,sfxEnabled:!0,musicEnabled:!0,_listeners:[],onChange(r){this._listeners.push(r)},_notify(){for(const r of this._listeners)r(this)},set(r,e){this[r]=e,this._notify()},toggle(r){this[r]=!this[r],this._notify()}};class nm{constructor(){this.ctx=null,this._initialized=!1,this._rawSounds={},this._decodedSounds={}}_init(){this._initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this._initialized=!0)}async loadSound(e,t){const n=await fetch(t);this._rawSounds[e]=await n.arrayBuffer()}async _getBuffer(e){if(this._decodedSounds[e])return this._decodedSounds[e];const t=this._rawSounds[e];return t?(this._decodedSounds[e]=await this.ctx.decodeAudioData(t),delete this._rawSounds[e],this._decodedSounds[e]):null}async _playSound(e,t=Je.MASTER_VOLUME){if(!ct.sfxEnabled)return;this._init();const n=await this._getBuffer(e);if(!n)return;const s=this.ctx.createBufferSource(),i=this.ctx.createGain();s.buffer=n,i.gain.value=t,s.connect(i),i.connect(this.ctx.destination),s.start()}_play(e,t,n="sine",s=Je.MASTER_VOLUME,i=0){if(!ct.sfxEnabled)return;this._init();const a=this.ctx,o=a.createOscillator(),l=a.createGain();o.type=n,o.frequency.value=e,i&&(o.detune.value=i),l.gain.setValueAtTime(s,a.currentTime),l.gain.exponentialRampToValueAtTime(.001,a.currentTime+t),o.connect(l),l.connect(a.destination),o.start(a.currentTime),o.stop(a.currentTime+t)}_noise(e,t=Je.MASTER_VOLUME*.5){if(!ct.sfxEnabled)return;this._init();const n=this.ctx,s=n.sampleRate*e,i=n.createBuffer(1,s,n.sampleRate),a=i.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*.5;const o=n.createBufferSource();o.buffer=i;const l=n.createGain();l.gain.setValueAtTime(t,n.currentTime),l.gain.exponentialRampToValueAtTime(.001,n.currentTime+e);const u=n.createBiquadFilter();u.type="highpass",u.frequency.value=2e3,o.connect(u),u.connect(l),l.connect(n.destination),o.start()}pegHit(e,t=1,n=1){const s=Je.PEG_BASE_FREQ+Je.PEG_FREQ_RANGE*(1-e),i=Math.min(t,8)*30;this._play(s+i,.08,"sine",Je.MASTER_VOLUME*.6*n),this._play((s+i)*1.5,.05,"sine",Je.MASTER_VOLUME*.2*n)}layEgg(){this._play(400,.12,"sine",Je.MASTER_VOLUME*.5),this._play(600,.08,"sine",Je.MASTER_VOLUME*.3)}chickenCluck(e=1){this._playSound("chickenCluck",Je.MASTER_VOLUME*.8*e)}chickenSqueeze(e=1){const t=Math.floor(Math.random()*3)+1;this._playSound(`chickenSqueeze${t}`,Je.MASTER_VOLUME*e)}eggPop(e=1){if(!ct.sfxEnabled)return;this._init();const t=this.ctx,n=t.currentTime,s=t.createOscillator(),i=t.createGain();s.type="sine",s.frequency.setValueAtTime(350,n),s.frequency.exponentialRampToValueAtTime(80,n+.12),i.gain.setValueAtTime(Je.MASTER_VOLUME*.7*e,n),i.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(i),i.connect(t.destination),s.start(n),s.stop(n+.15);const a=t.createOscillator(),o=t.createGain();a.type="square",a.frequency.setValueAtTime(800,n),a.frequency.exponentialRampToValueAtTime(200,n+.06),o.gain.setValueAtTime(Je.MASTER_VOLUME*.3*e,n),o.gain.exponentialRampToValueAtTime(.001,n+.08),a.connect(o),o.connect(t.destination),a.start(n),a.stop(n+.08),this._noise(.08,Je.MASTER_VOLUME*.4*e)}eggLand(e=1){this._play(120,.2,"sine",Je.MASTER_VOLUME*.5*e),this._noise(.1,Je.MASTER_VOLUME*.2*e)}hatch(){this._noise(.15,Je.MASTER_VOLUME*.6),setTimeout(()=>{this._play(600,.3,"sine",Je.MASTER_VOLUME*.4),this._play(900,.25,"sine",Je.MASTER_VOLUME*.3),this._play(1200,.2,"sine",Je.MASTER_VOLUME*.2)},100)}coinCollect(e,t){const n=Je.COIN_BASE_FREQ+e/t*600;this._play(n,.06,"square",Je.MASTER_VOLUME*.15)}drumrollHit(e){const t=Je.MASTER_VOLUME*(.15+e*.25);this._play(100+e*40,.04,"triangle",t),this._noise(.025,t*.4)}purchasePowerup(){if(!ct.sfxEnabled)return;this._init();const e=Je.MASTER_VOLUME*.7;[523,659,784].forEach((n,s)=>{setTimeout(()=>{this._play(n,.2-s*.04,"sine",e*(1-s*.12))},s*70)}),setTimeout(()=>this._noise(.06,Je.MASTER_VOLUME*.25),60)}duplicateSpawn(){this._play(1e3+Math.random()*200,.04,"sine",Je.MASTER_VOLUME*.18),this._noise(.02,Je.MASTER_VOLUME*.06)}whoosh(){if(!ct.sfxEnabled)return;this._init();const e=this.ctx,t=e.createOscillator(),n=e.createGain();t.type="sine",t.frequency.setValueAtTime(200,e.currentTime),t.frequency.exponentialRampToValueAtTime(80,e.currentTime+.4),n.gain.setValueAtTime(Je.MASTER_VOLUME*.2,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.4),t.connect(n),n.connect(e.destination),t.start(),t.stop(e.currentTime+.4),this._noise(.2,Je.MASTER_VOLUME*.15)}}const im={chickenFly1:"sprites/T_Char_Chicken_Flying1.png",chickenFly2:"sprites/T_Char_Chicken_Flying2.png",chickenLay0:"sprites/T_Bird_LayingEgg_00.png",chickenLay1:"sprites/T_Bird_LayingEgg_01.png",egg:"sprites/T_Egg_Static_01.png",cloudLarge:"sprites/T_Env_Cloud_Large.png",cloudMedium:"sprites/T_Env_Cloud_Medium.png",cloudSmall:"sprites/T_Env_Cloud_Small.png",mountainsNear:"sprites/T_Env_Mountains_Near.png",mountainsFar:"sprites/T_Env_Mountains_Far.png",grass01:"sprites/T_Env_Grass_01.png",bush01:"sprites/T_Env_Bush_01.png",hut01:"sprites/T_Env_Hut_01.png"},Cs={},sm={async loadAll(){const r=new oh,e=Object.entries(im);return await Promise.all(e.map(([t,n])=>new Promise((s,i)=>{r.load(n,a=>{a.minFilter=Gt,a.magFilter=Gt,a.colorSpace=Ht,Cs[t]=a,s()},void 0,i)}))),Cs},get(r){return Cs[r]},textures:Cs};class rm{constructor(e,t,n){this.x=e,this.y=t,this.baseScale=1,this._hitTimer=0,this.specialType=null,this._phase=0,this.body=n.createCircle(e,-t,je.PEG_RADIUS,{isStatic:!0,restitution:.7,friction:.05,label:"peg"}),this.body.pegRef=this,n.addBody(this.body);const s=new wa(je.PEG_RADIUS,16),i=new wt({color:Lt.PEG_DEFAULT});this.mesh=new it(s,i),this.mesh.position.set(e,-t,0)}setSpecial(e){if(this.specialType=e,e){const t=sn[e];this.mesh.material.color.setHex(t.color),this.baseScale=t.scale}else this.mesh.material.color.setHex(Lt.PEG_DEFAULT),this.baseScale=1;this.mesh.scale.set(this.baseScale,this.baseScale,1)}hit(){this._hitTimer=1;const e=this.specialType?sn[this.specialType]:null;this.mesh.material.color.setHex(e?e.hitColor:Lt.PEG_HIT)}nudge(e){this._hitTimer<e&&(this._hitTimer=e)}update(e){if(this._hitTimer<=0&&(this.specialType==="rainbow"?(this._phase+=e*2,this.mesh.material.color.setHSL(this._phase%1,1,.6)):this.specialType==="diamond"&&(this._phase+=e*3,this.mesh.material.color.setHSL(.52,.9,.65+.15*Math.sin(this._phase)))),this._hitTimer>0){this._hitTimer-=e*6;const t=this.baseScale+.4*Math.max(this._hitTimer,0);if(this.mesh.scale.set(t,t,1),this._hitTimer<=0){this._hitTimer=0,this.mesh.scale.set(this.baseScale,this.baseScale,1);const n=this.specialType;n==="golden"?this.mesh.material.color.setHex(sn.golden.color):n||this.mesh.material.color.setHex(Lt.PEG_DEFAULT)}}}}class am{constructor(e,t,n,s,i){this.index=e,this.multiplier=Tt.MULTIPLIERS[e],this.x=t,this.y=n,this.width=s,this._glowTimer=0,this._time=0,this._squashTimer=0,this._labelPopTimer=0;const a=Tt.TIERS[this.multiplier];this._tier=a,this._baseLabelScale=a.labelScale,this.sensor=i.createRect(t,-n,s-4,Tt.HEIGHT,{isStatic:!0,isSensor:!0,label:`bin_${e}`}),this.sensor.binRef=this,i.addBody(this.sensor);const o=new Zn;if(o.position.set(t,-n,0),a.glowIntensity>0){const S=new mt(s+6,Tt.HEIGHT+6),v=new wt({color:a.glowColor,transparent:!0,opacity:a.glowIntensity,blending:wr,depthWrite:!1});this.rimMesh=new it(S,v),this.rimMesh.position.z=-.5,o.add(this.rimMesh),this._rimBaseOpacity=a.glowIntensity}const l=document.createElement("canvas");l.width=64,l.height=64;const u=l.getContext("2d"),h=new Ge(Tt.COLORS[e]),d=this._lighten(h,.3),f=this._darken(h,.35),c=u.createLinearGradient(0,0,0,64);c.addColorStop(0,d),c.addColorStop(1,f),u.fillStyle=c,u.fillRect(0,0,64,64);const m=new qi(l),g=new mt(s-2,Tt.HEIGHT),p=new wt({map:m,transparent:!0,opacity:.7});this.bgMesh=new it(g,p),o.add(this.bgMesh);const _=`x${this.multiplier}`,E=document.createElement("canvas");E.width=128,E.height=64;const T=E.getContext("2d"),A=this.multiplier===10?32:26;T.font=`bold ${A}px "Arial Black", sans-serif`,T.textAlign="center",T.textBaseline="middle",T.strokeStyle="#000",T.lineWidth=a.labelStroke,T.lineJoin="round",T.strokeText(_,64,32),T.fillStyle=a.labelColor,T.fillText(_,64,32);const x=new qi(E),y=32*a.labelScale,M=new mt(y*2,y),b=new wt({map:x,transparent:!0,depthWrite:!1});this.labelMesh=new it(M,b),this.labelMesh.position.z=1,o.add(this.labelMesh),this.mesh=o}_lighten(e,t){const n=Math.min(1,e.r+(1-e.r)*t),s=Math.min(1,e.g+(1-e.g)*t),i=Math.min(1,e.b+(1-e.b)*t);return`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(i*255)})`}_darken(e,t){const n=e.r*(1-t),s=e.g*(1-t),i=e.b*(1-t);return`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(i*255)})`}glow(){this._glowTimer=1}squash(){this._squashTimer=1}popLabel(){this._labelPopTimer=1}update(e){if(this._time+=e,this._glowTimer>0&&(this._glowTimer-=e*2,this._glowTimer<=0&&(this._glowTimer=0),this.bgMesh.material.opacity=.7+.3*this._glowTimer,this.rimMesh&&(this.rimMesh.material.opacity=this._rimBaseOpacity+(1-this._rimBaseOpacity)*this._glowTimer)),this.rimMesh&&this._glowTimer<=0){const t=this.multiplier===10?2.5:1.5,n=this.multiplier===10?.25:.1,s=Math.sin(this._time*t)*n;this.rimMesh.material.opacity=this._rimBaseOpacity+s}if(this.multiplier===10&&this._labelPopTimer<=0){const t=1+Math.sin(this._time*1.2+.5)*.06;this.labelMesh.scale.set(t,t,1)}if(this._squashTimer>0){this._squashTimer-=e*4,this._squashTimer<=0&&(this._squashTimer=0);const t=this._squashTimer,n=1+.15*t,s=1-.15*t;this.mesh.scale.set(n,s,1)}else this.mesh.scale.set(1,1,1);if(this._labelPopTimer>0){this._labelPopTimer-=e*3,this._labelPopTimer<=0&&(this._labelPopTimer=0);const t=1+.8*this._labelPopTimer;this.labelMesh.scale.set(t,t,1)}}}class om{constructor(e,t){this.pegs=[],this.bins=[],this.scene=e,this.physics=t,this._createPegs(),this._createWalls(),this._createBins(),this._createBinDividers()}_createPegs(){const e=Dt.WIDTH-je.WALL_THICKNESS*2-je.PEG_RADIUS*4,t=e/(je.PEG_COLS-1),n=-e/2;this._pegSpacingX=t;for(let s=0;s<je.PEG_ROWS;s++){const i=s%2===1,a=i?je.PEG_COLS-1:je.PEG_COLS,o=i?t/2:0;for(let l=0;l<a;l++){const u=n+l*t+o,h=je.TOP_OFFSET+s*je.PEG_SPACING_Y,d=new rm(u,h,this.physics);this.pegs.push(d),this.scene.add(d.mesh)}}}_createWalls(){const e=je.TOP_OFFSET+je.PEG_ROWS*je.PEG_SPACING_Y+Tt.HEIGHT+100,t=Dt.WIDTH/2,n={isStatic:!0,friction:.02,restitution:.8,label:"wall"},s=this.physics.createRect(-t+je.WALL_THICKNESS/2,-e/2,je.WALL_THICKNESS,e*2,n),i=this.physics.createRect(t-je.WALL_THICKNESS/2,-e/2,je.WALL_THICKNESS,e*2,n);this.physics.addBody(s),this.physics.addBody(i);const a=new wt({color:Lt.WALL,transparent:!0,opacity:.3}),o=new it(new mt(je.WALL_THICKNESS,e*2),a);o.position.set(-t+je.WALL_THICKNESS/2,-e/2,0),this.scene.add(o);const l=new it(new mt(je.WALL_THICKNESS,e*2),a.clone());l.position.set(t-je.WALL_THICKNESS/2,-e/2,0),this.scene.add(l)}_createBins(){const e=je.TOP_OFFSET+je.PEG_ROWS*je.PEG_SPACING_Y+30,t=Dt.WIDTH/2-je.WALL_THICKNESS,n=t*2,s=n/Tt.COUNT,i=-t+s/2;for(let a=0;a<Tt.COUNT;a++){const o=i+a*s,l=new am(a,o,e,s,this.physics);this.bins.push(l),this.scene.add(l.mesh)}this.boardBottom=e,this._binWidth=s,this._binStartX=-t,this._binTotalWidth=n}_createBinDividers(){const e=this.boardBottom,t=this._binWidth,n=this._binStartX,s=4,i=new wt({color:Lt.BIN_BORDER});for(let l=0;l<=Tt.COUNT;l++){const u=n+l*t,h=this.physics.createRect(u,-e,s,Tt.HEIGHT+10,{isStatic:!0,label:"divider",restitution:.7,friction:.05});this.physics.addBody(h);const d=new it(new mt(s,Tt.HEIGHT+10),i);d.position.set(u,-e,1),this.scene.add(d)}const a=e+Tt.HEIGHT/2+5,o=this.physics.createRect(0,-a,Dt.WIDTH,10,{isStatic:!0,label:"floor"});this.physics.addBody(o)}rippleFrom(e){const t=(this._pegSpacingX||je.PEG_SPACING_X)*1.8;for(const n of this.pegs){if(n===e)continue;const s=n.x-e.x,i=n.y-e.y,a=Math.sqrt(s*s+i*i);if(a<t){const o=1-a/t;n.nudge(o*.3)}}}update(e,t){for(const n of this.pegs)n.update(e);for(const n of this.bins)n.update(e),t&&n.multiplier===10&&(this._sparkleTimer=(this._sparkleTimer||0)+e,this._sparkleTimer>.15&&(this._sparkleTimer=0,t.emit(n.x,-n.y+10,1,{color:16766720,speed:15,life:.6,size:2.5,spread:Math.PI*.4,angle:-Math.PI/2,gravity:-10,drag:.96})))}cycleSpecialPegs(e){this.clearSpecialPegs();const t=[...this.pegs].sort(()=>Math.random()-.5);let n=0;for(const s of["rainbow","diamond","golden"]){const i=e[s]||0,a=Math.min(i,t.length-n);for(let o=0;o<a;o++)t[n++].setSpecial(s)}}clearSpecialPegs(){for(const e of this.pegs)e.specialType&&e.setSpecial(null)}getBoardBottom(){return this.boardBottom}getNormalizedY(e){return Math.max(0,Math.min(1,(e-je.TOP_OFFSET)/(je.PEG_ROWS*je.PEG_SPACING_Y)))}}class lm{constructor(){this.totalGold=0,this.currentRunGold=0,this.pegHits=0,this.combo=0,this._lastHitTime=0}onPegHit(e){this.pegHits++,e-this._lastHitTime<Wi.COMBO_WINDOW_MS?this.combo=Math.min(this.combo+1,Wi.COMBO_MAX):this.combo=1,this._lastHitTime=e;const t=Wi.BASE_GOLD*this.combo;return this.currentRunGold+=t,this.totalGold+=t,{gold:t,combo:this.combo}}calculateLandingBonus(e){return Math.ceil(this.currentRunGold*e)}canAfford(e){return this.totalGold>=e}spendGold(e){return this.canAfford(e)?(this.totalGold-=e,!0):!1}collectGold(e){this.totalGold+=e}resetRun(){this.currentRunGold=0,this.pegHits=0,this.combo=0,this._lastHitTime=0}}class cm{constructor(e,t,n,s,i,a,o,l=0,u=.98){this.x=e,this.y=t,this.vx=n,this.vy=s,this.size=i,this.color=a,this.life=o,this.maxLife=o,this.gravity=l,this.drag=u,this.alive=!0}}class hm{constructor(e){this.scene=e,this.particles=[],this._maxParticles=300;const t=new kt,n=new Float32Array(this._maxParticles*3),s=new Float32Array(this._maxParticles*3),i=new Float32Array(this._maxParticles);for(let l=0;l<this._maxParticles;l++)n[l*3+2]=-9999;t.setAttribute("position",new Nt(n,3)),t.setAttribute("color",new Nt(s,3)),t.setAttribute("size",new Nt(i,1));const a=new yl({size:4,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!1,depthWrite:!1});this.points=new th(t,a),this.points.frustumCulled=!1,this.points.renderOrder=100,this.points.visible=!1,e.add(this.points),this._floatingTexts=[],this._coinImg=null,this._coinImgReady=!1;const o=new Image;o.onload=()=>{this._coinImg=o,this._coinImgReady=!0},o.src="sprites/icons/Coin.svg"}emit(e,t,n,s={}){const{color:i=Lt.SPARK,speed:a=80,life:o=.5,size:l=3,spread:u=Math.PI*2,angle:h=-Math.PI/2,gravity:d=200,drag:f=.97}=s,c=new Ge(i);for(let m=0;m<n&&!(this.particles.length>=this._maxParticles);m++){const g=h+(Math.random()-.5)*u,p=a*(.5+Math.random()*.5);this.particles.push(new cm(e,t,Math.cos(g)*p,Math.sin(g)*p,l*(.5+Math.random()*.5),c,o*(.7+Math.random()*.3),d,f))}}emitTrail(e,t,n){const s=Math.min(Math.ceil(n/3),3);this.emit(e,t,s,{color:16770229,speed:10,life:.2+n*.01,size:2,spread:Math.PI,angle:Math.PI/2,gravity:0,drag:.95})}emitPegSpark(e,t){this.emit(e,t,5,{color:Lt.SPARK,speed:60,life:.25,size:2.5,spread:Math.PI*2,angle:0,gravity:100,drag:.96})}emitHatchExplosion(e,t){this.emit(e,t,15,{color:Lt.SHELL_PARTICLE,speed:150,life:.8,size:5,spread:Math.PI*2,angle:0,gravity:300,drag:.97}),this.emit(e,t,20,{color:Lt.GOLD_PARTICLE,speed:120,life:.6,size:4,spread:Math.PI,angle:-Math.PI/2,gravity:100,drag:.96}),this.emit(e,t,10,{color:Lt.SPARK,speed:200,life:.4,size:2,spread:Math.PI*2,angle:0,gravity:50,drag:.95})}emitEggPop(e,t){this.emit(e,t,12,{color:Lt.SPARK,speed:100,life:.4,size:3.5,spread:Math.PI*2,angle:0,gravity:60,drag:.96}),this.emit(e,t,8,{color:Lt.GOLD_PARTICLE,speed:70,life:.35,size:3,spread:Math.PI*2,angle:0,gravity:80,drag:.95}),this.emit(e,t-10,5,{color:Lt.SHELL_PARTICLE,speed:40,life:.5,size:4,spread:Math.PI*.6,angle:Math.PI/2,gravity:200,drag:.97})}emitBinLand(e,t,n,s){const i={1:1,3:1.5,5:2.2,10:3.5}[s]||1,a=Math.round(6*i);this.emit(e,t,a,{color:n,speed:50+s*8,life:.4+s*.03,size:3+i,spread:s>=10?Math.PI*2:Math.PI*1.2,angle:-Math.PI/2,gravity:150,drag:.96}),s>=10&&this.emit(e,t,10,{color:16766720,speed:100,life:.5,size:2.5,spread:Math.PI*2,angle:0,gravity:60,drag:.95})}emitDust(e,t){this.emit(e,t,8,{color:Lt.DUST,speed:30,life:.6,size:3,spread:Math.PI,angle:-Math.PI/2,gravity:-20,drag:.93})}spawnFloatingGold(e,t,n,s,i){const a=document.createElement("canvas"),o=2;a.width=256*o,a.height=96*o;const l=a.getContext("2d");l.scale(o,o);const u=s*.85,h=`${n}`;l.font=`bold ${s}px "Arial Black", sans-serif`;const d=l.measureText(h).width,c=128-(u+4+d)/2;this._coinImgReady?l.drawImage(this._coinImg,c,48-u/2,u,u):(l.fillStyle="#FFD700",l.beginPath(),l.arc(c+u/2,48,u/2,0,Math.PI*2),l.fill());const m=c+u+4;l.textAlign="left",l.textBaseline="middle",l.strokeStyle="#000",l.lineWidth=4,l.lineJoin="round",l.strokeText(h,m,48),l.fillStyle=i||"#fff",l.fillText(h,m,48);const g=new qi(a),p=new mt(128,48),_=new wt({map:g,transparent:!0,depthWrite:!1}),E=new it(p,_);E.position.set(e,t,10),E.renderOrder=200,this.scene.add(E),this._floatingTexts.push({mesh:E,vy:50,life:.9,maxLife:.9,scale:1.5,targetScale:1})}spawnFloatingText(e,t,n,s,i){const a=document.createElement("canvas"),o=2;a.width=256*o,a.height=96*o;const l=a.getContext("2d");l.scale(o,o),l.font=`bold ${s}px "Arial Black", sans-serif`,l.textAlign="center",l.textBaseline="middle",l.strokeStyle="#000",l.lineWidth=4,l.lineJoin="round",l.strokeText(n,128,48),l.fillStyle=i||"#fff",l.fillText(n,128,48);const u=new qi(a),h=new mt(128,48),d=new wt({map:u,transparent:!0,depthWrite:!1}),f=new it(h,d);f.position.set(e,t,10),f.renderOrder=200,this.scene.add(f),this._floatingTexts.push({mesh:f,vy:50,life:.9,maxLife:.9,scale:1.5,targetScale:1})}update(e){const t=this.points.geometry.attributes.position.array,n=this.points.geometry.attributes.color.array,s=this.points.geometry.attributes.size.array;for(let i=this.particles.length-1;i>=0;i--){const a=this.particles[i];if(a.life-=e,a.life<=0){this.particles.splice(i,1);continue}a.vy-=a.gravity*e,a.vx*=a.drag,a.vy*=a.drag,a.x+=a.vx*e,a.y+=a.vy*e}for(let i=0;i<this._maxParticles;i++)if(i<this.particles.length){const a=this.particles[i],o=a.life/a.maxLife;t[i*3]=a.x,t[i*3+1]=a.y,t[i*3+2]=5,n[i*3]=a.color.r*o,n[i*3+1]=a.color.g*o,n[i*3+2]=a.color.b*o,s[i]=a.size*o}else t[i*3]=-9999,t[i*3+1]=-9999,t[i*3+2]=-9999,s[i]=0;this.points.visible=this.particles.length>0,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0,this.points.geometry.attributes.size.needsUpdate=!0;for(let i=this._floatingTexts.length-1;i>=0;i--){const a=this._floatingTexts[i];a.life-=e,a.mesh.position.y+=a.vy*e,a.mesh.material.opacity=Math.max(0,a.life/a.maxLife),a.scale!==void 0&&(a.scale+=(a.targetScale-a.scale)*Math.min(e*12,1),a.mesh.scale.set(a.scale,a.scale,1)),a.life<=0&&(this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.map.dispose(),a.mesh.material.dispose(),this._floatingTexts.splice(i,1))}}}class Ar{constructor(e,t,n,s,i=!1,a=null){this.physics=n,this.isDuplicate=i,this.goldMultiplier=(a==null?void 0:a.goldMultiplier)||1,this.typeId=(a==null?void 0:a.typeId)||null,this.pegHits=0,this.alive=!0,this.landed=!1,this.landedBin=null;const o=i?xi.RADIUS*Kn.DUPLICATE_RADIUS_SCALE:xi.RADIUS,l=i?Kn.DUPLICATE_RESTITUTION:xi.RESTITUTION,u=Math.min(l+((a==null?void 0:a.restitutionBonus)||0),1);this.body=n.createCircle(e,-t,o,{restitution:u,friction:xi.FRICTION,density:xi.DENSITY,label:i?"egg_duplicate":"egg",collisionFilter:{group:-1}}),this.body.eggRef=this,n.addBody(this.body);const h=o*2.4,d=new mt(h,h),f=new wt({map:s,transparent:!0,opacity:i?Kn.DUPLICATE_OPACITY:1});i?f.color.set(16770688):a!=null&&a.tint&&f.color.set(a.tint),this.mesh=new it(d,f),this.mesh.position.set(e,-t,i?1.5:2),this._crackLines=[],this._squashX=1,this._squashY=1}getX(){return this.body.position.x}getY(){return-this.body.position.y}getVelX(){return this.body.velocity.x}getVelY(){return this.body.velocity.y}getSpeed(){const e=this.body.velocity.x,t=this.body.velocity.y;return Math.sqrt(e*e+t*t)}setSquash(e,t){this._squashX=e,this._squashY=t}showCracks(){if(this._crackLines.length>0)return;const e=new Sl({color:9139029});for(let t=0;t<3;t++){const n=[],s=(Math.random()-.5)*Math.PI,i=xi.RADIUS*.6;if(n.push(new k(0,0,0)),n.push(new k(Math.cos(s)*i,Math.sin(s)*i,0)),Math.random()>.4){const l=s+(Math.random()-.5)*1.2;n.push(new k(Math.cos(s)*i*.6+Math.cos(l)*i*.4,Math.sin(s)*i*.6+Math.sin(l)*i*.4,0))}const a=new kt().setFromPoints(n),o=new eh(a,e);o.position.z=3,this.mesh.add(o),this._crackLines.push(o)}}update(){this.alive&&(this.mesh.position.x=this.body.position.x,this.mesh.position.y=this.body.position.y,this.mesh.scale.set(this._squashX,this._squashY,1),this.mesh.rotation.z=this.body.angle)}destroy(e){this.alive=!1,this.physics.removeBody(this.body),e.remove(this.mesh)}}const br=.18;class um{constructor(e,t,n=1){this.typeConfig=t,this._level=n,this._time=Math.random()*100;const s=["normal","rainbow","cosmic"].indexOf(t.id);this._dir=s%2===0?1:-1,this._flipTimer=Math.random()*br,this._frameIndex=0,this._layInterval=this._calcInterval(n),this._laying=!1,this._layTimer=this._layInterval,this._warmingUp=!1,this._warmupTimer=0,this._layAnimTimer=0,this._lastDisplayedSecond=Math.ceil(this._layTimer),this._flyFrames=[e.chickenFly1,e.chickenFly2],this._layFrames=[e.chickenLay0,e.chickenLay1],this._frames=this._flyFrames,this.group=new Zn;const i=(s*97+43)%(Dt.WIDTH-80)-(Dt.WIDTH/2-40);this.group.position.set(i,-140,pt.Z_POS),this.group.scale.set(pt.SCALE*(this._dir===1?-1:1),pt.SCALE,1);const a=xt.BODY_RADIUS*2.8,o=new mt(a,a),l=new wt({map:this._frames[0],transparent:!0});t.tint&&l.color.set(t.tint),this.sprite=new it(o,l),this.group.add(this.sprite),this._minX=-390/2+40,this._maxX=Dt.WIDTH/2-40,this._timerCanvas=document.createElement("canvas"),this._timerCanvas.width=64,this._timerCanvas.height=32,this._timerCtx=this._timerCanvas.getContext("2d"),this._timerTexture=new qi(this._timerCanvas),this._timerTexture.minFilter=Gt;const u=new _l({map:this._timerTexture,transparent:!0,depthTest:!1});this._timerSprite=new Jc(u),this._timerScaleBase=28/pt.SCALE;const h=this.group.scale.x>0?1:-1;this._timerSprite.scale.set(this._timerScaleBase*h,this._timerScaleBase*.5,1),this._timerSprite.position.y=a*.55,this._timerSprite.position.z=1,this.group.add(this._timerSprite),this._drawTimerText(Math.ceil(this._layTimer))}_calcInterval(e){return this.typeConfig.baseInterval*Math.pow(1-pt.INTERVAL_REDUCTION,e-1)}setLevel(e){this._level=e,this._layInterval=this._calcInterval(e),!this._warmingUp&&!this._laying&&(this._layTimer=Math.min(this._layTimer,this._layInterval))}_drawTimerText(e){const t=this._timerCtx;t.clearRect(0,0,64,32),t.font='bold 22px "Segoe UI", system-ui, sans-serif',t.textAlign="center",t.textBaseline="middle",t.strokeStyle="rgba(0,0,0,0.7)",t.lineWidth=3,t.strokeText(`${e}s`,32,17),t.fillStyle=this.typeConfig.timerColor,t.fillText(`${e}s`,32,17),this._timerTexture.needsUpdate=!0}triggerImmediateLay(){this._warmingUp=!0,this._warmupTimer=0,this._frames=this._layFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this._timerSprite.visible=!1}getX(){return this.group.position.x}getDropX(){return this.group.position.x}getDropY(){return-this.group.position.y+xt.BODY_RADIUS*pt.SCALE+3}update(e){this._time+=e;let t=!1;if(this._flipTimer+=e,this._flipTimer>=br&&(this._flipTimer-=br,this._frameIndex=(this._frameIndex+1)%this._frames.length,this.sprite.material.map=this._frames[this._frameIndex]),this._warmingUp){this._warmupTimer+=e;const s=Math.min(this._warmupTimer/pt.WARMUP_DURATION,1),i=s*s,a=1-.25*i,o=1+.2*i;this.sprite.scale.set(o,a,1);const l=i*1*(Math.random()-.5)*2;this.sprite.position.x=l,this._warmupTimer>=pt.WARMUP_DURATION&&(this._warmingUp=!1,this._laying=!0,this._layAnimTimer=pt.LAY_DURATION,this._frames=this._flyFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this.sprite.position.x=0,t=!0)}else if(this._laying){this._layAnimTimer-=e;const s=1-this._layAnimTimer/pt.LAY_DURATION,i=s<.5?1-.25*(s*2):.75+.25*((s-.5)*2);this.sprite.scale.set(1+(1-i)*.4,i,1),this._layAnimTimer<=0&&(this._laying=!1,this.sprite.scale.set(1,1,1),this._layTimer=this._layInterval,this._lastDisplayedSecond=Math.ceil(this._layTimer),this._drawTimerText(this._lastDisplayedSecond),this._timerSprite.visible=!0)}else{this._layTimer-=e;const s=Math.max(Math.ceil(this._layTimer),0);s!==this._lastDisplayedSecond&&(this._lastDisplayedSecond=s,this._drawTimerText(s)),this._layTimer<=pt.WARMUP_DURATION&&(this._warmingUp||(this._warmingUp=!0,this._warmupTimer=0,this._frames=this._layFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this._timerSprite.visible=!1))}!this._warmingUp&&!this._laying&&(this.group.position.x+=pt.SPEED*this._dir*e,this.group.position.x>this._maxX?(this._dir=-1,this.group.scale.x=pt.SCALE):this.group.position.x<this._minX&&(this._dir=1,this.group.scale.x=-.65)),this._timerSprite.scale.x=this._timerScaleBase*Math.sign(this.group.scale.x);const n=Math.sin(this._time*xt.BOB_SPEED*.9)*xt.BOB_AMPLITUDE*.8;return this.group.position.y=-140+n,{shouldLay:t}}}const ht={IDLE:"idle",WARMUP:"warmup",DROP:"drop",LAND:"land",HATCH:"hatch",TRANSITION:"transition"},Go=.5,ko=2,Vo=25,Wo=.05,Xo=-.035;class fm{constructor({renderer:e,physics:t,camera:n,board:s,chicken:i,scoreManager:a,particleSystem:o,hud:l,audio:u,input:h,textures:d}){this.renderer=e,this.physics=t,this.camera=n,this.board=s,this.chicken=i,this.score=a,this.particles=o,this.hud=l,this.audio=u,this.input=h,this.textures=d,this.state=ht.IDLE,this.egg=null,this._mainEggs=[],this._stateTimer=0,this._wobblePhase=0,this._landingGold=0,this._idleDelay=0,this._stuckTimer=0,this._freezeTimer=0,this._drumrollTimer=0,this._coinFountainActive=!1,this._hatchEggX=0,this._hatchEggY=0,this._dupliBounceActive=!1,this._dupliBounceInFlight=!1,this._duplicateEggs=[],this._bonusGold=0,this._hasPlayedRound=!1,this._hasPulsedToggle=!1,this._roundCount=0,this._playerUpgrades={};for(const f of kn)this._playerUpgrades[f.id]=0;this._specialPegTimer=0,this._chickenSlots=Tr.map(f=>({config:f,owned:!1,level:0,chicken:null})),this._autoEggs=[],this._onCollision=this._onCollision.bind(this),this.physics.on("collisionStart",this._onCollision),this._onTap=this._onTap.bind(this),this.input.onTap(this._onTap),this.hud.onPowerupClick(()=>this.purchaseDupliBounce()),this.hud.initUpgradeRows(Tr),this.hud.revealUpgradeRow(Tr[0].id),this.hud.onUpgradeRowClick(f=>this._handleUpgradeClick(f)),this.hud.initPlayerUpgradeRows(kn),this.hud.onPlayerUpgradeRowClick(f=>this._handlePlayerUpgradeClick(f)),this._enterIdle()}_getSpeedMult(){return ct.fastMode?.25:this._roundCount>=2?.6:1}_onTap(){this.state===ht.IDLE&&!this.hud.isPanelOpen()&&this._enterWarmup()}_onCollision(e){const{bodyA:t,bodyB:n}=e,s=this.state===ht.DROP||this.state===ht.LAND;if(s&&this.state===ht.DROP)for(const i of this._mainEggs){if(!i.alive||i.landed)continue;let a=null;if(t===i.body?a=n:n===i.body&&(a=t),!!a){a.label==="peg"&&a.pegRef?(this._handlePegHit(a.pegRef,i),this._dupliBounceInFlight&&this._spawnDuplicate(a.pegRef.x,a.pegRef.y)):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleBinLand(a.binRef,i):a.label==="floor"&&!i.landed&&this._handleFloorLand(i);return}}if(s)for(const i of this._duplicateEggs){if(!i.alive||i.landed)continue;let a=null;if(t===i.body?a=n:n===i.body&&(a=t),!!a){a.label==="peg"&&a.pegRef?this._handleDupePegHit(a.pegRef,i):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleDupeBinLand(a.binRef,i):a.label==="floor"&&this._handleDupeFloorLand(i);return}}for(const i of this._autoEggs){if(!i.alive||i.landed)continue;let a=null;if(t===i.body?a=n:n===i.body&&(a=t),!!a){a.label==="peg"&&a.pegRef?this._handleAutoEggPegHit(a.pegRef,i):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleAutoEggBinLand(a.binRef,i):a.label==="floor"&&this._handleAutoEggFloorLand(i);return}}}_pegHitScreenPos(e){return this.renderer.projectToScreen(e.x,-e.y)}_handlePegHit(e,t){e.hit(),t.pegHits++,this.board.rippleFrom(e);const n=performance.now(),{gold:s,combo:i}=this.score.onPegHit(n),a=e.specialType?sn[e.specialType].multiplier:1,o=s*a;if(a>1){const c=o-s;this.score.totalGold+=c,this.score.currentRunGold+=c}const l=this.board.getNormalizedY(e.y);this.audio.pegHit(l,i);const u=t.getSpeed();ct.fastMode||this.camera.shake(Qe.SHAKE_INTENSITY*Math.min(u/5,1.5)),this.particles.emitPegSpark(e.x,-e.y);const h=i>3?42:i>1?34:28,d=e.specialType?sn[e.specialType].textColor:i>3?"#FF6B35":i>1?"#FFD700":"#FFFFFF";this.particles.spawnFloatingGold(e.x,-e.y+20,o,h,d),this.hud.setGold(this.score.totalGold),ct.fastMode||(this.hud.setRunGold(this.score.currentRunGold),this.hud.setCombo(i),this.hud.setEdgeGlow(i/Wi.COMBO_MAX));const f=this._pegHitScreenPos(e);this.hud.spawnFlyingCoin(f.x,f.y)}_handleBinLand(e,t){if(!t.landed&&(t.landed=!0,t.landedBin=e,e.glow(),e.squash(),e.popLabel(),this.audio.eggLand(),this.particles.emitDust(e.x,-e.y+15),this.particles.emitBinLand(e.x,-e.y+10,Tt.COLORS[e.index],e.multiplier),this.camera.shake(e.multiplier>=10?5:3),t.setSquash(1.3,.7),this._allMainEggsLanded())){const n=this._getBestBin();this._landingGold=this.score.calculateLandingBonus(n.multiplier),this.egg=this._getHatchEgg(),this.state=ht.LAND,this._stateTimer=0,this._freezeTimer=Rn.LAND_FREEZE}}_handleFloorLand(e){if(!(!e||e.landed)&&(e.landed=!0,this.audio.eggLand(),this._allMainEggsLanded())){const t=this._getBestBin();t?this._landingGold=this.score.calculateLandingBonus(t.multiplier):this._landingGold=0,this.egg=this._getHatchEgg(),this.state=ht.LAND,this._stateTimer=0,this._freezeTimer=Rn.LAND_FREEZE,this.camera.shake(2),this.egg&&this.egg.setSquash(1.3,.7)}}_allMainEggsLanded(){return this._mainEggs.every(e=>e.landed||!e.alive)}_getBestBin(){let e=null;for(const t of this._mainEggs)t.landedBin&&(!e||t.landedBin.multiplier>e.multiplier)&&(e=t.landedBin);return e}_getHatchEgg(){const e=this._getBestBin();return e?this._mainEggs.find(t=>t.landedBin===e)||this._mainEggs[0]:this._mainEggs[0]}_spawnDuplicate(e,t){const n=new Ar(e,t,this.physics,this.textures.egg,!0),s=Math.random()*Math.PI*2,i=Kn.SPAWN_SPEED_MIN+Math.random()*Kn.SPAWN_SPEED_SPREAD;this.physics.setVelocity(n.body,{x:Math.cos(s)*i,y:-Math.abs(Math.sin(s)*i)-.5}),this.renderer.scene.add(n.mesh),this._duplicateEggs.push(n),this.audio.duplicateSpawn(),this.particles.emitPegSpark(e,-t)}_handleDupePegHit(e,t){e.hit(),t.pegHits++,this.board.rippleFrom(e);const n=e.specialType?sn[e.specialType].multiplier:1;this.score.currentRunGold+=n,this.score.totalGold+=n;const s=this.board.getNormalizedY(e.y);this.audio.pegHit(s,1),this.particles.emitPegSpark(e.x,-e.y);const i=e.specialType?sn[e.specialType].textColor:"#DDDDDD";this.particles.spawnFloatingGold(e.x,-e.y+20,n,22,i),this.hud.setGold(this.score.totalGold),ct.fastMode||this.hud.setRunGold(this.score.currentRunGold);const a=this._pegHitScreenPos(e);this.hud.spawnFlyingCoin(a.x,a.y)}_handleDupeBinLand(e,t){if(t.landed)return;t.landed=!0,t.landedBin=e,e.glow(),e.squash(),e.popLabel(),this.audio.eggLand(),this.particles.emitDust(e.x,-e.y+15),this.particles.emitBinLand(e.x,-e.y+10,Tt.COLORS[e.index],e.multiplier);const n=this.score.calculateLandingBonus(e.multiplier);this._bonusGold+=n,this.particles.spawnFloatingText(e.x,-e.y+25,`+${n}g`,26,"#FFE680"),setTimeout(()=>{if(t.alive){t.destroy(this.renderer.scene);const s=this._duplicateEggs.indexOf(t);s!==-1&&this._duplicateEggs.splice(s,1)}},200)}_handleDupeFloorLand(e){e.landed||(e.landed=!0,setTimeout(()=>{if(e.alive){e.destroy(this.renderer.scene);const t=this._duplicateEggs.indexOf(e);t!==-1&&this._duplicateEggs.splice(t,1)}},100))}_cleanupDuplicates(){for(const e of this._duplicateEggs)e.alive&&e.destroy(this.renderer.scene);this._duplicateEggs=[]}_cleanupMainEggs(){for(const e of this._mainEggs)e!==this.egg&&e.alive&&e.destroy(this.renderer.scene);this._mainEggs=[]}_getPlayerUpgradeCost(e){const t=this._playerUpgrades[e.id];return t>=e.maxLevel?1/0:Math.floor(e.baseCost*Math.pow(e.costMult,t))}_handlePlayerUpgradeClick(e){const t=kn.find(s=>s.id===e);if(!t)return;const n=this._getPlayerUpgradeCost(t);this.score.canAfford(n)&&(this.score.spendGold(n),this.hud.setGold(this.score.totalGold),this._playerUpgrades[e]++,this.audio.purchasePowerup(),this._syncAllUpgradeRows(),e.endsWith("_pegs")&&(this._cycleSpecialPegs(),this._specialPegTimer=0))}_updateSpecialPegCycle(e){(this._playerUpgrades.golden_pegs>0||this._playerUpgrades.diamond_pegs>0||this._playerUpgrades.rainbow_pegs>0)&&(this._specialPegTimer+=e,this._specialPegTimer>=sn.CYCLE_INTERVAL&&(this._specialPegTimer=0,this._cycleSpecialPegs()))}_cycleSpecialPegs(){const e={};for(const t of["rainbow","diamond","golden"]){const n=this._playerUpgrades[t+"_pegs"];if(n>0){const s=kn.find(i=>i.id===t+"_pegs");e[t]=n*s.effect}}this.board.cycleSpecialPegs(e)}_syncPlayerUpgradeRows(){let e=!1;for(const t of kn){const n=this._playerUpgrades[t.id],s=this._getPlayerUpgradeCost(t),i=this.score.canAfford(s);i&&s!==1/0&&(e=!0),this.hud.updatePlayerUpgradeRow(t.id,{level:n,cost:s===1/0?"---":s,canAfford:i,maxLevel:t.maxLevel})}return e}_getSlot(e){return this._chickenSlots.find(t=>t.config.id===e)}_getSlotCost(e){return e.owned?e.level>=pt.MAX_LEVEL?1/0:Math.floor(e.config.levelCostBase*Math.pow(e.config.levelCostMult,e.level-1)):e.config.baseCost}_handleUpgradeClick(e){const t=this._getSlot(e);if(!t)return;const n=this._getSlotCost(t);this.score.canAfford(n)&&(t.owned?t.level<pt.MAX_LEVEL&&this._upgradeChicken(t):this._purchaseChicken(t))}_purchaseChicken(e){const t=e.config.baseCost;this.score.spendGold(t),this.hud.setGold(this.score.totalGold),e.owned=!0,e.level=1,e.chicken=new um(this.textures,e.config,1),this.renderer.scene.add(e.chicken.group),e.chicken.triggerImmediateLay(),this.audio.purchasePowerup();const n=this._chickenSlots.indexOf(e);n+1<this._chickenSlots.length&&this.hud.revealUpgradeRow(this._chickenSlots[n+1].config.id),this._syncAllUpgradeRows()}_upgradeChicken(e){const t=this._getSlotCost(e);this.score.spendGold(t),this.hud.setGold(this.score.totalGold),e.level++,e.chicken.setLevel(e.level),this.audio.purchasePowerup(),this._syncAllUpgradeRows()}_syncAllUpgradeRows(){let e=!1;for(const n of this._chickenSlots){const s=this._getSlotCost(n),i=this.score.canAfford(s);i&&s!==1/0&&(e=!0);const a=this._chickenSlots[this._chickenSlots.indexOf(n)-1],o=!a||a.owned;!n.owned&&!o||this.hud.updateUpgradeRow(n.config.id,{owned:n.owned,level:n.level,cost:s===1/0?"---":s,canAfford:i,maxLevel:pt.MAX_LEVEL})}const t=this._syncPlayerUpgradeRows();this.hud.setUpgradeToggleHighlight(e||t),this._updateGoalBar()}_getNextGoal(){let e=null;for(const t of this._chickenSlots){const n=this._getSlotCost(t);if(n!==1/0){if(!t.owned){const s=this._chickenSlots[this._chickenSlots.indexOf(t)-1];if(s&&!s.owned)continue}if(!e||n<e.cost){const s=t.owned?`${t.config.name} Lv.${t.level+1}`:t.config.name;e={emoji:t.config.emoji,name:s,cost:n}}}}for(const t of kn){const n=this._getPlayerUpgradeCost(t);if(n!==1/0&&(!e||n<e.cost)){const s=this._playerUpgrades[t.id],i=s===0?t.name:`${t.name} Lv.${s+1}`;e={emoji:t.emoji,name:i,cost:n}}}return e}_updateGoalBar(){const e=this._getNextGoal();if(!e){this.hud.hideGoalBar();return}this.hud.updateGoalBar({emoji:e.emoji,name:e.name,current:this.score.totalGold,target:e.cost})}_spawnAutoEgg(e){const t=pt.AUDIO_VOLUME_SCALE;this.audio.eggPop(t),this.audio.chickenCluck(t);const n=e.getDropX(),s=e.getDropY(),i=e.typeConfig,a=new Ar(n,s,this.physics,this.textures.egg,!1,{tint:i.eggTint,goldMultiplier:i.goldMultiplier,typeId:i.id});a.body.label="egg_auto",a.mesh.position.z=1.5,a._autoAge=0,a._stuckTimer=0,this.renderer.scene.add(a.mesh),this._autoEggs.push(a)}_handleAutoEggPegHit(e,t){e.hit(),t.pegHits++,this.board.rippleFrom(e);const s=(e.specialType?sn[e.specialType].multiplier:1)*t.goldMultiplier;this.score.collectGold(s);const i=pt.AUDIO_VOLUME_SCALE,a=this.board.getNormalizedY(e.y);this.audio.pegHit(a,1,i),this.particles.emitPegSpark(e.x,-e.y);const o=e.specialType?sn[e.specialType].textColor:"#AADDFF";this.particles.spawnFloatingGold(e.x,-e.y+20,s,22,o),this.hud.setGold(this.score.totalGold);const l=this._pegHitScreenPos(e);this.hud.spawnFlyingCoin(l.x,l.y)}_handleAutoEggBinLand(e,t){if(t.landed)return;t.landed=!0,e.glow(),e.squash(),e.popLabel(),this.audio.eggLand(pt.AUDIO_VOLUME_SCALE),this.particles.emitDust(e.x,-e.y+15),this.particles.emitBinLand(e.x,-e.y+10,Tt.COLORS[e.index],e.multiplier);const s=Math.max(1,Math.ceil(t.pegHits*Wi.BASE_GOLD*e.multiplier))*t.goldMultiplier;this._fireAutoEggFountain(t,s)}_handleAutoEggFloorLand(e){e.landed||(e.landed=!0,this._fireAutoEggFountain(e,0))}_fireAutoEggFountain(e,t){const n=e.getX(),s=-e.getY();if(this.particles.emitHatchExplosion(n,s),t>0){const i=this.renderer.projectToScreen(n,s),a=Math.min(Math.max(Math.ceil(Math.sqrt(t)),2),12),o=Math.round(t/a);this.hud.spawnCoinFountain(i.x,i.y,a,o,l=>{this.score.collectGold(l),this.hud.setGold(this.score.totalGold),this._syncAllUpgradeRows(),this._updateGoalBar()},null)}setTimeout(()=>{if(e.alive){e.destroy(this.renderer.scene);const i=this._autoEggs.indexOf(e);i!==-1&&this._autoEggs.splice(i,1)}},150)}_checkAutoEggStuck(e,t){if(e.landed)return;const n=e.getSpeed(),s=e.getX(),i=Dt.WIDTH/2-Vo;if(n<Go&&Math.abs(s)>i?e._stuckTimer+=t:e._stuckTimer=Math.max(0,e._stuckTimer-t*2),e._stuckTimer>=ko){const a=s>0?-1:1;this.physics.applyForce(e.body,{x:a*Wo,y:Xo}),this.particles.spawnFloatingText(s,-e.getY(),"BLAST OFF!",36,"#FF4400"),e._stuckTimer=0}}purchaseDupliBounce(){this.state===ht.IDLE&&(this._dupliBounceActive||this.score.canAfford(Kn.DUPLI_BOUNCE_COST)&&(this.score.spendGold(Kn.DUPLI_BOUNCE_COST),this.hud.setGold(this.score.totalGold),this._dupliBounceActive=!0,this.audio.purchasePowerup(),this.hud.setPowerupActive(),this._syncAllUpgradeRows()))}_enterIdle(){this.state=ht.IDLE,this.score.resetRun(),this._idleDelay=Rn.IDLE_PROMPT_DELAY,this.hud.hideRunGold(),this._hasPlayedRound?(this.camera.setTargetZoom(Qe.OVERVIEW_ZOOM),this.camera.followX(0),this.camera.followY(Qe.OVERVIEW_CENTER_Y)):(this.camera.setTargetZoom(Qe.IDLE_ZOOM),this.camera.followX(this.chicken.getX()),this.camera.followY(xt.Y_POS)),this._hasPlayedRound&&(this._syncAllUpgradeRows(),this.hud.showUpgradeToggle(),this._updateGoalBar(),this._roundCount>=2&&this.hud.showSettingsBtn(),this._hasPulsedToggle||(this._hasPulsedToggle=!0,setTimeout(()=>this.hud.pulseUpgradeToggle(),400)))}_enterWarmup(){this.state=ht.WARMUP,this._stateTimer=0,this._bonusGold=0,this.hud.hideTapPrompt(),this.hud.hideSubtleTapPrompt(),this.hud.hidePowerupButton(),this.hud.closeUpgradePanel(),this.hud.closeSettingsPanel(),ct.fastMode||(this.hud.hideUpgradeToggle(),this.hud.hideGoalBar(),this.hud.hideSettingsBtn()),this._dupliBounceActive&&(this._dupliBounceInFlight=!0,this._dupliBounceActive=!1),this.chicken.warmup([this.textures.chickenLay0,this.textures.chickenLay1],xt.WARMUP_DURATION*this._getSpeedMult()),this.audio.chickenSqueeze(),ct.fastMode||this.camera.setTargetZoom(Qe.WARMUP_ZOOM)}_enterDrop(){this.state=ht.DROP,this._stateTimer=0,this._stuckTimer=0,this.chicken.stopWarmup(),this.chicken.lay(),this.audio.eggPop(),this.audio.chickenCluck(),this.camera.shake(5);const e=1+this._playerUpgrades.multi_egg,t=kn.find(a=>a.id==="bounciness"),n=this._playerUpgrades.bounciness*t.effect,s=this.chicken.getDropX(),i=this.chicken.getDropY();this._mainEggs=[];for(let a=0;a<e;a++){const o=e>1?(a-(e-1)/2)*15:0,l=new Ar(s+o,i,this.physics,this.textures.egg,!1,{restitutionBonus:n});this.renderer.scene.add(l.mesh),this._mainEggs.push(l)}this.egg=this._mainEggs[0];for(let a=1;a<this._mainEggs.length;a++)this.particles.emitEggPop(this._mainEggs[a].getX(),-i);this.particles.emitEggPop(s,-i),ct.fastMode||this.camera.setTargetZoom(Qe.DROP_ZOOM_START)}_enterHatch(){this.state=ht.HATCH,this._stateTimer=0,this._wobblePhase=0,this._drumrollTimer=0,this._coinFountainActive=!1,this._landingGold+=this._bonusGold,this._cleanupDuplicates();for(const e of this._mainEggs)e!==this.egg&&e.alive&&e.destroy(this.renderer.scene);this.egg&&this.egg.alive&&this.physics.setStatic(this.egg.body,!0),ct.fastMode||this.camera.setTargetZoom(Qe.HATCH_ZOOM)}_enterTransition(){this.state=ht.TRANSITION,this._stateTimer=0,this._hasPlayedRound=!0,this._roundCount++,this._roundCount===2&&ct.set("fastMode",!0),this._dupliBounceInFlight=!1,this._bonusGold=0,this._cleanupDuplicates(),this.egg&&(this.egg.destroy(this.renderer.scene),this.egg=null),this._mainEggs=[],this.audio.whoosh(),this.chicken.celebrate(),this.camera.transitionTo(0,Qe.OVERVIEW_CENTER_Y,Qe.OVERVIEW_ZOOM,Rn.TRANSITION_DURATION*this._getSpeedMult(),()=>{this._enterIdle()})}update(e){this.chicken.update(e),this.board.update(e,this.particles),this.particles.update(e),this._updateSpecialPegCycle(e);for(const t of this._chickenSlots){if(!t.chicken)continue;t.chicken.update(e).shouldLay&&this._spawnAutoEgg(t.chicken)}for(let t=this._autoEggs.length-1;t>=0;t--){const n=this._autoEggs[t];n.alive&&(n.landed||(n._autoAge+=e,n.update(),this._checkAutoEggStuck(n,e),n._autoAge>20&&this._handleAutoEggFloorLand(n)))}switch(this.state){case ht.IDLE:this._updateIdle(e);break;case ht.WARMUP:this._updateWarmup(e);break;case ht.DROP:this._updateDrop(e);break;case ht.LAND:this._updateLand(e);break;case ht.HATCH:this._updateHatch(e);break;case ht.TRANSITION:this._updateTransition(e);break}this.camera.update(e)}_updateIdle(e){this._hasPlayedRound?(this.camera.followX(0),this.camera.followY(Qe.OVERVIEW_CENTER_Y)):(this.camera.followX(this.chicken.getX()),this.camera.followY(xt.Y_POS)),this._idleDelay-=e,this._idleDelay<=0&&(this._hasPlayedRound?this.hud.showSubtleTapPrompt():this.hud.showTapPrompt())}_updateWarmup(e){this._stateTimer+=e;const t=xt.WARMUP_DURATION*this._getSpeedMult();if(!ct.fastMode){this.camera.followX(this.chicken.getX()),this.camera.followY(xt.Y_POS);const n=Math.min(this._stateTimer/t,1);this.camera.shake(n*n*.8)}this._stateTimer>=t&&this._enterDrop()}_updateDrop(e){const t=this._mainEggs[0];if(!t||!t.alive)return;if(this._stateTimer+=e,this._stateTimer>20){for(const s of this._mainEggs)s.landed||this._handleFloorLand(s);return}for(const s of this._mainEggs)s.alive&&s.update();for(const s of this._duplicateEggs)s.alive&&s.update();const n=t.getSpeed();if(!ct.fastMode){this.camera.followX(t.getX()),this.camera.followY(t.getY());const s=t.getY(),i=Math.max(0,Math.min(1,(s-Qe.BOARD_TOP_Y)/(Qe.BOARD_BOTTOM_Y-Qe.BOARD_TOP_Y))),a=Qe.DROP_ZOOM_MAX+(Qe.DROP_ZOOM_MIN-Qe.DROP_ZOOM_MAX)*i,o=Qe.DROP_ZOOM_MAX-n*Qe.SPEED_ZOOM_FACTOR,l=Math.max(Qe.DROP_ZOOM_MIN,Math.min(Qe.DROP_ZOOM_MAX,o));this.camera.setTargetZoom(Math.min(a,l))}for(const s of this._mainEggs){if(!s.alive||s.landed)continue;const i=s.getVelX(),a=s.getVelY(),o=Math.sqrt(i*i+a*a);if(o>1){const l=Math.min(o*.03,.3),h=Math.atan2(Math.abs(a),Math.abs(i))/(Math.PI/2);s.setSquash(1-l*(1-h)+l*h*.3,1+l*h-l*(1-h)*.3)}else s.setSquash(1,1)}n>1.5&&this.particles.emitTrail(t.getX(),t.body.position.y,n),this._checkStuck(e)}_checkStuck(e){const t=this._mainEggs[0];if(!t||t.landed)return;const n=t.getSpeed(),s=t.getX(),i=Dt.WIDTH/2-Vo;if(n<Go&&Math.abs(s)>i?this._stuckTimer+=e:this._stuckTimer=Math.max(0,this._stuckTimer-e*2),this._stuckTimer>=ko){for(const a of this._mainEggs){if(a.landed)continue;const l=a.getX()>0?-1:1;this.physics.applyForce(a.body,{x:l*Wo,y:Xo})}this.particles.spawnFloatingText(s,-t.getY(),"BLAST OFF!",48,"#FF4400"),this._stuckTimer=0}}_updateLand(e){for(const t of this._duplicateEggs)t.alive&&t.update();if(this._freezeTimer>0){this._freezeTimer-=e,this.egg&&!ct.fastMode&&(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY()));return}if(this._stateTimer+=e,this.egg){const t=Math.min(this._stateTimer/Rn.HATCH_DELAY,1),n=1.3+(1-1.3)*t,s=.7+(1-.7)*t;this.egg.setSquash(n,s),this.egg.update(),ct.fastMode||(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY()))}this._stateTimer>=Rn.HATCH_DELAY&&this._enterHatch()}_updateHatch(e){this._stateTimer+=e;const t=this._getSpeedMult(),n=Rn.WOBBLE_DURATION*t,s=Rn.CRACK_DURATION*t;if(this.egg&&!ct.fastMode&&(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY())),this._stateTimer<n){const i=this._stateTimer/n,a=i*i;if(this._wobblePhase+=e*(20+a*30),this.egg){const l=Math.sin(this._wobblePhase)*(.15+a*.25);this.egg.mesh.rotation.z=l}this.camera.shake(a*Qe.HATCH_SHAKE_MAX),this._drumrollTimer-=e;const o=.15-a*.11;this._drumrollTimer<=0&&(this.audio.drumrollHit(a),this._drumrollTimer=o)}else if(this._stateTimer<n+s)this.egg&&this.egg._crackLines.length===0&&this.egg.showCracks(),this.camera.shake(Qe.HATCH_SHAKE_MAX*.8);else if(this._stateTimer>=n+s&&this.egg&&!this._coinFountainActive){const i=this.egg.getX(),a=-this.egg.getY();this._hatchEggX=i,this._hatchEggY=a,this.hud.screenFlash(),this.audio.hatch(),this.particles.emitHatchExplosion(i,a),this.renderer.setBgBrightness(.15),this.egg.destroy(this.renderer.scene),this.egg=null,this._startCoinFountain(i,a)}if(this._coinFountainActive){const i=this._stateTimer-(n+s);this.renderer.setBgBrightness(Math.max(0,.15-i*.2))}}_startCoinFountain(e,t){if(this._coinFountainActive=!0,this._landingGold<=0){this._coinFountainActive=!1,this.renderer.setBgBrightness(0),this.hud.hideRunGold(),setTimeout(()=>{this.state===ht.HATCH&&this._enterTransition()},300);return}const n=this.renderer.projectToScreen(e,t),s=Math.min(Math.max(Math.ceil(Math.sqrt(this._landingGold)),3),20),i=Math.round(this._landingGold/s);this.hud.spawnCoinFountain(n.x,n.y,s,i,(a,o,l)=>{this.score.collectGold(a),this.hud.setGold(this.score.totalGold),this.audio.coinCollect(o,l)},()=>{this._coinFountainActive=!1,this.renderer.setBgBrightness(0),this.hud.hideRunGold(),setTimeout(()=>{this.state===ht.HATCH&&this._enterTransition()},300)})}_updateTransition(e){this._stateTimer+=e}}const Yo=.15;class dm{constructor(e){this._time=0,this._dir=1,this._laying=!1,this._layTimer=0,this._celebTimer=0,this._flipTimer=0,this._frameIndex=0,this._warmingUp=!1,this._warmupTimer=0,this._warmupDuration=0,this._flyFrames=[e.chickenFly1,e.chickenFly2],this._frames=this._flyFrames,this.group=new Zn,this.group.position.set(0,-105,5),this.group.scale.x=-1;const t=xt.BODY_RADIUS*2.8,n=new mt(t,t),s=new wt({map:this._frames[0],transparent:!0});this.sprite=new it(n,s),this.group.add(this.sprite),this._minX=-390/2+40,this._maxX=Dt.WIDTH/2-40}getX(){return this.group.position.x}getDropX(){return this.group.position.x}getDropY(){return-this.group.position.y+xt.BODY_RADIUS+5}warmup(e,t){this._warmingUp=!0,this._warmupTimer=0,this._warmupDuration=t,this._frames=e,this._frameIndex=0,this._flipTimer=0,this.sprite.material.map=this._frames[0]}stopWarmup(){this._warmingUp=!1,this._warmupTimer=0,this._frames=this._flyFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this.sprite.scale.set(1,1,1),this.sprite.position.x=0}lay(){this._laying=!0,this._layTimer=xt.LAY_DURATION}celebrate(){this._celebTimer=.6}update(e){if(this._time+=e,this._flipTimer+=e,this._flipTimer>=Yo&&(this._flipTimer-=Yo,this._frameIndex=(this._frameIndex+1)%this._frames.length,this.sprite.material.map=this._frames[this._frameIndex]),this._warmingUp){this._warmupTimer+=e;const n=Math.min(this._warmupTimer/this._warmupDuration,1),s=n*n,i=1-.3*s,a=1+.25*s;this.sprite.scale.set(a,i,1);const o=s*1.5*(Math.random()-.5)*2;this.sprite.position.x=o;const l=Math.sin(this._time*xt.BOB_SPEED)*xt.BOB_AMPLITUDE*(1-s*.5);this.group.position.y=-105+l;return}if(this._laying){this._layTimer-=e;const n=1-this._layTimer/xt.LAY_DURATION,s=n<.5?1-.3*(n*2):.7+.3*((n-.5)*2);this.sprite.scale.set(1+(1-s)*.5,s,1),this._layTimer<=0&&(this._laying=!1,this.sprite.scale.set(1,1,1));return}if(this._celebTimer>0){this._celebTimer-=e;const n=Math.sin(this._celebTimer*30)*3;this.group.position.y=-105+n,this._celebTimer<=0&&(this.group.position.y=-105);return}this.group.position.x+=xt.SPEED*this._dir*e,this.group.position.x>this._maxX?(this._dir=-1,this.group.scale.x=1):this.group.position.x<this._minX&&(this._dir=1,this.group.scale.x=-1);const t=Math.sin(this._time*xt.BOB_SPEED)*xt.BOB_AMPLITUDE;this.group.position.y=-105+t}}class pm{constructor(e,t){this.scene=e,this.textures=t,this._clouds=[],this._mountains=[],this._groundDetails=[],this._createGround(),this._createMountains(),this._createClouds(),this._createGroundDetails()}_makeSprite(e,t,n,s,i,a,o=1){const l=new mt(t,n),u=new wt({map:e,transparent:!0,opacity:o,depthWrite:!1}),h=new it(l,u);return h.position.set(s,i,a),this.scene.add(h),h}_createGround(){const t=dn.GROUND_HEIGHT,n=dn.GROUND_WIDTH,s=new wt({color:dn.GROUND_COLOR}),i=new it(new mt(n,t),s);i.position.set(0,-775-t/2,-1),this.scene.add(i);const a=dn.GROUND_TOP_HEIGHT,o=new wt({color:dn.GROUND_TOP_COLOR}),l=new it(new mt(n,a),o);l.position.set(0,-775-a/2,-.9),this.scene.add(l)}_createMountains(){const e=this.textures,t=-775;if(e.mountainsFar){const n=this._makeSprite(e.mountainsFar,550,220,-40,t+100,-4,.7);n._baseY=t+100,n._parallax=dn.MOUNTAIN_PARALLAX*.6,this._mountains.push(n);const s=this._makeSprite(e.mountainsFar,500,190,180,t+80,-4,.5);s.scale.x=-1,s._baseY=t+80,s._parallax=dn.MOUNTAIN_PARALLAX*.6,this._mountains.push(s)}if(e.mountainsNear){const n=this._makeSprite(e.mountainsNear,600,240,0,t+90,-3,.85);n._baseY=t+90,n._parallax=dn.MOUNTAIN_PARALLAX,this._mountains.push(n)}}_createClouds(){const e=this.textures,t=[{key:"cloudLarge",x:-120,gameY:20,w:160,h:80,z:-6,opacity:.9},{key:"cloudMedium",x:100,gameY:60,w:120,h:60,z:-5,opacity:.85},{key:"cloudSmall",x:-60,gameY:130,w:90,h:35,z:-5,opacity:.7},{key:"cloudLarge",x:150,gameY:200,w:130,h:65,z:-6,opacity:.6},{key:"cloudMedium",x:-140,gameY:280,w:100,h:50,z:-5,opacity:.55},{key:"cloudSmall",x:50,gameY:350,w:80,h:30,z:-6,opacity:.45},{key:"cloudSmall",x:-100,gameY:450,w:70,h:28,z:-5,opacity:.35}];for(const n of t){const s=e[n.key];if(!s)continue;const i=-n.gameY,a=this._makeSprite(s,n.w,n.h,n.x,i,n.z,n.opacity);a._baseY=i,this._clouds.push(a)}}_createGroundDetails(){}update(e){const n=e.currentY;for(const s of this._clouds)s.position.y=s._baseY+n*dn.CLOUD_PARALLAX;for(const s of this._mountains)s.position.y=s._baseY+n*s._parallax}}const qo=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#DAA520" stroke-width="4"/><circle cx="50" cy="50" r="36" fill="none" stroke="#DAA520" stroke-width="3"/><text x="50" y="62" text-anchor="middle" font-size="40" font-weight="bold" fill="#B8860B" font-family="Arial">$</text></svg>')}`;class mm{constructor(){this._goldEl=document.getElementById("gold-count"),this._runGoldEl=document.getElementById("run-gold-count"),this._runGoldDisplay=document.getElementById("run-gold-display"),this._comboDisplay=document.getElementById("combo-display"),this._tapPrompt=document.getElementById("tap-prompt"),this._screenFlash=document.getElementById("screen-flash"),this._edgeGlow=document.getElementById("edge-glow"),this._goldPill=document.querySelector(".gold-pill"),this._viewport=document.getElementById("game-viewport"),this._powerupBar=document.getElementById("powerup-bar"),this._powerupBtn=document.getElementById("powerup-dupli-bounce"),this._powerupNameEl=this._powerupBtn.querySelector(".powerup-name"),this._subtleTapPrompt=document.getElementById("tap-prompt-subtle"),this._upgradeToggle=document.getElementById("upgrade-toggle"),this._upgradeBackdrop=document.getElementById("upgrade-backdrop"),this._upgradePanel=document.getElementById("upgrade-panel"),this._upgradeClose=document.getElementById("upgrade-close"),this._autoList=document.getElementById("upgrade-tab-auto"),this._playerList=document.getElementById("upgrade-tab-player"),this._tabBtnPlayer=document.getElementById("tab-btn-player"),this._tabBtnAuto=document.getElementById("tab-btn-auto"),this._goalBar=document.getElementById("goal-bar"),this._goalBarFill=document.getElementById("goal-bar-fill"),this._goalBarMission=document.getElementById("goal-bar-mission"),this._goalBarReward=document.getElementById("goal-bar-reward"),this._goalBarProgress=document.getElementById("goal-bar-progress"),this._settingsBtn=document.getElementById("settings-btn"),this._settingsPanel=document.getElementById("settings-panel"),this._settingsClose=document.getElementById("settings-close"),this._settingRows={fastMode:document.getElementById("setting-fast-mode"),sfxEnabled:document.getElementById("setting-sfx"),musicEnabled:document.getElementById("setting-music")},this._panelOpen=!1,this._settingsPanelOpen=!1,this._activeTab="player",this._upgradeRows={},this._playerRows={},this._upgradeCallback=null,this._playerUpgradeCallback=null,this._flyingCoinCount=0,this._upgradeToggle.addEventListener("pointerdown",e=>{e.stopPropagation(),this.openUpgradePanel()}),this._upgradeClose.addEventListener("pointerdown",e=>{e.stopPropagation(),this.closeUpgradePanel()}),this._upgradeBackdrop.addEventListener("pointerdown",e=>{e.stopPropagation(),this.closeUpgradePanel(),this.closeSettingsPanel()}),this._settingsBtn.addEventListener("pointerdown",e=>{e.stopPropagation(),this.openSettingsPanel()}),this._settingsClose.addEventListener("pointerdown",e=>{e.stopPropagation(),this.closeSettingsPanel()}),this._goalBar.addEventListener("pointerdown",e=>{e.stopPropagation(),this.openUpgradePanel()}),this._tabBtnPlayer.addEventListener("pointerdown",e=>{e.stopPropagation(),this._switchTab("player")}),this._tabBtnAuto.addEventListener("pointerdown",e=>{e.stopPropagation(),this._switchTab("auto")}),this._switchTab("player")}_switchTab(e){this._activeTab=e,e==="player"?(this._tabBtnPlayer.classList.add("active"),this._tabBtnAuto.classList.remove("active"),this._playerList.style.display="",this._autoList.style.display="none"):(this._tabBtnAuto.classList.add("active"),this._tabBtnPlayer.classList.remove("active"),this._autoList.style.display="",this._playerList.style.display="none")}setGold(e){this._goldEl.textContent=e}throbGold(){this._goldPill.classList.remove("throb"),this._goldPill.offsetWidth,this._goldPill.classList.add("throb"),setTimeout(()=>this._goldPill.classList.remove("throb"),120)}setRunGold(e){this._runGoldEl.textContent=e,this._runGoldDisplay.classList.add("visible")}setCombo(e){e>1?(this._comboDisplay.textContent=`x${e}`,this._comboDisplay.classList.add("visible"),this._comboDisplay.style.transform=`translateX(-50%) scale(${1+e*.05})`):this._comboDisplay.classList.remove("visible")}setEdgeGlow(e){this._edgeGlow.style.opacity=Math.min(e,1)}showTapPrompt(){this._tapPrompt.classList.add("visible")}hideTapPrompt(){this._tapPrompt.classList.remove("visible")}showSubtleTapPrompt(){this._subtleTapPrompt.classList.add("visible")}hideSubtleTapPrompt(){this._subtleTapPrompt.classList.remove("visible")}hideRunGold(){this._runGoldDisplay.classList.remove("visible"),this._comboDisplay.classList.remove("visible"),this._edgeGlow.style.opacity=0}spawnFlyingCoin(e,t){if(this._flyingCoinCount>=6)return;const n=this._goldPill.getBoundingClientRect(),s=this._viewport.getBoundingClientRect(),i=n.left+n.width/2-s.left,a=n.top+n.height/2-s.top,o=document.createElement("div");o.className="flying-coin-mini",o.style.left=`${e-7}px`,o.style.top=`${t-7}px`,this._viewport.appendChild(o),this._flyingCoinCount++;const l=i-e,u=a-t;requestAnimationFrame(()=>{const h=o.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${l}px, ${u}px) scale(0.4)`,opacity:.7}],{duration:250,easing:"ease-in",fill:"forwards"});h.onfinish=()=>{o.remove(),this._flyingCoinCount--,this.throbGold()}})}showGoalBar(){this._goalBar.classList.add("visible")}hideGoalBar(){this._goalBar.classList.remove("visible")}updateGoalBar({emoji:e,name:t,current:n,target:s}){if(!s||s===1/0){this.hideGoalBar();return}const i=n>=s;this._goalBarMission.textContent=i?"READY!":`Save up ${s}g`,this._goalBarReward.textContent=`${e} ${t}`,this._goalBarProgress.textContent=`${n} / ${s}g`;const a=Math.min(n/s,1)*100;this._goalBarFill.style.width=`${a}%`,this._goalBar.classList.toggle("goal-ready",i),this.showGoalBar()}screenFlash(e=.15){this._screenFlash.style.opacity=.6,setTimeout(()=>{this._screenFlash.style.transition=`opacity ${e}s ease`,this._screenFlash.style.opacity=0},30),setTimeout(()=>{this._screenFlash.style.transition="opacity 0.1s ease"},e*1e3+50)}showPowerupButton(e){this._powerupBar.classList.add("visible"),this.updatePowerupAffordability(e),this.setPowerupIdle()}hidePowerupButton(){this._powerupBar.classList.remove("visible")}setPowerupActive(){this._powerupBtn.classList.remove("disabled"),this._powerupBtn.classList.add("active"),this._powerupNameEl.textContent="ACTIVE!"}setPowerupIdle(){this._powerupBtn.classList.remove("active"),this._powerupNameEl.textContent="Dupli-Bounce!"}updatePowerupAffordability(e){e?this._powerupBtn.classList.remove("disabled"):this._powerupBtn.classList.add("disabled")}onPowerupClick(e){this._powerupBtn.addEventListener("pointerdown",t=>{t.stopPropagation(),e()})}showUpgradeToggle(){this._upgradeToggle.classList.add("visible")}hideUpgradeToggle(){this._upgradeToggle.classList.remove("visible")}pulseUpgradeToggle(){this._upgradeToggle.classList.remove("pulse"),this._upgradeToggle.offsetWidth,this._upgradeToggle.classList.add("pulse"),this._upgradeToggle.addEventListener("animationend",()=>{this._upgradeToggle.classList.remove("pulse")},{once:!0})}setUpgradeToggleHighlight(e){e?this._upgradeToggle.classList.add("can-afford"):this._upgradeToggle.classList.remove("can-afford")}openUpgradePanel(){this._panelOpen||(this._panelOpen=!0,this._upgradePanel.classList.add("open"),this._upgradeBackdrop.classList.add("open"))}closeUpgradePanel(){this._panelOpen&&(this._panelOpen=!1,this._upgradePanel.classList.remove("open"),this._upgradeBackdrop.classList.remove("open"))}isPanelOpen(){return this._panelOpen||this._settingsPanelOpen}showSettingsBtn(){this._settingsBtn.classList.add("visible")}hideSettingsBtn(){this._settingsBtn.classList.remove("visible")}openSettingsPanel(){this._settingsPanelOpen||(this._settingsPanelOpen=!0,this._settingsPanel.classList.add("open"),this._upgradeBackdrop.classList.add("open"))}closeSettingsPanel(){this._settingsPanelOpen&&(this._settingsPanelOpen=!1,this._settingsPanel.classList.remove("open"),this._panelOpen||this._upgradeBackdrop.classList.remove("open"))}initSettingsToggles(e){for(const[t,n]of Object.entries(this._settingRows)){n.querySelector(".settings-toggle");const s=i=>{i.stopPropagation(),e.toggle(t)};n.addEventListener("pointerdown",s)}this.syncSettingsToggles(e)}syncSettingsToggles(e){for(const[t,n]of Object.entries(this._settingRows)){const s=n.querySelector(".settings-toggle");e[t]?s.classList.add("on"):s.classList.remove("on")}}initPlayerUpgradeRows(e){this._playerList.innerHTML="";for(const t of e){const n=document.createElement("div");n.className="upgrade-item",n.dataset.type=t.id,n.innerHTML=`
        <div class="upgrade-item-icon">${t.emoji}</div>
        <div class="upgrade-item-info">
          <span class="upgrade-item-name">${t.name}</span>
          <span class="upgrade-item-desc">${t.description}</span>
          <span class="upgrade-item-level"></span>
        </div>
        <button class="upgrade-item-buy" data-type="${t.id}">
          <img class="buy-coin" src="${qo}" alt="" />
          <span class="buy-price">${t.baseCost}</span>
        </button>
      `;const s=n.querySelector(".upgrade-item-buy");s.addEventListener("pointerdown",i=>{i.stopPropagation(),this._playerUpgradeCallback&&this._playerUpgradeCallback(t.id)}),this._playerList.appendChild(n),this._playerRows[t.id]={row:n,btn:s,priceEl:n.querySelector(".buy-price"),levelEl:n.querySelector(".upgrade-item-level")}}}updatePlayerUpgradeRow(e,t){const n=this._playerRows[e];n&&(t.level>=t.maxLevel?(n.priceEl.textContent="MAX",n.btn.querySelector(".buy-coin").style.display="none",n.levelEl.textContent=`Lv.${t.level}`,n.btn.disabled=!0,n.btn.classList.add("locked")):(n.priceEl.textContent=t.cost,n.btn.querySelector(".buy-coin").style.display="",n.levelEl.textContent=t.level>0?`Lv.${t.level}`:"",n.btn.disabled=!1,n.btn.classList.remove("locked")),t.canAfford&&!n.btn.disabled?n.btn.classList.remove("cannot-afford"):n.btn.classList.add("cannot-afford"))}onPlayerUpgradeRowClick(e){this._playerUpgradeCallback=e}initUpgradeRows(e){this._autoList.innerHTML="";for(const t of e){const n=document.createElement("div");n.className="upgrade-item",n.dataset.type=t.id,n.style.display="none",n.innerHTML=`
        <div class="upgrade-item-icon">${t.emoji}</div>
        <div class="upgrade-item-info">
          <span class="upgrade-item-name">${t.name}</span>
          <span class="upgrade-item-desc">${t.description}</span>
          <span class="upgrade-item-level"></span>
        </div>
        <button class="upgrade-item-buy" data-type="${t.id}">
          <img class="buy-coin" src="${qo}" alt="" />
          <span class="buy-price">${t.baseCost}</span>
        </button>
      `;const s=n.querySelector(".upgrade-item-buy");s.addEventListener("pointerdown",i=>{i.stopPropagation(),this._upgradeCallback&&this._upgradeCallback(t.id)}),this._autoList.appendChild(n),this._upgradeRows[t.id]={row:n,btn:s,priceEl:n.querySelector(".buy-price"),levelEl:n.querySelector(".upgrade-item-level"),descEl:n.querySelector(".upgrade-item-desc")}}}revealUpgradeRow(e){const t=this._upgradeRows[e];t&&(t.row.style.display="")}updateUpgradeRow(e,t){const n=this._upgradeRows[e];n&&(t.owned?t.level>=t.maxLevel?(n.priceEl.textContent="MAX",n.btn.querySelector(".buy-coin").style.display="none",n.levelEl.textContent=`Lv.${t.level}`,n.btn.disabled=!0,n.btn.classList.add("locked")):(n.priceEl.textContent=t.cost,n.btn.querySelector(".buy-coin").style.display="",n.levelEl.textContent=`Lv.${t.level}`,n.btn.disabled=!1,n.btn.classList.remove("locked")):(n.priceEl.textContent=t.cost,n.levelEl.textContent="",n.btn.disabled=!1,n.btn.classList.remove("locked")),t.canAfford&&!n.btn.disabled?n.btn.classList.remove("cannot-afford"):n.btn.classList.add("cannot-afford"))}onUpgradeRowClick(e){this._upgradeCallback=e}spawnCoinFountain(e,t,n,s,i,a){const o=this._goldPill.getBoundingClientRect(),l=this._viewport.getBoundingClientRect(),u=o.left+o.width/2-l.left,h=o.top+o.height/2-l.top,d=[];for(let p=0;p<n;p++){const _=document.createElement("div");_.className="flying-coin",_.style.left=`${e-10}px`,_.style.top=`${t-10}px`,_.style.transform="translate(0, 0) scale(1)",this._viewport.appendChild(_),d.push(_)}requestAnimationFrame(()=>{for(const p of d){const _=Math.random()*Math.PI*2,E=40+Math.random()*60,T=Math.cos(_)*E,A=Math.sin(_)*E-20;p.style.transform=`translate(${T}px, ${A}px) scale(1.1)`}});const f=700,c=100,m=350;let g=0;setTimeout(()=>{d.forEach((p,_)=>{setTimeout(()=>{const E=p.getBoundingClientRect(),T=E.left+E.width/2-l.left,A=E.top+E.height/2-l.top;p.style.transition="none",p.style.left=`${T-10}px`,p.style.top=`${A-10}px`,p.style.transform="translate(0, 0) scale(1)";const x=u-T,y=h-A,M=p.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${x*.5}px, ${y*.5-30}px) scale(0.8)`,opacity:1,offset:.5},{transform:`translate(${x}px, ${y}px) scale(0.3)`,opacity:.8}],{duration:m,easing:"ease-in",fill:"forwards"});M.onfinish=()=>{p.remove(),g++,i(s,g,n),this.throbGold(),g>=n&&a&&a()}},_*c)})},f)}}async function gm(){const r=await sm.loadAll(),e=document.getElementById("game"),t=new $p(e),n=new Qp,s=new em(t.camera),i=new tm(t.getCanvas()),a=new nm;await a.loadSound("chickenCluck","sounds/SFX_ChickenCluck.ogg"),await a.loadSound("chickenSqueeze1","sounds/SFX_Branny_ChickenSqueeze01.ogg"),await a.loadSound("chickenSqueeze2","sounds/SFX_Branny_ChickenSqueeze02.ogg"),await a.loadSound("chickenSqueeze3","sounds/SFX_Branny_ChickenSqueeze03.ogg");const o=new lm,l=new hm(t.scene),u=new om(t.scene,n),h=new pm(t.scene,r),d=new dm(r);t.scene.add(d.group);const f=new mm;f.initSettingsToggles(ct),ct.onChange(p=>f.syncSettingsToggles(p)),document.getElementById("version-label").textContent=qp.toString();const c=new fm({renderer:t,physics:n,camera:s,board:u,chicken:d,scoreManager:o,particleSystem:l,hud:f,audio:a,input:i,textures:r});let m=-1;function g(p){if(requestAnimationFrame(g),m<0){m=p;return}const _=Math.min((p-m)/1e3,1/20);m=p,n.update(_),c.update(_),h.update(s),t.render()}requestAnimationFrame(g)}gm();
