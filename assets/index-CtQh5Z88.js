(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="172",Nl=0,Oa=1,Ol=2,Zo=1,Bl=2,pn=3,Un=0,Fe=1,mn=2,Pn=0,Ei=1,wr=2,Ba=3,za=4,zl=5,Yn=100,Hl=101,Gl=102,kl=103,Vl=104,Wl=200,Xl=201,Yl=202,ql=203,Cr=204,Rr=205,$l=206,Zl=207,Kl=208,jl=209,Jl=210,Ql=211,tc=212,ec=213,nc=214,Pr=0,Lr=1,Dr=2,bi=3,Ir=4,Ur=5,Fr=6,Nr=7,Ko=0,ic=1,sc=2,Ln=0,rc=1,ac=2,oc=3,lc=4,cc=5,hc=6,uc=7,jo=300,wi=301,Ci=302,Or=303,Br=304,ks=306,zr=1e3,$n=1001,Hr=1002,en=1003,fc=1004,es=1005,Ge=1006,Ys=1007,Zn=1008,xn=1009,Jo=1010,Qo=1011,Xi=1012,xa=1013,Jn=1014,gn=1015,$i=1016,Sa=1017,ya=1018,Ri=1020,tl=35902,el=1021,nl=1022,tn=1023,il=1024,sl=1025,Ti=1026,Pi=1027,rl=1028,Ma=1029,al=1030,Ea=1031,Ta=1033,Ps=33776,Ls=33777,Ds=33778,Is=33779,Gr=35840,kr=35841,Vr=35842,Wr=35843,Xr=36196,Yr=37492,qr=37496,$r=37808,Zr=37809,Kr=37810,jr=37811,Jr=37812,Qr=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,Us=36492,la=36494,ca=36495,ol=36283,ha=36284,ua=36285,fa=36286,dc=3200,pc=3201,mc=0,gc=1,Rn="",He="srgb",Li="srgb-linear",Os="linear",Qt="srgb",ni=7680,Ha=519,_c=512,vc=513,xc=514,ll=515,Sc=516,yc=517,Mc=518,Ec=519,da=35044,Ga="300 es",_n=2e3,Bs=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const i=s.indexOf(e);i!==-1&&s.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let i=0,a=s.length;i<a;i++)s[i].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,pa=180/Math.PI;function Dn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[r&255]+Me[r>>8&255]+Me[r>>16&255]+Me[r>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function Ht(r,t,e){return Math.max(t,Math.min(e,r))}function Tc(r,t){return(r%t+t)%t}function $s(r,t,e){return(1-e)*r+e*t}function an(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*n-a*s+t.x,this.y=i*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,i,a,o,l,u){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,o,l,u)}set(t,e,n,s,i,a,o,l,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=i,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],d=n[7],f=n[2],c=n[5],m=n[8],g=s[0],p=s[3],_=s[6],E=s[1],T=s[4],A=s[7],x=s[2],y=s[5],M=s[8];return i[0]=a*g+o*E+l*x,i[3]=a*p+o*T+l*y,i[6]=a*_+o*A+l*M,i[1]=u*g+h*E+d*x,i[4]=u*p+h*T+d*y,i[7]=u*_+h*A+d*M,i[2]=f*g+c*E+m*x,i[5]=f*p+c*T+m*y,i[8]=f*_+c*A+m*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*i*h+n*o*l+s*i*u-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=h*a-o*u,f=o*l-h*i,c=u*i-a*l,m=e*d+n*f+s*c;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=d*g,t[1]=(s*u-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*i-o*e)*g,t[6]=c*g,t[7]=(n*l-u*e)*g,t[8]=(a*e-n*i)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,i,a,o){const l=Math.cos(i),u=Math.sin(i);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-s*u,s*l,-s*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zs.makeScale(t,e)),this}rotate(t){return this.premultiply(Zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new It;function cl(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Yi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ac(){const r=Yi("canvas");return r.style.display="block",r}const ka={};function yi(r){r in ka||(ka[r]=!0,console.warn(r))}function bc(r,t,e){return new Promise(function(n,s){function i(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(i,e);break;default:n()}}setTimeout(i,e)})}function wc(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cc(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Va=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wa=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rc(){const r={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(s,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===Qt&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[i].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},fromWorkingColorSpace:function(s,i){return this.convert(s,this.workingColorSpace,i)},toWorkingColorSpace:function(s,i){return this.convert(s,i,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Os:this.spaces[s].transfer},getLuminanceCoefficients:function(s,i=this.workingColorSpace){return s.fromArray(this.spaces[i].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,i,a){return s.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Li]:{primaries:t,whitePoint:n,transfer:Os,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Va,fromXYZ:Wa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),r}const qt=Rc();function vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ai(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ii;class Pc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Yi("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),i=s.data;for(let a=0;a<i.length;a++)i[a]=vn(i[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lc=0;class hl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lc++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let i;if(Array.isArray(s)){i=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?i.push(Ks(s[a].image)):i.push(Ks(s[a]))}else i=Ks(s);n.url=i}return e||(t.images[this.uuid]=n),n}}function Ks(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dc=0;class Ae extends Ii{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=$n,s=$n,i=Ge,a=Zn,o=tn,l=xn,u=Ae.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Dn(),this.name="",this.source=new hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zr:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zr:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=jo;Ae.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*i,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*i,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*i,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,i;const l=t.elements,u=l[0],h=l[4],d=l[8],f=l[1],c=l[5],m=l[9],g=l[2],p=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+p)<.1&&Math.abs(u+c+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(u+1)/2,A=(c+1)/2,x=(_+1)/2,y=(h+f)/4,M=(d+g)/4,b=(m+p)/4;return T>A&&T>x?T<.01?(n=0,s=.707106781,i=.707106781):(n=Math.sqrt(T),s=y/n,i=M/n):A>x?A<.01?(n=.707106781,s=0,i=.707106781):(s=Math.sqrt(A),n=y/s,i=b/s):x<.01?(n=.707106781,s=.707106781,i=0):(i=Math.sqrt(x),n=M/i,s=b/i),this.set(n,s,i,e),this}let E=Math.sqrt((p-m)*(p-m)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(d-g)/E,this.z=(f-h)/E,this.w=Math.acos((u+c+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ic extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const i=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,i=this.textures.length;s<i;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new hl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ul extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uc extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,i,a,o){let l=n[s+0],u=n[s+1],h=n[s+2],d=n[s+3];const f=i[a+0],c=i[a+1],m=i[a+2],g=i[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=c,t[e+2]=m,t[e+3]=g;return}if(d!==g||l!==f||u!==c||h!==m){let p=1-o;const _=l*f+u*c+h*m+d*g,E=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const x=Math.sqrt(T),y=Math.atan2(x,_*E);p=Math.sin(p*y)/x,o=Math.sin(o*y)/x}const A=o*E;if(l=l*p+f*A,u=u*p+c*A,h=h*p+m*A,d=d*p+g*A,p===1-o){const x=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=x,u*=x,h*=x,d*=x}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,i,a){const o=n[s],l=n[s+1],u=n[s+2],h=n[s+3],d=i[a],f=i[a+1],c=i[a+2],m=i[a+3];return t[e]=o*m+h*d+l*c-u*f,t[e+1]=l*m+h*f+u*d-o*c,t[e+2]=u*m+h*c+o*f-l*d,t[e+3]=h*m-o*d-l*f-u*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,i=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(s/2),d=o(i/2),f=l(n/2),c=l(s/2),m=l(i/2);switch(a){case"XYZ":this._x=f*h*d+u*c*m,this._y=u*c*d-f*h*m,this._z=u*h*m+f*c*d,this._w=u*h*d-f*c*m;break;case"YXZ":this._x=f*h*d+u*c*m,this._y=u*c*d-f*h*m,this._z=u*h*m-f*c*d,this._w=u*h*d+f*c*m;break;case"ZXY":this._x=f*h*d-u*c*m,this._y=u*c*d+f*h*m,this._z=u*h*m+f*c*d,this._w=u*h*d-f*c*m;break;case"ZYX":this._x=f*h*d-u*c*m,this._y=u*c*d+f*h*m,this._z=u*h*m-f*c*d,this._w=u*h*d+f*c*m;break;case"YZX":this._x=f*h*d+u*c*m,this._y=u*c*d+f*h*m,this._z=u*h*m-f*c*d,this._w=u*h*d-f*c*m;break;case"XZY":this._x=f*h*d-u*c*m,this._y=u*c*d-f*h*m,this._z=u*h*m+f*c*d,this._w=u*h*d+f*c*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],i=e[8],a=e[1],o=e[5],l=e[9],u=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const c=.5/Math.sqrt(f+1);this._w=.25/c,this._x=(h-l)*c,this._y=(i-u)*c,this._z=(a-s)*c}else if(n>o&&n>d){const c=2*Math.sqrt(1+n-o-d);this._w=(h-l)/c,this._x=.25*c,this._y=(s+a)/c,this._z=(i+u)/c}else if(o>d){const c=2*Math.sqrt(1+o-n-d);this._w=(i-u)/c,this._x=(s+a)/c,this._y=.25*c,this._z=(l+h)/c}else{const c=2*Math.sqrt(1+d-n-o);this._w=(a-s)/c,this._x=(i+u)/c,this._y=(l+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,i=t._z,a=t._w,o=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-i*l,this._y=s*h+a*l+i*o-n*u,this._z=i*h+a*u+n*l-s*o,this._w=a*h-n*o-s*l-i*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,i=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+i*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const c=1-e;return this._w=c*a+e*this._w,this._x=c*n+e*this._x,this._y=c*s+e*this._y,this._z=c*i+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),d=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=i*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*s,this.y=i[1]*e+i[4]*n+i[7]*s,this.z=i[2]*e+i[5]*n+i[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*s+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*s+i[12])*a,this.y=(i[1]*e+i[5]*n+i[9]*s+i[13])*a,this.z=(i[2]*e+i[6]*n+i[10]*s+i[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,i=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*s-o*n),h=2*(o*e-i*s),d=2*(i*n-a*e);return this.x=e+l*u+a*d-o*h,this.y=n+l*h+o*u-i*d,this.z=s+l*d+i*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*s,this.y=i[1]*e+i[5]*n+i[9]*s,this.z=i[2]*e+i[6]*n+i[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,i=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-i*o,this.y=i*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return js.copy(this).projectOnVector(t),this.sub(js)}reflect(t){return this.sub(js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new k,Xa=new Zi;class Ki{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const i=n.getAttribute("position");if(e===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ze):Ze.fromBufferAttribute(i,a),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(t.matrixWorld),this.union(ns)}const s=t.children;for(let i=0,a=s.length;i<a;i++)this.expandByObject(s[i],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),is.subVectors(this.max,Ni),si.subVectors(t.a,Ni),ri.subVectors(t.b,Ni),ai.subVectors(t.c,Ni),Mn.subVectors(ri,si),En.subVectors(ai,ri),On.subVectors(si,ai);let e=[0,-Mn.z,Mn.y,0,-En.z,En.y,0,-On.z,On.y,Mn.z,0,-Mn.x,En.z,0,-En.x,On.z,0,-On.x,-Mn.y,Mn.x,0,-En.y,En.x,0,-On.y,On.x,0];return!Js(e,si,ri,ai,is)||(e=[1,0,0,0,1,0,0,0,1],!Js(e,si,ri,ai,is))?!1:(ss.crossVectors(Mn,En),e=[ss.x,ss.y,ss.z],Js(e,si,ri,ai,is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new k,new k,new k,new k,new k,new k,new k,new k],Ze=new k,ns=new Ki,si=new k,ri=new k,ai=new k,Mn=new k,En=new k,On=new k,Ni=new k,is=new k,ss=new k,Bn=new k;function Js(r,t,e,n,s){for(let i=0,a=r.length-3;i<=a;i+=3){Bn.fromArray(r,i);const o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=t.dot(Bn),u=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Fc=new Ki,Oi=new k,Qs=new k;class ji{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fc.setFromPoints(t).getCenter(n);let s=0;for(let i=0,a=t.length;i<a;i++)s=Math.max(s,n.distanceToSquared(t[i]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);const e=Oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Oi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(Qs)),this.expandByPoint(Oi.copy(t.center).sub(Qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new k,tr=new k,rs=new k,Tn=new k,er=new k,as=new k,nr=new k;class Aa{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tr.copy(t).add(e).multiplyScalar(.5),rs.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(tr);const i=t.distanceTo(e)*.5,a=-this.direction.dot(rs),o=Tn.dot(this.direction),l=-Tn.dot(rs),u=Tn.lengthSq(),h=Math.abs(1-a*a);let d,f,c,m;if(h>0)if(d=a*l-o,f=a*o-l,m=i*h,d>=0)if(f>=-m)if(f<=m){const g=1/h;d*=g,f*=g,c=d*(d+a*f+2*o)+f*(a*d+f+2*l)+u}else f=i,d=Math.max(0,-(a*f+o)),c=-d*d+f*(f+2*l)+u;else f=-i,d=Math.max(0,-(a*f+o)),c=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-a*i+o)),f=d>0?-i:Math.min(Math.max(-i,-l),i),c=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-i,-l),i),c=f*(f+2*l)+u):(d=Math.max(0,-(a*i+o)),f=d>0?i:Math.min(Math.max(-i,-l),i),c=-d*d+f*(f+2*l)+u);else f=a>0?-i:i,d=Math.max(0,-(a*f+o)),c=-d*d+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tr).addScaledVector(rs,f),c}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,i=t.radius*t.radius;if(s>i)return null;const a=Math.sqrt(i-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,i,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),h>=0?(i=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(i=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||i>s||((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,s,i){er.subVectors(e,t),as.subVectors(n,t),nr.crossVectors(er,as);let a=this.direction.dot(nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const l=o*this.direction.dot(as.crossVectors(Tn,as));if(l<0)return null;const u=o*this.direction.dot(er.cross(Tn));if(u<0||l+u>a)return null;const h=-o*Tn.dot(nr);return h<0?null:this.at(h/a,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,i,a,o,l,u,h,d,f,c,m,g,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,i,a,o,l,u,h,d,f,c,m,g,p)}set(t,e,n,s,i,a,o,l,u,h,d,f,c,m,g,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=i,_[5]=a,_[9]=o,_[13]=l,_[2]=u,_[6]=h,_[10]=d,_[14]=f,_[3]=c,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),i=1/oi.setFromMatrixColumn(t,1).length(),a=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*i,e[5]=n[5]*i,e[6]=n[6]*i,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,i=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(i),d=Math.sin(i);if(t.order==="XYZ"){const f=a*h,c=a*d,m=o*h,g=o*d;e[0]=l*h,e[4]=-l*d,e[8]=u,e[1]=c+m*u,e[5]=f-g*u,e[9]=-o*l,e[2]=g-f*u,e[6]=m+c*u,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,c=l*d,m=u*h,g=u*d;e[0]=f+g*o,e[4]=m*o-c,e[8]=a*u,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=c*o-m,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,c=l*d,m=u*h,g=u*d;e[0]=f-g*o,e[4]=-a*d,e[8]=m+c*o,e[1]=c+m*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,c=a*d,m=o*h,g=o*d;e[0]=l*h,e[4]=m*u-c,e[8]=f*u+g,e[1]=l*d,e[5]=g*u+f,e[9]=c*u-m,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,c=a*u,m=o*l,g=o*u;e[0]=l*h,e[4]=g-f*d,e[8]=m*d+c,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=c*d+m,e[10]=f-g*d}else if(t.order==="XZY"){const f=a*l,c=a*u,m=o*l,g=o*u;e[0]=l*h,e[4]=-d,e[8]=u*h,e[1]=f*d+g,e[5]=a*h,e[9]=c*d-m,e[2]=m*d-c,e[6]=o*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nc,t,Oc)}lookAt(t,e,n){const s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),An.crossVectors(n,Be),An.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),An.crossVectors(n,Be)),An.normalize(),os.crossVectors(Be,An),s[0]=An.x,s[4]=os.x,s[8]=Be.x,s[1]=An.y,s[5]=os.y,s[9]=Be.y,s[2]=An.z,s[6]=os.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,i=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],d=n[5],f=n[9],c=n[13],m=n[2],g=n[6],p=n[10],_=n[14],E=n[3],T=n[7],A=n[11],x=n[15],y=s[0],M=s[4],b=s[8],S=s[12],v=s[1],w=s[5],P=s[9],D=s[13],U=s[2],F=s[6],z=s[10],G=s[14],H=s[3],j=s[7],it=s[11],ct=s[15];return i[0]=a*y+o*v+l*U+u*H,i[4]=a*M+o*w+l*F+u*j,i[8]=a*b+o*P+l*z+u*it,i[12]=a*S+o*D+l*G+u*ct,i[1]=h*y+d*v+f*U+c*H,i[5]=h*M+d*w+f*F+c*j,i[9]=h*b+d*P+f*z+c*it,i[13]=h*S+d*D+f*G+c*ct,i[2]=m*y+g*v+p*U+_*H,i[6]=m*M+g*w+p*F+_*j,i[10]=m*b+g*P+p*z+_*it,i[14]=m*S+g*D+p*G+_*ct,i[3]=E*y+T*v+A*U+x*H,i[7]=E*M+T*w+A*F+x*j,i[11]=E*b+T*P+A*z+x*it,i[15]=E*S+T*D+A*G+x*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],i=t[12],a=t[1],o=t[5],l=t[9],u=t[13],h=t[2],d=t[6],f=t[10],c=t[14],m=t[3],g=t[7],p=t[11],_=t[15];return m*(+i*l*d-s*u*d-i*o*f+n*u*f+s*o*c-n*l*c)+g*(+e*l*c-e*u*f+i*a*f-s*a*c+s*u*h-i*l*h)+p*(+e*u*d-e*o*c-i*a*d+n*a*c+i*o*h-n*u*h)+_*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],i=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=t[9],f=t[10],c=t[11],m=t[12],g=t[13],p=t[14],_=t[15],E=d*p*u-g*f*u+g*l*c-o*p*c-d*l*_+o*f*_,T=m*f*u-h*p*u-m*l*c+a*p*c+h*l*_-a*f*_,A=h*g*u-m*d*u+m*o*c-a*g*c-h*o*_+a*d*_,x=m*d*l-h*g*l-m*o*f+a*g*f+h*o*p-a*d*p,y=e*E+n*T+s*A+i*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/y;return t[0]=E*M,t[1]=(g*f*i-d*p*i-g*s*c+n*p*c+d*s*_-n*f*_)*M,t[2]=(o*p*i-g*l*i+g*s*u-n*p*u-o*s*_+n*l*_)*M,t[3]=(d*l*i-o*f*i-d*s*u+n*f*u+o*s*c-n*l*c)*M,t[4]=T*M,t[5]=(h*p*i-m*f*i+m*s*c-e*p*c-h*s*_+e*f*_)*M,t[6]=(m*l*i-a*p*i-m*s*u+e*p*u+a*s*_-e*l*_)*M,t[7]=(a*f*i-h*l*i+h*s*u-e*f*u-a*s*c+e*l*c)*M,t[8]=A*M,t[9]=(m*d*i-h*g*i-m*n*c+e*g*c+h*n*_-e*d*_)*M,t[10]=(a*g*i-m*o*i+m*n*u-e*g*u-a*n*_+e*o*_)*M,t[11]=(h*o*i-a*d*i-h*n*u+e*d*u+a*n*c-e*o*c)*M,t[12]=x*M,t[13]=(h*g*s-m*d*s+m*n*f-e*g*f-h*n*p+e*d*p)*M,t[14]=(m*o*s-a*g*s-m*n*l+e*g*l+a*n*p-e*o*p)*M,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*M,this}scale(t){const e=this.elements,n=t.x,s=t.y,i=t.z;return e[0]*=n,e[4]*=s,e[8]*=i,e[1]*=n,e[5]*=s,e[9]*=i,e[2]*=n,e[6]*=s,e[10]*=i,e[3]*=n,e[7]*=s,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),i=1-n,a=t.x,o=t.y,l=t.z,u=i*a,h=i*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,h*o+n,h*l-s*a,0,u*l-s*o,h*l+s*a,i*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,i,a){return this.set(1,n,i,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,i=e._x,a=e._y,o=e._z,l=e._w,u=i+i,h=a+a,d=o+o,f=i*u,c=i*h,m=i*d,g=a*h,p=a*d,_=o*d,E=l*u,T=l*h,A=l*d,x=n.x,y=n.y,M=n.z;return s[0]=(1-(g+_))*x,s[1]=(c+A)*x,s[2]=(m-T)*x,s[3]=0,s[4]=(c-A)*y,s[5]=(1-(f+_))*y,s[6]=(p+E)*y,s[7]=0,s[8]=(m+T)*M,s[9]=(p-E)*M,s[10]=(1-(f+g))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let i=oi.set(s[0],s[1],s[2]).length();const a=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const u=1/i,h=1/a,d=1/o;return Ke.elements[0]*=u,Ke.elements[1]*=u,Ke.elements[2]*=u,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=i,n.y=a,n.z=o,this}makePerspective(t,e,n,s,i,a,o=_n){const l=this.elements,u=2*i/(e-t),h=2*i/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let c,m;if(o===_n)c=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===Bs)c=-a/(a-i),m=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,i,a,o=_n){const l=this.elements,u=1/(e-t),h=1/(n-s),d=1/(a-i),f=(e+t)*u,c=(n+s)*h;let m,g;if(o===_n)m=(a+i)*d,g=-2*d;else if(o===Bs)m=i*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oi=new k,Ke=new oe,Nc=new k(0,0,0),Oc=new k(1,1,1),An=new k,os=new k,Be=new k,Ya=new oe,qa=new Zi;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,i=s[0],a=s[4],o=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,c),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,c),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,c),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,c),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(o,c));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ya.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ya,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bc=0;const $a=new k,li=new Zi,hn=new oe,ls=new k,Bi=new k,zc=new k,Hc=new Zi,Za=new k(1,0,0),Ka=new k(0,1,0),ja=new k(0,0,1),Ja={type:"added"},Gc={type:"removed"},ci={type:"childadded",child:null},ir={type:"childremoved",child:null};class be extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new k,e=new Sn,n=new Zi,s=new k(1,1,1);function i(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new It}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis(ja,t)}translateOnAxis(t,e){return $a.copy(t).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis(ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ls.copy(t):ls.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Bi,ls,this.up):hn.lookAt(ls,Bi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(hn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gc),ir.child=t,this.dispatchEvent(ir),ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,t,zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Hc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let i=0,a=s.length;i<a;i++)s[i].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=i(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];i(t.shapes,d)}else i(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(i(t.materials,this.material[l]));s.material=o}else s.material=i(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(i(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),c=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),c.length>0&&(n.animations=c),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new k(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new k,un=new k,sr=new k,fn=new k,hi=new k,ui=new k,Qa=new k,rr=new k,ar=new k,or=new k,lr=new ue,cr=new ue,hr=new ue;class Ye{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);const i=s.lengthSq();return i>0?s.multiplyScalar(1/Math.sqrt(i)):s.set(0,0,0)}static getBarycoord(t,e,n,s,i){je.subVectors(s,e),un.subVectors(n,e),sr.subVectors(t,e);const a=je.dot(je),o=je.dot(un),l=je.dot(sr),u=un.dot(un),h=un.dot(sr),d=a*u-o*o;if(d===0)return i.set(0,0,0),null;const f=1/d,c=(u*l-o*h)*f,m=(a*h-o*l)*f;return i.set(1-c-m,m,c)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,s,i,a,o,l){return this.getBarycoord(t,e,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(t,e,n,s,i,a){return lr.setScalar(0),cr.setScalar(0),hr.setScalar(0),lr.fromBufferAttribute(t,e),cr.fromBufferAttribute(t,n),hr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(lr,i.x),a.addScaledVector(cr,i.y),a.addScaledVector(hr,i.z),a}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),un.subVectors(t,e),je.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,i){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,i)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,i=this.c;let a,o;hi.subVectors(s,n),ui.subVectors(i,n),rr.subVectors(t,n);const l=hi.dot(rr),u=ui.dot(rr);if(l<=0&&u<=0)return e.copy(n);ar.subVectors(t,s);const h=hi.dot(ar),d=ui.dot(ar);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(hi,a);or.subVectors(t,i);const c=hi.dot(or),m=ui.dot(or);if(m>=0&&c<=m)return e.copy(i);const g=c*u-l*m;if(g<=0&&u>=0&&m<=0)return o=u/(u-m),e.copy(n).addScaledVector(ui,o);const p=h*m-c*d;if(p<=0&&d-h>=0&&c-m>=0)return Qa.subVectors(i,s),o=(d-h)/(d-h+(c-m)),e.copy(s).addScaledVector(Qa,o);const _=1/(p+g+f);return a=g*_,o=f*_,e.copy(n).addScaledVector(hi,a).addScaledVector(ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function ur(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Tc(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,a=2*n-i;this.r=ur(a,i,t+1/3),this.g=ur(a,i,t),this.b=ur(a,i,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(i,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ht(Ee.r*255,0,255))*65536+Math.round(Ht(Ee.g*255,0,255))*256+Math.round(Ht(Ee.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,i=Ee.b,a=Math.max(n,s,i),o=Math.min(n,s,i);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-i)/d+(s<i?6:0);break;case s:l=(i-n)/d+2;break;case i:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=He){qt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(cs);const n=$s(bn.h,cs.h,e),s=$s(bn.s,cs.s,e),i=$s(bn.l,cs.l,e);return this.setHSL(n,s,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*s,this.g=i[1]*e+i[4]*n+i[7]*s,this.b=i[2]*e+i[5]*n+i[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Gt;Gt.NAMES=dl;let kc=0;class ti extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Ei,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Rr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(e){const i=s(t.textures),a=s(t.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let i=0;i!==s;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class we extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new k,hs=new kt;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=da,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,i=this.itemSize;s<i;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==da&&(t.usage=this.usage),t}}class pl extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ml extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vc=0;const Xe=new oe,fr=new be,fi=new k,ze=new Ki,zi=new Ki,ve=new k;class ke extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cl(t)?ml:pl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new It().getNormalMatrix(t);n.applyNormalMatrix(i),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return fr.lookAt(t),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,i=t.length;s<i;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const i=t[s];e.setXYZ(s,i.x,i.y,i.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const i=e[n];ze.setFromBufferAttribute(i),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(ze.min,zi.min),ze.expandByPoint(ve),ve.addVectors(ze.max,zi.max),ze.expandByPoint(ve)):(ze.expandByPoint(zi.min),ze.expandByPoint(zi.max))}ze.getCenter(n);let s=0;for(let i=0,a=t.count;i<a;i++)ve.fromBufferAttribute(t,i),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let i=0,a=e.length;i<a;i++){const o=e[i],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)ve.fromBufferAttribute(o,u),l&&(fi.fromBufferAttribute(t,u),ve.add(fi)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,i=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new k,l[b]=new k;const u=new k,h=new k,d=new k,f=new kt,c=new kt,m=new kt,g=new k,p=new k;function _(b,S,v){u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),f.fromBufferAttribute(i,b),c.fromBufferAttribute(i,S),m.fromBufferAttribute(i,v),h.sub(u),d.sub(u),c.sub(f),m.sub(f);const w=1/(c.x*m.y-m.x*c.y);isFinite(w)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-c.y).multiplyScalar(w),p.copy(d).multiplyScalar(c.x).addScaledVector(h,-m.x).multiplyScalar(w),o[b].add(g),o[S].add(g),o[v].add(g),l[b].add(p),l[S].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let b=0,S=E.length;b<S;++b){const v=E[b],w=v.start,P=v.count;for(let D=w,U=w+P;D<U;D+=3)_(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const T=new k,A=new k,x=new k,y=new k;function M(b){x.fromBufferAttribute(s,b),y.copy(x);const S=o[b];T.copy(S),T.sub(x.multiplyScalar(x.dot(S))).normalize(),A.crossVectors(y,S);const w=A.dot(l[b])<0?-1:1;a.setXYZW(b,T.x,T.y,T.z,w)}for(let b=0,S=E.length;b<S;++b){const v=E[b],w=v.start,P=v.count;for(let D=w,U=w+P;D<U;D+=3)M(t.getX(D+0)),M(t.getX(D+1)),M(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,c=n.count;f<c;f++)n.setXYZ(f,0,0,0);const s=new k,i=new k,a=new k,o=new k,l=new k,u=new k,h=new k,d=new k;if(t)for(let f=0,c=t.count;f<c;f+=3){const m=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),i.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,i),d.subVectors(s,i),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,p),o.add(h),l.add(h),u.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,c=e.count;f<c;f+=3)s.fromBufferAttribute(e,f+0),i.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,i),d.subVectors(s,i),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const u=o.array,h=o.itemSize,d=o.normalized,f=new u.constructor(l.length*h);let c=0,m=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?c=l[g]*o.data.stride+o.offset:c=l[g]*h;for(let _=0;_<h;_++)f[m++]=u[c++]}return new Ne(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=t(l,n);e.setAttribute(o,u)}const i=this.morphAttributes;for(const o in i){const l=[],u=i[o];for(let h=0,d=u.length;h<d;h++){const f=u[h],c=t(f,n);l.push(c)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let i=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const c=u[d];h.push(c.toJSON(t.data))}h.length>0&&(s[l]=h,i=!0)}i&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const i=t.morphAttributes;for(const u in i){const h=[],d=i[u];for(let f=0,c=d.length;f<c;f++)h.push(d[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new oe,zn=new Aa,us=new ji,eo=new k,fs=new k,ds=new k,ps=new k,dr=new k,ms=new k,no=new k,gs=new k;class ie extends be{constructor(t=new ke,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(i&&o){ms.set(0,0,0);for(let l=0,u=i.length;l<u;l++){const h=o[l],d=i[l];h!==0&&(dr.fromBufferAttribute(d,t),a?ms.addScaledVector(dr,h):ms.addScaledVector(dr.sub(e),h))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,s=this.material,i=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),zn.copy(t.ray).recast(t.near),!(us.containsPoint(zn.origin)===!1&&(zn.intersectSphere(us,eo)===null||zn.origin.distanceToSquared(eo)>(t.far-t.near)**2))&&(to.copy(i).invert(),zn.copy(t.ray).applyMatrix4(to),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let s;const i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv1,d=i.attributes.normal,f=i.groups,c=i.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=a[p.materialIndex],E=Math.max(p.start,c.start),T=Math.min(o.count,Math.min(p.start+p.count,c.start+c.count));for(let A=E,x=T;A<x;A+=3){const y=o.getX(A),M=o.getX(A+1),b=o.getX(A+2);s=_s(this,_,t,n,u,h,d,y,M,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,c.start),g=Math.min(o.count,c.start+c.count);for(let p=m,_=g;p<_;p+=3){const E=o.getX(p),T=o.getX(p+1),A=o.getX(p+2);s=_s(this,a,t,n,u,h,d,E,T,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=a[p.materialIndex],E=Math.max(p.start,c.start),T=Math.min(l.count,Math.min(p.start+p.count,c.start+c.count));for(let A=E,x=T;A<x;A+=3){const y=A,M=A+1,b=A+2;s=_s(this,_,t,n,u,h,d,y,M,b),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,c.start),g=Math.min(l.count,c.start+c.count);for(let p=m,_=g;p<_;p+=3){const E=p,T=p+1,A=p+2;s=_s(this,a,t,n,u,h,d,E,T,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Wc(r,t,e,n,s,i,a,o){let l;if(t.side===Fe?l=n.intersectTriangle(a,i,s,!0,o):l=n.intersectTriangle(s,i,a,t.side===Un,o),l===null)return null;gs.copy(o),gs.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(gs);return u<e.near||u>e.far?null:{distance:u,point:gs.clone(),object:r}}function _s(r,t,e,n,s,i,a,o,l,u){r.getVertexPosition(o,fs),r.getVertexPosition(l,ds),r.getVertexPosition(u,ps);const h=Wc(r,t,e,n,fs,ds,ps,no);if(h){const d=new k;Ye.getBarycoord(no,fs,ds,ps,d),s&&(h.uv=Ye.getInterpolatedAttribute(s,o,l,u,d,new kt)),i&&(h.uv1=Ye.getInterpolatedAttribute(i,o,l,u,d,new kt)),a&&(h.normal=Ye.getInterpolatedAttribute(a,o,l,u,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new k,materialIndex:0};Ye.getNormal(fs,ds,ps,f.normal),h.face=f,h.barycoord=d}return h}class Ji extends ke{constructor(t=1,e=1,n=1,s=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:i,depthSegments:a};const o=this;s=Math.floor(s),i=Math.floor(i),a=Math.floor(a);const l=[],u=[],h=[],d=[];let f=0,c=0;m("z","y","x",-1,-1,n,e,t,a,i,0),m("z","y","x",1,-1,n,e,-t,a,i,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,i,4),m("x","y","z",-1,-1,t,e,-n,s,i,5),this.setIndex(l),this.setAttribute("position",new nn(u,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(d,2));function m(g,p,_,E,T,A,x,y,M,b,S){const v=A/M,w=x/b,P=A/2,D=x/2,U=y/2,F=M+1,z=b+1;let G=0,H=0;const j=new k;for(let it=0;it<z;it++){const ct=it*w-D;for(let yt=0;yt<F;yt++){const Lt=yt*v-P;j[g]=Lt*E,j[p]=ct*T,j[_]=U,u.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[_]=y>0?1:-1,h.push(j.x,j.y,j.z),d.push(yt/M),d.push(1-it/b),G+=1}}for(let it=0;it<b;it++)for(let ct=0;ct<M;ct++){const yt=f+ct+F*it,Lt=f+ct+F*(it+1),q=f+(ct+1)+F*(it+1),tt=f+(ct+1)+F*it;l.push(yt,Lt,tt),l.push(Lt,q,tt),H+=6}o.addGroup(c,H,S),c+=H,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const s=r[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(r){const t={};for(let e=0;e<r.length;e++){const n=Di(r[e]);for(const s in n)t[s]=n[s]}return t}function Xc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function gl(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Yc={clone:Di,merge:Pe};var qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$c=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qc,this.fragmentShader=$c,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Xc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let ba=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const wn=new k,io=new kt,so=new kt;class Qe extends ba{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,io,so),e.subVectors(so,io)}setViewOffset(t,e,n,s,i,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,i=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;i+=a.offsetX*s/l,e-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(i+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,pi=1;class Zc extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(di,pi,t,e);s.layers=this.layers,this.add(s);const i=new Qe(di,pi,t,e);i.layers=this.layers,this.add(i);const a=new Qe(di,pi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(di,pi,t,e);o.layers=this.layers,this.add(o);const l=new Qe(di,pi,t,e);l.layers=this.layers,this.add(l);const u=new Qe(di,pi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,i,a,o,l]=e;for(const u of e)this.remove(u);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,a,o,l,u,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,i),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,c),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class _l extends Ae{constructor(t,e,n,s,i,a,o,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:wi,super(t,e,n,s,i,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kc extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),i=new yn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Pn});i.uniforms.tEquirect.value=e;const a=new ie(s,i),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Ge),new Zc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const i=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(i)}}class ro extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=da,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,i=this.stride;s<i;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new k;class zs{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),s=te(s,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=i,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[s+i])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)e.push(this.data.array[s+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vl extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let mi;const Hi=new k,gi=new k,_i=new k,vi=new kt,Gi=new kt,xl=new oe,vs=new k,ki=new k,xs=new k,ao=new kt,pr=new kt,oo=new kt;class Jc extends be{constructor(t=new vl){if(super(),this.isSprite=!0,this.type="Sprite",mi===void 0){mi=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jc(e,5);mi.setIndex([0,1,2,0,2,3]),mi.setAttribute("position",new zs(n,3,0,!1)),mi.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=mi,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gi.setFromMatrixScale(this.matrixWorld),xl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gi.multiplyScalar(-_i.z);const n=this.material.rotation;let s,i;n!==0&&(i=Math.cos(n),s=Math.sin(n));const a=this.center;Ss(vs.set(-.5,-.5,0),_i,a,gi,s,i),Ss(ki.set(.5,-.5,0),_i,a,gi,s,i),Ss(xs.set(.5,.5,0),_i,a,gi,s,i),ao.set(0,0),pr.set(1,0),oo.set(1,1);let o=t.ray.intersectTriangle(vs,ki,xs,!1,Hi);if(o===null&&(Ss(ki.set(-.5,.5,0),_i,a,gi,s,i),pr.set(0,1),o=t.ray.intersectTriangle(vs,xs,ki,!1,Hi),o===null))return;const l=t.ray.origin.distanceTo(Hi);l<t.near||l>t.far||e.push({distance:l,point:Hi.clone(),uv:Ye.getInterpolation(Hi,vs,ki,xs,ao,pr,oo,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ss(r,t,e,n,s,i){vi.subVectors(r,e).addScalar(.5).multiply(n),s!==void 0?(Gi.x=i*vi.x-s*vi.y,Gi.y=s*vi.x+i*vi.y):Gi.copy(vi),r.copy(t),r.x+=Gi.x,r.y+=Gi.y,r.applyMatrix4(xl)}const mr=new k,Qc=new k,th=new It;class Wn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=mr.subVectors(n,e).cross(Qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/s;return i<0||i>1?null:e.copy(t.start).addScaledVector(n,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||th.getNormalMatrix(t),s=this.coplanarPoint(mr).applyMatrix4(t),i=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ji,ys=new k;class Sl{constructor(t=new Wn,e=new Wn,n=new Wn,s=new Wn,i=new Wn,a=new Wn){this.planes=[t,e,n,s,i,a]}set(t,e,n,s,i,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(i),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){const n=this.planes,s=t.elements,i=s[0],a=s[1],o=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],c=s[8],m=s[9],g=s[10],p=s[11],_=s[12],E=s[13],T=s[14],A=s[15];if(n[0].setComponents(l-i,f-u,p-c,A-_).normalize(),n[1].setComponents(l+i,f+u,p+c,A+_).normalize(),n[2].setComponents(l+a,f+h,p+m,A+E).normalize(),n[3].setComponents(l-a,f-h,p-m,A-E).normalize(),n[4].setComponents(l-o,f-d,p-g,A-T).normalize(),e===_n)n[5].setComponents(l+o,f+d,p+g,A+T).normalize();else if(e===Bs)n[5].setComponents(o,d,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let i=0;i<6;i++)if(e[i].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ys.x=s.normal.x>0?t.max.x:t.min.x,ys.y=s.normal.y>0?t.max.y:t.min.y,ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yl extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hs=new k,Gs=new k,lo=new oe,Vi=new Aa,Ms=new ji,gr=new k,co=new k;class eh extends be{constructor(t=new ke,e=new yl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,i=e.count;s<i;s++)Hs.fromBufferAttribute(e,s-1),Gs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hs.distanceTo(Gs);t.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,i=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),Ms.radius+=i,t.ray.intersectsSphere(Ms)===!1)return;lo.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(lo);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=c,p=m-1;g<p;g+=u){const _=h.getX(g),E=h.getX(g+1),T=Es(this,t,Vi,l,_,E);T&&e.push(T)}if(this.isLineLoop){const g=h.getX(m-1),p=h.getX(c),_=Es(this,t,Vi,l,g,p);_&&e.push(_)}}else{const c=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=c,p=m-1;g<p;g+=u){const _=Es(this,t,Vi,l,g,g+1);_&&e.push(_)}if(this.isLineLoop){const g=Es(this,t,Vi,l,m-1,c);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function Es(r,t,e,n,s,i){const a=r.geometry.attributes.position;if(Hs.fromBufferAttribute(a,s),Gs.fromBufferAttribute(a,i),e.distanceSqToSegment(Hs,Gs,gr,co)>n)return;gr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(gr);if(!(l<t.near||l>t.far))return{distance:l,point:co.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}class Ml extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ho=new oe,ma=new Aa,Ts=new ji,As=new k;class nh extends be{constructor(t=new ke,e=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,i=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(s),Ts.radius+=i,t.ray.intersectsSphere(Ts)===!1)return;ho.copy(s).invert(),ma.copy(t.ray).applyMatrix4(ho);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),c=Math.min(u.count,a.start+a.count);for(let m=f,g=c;m<g;m++){const p=u.getX(m);As.fromBufferAttribute(d,p),uo(As,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),c=Math.min(d.count,a.start+a.count);for(let m=f,g=c;m<g;m++)As.fromBufferAttribute(d,m),uo(As,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=s.length;i<a;i++){const o=s[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function uo(r,t,e,n,s,i,a){const o=ma.distanceSqToPoint(r);if(o<e){const l=new k;ma.closestPointToPoint(r,l),l.applyMatrix4(n);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;i.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Kn extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qi extends Ae{constructor(t,e,n,s,i,a,o,l,u){super(t,e,n,s,i,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends Ae{constructor(t,e,n,s,i,a,o,l,u,h=Ti){if(h!==Ti&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=Jn),n===void 0&&h===Pi&&(n=Ri),super(null,s,i,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wa extends ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const i=[],a=[],o=[],l=[],u=new k,h=new kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const c=n+d/e*s;u.x=t*Math.cos(c),u.y=t*Math.sin(c),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)i.push(d,d+1,0);this.setIndex(i),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(o,3)),this.setAttribute("uv",new nn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const i=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),u=o+1,h=l+1,d=t/o,f=e/l,c=[],m=[],g=[],p=[];for(let _=0;_<h;_++){const E=_*f-a;for(let T=0;T<u;T++){const A=T*d-i;m.push(A,-E,0),g.push(0,0,1),p.push(T/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<o;E++){const T=E+u*_,A=E+u*(_+1),x=E+1+u*(_+1),y=E+1+u*_;c.push(T,A,y),c.push(A,x,y)}this.setIndex(c),this.setAttribute("position",new nn(m,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.widthSegments,t.heightSegments)}}class ih extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sh extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fo={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class rh{constructor(t,e,n){const s=this;let i=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,i===!1&&s.onStart!==void 0&&s.onStart(h,a,o),i=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(i=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){const c=u[d],m=u[d+1];if(c.global&&(c.lastIndex=0),c.test(h))return m}return null}}}const ah=new rh;class Ca{constructor(t){this.manager=t!==void 0?t:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,i){n.load(t,s,e,i)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";class oh extends Ca{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const i=this,a=fo.get(t);if(a!==void 0)return i.manager.itemStart(t),setTimeout(function(){e&&e(a),i.manager.itemEnd(t)},0),a;const o=Yi("img");function l(){h(),fo.add(t,this),e&&e(this),i.manager.itemEnd(t)}function u(d){h(),s&&s(d),i.manager.itemError(t),i.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(t),o.src=t,o}}class lh extends Ca{constructor(t){super(t)}load(t,e,n,s){const i=new Ae,a=new oh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){i.image=o,i.needsUpdate=!0,e!==void 0&&e(i)},n,s),i}}class Tl extends ba{constructor(t=-1,e=1,n=1,s=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let i=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=u*this.view.offsetX,a=i+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ch extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function po(r,t,e,n){const s=hh(n);switch(e){case el:return r*t;case il:return r*t;case sl:return r*t*2;case rl:return r*t/s.components*s.byteLength;case Ma:return r*t/s.components*s.byteLength;case al:return r*t*2/s.components*s.byteLength;case Ea:return r*t*2/s.components*s.byteLength;case nl:return r*t*3/s.components*s.byteLength;case tn:return r*t*4/s.components*s.byteLength;case Ta:return r*t*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Is:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case kr:case Wr:return Math.max(r,16)*Math.max(t,8)/4;case Gr:case Vr:return Math.max(r,8)*Math.max(t,8)/2;case Xr:case Yr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case jr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Us:case la:case ca:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ol:case ha:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ua:case fa:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hh(r){switch(r){case xn:case Jo:return{byteLength:1,components:1};case Xi:case Qo:case $i:return{byteLength:2,components:1};case Sa:case ya:return{byteLength:2,components:4};case Jn:case xa:case gn:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Al(){let r=null,t=!1,e=null,n=null;function s(i,a){e(i,a),n=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(i){e=i},setContext:function(i){r=i}}}function uh(r){const t=new WeakMap;function e(o,l){const u=o.array,h=o.usage,d=u.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,u,h),o.onUploadCallback();let c;if(u instanceof Float32Array)c=r.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?c=r.HALF_FLOAT:c=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)c=r.SHORT;else if(u instanceof Uint32Array)c=r.UNSIGNED_INT;else if(u instanceof Int32Array)c=r.INT;else if(u instanceof Int8Array)c=r.BYTE;else if(u instanceof Uint8Array)c=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)c=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:c,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,u){const h=l.array,d=l.updateRanges;if(r.bindBuffer(u,o),d.length===0)r.bufferSubData(u,0,h);else{d.sort((c,m)=>c.start-m.start);let f=0;for(let c=1;c<d.length;c++){const m=d[f],g=d[c];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let c=0,m=d.length;c<m;c++){const g=d[c];r.bufferSubData(u,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:s,remove:i,update:a}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dh=`#ifdef USE_ALPHAHASH
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
#endif`,ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vh=`#ifdef USE_AOMAP
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
#endif`,xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sh=`#ifdef USE_BATCHING
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
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ah=`#ifdef USE_IRIDESCENCE
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
#endif`,bh=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fh=`#define PI 3.141592653589793
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
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oh=`vec3 transformedNormal = objectNormal;
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
#endif`,Bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wh=`#ifdef USE_ENVMAP
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
#endif`,Xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jh=`#ifdef USE_FOG
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
#endif`,Qh=`#ifdef USE_GRADIENTMAP
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
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
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
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
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
#endif`,hu=`struct PhysicalMaterial {
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
}`,uu=`
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,du=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yu=`#if defined( USE_POINTS_UV )
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
#endif`,Mu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wu=`#ifdef USE_MORPHTARGETS
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
#endif`,Cu=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uu=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ku=`float getShadowMask() {
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
}`,ju=`#ifdef USE_SKINNING
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
#endif`,Qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`#include <common>
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
}`,xf=`#if DEPTH_PACKING == 3200
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
}`,Sf=`#define DISTANCE
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
}`,yf=`#define DISTANCE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`uniform float scale;
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
}`,Af=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,wf=`uniform vec3 diffuse;
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
}`,Cf=`#define LAMBERT
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,Df=`#define NORMAL
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
}`,If=`#define NORMAL
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
}`,Uf=`#define PHONG
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
}`,Ff=`#define PHONG
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
}`,Nf=`#define STANDARD
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
}`,Of=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,zf=`#define TOON
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
}`,Hf=`uniform float size;
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
}`,Gf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Vf=`uniform vec3 color;
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
}`,Wf=`uniform float rotation;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:fh,alphahash_pars_fragment:dh,alphamap_fragment:ph,alphamap_pars_fragment:mh,alphatest_fragment:gh,alphatest_pars_fragment:_h,aomap_fragment:vh,aomap_pars_fragment:xh,batching_pars_vertex:Sh,batching_vertex:yh,begin_vertex:Mh,beginnormal_vertex:Eh,bsdfs:Th,iridescence_fragment:Ah,bumpmap_pars_fragment:bh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Rh,clipping_planes_vertex:Ph,color_fragment:Lh,color_pars_fragment:Dh,color_pars_vertex:Ih,color_vertex:Uh,common:Fh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Oh,displacementmap_pars_vertex:Bh,displacementmap_vertex:zh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Gh,colorspace_fragment:kh,colorspace_pars_fragment:Vh,envmap_fragment:Wh,envmap_common_pars_fragment:Xh,envmap_pars_fragment:Yh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:su,envmap_vertex:$h,fog_vertex:Zh,fog_pars_vertex:Kh,fog_fragment:jh,fog_pars_fragment:Jh,gradientmap_pars_fragment:Qh,lightmap_pars_fragment:tu,lights_lambert_fragment:eu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:hu,lights_fragment_begin:uu,lights_fragment_maps:fu,lights_fragment_end:du,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:_u,map_fragment:vu,map_pars_fragment:xu,map_particle_fragment:Su,map_particle_pars_fragment:yu,metalnessmap_fragment:Mu,metalnessmap_pars_fragment:Eu,morphinstance_vertex:Tu,morphcolor_vertex:Au,morphnormal_vertex:bu,morphtarget_pars_vertex:wu,morphtarget_vertex:Cu,normal_fragment_begin:Ru,normal_fragment_maps:Pu,normal_pars_fragment:Lu,normal_pars_vertex:Du,normal_vertex:Iu,normalmap_pars_fragment:Uu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Nu,clearcoat_pars_fragment:Ou,iridescence_pars_fragment:Bu,opaque_fragment:zu,packing:Hu,premultiplied_alpha_fragment:Gu,project_vertex:ku,dithering_fragment:Vu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:$u,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ku,skinbase_vertex:ju,skinning_pars_vertex:Ju,skinning_vertex:Qu,skinnormal_vertex:tf,specularmap_fragment:ef,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:af,transmission_pars_fragment:of,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:uf,background_vert:ff,background_frag:df,backgroundCube_vert:pf,backgroundCube_frag:mf,cube_vert:gf,cube_frag:_f,depth_vert:vf,depth_frag:xf,distanceRGBA_vert:Sf,distanceRGBA_frag:yf,equirect_vert:Mf,equirect_frag:Ef,linedashed_vert:Tf,linedashed_frag:Af,meshbasic_vert:bf,meshbasic_frag:wf,meshlambert_vert:Cf,meshlambert_frag:Rf,meshmatcap_vert:Pf,meshmatcap_frag:Lf,meshnormal_vert:Df,meshnormal_frag:If,meshphong_vert:Uf,meshphong_frag:Ff,meshphysical_vert:Nf,meshphysical_frag:Of,meshtoon_vert:Bf,meshtoon_frag:zf,points_vert:Hf,points_frag:Gf,shadow_vert:kf,shadow_frag:Vf,sprite_vert:Wf,sprite_frag:Xf},rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},rn={basic:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Pe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Pe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Pe([rt.points,rt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Pe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Pe([rt.common,rt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Pe([rt.sprite,rt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Pe([rt.common,rt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Pe([rt.lights,rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};rn.physical={uniforms:Pe([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const bs={r:0,b:0,g:0},Gn=new Sn,Yf=new oe;function qf(r,t,e,n,s,i,a){const o=new Gt(0);let l=i===!0?0:1,u,h,d=null,f=0,c=null;function m(T){let A=T.isScene===!0?T.background:null;return A&&A.isTexture&&(A=(T.backgroundBlurriness>0?e:t).get(A)),A}function g(T){let A=!1;const x=m(T);x===null?_(o,l):x&&x.isColor&&(_(x,1),A=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(T,A){const x=m(A);x&&(x.isCubeTexture||x.mapping===ks)?(h===void 0&&(h=new ie(new Ji(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Di(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(A.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(Gn)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==Qt,(d!==x||f!==x.version||c!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,c=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ie(new me(2,2),new yn({name:"BackgroundMaterial",uniforms:Di(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=qt.getTransfer(x.colorSpace)!==Qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||c!==r.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,c=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null))}function _(T,A){T.getRGB(bs,gl(r)),n.buffers.color.setClear(bs.r,bs.g,bs.b,A,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),l=A,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,_(o,l)},render:g,addToRenderList:p,dispose:E}}function $f(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=f(null);let i=s,a=!1;function o(v,w,P,D,U){let F=!1;const z=d(D,P,w);i!==z&&(i=z,u(i.object)),F=c(v,D,P,U),F&&m(v,D,P,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,A(v,w,P,D),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return r.createVertexArray()}function u(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function d(v,w,P){const D=P.wireframe===!0;let U=n[v.id];U===void 0&&(U={},n[v.id]=U);let F=U[w.id];F===void 0&&(F={},U[w.id]=F);let z=F[D];return z===void 0&&(z=f(l()),F[D]=z),z}function f(v){const w=[],P=[],D=[];for(let U=0;U<e;U++)w[U]=0,P[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:D,object:v,attributes:{},index:null}}function c(v,w,P,D){const U=i.attributes,F=w.attributes;let z=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){const it=U[H];let ct=F[H];if(ct===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),it===void 0||it.attribute!==ct||ct&&it.data!==ct.data)return!0;z++}return i.attributesNum!==z||i.index!==D}function m(v,w,P,D){const U={},F=w.attributes;let z=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){let it=F[H];it===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(it=v.instanceColor));const ct={};ct.attribute=it,it&&it.data&&(ct.data=it.data),U[H]=ct,z++}i.attributes=U,i.attributesNum=z,i.index=D}function g(){const v=i.newAttributes;for(let w=0,P=v.length;w<P;w++)v[w]=0}function p(v){_(v,0)}function _(v,w){const P=i.newAttributes,D=i.enabledAttributes,U=i.attributeDivisors;P[v]=1,D[v]===0&&(r.enableVertexAttribArray(v),D[v]=1),U[v]!==w&&(r.vertexAttribDivisor(v,w),U[v]=w)}function E(){const v=i.newAttributes,w=i.enabledAttributes;for(let P=0,D=w.length;P<D;P++)w[P]!==v[P]&&(r.disableVertexAttribArray(P),w[P]=0)}function T(v,w,P,D,U,F,z){z===!0?r.vertexAttribIPointer(v,w,P,U,F):r.vertexAttribPointer(v,w,P,D,U,F)}function A(v,w,P,D){g();const U=D.attributes,F=P.getAttributes(),z=w.defaultAttributeValues;for(const G in F){const H=F[G];if(H.location>=0){let j=U[G];if(j===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const it=j.normalized,ct=j.itemSize,yt=t.get(j);if(yt===void 0)continue;const Lt=yt.buffer,q=yt.type,tt=yt.bytesPerElement,Q=q===r.INT||q===r.UNSIGNED_INT||j.gpuType===xa;if(j.isInterleavedBufferAttribute){const st=j.data,dt=st.stride,Tt=j.offset;if(st.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)_(H.location+bt,st.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let bt=0;bt<H.locationSize;bt++)p(H.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let bt=0;bt<H.locationSize;bt++)T(H.location+bt,ct/H.locationSize,q,it,dt*tt,(Tt+ct/H.locationSize*bt)*tt,Q)}else{if(j.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)_(H.location+st,j.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let st=0;st<H.locationSize;st++)p(H.location+st);r.bindBuffer(r.ARRAY_BUFFER,Lt);for(let st=0;st<H.locationSize;st++)T(H.location+st,ct/H.locationSize,q,it,ct*tt,ct/H.locationSize*st*tt,Q)}}else if(z!==void 0){const it=z[G];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(H.location,it);break;case 3:r.vertexAttrib3fv(H.location,it);break;case 4:r.vertexAttrib4fv(H.location,it);break;default:r.vertexAttrib1fv(H.location,it)}}}}E()}function x(){b();for(const v in n){const w=n[v];for(const P in w){const D=w[P];for(const U in D)h(D[U].object),delete D[U];delete w[P]}delete n[v]}}function y(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const P in w){const D=w[P];for(const U in D)h(D[U].object),delete D[U];delete w[P]}delete n[v.id]}function M(v){for(const w in n){const P=n[w];if(P[v.id]===void 0)continue;const D=P[v.id];for(const U in D)h(D[U].object),delete D[U];delete P[v.id]}}function b(){S(),a=!0,i!==s&&(i=s,u(i.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:S,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function Zf(r,t,e){let n;function s(u){n=u}function i(u,h){r.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,d){d!==0&&(r.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function o(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let c=0;for(let m=0;m<d;m++)c+=h[m];e.update(c,n,1)}function l(u,h,d,f){if(d===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let m=0;m<u.length;m++)a(u[m],h[m],f[m]);else{c.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g]*f[g];e.update(m,n,1)}}this.setMode=s,this.render=i,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kf(r,t,e,n){let s;function i(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==tn&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const b=M===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==xn&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==gn&&!b)}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,y=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:c,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:A,vertexTextures:x,maxSamples:y}}function jf(r){const t=this;let e=null,n=0,s=!1,i=!1;const a=new Wn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const c=d.length!==0||f||n!==0||s;return s=f,n=d.length,c},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,c){const m=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,_=r.get(d);if(!s||m===null||m.length===0||i&&!p)i?h(null):u();else{const E=i?0:n,T=E*4;let A=_.clippingState||null;l.value=A,A=h(m,f,T,c);for(let x=0;x!==T;++x)A[x]=e[x];_.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,c,m){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const _=c+g*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<_)&&(p=new Float32Array(_));for(let T=0,A=c;T!==g;++T,A+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Jf(r){let t=new WeakMap;function e(a,o){return o===Or?a.mapping=wi:o===Br&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Or||o===Br)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Kc(l.height);return u.fromEquirectangularTexture(r,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function i(){t=new WeakMap}return{get:n,dispose:i}}const Mi=4,mo=[.125,.215,.35,.446,.526,.582],qn=20,_r=new Tl,go=new Gt;let vr=null,xr=0,Sr=0,yr=!1;const Xn=(1+Math.sqrt(5))/2,xi=1/Xn,_o=[new k(-Xn,xi,0),new k(Xn,xi,0),new k(-xi,0,Xn),new k(xi,0,Xn),new k(0,Xn,-xi),new k(0,Xn,xi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(t,n,s,i),e>0&&this._blur(i,0,0,e),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vr,xr,Sr),this._renderer.xr.enabled=yr,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget(),xr=this._renderer.getActiveCubeFace(),Sr=this._renderer.getActiveMipmapLevel(),yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:$i,format:tn,colorSpace:Li,depthBuffer:!1},s=xo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qf(i)),this._blurMaterial=td(i,t,e)}return s}_compileMaterial(t){const e=new ie(this._lodPlanes[0],t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,s){const o=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(go),h.toneMapping=Ln,h.autoClear=!1;const c=new we({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new ie(new Ji,c);let g=!1;const p=t.background;p?p.isColor&&(c.color.copy(p),t.background=null,g=!0):(c.color.copy(go),g=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(o.up.set(0,l[_],0),o.lookAt(u[_],0,0)):E===1?(o.up.set(0,0,l[_]),o.lookAt(0,u[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,u[_]));const T=this._cubeSize;ws(s,E*T,_>2?T:0,T,T),h.setRenderTarget(s),g&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===wi||t.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=So());const i=s?this._cubemapMaterial:this._equirectMaterial,a=new ie(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,_r)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let i=1;i<s;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_o[(s-i-1)%_o.length];this._blur(t,i-1,i,a,o)}e.autoClear=n}_blur(t,e,n,s,i){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",i),this._halfBlur(a,t,n,n,s,"longitudinal",i)}_halfBlur(t,e,n,s,i,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ie(this._lodPlanes[s],u),f=u.uniforms,c=this._sizeLods[n]-1,m=isFinite(i)?Math.PI/(2*c):2*Math.PI/(2*qn-1),g=i/m,p=isFinite(i)?1+Math.floor(h*g):qn;p>qn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qn}`);const _=[];let E=0;for(let M=0;M<qn;++M){const b=M/g,S=Math.exp(-b*b/2);_.push(S),M===0?E+=S:M<p&&(E+=2*S)}for(let M=0;M<_.length;M++)_[M]=_[M]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=m,f.mipInt.value=T-n;const A=this._sizeLods[s],x=3*A*(s>T-Mi?s-T+Mi:0),y=4*(this._cubeSize-A);ws(e,x,y,3*A,2*A),l.setRenderTarget(e),l.render(d,_r)}}function Qf(r){const t=[],e=[],n=[];let s=r;const i=r-Mi+1+mo.length;for(let a=0;a<i;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>r-Mi?l=mo[a-r+Mi-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],c=6,m=6,g=3,p=2,_=1,E=new Float32Array(g*m*c),T=new Float32Array(p*m*c),A=new Float32Array(_*m*c);for(let y=0;y<c;y++){const M=y%3*2/3-1,b=y>2?0:-1,S=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];E.set(S,g*m*y),T.set(f,p*m*y);const v=[y,y,y,y,y,y];A.set(v,_*m*y)}const x=new ke;x.setAttribute("position",new Ne(E,g)),x.setAttribute("uv",new Ne(T,p)),x.setAttribute("faceIndex",new Ne(A,_)),t.push(x),s>Mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xo(r,t,e){const n=new Qn(r,t,e);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(r,t,e,n,s){r.viewport.set(t,e,n,s),r.scissor.set(t,e,n,s)}function td(r,t,e){const n=new Float32Array(qn),s=new k(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function So(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function yo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ra(){return`

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
	`}function ed(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Or||l===Br,h=l===wi||l===Ci;if(u||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new vo(r)),d=u?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const c=o.image;return u&&c&&c.height>0||h&&c&&s(c)?(e===null&&(e=new vo(r)),d=u?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",i),d.texture):null}}}return o}function s(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function nd(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function id(r,t,e,n){const s={},i=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const c=i.get(f);c&&(t.remove(c),i.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const c in f)t.update(f[c],r.ARRAY_BUFFER)}function u(d){const f=[],c=d.index,m=d.attributes.position;let g=0;if(c!==null){const E=c.array;g=c.version;for(let T=0,A=E.length;T<A;T+=3){const x=E[T+0],y=E[T+1],M=E[T+2];f.push(x,y,y,M,M,x)}}else if(m!==void 0){const E=m.array;g=m.version;for(let T=0,A=E.length/3-1;T<A;T+=3){const x=T+0,y=T+1,M=T+2;f.push(x,y,y,M,M,x)}}else return;const p=new(cl(f)?ml:pl)(f,1);p.version=g;const _=i.get(d);_&&t.remove(_),i.set(d,p)}function h(d){const f=i.get(d);if(f){const c=d.index;c!==null&&f.version<c.version&&u(d)}else u(d);return i.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function sd(r,t,e){let n;function s(f){n=f}let i,a;function o(f){i=f.type,a=f.bytesPerElement}function l(f,c){r.drawElements(n,c,i,f*a),e.update(c,n,1)}function u(f,c,m){m!==0&&(r.drawElementsInstanced(n,c,i,f*a,m),e.update(c,n,m))}function h(f,c,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,i,f,0,m);let p=0;for(let _=0;_<m;_++)p+=c[_];e.update(p,n,1)}function d(f,c,m,g){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f.length;_++)u(f[_]/a,c[_],g[_]);else{p.multiDrawElementsInstancedWEBGL(n,c,0,i,f,0,g,0,m);let _=0;for(let E=0;E<m;E++)_+=c[E]*g[E];e.update(_,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function rd(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(i/3);break;case r.LINES:e.lines+=o*(i/2);break;case r.LINE_STRIP:e.lines+=o*(i-1);break;case r.LINE_LOOP:e.lines+=o*i;break;case r.POINTS:e.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ad(r,t,e){const n=new WeakMap,s=new ue;function i(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let v=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var c=v;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),g===!0&&(A=2),p===!0&&(A=3);let x=o.attributes.position.count*A,y=1;x>t.maxTextureSize&&(y=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const M=new Float32Array(x*y*4*d),b=new ul(M,x,y,d);b.type=gn,b.needsUpdate=!0;const S=A*4;for(let w=0;w<d;w++){const P=_[w],D=E[w],U=T[w],F=x*y*4*w;for(let z=0;z<P.count;z++){const G=z*S;m===!0&&(s.fromBufferAttribute(P,z),M[F+G+0]=s.x,M[F+G+1]=s.y,M[F+G+2]=s.z,M[F+G+3]=0),g===!0&&(s.fromBufferAttribute(D,z),M[F+G+4]=s.x,M[F+G+5]=s.y,M[F+G+6]=s.z,M[F+G+7]=0),p===!0&&(s.fromBufferAttribute(U,z),M[F+G+8]=s.x,M[F+G+9]=s.y,M[F+G+10]=s.z,M[F+G+11]=U.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new kt(x,y)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let m=0;for(let p=0;p<u.length;p++)m+=u[p];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",u)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:i}}function od(r,t,e,n){let s=new WeakMap;function i(l){const u=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:i,dispose:a}}const bl=new Ae,Mo=new El(1,1),wl=new ul,Cl=new Uc,Rl=new _l,Eo=[],To=[],Ao=new Float32Array(16),bo=new Float32Array(9),wo=new Float32Array(4);function Ui(r,t,e){const n=r[0];if(n<=0||n>0)return r;const s=t*e;let i=Eo[s];if(i===void 0&&(i=new Float32Array(s),Eo[s]=i),t!==0){n.toArray(i,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(i,o)}return i}function ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function _e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Vs(r,t){let e=To[t];e===void 0&&(e=new Int32Array(t),To[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function ld(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function cd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2fv(this.addr,t),_e(e,t)}}function hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;r.uniform3fv(this.addr,t),_e(e,t)}}function ud(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4fv(this.addr,t),_e(e,t)}}function fd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;wo.set(n),r.uniformMatrix2fv(this.addr,!1,wo),_e(e,n)}}function dd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;bo.set(n),r.uniformMatrix3fv(this.addr,!1,bo),_e(e,n)}}function pd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Ao.set(n),r.uniformMatrix4fv(this.addr,!1,Ao),_e(e,n)}}function md(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2iv(this.addr,t),_e(e,t)}}function _d(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3iv(this.addr,t),_e(e,t)}}function vd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4iv(this.addr,t),_e(e,t)}}function xd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Sd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2uiv(this.addr,t),_e(e,t)}}function yd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3uiv(this.addr,t),_e(e,t)}}function Md(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4uiv(this.addr,t),_e(e,t)}}function Ed(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let i;this.type===r.SAMPLER_2D_SHADOW?(Mo.compareFunction=ll,i=Mo):i=bl,e.setTexture2D(t||i,s)}function Td(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cl,s)}function Ad(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rl,s)}function bd(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wl,s)}function wd(r){switch(r){case 5126:return ld;case 35664:return cd;case 35665:return hd;case 35666:return ud;case 35674:return fd;case 35675:return dd;case 35676:return pd;case 5124:case 35670:return md;case 35667:case 35671:return gd;case 35668:case 35672:return _d;case 35669:case 35673:return vd;case 5125:return xd;case 36294:return Sd;case 36295:return yd;case 36296:return Md;case 35678:case 36198:case 36298:case 36306:case 35682:return Ed;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return Ad;case 36289:case 36303:case 36311:case 36292:return bd}}function Cd(r,t){r.uniform1fv(this.addr,t)}function Rd(r,t){const e=Ui(t,this.size,2);r.uniform2fv(this.addr,e)}function Pd(r,t){const e=Ui(t,this.size,3);r.uniform3fv(this.addr,e)}function Ld(r,t){const e=Ui(t,this.size,4);r.uniform4fv(this.addr,e)}function Dd(r,t){const e=Ui(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Id(r,t){const e=Ui(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Ud(r,t){const e=Ui(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Fd(r,t){r.uniform1iv(this.addr,t)}function Nd(r,t){r.uniform2iv(this.addr,t)}function Od(r,t){r.uniform3iv(this.addr,t)}function Bd(r,t){r.uniform4iv(this.addr,t)}function zd(r,t){r.uniform1uiv(this.addr,t)}function Hd(r,t){r.uniform2uiv(this.addr,t)}function Gd(r,t){r.uniform3uiv(this.addr,t)}function kd(r,t){r.uniform4uiv(this.addr,t)}function Vd(r,t,e){const n=this.cache,s=t.length,i=Vs(e,s);ge(n,i)||(r.uniform1iv(this.addr,i),_e(n,i));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||bl,i[a])}function Wd(r,t,e){const n=this.cache,s=t.length,i=Vs(e,s);ge(n,i)||(r.uniform1iv(this.addr,i),_e(n,i));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cl,i[a])}function Xd(r,t,e){const n=this.cache,s=t.length,i=Vs(e,s);ge(n,i)||(r.uniform1iv(this.addr,i),_e(n,i));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Rl,i[a])}function Yd(r,t,e){const n=this.cache,s=t.length,i=Vs(e,s);ge(n,i)||(r.uniform1iv(this.addr,i),_e(n,i));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wl,i[a])}function qd(r){switch(r){case 5126:return Cd;case 35664:return Rd;case 35665:return Pd;case 35666:return Ld;case 35674:return Dd;case 35675:return Id;case 35676:return Ud;case 5124:case 35670:return Fd;case 35667:case 35671:return Nd;case 35668:case 35672:return Od;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return Hd;case 36295:return Gd;case 36296:return kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return Yd}}class $d{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wd(e.type)}}class Zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qd(e.type)}}class Kd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let i=0,a=s.length;i!==a;++i){const o=s[i];o.setValue(t,e[o.id],n)}}}const Mr=/(\w+)(\])?(\[|\.)?/g;function Co(r,t){r.seq.push(t),r.map[t.id]=t}function jd(r,t,e){const n=r.name,s=n.length;for(Mr.lastIndex=0;;){const i=Mr.exec(n),a=Mr.lastIndex;let o=i[1];const l=i[2]==="]",u=i[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Co(e,u===void 0?new $d(o,r,t):new Zd(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Kd(o),Co(e,d)),e=d}}}class Fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const i=t.getActiveUniform(e,s),a=t.getUniformLocation(e,i.name);jd(i,a,this)}}setValue(t,e,n,s){const i=this.map[e];i!==void 0&&i.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let i=0,a=e.length;i!==a;++i){const o=e[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,i=t.length;s!==i;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ro(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Jd=37297;let Qd=0;function tp(r,t){const e=r.split(`
`),n=[],s=Math.max(t-6,0),i=Math.min(t+6,e.length);for(let a=s;a<i;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Po=new It;function ep(r){qt._getMatrix(Po,qt.workingColorSpace,r);const t=`mat3( ${Po.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case Os:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Lo(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=r.getShaderInfoLog(t).trim();if(n&&s==="")return"";const i=/ERROR: 0:(\d+)/.exec(s);if(i){const a=parseInt(i[1]);return e.toUpperCase()+`

`+s+`

`+tp(r.getShaderSource(t),a)}else return s}function np(r,t){const e=ep(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ip(r,t){let e;switch(t){case rc:e="Linear";break;case ac:e="Reinhard";break;case oc:e="Cineon";break;case lc:e="ACESFilmic";break;case hc:e="AgX";break;case uc:e="Neutral";break;case cc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cs=new k;function sp(){qt.getLuminanceCoefficients(Cs);const r=Cs.x.toFixed(4),t=Cs.y.toFixed(4),e=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rp(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function ap(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function op(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const i=r.getActiveAttrib(t,s),a=i.name;let o=1;i.type===r.FLOAT_MAT2&&(o=2),i.type===r.FLOAT_MAT3&&(o=3),i.type===r.FLOAT_MAT4&&(o=4),e[a]={type:i.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Wi(r){return r!==""}function Do(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Io(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(r){return r.replace(lp,hp)}const cp=new Map;function hp(r,t){let e=Ft[t];if(e===void 0){const n=cp.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ga(e)}const up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(r){return r.replace(up,fp)}function fp(r,t,e,n){let s="";for(let i=parseInt(t);i<parseInt(e);i++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return s}function Fo(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function dp(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zo?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function pp(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wi:case Ci:t="ENVMAP_TYPE_CUBE";break;case ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mp(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ci:t="ENVMAP_MODE_REFRACTION";break}return t}function gp(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ko:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function _p(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vp(r,t,e,n){const s=r.getContext(),i=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=dp(e),u=pp(e),h=mp(e),d=gp(e),f=_p(e),c=rp(e),m=ap(i),g=s.createProgram();let p,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wi).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wi).join(`
`),_.length>0&&(_+=`
`)):(p=[Fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),_=[Fo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Ln?ip("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,np("linearToOutputTexel",e.outputColorSpace),sp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wi).join(`
`)),a=ga(a),a=Do(a,e),a=Io(a,e),o=ga(o),o=Do(o,e),o=Io(o,e),a=Uo(a),o=Uo(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const T=E+p+a,A=E+_+o,x=Ro(s,s.VERTEX_SHADER,T),y=Ro(s,s.FRAGMENT_SHADER,A);s.attachShader(g,x),s.attachShader(g,y),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function M(w){if(r.debug.checkShaderErrors){const P=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(x).trim(),U=s.getShaderInfoLog(y).trim();let F=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,x,y);else{const G=Lo(s,x,"vertex"),H=Lo(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+G+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||U==="")&&(z=!1);z&&(w.diagnostics={runnable:F,programLog:P,vertexShader:{log:D,prefix:p},fragmentShader:{log:U,prefix:_}})}s.deleteShader(x),s.deleteShader(y),b=new Fs(s,g),S=op(s,g)}let b;this.getUniforms=function(){return b===void 0&&M(this),b};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Jd)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qd++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=y,this}let xp=0;class Sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yp(t),e.set(t,n)),n}}class yp{constructor(t){this.id=xp++,this.code=t,this.usedTimes=0}}function Mp(r,t,e,n,s,i,a){const o=new fl,l=new Sp,u=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let c=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return u.add(S),S===0?"uv":`uv${S}`}function p(S,v,w,P,D){const U=P.fog,F=D.geometry,z=S.isMeshStandardMaterial?P.environment:null,G=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),H=G&&G.mapping===ks?G.image.height:null,j=m[S.type];S.precision!==null&&(c=s.getMaxPrecision(S.precision),c!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",c,"instead."));const it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ct=it!==void 0?it.length:0;let yt=0;F.morphAttributes.position!==void 0&&(yt=1),F.morphAttributes.normal!==void 0&&(yt=2),F.morphAttributes.color!==void 0&&(yt=3);let Lt,q,tt,Q;if(j){const jt=rn[j];Lt=jt.vertexShader,q=jt.fragmentShader}else Lt=S.vertexShader,q=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);const st=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),Tt=D.isInstancedMesh===!0,bt=D.isBatchedMesh===!0,Vt=!!S.map,wt=!!S.matcap,re=!!G,I=!!S.aoMap,Ie=!!S.lightMap,Ot=!!S.bumpMap,Bt=!!S.normalMap,xt=!!S.displacementMap,zt=!!S.emissiveMap,St=!!S.metalnessMap,L=!!S.roughnessMap,C=S.anisotropy>0,V=S.clearcoat>0,Z=S.dispersion>0,J=S.iridescence>0,$=S.sheen>0,vt=S.transmission>0,at=C&&!!S.anisotropyMap,ut=V&&!!S.clearcoatMap,Nt=V&&!!S.clearcoatNormalMap,nt=V&&!!S.clearcoatRoughnessMap,mt=J&&!!S.iridescenceMap,At=J&&!!S.iridescenceThicknessMap,Ct=$&&!!S.sheenColorMap,gt=$&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,Ut=!!S.specularColorMap,ne=!!S.specularIntensityMap,N=vt&&!!S.transmissionMap,ot=vt&&!!S.thicknessMap,Y=!!S.gradientMap,K=!!S.alphaMap,ft=S.alphaTest>0,ht=!!S.alphaHash,Dt=!!S.extensions;let le=Ln;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=r.toneMapping);const ye={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Lt,fragmentShader:q,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:c,batching:bt,batchingColor:bt&&D._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&D.instanceColor!==null,instancingMorph:Tt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Li,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:wt,envMap:re,envMapMode:re&&G.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Ie,bumpMap:Ot,normalMap:Bt,displacementMap:f&&xt,emissiveMap:zt,normalMapObjectSpace:Bt&&S.normalMapType===gc,normalMapTangentSpace:Bt&&S.normalMapType===mc,metalnessMap:St,roughnessMap:L,anisotropy:C,anisotropyMap:at,clearcoat:V,clearcoatMap:ut,clearcoatNormalMap:Nt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:J,iridescenceMap:mt,iridescenceThicknessMap:At,sheen:$,sheenColorMap:Ct,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Ut,specularIntensityMap:ne,transmission:vt,transmissionMap:N,thicknessMap:ot,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Ei&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ht,combine:S.combine,mapUv:Vt&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:Ie&&g(S.lightMap.channel),bumpMapUv:Ot&&g(S.bumpMap.channel),normalMapUv:Bt&&g(S.normalMap.channel),displacementMapUv:xt&&g(S.displacementMap.channel),emissiveMapUv:zt&&g(S.emissiveMap.channel),metalnessMapUv:St&&g(S.metalnessMap.channel),roughnessMapUv:L&&g(S.roughnessMap.channel),anisotropyMapUv:at&&g(S.anisotropyMap.channel),clearcoatMapUv:ut&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(S.sheenRoughnessMap.channel),specularMapUv:Wt&&g(S.specularMap.channel),specularColorMapUv:Ut&&g(S.specularColorMap.channel),specularIntensityMapUv:ne&&g(S.specularIntensityMap.channel),transmissionMapUv:N&&g(S.transmissionMap.channel),thicknessMapUv:ot&&g(S.thicknessMap.channel),alphaMapUv:K&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Bt||C),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Vt||K),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:dt,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:yt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:zt&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=u.has(1),ye.vertexUv2s=u.has(2),ye.vertexUv3s=u.has(3),u.clear(),ye}function _(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)v.push(w),v.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(E(v,S),T(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function T(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function A(S){const v=m[S.type];let w;if(v){const P=rn[v];w=Yc.clone(P.uniforms)}else w=S.uniforms;return w}function x(S,v){let w;for(let P=0,D=h.length;P<D;P++){const U=h[P];if(U.cacheKey===v){w=U,++w.usedTimes;break}}return w===void 0&&(w=new vp(r,v,S,i),h.push(w)),w}function y(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function M(S){l.remove(S)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:A,acquireProgram:x,releaseProgram:y,releaseShaderCache:M,programs:h,dispose:b}}function Ep(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function s(a,o,l){r.get(a)[o]=l}function i(){r=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:i}}function Tp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function No(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Oo(){const r=[];let t=0;const e=[],n=[],s=[];function i(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,c,m,g,p){let _=r[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:c,groupOrder:m,renderOrder:d.renderOrder,z:g,group:p},r[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=c,_.groupOrder=m,_.renderOrder=d.renderOrder,_.z=g,_.group=p),t++,_}function o(d,f,c,m,g,p){const _=a(d,f,c,m,g,p);c.transmission>0?n.push(_):c.transparent===!0?s.push(_):e.push(_)}function l(d,f,c,m,g,p){const _=a(d,f,c,m,g,p);c.transmission>0?n.unshift(_):c.transparent===!0?s.unshift(_):e.unshift(_)}function u(d,f){e.length>1&&e.sort(d||Tp),n.length>1&&n.sort(f||No),s.length>1&&s.sort(f||No)}function h(){for(let d=t,f=r.length;d<f;d++){const c=r[d];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:n,transparent:s,init:i,push:o,unshift:l,finish:h,sort:u}}function Ap(){let r=new WeakMap;function t(n,s){const i=r.get(n);let a;return i===void 0?(a=new Oo,r.set(n,[a])):s>=i.length?(a=new Oo,i.push(a)):a=i[s],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function bp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Gt};break;case"SpotLight":e={position:new k,direction:new k,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function wp(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Cp=0;function Rp(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Pp(r){const t=new bp,e=wp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);const s=new k,i=new oe,a=new oe;function o(u){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let c=0,m=0,g=0,p=0,_=0,E=0,T=0,A=0,x=0,y=0,M=0;u.sort(Rp);for(let S=0,v=u.length;S<v;S++){const w=u[S],P=w.color,D=w.intensity,U=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=P.r*D,d+=P.g*D,f+=P.b*D;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],D);M++}else if(w.isDirectionalLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,H=e.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.directionalShadow[c]=H,n.directionalShadowMap[c]=F,n.directionalShadowMatrix[c]=w.shadow.matrix,E++}n.directional[c]=z,c++}else if(w.isSpotLight){const z=t.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(P).multiplyScalar(D),z.distance=U,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[g]=z;const G=w.shadow;if(w.map&&(n.spotLightMap[x]=w.map,x++,G.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[g]=G.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=F,A++}g++}else if(w.isRectAreaLight){const z=t.get(w);z.color.copy(P).multiplyScalar(D),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=z,p++}else if(w.isPointLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const G=w.shadow,H=e.get(w);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=w.shadow.matrix,T++}n.point[m]=z,m++}else if(w.isHemisphereLight){const z=t.get(w);z.skyColor.copy(w.color).multiplyScalar(D),z.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[_]=z,_++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==c||b.pointLength!==m||b.spotLength!==g||b.rectAreaLength!==p||b.hemiLength!==_||b.numDirectionalShadows!==E||b.numPointShadows!==T||b.numSpotShadows!==A||b.numSpotMaps!==x||b.numLightProbes!==M)&&(n.directional.length=c,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=A+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=M,b.directionalLength=c,b.pointLength=m,b.spotLength=g,b.rectAreaLength=p,b.hemiLength=_,b.numDirectionalShadows=E,b.numPointShadows=T,b.numSpotShadows=A,b.numSpotMaps=x,b.numLightProbes=M,n.version=Cp++)}function l(u,h){let d=0,f=0,c=0,m=0,g=0;const p=h.matrixWorldInverse;for(let _=0,E=u.length;_<E;_++){const T=u[_];if(T.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(T.isSpotLight){const A=n.spot[c];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),c++}else if(T.isRectAreaLight){const A=n.rectArea[m];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),a.identity(),i.copy(T.matrixWorld),i.premultiply(p),a.extractRotation(i),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Bo(r){const t=new Pp(r),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function i(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:a}}function Lp(r){let t=new WeakMap;function e(s,i=0){const a=t.get(s);let o;return a===void 0?(o=new Bo(r),t.set(s,[o])):i>=a.length?(o=new Bo(r),a.push(o)):o=a[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
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
}`;function Up(r,t,e){let n=new Sl;const s=new kt,i=new kt,a=new ue,o=new ih({depthPacking:pc}),l=new sh,u={},h=e.maxTextureSize,d={[Un]:Fe,[Fe]:Un,[mn]:mn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Dp,fragmentShader:Ip}),c=f.clone();c.defines.HORIZONTAL_PASS=1;const m=new ke;m.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ie(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let _=this.type;this.render=function(y,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Pn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=_!==pn&&this.type===pn,U=_===pn&&this.type!==pn;for(let F=0,z=y.length;F<z;F++){const G=y[F],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();if(s.multiply(j),i.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(i.x=Math.floor(h/j.x),s.x=i.x*j.x,H.mapSize.x=i.x),s.y>h&&(i.y=Math.floor(h/j.y),s.y=i.y*j.y,H.mapSize.y=i.y)),H.map===null||D===!0||U===!0){const ct=this.type!==pn?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new Qn(s.x,s.y,ct),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const it=H.getViewportCount();for(let ct=0;ct<it;ct++){const yt=H.getViewport(ct);a.set(i.x*yt.x,i.y*yt.y,i.x*yt.z,i.y*yt.w),P.viewport(a),H.updateMatrices(G,ct),n=H.getFrustum(),A(M,b,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===pn&&E(H,b),H.needsUpdate=!1}_=this.type,p.needsUpdate=!1,r.setRenderTarget(S,v,w)};function E(y,M){const b=t.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,c.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,c.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Qn(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(M,null,b,f,g,null),c.uniforms.shadow_pass.value=y.mapPass.texture,c.uniforms.resolution.value=y.mapSize,c.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(M,null,b,c,g,null)}function T(y,M,b,S){let v=null;const w=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)v=w;else if(v=b.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const P=v.uuid,D=M.uuid;let U=u[P];U===void 0&&(U={},u[P]=U);let F=U[D];F===void 0&&(F=v.clone(),U[D]=F,M.addEventListener("dispose",x)),v=F}if(v.visible=M.visible,v.wireframe=M.wireframe,S===pn?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:d[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=r.properties.get(v);P.light=b}return v}function A(y,M,b,S,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===pn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const D=t.update(y),U=y.material;if(Array.isArray(U)){const F=D.groups;for(let z=0,G=F.length;z<G;z++){const H=F[z],j=U[H.materialIndex];if(j&&j.visible){const it=T(y,j,S,v);y.onBeforeShadow(r,y,M,b,D,it,H),r.renderBufferDirect(b,null,D,it,y,H),y.onAfterShadow(r,y,M,b,D,it,H)}}}else if(U.visible){const F=T(y,U,S,v);y.onBeforeShadow(r,y,M,b,D,F,null),r.renderBufferDirect(b,null,D,F,y,null),y.onAfterShadow(r,y,M,b,D,F,null)}}const P=y.children;for(let D=0,U=P.length;D<U;D++)A(P[D],M,b,S,v)}function x(y){y.target.removeEventListener("dispose",x);for(const b in u){const S=u[b],v=y.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Fp={[Pr]:Lr,[Dr]:Fr,[Ir]:Nr,[bi]:Ur,[Lr]:Pr,[Fr]:Dr,[Nr]:Ir,[Ur]:bi};function Np(r,t){function e(){let N=!1;const ot=new ue;let Y=null;const K=new ue(0,0,0,0);return{setMask:function(ft){Y!==ft&&!N&&(r.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){N=ft},setClear:function(ft,ht,Dt,le,ye){ye===!0&&(ft*=le,ht*=le,Dt*=le),ot.set(ft,ht,Dt,le),K.equals(ot)===!1&&(r.clearColor(ft,ht,Dt,le),K.copy(ot))},reset:function(){N=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let N=!1,ot=!1,Y=null,K=null,ft=null;return{setReversed:function(ht){if(ot!==ht){const Dt=t.get("EXT_clip_control");ot?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const le=ft;ft=null,this.setClear(le)}ot=ht},getReversed:function(){return ot},setTest:function(ht){ht?st(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!N&&(r.depthMask(ht),Y=ht)},setFunc:function(ht){if(ot&&(ht=Fp[ht]),K!==ht){switch(ht){case Pr:r.depthFunc(r.NEVER);break;case Lr:r.depthFunc(r.ALWAYS);break;case Dr:r.depthFunc(r.LESS);break;case bi:r.depthFunc(r.LEQUAL);break;case Ir:r.depthFunc(r.EQUAL);break;case Ur:r.depthFunc(r.GEQUAL);break;case Fr:r.depthFunc(r.GREATER);break;case Nr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ht}},setLocked:function(ht){N=ht},setClear:function(ht){ft!==ht&&(ot&&(ht=1-ht),r.clearDepth(ht),ft=ht)},reset:function(){N=!1,Y=null,K=null,ft=null,ot=!1}}}function s(){let N=!1,ot=null,Y=null,K=null,ft=null,ht=null,Dt=null,le=null,ye=null;return{setTest:function(jt){N||(jt?st(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(jt){ot!==jt&&!N&&(r.stencilMask(jt),ot=jt)},setFunc:function(jt,qe,on){(Y!==jt||K!==qe||ft!==on)&&(r.stencilFunc(jt,qe,on),Y=jt,K=qe,ft=on)},setOp:function(jt,qe,on){(ht!==jt||Dt!==qe||le!==on)&&(r.stencilOp(jt,qe,on),ht=jt,Dt=qe,le=on)},setLocked:function(jt){N=jt},setClear:function(jt){ye!==jt&&(r.clearStencil(jt),ye=jt)},reset:function(){N=!1,ot=null,Y=null,K=null,ft=null,ht=null,Dt=null,le=null,ye=null}}}const i=new e,a=new n,o=new s,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,c=[],m=null,g=!1,p=null,_=null,E=null,T=null,A=null,x=null,y=null,M=new Gt(0,0,0),b=0,S=!1,v=null,w=null,P=null,D=null,U=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=G>=2);let j=null,it={};const ct=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Lt=new ue().fromArray(ct),q=new ue().fromArray(yt);function tt(N,ot,Y,K){const ft=new Uint8Array(4),ht=r.createTexture();r.bindTexture(N,ht),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Dt=0;Dt<Y;Dt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ot,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(ot+Dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return ht}const Q={};Q[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(r.DEPTH_TEST),a.setFunc(bi),Ot(!1),Bt(Oa),st(r.CULL_FACE),I(Pn);function st(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function dt(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Tt(N,ot){return d[N]!==ot?(r.bindFramebuffer(N,ot),d[N]=ot,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ot),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ot),!0):!1}function bt(N,ot){let Y=c,K=!1;if(N){Y=f.get(ot),Y===void 0&&(Y=[],f.set(ot,Y));const ft=N.textures;if(Y.length!==ft.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Dt=ft.length;ht<Dt;ht++)Y[ht]=r.COLOR_ATTACHMENT0+ht;Y.length=ft.length,K=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,K=!0);K&&r.drawBuffers(Y)}function Vt(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const wt={[Yn]:r.FUNC_ADD,[Hl]:r.FUNC_SUBTRACT,[Gl]:r.FUNC_REVERSE_SUBTRACT};wt[kl]=r.MIN,wt[Vl]=r.MAX;const re={[Wl]:r.ZERO,[Xl]:r.ONE,[Yl]:r.SRC_COLOR,[Cr]:r.SRC_ALPHA,[Jl]:r.SRC_ALPHA_SATURATE,[Kl]:r.DST_COLOR,[$l]:r.DST_ALPHA,[ql]:r.ONE_MINUS_SRC_COLOR,[Rr]:r.ONE_MINUS_SRC_ALPHA,[jl]:r.ONE_MINUS_DST_COLOR,[Zl]:r.ONE_MINUS_DST_ALPHA,[Ql]:r.CONSTANT_COLOR,[tc]:r.ONE_MINUS_CONSTANT_COLOR,[ec]:r.CONSTANT_ALPHA,[nc]:r.ONE_MINUS_CONSTANT_ALPHA};function I(N,ot,Y,K,ft,ht,Dt,le,ye,jt){if(N===Pn){g===!0&&(dt(r.BLEND),g=!1);return}if(g===!1&&(st(r.BLEND),g=!0),N!==zl){if(N!==p||jt!==S){if((_!==Yn||A!==Yn)&&(r.blendEquation(r.FUNC_ADD),_=Yn,A=Yn),jt)switch(N){case Ei:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.ONE,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case za:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ei:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ba:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case za:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,T=null,x=null,y=null,M.set(0,0,0),b=0,p=N,S=jt}return}ft=ft||ot,ht=ht||Y,Dt=Dt||K,(ot!==_||ft!==A)&&(r.blendEquationSeparate(wt[ot],wt[ft]),_=ot,A=ft),(Y!==E||K!==T||ht!==x||Dt!==y)&&(r.blendFuncSeparate(re[Y],re[K],re[ht],re[Dt]),E=Y,T=K,x=ht,y=Dt),(le.equals(M)===!1||ye!==b)&&(r.blendColor(le.r,le.g,le.b,ye),M.copy(le),b=ye),p=N,S=!1}function Ie(N,ot){N.side===mn?dt(r.CULL_FACE):st(r.CULL_FACE);let Y=N.side===Fe;ot&&(Y=!Y),Ot(Y),N.blending===Ei&&N.transparent===!1?I(Pn):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),i.setMask(N.colorWrite);const K=N.stencilWrite;o.setTest(K),K&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(N){v!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),v=N)}function Bt(N){N!==Nl?(st(r.CULL_FACE),N!==w&&(N===Oa?r.cullFace(r.BACK):N===Ol?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),w=N}function xt(N){N!==P&&(z&&r.lineWidth(N),P=N)}function zt(N,ot,Y){N?(st(r.POLYGON_OFFSET_FILL),(D!==ot||U!==Y)&&(r.polygonOffset(ot,Y),D=ot,U=Y)):dt(r.POLYGON_OFFSET_FILL)}function St(N){N?st(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function L(N){N===void 0&&(N=r.TEXTURE0+F-1),j!==N&&(r.activeTexture(N),j=N)}function C(N,ot,Y){Y===void 0&&(j===null?Y=r.TEXTURE0+F-1:Y=j);let K=it[Y];K===void 0&&(K={type:void 0,texture:void 0},it[Y]=K),(K.type!==N||K.texture!==ot)&&(j!==Y&&(r.activeTexture(Y),j=Y),r.bindTexture(N,ot||Q[N]),K.type=N,K.texture=ot)}function V(){const N=it[j];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(N){Lt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function gt(N){q.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function Wt(N,ot){let Y=u.get(ot);Y===void 0&&(Y=new WeakMap,u.set(ot,Y));let K=Y.get(N);K===void 0&&(K=r.getUniformBlockIndex(ot,N.name),Y.set(N,K))}function Ut(N,ot){const K=u.get(ot).get(N);l.get(ot)!==K&&(r.uniformBlockBinding(ot,K,N.__bindingPointIndex),l.set(ot,K))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},j=null,it={},d={},f=new WeakMap,c=[],m=null,g=!1,p=null,_=null,E=null,T=null,A=null,x=null,y=null,M=new Gt(0,0,0),b=0,S=!1,v=null,w=null,P=null,D=null,U=null,Lt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:st,disable:dt,bindFramebuffer:Tt,drawBuffers:bt,useProgram:Vt,setBlending:I,setMaterial:Ie,setFlipSided:Ot,setCullFace:Bt,setLineWidth:xt,setPolygonOffset:zt,setScissorTest:St,activeTexture:L,bindTexture:C,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:mt,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:Nt,texStorage3D:nt,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Ct,viewport:gt,reset:ne}}function Op(r,t,e,n,s,i,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new kt,h=new WeakMap;let d;const f=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,C){return c?new OffscreenCanvas(L,C):Yi("canvas")}function g(L,C,V){let Z=1;const J=St(L);if((J.width>V||J.height>V)&&(Z=V/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(Z*J.width),vt=Math.floor(Z*J.height);d===void 0&&(d=m($,vt));const at=C?m($,vt):d;return at.width=$,at.height=vt,at.getContext("2d").drawImage(L,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+vt+")."),at}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function p(L){return L.generateMipmaps}function _(L){r.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(L,C,V,Z,J=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=C;if(C===r.RED&&(V===r.FLOAT&&($=r.R32F),V===r.HALF_FLOAT&&($=r.R16F),V===r.UNSIGNED_BYTE&&($=r.R8)),C===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.R8UI),V===r.UNSIGNED_SHORT&&($=r.R16UI),V===r.UNSIGNED_INT&&($=r.R32UI),V===r.BYTE&&($=r.R8I),V===r.SHORT&&($=r.R16I),V===r.INT&&($=r.R32I)),C===r.RG&&(V===r.FLOAT&&($=r.RG32F),V===r.HALF_FLOAT&&($=r.RG16F),V===r.UNSIGNED_BYTE&&($=r.RG8)),C===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RG8UI),V===r.UNSIGNED_SHORT&&($=r.RG16UI),V===r.UNSIGNED_INT&&($=r.RG32UI),V===r.BYTE&&($=r.RG8I),V===r.SHORT&&($=r.RG16I),V===r.INT&&($=r.RG32I)),C===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGB8UI),V===r.UNSIGNED_SHORT&&($=r.RGB16UI),V===r.UNSIGNED_INT&&($=r.RGB32UI),V===r.BYTE&&($=r.RGB8I),V===r.SHORT&&($=r.RGB16I),V===r.INT&&($=r.RGB32I)),C===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RGBA8UI),V===r.UNSIGNED_SHORT&&($=r.RGBA16UI),V===r.UNSIGNED_INT&&($=r.RGBA32UI),V===r.BYTE&&($=r.RGBA8I),V===r.SHORT&&($=r.RGBA16I),V===r.INT&&($=r.RGBA32I)),C===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),C===r.RGBA){const vt=J?Os:qt.getTransfer(Z);V===r.FLOAT&&($=r.RGBA32F),V===r.HALF_FLOAT&&($=r.RGBA16F),V===r.UNSIGNED_BYTE&&($=vt===Qt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function A(L,C){let V;return L?C===null||C===Jn||C===Ri?V=r.DEPTH24_STENCIL8:C===gn?V=r.DEPTH32F_STENCIL8:C===Xi&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Jn||C===Ri?V=r.DEPTH_COMPONENT24:C===gn?V=r.DEPTH_COMPONENT32F:C===Xi&&(V=r.DEPTH_COMPONENT16),V}function x(L,C){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==Ge?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function y(L){const C=L.target;C.removeEventListener("dispose",y),b(C),C.isVideoTexture&&h.delete(C)}function M(L){const C=L.target;C.removeEventListener("dispose",M),v(C)}function b(L){const C=n.get(L);if(C.__webglInit===void 0)return;const V=L.source,Z=f.get(V);if(Z){const J=Z[C.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(L),Object.keys(Z).length===0&&f.delete(V)}n.remove(L)}function S(L){const C=n.get(L);r.deleteTexture(C.__webglTexture);const V=L.source,Z=f.get(V);delete Z[C.__cacheKey],a.memory.textures--}function v(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(C.__webglFramebuffer[Z]))for(let J=0;J<C.__webglFramebuffer[Z].length;J++)r.deleteFramebuffer(C.__webglFramebuffer[Z][J]);else r.deleteFramebuffer(C.__webglFramebuffer[Z]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[Z])}else{if(Array.isArray(C.__webglFramebuffer))for(let Z=0;Z<C.__webglFramebuffer.length;Z++)r.deleteFramebuffer(C.__webglFramebuffer[Z]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Z=0;Z<C.__webglColorRenderbuffer.length;Z++)C.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[Z]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const V=L.textures;for(let Z=0,J=V.length;Z<J;Z++){const $=n.get(V[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(L)}let w=0;function P(){w=0}function D(){const L=w;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),w+=1,L}function U(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function F(L,C){const V=n.get(L);if(L.isVideoTexture&&xt(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,L,C);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+C)}function z(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){q(V,L,C);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+C)}function G(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){q(V,L,C);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+C)}function H(L,C){const V=n.get(L);if(L.version>0&&V.__version!==L.version){tt(V,L,C);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+C)}const j={[zr]:r.REPEAT,[$n]:r.CLAMP_TO_EDGE,[Hr]:r.MIRRORED_REPEAT},it={[en]:r.NEAREST,[fc]:r.NEAREST_MIPMAP_NEAREST,[es]:r.NEAREST_MIPMAP_LINEAR,[Ge]:r.LINEAR,[Ys]:r.LINEAR_MIPMAP_NEAREST,[Zn]:r.LINEAR_MIPMAP_LINEAR},ct={[_c]:r.NEVER,[Ec]:r.ALWAYS,[vc]:r.LESS,[ll]:r.LEQUAL,[xc]:r.EQUAL,[Mc]:r.GEQUAL,[Sc]:r.GREATER,[yc]:r.NOTEQUAL};function yt(L,C){if(C.type===gn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Ge||C.magFilter===Ys||C.magFilter===es||C.magFilter===Zn||C.minFilter===Ge||C.minFilter===Ys||C.minFilter===es||C.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,j[C.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,j[C.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,j[C.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,it[C.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,it[C.minFilter]),C.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,ct[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===en||C.minFilter!==es&&C.minFilter!==Zn||C.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Lt(L,C){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",y));const Z=C.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const $=U(C);if($!==L.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),J[$].usedTimes++;const vt=J[L.__cacheKey];vt!==void 0&&(J[L.__cacheKey].usedTimes--,vt.usedTimes===0&&S(C)),L.__cacheKey=$,L.__webglTexture=J[$].texture}return V}function q(L,C,V){let Z=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Z=r.TEXTURE_3D);const J=Lt(L,C),$=C.source;e.bindTexture(Z,L.__webglTexture,r.TEXTURE0+V);const vt=n.get($);if($.version!==vt.__version||J===!0){e.activeTexture(r.TEXTURE0+V);const at=qt.getPrimaries(qt.workingColorSpace),ut=C.colorSpace===Rn?null:qt.getPrimaries(C.colorSpace),Nt=C.colorSpace===Rn||at===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let nt=g(C.image,!1,s.maxTextureSize);nt=zt(C,nt);const mt=i.convert(C.format,C.colorSpace),At=i.convert(C.type);let Ct=T(C.internalFormat,mt,At,C.colorSpace,C.isVideoTexture);yt(Z,C);let gt;const Wt=C.mipmaps,Ut=C.isVideoTexture!==!0,ne=vt.__version===void 0||J===!0,N=$.dataReady,ot=x(C,nt);if(C.isDepthTexture)Ct=A(C.format===Pi,C.type),ne&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,Ct,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Ct,nt.width,nt.height,0,mt,At,null));else if(C.isDataTexture)if(Wt.length>0){Ut&&ne&&e.texStorage2D(r.TEXTURE_2D,ot,Ct,Wt[0].width,Wt[0].height);for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,Y,Ct,gt.width,gt.height,0,mt,At,gt.data);C.generateMipmaps=!1}else Ut?(ne&&e.texStorage2D(r.TEXTURE_2D,ot,Ct,nt.width,nt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,At,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Ct,nt.width,nt.height,0,mt,At,nt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ut&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Ct,Wt[0].width,Wt[0].height,nt.depth);for(let Y=0,K=Wt.length;Y<K;Y++)if(gt=Wt[Y],C.format!==tn)if(mt!==null)if(Ut){if(N)if(C.layerUpdates.size>0){const ft=po(gt.width,gt.height,C.format,C.type);for(const ht of C.layerUpdates){const Dt=gt.data.subarray(ht*ft/gt.data.BYTES_PER_ELEMENT,(ht+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,ht,gt.width,gt.height,1,mt,Dt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Ct,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,nt.depth,mt,At,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,Ct,gt.width,gt.height,nt.depth,0,mt,At,gt.data)}else{Ut&&ne&&e.texStorage2D(r.TEXTURE_2D,ot,Ct,Wt[0].width,Wt[0].height);for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],C.format!==tn?mt!==null?Ut?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,Y,Ct,gt.width,gt.height,0,mt,At,gt.data)}else if(C.isDataArrayTexture)if(Ut){if(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Ct,nt.width,nt.height,nt.depth),N)if(C.layerUpdates.size>0){const Y=po(nt.width,nt.height,C.format,C.type);for(const K of C.layerUpdates){const ft=nt.data.subarray(K*Y/nt.data.BYTES_PER_ELEMENT,(K+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,mt,At,ft)}C.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,At,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,nt.width,nt.height,nt.depth,0,mt,At,nt.data);else if(C.isData3DTexture)Ut?(ne&&e.texStorage3D(r.TEXTURE_3D,ot,Ct,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,At,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,nt.width,nt.height,nt.depth,0,mt,At,nt.data);else if(C.isFramebufferTexture){if(ne)if(Ut)e.texStorage2D(r.TEXTURE_2D,ot,Ct,nt.width,nt.height);else{let Y=nt.width,K=nt.height;for(let ft=0;ft<ot;ft++)e.texImage2D(r.TEXTURE_2D,ft,Ct,Y,K,0,mt,At,null),Y>>=1,K>>=1}}else if(Wt.length>0){if(Ut&&ne){const Y=St(Wt[0]);e.texStorage2D(r.TEXTURE_2D,ot,Ct,Y.width,Y.height)}for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,mt,At,gt):e.texImage2D(r.TEXTURE_2D,Y,Ct,mt,At,gt);C.generateMipmaps=!1}else if(Ut){if(ne){const Y=St(nt);e.texStorage2D(r.TEXTURE_2D,ot,Ct,Y.width,Y.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,At,nt)}else e.texImage2D(r.TEXTURE_2D,0,Ct,mt,At,nt);p(C)&&_(Z),vt.__version=$.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function tt(L,C,V){if(C.image.length!==6)return;const Z=Lt(L,C),J=C.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+V);const $=n.get(J);if(J.version!==$.__version||Z===!0){e.activeTexture(r.TEXTURE0+V);const vt=qt.getPrimaries(qt.workingColorSpace),at=C.colorSpace===Rn?null:qt.getPrimaries(C.colorSpace),ut=C.colorSpace===Rn||vt===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Nt=C.isCompressedTexture||C.image[0].isCompressedTexture,nt=C.image[0]&&C.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Nt&&!nt?mt[K]=g(C.image[K],!0,s.maxCubemapSize):mt[K]=nt?C.image[K].image:C.image[K],mt[K]=zt(C,mt[K]);const At=mt[0],Ct=i.convert(C.format,C.colorSpace),gt=i.convert(C.type),Wt=T(C.internalFormat,Ct,gt,C.colorSpace),Ut=C.isVideoTexture!==!0,ne=$.__version===void 0||Z===!0,N=J.dataReady;let ot=x(C,At);yt(r.TEXTURE_CUBE_MAP,C);let Y;if(Nt){Ut&&ne&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,Wt,At.width,At.height);for(let K=0;K<6;K++){Y=mt[K].mipmaps;for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];C.format!==tn?Ct!==null?Ut?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,Ct,ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ht.width,ht.height,Ct,gt,ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Wt,ht.width,ht.height,0,Ct,gt,ht.data)}}}else{if(Y=C.mipmaps,Ut&&ne){Y.length>0&&ot++;const K=St(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Ct,gt,mt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,mt[K].width,mt[K].height,0,Ct,gt,mt[K].data);for(let ft=0;ft<Y.length;ft++){const Dt=Y[ft].image[K].image;Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Dt.width,Dt.height,Ct,gt,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Wt,Dt.width,Dt.height,0,Ct,gt,Dt.data)}}else{Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,gt,mt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,Ct,gt,mt[K]);for(let ft=0;ft<Y.length;ft++){const ht=Y[ft];Ut?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Ct,gt,ht.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Wt,Ct,gt,ht.image[K])}}}p(C)&&_(r.TEXTURE_CUBE_MAP),$.__version=J.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Q(L,C,V,Z,J,$){const vt=i.convert(V.format,V.colorSpace),at=i.convert(V.type),ut=T(V.internalFormat,vt,at,V.colorSpace),Nt=n.get(C),nt=n.get(V);if(nt.__renderTarget=C,!Nt.__hasExternalTextures){const mt=Math.max(1,C.width>>$),At=Math.max(1,C.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,$,ut,mt,At,C.depth,0,vt,at,null):e.texImage2D(J,$,ut,mt,At,0,vt,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),Bt(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,J,nt.__webglTexture,0,Ot(C)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,J,nt.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,C,V){if(r.bindRenderbuffer(r.RENDERBUFFER,L),C.depthBuffer){const Z=C.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=A(C.stencilBuffer,J),vt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Ot(C);Bt(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,$,C.width,C.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,$,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,$,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,L)}else{const Z=C.textures;for(let J=0;J<Z.length;J++){const $=Z[J],vt=i.convert($.format,$.colorSpace),at=i.convert($.type),ut=T($.internalFormat,vt,at,$.colorSpace),Nt=Ot(C);V&&Bt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,ut,C.width,C.height):Bt(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt,ut,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ut,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(C.depthTexture);Z.__renderTarget=C,(!Z.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const J=Z.__webglTexture,$=Ot(C);if(C.depthTexture.format===Ti)Bt(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(C.depthTexture.format===Pi)Bt(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Tt(L){const C=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const Z=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Z){const J=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),C.__depthDisposeCallback=J}C.__boundDepthTexture=Z}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");dt(C.__webglFramebuffer,L)}else if(V){C.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Z]),C.__webglDepthbuffer[Z]===void 0)C.__webglDepthbuffer[Z]=r.createRenderbuffer(),st(C.__webglDepthbuffer[Z],L,!1);else{const J=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=C.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),st(C.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(L,C,V){const Z=n.get(L);C!==void 0&&Q(Z.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Tt(L)}function Vt(L){const C=L.texture,V=n.get(L),Z=n.get(C);L.addEventListener("dispose",M);const J=L.textures,$=L.isWebGLCubeRenderTarget===!0,vt=J.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=C.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer[at]=[];for(let ut=0;ut<C.mipmaps.length;ut++)V.__webglFramebuffer[at][ut]=r.createFramebuffer()}else V.__webglFramebuffer[at]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer=[];for(let at=0;at<C.mipmaps.length;at++)V.__webglFramebuffer[at]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(vt)for(let at=0,ut=J.length;at<ut;at++){const Nt=n.get(J[at]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),a.memory.textures++)}if(L.samples>0&&Bt(L)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ut=J[at];V.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[at]);const Nt=i.convert(ut.format,ut.colorSpace),nt=i.convert(ut.type),mt=T(ut.internalFormat,Nt,nt,ut.colorSpace,L.isXRRenderTarget===!0),At=Ot(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,mt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,V.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),st(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),yt(r.TEXTURE_CUBE_MAP,C);for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)Q(V.__webglFramebuffer[at][ut],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else Q(V.__webglFramebuffer[at],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);p(C)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ut=J.length;at<ut;at++){const Nt=J[at],nt=n.get(Nt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),yt(r.TEXTURE_2D,Nt),Q(V.__webglFramebuffer,L,Nt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),p(Nt)&&_(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(at=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),yt(at,C),C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)Q(V.__webglFramebuffer[ut],L,C,r.COLOR_ATTACHMENT0,at,ut);else Q(V.__webglFramebuffer,L,C,r.COLOR_ATTACHMENT0,at,0);p(C)&&_(at),e.unbindTexture()}L.depthBuffer&&Tt(L)}function wt(L){const C=L.textures;for(let V=0,Z=C.length;V<Z;V++){const J=C[V];if(p(J)){const $=E(L),vt=n.get(J).__webglTexture;e.bindTexture($,vt),_($),e.unbindTexture()}}}const re=[],I=[];function Ie(L){if(L.samples>0){if(Bt(L)===!1){const C=L.textures,V=L.width,Z=L.height;let J=r.COLOR_BUFFER_BIT;const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(L),at=C.length>1;if(at)for(let ut=0;ut<C.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<C.length;ut++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Nt=n.get(C[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Nt,0)}r.blitFramebuffer(0,0,V,Z,0,0,V,Z,J,r.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(r.COLOR_ATTACHMENT0+ut),L.depthBuffer&&L.resolveDepthBuffer===!1&&(re.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<C.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const Nt=n.get(C[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,Nt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function Ot(L){return Math.min(s.maxSamples,L.samples)}function Bt(L){const C=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function xt(L){const C=a.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function zt(L,C){const V=L.colorSpace,Z=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Li&&V!==Rn&&(qt.getTransfer(V)===Qt?(Z!==tn||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),C}function St(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=bt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Bt}function Bp(r,t){function e(n,s=Rn){let i;const a=qt.getTransfer(s);if(n===xn)return r.UNSIGNED_BYTE;if(n===Sa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return r.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jo)return r.BYTE;if(n===Qo)return r.SHORT;if(n===Xi)return r.UNSIGNED_SHORT;if(n===xa)return r.INT;if(n===Jn)return r.UNSIGNED_INT;if(n===gn)return r.FLOAT;if(n===$i)return r.HALF_FLOAT;if(n===el)return r.ALPHA;if(n===nl)return r.RGB;if(n===tn)return r.RGBA;if(n===il)return r.LUMINANCE;if(n===sl)return r.LUMINANCE_ALPHA;if(n===Ti)return r.DEPTH_COMPONENT;if(n===Pi)return r.DEPTH_STENCIL;if(n===rl)return r.RED;if(n===Ma)return r.RED_INTEGER;if(n===al)return r.RG;if(n===Ea)return r.RG_INTEGER;if(n===Ta)return r.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ds||n===Is)if(a===Qt)if(i=t.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(n===Ps)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get("WEBGL_compressed_texture_s3tc"),i!==null){if(n===Ps)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===kr||n===Vr||n===Wr)if(i=t.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(n===Gr)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===Yr||n===qr)if(i=t.get("WEBGL_compressed_texture_etc"),i!==null){if(n===Xr||n===Yr)return a===Qt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===qr)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$r||n===Zr||n===Kr||n===jr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(i=t.get("WEBGL_compressed_texture_astc"),i!==null){if(n===$r)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jr)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===Qt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===la||n===ca)if(i=t.get("EXT_texture_compression_bptc"),i!==null){if(n===Us)return a===Qt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===ha||n===ua||n===fa)if(i=t.get("EXT_texture_compression_rgtc"),i!==null){if(n===Us)return i.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const zp={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,i=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),_=this._getHandJoint(u,g);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),c=.02,m=.005;u.inputState.pinching&&f>c+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=c-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(i=e.getPose(t.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&i!==null&&(s=i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=i!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gp=`
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

}`;class kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,i=t.properties.get(s);i.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:Hp,fragmentShader:Gp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ie(new me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vp extends Ii{constructor(t,e){super();const n=this;let s=null,i=1,a=null,o="local-floor",l=1,u=null,h=null,d=null,f=null,c=null,m=null;const g=new kp,p=e.getContextAttributes();let _=null,E=null;const T=[],A=[],x=new kt;let y=null;const M=new Qe;M.viewport=new ue;const b=new Qe;b.viewport=new ue;const S=[M,b],v=new ch;let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=T[q];return tt===void 0&&(tt=new Er,T[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=T[q];return tt===void 0&&(tt=new Er,T[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=T[q];return tt===void 0&&(tt=new Er,T[q]=tt),tt.getHandSpace()};function D(q){const tt=A.indexOf(q.inputSource);if(tt===-1)return;const Q=T[tt];Q!==void 0&&(Q.update(q.inputSource,q.frame,u||a),Q.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F);for(let q=0;q<T.length;q++){const tt=A[q];tt!==null&&(A[q]=null,T[q].disconnect(tt))}w=null,P=null,g.reset(),t.setRenderTarget(_),c=null,f=null,d=null,s=null,E=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){i=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:c},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(x),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Q=null,st=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Pi:Ti,st=p.stencil?Ri:Jn);const Tt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:i};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Qn(f.textureWidth,f.textureHeight,{format:tn,type:xn,depthTexture:new El(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};c=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),E=new Qn(c.framebufferWidth,c.framebufferHeight,{format:tn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(q){for(let tt=0;tt<q.removed.length;tt++){const Q=q.removed[tt],st=A.indexOf(Q);st>=0&&(A[st]=null,T[st].disconnect(Q))}for(let tt=0;tt<q.added.length;tt++){const Q=q.added[tt];let st=A.indexOf(Q);if(st===-1){for(let Tt=0;Tt<T.length;Tt++)if(Tt>=A.length){A.push(Q),st=Tt;break}else if(A[Tt]===null){A[Tt]=Q,st=Tt;break}if(st===-1)break}const dt=T[st];dt&&dt.connect(Q)}}const z=new k,G=new k;function H(q,tt,Q){z.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(Q.matrixWorld);const st=z.distanceTo(G),dt=tt.projectionMatrix.elements,Tt=Q.projectionMatrix.elements,bt=dt[14]/(dt[10]-1),Vt=dt[14]/(dt[10]+1),wt=(dt[9]+1)/dt[5],re=(dt[9]-1)/dt[5],I=(dt[8]-1)/dt[0],Ie=(Tt[8]+1)/Tt[0],Ot=bt*I,Bt=bt*Ie,xt=st/(-I+Ie),zt=xt*-I;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const St=bt+xt,L=Vt+xt,C=Ot-zt,V=Bt+(st-zt),Z=wt*Vt/L*St,J=re*Vt/L*St;q.projectionMatrix.makePerspective(C,V,Z,J,St,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,Q=q.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),v.near=b.near=M.near=tt,v.far=b.far=M.far=Q,(w!==v.near||P!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,P=v.far),M.layers.mask=q.layers.mask|2,b.layers.mask=q.layers.mask|4,v.layers.mask=M.layers.mask|b.layers.mask;const st=q.parent,dt=v.cameras;j(v,st);for(let Tt=0;Tt<dt.length;Tt++)j(dt[Tt],st);dt.length===2?H(v,M,b):v.projectionMatrix.copy(M.projectionMatrix),it(q,v,st)};function it(q,tt,Q){Q===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(Q.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&c===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ct=null;function yt(q,tt){if(h=tt.getViewerPose(u||a),m=tt,h!==null){const Q=h.views;c!==null&&(t.setRenderTargetFramebuffer(E,c.framebuffer),t.setRenderTarget(E));let st=!1;Q.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let Tt=0;Tt<Q.length;Tt++){const bt=Q[Tt];let Vt=null;if(c!==null)Vt=c.getViewport(bt);else{const re=d.getViewSubImage(f,bt);Vt=re.viewport,Tt===0&&(t.setRenderTargetTextures(E,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(E))}let wt=S[Tt];wt===void 0&&(wt=new Qe,wt.layers.enable(Tt),wt.viewport=new ue,S[Tt]=wt),wt.matrix.fromArray(bt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(bt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Tt===0&&(v.matrix.copy(wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(wt)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const Tt=d.getDepthInformation(Q[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,s.renderState)}}for(let Q=0;Q<T.length;Q++){const st=A[Q],dt=T[Q];st!==null&&dt!==void 0&&dt.update(st,tt,u||a)}ct&&ct(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const Lt=new Al;Lt.setAnimationLoop(yt),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}const kn=new Sn,Wp=new oe;function Xp(r,t){function e(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,gl(r)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function s(p,_,E,T,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(p,_):_.isMeshToonMaterial?(i(p,_),d(p,_)):_.isMeshPhongMaterial?(i(p,_),h(p,_)):_.isMeshStandardMaterial?(i(p,_),f(p,_),_.isMeshPhysicalMaterial&&c(p,_,A)):_.isMeshMatcapMaterial?(i(p,_),m(p,_)):_.isMeshDepthMaterial?i(p,_):_.isMeshDistanceMaterial?(i(p,_),g(p,_)):_.isMeshNormalMaterial?i(p,_):_.isLineBasicMaterial?(a(p,_),_.isLineDashedMaterial&&o(p,_)):_.isPointsMaterial?l(p,_,E,T):_.isSpriteMaterial?u(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,e(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===Fe&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,e(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===Fe&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,e(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,e(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const E=t.get(_),T=E.envMap,A=E.envMapRotation;T&&(p.envMap.value=T,kn.copy(A),kn.x*=-1,kn.y*=-1,kn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(kn)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,p.aoMapTransform))}function a(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform))}function o(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,E,T){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*E,p.scale.value=T*.5,_.map&&(p.map.value=_.map,e(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function h(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function d(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function f(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function c(p,_,E){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fe&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function g(p,_){const E=t.get(_).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yp(r,t,e,n){let s={},i={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const A=T.program;n.uniformBlockBinding(E,A)}function u(E,T){let A=s[E.id];A===void 0&&(m(E),A=h(E),s[E.id]=A,E.addEventListener("dispose",p));const x=T.program;n.updateUBOMapping(E,x);const y=t.render.frame;i[E.id]!==y&&(f(E),i[E.id]=y)}function h(E){const T=d();E.__bindingPointIndex=T;const A=r.createBuffer(),x=E.__size,y=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,x,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,A),A}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=s[E.id],A=E.uniforms,x=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let y=0,M=A.length;y<M;y++){const b=Array.isArray(A[y])?A[y]:[A[y]];for(let S=0,v=b.length;S<v;S++){const w=b[S];if(c(w,y,S,x)===!0){const P=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let F=0;F<D.length;F++){const z=D[F],G=g(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,P+U,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function c(E,T,A,x){const y=E.value,M=T+"_"+A;if(x[M]===void 0)return typeof y=="number"||typeof y=="boolean"?x[M]=y:x[M]=y.clone(),!0;{const b=x[M];if(typeof y=="number"||typeof y=="boolean"){if(b!==y)return x[M]=y,!0}else if(b.equals(y)===!1)return b.copy(y),!0}return!1}function m(E){const T=E.uniforms;let A=0;const x=16;for(let M=0,b=T.length;M<b;M++){const S=Array.isArray(T[M])?T[M]:[T[M]];for(let v=0,w=S.length;v<w;v++){const P=S[v],D=Array.isArray(P.value)?P.value:[P.value];for(let U=0,F=D.length;U<F;U++){const z=D[U],G=g(z),H=A%x,j=H%G.boundary,it=H+j;A+=j,it!==0&&x-it<G.storage&&(A+=x-it),P.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=G.storage}}}const y=A%x;return y>0&&(A+=x-y),E.__size=A,E.__cache={},this}function g(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function p(E){const T=E.target;T.removeEventListener("dispose",p);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(s[T.id]),delete s[T.id],delete i[T.id]}function _(){for(const E in s)r.deleteBuffer(s[E]);a=[],s={},i={}}return{bind:l,update:u,dispose:_}}class qp{constructor(t={}){const{canvas:e=Ac(),context:n=null,depth:s=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=a;const m=new Uint32Array(4),g=new Int32Array(4);let p=null,_=null;const E=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Ln,this.toneMappingExposure=1;const A=this;let x=!1,y=0,M=0,b=null,S=-1,v=null;const w=new ue,P=new ue;let D=null;const U=new Gt(0);let F=0,z=e.width,G=e.height,H=1,j=null,it=null;const ct=new ue(0,0,z,G),yt=new ue(0,0,z,G);let Lt=!1;const q=new Sl;let tt=!1,Q=!1;this.transmissionResolutionScale=1;const st=new oe,dt=new oe,Tt=new k,bt=new ue,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function re(){return b===null?H:1}let I=n;function Ie(R,O){return e.getContext(R,O)}try{const R={alpha:!0,depth:s,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),I===null){const O="webgl2";if(I=Ie(O,R),I===null)throw Ie(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ot,Bt,xt,zt,St,L,C,V,Z,J,$,vt,at,ut,Nt,nt,mt,At,Ct,gt,Wt,Ut,ne,N;function ot(){Ot=new nd(I),Ot.init(),Ut=new Bp(I,Ot),Bt=new Kf(I,Ot,t,Ut),xt=new Np(I,Ot),Bt.reverseDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),zt=new rd(I),St=new Ep,L=new Op(I,Ot,xt,St,Bt,Ut,zt),C=new Jf(A),V=new ed(A),Z=new uh(I),ne=new $f(I,Z),J=new id(I,Z,zt,ne),$=new od(I,J,Z,zt),Ct=new ad(I,Bt,L),nt=new jf(St),vt=new Mp(A,C,V,Ot,Bt,ne,nt),at=new Xp(A,St),ut=new Ap,Nt=new Lp(Ot),At=new qf(A,C,V,xt,$,c,l),mt=new Up(A,$,Bt),N=new Yp(I,zt,Bt,xt),gt=new Zf(I,Ot,zt),Wt=new sd(I,Ot,zt),zt.programs=vt.programs,A.capabilities=Bt,A.extensions=Ot,A.properties=St,A.renderLists=ut,A.shadowMap=mt,A.state=xt,A.info=zt}ot();const Y=new Vp(A,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(z,G,!1))},this.getSize=function(R){return R.set(z,G)},this.setSize=function(R,O,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,G=O,e.width=Math.floor(R*H),e.height=Math.floor(O*H),W===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(z*H,G*H).floor()},this.setDrawingBufferSize=function(R,O,W){z=R,G=O,H=W,e.width=Math.floor(R*W),e.height=Math.floor(O*W),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(ct)},this.setViewport=function(R,O,W,X){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,O,W,X),xt.viewport(w.copy(ct).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,O,W,X){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,O,W,X),xt.scissor(P.copy(yt).multiplyScalar(H).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(R){xt.setScissorTest(Lt=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(R=!0,O=!0,W=!0){let X=0;if(R){let B=!1;if(b!==null){const et=b.texture.format;B=et===Ta||et===Ea||et===Ma}if(B){const et=b.texture.type,lt=et===xn||et===Jn||et===Xi||et===Ri||et===Sa||et===ya,pt=At.getClearColor(),_t=At.getClearAlpha(),Rt=pt.r,Pt=pt.g,Mt=pt.b;lt?(m[0]=Rt,m[1]=Pt,m[2]=Mt,m[3]=_t,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Rt,g[1]=Pt,g[2]=Mt,g[3]=_t,I.clearBufferiv(I.COLOR,0,g))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),W&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),At.dispose(),ut.dispose(),Nt.dispose(),St.dispose(),C.dispose(),V.dispose(),$.dispose(),ne.dispose(),N.dispose(),vt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Pa),Y.removeEventListener("sessionend",La),Fn.stop()};function K(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=zt.autoReset,O=mt.enabled,W=mt.autoUpdate,X=mt.needsUpdate,B=mt.type;ot(),zt.autoReset=R,mt.enabled=O,mt.autoUpdate=W,mt.needsUpdate=X,mt.type=B}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dt(R){const O=R.target;O.removeEventListener("dispose",Dt),le(O)}function le(R){ye(R),St.remove(R)}function ye(R){const O=St.get(R).programs;O!==void 0&&(O.forEach(function(W){vt.releaseProgram(W)}),R.isShaderMaterial&&vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,W,X,B,et){O===null&&(O=Vt);const lt=B.isMesh&&B.matrixWorld.determinant()<0,pt=Pl(R,O,W,X,B);xt.setMaterial(X,lt);let _t=W.index,Rt=1;if(X.wireframe===!0){if(_t=J.getWireframeAttribute(W),_t===void 0)return;Rt=2}const Pt=W.drawRange,Mt=W.attributes.position;let Xt=Pt.start*Rt,Zt=(Pt.start+Pt.count)*Rt;et!==null&&(Xt=Math.max(Xt,et.start*Rt),Zt=Math.min(Zt,(et.start+et.count)*Rt)),_t!==null?(Xt=Math.max(Xt,0),Zt=Math.min(Zt,_t.count)):Mt!=null&&(Xt=Math.max(Xt,0),Zt=Math.min(Zt,Mt.count));const fe=Zt-Xt;if(fe<0||fe===1/0)return;ne.setup(B,X,pt,W,_t);let ce,Yt=gt;if(_t!==null&&(ce=Z.get(_t),Yt=Wt,Yt.setIndex(ce)),B.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*re()),Yt.setMode(I.LINES)):Yt.setMode(I.TRIANGLES);else if(B.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),xt.setLineWidth(Et*re()),B.isLineSegments?Yt.setMode(I.LINES):B.isLineLoop?Yt.setMode(I.LINE_LOOP):Yt.setMode(I.LINE_STRIP)}else B.isPoints?Yt.setMode(I.POINTS):B.isSprite&&Yt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,Se=B._multiDrawCounts,Kt=B._multiDrawCount,$e=_t?Z.get(_t).bytesPerElement:1,ei=St.get(X).currentProgram.getUniforms();for(let Oe=0;Oe<Kt;Oe++)ei.setValue(I,"_gl_DrawID",Oe),Yt.render(Et[Oe]/$e,Se[Oe])}else if(B.isInstancedMesh)Yt.renderInstances(Xt,fe,B.count);else if(W.isInstancedBufferGeometry){const Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,Et);Yt.renderInstances(Xt,fe,Se)}else Yt.render(Xt,fe)};function jt(R,O,W){R.transparent===!0&&R.side===mn&&R.forceSinglePass===!1?(R.side=Fe,R.needsUpdate=!0,ts(R,O,W),R.side=Un,R.needsUpdate=!0,ts(R,O,W),R.side=mn):ts(R,O,W)}this.compile=function(R,O,W=null){W===null&&(W=R),_=Nt.get(W),_.init(O),T.push(_),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),R!==W&&R.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights();const X=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const et=B.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const pt=et[lt];jt(pt,W,B),X.add(pt)}else jt(et,W,B),X.add(et)}),T.pop(),_=null,X},this.compileAsync=function(R,O,W=null){const X=this.compile(R,O,W);return new Promise(B=>{function et(){if(X.forEach(function(lt){St.get(lt).currentProgram.isReady()&&X.delete(lt)}),X.size===0){B(R);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let qe=null;function on(R){qe&&qe(R)}function Pa(){Fn.stop()}function La(){Fn.start()}const Fn=new Al;Fn.setAnimationLoop(on),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(R){qe=R,Y.setAnimationLoop(R),R===null?Fn.stop():Fn.start()},Y.addEventListener("sessionstart",Pa),Y.addEventListener("sessionend",La),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,O,b),_=Nt.get(R,T.length),_.init(O),T.push(_),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,Q),p=ut.get(R,E.length),p.init(),E.push(p),Y.enabled===!0&&Y.isPresenting===!0){const et=A.xr.getDepthSensingMesh();et!==null&&Ws(et,O,-1/0,A.sortObjects)}Ws(R,O,0,A.sortObjects),p.finish(),A.sortObjects===!0&&p.sort(j,it),wt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,wt&&At.addToRenderList(p,R),this.info.render.frame++,tt===!0&&nt.beginShadows();const W=_.state.shadowsArray;mt.render(W,R,O),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,B=p.transmissive;if(_.setupLights(),O.isArrayCamera){const et=O.cameras;if(B.length>0)for(let lt=0,pt=et.length;lt<pt;lt++){const _t=et[lt];Ia(X,B,R,_t)}wt&&At.render(R);for(let lt=0,pt=et.length;lt<pt;lt++){const _t=et[lt];Da(p,R,_t,_t.viewport)}}else B.length>0&&Ia(X,B,R,O),wt&&At.render(R),Da(p,R,O);b!==null&&M===0&&(L.updateMultisampleRenderTarget(b),L.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(A,R,O),ne.resetDefaultState(),S=-1,v=null,T.pop(),T.length>0?(_=T[T.length-1],tt===!0&&nt.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Ws(R,O,W,X){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){X&&bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(dt);const lt=$.update(R),pt=R.material;pt.visible&&p.push(R,lt,pt,W,bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const lt=$.update(R),pt=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),bt.copy(R.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),bt.copy(lt.boundingSphere.center)),bt.applyMatrix4(R.matrixWorld).applyMatrix4(dt)),Array.isArray(pt)){const _t=lt.groups;for(let Rt=0,Pt=_t.length;Rt<Pt;Rt++){const Mt=_t[Rt],Xt=pt[Mt.materialIndex];Xt&&Xt.visible&&p.push(R,lt,Xt,W,bt.z,Mt)}}else pt.visible&&p.push(R,lt,pt,W,bt.z,null)}}const et=R.children;for(let lt=0,pt=et.length;lt<pt;lt++)Ws(et[lt],O,W,X)}function Da(R,O,W,X){const B=R.opaque,et=R.transmissive,lt=R.transparent;_.setupLightsView(W),tt===!0&&nt.setGlobalState(A.clippingPlanes,W),X&&xt.viewport(w.copy(X)),B.length>0&&Qi(B,O,W),et.length>0&&Qi(et,O,W),lt.length>0&&Qi(lt,O,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ia(R,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[X.id]===void 0&&(_.state.transmissionRenderTarget[X.id]=new Qn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?$i:xn,minFilter:Zn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const et=_.state.transmissionRenderTarget[X.id],lt=X.viewport||w;et.setSize(lt.z*A.transmissionResolutionScale,lt.w*A.transmissionResolutionScale);const pt=A.getRenderTarget();A.setRenderTarget(et),A.getClearColor(U),F=A.getClearAlpha(),F<1&&A.setClearColor(16777215,.5),A.clear(),wt&&At.render(W);const _t=A.toneMapping;A.toneMapping=Ln;const Rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),_.setupLightsView(X),tt===!0&&nt.setGlobalState(A.clippingPlanes,X),Qi(R,W,X),L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Mt=0,Xt=O.length;Mt<Xt;Mt++){const Zt=O[Mt],fe=Zt.object,ce=Zt.geometry,Yt=Zt.material,Et=Zt.group;if(Yt.side===mn&&fe.layers.test(X.layers)){const Se=Yt.side;Yt.side=Fe,Yt.needsUpdate=!0,Ua(fe,W,X,ce,Yt,Et),Yt.side=Se,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(L.updateMultisampleRenderTarget(et),L.updateRenderTargetMipmap(et))}A.setRenderTarget(pt),A.setClearColor(U,F),Rt!==void 0&&(X.viewport=Rt),A.toneMapping=_t}function Qi(R,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,et=R.length;B<et;B++){const lt=R[B],pt=lt.object,_t=lt.geometry,Rt=X===null?lt.material:X,Pt=lt.group;pt.layers.test(W.layers)&&Ua(pt,O,W,_t,Rt,Pt)}}function Ua(R,O,W,X,B,et){R.onBeforeRender(A,O,W,X,B,et),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(A,O,W,X,R,et),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Fe,B.needsUpdate=!0,A.renderBufferDirect(W,O,X,B,R,et),B.side=Un,B.needsUpdate=!0,A.renderBufferDirect(W,O,X,B,R,et),B.side=mn):A.renderBufferDirect(W,O,X,B,R,et),R.onAfterRender(A,O,W,X,B,et)}function ts(R,O,W){O.isScene!==!0&&(O=Vt);const X=St.get(R),B=_.state.lights,et=_.state.shadowsArray,lt=B.state.version,pt=vt.getParameters(R,B.state,et,O,W),_t=vt.getProgramCacheKey(pt);let Rt=X.programs;X.environment=R.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(R.isMeshStandardMaterial?V:C).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Rt===void 0&&(R.addEventListener("dispose",Dt),Rt=new Map,X.programs=Rt);let Pt=Rt.get(_t);if(Pt!==void 0){if(X.currentProgram===Pt&&X.lightsStateVersion===lt)return Na(R,pt),Pt}else pt.uniforms=vt.getUniforms(R),R.onBeforeCompile(pt,A),Pt=vt.acquireProgram(pt,_t),Rt.set(_t,Pt),X.uniforms=pt.uniforms;const Mt=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Na(R,pt),X.needsLights=Dl(R),X.lightsStateVersion=lt,X.needsLights&&(Mt.ambientLightColor.value=B.state.ambient,Mt.lightProbe.value=B.state.probe,Mt.directionalLights.value=B.state.directional,Mt.directionalLightShadows.value=B.state.directionalShadow,Mt.spotLights.value=B.state.spot,Mt.spotLightShadows.value=B.state.spotShadow,Mt.rectAreaLights.value=B.state.rectArea,Mt.ltc_1.value=B.state.rectAreaLTC1,Mt.ltc_2.value=B.state.rectAreaLTC2,Mt.pointLights.value=B.state.point,Mt.pointLightShadows.value=B.state.pointShadow,Mt.hemisphereLights.value=B.state.hemi,Mt.directionalShadowMap.value=B.state.directionalShadowMap,Mt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Mt.spotShadowMap.value=B.state.spotShadowMap,Mt.spotLightMatrix.value=B.state.spotLightMatrix,Mt.spotLightMap.value=B.state.spotLightMap,Mt.pointShadowMap.value=B.state.pointShadowMap,Mt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Pt,X.uniformsList=null,Pt}function Fa(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=Fs.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Na(R,O){const W=St.get(R);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Pl(R,O,W,X,B){O.isScene!==!0&&(O=Vt),L.resetTextureUnits();const et=O.fog,lt=X.isMeshStandardMaterial?O.environment:null,pt=b===null?A.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Li,_t=(X.isMeshStandardMaterial?V:C).get(X.envMap||lt),Rt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Mt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,Zt=!!W.morphAttributes.color;let fe=Ln;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(fe=A.toneMapping);const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=ce!==void 0?ce.length:0,Et=St.get(X),Se=_.state.lights;if(tt===!0&&(Q===!0||R!==v)){const Ce=R===v&&X.id===S;nt.setState(X,R,Ce)}let Kt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Se.state.version||Et.outputColorSpace!==pt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==_t||X.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Rt||Et.vertexTangents!==Pt||Et.morphTargets!==Mt||Et.morphNormals!==Xt||Et.morphColors!==Zt||Et.toneMapping!==fe||Et.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,Et.__version=X.version);let $e=Et.currentProgram;Kt===!0&&($e=ts(X,O,B));let ei=!1,Oe=!1,Fi=!1;const se=$e.getUniforms(),Ve=Et.uniforms;if(xt.useProgram($e.program)&&(ei=!0,Oe=!0,Fi=!0),X.id!==S&&(S=X.id,Oe=!0),ei||v!==R){xt.buffers.depth.getReversed()?(st.copy(R.projectionMatrix),wc(st),Cc(st),se.setValue(I,"projectionMatrix",st)):se.setValue(I,"projectionMatrix",R.projectionMatrix),se.setValue(I,"viewMatrix",R.matrixWorldInverse);const Ue=se.map.cameraPosition;Ue!==void 0&&Ue.setValue(I,Tt.setFromMatrixPosition(R.matrixWorld)),Bt.logarithmicDepthBuffer&&se.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&se.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,Oe=!0,Fi=!0)}if(B.isSkinnedMesh){se.setOptional(I,B,"bindMatrix"),se.setOptional(I,B,"bindMatrixInverse");const Ce=B.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),se.setValue(I,"boneTexture",Ce.boneTexture,L))}B.isBatchedMesh&&(se.setOptional(I,B,"batchingTexture"),se.setValue(I,"batchingTexture",B._matricesTexture,L),se.setOptional(I,B,"batchingIdTexture"),se.setValue(I,"batchingIdTexture",B._indirectTexture,L),se.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&se.setValue(I,"batchingColorTexture",B._colorsTexture,L));const We=W.morphAttributes;if((We.position!==void 0||We.normal!==void 0||We.color!==void 0)&&Ct.update(B,W,$e),(Oe||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,se.setValue(I,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ve.envMap.value=_t,Ve.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Ve.envMapIntensity.value=O.environmentIntensity),Oe&&(se.setValue(I,"toneMappingExposure",A.toneMappingExposure),Et.needsLights&&Ll(Ve,Fi),et&&X.fog===!0&&at.refreshFogUniforms(Ve,et),at.refreshMaterialUniforms(Ve,X,H,G,_.state.transmissionRenderTarget[R.id]),Fs.upload(I,Fa(Et),Ve,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fs.upload(I,Fa(Et),Ve,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&se.setValue(I,"center",B.center),se.setValue(I,"modelViewMatrix",B.modelViewMatrix),se.setValue(I,"normalMatrix",B.normalMatrix),se.setValue(I,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ce=X.uniformsGroups;for(let Ue=0,Xs=Ce.length;Ue<Xs;Ue++){const Nn=Ce[Ue];N.update(Nn,$e),N.bind(Nn,$e)}}return $e}function Ll(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Dl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,O,W){St.get(R.texture).__webglTexture=O,St.get(R.depthTexture).__webglTexture=W;const X=St.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const W=St.get(R);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Il=I.createFramebuffer();this.setRenderTarget=function(R,O=0,W=0){b=R,y=O,M=W;let X=!0,B=null,et=!1,lt=!1;if(R){const _t=St.get(R);if(_t.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(_t.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(_t.__hasExternalTextures)L.rebindTextures(R,St.get(R.texture).__webglTexture,St.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Mt=R.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&St.has(Mt)&&(R.width!==Mt.image.width||R.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Rt=R.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Pt=St.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pt[O])?B=Pt[O][W]:B=Pt[O],et=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?B=St.get(R).__webglMultisampledFramebuffer:Array.isArray(Pt)?B=Pt[W]:B=Pt,w.copy(R.viewport),P.copy(R.scissor),D=R.scissorTest}else w.copy(ct).multiplyScalar(H).floor(),P.copy(yt).multiplyScalar(H).floor(),D=Lt;if(W!==0&&(B=Il),xt.bindFramebuffer(I.FRAMEBUFFER,B)&&X&&xt.drawBuffers(R,B),xt.viewport(w),xt.scissor(P),xt.setScissorTest(D),et){const _t=St.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,W)}else if(lt){const _t=St.get(R.texture),Rt=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.__webglTexture,W,Rt)}else if(R!==null&&W!==0){const _t=St.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(R,O,W,X,B,et,lt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){xt.bindFramebuffer(I.FRAMEBUFFER,pt);try{const _t=R.texture,Rt=_t.format,Pt=_t.type;if(!Bt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-X&&W>=0&&W<=R.height-B&&I.readPixels(O,W,X,B,Ut.convert(Rt),Ut.convert(Pt),et)}finally{const _t=b!==null?St.get(b).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(R,O,W,X,B,et,lt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=St.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const _t=R.texture,Rt=_t.format,Pt=_t.type;if(!Bt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-X&&W>=0&&W<=R.height-B){xt.bindFramebuffer(I.FRAMEBUFFER,pt);const Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(O,W,X,B,Ut.convert(Rt),Ut.convert(Pt),0);const Xt=b!==null?St.get(b).__webglFramebuffer:null;xt.bindFramebuffer(I.FRAMEBUFFER,Xt);const Zt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bc(I,Zt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(Mt),I.deleteSync(Zt),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,W=0){R.isTexture!==!0&&(yi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(R.image.width*X),et=Math.floor(R.image.height*X),lt=O!==null?O.x:0,pt=O!==null?O.y:0;L.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,lt,pt,B,et),xt.unbindTexture()};const Ul=I.createFramebuffer(),Fl=I.createFramebuffer();this.copyTextureToTexture=function(R,O,W=null,X=null,B=0,et=null){R.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],O=arguments[2],et=arguments[3]||0,W=null),et===null&&(B!==0?(yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=B,B=0):et=0);let lt,pt,_t,Rt,Pt,Mt,Xt,Zt,fe;const ce=R.isCompressedTexture?R.mipmaps[et]:R.image;if(W!==null)lt=W.max.x-W.min.x,pt=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Pt=W.min.y,Mt=W.isBox3?W.min.z:0;else{const We=Math.pow(2,-B);lt=Math.floor(ce.width*We),pt=Math.floor(ce.height*We),R.isDataArrayTexture?_t=ce.depth:R.isData3DTexture?_t=Math.floor(ce.depth*We):_t=1,Rt=0,Pt=0,Mt=0}X!==null?(Xt=X.x,Zt=X.y,fe=X.z):(Xt=0,Zt=0,fe=0);const Yt=Ut.convert(O.format),Et=Ut.convert(O.type);let Se;O.isData3DTexture?(L.setTexture3D(O,0),Se=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(L.setTexture2DArray(O,0),Se=I.TEXTURE_2D_ARRAY):(L.setTexture2D(O,0),Se=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Kt=I.getParameter(I.UNPACK_ROW_LENGTH),$e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),Oe=I.getParameter(I.UNPACK_SKIP_ROWS),Fi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mt);const se=R.isDataArrayTexture||R.isData3DTexture,Ve=O.isDataArrayTexture||O.isData3DTexture;if(R.isDepthTexture){const We=St.get(R),Ce=St.get(O),Ue=St.get(We.__renderTarget),Xs=St.get(Ce.__renderTarget);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Ue.__webglFramebuffer),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Nn=0;Nn<_t;Nn++)se&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(R).__webglTexture,B,Mt+Nn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(O).__webglTexture,et,fe+Nn)),I.blitFramebuffer(Rt,Pt,lt,pt,Xt,Zt,lt,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||St.has(R)){const We=St.get(R),Ce=St.get(O);xt.bindFramebuffer(I.READ_FRAMEBUFFER,Ul),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fl);for(let Ue=0;Ue<_t;Ue++)se?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,B,Mt+Ue):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,We.__webglTexture,B),Ve?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,et,fe+Ue):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,et),B!==0?I.blitFramebuffer(Rt,Pt,lt,pt,Xt,Zt,lt,pt,I.COLOR_BUFFER_BIT,I.NEAREST):Ve?I.copyTexSubImage3D(Se,et,Xt,Zt,fe+Ue,Rt,Pt,lt,pt):I.copyTexSubImage2D(Se,et,Xt,Zt,Rt,Pt,lt,pt);xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ve?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Se,et,Xt,Zt,fe,lt,pt,_t,Yt,Et,ce.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Se,et,Xt,Zt,fe,lt,pt,_t,Yt,ce.data):I.texSubImage3D(Se,et,Xt,Zt,fe,lt,pt,_t,Yt,Et,ce):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,Xt,Zt,lt,pt,Yt,Et,ce.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,Xt,Zt,ce.width,ce.height,Yt,ce.data):I.texSubImage2D(I.TEXTURE_2D,et,Xt,Zt,lt,pt,Yt,Et,ce);I.pixelStorei(I.UNPACK_ROW_LENGTH,Kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fi),et===0&&O.generateMipmaps&&I.generateMipmap(Se),xt.unbindTexture()},this.copyTextureToTexture3D=function(R,O,W=null,X=null,B=0){return R.isTexture!==!0&&(yi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,R=arguments[2],O=arguments[3],B=arguments[4]||0),yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,W,X,B)},this.initRenderTarget=function(R){St.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),xt.unbindTexture()},this.resetState=function(){y=0,M=0,b=null,xt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const $p={MAJOR:1,MINOR:2,BUILD:3,toString(){return`v${this.MAJOR}.${this.MINOR} build ${this.BUILD}`}},_a={ASPECT:9/16},De={WIDTH:390,HEIGHT:844,BG_TOP:8900331,BG_BOTTOM:6005721},$t={PEG_ROWS:12,PEG_COLS:8,PEG_RADIUS:7,PEG_SPACING_X:44,PEG_SPACING_Y:44,TOP_OFFSET:180,WALL_THICKNESS:10},Te={COUNT:7,HEIGHT:65,MULTIPLIERS:[1,3,5,10,5,3,1],COLORS:[5025616,9159498,16771899,16750592,16771899,9159498,5025616],TIERS:{1:{glowColor:5025616,glowIntensity:0,labelScale:1,labelColor:"#ffffff",labelStroke:3},3:{glowColor:9159498,glowIntensity:.15,labelScale:1.05,labelColor:"#ffffff",labelStroke:3},5:{glowColor:16771899,glowIntensity:.3,labelScale:1.1,labelColor:"#FFFFA0",labelStroke:3.5},10:{glowColor:16766720,glowIntensity:.6,labelScale:1.2,labelColor:"#FFD700",labelStroke:4}}},Si={RADIUS:10,RESTITUTION:.75,FRICTION:.02,DENSITY:.001},xe={BODY_RADIUS:18,Y_POS:105,SPEED:40,BOB_AMPLITUDE:4,BOB_SPEED:2.5,LAY_DURATION:.3,WARMUP_DURATION:1.8},Jt={FOLLOW_LERP:.08,FOLLOW_LERP_X:.1,ZOOM_LERP:.04,IDLE_ZOOM:4.6,WARMUP_ZOOM:5.2,DROP_ZOOM_START:1.4,DROP_ZOOM_MIN:.7,DROP_ZOOM_MAX:1.4,HATCH_ZOOM:1.6,HATCH_SHAKE_MAX:4,SHAKE_INTENSITY:2.5,SHAKE_DECAY:.9,SPEED_ZOOM_FACTOR:3e-4,BOARD_TOP_Y:180,BOARD_BOTTOM_Y:770,OVERVIEW_ZOOM:1.2,OVERVIEW_CENTER_Y:418},In={BASE_GOLD:1,COMBO_WINDOW_MS:400,COMBO_MAX:10},Cn={HATCH_DELAY:.5,WOBBLE_DURATION:1.2,CRACK_DURATION:.3,TRANSITION_DURATION:1.5,IDLE_PROMPT_DELAY:.5,LAND_FREEZE:.08},ee={MASTER_VOLUME:.3,PEG_BASE_FREQ:800,PEG_FREQ_RANGE:400,COIN_BASE_FREQ:1200},dn={GROUND_HEIGHT:400,GROUND_WIDTH:800,GROUND_COLOR:5999678,GROUND_TOP_COLOR:8308816,GROUND_TOP_HEIGHT:18,CLOUD_PARALLAX:.12,MOUNTAIN_PARALLAX:.05},jn={DUPLI_BOUNCE_COST:1e3,DUPLICATE_RADIUS_SCALE:.85,DUPLICATE_OPACITY:.75,DUPLICATE_RESTITUTION:.8,SPAWN_SPEED_MIN:1.5,SPAWN_SPEED_SPREAD:1},pe={SCALE:.65,SPEED:35,WARMUP_DURATION:1.2,LAY_DURATION:.25,AUDIO_VOLUME_SCALE:.25,Z_POS:4,INTERVAL_REDUCTION:.12,MAX_LEVEL:10},Tr=[{id:"normal",name:"Chicken",emoji:"🐔",description:"Lays eggs on its own",baseCost:250,levelCostBase:200,levelCostMult:1.8,baseInterval:15,goldMultiplier:1,tint:null,eggTint:null,timerColor:"#FFFFFF",particleColor:16766720},{id:"rainbow",name:"Rainbow Chicken",emoji:"🌈",description:"Lays rainbow eggs worth 10x gold",baseCost:2e3,levelCostBase:1500,levelCostMult:2,baseInterval:30,goldMultiplier:10,tint:16738740,eggTint:16738740,timerColor:"#FF69B4",particleColor:16738740},{id:"cosmic",name:"Cosmic Chicken",emoji:"🌌",description:"Lays cosmic eggs worth 50x gold",baseCost:1e4,levelCostBase:8e3,levelCostMult:2.2,baseInterval:60,goldMultiplier:50,tint:10181046,eggTint:10181046,timerColor:"#9B59B6",particleColor:10181046}],Vn=[{id:"bounciness",name:"Bouncy Egg",emoji:"🏀",description:"Eggs bounce higher off pegs",maxLevel:5,baseCost:150,costMult:2,effect:.04},{id:"multi_egg",name:"Double Yolk",emoji:"🥚",description:"Lay extra eggs each drop",maxLevel:3,baseCost:500,costMult:3,effect:1},{id:"golden_pegs",name:"Golden Pegs",emoji:"⭐",description:"Random pegs give 5x gold",maxLevel:5,baseCost:300,costMult:2.2,effect:3},{id:"diamond_pegs",name:"Diamond Pegs",emoji:"💎",description:"Random pegs give 25x gold",maxLevel:5,baseCost:1e4,costMult:2.5,effect:1},{id:"rainbow_pegs",name:"Rainbow Pegs",emoji:"🌈",description:"Random pegs give 50x gold",maxLevel:3,baseCost:75e3,costMult:3,effect:1}],sn={CYCLE_INTERVAL:30,golden:{multiplier:5,color:16766720,hitColor:16777130,textColor:"#FFFF00",scale:1.3},diamond:{multiplier:25,color:4517631,hitColor:11206655,textColor:"#44EEFF",scale:1.35},rainbow:{multiplier:50,color:16729343,hitColor:16755455,textColor:"#FF44FF",scale:1.4}},Le={PEG_DEFAULT:14737632,PEG_HIT:16777215,WALL:9139029,BIN_BORDER:7035709,GOLD_PARTICLE:16766720,SHELL_PARTICLE:16774630,SPARK:16777130,DUST:13154454};class Zp{constructor(t){this.container=t,this.scene=new ro;const e=De.HEIGHT/2,n=e*_a.ASPECT;this.camera=new Tl(-n,n,e,-e,.1,1e3),this.camera.position.z=100,this.renderer=new qp({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0),t.appendChild(this.renderer.domElement),this._createBackground(),this._resize(),window.addEventListener("resize",()=>this._resize())}_createBackground(){const t=new me(2,2),e=new yn({uniforms:{uTopColor:{value:new Gt(De.BG_TOP)},uBottomColor:{value:new Gt(De.BG_BOTTOM)},uBrightness:{value:0}},vertexShader:`
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
      `,depthWrite:!1,depthTest:!1});this.bgMesh=new ie(t,e),this.bgMesh.renderOrder=-1e3,this.bgMesh.frustumCulled=!1,this.bgScene=new ro,this.bgCamera=new ba,this.bgScene.add(this.bgMesh)}setBgBrightness(t){this.bgMesh.material.uniforms.uBrightness.value=t}_resize(){const t=this.container.clientWidth,e=this.container.clientHeight;if(t===0||e===0)return;this.renderer.setSize(t,e);const n=De.HEIGHT/2,s=n*_a.ASPECT;this.camera.left=-s,this.camera.right=s,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix()}render(){this.renderer.autoClear=!1,this.renderer.clear(),this.renderer.render(this.bgScene,this.bgCamera),this.renderer.render(this.scene,this.camera)}projectToScreen(t,e){const n=new k(t,e,0);n.project(this.camera);const s=this.container.clientWidth,i=this.container.clientHeight;return{x:(n.x*.5+.5)*s,y:(-n.y*.5+.5)*i}}getCanvas(){return this.renderer.domElement}}var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ns={exports:{}};/*!
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
 */var jp=Ns.exports,Ho;function Jp(){return Ho||(Ho=1,(function(r,t){(function(n,s){r.exports=s()})(jp,function(){return(function(e){var n={};function s(i){if(n[i])return n[i].exports;var a=n[i]={i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=e,s.c=n,s.d=function(i,a,o){s.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:o})},s.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,a){if(a&1&&(i=s(i)),a&8||a&4&&typeof i=="object"&&i&&i.__esModule)return i;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),a&2&&typeof i!="string")for(var l in i)s.d(o,l,(function(u){return i[u]}).bind(null,l));return o},s.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(a,"a",a),a},s.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},s.p="",s(s.s=20)})([(function(e,n){var s={};e.exports=s,(function(){s._baseDelta=1e3/60,s._nextId=0,s._seed=0,s._nowStartTime=+new Date,s._warnedOnce={},s._decomp=null,s.extend=function(a,o){var l,u;typeof o=="boolean"?(l=2,u=o):(l=1,u=!0);for(var h=l;h<arguments.length;h++){var d=arguments[h];if(d)for(var f in d)u&&d[f]&&d[f].constructor===Object&&(!a[f]||a[f].constructor===Object)?(a[f]=a[f]||{},s.extend(a[f],u,d[f])):a[f]=d[f]}return a},s.clone=function(a,o){return s.extend({},o,a)},s.keys=function(a){if(Object.keys)return Object.keys(a);var o=[];for(var l in a)o.push(l);return o},s.values=function(a){var o=[];if(Object.keys){for(var l=Object.keys(a),u=0;u<l.length;u++)o.push(a[l[u]]);return o}for(var h in a)o.push(a[h]);return o},s.get=function(a,o,l,u){o=o.split(".").slice(l,u);for(var h=0;h<o.length;h+=1)a=a[o[h]];return a},s.set=function(a,o,l,u,h){var d=o.split(".").slice(u,h);return s.get(a,o,0,-1)[d[d.length-1]]=l,l},s.shuffle=function(a){for(var o=a.length-1;o>0;o--){var l=Math.floor(s.random()*(o+1)),u=a[o];a[o]=a[l],a[l]=u}return a},s.choose=function(a){return a[Math.floor(s.random()*a.length)]},s.isElement=function(a){return typeof HTMLElement<"u"?a instanceof HTMLElement:!!(a&&a.nodeType&&a.nodeName)},s.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"},s.isFunction=function(a){return typeof a=="function"},s.isPlainObject=function(a){return typeof a=="object"&&a.constructor===Object},s.isString=function(a){return toString.call(a)==="[object String]"},s.clamp=function(a,o,l){return a<o?o:a>l?l:a},s.sign=function(a){return a<0?-1:1},s.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-s._nowStartTime},s.random=function(a,o){return a=typeof a<"u"?a:0,o=typeof o<"u"?o:1,a+i()*(o-a)};var i=function(){return s._seed=(s._seed*9301+49297)%233280,s._seed/233280};s.colorToNumber=function(a){return a=a.replace("#",""),a.length==3&&(a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)),parseInt(a,16)},s.logLevel=1,s.log=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.info=function(){console&&s.logLevel>0&&s.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warn=function(){console&&s.logLevel>0&&s.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},s.warnOnce=function(){var a=Array.prototype.slice.call(arguments).join(" ");s._warnedOnce[a]||(s.warn(a),s._warnedOnce[a]=!0)},s.deprecated=function(a,o,l){a[o]=s.chain(function(){s.warnOnce("🔅 deprecated 🔅",l)},a[o])},s.nextId=function(){return s._nextId++},s.indexOf=function(a,o){if(a.indexOf)return a.indexOf(o);for(var l=0;l<a.length;l++)if(a[l]===o)return l;return-1},s.map=function(a,o){if(a.map)return a.map(o);for(var l=[],u=0;u<a.length;u+=1)l.push(o(a[u]));return l},s.topologicalSort=function(a){var o=[],l=[],u=[];for(var h in a)!l[h]&&!u[h]&&s._topologicalSort(h,l,u,a,o);return o},s._topologicalSort=function(a,o,l,u,h){var d=u[a]||[];l[a]=!0;for(var f=0;f<d.length;f+=1){var c=d[f];l[c]||o[c]||s._topologicalSort(c,o,l,u,h)}l[a]=!1,o[a]=!0,h.push(a)},s.chain=function(){for(var a=[],o=0;o<arguments.length;o+=1){var l=arguments[o];l._chained?a.push.apply(a,l._chained):a.push(l)}var u=function(){for(var h,d=new Array(arguments.length),f=0,c=arguments.length;f<c;f++)d[f]=arguments[f];for(f=0;f<a.length;f+=1){var m=a[f].apply(h,d);typeof m<"u"&&(h=m)}return h};return u._chained=a,u},s.chainPathBefore=function(a,o,l){return s.set(a,o,s.chain(l,s.get(a,o)))},s.chainPathAfter=function(a,o,l){return s.set(a,o,s.chain(s.get(a,o),l))},s.setDecomp=function(a){s._decomp=a},s.getDecomp=function(){var a=s._decomp;try{!a&&typeof window<"u"&&(a=window.decomp),!a&&typeof zo<"u"&&(a=zo.decomp)}catch{a=null}return a}})()}),(function(e,n){var s={};e.exports=s,(function(){s.create=function(i){var a={min:{x:0,y:0},max:{x:0,y:0}};return i&&s.update(a,i),a},s.update=function(i,a,o){i.min.x=1/0,i.max.x=-1/0,i.min.y=1/0,i.max.y=-1/0;for(var l=0;l<a.length;l++){var u=a[l];u.x>i.max.x&&(i.max.x=u.x),u.x<i.min.x&&(i.min.x=u.x),u.y>i.max.y&&(i.max.y=u.y),u.y<i.min.y&&(i.min.y=u.y)}o&&(o.x>0?i.max.x+=o.x:i.min.x+=o.x,o.y>0?i.max.y+=o.y:i.min.y+=o.y)},s.contains=function(i,a){return a.x>=i.min.x&&a.x<=i.max.x&&a.y>=i.min.y&&a.y<=i.max.y},s.overlaps=function(i,a){return i.min.x<=a.max.x&&i.max.x>=a.min.x&&i.max.y>=a.min.y&&i.min.y<=a.max.y},s.translate=function(i,a){i.min.x+=a.x,i.max.x+=a.x,i.min.y+=a.y,i.max.y+=a.y},s.shift=function(i,a){var o=i.max.x-i.min.x,l=i.max.y-i.min.y;i.min.x=a.x,i.max.x=a.x+o,i.min.y=a.y,i.max.y=a.y+l}})()}),(function(e,n){var s={};e.exports=s,(function(){s.create=function(i,a){return{x:i||0,y:a||0}},s.clone=function(i){return{x:i.x,y:i.y}},s.magnitude=function(i){return Math.sqrt(i.x*i.x+i.y*i.y)},s.magnitudeSquared=function(i){return i.x*i.x+i.y*i.y},s.rotate=function(i,a,o){var l=Math.cos(a),u=Math.sin(a);o||(o={});var h=i.x*l-i.y*u;return o.y=i.x*u+i.y*l,o.x=h,o},s.rotateAbout=function(i,a,o,l){var u=Math.cos(a),h=Math.sin(a);l||(l={});var d=o.x+((i.x-o.x)*u-(i.y-o.y)*h);return l.y=o.y+((i.x-o.x)*h+(i.y-o.y)*u),l.x=d,l},s.normalise=function(i){var a=s.magnitude(i);return a===0?{x:0,y:0}:{x:i.x/a,y:i.y/a}},s.dot=function(i,a){return i.x*a.x+i.y*a.y},s.cross=function(i,a){return i.x*a.y-i.y*a.x},s.cross3=function(i,a,o){return(a.x-i.x)*(o.y-i.y)-(a.y-i.y)*(o.x-i.x)},s.add=function(i,a,o){return o||(o={}),o.x=i.x+a.x,o.y=i.y+a.y,o},s.sub=function(i,a,o){return o||(o={}),o.x=i.x-a.x,o.y=i.y-a.y,o},s.mult=function(i,a){return{x:i.x*a,y:i.y*a}},s.div=function(i,a){return{x:i.x/a,y:i.y/a}},s.perp=function(i,a){return a=a===!0?-1:1,{x:a*-i.y,y:a*i.x}},s.neg=function(i){return{x:-i.x,y:-i.y}},s.angle=function(i,a){return Math.atan2(a.y-i.y,a.x-i.x)},s._temp=[s.create(),s.create(),s.create(),s.create(),s.create(),s.create()]})()}),(function(e,n,s){var i={};e.exports=i;var a=s(2),o=s(0);(function(){i.create=function(l,u){for(var h=[],d=0;d<l.length;d++){var f=l[d],c={x:f.x,y:f.y,index:d,body:u,isInternal:!1};h.push(c)}return h},i.fromPath=function(l,u){var h=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return l.replace(h,function(f,c,m){d.push({x:parseFloat(c),y:parseFloat(m)})}),i.create(d,u)},i.centre=function(l){for(var u=i.area(l,!0),h={x:0,y:0},d,f,c,m=0;m<l.length;m++)c=(m+1)%l.length,d=a.cross(l[m],l[c]),f=a.mult(a.add(l[m],l[c]),d),h=a.add(h,f);return a.div(h,6*u)},i.mean=function(l){for(var u={x:0,y:0},h=0;h<l.length;h++)u.x+=l[h].x,u.y+=l[h].y;return a.div(u,l.length)},i.area=function(l,u){for(var h=0,d=l.length-1,f=0;f<l.length;f++)h+=(l[d].x-l[f].x)*(l[d].y+l[f].y),d=f;return u?h/2:Math.abs(h)/2},i.inertia=function(l,u){for(var h=0,d=0,f=l,c,m,g=0;g<f.length;g++)m=(g+1)%f.length,c=Math.abs(a.cross(f[m],f[g])),h+=c*(a.dot(f[m],f[m])+a.dot(f[m],f[g])+a.dot(f[g],f[g])),d+=c;return u/6*(h/d)},i.translate=function(l,u,h){h=typeof h<"u"?h:1;var d=l.length,f=u.x*h,c=u.y*h,m;for(m=0;m<d;m++)l[m].x+=f,l[m].y+=c;return l},i.rotate=function(l,u,h){if(u!==0){var d=Math.cos(u),f=Math.sin(u),c=h.x,m=h.y,g=l.length,p,_,E,T;for(T=0;T<g;T++)p=l[T],_=p.x-c,E=p.y-m,p.x=c+(_*d-E*f),p.y=m+(_*f+E*d);return l}},i.contains=function(l,u){for(var h=u.x,d=u.y,f=l.length,c=l[f-1],m,g=0;g<f;g++){if(m=l[g],(h-c.x)*(m.y-c.y)+(d-c.y)*(c.x-m.x)>0)return!1;c=m}return!0},i.scale=function(l,u,h,d){if(u===1&&h===1)return l;d=d||i.centre(l);for(var f,c,m=0;m<l.length;m++)f=l[m],c=a.sub(f,d),l[m].x=d.x+c.x*u,l[m].y=d.y+c.y*h;return l},i.chamfer=function(l,u,h,d,f){typeof u=="number"?u=[u]:u=u||[8],h=typeof h<"u"?h:-1,d=d||2,f=f||14;for(var c=[],m=0;m<l.length;m++){var g=l[m-1>=0?m-1:l.length-1],p=l[m],_=l[(m+1)%l.length],E=u[m<u.length?m:u.length-1];if(E===0){c.push(p);continue}var T=a.normalise({x:p.y-g.y,y:g.x-p.x}),A=a.normalise({x:_.y-p.y,y:p.x-_.x}),x=Math.sqrt(2*Math.pow(E,2)),y=a.mult(o.clone(T),E),M=a.normalise(a.mult(a.add(T,A),.5)),b=a.sub(p,a.mult(M,x)),S=h;h===-1&&(S=Math.pow(E,.32)*1.75),S=o.clamp(S,d,f),S%2===1&&(S+=1);for(var v=Math.acos(a.dot(T,A)),w=v/S,P=0;P<S;P++)c.push(a.add(a.rotate(y,w*P),b))}return c},i.clockwiseSort=function(l){var u=i.mean(l);return l.sort(function(h,d){return a.angle(u,h)-a.angle(u,d)}),l},i.isConvex=function(l){var u=0,h=l.length,d,f,c,m;if(h<3)return null;for(d=0;d<h;d++)if(f=(d+1)%h,c=(d+2)%h,m=(l[f].x-l[d].x)*(l[c].y-l[f].y),m-=(l[f].y-l[d].y)*(l[c].x-l[f].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},i.hull=function(l){var u=[],h=[],d,f;for(l=l.slice(0),l.sort(function(c,m){var g=c.x-m.x;return g!==0?g:c.y-m.y}),f=0;f<l.length;f+=1){for(d=l[f];h.length>=2&&a.cross3(h[h.length-2],h[h.length-1],d)<=0;)h.pop();h.push(d)}for(f=l.length-1;f>=0;f-=1){for(d=l[f];u.length>=2&&a.cross3(u[u.length-2],u[u.length-1],d)<=0;)u.pop();u.push(d)}return u.pop(),h.pop(),u.concat(h)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(2),l=s(7),u=s(0),h=s(1),d=s(11);(function(){i._timeCorrection=!0,i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i._baseDelta=1e3/60,i.create=function(c){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},g=u.extend(m,c);return f(g,c),g},i.nextGroup=function(c){return c?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory};var f=function(c,m){m=m||{},i.set(c,{bounds:c.bounds||h.create(c.vertices),positionPrev:c.positionPrev||o.clone(c.position),anglePrev:c.anglePrev||c.angle,vertices:c.vertices,parts:c.parts||[c],isStatic:c.isStatic,isSleeping:c.isSleeping,parent:c.parent||c}),a.rotate(c.vertices,c.angle,c.position),d.rotate(c.axes,c.angle),h.update(c.bounds,c.vertices,c.velocity),i.set(c,{axes:m.axes||c.axes,area:m.area||c.area,mass:m.mass||c.mass,inertia:m.inertia||c.inertia});var g=c.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),p=c.isStatic?"#555":"#ccc",_=c.isStatic&&c.render.fillStyle===null?1:0;c.render.fillStyle=c.render.fillStyle||g,c.render.strokeStyle=c.render.strokeStyle||p,c.render.lineWidth=c.render.lineWidth||_,c.render.sprite.xOffset+=-(c.bounds.min.x-c.position.x)/(c.bounds.max.x-c.bounds.min.x),c.render.sprite.yOffset+=-(c.bounds.min.y-c.position.y)/(c.bounds.max.y-c.bounds.min.y)};i.set=function(c,m,g){var p;typeof m=="string"&&(p=m,m={},m[p]=g);for(p in m)if(Object.prototype.hasOwnProperty.call(m,p))switch(g=m[p],p){case"isStatic":i.setStatic(c,g);break;case"isSleeping":l.set(c,g);break;case"mass":i.setMass(c,g);break;case"density":i.setDensity(c,g);break;case"inertia":i.setInertia(c,g);break;case"vertices":i.setVertices(c,g);break;case"position":i.setPosition(c,g);break;case"angle":i.setAngle(c,g);break;case"velocity":i.setVelocity(c,g);break;case"angularVelocity":i.setAngularVelocity(c,g);break;case"speed":i.setSpeed(c,g);break;case"angularSpeed":i.setAngularSpeed(c,g);break;case"parts":i.setParts(c,g);break;case"centre":i.setCentre(c,g);break;default:c[p]=g}},i.setStatic=function(c,m){for(var g=0;g<c.parts.length;g++){var p=c.parts[g];m?(p.isStatic||(p._original={restitution:p.restitution,friction:p.friction,mass:p.mass,inertia:p.inertia,density:p.density,inverseMass:p.inverseMass,inverseInertia:p.inverseInertia}),p.restitution=0,p.friction=1,p.mass=p.inertia=p.density=1/0,p.inverseMass=p.inverseInertia=0,p.positionPrev.x=p.position.x,p.positionPrev.y=p.position.y,p.anglePrev=p.angle,p.angularVelocity=0,p.speed=0,p.angularSpeed=0,p.motion=0):p._original&&(p.restitution=p._original.restitution,p.friction=p._original.friction,p.mass=p._original.mass,p.inertia=p._original.inertia,p.density=p._original.density,p.inverseMass=p._original.inverseMass,p.inverseInertia=p._original.inverseInertia,p._original=null),p.isStatic=m}},i.setMass=function(c,m){var g=c.inertia/(c.mass/6);c.inertia=g*(m/6),c.inverseInertia=1/c.inertia,c.mass=m,c.inverseMass=1/c.mass,c.density=c.mass/c.area},i.setDensity=function(c,m){i.setMass(c,m*c.area),c.density=m},i.setInertia=function(c,m){c.inertia=m,c.inverseInertia=1/c.inertia},i.setVertices=function(c,m){m[0].body===c?c.vertices=m:c.vertices=a.create(m,c),c.axes=d.fromVertices(c.vertices),c.area=a.area(c.vertices),i.setMass(c,c.density*c.area);var g=a.centre(c.vertices);a.translate(c.vertices,g,-1),i.setInertia(c,i._inertiaScale*a.inertia(c.vertices,c.mass)),a.translate(c.vertices,c.position),h.update(c.bounds,c.vertices,c.velocity)},i.setParts=function(c,m,g){var p;for(m=m.slice(0),c.parts.length=0,c.parts.push(c),c.parent=c,p=0;p<m.length;p++){var _=m[p];_!==c&&(_.parent=c,c.parts.push(_))}if(c.parts.length!==1){if(g=typeof g<"u"?g:!0,g){var E=[];for(p=0;p<m.length;p++)E=E.concat(m[p].vertices);a.clockwiseSort(E);var T=a.hull(E),A=a.centre(T);i.setVertices(c,T),a.translate(c.vertices,A)}var x=i._totalProperties(c);c.area=x.area,c.parent=c,c.position.x=x.centre.x,c.position.y=x.centre.y,c.positionPrev.x=x.centre.x,c.positionPrev.y=x.centre.y,i.setMass(c,x.mass),i.setInertia(c,x.inertia),i.setPosition(c,x.centre)}},i.setCentre=function(c,m,g){g?(c.positionPrev.x+=m.x,c.positionPrev.y+=m.y,c.position.x+=m.x,c.position.y+=m.y):(c.positionPrev.x=m.x-(c.position.x-c.positionPrev.x),c.positionPrev.y=m.y-(c.position.y-c.positionPrev.y),c.position.x=m.x,c.position.y=m.y)},i.setPosition=function(c,m,g){var p=o.sub(m,c.position);g?(c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.velocity.x=p.x,c.velocity.y=p.y,c.speed=o.magnitude(p)):(c.positionPrev.x+=p.x,c.positionPrev.y+=p.y);for(var _=0;_<c.parts.length;_++){var E=c.parts[_];E.position.x+=p.x,E.position.y+=p.y,a.translate(E.vertices,p),h.update(E.bounds,E.vertices,c.velocity)}},i.setAngle=function(c,m,g){var p=m-c.angle;g?(c.anglePrev=c.angle,c.angularVelocity=p,c.angularSpeed=Math.abs(p)):c.anglePrev+=p;for(var _=0;_<c.parts.length;_++){var E=c.parts[_];E.angle+=p,a.rotate(E.vertices,p,c.position),d.rotate(E.axes,p),h.update(E.bounds,E.vertices,c.velocity),_>0&&o.rotateAbout(E.position,p,c.position,E.position)}},i.setVelocity=function(c,m){var g=c.deltaTime/i._baseDelta;c.positionPrev.x=c.position.x-m.x*g,c.positionPrev.y=c.position.y-m.y*g,c.velocity.x=(c.position.x-c.positionPrev.x)/g,c.velocity.y=(c.position.y-c.positionPrev.y)/g,c.speed=o.magnitude(c.velocity)},i.getVelocity=function(c){var m=i._baseDelta/c.deltaTime;return{x:(c.position.x-c.positionPrev.x)*m,y:(c.position.y-c.positionPrev.y)*m}},i.getSpeed=function(c){return o.magnitude(i.getVelocity(c))},i.setSpeed=function(c,m){i.setVelocity(c,o.mult(o.normalise(i.getVelocity(c)),m))},i.setAngularVelocity=function(c,m){var g=c.deltaTime/i._baseDelta;c.anglePrev=c.angle-m*g,c.angularVelocity=(c.angle-c.anglePrev)/g,c.angularSpeed=Math.abs(c.angularVelocity)},i.getAngularVelocity=function(c){return(c.angle-c.anglePrev)*i._baseDelta/c.deltaTime},i.getAngularSpeed=function(c){return Math.abs(i.getAngularVelocity(c))},i.setAngularSpeed=function(c,m){i.setAngularVelocity(c,u.sign(i.getAngularVelocity(c))*m)},i.translate=function(c,m,g){i.setPosition(c,o.add(c.position,m),g)},i.rotate=function(c,m,g,p){if(!g)i.setAngle(c,c.angle+m,p);else{var _=Math.cos(m),E=Math.sin(m),T=c.position.x-g.x,A=c.position.y-g.y;i.setPosition(c,{x:g.x+(T*_-A*E),y:g.y+(T*E+A*_)},p),i.setAngle(c,c.angle+m,p)}},i.scale=function(c,m,g,p){var _=0,E=0;p=p||c.position;for(var T=0;T<c.parts.length;T++){var A=c.parts[T];a.scale(A.vertices,m,g,p),A.axes=d.fromVertices(A.vertices),A.area=a.area(A.vertices),i.setMass(A,c.density*A.area),a.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),i.setInertia(A,i._inertiaScale*a.inertia(A.vertices,A.mass)),a.translate(A.vertices,{x:A.position.x,y:A.position.y}),T>0&&(_+=A.area,E+=A.inertia),A.position.x=p.x+(A.position.x-p.x)*m,A.position.y=p.y+(A.position.y-p.y)*g,h.update(A.bounds,A.vertices,c.velocity)}c.parts.length>1&&(c.area=_,c.isStatic||(i.setMass(c,c.density*_),i.setInertia(c,E))),c.circleRadius&&(m===g?c.circleRadius*=m:c.circleRadius=null)},i.update=function(c,m){m=(typeof m<"u"?m:1e3/60)*c.timeScale;var g=m*m,p=i._timeCorrection?m/(c.deltaTime||m):1,_=1-c.frictionAir*(m/u._baseDelta),E=(c.position.x-c.positionPrev.x)*p,T=(c.position.y-c.positionPrev.y)*p;c.velocity.x=E*_+c.force.x/c.mass*g,c.velocity.y=T*_+c.force.y/c.mass*g,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.position.x+=c.velocity.x,c.position.y+=c.velocity.y,c.deltaTime=m,c.angularVelocity=(c.angle-c.anglePrev)*_*p+c.torque/c.inertia*g,c.anglePrev=c.angle,c.angle+=c.angularVelocity;for(var A=0;A<c.parts.length;A++){var x=c.parts[A];a.translate(x.vertices,c.velocity),A>0&&(x.position.x+=c.velocity.x,x.position.y+=c.velocity.y),c.angularVelocity!==0&&(a.rotate(x.vertices,c.angularVelocity,c.position),d.rotate(x.axes,c.angularVelocity),A>0&&o.rotateAbout(x.position,c.angularVelocity,c.position,x.position)),h.update(x.bounds,x.vertices,c.velocity)}},i.updateVelocities=function(c){var m=i._baseDelta/c.deltaTime,g=c.velocity;g.x=(c.position.x-c.positionPrev.x)*m,g.y=(c.position.y-c.positionPrev.y)*m,c.speed=Math.sqrt(g.x*g.x+g.y*g.y),c.angularVelocity=(c.angle-c.anglePrev)*m,c.angularSpeed=Math.abs(c.angularVelocity)},i.applyForce=function(c,m,g){var p={x:m.x-c.position.x,y:m.y-c.position.y};c.force.x+=g.x,c.force.y+=g.y,c.torque+=p.x*g.y-p.y*g.x},i._totalProperties=function(c){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},g=c.parts.length===1?0:1;g<c.parts.length;g++){var p=c.parts[g],_=p.mass!==1/0?p.mass:1;m.mass+=_,m.area+=p.area,m.inertia+=p.inertia,m.centre=o.add(m.centre,o.mult(p.position,_))}return m.centre=o.div(m.centre,m.mass),m}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0);(function(){i.on=function(o,l,u){for(var h=l.split(" "),d,f=0;f<h.length;f++)d=h[f],o.events=o.events||{},o.events[d]=o.events[d]||[],o.events[d].push(u);return u},i.off=function(o,l,u){if(!l){o.events={};return}typeof l=="function"&&(u=l,l=a.keys(o.events).join(" "));for(var h=l.split(" "),d=0;d<h.length;d++){var f=o.events[h[d]],c=[];if(u&&f)for(var m=0;m<f.length;m++)f[m]!==u&&c.push(f[m]);o.events[h[d]]=c}},i.trigger=function(o,l,u){var h,d,f,c,m=o.events;if(m&&a.keys(m).length>0){u||(u={}),h=l.split(" ");for(var g=0;g<h.length;g++)if(d=h[g],f=m[d],f){c=a.clone(u,!1),c.name=d,c.source=o;for(var p=0;p<f.length;p++)f[p].apply(o,[c])}}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(5),o=s(0),l=s(1),u=s(4);(function(){i.create=function(h){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},h)},i.setModified=function(h,d,f,c){if(h.isModified=d,d&&h.cache&&(h.cache.allBodies=null,h.cache.allConstraints=null,h.cache.allComposites=null),f&&h.parent&&i.setModified(h.parent,d,f,c),c)for(var m=0;m<h.composites.length;m++){var g=h.composites[m];i.setModified(g,d,f,c)}},i.add=function(h,d){var f=[].concat(d);a.trigger(h,"beforeAdd",{object:d});for(var c=0;c<f.length;c++){var m=f[c];switch(m.type){case"body":if(m.parent!==m){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}i.addBody(h,m);break;case"constraint":i.addConstraint(h,m);break;case"composite":i.addComposite(h,m);break;case"mouseConstraint":i.addConstraint(h,m.constraint);break}}return a.trigger(h,"afterAdd",{object:d}),h},i.remove=function(h,d,f){var c=[].concat(d);a.trigger(h,"beforeRemove",{object:d});for(var m=0;m<c.length;m++){var g=c[m];switch(g.type){case"body":i.removeBody(h,g,f);break;case"constraint":i.removeConstraint(h,g,f);break;case"composite":i.removeComposite(h,g,f);break;case"mouseConstraint":i.removeConstraint(h,g.constraint);break}}return a.trigger(h,"afterRemove",{object:d}),h},i.addComposite=function(h,d){return h.composites.push(d),d.parent=h,i.setModified(h,!0,!0,!1),h},i.removeComposite=function(h,d,f){var c=o.indexOf(h.composites,d);if(c!==-1){var m=i.allBodies(d);i.removeCompositeAt(h,c);for(var g=0;g<m.length;g++)m[g].sleepCounter=0}if(f)for(var g=0;g<h.composites.length;g++)i.removeComposite(h.composites[g],d,!0);return h},i.removeCompositeAt=function(h,d){return h.composites.splice(d,1),i.setModified(h,!0,!0,!1),h},i.addBody=function(h,d){return h.bodies.push(d),i.setModified(h,!0,!0,!1),h},i.removeBody=function(h,d,f){var c=o.indexOf(h.bodies,d);if(c!==-1&&(i.removeBodyAt(h,c),d.sleepCounter=0),f)for(var m=0;m<h.composites.length;m++)i.removeBody(h.composites[m],d,!0);return h},i.removeBodyAt=function(h,d){return h.bodies.splice(d,1),i.setModified(h,!0,!0,!1),h},i.addConstraint=function(h,d){return h.constraints.push(d),i.setModified(h,!0,!0,!1),h},i.removeConstraint=function(h,d,f){var c=o.indexOf(h.constraints,d);if(c!==-1&&i.removeConstraintAt(h,c),f)for(var m=0;m<h.composites.length;m++)i.removeConstraint(h.composites[m],d,!0);return h},i.removeConstraintAt=function(h,d){return h.constraints.splice(d,1),i.setModified(h,!0,!0,!1),h},i.clear=function(h,d,f){if(f)for(var c=0;c<h.composites.length;c++)i.clear(h.composites[c],d,!0);return d?h.bodies=h.bodies.filter(function(m){return m.isStatic}):h.bodies.length=0,h.constraints.length=0,h.composites.length=0,i.setModified(h,!0,!0,!1),h},i.allBodies=function(h){if(h.cache&&h.cache.allBodies)return h.cache.allBodies;for(var d=[].concat(h.bodies),f=0;f<h.composites.length;f++)d=d.concat(i.allBodies(h.composites[f]));return h.cache&&(h.cache.allBodies=d),d},i.allConstraints=function(h){if(h.cache&&h.cache.allConstraints)return h.cache.allConstraints;for(var d=[].concat(h.constraints),f=0;f<h.composites.length;f++)d=d.concat(i.allConstraints(h.composites[f]));return h.cache&&(h.cache.allConstraints=d),d},i.allComposites=function(h){if(h.cache&&h.cache.allComposites)return h.cache.allComposites;for(var d=[].concat(h.composites),f=0;f<h.composites.length;f++)d=d.concat(i.allComposites(h.composites[f]));return h.cache&&(h.cache.allComposites=d),d},i.get=function(h,d,f){var c,m;switch(f){case"body":c=i.allBodies(h);break;case"constraint":c=i.allConstraints(h);break;case"composite":c=i.allComposites(h).concat(h);break}return c?(m=c.filter(function(g){return g.id.toString()===d.toString()}),m.length===0?null:m[0]):null},i.move=function(h,d,f){return i.remove(h,d),i.add(f,d),h},i.rebase=function(h){for(var d=i.allBodies(h).concat(i.allConstraints(h)).concat(i.allComposites(h)),f=0;f<d.length;f++)d[f].id=o.nextId();return h},i.translate=function(h,d,f){for(var c=f?i.allBodies(h):h.bodies,m=0;m<c.length;m++)u.translate(c[m],d);return h},i.rotate=function(h,d,f,c){for(var m=Math.cos(d),g=Math.sin(d),p=c?i.allBodies(h):h.bodies,_=0;_<p.length;_++){var E=p[_],T=E.position.x-f.x,A=E.position.y-f.y;u.setPosition(E,{x:f.x+(T*m-A*g),y:f.y+(T*g+A*m)}),u.rotate(E,d)}return h},i.scale=function(h,d,f,c,m){for(var g=m?i.allBodies(h):h.bodies,p=0;p<g.length;p++){var _=g[p],E=_.position.x-c.x,T=_.position.y-c.y;u.setPosition(_,{x:c.x+E*d,y:c.y+T*f}),u.scale(_,d,f)}return h},i.bounds=function(h){for(var d=i.allBodies(h),f=[],c=0;c<d.length;c+=1){var m=d[c];f.push(m.bounds.min,m.bounds.max)}return l.create(f)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(4),o=s(5),l=s(0);(function(){i._motionWakeThreshold=.18,i._motionSleepThreshold=.08,i._minBias=.9,i.update=function(u,h){for(var d=h/l._baseDelta,f=i._motionSleepThreshold,c=0;c<u.length;c++){var m=u[c],g=a.getSpeed(m),p=a.getAngularSpeed(m),_=g*g+p*p;if(m.force.x!==0||m.force.y!==0){i.set(m,!1);continue}var E=Math.min(m.motion,_),T=Math.max(m.motion,_);m.motion=i._minBias*E+(1-i._minBias)*T,m.sleepThreshold>0&&m.motion<f?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/d&&i.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},i.afterCollisions=function(u){for(var h=i._motionSleepThreshold,d=0;d<u.length;d++){var f=u[d];if(f.isActive){var c=f.collision,m=c.bodyA.parent,g=c.bodyB.parent;if(!(m.isSleeping&&g.isSleeping||m.isStatic||g.isStatic)&&(m.isSleeping||g.isSleeping)){var p=m.isSleeping&&!m.isStatic?m:g,_=p===m?g:m;!p.isStatic&&_.motion>h&&i.set(p,!1)}}}},i.set=function(u,h){var d=u.isSleeping;h?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,d||o.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,d&&o.trigger(u,"sleepEnd"))}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(9);(function(){var l=[],u={overlap:0,axis:null},h={overlap:0,axis:null};i.create=function(d,f){return{pair:null,collided:!1,bodyA:d,bodyB:f,parentA:d.parent,parentB:f.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},i.collides=function(d,f,c){if(i._overlapAxes(u,d.vertices,f.vertices,d.axes),u.overlap<=0||(i._overlapAxes(h,f.vertices,d.vertices,f.axes),h.overlap<=0))return null;var m=c&&c.table[o.id(d,f)],g;m?g=m.collision:(g=i.create(d,f),g.collided=!0,g.bodyA=d.id<f.id?d:f,g.bodyB=d.id<f.id?f:d,g.parentA=g.bodyA.parent,g.parentB=g.bodyB.parent),d=g.bodyA,f=g.bodyB;var p;u.overlap<h.overlap?p=u:p=h;var _=g.normal,E=g.tangent,T=g.penetration,A=g.supports,x=p.overlap,y=p.axis,M=y.x,b=y.y,S=f.position.x-d.position.x,v=f.position.y-d.position.y;M*S+b*v>=0&&(M=-M,b=-b),_.x=M,_.y=b,E.x=-b,E.y=M,T.x=M*x,T.y=b*x,g.depth=x;var w=i._findSupports(d,f,_,1),P=0;if(a.contains(d.vertices,w[0])&&(A[P++]=w[0]),a.contains(d.vertices,w[1])&&(A[P++]=w[1]),P<2){var D=i._findSupports(f,d,_,-1);a.contains(f.vertices,D[0])&&(A[P++]=D[0]),P<2&&a.contains(f.vertices,D[1])&&(A[P++]=D[1])}return P===0&&(A[P++]=w[0]),g.supportCount=P,g},i._overlapAxes=function(d,f,c,m){var g=f.length,p=c.length,_=f[0].x,E=f[0].y,T=c[0].x,A=c[0].y,x=m.length,y=Number.MAX_VALUE,M=0,b,S,v,w,P,D;for(P=0;P<x;P++){var U=m[P],F=U.x,z=U.y,G=_*F+E*z,H=T*F+A*z,j=G,it=H;for(D=1;D<g;D+=1)w=f[D].x*F+f[D].y*z,w>j?j=w:w<G&&(G=w);for(D=1;D<p;D+=1)w=c[D].x*F+c[D].y*z,w>it?it=w:w<H&&(H=w);if(S=j-H,v=it-G,b=S<v?S:v,b<y&&(y=b,M=P,b<=0))break}d.axis=m[M],d.overlap=y},i._findSupports=function(d,f,c,m){var g=f.vertices,p=g.length,_=d.position.x,E=d.position.y,T=c.x*m,A=c.y*m,x=g[0],y=x,M=T*(_-y.x)+A*(E-y.y),b,S,v;for(v=1;v<p;v+=1)y=g[v],S=T*(_-y.x)+A*(E-y.y),S<M&&(M=S,x=y);return b=g[(p+x.index-1)%p],M=T*(_-b.x)+A*(E-b.y),y=g[(x.index+1)%p],T*(_-y.x)+A*(E-y.y)<M?(l[0]=x,l[1]=y,l):(l[0]=x,l[1]=b,l)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(16);(function(){i.create=function(o,l){var u=o.bodyA,h=o.bodyB,d={id:i.id(u,h),bodyA:u,bodyB:h,collision:o,contacts:[a.create(),a.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||h.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return i.update(d,o,l),d},i.update=function(o,l,u){var h=l.supports,d=l.supportCount,f=o.contacts,c=l.parentA,m=l.parentB;o.isActive=!0,o.timeUpdated=u,o.collision=l,o.separation=l.depth,o.inverseMass=c.inverseMass+m.inverseMass,o.friction=c.friction<m.friction?c.friction:m.friction,o.frictionStatic=c.frictionStatic>m.frictionStatic?c.frictionStatic:m.frictionStatic,o.restitution=c.restitution>m.restitution?c.restitution:m.restitution,o.slop=c.slop>m.slop?c.slop:m.slop,o.contactCount=d,l.pair=o;var g=h[0],p=f[0],_=h[1],E=f[1];(E.vertex===g||p.vertex===_)&&(f[1]=p,f[0]=p=E,E=f[1]),p.vertex=g,E.vertex=_},i.setActive=function(o,l,u){l?(o.isActive=!0,o.timeUpdated=u):(o.isActive=!1,o.contactCount=0)},i.id=function(o,l){return o.id<l.id?o.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+o.id.toString(36)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(2),l=s(7),u=s(1),h=s(11),d=s(0);(function(){i._warming=.4,i._torqueDampen=1,i._minLength=1e-6,i.create=function(f){var c=f;c.bodyA&&!c.pointA&&(c.pointA={x:0,y:0}),c.bodyB&&!c.pointB&&(c.pointB={x:0,y:0});var m=c.bodyA?o.add(c.bodyA.position,c.pointA):c.pointA,g=c.bodyB?o.add(c.bodyB.position,c.pointB):c.pointB,p=o.magnitude(o.sub(m,g));c.length=typeof c.length<"u"?c.length:p,c.id=c.id||d.nextId(),c.label=c.label||"Constraint",c.type="constraint",c.stiffness=c.stiffness||(c.length>0?1:.7),c.damping=c.damping||0,c.angularStiffness=c.angularStiffness||0,c.angleA=c.bodyA?c.bodyA.angle:c.angleA,c.angleB=c.bodyB?c.bodyB.angle:c.angleB,c.plugin={};var _={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return c.length===0&&c.stiffness>.1?(_.type="pin",_.anchors=!1):c.stiffness<.9&&(_.type="spring"),c.render=d.extend(_,c.render),c},i.preSolveAll=function(f){for(var c=0;c<f.length;c+=1){var m=f[c],g=m.constraintImpulse;m.isStatic||g.x===0&&g.y===0&&g.angle===0||(m.position.x+=g.x,m.position.y+=g.y,m.angle+=g.angle)}},i.solveAll=function(f,c){for(var m=d.clamp(c/d._baseDelta,0,1),g=0;g<f.length;g+=1){var p=f[g],_=!p.bodyA||p.bodyA&&p.bodyA.isStatic,E=!p.bodyB||p.bodyB&&p.bodyB.isStatic;(_||E)&&i.solve(f[g],m)}for(g=0;g<f.length;g+=1)p=f[g],_=!p.bodyA||p.bodyA&&p.bodyA.isStatic,E=!p.bodyB||p.bodyB&&p.bodyB.isStatic,!_&&!E&&i.solve(f[g],m)},i.solve=function(f,c){var m=f.bodyA,g=f.bodyB,p=f.pointA,_=f.pointB;if(!(!m&&!g)){m&&!m.isStatic&&(o.rotate(p,m.angle-f.angleA,p),f.angleA=m.angle),g&&!g.isStatic&&(o.rotate(_,g.angle-f.angleB,_),f.angleB=g.angle);var E=p,T=_;if(m&&(E=o.add(m.position,p)),g&&(T=o.add(g.position,_)),!(!E||!T)){var A=o.sub(E,T),x=o.magnitude(A);x<i._minLength&&(x=i._minLength);var y=(x-f.length)/x,M=f.stiffness>=1||f.length===0,b=M?f.stiffness*c:f.stiffness*c*c,S=f.damping*c,v=o.mult(A,y*b),w=(m?m.inverseMass:0)+(g?g.inverseMass:0),P=(m?m.inverseInertia:0)+(g?g.inverseInertia:0),D=w+P,U,F,z,G,H;if(S>0){var j=o.create();z=o.div(A,x),H=o.sub(g&&o.sub(g.position,g.positionPrev)||j,m&&o.sub(m.position,m.positionPrev)||j),G=o.dot(z,H)}m&&!m.isStatic&&(F=m.inverseMass/w,m.constraintImpulse.x-=v.x*F,m.constraintImpulse.y-=v.y*F,m.position.x-=v.x*F,m.position.y-=v.y*F,S>0&&(m.positionPrev.x-=S*z.x*G*F,m.positionPrev.y-=S*z.y*G*F),U=o.cross(p,v)/D*i._torqueDampen*m.inverseInertia*(1-f.angularStiffness),m.constraintImpulse.angle-=U,m.angle-=U),g&&!g.isStatic&&(F=g.inverseMass/w,g.constraintImpulse.x+=v.x*F,g.constraintImpulse.y+=v.y*F,g.position.x+=v.x*F,g.position.y+=v.y*F,S>0&&(g.positionPrev.x+=S*z.x*G*F,g.positionPrev.y+=S*z.y*G*F),U=o.cross(_,v)/D*i._torqueDampen*g.inverseInertia*(1-f.angularStiffness),g.constraintImpulse.angle+=U,g.angle+=U)}}},i.postSolveAll=function(f){for(var c=0;c<f.length;c++){var m=f[c],g=m.constraintImpulse;if(!(m.isStatic||g.x===0&&g.y===0&&g.angle===0)){l.set(m,!1);for(var p=0;p<m.parts.length;p++){var _=m.parts[p];a.translate(_.vertices,g),p>0&&(_.position.x+=g.x,_.position.y+=g.y),g.angle!==0&&(a.rotate(_.vertices,g.angle,m.position),h.rotate(_.axes,g.angle),p>0&&o.rotateAbout(_.position,g.angle,m.position,_.position)),u.update(_.bounds,_.vertices,m.velocity)}g.angle*=i._warming,g.x*=i._warming,g.y*=i._warming}}},i.pointAWorld=function(f){return{x:(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),y:(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0)}},i.pointBWorld=function(f){return{x:(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),y:(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0)}},i.currentLength=function(f){var c=(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),m=(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0),g=(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),p=(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0),_=c-g,E=m-p;return Math.sqrt(_*_+E*E)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(2),o=s(0);(function(){i.fromVertices=function(l){for(var u={},h=0;h<l.length;h++){var d=(h+1)%l.length,f=a.normalise({x:l[d].y-l[h].y,y:l[h].x-l[d].x}),c=f.y===0?1/0:f.x/f.y;c=c.toFixed(3).toString(),u[c]=f}return o.values(u)},i.rotate=function(l,u){if(u!==0)for(var h=Math.cos(u),d=Math.sin(u),f=0;f<l.length;f++){var c=l[f],m;m=c.x*h-c.y*d,c.y=c.x*d+c.y*h,c.x=m}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(0),l=s(4),u=s(1),h=s(2);(function(){i.rectangle=function(d,f,c,m,g){g=g||{};var p={label:"Rectangle Body",position:{x:d,y:f},vertices:a.fromPath("L 0 0 L "+c+" 0 L "+c+" "+m+" L 0 "+m)};if(g.chamfer){var _=g.chamfer;p.vertices=a.chamfer(p.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete g.chamfer}return l.create(o.extend({},p,g))},i.trapezoid=function(d,f,c,m,g,p){p=p||{},g>=1&&o.warn("Bodies.trapezoid: slope parameter must be < 1."),g*=.5;var _=(1-g*2)*c,E=c*g,T=E+_,A=T+E,x;g<.5?x="L 0 0 L "+E+" "+-m+" L "+T+" "+-m+" L "+A+" 0":x="L 0 0 L "+T+" "+-m+" L "+A+" 0";var y={label:"Trapezoid Body",position:{x:d,y:f},vertices:a.fromPath(x)};if(p.chamfer){var M=p.chamfer;y.vertices=a.chamfer(y.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete p.chamfer}return l.create(o.extend({},y,p))},i.circle=function(d,f,c,m,g){m=m||{};var p={label:"Circle Body",circleRadius:c};g=g||25;var _=Math.ceil(Math.max(10,Math.min(g,c)));return _%2===1&&(_+=1),i.polygon(d,f,_,c,o.extend({},p,m))},i.polygon=function(d,f,c,m,g){if(g=g||{},c<3)return i.circle(d,f,m,g);for(var p=2*Math.PI/c,_="",E=p*.5,T=0;T<c;T+=1){var A=E+T*p,x=Math.cos(A)*m,y=Math.sin(A)*m;_+="L "+x.toFixed(3)+" "+y.toFixed(3)+" "}var M={label:"Polygon Body",position:{x:d,y:f},vertices:a.fromPath(_)};if(g.chamfer){var b=g.chamfer;M.vertices=a.chamfer(M.vertices,b.radius,b.quality,b.qualityMin,b.qualityMax),delete g.chamfer}return l.create(o.extend({},M,g))},i.fromVertices=function(d,f,c,m,g,p,_,E){var T=o.getDecomp(),A,x,y,M,b,S,v,w,P,D,U;for(A=!!(T&&T.quickDecomp),m=m||{},y=[],g=typeof g<"u"?g:!1,p=typeof p<"u"?p:.01,_=typeof _<"u"?_:10,E=typeof E<"u"?E:.01,o.isArray(c[0])||(c=[c]),D=0;D<c.length;D+=1)if(S=c[D],M=a.isConvex(S),b=!M,b&&!A&&o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),M||!A)M?S=a.clockwiseSort(S):S=a.hull(S),y.push({position:{x:d,y:f},vertices:S});else{var F=S.map(function(Q){return[Q.x,Q.y]});T.makeCCW(F),p!==!1&&T.removeCollinearPoints(F,p),E!==!1&&T.removeDuplicatePoints&&T.removeDuplicatePoints(F,E);var z=T.quickDecomp(F);for(v=0;v<z.length;v++){var G=z[v],H=G.map(function(Q){return{x:Q[0],y:Q[1]}});_>0&&a.area(H)<_||y.push({position:a.centre(H),vertices:H})}}for(v=0;v<y.length;v++)y[v]=l.create(o.extend(y[v],m));if(g){var j=5;for(v=0;v<y.length;v++){var it=y[v];for(w=v+1;w<y.length;w++){var ct=y[w];if(u.overlaps(it.bounds,ct.bounds)){var yt=it.vertices,Lt=ct.vertices;for(P=0;P<it.vertices.length;P++)for(U=0;U<ct.vertices.length;U++){var q=h.magnitudeSquared(h.sub(yt[(P+1)%yt.length],Lt[U])),tt=h.magnitudeSquared(h.sub(yt[P],Lt[(U+1)%Lt.length]));q<j&&tt<j&&(yt[P].isInternal=!0,Lt[U].isInternal=!0)}}}}}return y.length>1?(x=l.create(o.extend({parts:y.slice(0)},m)),l.setPosition(x,{x:d,y:f}),x):y[0]}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0),o=s(8);(function(){i.create=function(l){var u={bodies:[],collisions:[],pairs:null};return a.extend(u,l)},i.setBodies=function(l,u){l.bodies=u.slice(0)},i.clear=function(l){l.bodies=[],l.collisions=[]},i.collisions=function(l){var u=l.pairs,h=l.bodies,d=h.length,f=i.canCollide,c=o.collides,m=l.collisions,g=0,p,_;for(h.sort(i._compareBoundsX),p=0;p<d;p++){var E=h[p],T=E.bounds,A=E.bounds.max.x,x=E.bounds.max.y,y=E.bounds.min.y,M=E.isStatic||E.isSleeping,b=E.parts.length,S=b===1;for(_=p+1;_<d;_++){var v=h[_],w=v.bounds;if(w.min.x>A)break;if(!(x<w.min.y||y>w.max.y)&&!(M&&(v.isStatic||v.isSleeping))&&f(E.collisionFilter,v.collisionFilter)){var P=v.parts.length;if(S&&P===1){var D=c(E,v,u);D&&(m[g++]=D)}else for(var U=b>1?1:0,F=P>1?1:0,z=U;z<b;z++)for(var G=E.parts[z],T=G.bounds,H=F;H<P;H++){var j=v.parts[H],w=j.bounds;if(!(T.min.x>w.max.x||T.max.x<w.min.x||T.max.y<w.min.y||T.min.y>w.max.y)){var D=c(G,j,u);D&&(m[g++]=D)}}}}}return m.length!==g&&(m.length=g),m},i.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},i._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0);(function(){i.create=function(o){var l={};return o||a.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=o||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&(l.button=0,u.preventDefault()),l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var h=i._getRelativeMousePosition(u,l.element,l.pixelRatio),d=u.changedTouches;d&&u.preventDefault(),l.button=-1,l.absolute.x=h.x,l.absolute.y=h.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),l.sourceEvents.mousewheel=u},i.setElement(l,l.element),l},i.setElement=function(o,l){o.element=l,l.addEventListener("mousemove",o.mousemove,{passive:!0}),l.addEventListener("mousedown",o.mousedown,{passive:!0}),l.addEventListener("mouseup",o.mouseup,{passive:!0}),l.addEventListener("wheel",o.mousewheel,{passive:!1}),l.addEventListener("touchmove",o.mousemove,{passive:!1}),l.addEventListener("touchstart",o.mousedown,{passive:!1}),l.addEventListener("touchend",o.mouseup,{passive:!1})},i.clearSourceEvents=function(o){o.sourceEvents.mousemove=null,o.sourceEvents.mousedown=null,o.sourceEvents.mouseup=null,o.sourceEvents.mousewheel=null,o.wheelDelta=0},i.setOffset=function(o,l){o.offset.x=l.x,o.offset.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},i.setScale=function(o,l){o.scale.x=l.x,o.scale.y=l.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y},i._getRelativeMousePosition=function(o,l,u){var h=l.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,f=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,c=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,m=o.changedTouches,g,p;return m?(g=m[0].pageX-h.left-f,p=m[0].pageY-h.top-c):(g=o.pageX-h.left-f,p=o.pageY-h.top-c),{x:g/(l.clientWidth/(l.width||l.clientWidth)*u),y:p/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(0);(function(){i._registry={},i.register=function(o){if(i.isPlugin(o)||a.warn("Plugin.register:",i.toString(o),"does not implement all required fields."),o.name in i._registry){var l=i._registry[o.name],u=i.versionParse(o.version).number,h=i.versionParse(l.version).number;u>h?(a.warn("Plugin.register:",i.toString(l),"was upgraded to",i.toString(o)),i._registry[o.name]=o):u<h?a.warn("Plugin.register:",i.toString(l),"can not be downgraded to",i.toString(o)):o!==l&&a.warn("Plugin.register:",i.toString(o),"is already registered to different plugin object")}else i._registry[o.name]=o;return o},i.resolve=function(o){return i._registry[i.dependencyParse(o).name]},i.toString=function(o){return typeof o=="string"?o:(o.name||"anonymous")+"@"+(o.version||o.range||"0.0.0")},i.isPlugin=function(o){return o&&o.name&&o.version&&o.install},i.isUsed=function(o,l){return o.used.indexOf(l)>-1},i.isFor=function(o,l){var u=o.for&&i.dependencyParse(o.for);return!o.for||l.name===u.name&&i.versionSatisfies(l.version,u.range)},i.use=function(o,l){if(o.uses=(o.uses||[]).concat(l||[]),o.uses.length===0){a.warn("Plugin.use:",i.toString(o),"does not specify any dependencies to install.");return}for(var u=i.dependencies(o),h=a.topologicalSort(u),d=[],f=0;f<h.length;f+=1)if(h[f]!==o.name){var c=i.resolve(h[f]);if(!c){d.push("❌ "+h[f]);continue}i.isUsed(o,c.name)||(i.isFor(c,o)||(a.warn("Plugin.use:",i.toString(c),"is for",c.for,"but installed on",i.toString(o)+"."),c._warned=!0),c.install?c.install(o):(a.warn("Plugin.use:",i.toString(c),"does not specify an install function."),c._warned=!0),c._warned?(d.push("🔶 "+i.toString(c)),delete c._warned):d.push("✅ "+i.toString(c)),o.used.push(c.name))}d.length>0&&a.info(d.join("  "))},i.dependencies=function(o,l){var u=i.dependencyParse(o),h=u.name;if(l=l||{},!(h in l)){o=i.resolve(o)||o,l[h]=a.map(o.uses||[],function(f){i.isPlugin(f)&&i.register(f);var c=i.dependencyParse(f),m=i.resolve(f);return m&&!i.versionSatisfies(m.version,c.range)?(a.warn("Plugin.dependencies:",i.toString(m),"does not satisfy",i.toString(c),"used by",i.toString(u)+"."),m._warned=!0,o._warned=!0):m||(a.warn("Plugin.dependencies:",i.toString(f),"used by",i.toString(u),"could not be resolved."),o._warned=!0),c.name});for(var d=0;d<l[h].length;d+=1)i.dependencies(l[h][d],l);return l}},i.dependencyParse=function(o){if(a.isString(o)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(o)||a.warn("Plugin.dependencyParse:",o,"is not a valid dependency string."),{name:o.split("@")[0],range:o.split("@")[1]||"*"}}return{name:o.name,range:o.range||o.version}},i.versionParse=function(o){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(o)||a.warn("Plugin.versionParse:",o,"is not a valid version or range.");var u=l.exec(o),h=Number(u[4]),d=Number(u[5]),f=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:o,operator:u[1]||u[2]||"",major:h,minor:d,patch:f,parts:[h,d,f],prerelease:u[7],number:h*1e8+d*1e4+f}},i.versionSatisfies=function(o,l){l=l||"*";var u=i.versionParse(l),h=i.versionParse(o);if(u.isRange){if(u.operator==="*"||o==="*")return!0;if(u.operator===">")return h.number>u.number;if(u.operator===">=")return h.number>=u.number;if(u.operator==="~")return h.major===u.major&&h.minor===u.minor&&h.patch>=u.patch;if(u.operator==="^")return u.major>0?h.major===u.major&&h.number>=u.number:u.minor>0?h.minor===u.minor&&h.patch>=u.patch:h.patch===u.patch}return o===l||o==="*"}})()}),(function(e,n){var s={};e.exports=s,(function(){s.create=function(i){return{vertex:i,normalImpulse:0,tangentImpulse:0}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(7),o=s(18),l=s(13),u=s(19),h=s(5),d=s(6),f=s(10),c=s(0),m=s(4);(function(){i._deltaMax=1e3/60,i.create=function(g){g=g||{};var p={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},_=c.extend(p,g);return _.world=g.world||d.create({label:"World"}),_.pairs=g.pairs||u.create(),_.detector=g.detector||l.create(),_.detector.pairs=_.pairs,_.grid={buckets:[]},_.world.gravity=_.gravity,_.broadphase=_.grid,_.metrics={},_},i.update=function(g,p){var _=c.now(),E=g.world,T=g.detector,A=g.pairs,x=g.timing,y=x.timestamp,M;p>i._deltaMax&&c.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",i._deltaMax.toFixed(3),"ms."),p=typeof p<"u"?p:c._baseDelta,p*=x.timeScale,x.timestamp+=p,x.lastDelta=p;var b={timestamp:x.timestamp,delta:p};h.trigger(g,"beforeUpdate",b);var S=d.allBodies(E),v=d.allConstraints(E);for(E.isModified&&(l.setBodies(T,S),d.setModified(E,!1,!1,!0)),g.enableSleeping&&a.update(S,p),i._bodiesApplyGravity(S,g.gravity),p>0&&i._bodiesUpdate(S,p),h.trigger(g,"beforeSolve",b),f.preSolveAll(S),M=0;M<g.constraintIterations;M++)f.solveAll(v,p);f.postSolveAll(S);var w=l.collisions(T);u.update(A,w,y),g.enableSleeping&&a.afterCollisions(A.list),A.collisionStart.length>0&&h.trigger(g,"collisionStart",{pairs:A.collisionStart,timestamp:x.timestamp,delta:p});var P=c.clamp(20/g.positionIterations,0,1);for(o.preSolvePosition(A.list),M=0;M<g.positionIterations;M++)o.solvePosition(A.list,p,P);for(o.postSolvePosition(S),f.preSolveAll(S),M=0;M<g.constraintIterations;M++)f.solveAll(v,p);for(f.postSolveAll(S),o.preSolveVelocity(A.list),M=0;M<g.velocityIterations;M++)o.solveVelocity(A.list,p);return i._bodiesUpdateVelocities(S),A.collisionActive.length>0&&h.trigger(g,"collisionActive",{pairs:A.collisionActive,timestamp:x.timestamp,delta:p}),A.collisionEnd.length>0&&h.trigger(g,"collisionEnd",{pairs:A.collisionEnd,timestamp:x.timestamp,delta:p}),i._bodiesClearForces(S),h.trigger(g,"afterUpdate",b),g.timing.lastElapsed=c.now()-_,g},i.merge=function(g,p){if(c.extend(g,p),p.world){g.world=p.world,i.clear(g);for(var _=d.allBodies(g.world),E=0;E<_.length;E++){var T=_[E];a.set(T,!1),T.id=c.nextId()}}},i.clear=function(g){u.clear(g.pairs),l.clear(g.detector)},i._bodiesClearForces=function(g){for(var p=g.length,_=0;_<p;_++){var E=g[_];E.force.x=0,E.force.y=0,E.torque=0}},i._bodiesApplyGravity=function(g,p){var _=typeof p.scale<"u"?p.scale:.001,E=g.length;if(!(p.x===0&&p.y===0||_===0))for(var T=0;T<E;T++){var A=g[T];A.isStatic||A.isSleeping||(A.force.y+=A.mass*p.y*_,A.force.x+=A.mass*p.x*_)}},i._bodiesUpdate=function(g,p){for(var _=g.length,E=0;E<_;E++){var T=g[E];T.isStatic||T.isSleeping||m.update(T,p)}},i._bodiesUpdateVelocities=function(g){for(var p=g.length,_=0;_<p;_++)m.updateVelocities(g[_])}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(0),l=s(1);(function(){i._restingThresh=2,i._restingThreshTangent=Math.sqrt(6),i._positionDampen=.9,i._positionWarming=.8,i._frictionNormalMultiplier=5,i._frictionMaxStatic=Number.MAX_VALUE,i.preSolvePosition=function(u){var h,d,f,c=u.length;for(h=0;h<c;h++)d=u[h],d.isActive&&(f=d.contactCount,d.collision.parentA.totalContacts+=f,d.collision.parentB.totalContacts+=f)},i.solvePosition=function(u,h,d){var f,c,m,g,p,_,E,T,A=i._positionDampen*(d||1),x=o.clamp(h/o._baseDelta,0,1),y=u.length;for(f=0;f<y;f++)c=u[f],!(!c.isActive||c.isSensor)&&(m=c.collision,g=m.parentA,p=m.parentB,_=m.normal,c.separation=m.depth+_.x*(p.positionImpulse.x-g.positionImpulse.x)+_.y*(p.positionImpulse.y-g.positionImpulse.y));for(f=0;f<y;f++)c=u[f],!(!c.isActive||c.isSensor)&&(m=c.collision,g=m.parentA,p=m.parentB,_=m.normal,T=c.separation-c.slop*x,(g.isStatic||p.isStatic)&&(T*=2),g.isStatic||g.isSleeping||(E=A/g.totalContacts,g.positionImpulse.x+=_.x*T*E,g.positionImpulse.y+=_.y*T*E),p.isStatic||p.isSleeping||(E=A/p.totalContacts,p.positionImpulse.x-=_.x*T*E,p.positionImpulse.y-=_.y*T*E))},i.postSolvePosition=function(u){for(var h=i._positionWarming,d=u.length,f=a.translate,c=l.update,m=0;m<d;m++){var g=u[m],p=g.positionImpulse,_=p.x,E=p.y,T=g.velocity;if(g.totalContacts=0,_!==0||E!==0){for(var A=0;A<g.parts.length;A++){var x=g.parts[A];f(x.vertices,p),c(x.bounds,x.vertices,T),x.position.x+=_,x.position.y+=E}g.positionPrev.x+=_,g.positionPrev.y+=E,_*T.x+E*T.y<0?(p.x=0,p.y=0):(p.x*=h,p.y*=h)}}},i.preSolveVelocity=function(u){var h=u.length,d,f;for(d=0;d<h;d++){var c=u[d];if(!(!c.isActive||c.isSensor)){var m=c.contacts,g=c.contactCount,p=c.collision,_=p.parentA,E=p.parentB,T=p.normal,A=p.tangent;for(f=0;f<g;f++){var x=m[f],y=x.vertex,M=x.normalImpulse,b=x.tangentImpulse;if(M!==0||b!==0){var S=T.x*M+A.x*b,v=T.y*M+A.y*b;_.isStatic||_.isSleeping||(_.positionPrev.x+=S*_.inverseMass,_.positionPrev.y+=v*_.inverseMass,_.anglePrev+=_.inverseInertia*((y.x-_.position.x)*v-(y.y-_.position.y)*S)),E.isStatic||E.isSleeping||(E.positionPrev.x-=S*E.inverseMass,E.positionPrev.y-=v*E.inverseMass,E.anglePrev-=E.inverseInertia*((y.x-E.position.x)*v-(y.y-E.position.y)*S))}}}}},i.solveVelocity=function(u,h){var d=h/o._baseDelta,f=d*d,c=f*d,m=-i._restingThresh*d,g=i._restingThreshTangent,p=i._frictionNormalMultiplier*d,_=i._frictionMaxStatic,E=u.length,T,A,x,y;for(x=0;x<E;x++){var M=u[x];if(!(!M.isActive||M.isSensor)){var b=M.collision,S=b.parentA,v=b.parentB,w=b.normal.x,P=b.normal.y,D=b.tangent.x,U=b.tangent.y,F=M.inverseMass,z=M.friction*M.frictionStatic*p,G=M.contacts,H=M.contactCount,j=1/H,it=S.position.x-S.positionPrev.x,ct=S.position.y-S.positionPrev.y,yt=S.angle-S.anglePrev,Lt=v.position.x-v.positionPrev.x,q=v.position.y-v.positionPrev.y,tt=v.angle-v.anglePrev;for(y=0;y<H;y++){var Q=G[y],st=Q.vertex,dt=st.x-S.position.x,Tt=st.y-S.position.y,bt=st.x-v.position.x,Vt=st.y-v.position.y,wt=it-Tt*yt,re=ct+dt*yt,I=Lt-Vt*tt,Ie=q+bt*tt,Ot=wt-I,Bt=re-Ie,xt=w*Ot+P*Bt,zt=D*Ot+U*Bt,St=M.separation+xt,L=Math.min(St,1);L=St<0?0:L;var C=L*z;zt<-C||zt>C?(A=zt>0?zt:-zt,T=M.friction*(zt>0?1:-1)*c,T<-A?T=-A:T>A&&(T=A)):(T=zt,A=_);var V=dt*P-Tt*w,Z=bt*P-Vt*w,J=j/(F+S.inverseInertia*V*V+v.inverseInertia*Z*Z),$=(1+M.restitution)*xt*J;if(T*=J,xt<m)Q.normalImpulse=0;else{var vt=Q.normalImpulse;Q.normalImpulse+=$,Q.normalImpulse>0&&(Q.normalImpulse=0),$=Q.normalImpulse-vt}if(zt<-g||zt>g)Q.tangentImpulse=0;else{var at=Q.tangentImpulse;Q.tangentImpulse+=T,Q.tangentImpulse<-A&&(Q.tangentImpulse=-A),Q.tangentImpulse>A&&(Q.tangentImpulse=A),T=Q.tangentImpulse-at}var ut=w*$+D*T,Nt=P*$+U*T;S.isStatic||S.isSleeping||(S.positionPrev.x+=ut*S.inverseMass,S.positionPrev.y+=Nt*S.inverseMass,S.anglePrev+=(dt*Nt-Tt*ut)*S.inverseInertia),v.isStatic||v.isSleeping||(v.positionPrev.x-=ut*v.inverseMass,v.positionPrev.y-=Nt*v.inverseMass,v.anglePrev-=(bt*Nt-Vt*ut)*v.inverseInertia)}}}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(9),o=s(0);(function(){i.create=function(l){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},i.update=function(l,u,h){var d=a.update,f=a.create,c=a.setActive,m=l.table,g=l.list,p=g.length,_=p,E=l.collisionStart,T=l.collisionEnd,A=l.collisionActive,x=u.length,y=0,M=0,b=0,S,v,w;for(w=0;w<x;w++)S=u[w],v=S.pair,v?(v.isActive&&(A[b++]=v),d(v,S,h)):(v=f(S,h),m[v.id]=v,E[y++]=v,g[_++]=v);for(_=0,p=g.length,w=0;w<p;w++)v=g[w],v.timeUpdated>=h?g[_++]=v:(c(v,!1,h),v.collision.bodyA.sleepCounter>0&&v.collision.bodyB.sleepCounter>0?g[_++]=v:(T[M++]=v,delete m[v.id]));g.length!==_&&(g.length=_),E.length!==y&&(E.length=y),T.length!==M&&(T.length=M),A.length!==b&&(A.length=b)},i.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()}),(function(e,n,s){var i=e.exports=s(21);i.Axes=s(11),i.Bodies=s(12),i.Body=s(4),i.Bounds=s(1),i.Collision=s(8),i.Common=s(0),i.Composite=s(6),i.Composites=s(22),i.Constraint=s(10),i.Contact=s(16),i.Detector=s(13),i.Engine=s(17),i.Events=s(5),i.Grid=s(23),i.Mouse=s(14),i.MouseConstraint=s(24),i.Pair=s(9),i.Pairs=s(19),i.Plugin=s(15),i.Query=s(25),i.Render=s(26),i.Resolver=s(18),i.Runner=s(27),i.SAT=s(28),i.Sleeping=s(7),i.Svg=s(29),i.Vector=s(2),i.Vertices=s(3),i.World=s(30),i.Engine.run=i.Runner.run,i.Common.deprecated(i.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(e,n,s){var i={};e.exports=i;var a=s(15),o=s(0);(function(){i.name="matter-js",i.version="0.20.0",i.uses=[],i.used=[],i.use=function(){a.use(i,Array.prototype.slice.call(arguments))},i.before=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathBefore(i,l,u)},i.after=function(l,u){return l=l.replace(/^Matter./,""),o.chainPathAfter(i,l,u)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(6),o=s(10),l=s(0),u=s(4),h=s(12),d=l.deprecated;(function(){i.stack=function(f,c,m,g,p,_,E){for(var T=a.create({label:"Stack"}),A=f,x=c,y,M=0,b=0;b<g;b++){for(var S=0,v=0;v<m;v++){var w=E(A,x,v,b,y,M);if(w){var P=w.bounds.max.y-w.bounds.min.y,D=w.bounds.max.x-w.bounds.min.x;P>S&&(S=P),u.translate(w,{x:D*.5,y:P*.5}),A=w.bounds.max.x+p,a.addBody(T,w),y=w,M+=1}else A+=p}x+=S+_,A=f}return T},i.chain=function(f,c,m,g,p,_){for(var E=f.bodies,T=1;T<E.length;T++){var A=E[T-1],x=E[T],y=A.bounds.max.y-A.bounds.min.y,M=A.bounds.max.x-A.bounds.min.x,b=x.bounds.max.y-x.bounds.min.y,S=x.bounds.max.x-x.bounds.min.x,v={bodyA:A,pointA:{x:M*c,y:y*m},bodyB:x,pointB:{x:S*g,y:b*p}},w=l.extend(v,_);a.addConstraint(f,o.create(w))}return f.label+=" Chain",f},i.mesh=function(f,c,m,g,p){var _=f.bodies,E,T,A,x,y;for(E=0;E<m;E++){for(T=1;T<c;T++)A=_[T-1+E*c],x=_[T+E*c],a.addConstraint(f,o.create(l.extend({bodyA:A,bodyB:x},p)));if(E>0)for(T=0;T<c;T++)A=_[T+(E-1)*c],x=_[T+E*c],a.addConstraint(f,o.create(l.extend({bodyA:A,bodyB:x},p))),g&&T>0&&(y=_[T-1+(E-1)*c],a.addConstraint(f,o.create(l.extend({bodyA:y,bodyB:x},p)))),g&&T<c-1&&(y=_[T+1+(E-1)*c],a.addConstraint(f,o.create(l.extend({bodyA:y,bodyB:x},p))))}return f.label+=" Mesh",f},i.pyramid=function(f,c,m,g,p,_,E){return i.stack(f,c,m,g,p,_,function(T,A,x,y,M,b){var S=Math.min(g,Math.ceil(m/2)),v=M?M.bounds.max.x-M.bounds.min.x:0;if(!(y>S)){y=S-y;var w=y,P=m-1-y;if(!(x<w||x>P)){b===1&&u.translate(M,{x:(x+(m%2===1?1:-1))*v,y:0});var D=M?x*v:0;return E(f+D+x*p,A,x,y,M,b)}}})},i.newtonsCradle=function(f,c,m,g,p){for(var _=a.create({label:"Newtons Cradle"}),E=0;E<m;E++){var T=1.9,A=h.circle(f+E*(g*T),c+p,g,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=o.create({pointA:{x:f+E*(g*T),y:c},bodyB:A});a.addBody(_,A),a.addConstraint(_,x)}return _},d(i,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),i.car=function(f,c,m,g,p){var _=u.nextGroup(!0),E=20,T=-m*.5+E,A=m*.5-E,x=0,y=a.create({label:"Car"}),M=h.rectangle(f,c,m,g,{collisionFilter:{group:_},chamfer:{radius:g*.5},density:2e-4}),b=h.circle(f+T,c+x,p,{collisionFilter:{group:_},friction:.8}),S=h.circle(f+A,c+x,p,{collisionFilter:{group:_},friction:.8}),v=o.create({bodyB:M,pointB:{x:T,y:x},bodyA:b,stiffness:1,length:0}),w=o.create({bodyB:M,pointB:{x:A,y:x},bodyA:S,stiffness:1,length:0});return a.addBody(y,M),a.addBody(y,b),a.addBody(y,S),a.addConstraint(y,v),a.addConstraint(y,w),y},d(i,"car","Composites.car ➤ moved to car example"),i.softBody=function(f,c,m,g,p,_,E,T,A,x){A=l.extend({inertia:1/0},A),x=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var y=i.stack(f,c,m,g,p,_,function(M,b){return h.circle(M,b,T,A)});return i.mesh(y,m,g,E,x),y.label="Soft Body",y},d(i,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(e,n,s){var i={};e.exports=i;var a=s(9),o=s(0),l=o.deprecated;(function(){i.create=function(u){var h={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return o.extend(h,u)},i.update=function(u,h,d,f){var c,m,g,p=d.world,_=u.buckets,E,T,A=!1;for(c=0;c<h.length;c++){var x=h[c];if(!(x.isSleeping&&!f)&&!(p.bounds&&(x.bounds.max.x<p.bounds.min.x||x.bounds.min.x>p.bounds.max.x||x.bounds.max.y<p.bounds.min.y||x.bounds.min.y>p.bounds.max.y))){var y=i._getRegion(u,x);if(!x.region||y.id!==x.region.id||f){(!x.region||f)&&(x.region=y);var M=i._regionUnion(y,x.region);for(m=M.startCol;m<=M.endCol;m++)for(g=M.startRow;g<=M.endRow;g++){T=i._getBucketId(m,g),E=_[T];var b=m>=y.startCol&&m<=y.endCol&&g>=y.startRow&&g<=y.endRow,S=m>=x.region.startCol&&m<=x.region.endCol&&g>=x.region.startRow&&g<=x.region.endRow;!b&&S&&S&&E&&i._bucketRemoveBody(u,E,x),(x.region===y||b&&!S||f)&&(E||(E=i._createBucket(_,T)),i._bucketAddBody(u,E,x))}x.region=y,A=!0}}}A&&(u.pairsList=i._createActivePairsList(u))},l(i,"update","Grid.update ➤ replaced by Matter.Detector"),i.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(i,"clear","Grid.clear ➤ replaced by Matter.Detector"),i._regionUnion=function(u,h){var d=Math.min(u.startCol,h.startCol),f=Math.max(u.endCol,h.endCol),c=Math.min(u.startRow,h.startRow),m=Math.max(u.endRow,h.endRow);return i._createRegion(d,f,c,m)},i._getRegion=function(u,h){var d=h.bounds,f=Math.floor(d.min.x/u.bucketWidth),c=Math.floor(d.max.x/u.bucketWidth),m=Math.floor(d.min.y/u.bucketHeight),g=Math.floor(d.max.y/u.bucketHeight);return i._createRegion(f,c,m,g)},i._createRegion=function(u,h,d,f){return{id:u+","+h+","+d+","+f,startCol:u,endCol:h,startRow:d,endRow:f}},i._getBucketId=function(u,h){return"C"+u+"R"+h},i._createBucket=function(u,h){var d=u[h]=[];return d},i._bucketAddBody=function(u,h,d){var f=u.pairs,c=a.id,m=h.length,g;for(g=0;g<m;g++){var p=h[g];if(!(d.id===p.id||d.isStatic&&p.isStatic)){var _=c(d,p),E=f[_];E?E[2]+=1:f[_]=[d,p,1]}}h.push(d)},i._bucketRemoveBody=function(u,h,d){var f=u.pairs,c=a.id,m;h.splice(o.indexOf(h,d),1);var g=h.length;for(m=0;m<g;m++){var p=f[c(d,h[m])];p&&(p[2]-=1)}},i._createActivePairsList=function(u){var h,d=u.pairs,f=o.keys(d),c=f.length,m=[],g;for(g=0;g<c;g++)h=d[f[g]],h[2]>0?m.push(h):delete d[f[g]];return m}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(3),o=s(7),l=s(14),u=s(5),h=s(13),d=s(10),f=s(6),c=s(0),m=s(1);(function(){i.create=function(g,p){var _=(g?g.mouse:null)||(p?p.mouse:null);_||(g&&g.render&&g.render.canvas?_=l.create(g.render.canvas):p&&p.element?_=l.create(p.element):(_=l.create(),c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var E=d.create({label:"Mouse Constraint",pointA:_.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),T={type:"mouseConstraint",mouse:_,element:null,body:null,constraint:E,collisionFilter:{category:1,mask:4294967295,group:0}},A=c.extend(T,p);return u.on(g,"beforeUpdate",function(){var x=f.allBodies(g.world);i.update(A,x),i._triggerEvents(A)}),A},i.update=function(g,p){var _=g.mouse,E=g.constraint,T=g.body;if(_.button===0){if(E.bodyB)o.set(E.bodyB,!1),E.pointA=_.position;else for(var A=0;A<p.length;A++)if(T=p[A],m.contains(T.bounds,_.position)&&h.canCollide(T.collisionFilter,g.collisionFilter))for(var x=T.parts.length>1?1:0;x<T.parts.length;x++){var y=T.parts[x];if(a.contains(y.vertices,_.position)){E.pointA=_.position,E.bodyB=g.body=T,E.pointB={x:_.position.x-T.position.x,y:_.position.y-T.position.y},E.angleB=T.angle,o.set(T,!1),u.trigger(g,"startdrag",{mouse:_,body:T});break}}}else E.bodyB=g.body=null,E.pointB=null,T&&u.trigger(g,"enddrag",{mouse:_,body:T})},i._triggerEvents=function(g){var p=g.mouse,_=p.sourceEvents;_.mousemove&&u.trigger(g,"mousemove",{mouse:p}),_.mousedown&&u.trigger(g,"mousedown",{mouse:p}),_.mouseup&&u.trigger(g,"mouseup",{mouse:p}),l.clearSourceEvents(p)}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(2),o=s(8),l=s(1),u=s(12),h=s(3);(function(){i.collides=function(d,f){for(var c=[],m=f.length,g=d.bounds,p=o.collides,_=l.overlaps,E=0;E<m;E++){var T=f[E],A=T.parts.length,x=A===1?0:1;if(_(T.bounds,g))for(var y=x;y<A;y++){var M=T.parts[y];if(_(M.bounds,g)){var b=p(M,d);if(b){c.push(b);break}}}}return c},i.ray=function(d,f,c,m){m=m||1e-100;for(var g=a.angle(f,c),p=a.magnitude(a.sub(f,c)),_=(c.x+f.x)*.5,E=(c.y+f.y)*.5,T=u.rectangle(_,E,p,m,{angle:g}),A=i.collides(T,d),x=0;x<A.length;x+=1){var y=A[x];y.body=y.bodyB=y.bodyA}return A},i.region=function(d,f,c){for(var m=[],g=0;g<d.length;g++){var p=d[g],_=l.overlaps(p.bounds,f);(_&&!c||!_&&c)&&m.push(p)}return m},i.point=function(d,f){for(var c=[],m=0;m<d.length;m++){var g=d[m];if(l.contains(g.bounds,f))for(var p=g.parts.length===1?0:1;p<g.parts.length;p++){var _=g.parts[p];if(l.contains(_.bounds,f)&&h.contains(_.vertices,f)){c.push(g);break}}}return c}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(4),o=s(0),l=s(6),u=s(1),h=s(5),d=s(2),f=s(14);(function(){var c,m;typeof window<"u"&&(c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(o.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),i._goodFps=30,i._goodDelta=1e3/60,i.create=function(x){var y={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},M=o.extend(y,x);return M.canvas&&(M.canvas.width=M.options.width||M.canvas.width,M.canvas.height=M.options.height||M.canvas.height),M.mouse=x.mouse,M.engine=x.engine,M.canvas=M.canvas||_(M.options.width,M.options.height),M.context=M.canvas.getContext("2d"),M.textures={},M.bounds=M.bounds||{min:{x:0,y:0},max:{x:M.canvas.width,y:M.canvas.height}},M.controller=i,M.options.showBroadphase=!1,M.options.pixelRatio!==1&&i.setPixelRatio(M,M.options.pixelRatio),o.isElement(M.element)&&M.element.appendChild(M.canvas),M},i.run=function(x){(function y(M){x.frameRequestId=c(y),g(x,M),i.world(x,M),x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0),(x.options.showStats||x.options.showDebug)&&i.stats(x,x.context,M),(x.options.showPerformance||x.options.showDebug)&&i.performance(x,x.context,M),x.context.setTransform(1,0,0,1,0,0)})()},i.stop=function(x){m(x.frameRequestId)},i.setPixelRatio=function(x,y){var M=x.options,b=x.canvas;y==="auto"&&(y=E(b)),M.pixelRatio=y,b.setAttribute("data-pixel-ratio",y),b.width=M.width*y,b.height=M.height*y,b.style.width=M.width+"px",b.style.height=M.height+"px"},i.setSize=function(x,y,M){x.options.width=y,x.options.height=M,x.bounds.max.x=x.bounds.min.x+y,x.bounds.max.y=x.bounds.min.y+M,x.options.pixelRatio!==1?i.setPixelRatio(x,x.options.pixelRatio):(x.canvas.width=y,x.canvas.height=M)},i.lookAt=function(x,y,M,b){b=typeof b<"u"?b:!0,y=o.isArray(y)?y:[y],M=M||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},v=0;v<y.length;v+=1){var w=y[v],P=w.bounds?w.bounds.min:w.min||w.position||w,D=w.bounds?w.bounds.max:w.max||w.position||w;P&&D&&(P.x<S.min.x&&(S.min.x=P.x),D.x>S.max.x&&(S.max.x=D.x),P.y<S.min.y&&(S.min.y=P.y),D.y>S.max.y&&(S.max.y=D.y))}var U=S.max.x-S.min.x+2*M.x,F=S.max.y-S.min.y+2*M.y,z=x.canvas.height,G=x.canvas.width,H=G/z,j=U/F,it=1,ct=1;j>H?ct=j/H:it=H/j,x.options.hasBounds=!0,x.bounds.min.x=S.min.x,x.bounds.max.x=S.min.x+U*it,x.bounds.min.y=S.min.y,x.bounds.max.y=S.min.y+F*ct,b&&(x.bounds.min.x+=U*.5-U*it*.5,x.bounds.max.x+=U*.5-U*it*.5,x.bounds.min.y+=F*.5-F*ct*.5,x.bounds.max.y+=F*.5-F*ct*.5),x.bounds.min.x-=M.x,x.bounds.max.x-=M.x,x.bounds.min.y-=M.y,x.bounds.max.y-=M.y,x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),f.setOffset(x.mouse,x.bounds.min))},i.startViewTransform=function(x){var y=x.bounds.max.x-x.bounds.min.x,M=x.bounds.max.y-x.bounds.min.y,b=y/x.options.width,S=M/x.options.height;x.context.setTransform(x.options.pixelRatio/b,0,0,x.options.pixelRatio/S,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},i.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},i.world=function(x,y){var M=o.now(),b=x.engine,S=b.world,v=x.canvas,w=x.context,P=x.options,D=x.timing,U=l.allBodies(S),F=l.allConstraints(S),z=P.wireframes?P.wireframeBackground:P.background,G=[],H=[],j,it={timestamp:b.timing.timestamp};if(h.trigger(x,"beforeRender",it),x.currentBackground!==z&&A(x,z),w.globalCompositeOperation="source-in",w.fillStyle="transparent",w.fillRect(0,0,v.width,v.height),w.globalCompositeOperation="source-over",P.hasBounds){for(j=0;j<U.length;j++){var ct=U[j];u.overlaps(ct.bounds,x.bounds)&&G.push(ct)}for(j=0;j<F.length;j++){var yt=F[j],Lt=yt.bodyA,q=yt.bodyB,tt=yt.pointA,Q=yt.pointB;Lt&&(tt=d.add(Lt.position,yt.pointA)),q&&(Q=d.add(q.position,yt.pointB)),!(!tt||!Q)&&(u.contains(x.bounds,tt)||u.contains(x.bounds,Q))&&H.push(yt)}i.startViewTransform(x),x.mouse&&(f.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),f.setOffset(x.mouse,x.bounds.min))}else H=F,G=U,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!P.wireframes||b.enableSleeping&&P.showSleeping?i.bodies(x,G,w):(P.showConvexHulls&&i.bodyConvexHulls(x,G,w),i.bodyWireframes(x,G,w)),P.showBounds&&i.bodyBounds(x,G,w),(P.showAxes||P.showAngleIndicator)&&i.bodyAxes(x,G,w),P.showPositions&&i.bodyPositions(x,G,w),P.showVelocity&&i.bodyVelocity(x,G,w),P.showIds&&i.bodyIds(x,G,w),P.showSeparations&&i.separations(x,b.pairs.list,w),P.showCollisions&&i.collisions(x,b.pairs.list,w),P.showVertexNumbers&&i.vertexNumbers(x,G,w),P.showMousePosition&&i.mousePosition(x,x.mouse,w),i.constraints(H,w),P.hasBounds&&i.endViewTransform(x),h.trigger(x,"afterRender",it),D.lastElapsed=o.now()-M},i.stats=function(x,y,M){for(var b=x.engine,S=b.world,v=l.allBodies(S),w=0,P=55,D=44,U=0,F=0,z=0;z<v.length;z+=1)w+=v[z].parts.length;var G={Part:w,Body:v.length,Cons:l.allConstraints(S).length,Comp:l.allComposites(S).length,Pair:b.pairs.list.length};y.fillStyle="#0e0f19",y.fillRect(U,F,P*5.5,D),y.font="12px Arial",y.textBaseline="top",y.textAlign="right";for(var H in G){var j=G[H];y.fillStyle="#aaa",y.fillText(H,U+P,F+8),y.fillStyle="#eee",y.fillText(j,U+P,F+26),U+=P}},i.performance=function(x,y){var M=x.engine,b=x.timing,S=b.deltaHistory,v=b.elapsedHistory,w=b.timestampElapsedHistory,P=b.engineDeltaHistory,D=b.engineUpdatesHistory,U=b.engineElapsedHistory,F=M.timing.lastUpdatesPerFrame,z=M.timing.lastDelta,G=p(S),H=p(v),j=p(P),it=p(D),ct=p(U),yt=p(w),Lt=yt/G||0,q=Math.round(G/z),tt=1e3/G||0,Q=4,st=12,dt=60,Tt=34,bt=10,Vt=69;y.fillStyle="#0e0f19",y.fillRect(0,50,st*5+dt*6+22,Tt),i.status(y,bt,Vt,dt,Q,S.length,Math.round(tt)+" fps",tt/i._goodFps,function(wt){return S[wt]/G-1}),i.status(y,bt+st+dt,Vt,dt,Q,P.length,z.toFixed(2)+" dt",i._goodDelta/z,function(wt){return P[wt]/j-1}),i.status(y,bt+(st+dt)*2,Vt,dt,Q,D.length,F+" upf",Math.pow(o.clamp(it/q||1,0,1),4),function(wt){return D[wt]/it-1}),i.status(y,bt+(st+dt)*3,Vt,dt,Q,U.length,ct.toFixed(2)+" ut",1-F*ct/i._goodFps,function(wt){return U[wt]/ct-1}),i.status(y,bt+(st+dt)*4,Vt,dt,Q,v.length,H.toFixed(2)+" rt",1-H/i._goodFps,function(wt){return v[wt]/H-1}),i.status(y,bt+(st+dt)*5,Vt,dt,Q,w.length,Lt.toFixed(2)+" x",Lt*Lt*Lt,function(wt){return(w[wt]/S[wt]/Lt||0)-1})},i.status=function(x,y,M,b,S,v,w,P,D){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(y,M+7,b,1),x.beginPath(),x.moveTo(y,M+7-S*o.clamp(.4*D(0),-2,2));for(var U=0;U<b;U+=1)x.lineTo(y+U,M+7-(U<v?S*o.clamp(.4*D(U),-2,2):0));x.stroke(),x.fillStyle="hsl("+o.clamp(25+95*P,0,120)+",100%,60%)",x.fillRect(y,M-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(w,y+b,M-5)},i.constraints=function(x,y){for(var M=y,b=0;b<x.length;b++){var S=x[b];if(!(!S.render.visible||!S.pointA||!S.pointB)){var v=S.bodyA,w=S.bodyB,P,D;if(v?P=d.add(v.position,S.pointA):P=S.pointA,S.render.type==="pin")M.beginPath(),M.arc(P.x,P.y,3,0,2*Math.PI),M.closePath();else{if(w?D=d.add(w.position,S.pointB):D=S.pointB,M.beginPath(),M.moveTo(P.x,P.y),S.render.type==="spring")for(var U=d.sub(D,P),F=d.perp(d.normalise(U)),z=Math.ceil(o.clamp(S.length/5,12,20)),G,H=1;H<z;H+=1)G=H%2===0?1:-1,M.lineTo(P.x+U.x*(H/z)+F.x*G*4,P.y+U.y*(H/z)+F.y*G*4);M.lineTo(D.x,D.y)}S.render.lineWidth&&(M.lineWidth=S.render.lineWidth,M.strokeStyle=S.render.strokeStyle,M.stroke()),S.render.anchors&&(M.fillStyle=S.render.strokeStyle,M.beginPath(),M.arc(P.x,P.y,3,0,2*Math.PI),M.arc(D.x,D.y,3,0,2*Math.PI),M.closePath(),M.fill())}}},i.bodies=function(x,y,M){var b=M;x.engine;var S=x.options,v=S.showInternalEdges||!S.wireframes,w,P,D,U;for(D=0;D<y.length;D++)if(w=y[D],!!w.render.visible){for(U=w.parts.length>1?1:0;U<w.parts.length;U++)if(P=w.parts[U],!!P.render.visible){if(S.showSleeping&&w.isSleeping?b.globalAlpha=.5*P.render.opacity:P.render.opacity!==1&&(b.globalAlpha=P.render.opacity),P.render.sprite&&P.render.sprite.texture&&!S.wireframes){var F=P.render.sprite,z=T(x,F.texture);b.translate(P.position.x,P.position.y),b.rotate(P.angle),b.drawImage(z,z.width*-F.xOffset*F.xScale,z.height*-F.yOffset*F.yScale,z.width*F.xScale,z.height*F.yScale),b.rotate(-P.angle),b.translate(-P.position.x,-P.position.y)}else{if(P.circleRadius)b.beginPath(),b.arc(P.position.x,P.position.y,P.circleRadius,0,2*Math.PI);else{b.beginPath(),b.moveTo(P.vertices[0].x,P.vertices[0].y);for(var G=1;G<P.vertices.length;G++)!P.vertices[G-1].isInternal||v?b.lineTo(P.vertices[G].x,P.vertices[G].y):b.moveTo(P.vertices[G].x,P.vertices[G].y),P.vertices[G].isInternal&&!v&&b.moveTo(P.vertices[(G+1)%P.vertices.length].x,P.vertices[(G+1)%P.vertices.length].y);b.lineTo(P.vertices[0].x,P.vertices[0].y),b.closePath()}S.wireframes?(b.lineWidth=1,b.strokeStyle=x.options.wireframeStrokeStyle,b.stroke()):(b.fillStyle=P.render.fillStyle,P.render.lineWidth&&(b.lineWidth=P.render.lineWidth,b.strokeStyle=P.render.strokeStyle,b.stroke()),b.fill())}b.globalAlpha=1}}},i.bodyWireframes=function(x,y,M){var b=M,S=x.options.showInternalEdges,v,w,P,D,U;for(b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.render.visible)for(U=v.parts.length>1?1:0;U<v.parts.length;U++){for(w=v.parts[U],b.moveTo(w.vertices[0].x,w.vertices[0].y),D=1;D<w.vertices.length;D++)!w.vertices[D-1].isInternal||S?b.lineTo(w.vertices[D].x,w.vertices[D].y):b.moveTo(w.vertices[D].x,w.vertices[D].y),w.vertices[D].isInternal&&!S&&b.moveTo(w.vertices[(D+1)%w.vertices.length].x,w.vertices[(D+1)%w.vertices.length].y);b.lineTo(w.vertices[0].x,w.vertices[0].y)}b.lineWidth=1,b.strokeStyle=x.options.wireframeStrokeStyle,b.stroke()},i.bodyConvexHulls=function(x,y,M){var b=M,S,v,w;for(b.beginPath(),v=0;v<y.length;v++)if(S=y[v],!(!S.render.visible||S.parts.length===1)){for(b.moveTo(S.vertices[0].x,S.vertices[0].y),w=1;w<S.vertices.length;w++)b.lineTo(S.vertices[w].x,S.vertices[w].y);b.lineTo(S.vertices[0].x,S.vertices[0].y)}b.lineWidth=1,b.strokeStyle="rgba(255,255,255,0.2)",b.stroke()},i.vertexNumbers=function(x,y,M){var b=M,S,v,w;for(S=0;S<y.length;S++){var P=y[S].parts;for(w=P.length>1?1:0;w<P.length;w++){var D=P[w];for(v=0;v<D.vertices.length;v++)b.fillStyle="rgba(255,255,255,0.2)",b.fillText(S+"_"+v,D.position.x+(D.vertices[v].x-D.position.x)*.8,D.position.y+(D.vertices[v].y-D.position.y)*.8)}}},i.mousePosition=function(x,y,M){var b=M;b.fillStyle="rgba(255,255,255,0.8)",b.fillText(y.position.x+"  "+y.position.y,y.position.x+5,y.position.y-5)},i.bodyBounds=function(x,y,M){var b=M;x.engine;var S=x.options;b.beginPath();for(var v=0;v<y.length;v++){var w=y[v];if(w.render.visible)for(var P=y[v].parts,D=P.length>1?1:0;D<P.length;D++){var U=P[D];b.rect(U.bounds.min.x,U.bounds.min.y,U.bounds.max.x-U.bounds.min.x,U.bounds.max.y-U.bounds.min.y)}}S.wireframes?b.strokeStyle="rgba(255,255,255,0.08)":b.strokeStyle="rgba(0,0,0,0.1)",b.lineWidth=1,b.stroke()},i.bodyAxes=function(x,y,M){var b=M;x.engine;var S=x.options,v,w,P,D;for(b.beginPath(),w=0;w<y.length;w++){var U=y[w],F=U.parts;if(U.render.visible)if(S.showAxes)for(P=F.length>1?1:0;P<F.length;P++)for(v=F[P],D=0;D<v.axes.length;D++){var z=v.axes[D];b.moveTo(v.position.x,v.position.y),b.lineTo(v.position.x+z.x*20,v.position.y+z.y*20)}else for(P=F.length>1?1:0;P<F.length;P++)for(v=F[P],D=0;D<v.axes.length;D++)b.moveTo(v.position.x,v.position.y),b.lineTo((v.vertices[0].x+v.vertices[v.vertices.length-1].x)/2,(v.vertices[0].y+v.vertices[v.vertices.length-1].y)/2)}S.wireframes?(b.strokeStyle="indianred",b.lineWidth=1):(b.strokeStyle="rgba(255, 255, 255, 0.4)",b.globalCompositeOperation="overlay",b.lineWidth=2),b.stroke(),b.globalCompositeOperation="source-over"},i.bodyPositions=function(x,y,M){var b=M;x.engine;var S=x.options,v,w,P,D;for(b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.render.visible)for(D=0;D<v.parts.length;D++)w=v.parts[D],b.arc(w.position.x,w.position.y,3,0,2*Math.PI,!1),b.closePath();for(S.wireframes?b.fillStyle="indianred":b.fillStyle="rgba(0,0,0,0.5)",b.fill(),b.beginPath(),P=0;P<y.length;P++)v=y[P],v.render.visible&&(b.arc(v.positionPrev.x,v.positionPrev.y,2,0,2*Math.PI,!1),b.closePath());b.fillStyle="rgba(255,165,0,0.8)",b.fill()},i.bodyVelocity=function(x,y,M){var b=M;b.beginPath();for(var S=0;S<y.length;S++){var v=y[S];if(v.render.visible){var w=a.getVelocity(v);b.moveTo(v.position.x,v.position.y),b.lineTo(v.position.x+w.x,v.position.y+w.y)}}b.lineWidth=3,b.strokeStyle="cornflowerblue",b.stroke()},i.bodyIds=function(x,y,M){var b=M,S,v;for(S=0;S<y.length;S++)if(y[S].render.visible){var w=y[S].parts;for(v=w.length>1?1:0;v<w.length;v++){var P=w[v];b.font="12px Arial",b.fillStyle="rgba(255,255,255,0.5)",b.fillText(P.id,P.position.x+10,P.position.y-10)}}},i.collisions=function(x,y,M){var b=M,S=x.options,v,w,P,D;for(b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.isActive)for(w=v.collision,D=0;D<v.contactCount;D++){var U=v.contacts[D],F=U.vertex;b.rect(F.x-1.5,F.y-1.5,3.5,3.5)}for(S.wireframes?b.fillStyle="rgba(255,255,255,0.7)":b.fillStyle="orange",b.fill(),b.beginPath(),P=0;P<y.length;P++)if(v=y[P],!!v.isActive&&(w=v.collision,v.contactCount>0)){var z=v.contacts[0].vertex.x,G=v.contacts[0].vertex.y;v.contactCount===2&&(z=(v.contacts[0].vertex.x+v.contacts[1].vertex.x)/2,G=(v.contacts[0].vertex.y+v.contacts[1].vertex.y)/2),w.bodyB===w.supports[0].body||w.bodyA.isStatic===!0?b.moveTo(z-w.normal.x*8,G-w.normal.y*8):b.moveTo(z+w.normal.x*8,G+w.normal.y*8),b.lineTo(z,G)}S.wireframes?b.strokeStyle="rgba(255,165,0,0.7)":b.strokeStyle="orange",b.lineWidth=1,b.stroke()},i.separations=function(x,y,M){var b=M,S=x.options,v,w,P,D,U;for(b.beginPath(),U=0;U<y.length;U++)if(v=y[U],!!v.isActive){w=v.collision,P=w.bodyA,D=w.bodyB;var F=1;!D.isStatic&&!P.isStatic&&(F=.5),D.isStatic&&(F=0),b.moveTo(D.position.x,D.position.y),b.lineTo(D.position.x-w.penetration.x*F,D.position.y-w.penetration.y*F),F=1,!D.isStatic&&!P.isStatic&&(F=.5),P.isStatic&&(F=0),b.moveTo(P.position.x,P.position.y),b.lineTo(P.position.x+w.penetration.x*F,P.position.y+w.penetration.y*F)}S.wireframes?b.strokeStyle="rgba(255,165,0,0.5)":b.strokeStyle="orange",b.stroke()},i.inspector=function(x,y){x.engine;var M=x.selected,b=x.render,S=b.options,v;if(S.hasBounds){var w=b.bounds.max.x-b.bounds.min.x,P=b.bounds.max.y-b.bounds.min.y,D=w/b.options.width,U=P/b.options.height;y.scale(1/D,1/U),y.translate(-b.bounds.min.x,-b.bounds.min.y)}for(var F=0;F<M.length;F++){var z=M[F].data;switch(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.9)",y.setLineDash([1,2]),z.type){case"body":v=z.bounds,y.beginPath(),y.rect(Math.floor(v.min.x-3),Math.floor(v.min.y-3),Math.floor(v.max.x-v.min.x+6),Math.floor(v.max.y-v.min.y+6)),y.closePath(),y.stroke();break;case"constraint":var G=z.pointA;z.bodyA&&(G=z.pointB),y.beginPath(),y.arc(G.x,G.y,10,0,2*Math.PI),y.closePath(),y.stroke();break}y.setLineDash([]),y.translate(-.5,-.5)}x.selectStart!==null&&(y.translate(.5,.5),y.lineWidth=1,y.strokeStyle="rgba(255,165,0,0.6)",y.fillStyle="rgba(255,165,0,0.1)",v=x.selectBounds,y.beginPath(),y.rect(Math.floor(v.min.x),Math.floor(v.min.y),Math.floor(v.max.x-v.min.x),Math.floor(v.max.y-v.min.y)),y.closePath(),y.stroke(),y.fill(),y.translate(-.5,-.5)),S.hasBounds&&y.setTransform(1,0,0,1,0,0)};var g=function(x,y){var M=x.engine,b=x.timing,S=b.historySize,v=M.timing.timestamp;b.delta=y-b.lastTime||i._goodDelta,b.lastTime=y,b.timestampElapsed=v-b.lastTimestamp||0,b.lastTimestamp=v,b.deltaHistory.unshift(b.delta),b.deltaHistory.length=Math.min(b.deltaHistory.length,S),b.engineDeltaHistory.unshift(M.timing.lastDelta),b.engineDeltaHistory.length=Math.min(b.engineDeltaHistory.length,S),b.timestampElapsedHistory.unshift(b.timestampElapsed),b.timestampElapsedHistory.length=Math.min(b.timestampElapsedHistory.length,S),b.engineUpdatesHistory.unshift(M.timing.lastUpdatesPerFrame),b.engineUpdatesHistory.length=Math.min(b.engineUpdatesHistory.length,S),b.engineElapsedHistory.unshift(M.timing.lastElapsed),b.engineElapsedHistory.length=Math.min(b.engineElapsedHistory.length,S),b.elapsedHistory.unshift(b.lastElapsed),b.elapsedHistory.length=Math.min(b.elapsedHistory.length,S)},p=function(x){for(var y=0,M=0;M<x.length;M+=1)y+=x[M];return y/x.length||0},_=function(x,y){var M=document.createElement("canvas");return M.width=x,M.height=y,M.oncontextmenu=function(){return!1},M.onselectstart=function(){return!1},M},E=function(x){var y=x.getContext("2d"),M=window.devicePixelRatio||1,b=y.webkitBackingStorePixelRatio||y.mozBackingStorePixelRatio||y.msBackingStorePixelRatio||y.oBackingStorePixelRatio||y.backingStorePixelRatio||1;return M/b},T=function(x,y){var M=x.textures[y];return M||(M=x.textures[y]=new Image,M.src=y,M)},A=function(x,y){var M=y;/(jpg|gif|png)$/.test(y)&&(M="url("+y+")"),x.canvas.style.background=M,x.canvas.style.backgroundSize="contain",x.currentBackground=y}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(5),o=s(17),l=s(0);(function(){i._maxFrameDelta=1e3/15,i._frameDeltaFallback=1e3/60,i._timeBufferMargin=1.5,i._elapsedNextEstimate=1,i._smoothingLowerBound=.1,i._smoothingUpperBound=.9,i.create=function(h){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},f=l.extend(d,h);return f.fps=0,f},i.run=function(h,d){return h.timeBuffer=i._frameDeltaFallback,(function f(c){h.frameRequestId=i._onNextFrame(h,f),c&&h.enabled&&i.tick(h,d,c)})(),h},i.tick=function(h,d,f){var c=l.now(),m=h.delta,g=0,p=f-h.timeLastTick;if((!p||!h.timeLastTick||p>Math.max(i._maxFrameDelta,h.maxFrameTime))&&(p=h.frameDelta||i._frameDeltaFallback),h.frameDeltaSmoothing){h.frameDeltaHistory.push(p),h.frameDeltaHistory=h.frameDeltaHistory.slice(-h.frameDeltaHistorySize);var _=h.frameDeltaHistory.slice(0).sort(),E=h.frameDeltaHistory.slice(_.length*i._smoothingLowerBound,_.length*i._smoothingUpperBound),T=u(E);p=T||p}h.frameDeltaSnapping&&(p=1e3/Math.round(1e3/p)),h.frameDelta=p,h.timeLastTick=f,h.timeBuffer+=h.frameDelta,h.timeBuffer=l.clamp(h.timeBuffer,0,h.frameDelta+m*i._timeBufferMargin),h.lastUpdatesDeferred=0;var A=h.maxUpdates||Math.ceil(h.maxFrameTime/m),x={timestamp:d.timing.timestamp};a.trigger(h,"beforeTick",x),a.trigger(h,"tick",x);for(var y=l.now();m>0&&h.timeBuffer>=m*i._timeBufferMargin;){a.trigger(h,"beforeUpdate",x),o.update(d,m),a.trigger(h,"afterUpdate",x),h.timeBuffer-=m,g+=1;var M=l.now()-c,b=l.now()-y,S=M+i._elapsedNextEstimate*b/g;if(g>=A||S>h.maxFrameTime){h.lastUpdatesDeferred=Math.round(Math.max(0,h.timeBuffer/m-i._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=g,a.trigger(h,"afterTick",x),h.frameDeltaHistory.length>=100&&(h.lastUpdatesDeferred&&Math.round(h.frameDelta/m)>A?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):h.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof h.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(h.deltaMin||h.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),h.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},i.stop=function(h){i._cancelNextFrame(h)},i._onNextFrame=function(h,d){if(typeof window<"u"&&window.requestAnimationFrame)h.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return h.frameRequestId},i._cancelNextFrame=function(h){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(h.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(h){for(var d=0,f=h.length,c=0;c<f;c+=1)d+=h[c];return d/f||0}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(8),o=s(0),l=o.deprecated;(function(){i.collides=function(u,h){return a.collides(u,h)},l(i,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(e,n,s){var i={};e.exports=i,s(1);var a=s(0);(function(){i.pathToVertices=function(o,l){typeof window<"u"&&!("SVGPathSeg"in window)&&a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,h,d,f,c,m,g,p,_,E,T=[],A,x,y=0,M=0,b=0;l=l||15;var S=function(w,P,D){var U=D%2===1&&D>1;if(!_||w!=_.x||P!=_.y){_&&U?(A=_.x,x=_.y):(A=0,x=0);var F={x:A+w,y:x+P};(U||!_)&&(_=F),T.push(F),M=A+w,b=x+P}},v=function(w){var P=w.pathSegTypeAsLetter.toUpperCase();if(P!=="Z"){switch(P){case"M":case"L":case"T":case"C":case"S":case"Q":M=w.x,b=w.y;break;case"H":M=w.x;break;case"V":b=w.y;break}S(M,b,w.pathSegType)}};for(i._svgPathToAbsolute(o),d=o.getTotalLength(),m=[],u=0;u<o.pathSegList.numberOfItems;u+=1)m.push(o.pathSegList.getItem(u));for(g=m.concat();y<d;){if(E=o.getPathSegAtLength(y),c=m[E],c!=p){for(;g.length&&g[0]!=c;)v(g.shift());p=c}switch(c.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":f=o.getPointAtLength(y),S(f.x,f.y,0);break}y+=l}for(u=0,h=g.length;u<h;++u)v(g[u]);return T},i._svgPathToAbsolute=function(o){for(var l,u,h,d,f,c,m=o.pathSegList,g=0,p=0,_=m.numberOfItems,E=0;E<_;++E){var T=m.getItem(E),A=T.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in T&&(g=T.x),"y"in T&&(p=T.y);else switch("x1"in T&&(h=g+T.x1),"x2"in T&&(f=g+T.x2),"y1"in T&&(d=p+T.y1),"y2"in T&&(c=p+T.y2),"x"in T&&(g+=T.x),"y"in T&&(p+=T.y),A){case"m":m.replaceItem(o.createSVGPathSegMovetoAbs(g,p),E);break;case"l":m.replaceItem(o.createSVGPathSegLinetoAbs(g,p),E);break;case"h":m.replaceItem(o.createSVGPathSegLinetoHorizontalAbs(g),E);break;case"v":m.replaceItem(o.createSVGPathSegLinetoVerticalAbs(p),E);break;case"c":m.replaceItem(o.createSVGPathSegCurvetoCubicAbs(g,p,h,d,f,c),E);break;case"s":m.replaceItem(o.createSVGPathSegCurvetoCubicSmoothAbs(g,p,f,c),E);break;case"q":m.replaceItem(o.createSVGPathSegCurvetoQuadraticAbs(g,p,h,d),E);break;case"t":m.replaceItem(o.createSVGPathSegCurvetoQuadraticSmoothAbs(g,p),E);break;case"a":m.replaceItem(o.createSVGPathSegArcAbs(g,p,T.r1,T.r2,T.angle,T.largeArcFlag,T.sweepFlag),E);break;case"z":case"Z":g=l,p=u;break}(A=="M"||A=="m")&&(l=g,u=p)}}})()}),(function(e,n,s){var i={};e.exports=i;var a=s(6);s(0),(function(){i.create=a.create,i.add=a.add,i.remove=a.remove,i.clear=a.clear,i.addComposite=a.addComposite,i.addBody=a.addBody,i.addConstraint=a.addConstraint})()})])})})(Ns)),Ns.exports}var Qp=Jp();const Je=Kp(Qp);class tm{constructor(){this.engine=Je.Engine.create({gravity:{x:0,y:-.55}}),this.world=this.engine.world,this.listeners=new Map,Je.Events.on(this.engine,"collisionStart",t=>{for(const e of t.pairs)this._emit("collisionStart",e)})}addBody(t){Je.Composite.add(this.world,t)}removeBody(t){Je.Composite.remove(this.world,t)}update(t){let s=Math.min(t*1e3,50);for(;s>0;){const i=Math.min(s,16);Je.Engine.update(this.engine,i),s-=i}}on(t,e){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e)}off(t,e){const n=this.listeners.get(t);if(n){const s=n.indexOf(e);s>=0&&n.splice(s,1)}}_emit(t,e){const n=this.listeners.get(t);n&&n.forEach(s=>s(e))}createCircle(t,e,n,s={}){return Je.Bodies.circle(t,e,n,s)}createRect(t,e,n,s,i={}){return Je.Bodies.rectangle(t,e,n,s,i)}setStatic(t,e){Je.Body.setStatic(t,e)}setVelocity(t,e){Je.Body.setVelocity(t,e)}setPosition(t,e){Je.Body.setPosition(t,e)}applyForce(t,e){Je.Body.applyForce(t,t.position,e)}}class em{constructor(t){this.cam=t,this.targetX=0,this.currentX=0,this.targetY=0,this.currentY=0,this._initialized=!1,this.zoom=Jt.IDLE_ZOOM,this.targetZoom=Jt.IDLE_ZOOM,this.shakeX=0,this.shakeY=0,this.shakeIntensity=0,this._transitionActive=!1,this._transFrom={x:0,y:0,zoom:1},this._transTo={x:0,y:0,zoom:1},this._transDuration=0,this._transElapsed=0,this._transCallback=null}followX(t){this.targetX=t,this._initialized||(this.currentX=t)}followY(t){this.targetY=-t,this._initialized||(this.currentY=-t,this._initialized=!0)}snapTo(t,e){this.targetX=t,this.currentX=t,this.targetY=-e,this.currentY=-e}setTargetZoom(t){this.targetZoom=t}shake(t){this.shakeIntensity=Math.max(this.shakeIntensity,t)}transitionTo(t,e,n,s,i){this._transitionActive=!0,this._transFrom={x:this.currentX,y:this.currentY,zoom:this.zoom},this._transTo={x:t,y:-e,zoom:n},this._transDuration=s,this._transElapsed=0,this._transCallback=i||null}update(t){if(this._transitionActive){this._transElapsed+=t;let s=Math.min(this._transElapsed/this._transDuration,1);s=this._easeInOut(s),this.currentX=this._transFrom.x+(this._transTo.x-this._transFrom.x)*s,this.currentY=this._transFrom.y+(this._transTo.y-this._transFrom.y)*s,this.zoom=this._transFrom.zoom+(this._transTo.zoom-this._transFrom.zoom)*s,this._transElapsed>=this._transDuration&&(this._transitionActive=!1,this._transCallback&&this._transCallback())}else this.currentX+=(this.targetX-this.currentX)*Jt.FOLLOW_LERP_X,this.currentY+=(this.targetY-this.currentY)*Jt.FOLLOW_LERP,this.zoom+=(this.targetZoom-this.zoom)*Jt.ZOOM_LERP;this.shakeIntensity>.1?(this.shakeX=(Math.random()-.5)*2*this.shakeIntensity,this.shakeY=(Math.random()-.5)*2*this.shakeIntensity,this.shakeIntensity*=Jt.SHAKE_DECAY):(this.shakeX=0,this.shakeY=0,this.shakeIntensity=0);const e=De.HEIGHT/2/this.zoom,n=e*_a.ASPECT;this.cam.left=-n,this.cam.right=n,this.cam.top=e,this.cam.bottom=-e,this.cam.position.x=this.currentX+this.shakeX,this.cam.position.y=this.currentY+this.shakeY,this.cam.updateProjectionMatrix()}isTransitioning(){return this._transitionActive}_easeInOut(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}}class nm{constructor(t){this._callbacks=[],this._element=t,this._onPointerDown=e=>{e.preventDefault(),this._callbacks.forEach(n=>n(e))},this._onKeyDown=e=>{(e.code==="Space"||e.code==="Enter")&&(e.preventDefault(),this._callbacks.forEach(n=>n(e)))},t.addEventListener("pointerdown",this._onPointerDown,{passive:!1}),t.addEventListener("touchstart",e=>e.preventDefault(),{passive:!1}),window.addEventListener("keydown",this._onKeyDown)}onTap(t){this._callbacks.push(t)}offTap(t){const e=this._callbacks.indexOf(t);e>=0&&this._callbacks.splice(e,1)}destroy(){this._element.removeEventListener("pointerdown",this._onPointerDown),this._callbacks=[]}}const ae={fastMode:!1,sfxEnabled:!0,musicEnabled:!0,_userSet:{},_listeners:[],onChange(r){this._listeners.push(r)},_notify(){for(const r of this._listeners)r(this)},set(r,t){this[r]=t,this._notify()},toggle(r){this[r]=!this[r],this._userSet[r]=!0,this._notify()},wasUserSet(r){return!!this._userSet[r]}};class im{constructor(){this.ctx=null,this._initialized=!1,this._rawSounds={},this._decodedSounds={}}_init(){this._initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this._initialized=!0)}async loadSound(t,e){const n=await fetch(e);this._rawSounds[t]=await n.arrayBuffer()}async _getBuffer(t){if(this._decodedSounds[t])return this._decodedSounds[t];const e=this._rawSounds[t];return e?(this._decodedSounds[t]=await this.ctx.decodeAudioData(e),delete this._rawSounds[t],this._decodedSounds[t]):null}async _playSound(t,e=ee.MASTER_VOLUME){if(!ae.sfxEnabled)return;this._init();const n=await this._getBuffer(t);if(!n)return;const s=this.ctx.createBufferSource(),i=this.ctx.createGain();s.buffer=n,i.gain.value=e,s.connect(i),i.connect(this.ctx.destination),s.start()}_play(t,e,n="sine",s=ee.MASTER_VOLUME,i=0){if(!ae.sfxEnabled)return;this._init();const a=this.ctx,o=a.createOscillator(),l=a.createGain();o.type=n,o.frequency.value=t,i&&(o.detune.value=i),l.gain.setValueAtTime(s,a.currentTime),l.gain.exponentialRampToValueAtTime(.001,a.currentTime+e),o.connect(l),l.connect(a.destination),o.start(a.currentTime),o.stop(a.currentTime+e)}_noise(t,e=ee.MASTER_VOLUME*.5){if(!ae.sfxEnabled)return;this._init();const n=this.ctx,s=n.sampleRate*t,i=n.createBuffer(1,s,n.sampleRate),a=i.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*.5;const o=n.createBufferSource();o.buffer=i;const l=n.createGain();l.gain.setValueAtTime(e,n.currentTime),l.gain.exponentialRampToValueAtTime(.001,n.currentTime+t);const u=n.createBiquadFilter();u.type="highpass",u.frequency.value=2e3,o.connect(u),u.connect(l),l.connect(n.destination),o.start()}pegHit(t,e=1,n=1){const s=ee.PEG_BASE_FREQ+ee.PEG_FREQ_RANGE*(1-t),i=Math.min(e,8)*30;this._play(s+i,.08,"sine",ee.MASTER_VOLUME*.6*n),this._play((s+i)*1.5,.05,"sine",ee.MASTER_VOLUME*.2*n)}chickenCluck(t=1){this._playSound("chickenCluck",ee.MASTER_VOLUME*.8*t)}chickenSqueeze(t=1){const e=Math.floor(Math.random()*3)+1;this._playSound(`chickenSqueeze${e}`,ee.MASTER_VOLUME*t)}eggPop(t=1){if(!ae.sfxEnabled)return;this._init();const e=this.ctx,n=e.currentTime,s=e.createOscillator(),i=e.createGain();s.type="sine",s.frequency.setValueAtTime(350,n),s.frequency.exponentialRampToValueAtTime(80,n+.12),i.gain.setValueAtTime(ee.MASTER_VOLUME*.7*t,n),i.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(i),i.connect(e.destination),s.start(n),s.stop(n+.15);const a=e.createOscillator(),o=e.createGain();a.type="square",a.frequency.setValueAtTime(800,n),a.frequency.exponentialRampToValueAtTime(200,n+.06),o.gain.setValueAtTime(ee.MASTER_VOLUME*.3*t,n),o.gain.exponentialRampToValueAtTime(.001,n+.08),a.connect(o),o.connect(e.destination),a.start(n),a.stop(n+.08),this._noise(.08,ee.MASTER_VOLUME*.4*t)}eggLand(t=1){this._play(120,.2,"sine",ee.MASTER_VOLUME*.5*t),this._noise(.1,ee.MASTER_VOLUME*.2*t)}hatch(){this._noise(.15,ee.MASTER_VOLUME*.6),setTimeout(()=>{this._play(600,.3,"sine",ee.MASTER_VOLUME*.4),this._play(900,.25,"sine",ee.MASTER_VOLUME*.3),this._play(1200,.2,"sine",ee.MASTER_VOLUME*.2)},100)}coinCollect(t,e){const n=ee.COIN_BASE_FREQ+t/e*600;this._play(n,.06,"square",ee.MASTER_VOLUME*.15)}drumrollHit(t){const e=ee.MASTER_VOLUME*(.15+t*.25);this._play(100+t*40,.04,"triangle",e),this._noise(.025,e*.4)}purchasePowerup(){if(!ae.sfxEnabled)return;this._init();const t=ee.MASTER_VOLUME*.7;[523,659,784].forEach((n,s)=>{setTimeout(()=>{this._play(n,.2-s*.04,"sine",t*(1-s*.12))},s*70)}),setTimeout(()=>this._noise(.06,ee.MASTER_VOLUME*.25),60)}duplicateSpawn(){this._play(1e3+Math.random()*200,.04,"sine",ee.MASTER_VOLUME*.18),this._noise(.02,ee.MASTER_VOLUME*.06)}whoosh(){if(!ae.sfxEnabled)return;this._init();const t=this.ctx,e=t.createOscillator(),n=t.createGain();e.type="sine",e.frequency.setValueAtTime(200,t.currentTime),e.frequency.exponentialRampToValueAtTime(80,t.currentTime+.4),n.gain.setValueAtTime(ee.MASTER_VOLUME*.2,t.currentTime),n.gain.exponentialRampToValueAtTime(.001,t.currentTime+.4),e.connect(n),n.connect(t.destination),e.start(),e.stop(t.currentTime+.4),this._noise(.2,ee.MASTER_VOLUME*.15)}}const sm={chickenFly1:"sprites/T_Char_Chicken_Flying1.png",chickenFly2:"sprites/T_Char_Chicken_Flying2.png",chickenLay0:"sprites/T_Bird_LayingEgg_00.png",chickenLay1:"sprites/T_Bird_LayingEgg_01.png",egg:"sprites/T_Egg_Static_01.png",cloudLarge:"sprites/T_Env_Cloud_Large.png",cloudMedium:"sprites/T_Env_Cloud_Medium.png",cloudSmall:"sprites/T_Env_Cloud_Small.png",mountainsNear:"sprites/T_Env_Mountains_Near.png",mountainsFar:"sprites/T_Env_Mountains_Far.png",grass01:"sprites/T_Env_Grass_01.png",bush01:"sprites/T_Env_Bush_01.png",hut01:"sprites/T_Env_Hut_01.png"},Rs={},rm={async loadAll(){const r=new lh,t=Object.entries(sm);return await Promise.all(t.map(([e,n])=>new Promise((s,i)=>{r.load(n,a=>{a.minFilter=Ge,a.magFilter=Ge,a.colorSpace=He,Rs[e]=a,s()},void 0,i)}))),Rs},get(r){return Rs[r]},textures:Rs};class Go{constructor(t,e,n){this.x=t,this.y=e,this.baseScale=1,this._hitTimer=0,this.specialType=null,this._phase=0,this.body=n.createCircle(t,-e,$t.PEG_RADIUS,{isStatic:!0,restitution:.7,friction:.05,label:"peg"}),this.body.pegRef=this,n.addBody(this.body);const s=new wa($t.PEG_RADIUS,16),i=new we({color:Le.PEG_DEFAULT});this.mesh=new ie(s,i),this.mesh.position.set(t,-e,0)}setSpecial(t){if(this.specialType=t,t){const e=sn[t];this.mesh.material.color.setHex(e.color),this.baseScale=e.scale}else this.mesh.material.color.setHex(Le.PEG_DEFAULT),this.baseScale=1;this.mesh.scale.set(this.baseScale,this.baseScale,1)}hit(){this._hitTimer=1;const t=this.specialType?sn[this.specialType]:null;this.mesh.material.color.setHex(t?t.hitColor:Le.PEG_HIT)}nudge(t){this._hitTimer<t&&(this._hitTimer=t)}update(t){if(this._hitTimer<=0&&(this.specialType==="rainbow"?(this._phase+=t*2,this.mesh.material.color.setHSL(this._phase%1,1,.6)):this.specialType==="diamond"&&(this._phase+=t*3,this.mesh.material.color.setHSL(.52,.9,.65+.15*Math.sin(this._phase)))),this._hitTimer>0){this._hitTimer-=t*6;const e=this.baseScale+.4*Math.max(this._hitTimer,0);if(this.mesh.scale.set(e,e,1),this._hitTimer<=0){this._hitTimer=0,this.mesh.scale.set(this.baseScale,this.baseScale,1);const n=this.specialType;n==="golden"?this.mesh.material.color.setHex(sn.golden.color):n||this.mesh.material.color.setHex(Le.PEG_DEFAULT)}}}}class am{constructor(t,e,n,s,i){this.index=t,this.multiplier=Te.MULTIPLIERS[t],this.x=e,this.y=n,this.width=s,this._glowTimer=0,this._time=0,this._squashTimer=0,this._labelPopTimer=0;const a=Te.TIERS[this.multiplier];this._tier=a,this._baseLabelScale=a.labelScale,this.sensor=i.createRect(e,-n,s-4,Te.HEIGHT,{isStatic:!0,isSensor:!0,label:`bin_${t}`}),this.sensor.binRef=this,i.addBody(this.sensor);const o=new Kn;if(o.position.set(e,-n,0),a.glowIntensity>0){const S=new me(s+6,Te.HEIGHT+6),v=new we({color:a.glowColor,transparent:!0,opacity:a.glowIntensity,blending:wr,depthWrite:!1});this.rimMesh=new ie(S,v),this.rimMesh.position.z=-.5,o.add(this.rimMesh),this._rimBaseOpacity=a.glowIntensity}const l=document.createElement("canvas");l.width=64,l.height=64;const u=l.getContext("2d"),h=new Gt(Te.COLORS[t]),d=this._lighten(h,.3),f=this._darken(h,.35),c=u.createLinearGradient(0,0,0,64);c.addColorStop(0,d),c.addColorStop(1,f),u.fillStyle=c,u.fillRect(0,0,64,64);const m=new qi(l),g=new me(s-2,Te.HEIGHT),p=new we({map:m,transparent:!0,opacity:.7});this.bgMesh=new ie(g,p),o.add(this.bgMesh);const _=`x${this.multiplier}`,E=document.createElement("canvas");E.width=128,E.height=64;const T=E.getContext("2d"),A=this.multiplier===10?32:26;T.font=`bold ${A}px "Arial Black", sans-serif`,T.textAlign="center",T.textBaseline="middle",T.strokeStyle="#000",T.lineWidth=a.labelStroke,T.lineJoin="round",T.strokeText(_,64,32),T.fillStyle=a.labelColor,T.fillText(_,64,32);const x=new qi(E),y=32*a.labelScale,M=new me(y*2,y),b=new we({map:x,transparent:!0,depthWrite:!1});this.labelMesh=new ie(M,b),this.labelMesh.position.z=1,o.add(this.labelMesh),this.mesh=o}_lighten(t,e){const n=Math.min(1,t.r+(1-t.r)*e),s=Math.min(1,t.g+(1-t.g)*e),i=Math.min(1,t.b+(1-t.b)*e);return`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(i*255)})`}_darken(t,e){const n=t.r*(1-e),s=t.g*(1-e),i=t.b*(1-e);return`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(i*255)})`}glow(){this._glowTimer=1}squash(){this._squashTimer=1}popLabel(){this._labelPopTimer=1}update(t){if(this._time+=t,this._glowTimer>0&&(this._glowTimer-=t*2,this._glowTimer<=0&&(this._glowTimer=0),this.bgMesh.material.opacity=.7+.3*this._glowTimer,this.rimMesh&&(this.rimMesh.material.opacity=this._rimBaseOpacity+(1-this._rimBaseOpacity)*this._glowTimer)),this.rimMesh&&this._glowTimer<=0){const e=this.multiplier===10?2.5:1.5,n=this.multiplier===10?.25:.1,s=Math.sin(this._time*e)*n;this.rimMesh.material.opacity=this._rimBaseOpacity+s}if(this.multiplier===10&&this._labelPopTimer<=0){const e=1+Math.sin(this._time*1.2+.5)*.06;this.labelMesh.scale.set(e,e,1)}if(this._squashTimer>0){this._squashTimer-=t*4,this._squashTimer<=0&&(this._squashTimer=0);const e=this._squashTimer,n=1+.15*e,s=1-.15*e;this.mesh.scale.set(n,s,1)}else this.mesh.scale.set(1,1,1);if(this._labelPopTimer>0){this._labelPopTimer-=t*3,this._labelPopTimer<=0&&(this._labelPopTimer=0);const e=1+.8*this._labelPopTimer;this.labelMesh.scale.set(e,e,1)}}}class om{constructor(t,e){this.pegs=[],this.bins=[],this.scene=t,this.physics=e,this._createPegs(),this._createWalls(),this._createBins(),this._createBinDividers()}_createPegs(){const t=De.WIDTH-$t.WALL_THICKNESS*2-$t.PEG_RADIUS*4,e=t/($t.PEG_COLS-1),n=-t/2;this._pegSpacingX=e;for(let s=0;s<$t.PEG_ROWS;s++){const i=s%2===1,a=i?$t.PEG_COLS-1:$t.PEG_COLS,o=i?e/2:0;for(let l=0;l<a;l++){const u=n+l*e+o,h=$t.TOP_OFFSET+s*$t.PEG_SPACING_Y,d=new Go(u,h,this.physics);this.pegs.push(d),this.scene.add(d.mesh)}if(i){const l=$t.TOP_OFFSET+s*$t.PEG_SPACING_Y;for(const u of[n,-n]){const h=new Go(u,l,this.physics);this.pegs.push(h),this.scene.add(h.mesh)}}}}_createWalls(){const t=$t.TOP_OFFSET+$t.PEG_ROWS*$t.PEG_SPACING_Y+Te.HEIGHT+100,e=De.WIDTH/2,n={isStatic:!0,friction:.02,restitution:.8,label:"wall"},s=this.physics.createRect(-e+$t.WALL_THICKNESS/2,-t/2,$t.WALL_THICKNESS,t*2,n),i=this.physics.createRect(e-$t.WALL_THICKNESS/2,-t/2,$t.WALL_THICKNESS,t*2,n);this.physics.addBody(s),this.physics.addBody(i);const a=new we({color:Le.WALL,transparent:!0,opacity:.3}),o=new ie(new me($t.WALL_THICKNESS,t*2),a);o.position.set(-e+$t.WALL_THICKNESS/2,-t/2,0),this.scene.add(o);const l=new ie(new me($t.WALL_THICKNESS,t*2),a.clone());l.position.set(e-$t.WALL_THICKNESS/2,-t/2,0),this.scene.add(l)}_createBins(){const t=$t.TOP_OFFSET+$t.PEG_ROWS*$t.PEG_SPACING_Y+30,e=De.WIDTH/2-$t.WALL_THICKNESS,n=e*2,s=n/Te.COUNT,i=-e+s/2;for(let a=0;a<Te.COUNT;a++){const o=i+a*s,l=new am(a,o,t,s,this.physics);this.bins.push(l),this.scene.add(l.mesh)}this.boardBottom=t,this._binWidth=s,this._binStartX=-e,this._binTotalWidth=n}_createBinDividers(){const t=this.boardBottom,e=this._binWidth,n=this._binStartX,s=4,i=new we({color:Le.BIN_BORDER});for(let l=0;l<=Te.COUNT;l++){const u=n+l*e,h=this.physics.createRect(u,-t,s,Te.HEIGHT+10,{isStatic:!0,label:"divider",restitution:.7,friction:.05});this.physics.addBody(h);const d=new ie(new me(s,Te.HEIGHT+10),i);d.position.set(u,-t,1),this.scene.add(d)}const a=t+Te.HEIGHT/2+5,o=this.physics.createRect(0,-a,De.WIDTH,10,{isStatic:!0,label:"floor"});this.physics.addBody(o)}rippleFrom(t){const e=(this._pegSpacingX||$t.PEG_SPACING_X)*1.8;for(const n of this.pegs){if(n===t)continue;const s=n.x-t.x,i=n.y-t.y,a=Math.sqrt(s*s+i*i);if(a<e){const o=1-a/e;n.nudge(o*.3)}}}update(t,e){for(const n of this.pegs)n.update(t);for(const n of this.bins)n.update(t),e&&n.multiplier===10&&(this._sparkleTimer=(this._sparkleTimer||0)+t,this._sparkleTimer>.15&&(this._sparkleTimer=0,e.emit(n.x,-n.y+10,1,{color:16766720,speed:15,life:.6,size:2.5,spread:Math.PI*.4,angle:-Math.PI/2,gravity:-10,drag:.96})))}cycleSpecialPegs(t){this.clearSpecialPegs();const e=[...this.pegs];for(let s=e.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[e[s],e[i]]=[e[i],e[s]]}let n=0;for(const s of["rainbow","diamond","golden"]){const i=t[s]||0,a=Math.min(i,e.length-n);for(let o=0;o<a;o++)e[n++].setSpecial(s)}}clearSpecialPegs(){for(const t of this.pegs)t.specialType&&t.setSpecial(null)}getBoardBottom(){return this.boardBottom}getNormalizedY(t){return Math.max(0,Math.min(1,(t-$t.TOP_OFFSET)/($t.PEG_ROWS*$t.PEG_SPACING_Y)))}}class lm{constructor(){this.totalGold=0,this.currentRunGold=0,this.pegHits=0,this.combo=0,this._lastHitTime=0}onPegHit(t){this.pegHits++,t-this._lastHitTime<In.COMBO_WINDOW_MS?this.combo=Math.min(this.combo+1,In.COMBO_MAX):this.combo=1,this._lastHitTime=t;const e=In.BASE_GOLD*this.combo;return this.currentRunGold+=e,this.totalGold+=e,{gold:e,combo:this.combo}}calculateLandingBonus(t){return Math.ceil(this.currentRunGold*t)}canAfford(t){return this.totalGold>=t}spendGold(t){return this.canAfford(t)?(this.totalGold-=t,!0):!1}collectGold(t){this.totalGold+=t}resetRun(){this.currentRunGold=0,this.pegHits=0,this.combo=0,this._lastHitTime=0}}class cm{constructor(t,e,n,s,i,a,o,l=0,u=.98){this.x=t,this.y=e,this.vx=n,this.vy=s,this.size=i,this.color=a,this.life=o,this.maxLife=o,this.gravity=l,this.drag=u,this.alive=!0}}class hm{constructor(t){this.scene=t,this.particles=[],this._maxParticles=500;const e=new ke,n=new Float32Array(this._maxParticles*3),s=new Float32Array(this._maxParticles*3),i=new Float32Array(this._maxParticles);for(let l=0;l<this._maxParticles;l++)n[l*3+2]=-9999;e.setAttribute("position",new Ne(n,3)),e.setAttribute("color",new Ne(s,3)),e.setAttribute("size",new Ne(i,1));const a=new Ml({size:4,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!1,depthWrite:!1});this.points=new nh(e,a),this.points.frustumCulled=!1,this.points.renderOrder=100,this.points.visible=!1,t.add(this.points),this._floatingTexts=[],this._coinImg=null,this._coinImgReady=!1;const o=new Image;o.onload=()=>{this._coinImg=o,this._coinImgReady=!0},o.src="sprites/icons/Coin.svg"}emit(t,e,n,s={}){const{color:i=Le.SPARK,speed:a=80,life:o=.5,size:l=3,spread:u=Math.PI*2,angle:h=-Math.PI/2,gravity:d=200,drag:f=.97}=s,c=new Gt(i);for(let m=0;m<n&&!(this.particles.length>=this._maxParticles);m++){const g=h+(Math.random()-.5)*u,p=a*(.5+Math.random()*.5);this.particles.push(new cm(t,e,Math.cos(g)*p,Math.sin(g)*p,l*(.5+Math.random()*.5),c,o*(.7+Math.random()*.3),d,f))}}emitTrail(t,e,n){const s=Math.min(Math.ceil(n/3),3);this.emit(t,e,s,{color:16770229,speed:10,life:.2+n*.01,size:2,spread:Math.PI,angle:Math.PI/2,gravity:0,drag:.95})}emitPegSpark(t,e){this.emit(t,e,5,{color:Le.SPARK,speed:60,life:.25,size:2.5,spread:Math.PI*2,angle:0,gravity:100,drag:.96})}emitHatchExplosion(t,e){this.emit(t,e,15,{color:Le.SHELL_PARTICLE,speed:150,life:.8,size:5,spread:Math.PI*2,angle:0,gravity:300,drag:.97}),this.emit(t,e,20,{color:Le.GOLD_PARTICLE,speed:120,life:.6,size:4,spread:Math.PI,angle:-Math.PI/2,gravity:100,drag:.96}),this.emit(t,e,10,{color:Le.SPARK,speed:200,life:.4,size:2,spread:Math.PI*2,angle:0,gravity:50,drag:.95})}emitEggPop(t,e){this.emit(t,e,12,{color:Le.SPARK,speed:100,life:.4,size:3.5,spread:Math.PI*2,angle:0,gravity:60,drag:.96}),this.emit(t,e,8,{color:Le.GOLD_PARTICLE,speed:70,life:.35,size:3,spread:Math.PI*2,angle:0,gravity:80,drag:.95}),this.emit(t,e-10,5,{color:Le.SHELL_PARTICLE,speed:40,life:.5,size:4,spread:Math.PI*.6,angle:Math.PI/2,gravity:200,drag:.97})}emitBinLand(t,e,n,s){const i={1:1,3:1.8,5:2.8,10:4.5}[s]||1,a=Math.round(15*i);this.emit(t,e,a,{color:n,speed:80+s*12,life:.6+s*.05,size:5+i*2,spread:s>=10?Math.PI*2:Math.PI*1.4,angle:-Math.PI/2,gravity:120,drag:.96}),s>=5&&this.emit(t,e,Math.round(8*i),{color:16766720,speed:40+s*6,life:.8+s*.04,size:4+i,spread:Math.PI*2,angle:0,gravity:30,drag:.94}),s>=10&&this.emit(t,e,25,{color:16766720,speed:160,life:.7,size:5,spread:Math.PI*2,angle:0,gravity:60,drag:.95})}emitDust(t,e){this.emit(t,e,8,{color:Le.DUST,speed:30,life:.6,size:3,spread:Math.PI,angle:-Math.PI/2,gravity:-20,drag:.93})}spawnFloatingGold(t,e,n,s,i){const a=document.createElement("canvas"),o=2;a.width=256*o,a.height=96*o;const l=a.getContext("2d");l.scale(o,o);const u=s*.85,h=`${n}`;l.font=`bold ${s}px "Arial Black", sans-serif`;const d=l.measureText(h).width,c=128-(u+4+d)/2;this._coinImgReady?l.drawImage(this._coinImg,c,48-u/2,u,u):(l.fillStyle="#FFD700",l.beginPath(),l.arc(c+u/2,48,u/2,0,Math.PI*2),l.fill());const m=c+u+4;l.textAlign="left",l.textBaseline="middle",l.strokeStyle="#000",l.lineWidth=4,l.lineJoin="round",l.strokeText(h,m,48),l.fillStyle=i||"#fff",l.fillText(h,m,48);const g=new qi(a),p=new me(128,48),_=new we({map:g,transparent:!0,depthWrite:!1}),E=new ie(p,_);E.position.set(t,e,10),E.renderOrder=200,this.scene.add(E),this._floatingTexts.push({mesh:E,vy:50,life:.9,maxLife:.9,scale:1.5,targetScale:1})}spawnFloatingText(t,e,n,s,i){const a=document.createElement("canvas"),o=2;a.width=256*o,a.height=96*o;const l=a.getContext("2d");l.scale(o,o),l.font=`bold ${s}px "Arial Black", sans-serif`,l.textAlign="center",l.textBaseline="middle",l.strokeStyle="#000",l.lineWidth=4,l.lineJoin="round",l.strokeText(n,128,48),l.fillStyle=i||"#fff",l.fillText(n,128,48);const u=new qi(a),h=new me(128,48),d=new we({map:u,transparent:!0,depthWrite:!1}),f=new ie(h,d);f.position.set(t,e,10),f.renderOrder=200,this.scene.add(f),this._floatingTexts.push({mesh:f,vy:50,life:.9,maxLife:.9,scale:1.5,targetScale:1})}update(t){const e=this.points.geometry.attributes.position.array,n=this.points.geometry.attributes.color.array,s=this.points.geometry.attributes.size.array;for(let i=this.particles.length-1;i>=0;i--){const a=this.particles[i];if(a.life-=t,a.life<=0){this.particles.splice(i,1);continue}a.vy-=a.gravity*t,a.vx*=a.drag,a.vy*=a.drag,a.x+=a.vx*t,a.y+=a.vy*t}for(let i=0;i<this._maxParticles;i++)if(i<this.particles.length){const a=this.particles[i],o=a.life/a.maxLife;e[i*3]=a.x,e[i*3+1]=a.y,e[i*3+2]=5,n[i*3]=a.color.r*o,n[i*3+1]=a.color.g*o,n[i*3+2]=a.color.b*o,s[i]=a.size*o}else e[i*3]=-9999,e[i*3+1]=-9999,e[i*3+2]=-9999,s[i]=0;this.points.visible=this.particles.length>0,this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0,this.points.geometry.attributes.size.needsUpdate=!0;for(let i=this._floatingTexts.length-1;i>=0;i--){const a=this._floatingTexts[i];a.life-=t,a.mesh.position.y+=a.vy*t,a.mesh.material.opacity=Math.max(0,a.life/a.maxLife),a.scale!==void 0&&(a.scale+=(a.targetScale-a.scale)*Math.min(t*12,1),a.mesh.scale.set(a.scale,a.scale,1)),a.life<=0&&(this.scene.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.map.dispose(),a.mesh.material.dispose(),this._floatingTexts.splice(i,1))}}}class Ar{constructor(t,e,n,s,i=!1,a=null){this.physics=n,this.isDuplicate=i,this.goldMultiplier=(a==null?void 0:a.goldMultiplier)||1,this.typeId=(a==null?void 0:a.typeId)||null,this.pegHits=0,this.combo=0,this.lastHitTime=0,this.runGold=0,this.alive=!0,this.landed=!1,this.landedBin=null;const o=i?Si.RADIUS*jn.DUPLICATE_RADIUS_SCALE:Si.RADIUS,l=i?jn.DUPLICATE_RESTITUTION:Si.RESTITUTION,u=Math.min(l+((a==null?void 0:a.restitutionBonus)||0),1);this.body=n.createCircle(t,-e,o,{restitution:u,friction:Si.FRICTION,density:Si.DENSITY,label:i?"egg_duplicate":"egg",collisionFilter:{group:-1}}),this.body.eggRef=this,n.addBody(this.body);const h=o*2.4,d=new me(h,h),f=new we({map:s,transparent:!0,opacity:i?jn.DUPLICATE_OPACITY:1});i?f.color.set(16770688):a!=null&&a.tint&&f.color.set(a.tint),this.mesh=new ie(d,f),this.mesh.position.set(t,-e,i?1.5:2),this._crackLines=[],this._squashX=1,this._squashY=1}getX(){return this.body.position.x}getY(){return-this.body.position.y}getVelX(){return this.body.velocity.x}getVelY(){return this.body.velocity.y}getSpeed(){const t=this.body.velocity.x,e=this.body.velocity.y;return Math.sqrt(t*t+e*e)}hitPeg(t){return this.pegHits++,t-this.lastHitTime<In.COMBO_WINDOW_MS?this.combo=Math.min(this.combo+1,In.COMBO_MAX):this.combo=1,this.lastHitTime=t,this.combo}setSquash(t,e){this._squashX=t,this._squashY=e}showCracks(){if(this._crackLines.length>0)return;const t=new yl({color:9139029});for(let e=0;e<3;e++){const n=[],s=(Math.random()-.5)*Math.PI,i=Si.RADIUS*.6;if(n.push(new k(0,0,0)),n.push(new k(Math.cos(s)*i,Math.sin(s)*i,0)),Math.random()>.4){const l=s+(Math.random()-.5)*1.2;n.push(new k(Math.cos(s)*i*.6+Math.cos(l)*i*.4,Math.sin(s)*i*.6+Math.sin(l)*i*.4,0))}const a=new ke().setFromPoints(n),o=new eh(a,t);o.position.z=3,this.mesh.add(o),this._crackLines.push(o)}}update(){this.alive&&(this.mesh.position.x=this.body.position.x,this.mesh.position.y=this.body.position.y,this.mesh.scale.set(this._squashX,this._squashY,1),this.mesh.rotation.z=this.body.angle)}destroy(t){this.alive=!1,this.physics.removeBody(this.body),t.remove(this.mesh)}}const br=.18;class um{constructor(t,e,n=1){this.typeConfig=e,this._level=n,this._time=Math.random()*100;const s=["normal","rainbow","cosmic"].indexOf(e.id);this._dir=s%2===0?1:-1,this._flipTimer=Math.random()*br,this._frameIndex=0,this._layInterval=this._calcInterval(n),this._laying=!1,this._layTimer=this._layInterval,this._warmingUp=!1,this._warmupTimer=0,this._layAnimTimer=0,this._lastDisplayedSecond=Math.ceil(this._layTimer),this._flyFrames=[t.chickenFly1,t.chickenFly2],this._layFrames=[t.chickenLay0,t.chickenLay1],this._frames=this._flyFrames,this.group=new Kn;const i=(s*97+43)%(De.WIDTH-80)-(De.WIDTH/2-40);this.group.position.set(i,-140,pe.Z_POS),this.group.scale.set(pe.SCALE*(this._dir===1?-1:1),pe.SCALE,1);const a=xe.BODY_RADIUS*2.8,o=new me(a,a),l=new we({map:this._frames[0],transparent:!0});e.tint&&l.color.set(e.tint),this.sprite=new ie(o,l),this.group.add(this.sprite),this._minX=-390/2+40,this._maxX=De.WIDTH/2-40,this._timerCanvas=document.createElement("canvas"),this._timerCanvas.width=64,this._timerCanvas.height=32,this._timerCtx=this._timerCanvas.getContext("2d"),this._timerTexture=new qi(this._timerCanvas),this._timerTexture.minFilter=Ge;const u=new vl({map:this._timerTexture,transparent:!0,depthTest:!1});this._timerSprite=new Jc(u),this._timerScaleBase=28/pe.SCALE;const h=this.group.scale.x>0?1:-1;this._timerSprite.scale.set(this._timerScaleBase*h,this._timerScaleBase*.5,1),this._timerSprite.position.y=a*.55,this._timerSprite.position.z=1,this.group.add(this._timerSprite),this._drawTimerText(Math.ceil(this._layTimer))}_calcInterval(t){return this.typeConfig.baseInterval*Math.pow(1-pe.INTERVAL_REDUCTION,t-1)}setLevel(t){this._level=t,this._layInterval=this._calcInterval(t),!this._warmingUp&&!this._laying&&(this._layTimer=Math.min(this._layTimer,this._layInterval))}_drawTimerText(t){const e=this._timerCtx;e.clearRect(0,0,64,32),e.font='bold 22px "Segoe UI", system-ui, sans-serif',e.textAlign="center",e.textBaseline="middle",e.strokeStyle="rgba(0,0,0,0.7)",e.lineWidth=3,e.strokeText(`${t}s`,32,17),e.fillStyle=this.typeConfig.timerColor,e.fillText(`${t}s`,32,17),this._timerTexture.needsUpdate=!0}triggerImmediateLay(){this._warmingUp=!0,this._warmupTimer=0,this._frames=this._layFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this._timerSprite.visible=!1}getX(){return this.group.position.x}getDropX(){return this.group.position.x}getDropY(){return-this.group.position.y+xe.BODY_RADIUS*pe.SCALE+3}update(t){this._time+=t;let e=!1;if(this._flipTimer+=t,this._flipTimer>=br&&(this._flipTimer-=br,this._frameIndex=(this._frameIndex+1)%this._frames.length,this.sprite.material.map=this._frames[this._frameIndex]),this._warmingUp){this._warmupTimer+=t;const s=Math.min(this._warmupTimer/pe.WARMUP_DURATION,1),i=s*s,a=1-.25*i,o=1+.2*i;this.sprite.scale.set(o,a,1);const l=i*1*(Math.random()-.5)*2;this.sprite.position.x=l,this._warmupTimer>=pe.WARMUP_DURATION&&(this._warmingUp=!1,this._laying=!0,this._layAnimTimer=pe.LAY_DURATION,this._frames=this._flyFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this.sprite.position.x=0,e=!0)}else if(this._laying){this._layAnimTimer-=t;const s=1-this._layAnimTimer/pe.LAY_DURATION,i=s<.5?1-.25*(s*2):.75+.25*((s-.5)*2);this.sprite.scale.set(1+(1-i)*.4,i,1),this._layAnimTimer<=0&&(this._laying=!1,this.sprite.scale.set(1,1,1),this._layTimer=this._layInterval,this._lastDisplayedSecond=Math.ceil(this._layTimer),this._drawTimerText(this._lastDisplayedSecond),this._timerSprite.visible=!0)}else{this._layTimer-=t;const s=Math.max(Math.ceil(this._layTimer),0);s!==this._lastDisplayedSecond&&(this._lastDisplayedSecond=s,this._drawTimerText(s)),this._layTimer<=pe.WARMUP_DURATION&&(this._warmingUp||(this._warmingUp=!0,this._warmupTimer=0,this._frames=this._layFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this._timerSprite.visible=!1))}!this._warmingUp&&!this._laying&&(this.group.position.x+=pe.SPEED*this._dir*t,this.group.position.x>this._maxX?(this._dir=-1,this.group.scale.x=pe.SCALE):this.group.position.x<this._minX&&(this._dir=1,this.group.scale.x=-.65)),this._timerSprite.scale.x=this._timerScaleBase*Math.sign(this.group.scale.x);const n=Math.sin(this._time*xe.BOB_SPEED*.9)*xe.BOB_AMPLITUDE*.8;return this.group.position.y=-140+n,{shouldLay:e}}}const he={IDLE:"idle",WARMUP:"warmup",DROP:"drop",LAND:"land",HATCH:"hatch",TRANSITION:"transition"},ko=.5,Vo=2,Wo=25,Xo=.05,Yo=-.035;class fm{constructor({renderer:t,physics:e,camera:n,board:s,chicken:i,scoreManager:a,particleSystem:o,hud:l,audio:u,input:h,textures:d}){this.renderer=t,this.physics=e,this.camera=n,this.board=s,this.chicken=i,this.score=a,this.particles=o,this.hud=l,this.audio=u,this.input=h,this.textures=d,this.state=he.IDLE,this.egg=null,this._mainEggs=[],this._stateTimer=0,this._wobblePhase=0,this._landingGold=0,this._idleDelay=0,this._stuckTimer=0,this._freezeTimer=0,this._drumrollTimer=0,this._coinFountainActive=!1,this._dupliBounceActive=!1,this._dupliBounceInFlight=!1,this._duplicateEggs=[],this._bonusGold=0,this._hasPlayedRound=!1,this._hasPulsedToggle=!1,this._roundCount=0,this._playerUpgrades={};for(const f of Vn)this._playerUpgrades[f.id]=0;this._specialPegTimer=0,this._chickenSlots=Tr.map(f=>({config:f,owned:!1,level:0,chicken:null})),this._autoEggs=[],this._onCollision=this._onCollision.bind(this),this.physics.on("collisionStart",this._onCollision),this._onTap=this._onTap.bind(this),this.input.onTap(this._onTap),this.hud.onPowerupClick(()=>this.purchaseDupliBounce()),this.hud.initUpgradeRows(Tr),this.hud.revealUpgradeRow(Tr[0].id),this.hud.onUpgradeRowClick(f=>this._handleUpgradeClick(f)),this.hud.initPlayerUpgradeRows(Vn),this.hud.onPlayerUpgradeRowClick(f=>this._handlePlayerUpgradeClick(f)),this._enterIdle()}_getSpeedMult(){return ae.fastMode?.25:this._roundCount>=2?.6:1}_onTap(){this.state===he.IDLE&&!this.hud.isPanelOpen()&&this._enterWarmup()}_onCollision(t){const{bodyA:e,bodyB:n}=t,s=this.state===he.DROP||this.state===he.LAND;if(s&&this.state===he.DROP)for(const i of this._mainEggs){if(!i.alive||i.landed)continue;let a=null;if(e===i.body?a=n:n===i.body&&(a=e),!!a){a.label==="peg"&&a.pegRef?(this._handlePegHit(a.pegRef,i),this._dupliBounceInFlight&&this._spawnDuplicate(a.pegRef.x,a.pegRef.y)):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleBinLand(a.binRef,i):a.label==="floor"&&!i.landed&&this._handleFloorLand(i);return}}if(s)for(const i of this._duplicateEggs){if(!i.alive||i.landed)continue;let a=null;if(e===i.body?a=n:n===i.body&&(a=e),!!a){a.label==="peg"&&a.pegRef?this._handleDupePegHit(a.pegRef,i):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleDupeBinLand(a.binRef,i):a.label==="floor"&&this._handleDupeFloorLand(i);return}}for(const i of this._autoEggs){if(!i.alive||i.landed)continue;let a=null;if(e===i.body?a=n:n===i.body&&(a=e),!!a){a.label==="peg"&&a.pegRef?this._handleAutoEggPegHit(a.pegRef,i):a.label&&a.label.startsWith("bin_")&&a.binRef?this._handleAutoEggBinLand(a.binRef,i):a.label==="floor"&&this._handleAutoEggFloorLand(i);return}}}_pegHitScreenPos(t){return this.renderer.projectToScreen(t.x,-t.y)}_handlePegHit(t,e){t.hit(),this.board.rippleFrom(t);const n=performance.now(),s=e.hitPeg(n),i=In.BASE_GOLD*s,a=t.specialType?sn[t.specialType].multiplier:1,o=i*a;e.runGold+=o,this.score.pegHits++,this.score.currentRunGold+=o,this.score.totalGold+=o;const l=this.board.getNormalizedY(t.y);this.audio.pegHit(l,s);const u=e.getSpeed();ae.fastMode||this.camera.shake(Jt.SHAKE_INTENSITY*Math.min(u/5,1.5)),this.particles.emitPegSpark(t.x,-t.y);const h=s>3?42:s>1?34:28,d=t.specialType?sn[t.specialType].textColor:s>3?"#FF6B35":s>1?"#FFD700":"#FFFFFF";this.particles.spawnFloatingGold(t.x,-t.y+20,o,h,d),this.hud.setGold(this.score.totalGold),ae.fastMode||(this.hud.setRunGold(this.score.currentRunGold),this.hud.setCombo(s),this.hud.setEdgeGlow(s/In.COMBO_MAX));const f=this._pegHitScreenPos(t);this.hud.spawnFlyingCoin(f.x,f.y)}_handleBinLand(t,e){if(!e.landed&&(e.landed=!0,e.landedBin=t,t.glow(),t.squash(),t.popLabel(),this.audio.eggLand(),this.particles.emitDust(t.x,-t.y+15),this.particles.emitBinLand(t.x,-t.y+10,Te.COLORS[t.index],t.multiplier),this.camera.shake(t.multiplier>=10?5:3),e.setSquash(1.3,.7),this._allMainEggsLanded())){const n=this._getBestBin();this._landingGold=this.score.calculateLandingBonus(n.multiplier),this.egg=this._getHatchEgg(),this.state=he.LAND,this._stateTimer=0,this._freezeTimer=Cn.LAND_FREEZE}}_handleFloorLand(t){if(!(!t||t.landed)&&(t.landed=!0,this.audio.eggLand(),this._allMainEggsLanded())){const e=this._getBestBin();e?this._landingGold=this.score.calculateLandingBonus(e.multiplier):this._landingGold=0,this.egg=this._getHatchEgg(),this.state=he.LAND,this._stateTimer=0,this._freezeTimer=Cn.LAND_FREEZE,this.camera.shake(2),this.egg&&this.egg.setSquash(1.3,.7)}}_allMainEggsLanded(){return this._mainEggs.every(t=>t.landed||!t.alive)}_getBestBin(){let t=null;for(const e of this._mainEggs)e.landedBin&&(!t||e.landedBin.multiplier>t.multiplier)&&(t=e.landedBin);return t}_getHatchEgg(){const t=this._getBestBin();return t?this._mainEggs.find(e=>e.landedBin===t)||this._mainEggs[0]:this._mainEggs[0]}_spawnDuplicate(t,e){const n=new Ar(t,e,this.physics,this.textures.egg,!0),s=Math.random()*Math.PI*2,i=jn.SPAWN_SPEED_MIN+Math.random()*jn.SPAWN_SPEED_SPREAD;this.physics.setVelocity(n.body,{x:Math.cos(s)*i,y:-Math.abs(Math.sin(s)*i)-.5}),this.renderer.scene.add(n.mesh),this._duplicateEggs.push(n),this.audio.duplicateSpawn(),this.particles.emitPegSpark(t,-e)}_handleDupePegHit(t,e){t.hit(),e.pegHits++,this.board.rippleFrom(t);const n=t.specialType?sn[t.specialType].multiplier:1;this.score.currentRunGold+=n,this.score.totalGold+=n;const s=this.board.getNormalizedY(t.y);this.audio.pegHit(s,1),this.particles.emitPegSpark(t.x,-t.y);const i=t.specialType?sn[t.specialType].textColor:"#DDDDDD";this.particles.spawnFloatingGold(t.x,-t.y+20,n,22,i),this.hud.setGold(this.score.totalGold),ae.fastMode||this.hud.setRunGold(this.score.currentRunGold);const a=this._pegHitScreenPos(t);this.hud.spawnFlyingCoin(a.x,a.y)}_handleDupeBinLand(t,e){if(e.landed)return;e.landed=!0,e.landedBin=t,t.glow(),t.squash(),t.popLabel(),this.audio.eggLand(),this.particles.emitDust(t.x,-t.y+15),this.particles.emitBinLand(t.x,-t.y+10,Te.COLORS[t.index],t.multiplier);const n=this.score.calculateLandingBonus(t.multiplier);this._bonusGold+=n,this.particles.spawnFloatingText(t.x,-t.y+25,`+${n}g`,26,"#FFE680"),setTimeout(()=>{if(e.alive){e.destroy(this.renderer.scene);const s=this._duplicateEggs.indexOf(e);s!==-1&&this._duplicateEggs.splice(s,1)}},200)}_handleDupeFloorLand(t){t.landed||(t.landed=!0,setTimeout(()=>{if(t.alive){t.destroy(this.renderer.scene);const e=this._duplicateEggs.indexOf(t);e!==-1&&this._duplicateEggs.splice(e,1)}},100))}_cleanupDuplicates(){for(const t of this._duplicateEggs)t.alive&&t.destroy(this.renderer.scene);this._duplicateEggs=[]}_getPlayerUpgradeCost(t){const e=this._playerUpgrades[t.id];return e>=t.maxLevel?1/0:Math.floor(t.baseCost*Math.pow(t.costMult,e))}_handlePlayerUpgradeClick(t){const e=Vn.find(s=>s.id===t);if(!e)return;const n=this._getPlayerUpgradeCost(e);this.score.canAfford(n)&&(this.score.spendGold(n),this.hud.setGold(this.score.totalGold),this._playerUpgrades[t]++,this.audio.purchasePowerup(),this._syncAllUpgradeRows(),t.endsWith("_pegs")&&(this._cycleSpecialPegs(),this._specialPegTimer=0))}_updateSpecialPegCycle(t){(this._playerUpgrades.golden_pegs>0||this._playerUpgrades.diamond_pegs>0||this._playerUpgrades.rainbow_pegs>0)&&(this._specialPegTimer+=t,this._specialPegTimer>=sn.CYCLE_INTERVAL&&(this._specialPegTimer=0,this._cycleSpecialPegs()))}_cycleSpecialPegs(){const t={};for(const e of["rainbow","diamond","golden"]){const n=this._playerUpgrades[e+"_pegs"];if(n>0){const s=Vn.find(i=>i.id===e+"_pegs");t[e]=n*s.effect}}this.board.cycleSpecialPegs(t)}_syncPlayerUpgradeRows(){let t=!1;for(const e of Vn){const n=this._playerUpgrades[e.id],s=this._getPlayerUpgradeCost(e),i=this.score.canAfford(s);i&&s!==1/0&&(t=!0),this.hud.updatePlayerUpgradeRow(e.id,{level:n,cost:s===1/0?"---":s,canAfford:i,maxLevel:e.maxLevel})}return t}_getSlot(t){return this._chickenSlots.find(e=>e.config.id===t)}_getSlotCost(t){return t.owned?t.level>=pe.MAX_LEVEL?1/0:Math.floor(t.config.levelCostBase*Math.pow(t.config.levelCostMult,t.level-1)):t.config.baseCost}_handleUpgradeClick(t){const e=this._getSlot(t);if(!e)return;const n=this._getSlotCost(e);this.score.canAfford(n)&&(e.owned?e.level<pe.MAX_LEVEL&&this._upgradeChicken(e):this._purchaseChicken(e))}_purchaseChicken(t){const e=t.config.baseCost;this.score.spendGold(e),this.hud.setGold(this.score.totalGold),t.owned=!0,t.level=1,t.chicken=new um(this.textures,t.config,1),this.renderer.scene.add(t.chicken.group),t.chicken.triggerImmediateLay(),this.audio.purchasePowerup();const n=this._chickenSlots.indexOf(t);n+1<this._chickenSlots.length&&this.hud.revealUpgradeRow(this._chickenSlots[n+1].config.id),this._syncAllUpgradeRows()}_upgradeChicken(t){const e=this._getSlotCost(t);this.score.spendGold(e),this.hud.setGold(this.score.totalGold),t.level++,t.chicken.setLevel(t.level),this.audio.purchasePowerup(),this._syncAllUpgradeRows()}_syncAllUpgradeRows(){let t=!1;for(const n of this._chickenSlots){const s=this._getSlotCost(n),i=this.score.canAfford(s);i&&s!==1/0&&(t=!0);const a=this._chickenSlots[this._chickenSlots.indexOf(n)-1],o=!a||a.owned;!n.owned&&!o||this.hud.updateUpgradeRow(n.config.id,{owned:n.owned,level:n.level,cost:s===1/0?"---":s,canAfford:i,maxLevel:pe.MAX_LEVEL})}const e=this._syncPlayerUpgradeRows();this.hud.setUpgradeToggleHighlight(t||e),this._updateGoalBar()}_getNextGoal(){let t=null;for(const e of this._chickenSlots){const n=this._getSlotCost(e);if(n!==1/0){if(!e.owned){const s=this._chickenSlots[this._chickenSlots.indexOf(e)-1];if(s&&!s.owned)continue}if(!t||n<t.cost){const s=e.owned?`${e.config.name} Lv.${e.level+1}`:e.config.name;t={emoji:e.config.emoji,name:s,cost:n}}}}for(const e of Vn){const n=this._getPlayerUpgradeCost(e);if(n!==1/0&&(!t||n<t.cost)){const s=this._playerUpgrades[e.id],i=s===0?e.name:`${e.name} Lv.${s+1}`;t={emoji:e.emoji,name:i,cost:n}}}return t}_updateGoalBar(){const t=this._getNextGoal();if(!t){this.hud.hideGoalBar();return}this.hud.updateGoalBar({emoji:t.emoji,name:t.name,current:this.score.totalGold,target:t.cost})}_spawnAutoEgg(t){const e=pe.AUDIO_VOLUME_SCALE;this.audio.eggPop(e),this.audio.chickenCluck(e);const n=t.getDropX(),s=t.getDropY(),i=t.typeConfig,a=new Ar(n,s,this.physics,this.textures.egg,!1,{tint:i.eggTint,goldMultiplier:i.goldMultiplier,typeId:i.id});a.body.label="egg_auto",a.mesh.position.z=1.5,a._autoAge=0,a._stuckTimer=0,this.renderer.scene.add(a.mesh),this._autoEggs.push(a)}_handleAutoEggPegHit(t,e){t.hit(),e.pegHits++,this.board.rippleFrom(t);const s=(t.specialType?sn[t.specialType].multiplier:1)*e.goldMultiplier;this.score.collectGold(s);const i=pe.AUDIO_VOLUME_SCALE,a=this.board.getNormalizedY(t.y);this.audio.pegHit(a,1,i),this.particles.emitPegSpark(t.x,-t.y);const o=t.specialType?sn[t.specialType].textColor:"#AADDFF";this.particles.spawnFloatingGold(t.x,-t.y+20,s,22,o),this.hud.setGold(this.score.totalGold);const l=this._pegHitScreenPos(t);this.hud.spawnFlyingCoin(l.x,l.y)}_handleAutoEggBinLand(t,e){if(e.landed)return;e.landed=!0,t.glow(),t.squash(),t.popLabel(),this.audio.eggLand(pe.AUDIO_VOLUME_SCALE),this.particles.emitDust(t.x,-t.y+15),this.particles.emitBinLand(t.x,-t.y+10,Te.COLORS[t.index],t.multiplier);const s=Math.max(1,Math.ceil(e.pegHits*In.BASE_GOLD*t.multiplier))*e.goldMultiplier;this._fireAutoEggFountain(e,s)}_handleAutoEggFloorLand(t){t.landed||(t.landed=!0,this._fireAutoEggFountain(t,0))}_fireAutoEggFountain(t,e){const n=t.getX(),s=-t.getY();if(this.particles.emitHatchExplosion(n,s),e>0){const i=this.renderer.projectToScreen(n,s),a=Math.min(Math.max(Math.ceil(Math.sqrt(e)),2),12),o=Math.max(1,Math.floor(e/a)),l=e-o*a;this.hud.spawnCoinFountain(i.x,i.y,a,o,(u,h,d)=>{let f=u;h===d&&(f+=l),this.score.collectGold(f),this.hud.setGold(this.score.totalGold),this._syncAllUpgradeRows(),this._updateGoalBar()},null)}setTimeout(()=>{if(t.alive){t.destroy(this.renderer.scene);const i=this._autoEggs.indexOf(t);i!==-1&&this._autoEggs.splice(i,1)}},150)}_checkAutoEggStuck(t,e){if(t.landed)return;const n=t.getSpeed(),s=t.getX(),i=De.WIDTH/2-Wo;if(n<ko&&Math.abs(s)>i?t._stuckTimer+=e:t._stuckTimer=Math.max(0,t._stuckTimer-e*2),t._stuckTimer>=Vo){const a=s>0?-1:1;this.physics.applyForce(t.body,{x:a*Xo,y:Yo}),this.particles.spawnFloatingText(s,-t.getY(),"BLAST OFF!",36,"#FF4400"),t._stuckTimer=0}}purchaseDupliBounce(){this.state===he.IDLE&&(this._dupliBounceActive||this.score.canAfford(jn.DUPLI_BOUNCE_COST)&&(this.score.spendGold(jn.DUPLI_BOUNCE_COST),this.hud.setGold(this.score.totalGold),this._dupliBounceActive=!0,this.audio.purchasePowerup(),this.hud.setPowerupActive(),this._syncAllUpgradeRows()))}_enterIdle(){this.state=he.IDLE,this.score.resetRun(),this._idleDelay=Cn.IDLE_PROMPT_DELAY,this.hud.hideRunGold(),this._hasPlayedRound?(this.camera.setTargetZoom(Jt.OVERVIEW_ZOOM),this.camera.followX(0),this.camera.followY(Jt.OVERVIEW_CENTER_Y)):(this.camera.setTargetZoom(Jt.IDLE_ZOOM),this.camera.followX(this.chicken.getX()),this.camera.followY(xe.Y_POS)),this._hasPlayedRound&&(this._syncAllUpgradeRows(),this.hud.showUpgradeToggle(),this._updateGoalBar(),this._roundCount>=2&&this.hud.showSettingsBtn(),this._hasPulsedToggle||(this._hasPulsedToggle=!0,setTimeout(()=>this.hud.pulseUpgradeToggle(),400)))}_enterWarmup(){this.state=he.WARMUP,this._stateTimer=0,this._bonusGold=0,this.hud.hideTapPrompt(),this.hud.hideSubtleTapPrompt(),this.hud.hidePowerupButton(),this.hud.closeUpgradePanel(),this.hud.closeSettingsPanel(),ae.fastMode||(this.hud.hideUpgradeToggle(),this.hud.hideGoalBar(),this.hud.hideSettingsBtn()),this._dupliBounceActive&&(this._dupliBounceInFlight=!0,this._dupliBounceActive=!1),this.chicken.warmup([this.textures.chickenLay0,this.textures.chickenLay1],xe.WARMUP_DURATION*this._getSpeedMult()),this.audio.chickenSqueeze(),ae.fastMode||this.camera.setTargetZoom(Jt.WARMUP_ZOOM)}_enterDrop(){this.state=he.DROP,this._stateTimer=0,this._stuckTimer=0,this.chicken.stopWarmup(),this.chicken.lay(),this.audio.eggPop(),this.audio.chickenCluck(),this.camera.shake(5);const t=1+this._playerUpgrades.multi_egg,e=Vn.find(a=>a.id==="bounciness"),n=this._playerUpgrades.bounciness*e.effect,s=this.chicken.getDropX(),i=this.chicken.getDropY();this._mainEggs=[];for(let a=0;a<t;a++){const o=t>1?(a-(t-1)/2)*15:0,l=new Ar(s+o,i,this.physics,this.textures.egg,!1,{restitutionBonus:n});this.renderer.scene.add(l.mesh),this._mainEggs.push(l)}this.egg=this._mainEggs[0];for(let a=1;a<this._mainEggs.length;a++)this.particles.emitEggPop(this._mainEggs[a].getX(),-i);this.particles.emitEggPop(s,-i),ae.fastMode||(this.camera.snapTo(s,i),this.camera.setTargetZoom(Jt.DROP_ZOOM_START))}_enterHatch(){this.state=he.HATCH,this._stateTimer=0,this._wobblePhase=0,this._drumrollTimer=0,this._coinFountainActive=!1,this._landingGold+=this._bonusGold,this._cleanupDuplicates();for(const t of this._mainEggs)t!==this.egg&&t.alive&&t.destroy(this.renderer.scene);this.egg&&this.egg.alive&&this.physics.setStatic(this.egg.body,!0),ae.fastMode||this.camera.setTargetZoom(Jt.HATCH_ZOOM)}_enterTransition(){this.state=he.TRANSITION,this._stateTimer=0,this._hasPlayedRound=!0,this._roundCount++,this._roundCount===2&&!ae.wasUserSet("fastMode")&&ae.set("fastMode",!0),this._dupliBounceInFlight=!1,this._bonusGold=0,this._cleanupDuplicates(),this.egg&&(this.egg.destroy(this.renderer.scene),this.egg=null),this._mainEggs=[],this.audio.whoosh(),this.chicken.celebrate(),this.camera.transitionTo(0,Jt.OVERVIEW_CENTER_Y,Jt.OVERVIEW_ZOOM,Cn.TRANSITION_DURATION*this._getSpeedMult(),()=>{this._enterIdle()})}update(t){this.chicken.update(t),this.board.update(t,this.particles),this.particles.update(t),this._updateSpecialPegCycle(t);for(const e of this._chickenSlots){if(!e.chicken)continue;e.chicken.update(t).shouldLay&&this._spawnAutoEgg(e.chicken)}for(let e=this._autoEggs.length-1;e>=0;e--){const n=this._autoEggs[e];n.alive&&(n.landed||(n._autoAge+=t,n.update(),this._checkAutoEggStuck(n,t),n._autoAge>20&&this._handleAutoEggFloorLand(n)))}switch(this.state){case he.IDLE:this._updateIdle(t);break;case he.WARMUP:this._updateWarmup(t);break;case he.DROP:this._updateDrop(t);break;case he.LAND:this._updateLand(t);break;case he.HATCH:this._updateHatch(t);break;case he.TRANSITION:this._updateTransition(t);break}this.camera.update(t)}_updateIdle(t){this._hasPlayedRound?(this.camera.followX(0),this.camera.followY(Jt.OVERVIEW_CENTER_Y)):(this.camera.followX(this.chicken.getX()),this.camera.followY(xe.Y_POS)),this._idleDelay-=t,this._idleDelay<=0&&(this._hasPlayedRound?this.hud.showSubtleTapPrompt():this.hud.showTapPrompt())}_updateWarmup(t){this._stateTimer+=t;const e=xe.WARMUP_DURATION*this._getSpeedMult();if(!ae.fastMode){this.camera.followX(this.chicken.getX()),this.camera.followY(xe.Y_POS);const n=Math.min(this._stateTimer/e,1);this.camera.shake(n*n*.8)}this._stateTimer>=e&&this._enterDrop()}_updateDrop(t){const e=this._mainEggs[0];if(!e||!e.alive)return;if(this._stateTimer+=t,this._stateTimer>20){for(const s of this._mainEggs)s.landed||this._handleFloorLand(s);return}for(const s of this._mainEggs)s.alive&&s.update();for(const s of this._duplicateEggs)s.alive&&s.update();const n=e.getSpeed();if(!ae.fastMode){this.camera.followX(e.getX()),this.camera.followY(e.getY());const s=e.getY(),i=Math.max(0,Math.min(1,(s-Jt.BOARD_TOP_Y)/(Jt.BOARD_BOTTOM_Y-Jt.BOARD_TOP_Y))),a=Jt.DROP_ZOOM_MAX+(Jt.DROP_ZOOM_MIN-Jt.DROP_ZOOM_MAX)*i,o=Jt.DROP_ZOOM_MAX-n*Jt.SPEED_ZOOM_FACTOR,l=Math.max(Jt.DROP_ZOOM_MIN,Math.min(Jt.DROP_ZOOM_MAX,o));this.camera.setTargetZoom(Math.min(a,l))}for(const s of this._mainEggs){if(!s.alive||s.landed)continue;const i=s.getVelX(),a=s.getVelY(),o=Math.sqrt(i*i+a*a);if(o>1){const l=Math.min(o*.03,.3),h=Math.atan2(Math.abs(a),Math.abs(i))/(Math.PI/2);s.setSquash(1-l*(1-h)+l*h*.3,1+l*h-l*(1-h)*.3)}else s.setSquash(1,1)}n>1.5&&this.particles.emitTrail(e.getX(),e.body.position.y,n),this._checkStuck(t)}_checkStuck(t){const e=this._mainEggs[0];if(!e||e.landed)return;const n=e.getSpeed(),s=e.getX(),i=De.WIDTH/2-Wo;if(n<ko&&Math.abs(s)>i?this._stuckTimer+=t:this._stuckTimer=Math.max(0,this._stuckTimer-t*2),this._stuckTimer>=Vo){for(const a of this._mainEggs){if(a.landed)continue;const l=a.getX()>0?-1:1;this.physics.applyForce(a.body,{x:l*Xo,y:Yo})}this.particles.spawnFloatingText(s,-e.getY(),"BLAST OFF!",48,"#FF4400"),this._stuckTimer=0}}_updateLand(t){for(const e of this._duplicateEggs)e.alive&&e.update();if(this._freezeTimer>0){this._freezeTimer-=t,this.egg&&!ae.fastMode&&(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY()));return}if(this._stateTimer+=t,this.egg){const e=Math.min(this._stateTimer/Cn.HATCH_DELAY,1),n=1.3+(1-1.3)*e,s=.7+(1-.7)*e;this.egg.setSquash(n,s),this.egg.update(),ae.fastMode||(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY()))}this._stateTimer>=Cn.HATCH_DELAY&&this._enterHatch()}_updateHatch(t){this._stateTimer+=t;const e=this._getSpeedMult(),n=Cn.WOBBLE_DURATION*e,s=Cn.CRACK_DURATION*e;if(this.egg&&!ae.fastMode&&(this.camera.followX(this.egg.getX()),this.camera.followY(this.egg.getY())),this._stateTimer<n){const i=this._stateTimer/n,a=i*i;if(this._wobblePhase+=t*(20+a*30),this.egg){const l=Math.sin(this._wobblePhase)*(.15+a*.25);this.egg.mesh.rotation.z=l}this.camera.shake(a*Jt.HATCH_SHAKE_MAX),this._drumrollTimer-=t;const o=.15-a*.11;this._drumrollTimer<=0&&(this.audio.drumrollHit(a),this._drumrollTimer=o)}else if(this._stateTimer<n+s)this.egg&&this.egg._crackLines.length===0&&this.egg.showCracks(),this.camera.shake(Jt.HATCH_SHAKE_MAX*.8);else if(this._stateTimer>=n+s&&this.egg&&!this._coinFountainActive){const i=this.egg.getX(),a=-this.egg.getY();this.hud.screenFlash(),this.audio.hatch(),this.particles.emitHatchExplosion(i,a),this.renderer.setBgBrightness(.15),this.egg.destroy(this.renderer.scene),this.egg=null,this._startCoinFountain(i,a)}if(this._coinFountainActive){const i=this._stateTimer-(n+s);this.renderer.setBgBrightness(Math.max(0,.15-i*.2))}}_startCoinFountain(t,e){if(this._coinFountainActive=!0,this._landingGold<=0){this._coinFountainActive=!1,this.renderer.setBgBrightness(0),this.hud.hideRunGold(),setTimeout(()=>{this.state===he.HATCH&&this._enterTransition()},300);return}const n=this.renderer.projectToScreen(t,e),s=Math.min(Math.max(Math.ceil(Math.sqrt(this._landingGold)),3),20),i=Math.max(1,Math.floor(this._landingGold/s)),a=this._landingGold-i*s;this.hud.spawnCoinFountain(n.x,n.y,s,i,(o,l,u)=>{let h=o;l===u&&(h+=a),this.score.collectGold(h),this.hud.setGold(this.score.totalGold),this.audio.coinCollect(l,u)},()=>{this._coinFountainActive=!1,this.renderer.setBgBrightness(0),this.hud.hideRunGold(),setTimeout(()=>{this.state===he.HATCH&&this._enterTransition()},300)})}_updateTransition(t){this._stateTimer+=t}}const qo=.15;class dm{constructor(t){this._time=0,this._dir=1,this._laying=!1,this._layTimer=0,this._celebTimer=0,this._flipTimer=0,this._frameIndex=0,this._warmingUp=!1,this._warmupTimer=0,this._warmupDuration=0,this._flyFrames=[t.chickenFly1,t.chickenFly2],this._frames=this._flyFrames,this.group=new Kn,this.group.position.set(0,-105,5),this.group.scale.x=-1;const e=xe.BODY_RADIUS*2.8,n=new me(e,e),s=new we({map:this._frames[0],transparent:!0});this.sprite=new ie(n,s),this.group.add(this.sprite),this._minX=-390/2+40,this._maxX=De.WIDTH/2-40}getX(){return this.group.position.x}getDropX(){return this.group.position.x}getDropY(){return-this.group.position.y+xe.BODY_RADIUS+5}warmup(t,e){this._warmingUp=!0,this._warmupTimer=0,this._warmupDuration=e,this._frames=t,this._frameIndex=0,this._flipTimer=0,this.sprite.material.map=this._frames[0]}stopWarmup(){this._warmingUp=!1,this._warmupTimer=0,this._frames=this._flyFrames,this._frameIndex=0,this.sprite.material.map=this._frames[0],this.sprite.scale.set(1,1,1),this.sprite.position.x=0}lay(){this._laying=!0,this._layTimer=xe.LAY_DURATION}celebrate(){this._celebTimer=.6}update(t){if(this._time+=t,this._flipTimer+=t,this._flipTimer>=qo&&(this._flipTimer-=qo,this._frameIndex=(this._frameIndex+1)%this._frames.length,this.sprite.material.map=this._frames[this._frameIndex]),this._warmingUp){this._warmupTimer+=t;const n=Math.min(this._warmupTimer/this._warmupDuration,1),s=n*n,i=1-.3*s,a=1+.25*s;this.sprite.scale.set(a,i,1);const o=s*1.5*(Math.random()-.5)*2;this.sprite.position.x=o;const l=Math.sin(this._time*xe.BOB_SPEED)*xe.BOB_AMPLITUDE*(1-s*.5);this.group.position.y=-105+l;return}if(this._laying){this._layTimer-=t;const n=1-this._layTimer/xe.LAY_DURATION,s=n<.5?1-.3*(n*2):.7+.3*((n-.5)*2);this.sprite.scale.set(1+(1-s)*.5,s,1),this._layTimer<=0&&(this._laying=!1,this.sprite.scale.set(1,1,1));return}if(this._celebTimer>0){this._celebTimer-=t;const n=Math.sin(this._celebTimer*30)*3;this.group.position.y=-105+n,this._celebTimer<=0&&(this.group.position.y=-105);return}this.group.position.x+=xe.SPEED*this._dir*t,this.group.position.x>this._maxX?(this._dir=-1,this.group.scale.x=1):this.group.position.x<this._minX&&(this._dir=1,this.group.scale.x=-1);const e=Math.sin(this._time*xe.BOB_SPEED)*xe.BOB_AMPLITUDE;this.group.position.y=-105+e}}class pm{constructor(t,e){this.scene=t,this.textures=e,this._clouds=[],this._mountains=[],this._groundDetails=[],this._createGround(),this._createMountains(),this._createClouds(),this._createGroundDetails()}_makeSprite(t,e,n,s,i,a,o=1){const l=new me(e,n),u=new we({map:t,transparent:!0,opacity:o,depthWrite:!1}),h=new ie(l,u);return h.position.set(s,i,a),this.scene.add(h),h}_createGround(){const e=dn.GROUND_HEIGHT,n=dn.GROUND_WIDTH,s=new we({color:dn.GROUND_COLOR}),i=new ie(new me(n,e),s);i.position.set(0,-775-e/2,-1),this.scene.add(i);const a=dn.GROUND_TOP_HEIGHT,o=new we({color:dn.GROUND_TOP_COLOR}),l=new ie(new me(n,a),o);l.position.set(0,-775-a/2,-.9),this.scene.add(l)}_createMountains(){const t=this.textures,e=-775;if(t.mountainsFar){const n=this._makeSprite(t.mountainsFar,550,220,-40,e+100,-4,.7);n._baseY=e+100,n._parallax=dn.MOUNTAIN_PARALLAX*.6,this._mountains.push(n);const s=this._makeSprite(t.mountainsFar,500,190,180,e+80,-4,.5);s.scale.x=-1,s._baseY=e+80,s._parallax=dn.MOUNTAIN_PARALLAX*.6,this._mountains.push(s)}if(t.mountainsNear){const n=this._makeSprite(t.mountainsNear,600,240,0,e+90,-3,.85);n._baseY=e+90,n._parallax=dn.MOUNTAIN_PARALLAX,this._mountains.push(n)}}_createClouds(){const t=this.textures,e=[{key:"cloudLarge",x:-120,gameY:20,w:160,h:80,z:-6,opacity:.9},{key:"cloudMedium",x:100,gameY:60,w:120,h:60,z:-5,opacity:.85},{key:"cloudSmall",x:-60,gameY:130,w:90,h:35,z:-5,opacity:.7},{key:"cloudLarge",x:150,gameY:200,w:130,h:65,z:-6,opacity:.6},{key:"cloudMedium",x:-140,gameY:280,w:100,h:50,z:-5,opacity:.55},{key:"cloudSmall",x:50,gameY:350,w:80,h:30,z:-6,opacity:.45},{key:"cloudSmall",x:-100,gameY:450,w:70,h:28,z:-5,opacity:.35}];for(const n of e){const s=t[n.key];if(!s)continue;const i=-n.gameY,a=this._makeSprite(s,n.w,n.h,n.x,i,n.z,n.opacity);a._baseY=i,this._clouds.push(a)}}_createGroundDetails(){}update(t){const n=t.currentY;for(const s of this._clouds)s.position.y=s._baseY+n*dn.CLOUD_PARALLAX;for(const s of this._mountains)s.position.y=s._baseY+n*s._parallax}}const $o=`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#DAA520" stroke-width="4"/><circle cx="50" cy="50" r="36" fill="none" stroke="#DAA520" stroke-width="3"/><text x="50" y="62" text-anchor="middle" font-size="40" font-weight="bold" fill="#B8860B" font-family="Arial">$</text></svg>')}`;class mm{constructor(){this._goldEl=document.getElementById("gold-count"),this._runGoldEl=document.getElementById("run-gold-count"),this._runGoldDisplay=document.getElementById("run-gold-display"),this._comboDisplay=document.getElementById("combo-display"),this._tapPrompt=document.getElementById("tap-prompt"),this._screenFlash=document.getElementById("screen-flash"),this._edgeGlow=document.getElementById("edge-glow"),this._goldPill=document.querySelector(".gold-pill"),this._viewport=document.getElementById("game-viewport"),this._powerupBar=document.getElementById("powerup-bar"),this._powerupBtn=document.getElementById("powerup-dupli-bounce"),this._powerupNameEl=this._powerupBtn.querySelector(".powerup-name"),this._subtleTapPrompt=document.getElementById("tap-prompt-subtle"),this._upgradeToggle=document.getElementById("upgrade-toggle"),this._upgradeBackdrop=document.getElementById("upgrade-backdrop"),this._upgradePanel=document.getElementById("upgrade-panel"),this._upgradeClose=document.getElementById("upgrade-close"),this._autoList=document.getElementById("upgrade-tab-auto"),this._playerList=document.getElementById("upgrade-tab-player"),this._tabBtnPlayer=document.getElementById("tab-btn-player"),this._tabBtnAuto=document.getElementById("tab-btn-auto"),this._goalBar=document.getElementById("goal-bar"),this._goalBarFill=document.getElementById("goal-bar-fill"),this._goalBarMission=document.getElementById("goal-bar-mission"),this._goalBarReward=document.getElementById("goal-bar-reward"),this._goalBarProgress=document.getElementById("goal-bar-progress"),this._settingsBtn=document.getElementById("settings-btn"),this._settingsPanel=document.getElementById("settings-panel"),this._settingsClose=document.getElementById("settings-close"),this._settingRows={fastMode:document.getElementById("setting-fast-mode"),sfxEnabled:document.getElementById("setting-sfx"),musicEnabled:document.getElementById("setting-music")},this._panelOpen=!1,this._settingsPanelOpen=!1,this._activeTab="player",this._upgradeRows={},this._playerRows={},this._upgradeCallback=null,this._playerUpgradeCallback=null,this._flyingCoinCount=0,this._upgradeToggle.addEventListener("pointerdown",t=>{t.stopPropagation(),this.openUpgradePanel()}),this._upgradeClose.addEventListener("pointerdown",t=>{t.stopPropagation(),this.closeUpgradePanel()}),this._upgradeBackdrop.addEventListener("pointerdown",t=>{t.stopPropagation(),this.closeUpgradePanel(),this.closeSettingsPanel()}),this._settingsBtn.addEventListener("pointerdown",t=>{t.stopPropagation(),this.openSettingsPanel()}),this._settingsClose.addEventListener("pointerdown",t=>{t.stopPropagation(),this.closeSettingsPanel()}),this._goalBar.addEventListener("pointerdown",t=>{t.stopPropagation(),this.openUpgradePanel()}),this._tabBtnPlayer.addEventListener("pointerdown",t=>{t.stopPropagation(),this._switchTab("player")}),this._tabBtnAuto.addEventListener("pointerdown",t=>{t.stopPropagation(),this._switchTab("auto")}),this._switchTab("player")}_switchTab(t){this._activeTab=t,t==="player"?(this._tabBtnPlayer.classList.add("active"),this._tabBtnAuto.classList.remove("active"),this._playerList.style.display="",this._autoList.style.display="none"):(this._tabBtnAuto.classList.add("active"),this._tabBtnPlayer.classList.remove("active"),this._autoList.style.display="",this._playerList.style.display="none")}setGold(t){this._goldEl.textContent=t}throbGold(){this._goldPill.classList.remove("throb"),this._goldPill.offsetWidth,this._goldPill.classList.add("throb"),setTimeout(()=>this._goldPill.classList.remove("throb"),120)}setRunGold(t){this._runGoldEl.textContent=t,this._runGoldDisplay.classList.add("visible")}setCombo(t){t>1?(this._comboDisplay.textContent=`x${t}`,this._comboDisplay.classList.add("visible"),this._comboDisplay.style.transform=`translateX(-50%) scale(${1+t*.05})`):this._comboDisplay.classList.remove("visible")}setEdgeGlow(t){this._edgeGlow.style.opacity=Math.min(t,1)}showTapPrompt(){this._tapPrompt.classList.add("visible")}hideTapPrompt(){this._tapPrompt.classList.remove("visible")}showSubtleTapPrompt(){this._subtleTapPrompt.classList.add("visible")}hideSubtleTapPrompt(){this._subtleTapPrompt.classList.remove("visible")}hideRunGold(){this._runGoldDisplay.classList.remove("visible"),this._comboDisplay.classList.remove("visible"),this._edgeGlow.style.opacity=0}spawnFlyingCoin(t,e){if(this._flyingCoinCount>=6)return;const n=this._goldPill.getBoundingClientRect(),s=this._viewport.getBoundingClientRect(),i=n.left+n.width/2-s.left,a=n.top+n.height/2-s.top,o=document.createElement("div");o.className="flying-coin-mini",o.style.left=`${t-7}px`,o.style.top=`${e-7}px`,this._viewport.appendChild(o),this._flyingCoinCount++;const l=i-t,u=a-e;requestAnimationFrame(()=>{const h=o.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${l}px, ${u}px) scale(0.4)`,opacity:.7}],{duration:250,easing:"ease-in",fill:"forwards"});h.onfinish=()=>{o.remove(),this._flyingCoinCount--,this.throbGold()}})}showGoalBar(){this._goalBar.classList.add("visible")}hideGoalBar(){this._goalBar.classList.remove("visible")}updateGoalBar({emoji:t,name:e,current:n,target:s}){if(!s||s===1/0){this.hideGoalBar();return}const i=n>=s;this._goalBarMission.textContent=i?"READY!":`Save up ${s}g`,this._goalBarReward.textContent=`${t} ${e}`,this._goalBarProgress.textContent=`${n} / ${s}g`;const a=Math.min(n/s,1)*100;this._goalBarFill.style.width=`${a}%`,this._goalBar.classList.toggle("goal-ready",i),this.showGoalBar()}screenFlash(t=.15){this._screenFlash.style.opacity=.6,setTimeout(()=>{this._screenFlash.style.transition=`opacity ${t}s ease`,this._screenFlash.style.opacity=0},30),setTimeout(()=>{this._screenFlash.style.transition="opacity 0.1s ease"},t*1e3+50)}showPowerupButton(t){this._powerupBar.classList.add("visible"),this.updatePowerupAffordability(t),this.setPowerupIdle()}hidePowerupButton(){this._powerupBar.classList.remove("visible")}setPowerupActive(){this._powerupBtn.classList.remove("disabled"),this._powerupBtn.classList.add("active"),this._powerupNameEl.textContent="ACTIVE!"}setPowerupIdle(){this._powerupBtn.classList.remove("active"),this._powerupNameEl.textContent="Dupli-Bounce!"}updatePowerupAffordability(t){t?this._powerupBtn.classList.remove("disabled"):this._powerupBtn.classList.add("disabled")}onPowerupClick(t){this._powerupBtn.addEventListener("pointerdown",e=>{e.stopPropagation(),t()})}showUpgradeToggle(){this._upgradeToggle.classList.add("visible")}hideUpgradeToggle(){this._upgradeToggle.classList.remove("visible")}pulseUpgradeToggle(){this._upgradeToggle.classList.remove("pulse"),this._upgradeToggle.offsetWidth,this._upgradeToggle.classList.add("pulse"),this._upgradeToggle.addEventListener("animationend",()=>{this._upgradeToggle.classList.remove("pulse")},{once:!0})}setUpgradeToggleHighlight(t){t?this._upgradeToggle.classList.add("can-afford"):this._upgradeToggle.classList.remove("can-afford")}openUpgradePanel(){this._panelOpen||(this._panelOpen=!0,this._upgradePanel.classList.add("open"),this._upgradeBackdrop.classList.add("open"))}closeUpgradePanel(){this._panelOpen&&(this._panelOpen=!1,this._upgradePanel.classList.remove("open"),this._upgradeBackdrop.classList.remove("open"))}isPanelOpen(){return this._panelOpen||this._settingsPanelOpen}showSettingsBtn(){this._settingsBtn.classList.add("visible")}hideSettingsBtn(){this._settingsBtn.classList.remove("visible")}openSettingsPanel(){this._settingsPanelOpen||(this._settingsPanelOpen=!0,this._settingsPanel.classList.add("open"),this._upgradeBackdrop.classList.add("open"))}closeSettingsPanel(){this._settingsPanelOpen&&(this._settingsPanelOpen=!1,this._settingsPanel.classList.remove("open"),this._panelOpen||this._upgradeBackdrop.classList.remove("open"))}initSettingsToggles(t){for(const[e,n]of Object.entries(this._settingRows)){n.querySelector(".settings-toggle");const s=i=>{i.stopPropagation(),t.toggle(e)};n.addEventListener("pointerdown",s)}this.syncSettingsToggles(t)}syncSettingsToggles(t){for(const[e,n]of Object.entries(this._settingRows)){const s=n.querySelector(".settings-toggle");t[e]?s.classList.add("on"):s.classList.remove("on")}}initPlayerUpgradeRows(t){this._playerList.innerHTML="";for(const e of t){const n=document.createElement("div");n.className="upgrade-item",n.dataset.type=e.id,n.innerHTML=`
        <div class="upgrade-item-icon">${e.emoji}</div>
        <div class="upgrade-item-info">
          <span class="upgrade-item-name">${e.name}</span>
          <span class="upgrade-item-desc">${e.description}</span>
          <span class="upgrade-item-level"></span>
        </div>
        <button class="upgrade-item-buy" data-type="${e.id}">
          <img class="buy-coin" src="${$o}" alt="" />
          <span class="buy-price">${e.baseCost}</span>
        </button>
      `;const s=n.querySelector(".upgrade-item-buy");s.addEventListener("pointerdown",i=>{i.stopPropagation(),this._playerUpgradeCallback&&this._playerUpgradeCallback(e.id)}),this._playerList.appendChild(n),this._playerRows[e.id]={row:n,btn:s,priceEl:n.querySelector(".buy-price"),levelEl:n.querySelector(".upgrade-item-level")}}}updatePlayerUpgradeRow(t,e){const n=this._playerRows[t];n&&(e.level>=e.maxLevel?(n.priceEl.textContent="MAX",n.btn.querySelector(".buy-coin").style.display="none",n.levelEl.textContent=`Lv.${e.level}`,n.btn.disabled=!0,n.btn.classList.add("locked")):(n.priceEl.textContent=e.cost,n.btn.querySelector(".buy-coin").style.display="",n.levelEl.textContent=e.level>0?`Lv.${e.level}`:"",n.btn.disabled=!1,n.btn.classList.remove("locked")),e.canAfford&&!n.btn.disabled?n.btn.classList.remove("cannot-afford"):n.btn.classList.add("cannot-afford"))}onPlayerUpgradeRowClick(t){this._playerUpgradeCallback=t}initUpgradeRows(t){this._autoList.innerHTML="";for(const e of t){const n=document.createElement("div");n.className="upgrade-item",n.dataset.type=e.id,n.style.display="none",n.innerHTML=`
        <div class="upgrade-item-icon">${e.emoji}</div>
        <div class="upgrade-item-info">
          <span class="upgrade-item-name">${e.name}</span>
          <span class="upgrade-item-desc">${e.description}</span>
          <span class="upgrade-item-level"></span>
        </div>
        <button class="upgrade-item-buy" data-type="${e.id}">
          <img class="buy-coin" src="${$o}" alt="" />
          <span class="buy-price">${e.baseCost}</span>
        </button>
      `;const s=n.querySelector(".upgrade-item-buy");s.addEventListener("pointerdown",i=>{i.stopPropagation(),this._upgradeCallback&&this._upgradeCallback(e.id)}),this._autoList.appendChild(n),this._upgradeRows[e.id]={row:n,btn:s,priceEl:n.querySelector(".buy-price"),levelEl:n.querySelector(".upgrade-item-level"),descEl:n.querySelector(".upgrade-item-desc")}}}revealUpgradeRow(t){const e=this._upgradeRows[t];e&&(e.row.style.display="")}updateUpgradeRow(t,e){const n=this._upgradeRows[t];n&&(e.owned?e.level>=e.maxLevel?(n.priceEl.textContent="MAX",n.btn.querySelector(".buy-coin").style.display="none",n.levelEl.textContent=`Lv.${e.level}`,n.btn.disabled=!0,n.btn.classList.add("locked")):(n.priceEl.textContent=e.cost,n.btn.querySelector(".buy-coin").style.display="",n.levelEl.textContent=`Lv.${e.level}`,n.btn.disabled=!1,n.btn.classList.remove("locked")):(n.priceEl.textContent=e.cost,n.levelEl.textContent="",n.btn.disabled=!1,n.btn.classList.remove("locked")),e.canAfford&&!n.btn.disabled?n.btn.classList.remove("cannot-afford"):n.btn.classList.add("cannot-afford"))}onUpgradeRowClick(t){this._upgradeCallback=t}spawnCoinFountain(t,e,n,s,i,a){const o=this._goldPill.getBoundingClientRect(),l=this._viewport.getBoundingClientRect(),u=o.left+o.width/2-l.left,h=o.top+o.height/2-l.top,d=[];for(let p=0;p<n;p++){const _=document.createElement("div");_.className="flying-coin",_.style.left=`${t-10}px`,_.style.top=`${e-10}px`,_.style.transform="translate(0, 0) scale(1)",this._viewport.appendChild(_),d.push(_)}requestAnimationFrame(()=>{for(const p of d){const _=Math.random()*Math.PI*2,E=40+Math.random()*60,T=Math.cos(_)*E,A=Math.sin(_)*E-20;p.style.transform=`translate(${T}px, ${A}px) scale(1.1)`}});const f=700,c=100,m=350;let g=0;setTimeout(()=>{d.forEach((p,_)=>{setTimeout(()=>{const E=p.getBoundingClientRect(),T=E.left+E.width/2-l.left,A=E.top+E.height/2-l.top;p.style.transition="none",p.style.left=`${T-10}px`,p.style.top=`${A-10}px`,p.style.transform="translate(0, 0) scale(1)";const x=u-T,y=h-A,M=p.animate([{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${x*.5}px, ${y*.5-30}px) scale(0.8)`,opacity:1,offset:.5},{transform:`translate(${x}px, ${y}px) scale(0.3)`,opacity:.8}],{duration:m,easing:"ease-in",fill:"forwards"});M.onfinish=()=>{p.remove(),g++,i(s,g,n),this.throbGold(),g>=n&&a&&a()}},_*c)})},f)}}async function gm(){const r=await rm.loadAll(),t=document.getElementById("game"),e=new Zp(t),n=new tm,s=new em(e.camera),i=new nm(e.getCanvas()),a=new im;await a.loadSound("chickenCluck","sounds/SFX_ChickenCluck.ogg"),await a.loadSound("chickenSqueeze1","sounds/SFX_Branny_ChickenSqueeze01.ogg"),await a.loadSound("chickenSqueeze2","sounds/SFX_Branny_ChickenSqueeze02.ogg"),await a.loadSound("chickenSqueeze3","sounds/SFX_Branny_ChickenSqueeze03.ogg");const o=new lm,l=new hm(e.scene),u=new om(e.scene,n),h=new pm(e.scene,r),d=new dm(r);e.scene.add(d.group);const f=new mm;f.initSettingsToggles(ae),ae.onChange(p=>f.syncSettingsToggles(p)),document.getElementById("version-label").textContent=$p.toString();const c=new fm({renderer:e,physics:n,camera:s,board:u,chicken:d,scoreManager:o,particleSystem:l,hud:f,audio:a,input:i,textures:r});let m=-1;function g(p){if(requestAnimationFrame(g),m<0){m=p;return}const _=Math.min((p-m)/1e3,1/20);m=p,n.update(_),c.update(_),h.update(s),e.render()}requestAnimationFrame(g)}gm();
