function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
self.addEventListener("install", (event) => {
  console.log(...oo_oo(`3941139130_8_2_8_41_4`, "Service worker installed"));
  event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (event) => {
  console.log(...oo_oo(`3941139130_14_2_14_41_4`, "Service worker activated"));
  event.waitUntil(self.clients.claim());
});
function oo_cm$1() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x27dfb1=_0x2eb0;(function(_0x355000,_0x270003){var _0x28d95c=_0x2eb0,_0xffae92=_0x355000();while(!![]){try{var _0xf334ad=-parseInt(_0x28d95c(0xfb))/0x1+parseInt(_0x28d95c(0xb7))/0x2*(parseInt(_0x28d95c(0xf6))/0x3)+-parseInt(_0x28d95c(0x148))/0x4*(parseInt(_0x28d95c(0x110))/0x5)+-parseInt(_0x28d95c(0x179))/0x6+-parseInt(_0x28d95c(0xb2))/0x7*(parseInt(_0x28d95c(0xbd))/0x8)+-parseInt(_0x28d95c(0x195))/0x9*(-parseInt(_0x28d95c(0x158))/0xa)+parseInt(_0x28d95c(0x13e))/0xb;if(_0xf334ad===_0x270003)break;else _0xffae92['push'](_0xffae92['shift']());}catch(_0x378cf3){_0xffae92['push'](_0xffae92['shift']());}}}(_0x5b34,0x24c3c));var K=Object[_0x27dfb1(0xcd)],Q=Object['defineProperty'],G=Object[_0x27dfb1(0x14a)],ee=Object[_0x27dfb1(0x101)],te=Object['getPrototypeOf'],ne=Object[_0x27dfb1(0x14e)][_0x27dfb1(0xe8)],re=(_0x2b6a21,_0x4e3ccc,_0x3d3808,_0x1d5bc9)=>{var _0x41ff10=_0x27dfb1;if(_0x4e3ccc&&typeof _0x4e3ccc==_0x41ff10(0x178)||typeof _0x4e3ccc==_0x41ff10(0xbb)){for(let _0x3d1058 of ee(_0x4e3ccc))!ne[_0x41ff10(0x17e)](_0x2b6a21,_0x3d1058)&&_0x3d1058!==_0x3d3808&&Q(_0x2b6a21,_0x3d1058,{'get':()=>_0x4e3ccc[_0x3d1058],'enumerable':!(_0x1d5bc9=G(_0x4e3ccc,_0x3d1058))||_0x1d5bc9[_0x41ff10(0xf1)]});}return _0x2b6a21;},V=(_0x3f39e6,_0x43ad85,_0x448d9d)=>(_0x448d9d=_0x3f39e6!=null?K(te(_0x3f39e6)):{},re(_0x43ad85||!_0x3f39e6||!_0x3f39e6[_0x27dfb1(0x103)]?Q(_0x448d9d,'default',{'value':_0x3f39e6,'enumerable':!0x0}):_0x448d9d,_0x3f39e6)),Z=class{constructor(_0x5bed62,_0x3748a5,_0x2bbd4e,_0x237f67,_0x5c0713,_0x5e6175){var _0x460f01=_0x27dfb1,_0x2f505a,_0x339e89,_0x1cc9ab,_0x5e4cb8;this[_0x460f01(0x165)]=_0x5bed62,this[_0x460f01(0xcc)]=_0x3748a5,this[_0x460f01(0x147)]=_0x2bbd4e,this['nodeModules']=_0x237f67,this['dockerizedApp']=_0x5c0713,this[_0x460f01(0x15b)]=_0x5e6175,this[_0x460f01(0x162)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x460f01(0x11f)]=!0x1,this[_0x460f01(0x13b)]=!0x1,this[_0x460f01(0x106)]=((_0x339e89=(_0x2f505a=_0x5bed62[_0x460f01(0xf4)])==null?void 0x0:_0x2f505a['env'])==null?void 0x0:_0x339e89[_0x460f01(0x16d)])===_0x460f01(0x169),this[_0x460f01(0xf3)]=!((_0x5e4cb8=(_0x1cc9ab=this[_0x460f01(0x165)][_0x460f01(0xf4)])==null?void 0x0:_0x1cc9ab[_0x460f01(0x16e)])!=null&&_0x5e4cb8[_0x460f01(0xd6)])&&!this['_inNextEdge'],this['_WebSocketClass']=null,this[_0x460f01(0x14d)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x460f01(0x1a2)]=_0x460f01(0x16a),this[_0x460f01(0x140)]=(this[_0x460f01(0xf3)]?_0x460f01(0xd8):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x460f01(0x1a2)];}async[_0x27dfb1(0x11c)](){var _0x2df4a9=_0x27dfb1,_0x556955,_0xeee9be;if(this[_0x2df4a9(0x19d)])return this['_WebSocketClass'];let _0x5740c6;if(this[_0x2df4a9(0xf3)]||this[_0x2df4a9(0x106)])_0x5740c6=this[_0x2df4a9(0x165)][_0x2df4a9(0x129)];else{if((_0x556955=this[_0x2df4a9(0x165)]['process'])!=null&&_0x556955[_0x2df4a9(0x13d)])_0x5740c6=(_0xeee9be=this[_0x2df4a9(0x165)][_0x2df4a9(0xf4)])==null?void 0x0:_0xeee9be[_0x2df4a9(0x13d)];else try{let _0x59a7a1=await import(_0x2df4a9(0x1a8));_0x5740c6=(await import((await import(_0x2df4a9(0x16b)))[_0x2df4a9(0xbf)](_0x59a7a1['join'](this[_0x2df4a9(0xed)],'ws/index.js'))[_0x2df4a9(0xfc)]()))['default'];}catch{try{_0x5740c6=require(require(_0x2df4a9(0x1a8))[_0x2df4a9(0x102)](this[_0x2df4a9(0xed)],'ws'));}catch{throw new Error(_0x2df4a9(0xff));}}}return this[_0x2df4a9(0x19d)]=_0x5740c6,_0x5740c6;}[_0x27dfb1(0x157)](){var _0x4a90a8=_0x27dfb1;this[_0x4a90a8(0x13b)]||this['_connected']||this[_0x4a90a8(0x14d)]>=this[_0x4a90a8(0x188)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x4a90a8(0x13b)]=!0x0,this[_0x4a90a8(0x14d)]++,this[_0x4a90a8(0x113)]=new Promise((_0x5ee4cc,_0x31bcea)=>{var _0x3aaf5d=_0x4a90a8;this[_0x3aaf5d(0x11c)]()[_0x3aaf5d(0x118)](_0x262042=>{var _0x5134c8=_0x3aaf5d;let _0x1d45ef=new _0x262042(_0x5134c8(0xd7)+(!this['_inBrowser']&&this[_0x5134c8(0x121)]?_0x5134c8(0x15d):this[_0x5134c8(0xcc)])+':'+this[_0x5134c8(0x147)]);_0x1d45ef[_0x5134c8(0x138)]=()=>{var _0x432278=_0x5134c8;this[_0x432278(0x162)]=!0x1,this[_0x432278(0x190)](_0x1d45ef),this[_0x432278(0x1a6)](),_0x31bcea(new Error(_0x432278(0x19f)));},_0x1d45ef['onopen']=()=>{var _0x2d3766=_0x5134c8;this[_0x2d3766(0xf3)]||_0x1d45ef[_0x2d3766(0xba)]&&_0x1d45ef['_socket'][_0x2d3766(0x141)]&&_0x1d45ef[_0x2d3766(0xba)]['unref'](),_0x5ee4cc(_0x1d45ef);},_0x1d45ef[_0x5134c8(0x175)]=()=>{var _0x36bd0f=_0x5134c8;this[_0x36bd0f(0xc9)]=!0x0,this[_0x36bd0f(0x190)](_0x1d45ef),this['_attemptToReconnectShortly']();},_0x1d45ef[_0x5134c8(0x126)]=_0x4d8eca=>{var _0x179a6b=_0x5134c8;try{if(!(_0x4d8eca!=null&&_0x4d8eca[_0x179a6b(0x18c)])||!this['eventReceivedCallback'])return;let _0x39ae2b=JSON[_0x179a6b(0xc7)](_0x4d8eca[_0x179a6b(0x18c)]);this[_0x179a6b(0x15b)](_0x39ae2b['method'],_0x39ae2b['args'],this['global'],this[_0x179a6b(0xf3)]);}catch{}};})[_0x3aaf5d(0x118)](_0x5a8913=>(this['_connected']=!0x0,this['_connecting']=!0x1,this[_0x3aaf5d(0xc9)]=!0x1,this[_0x3aaf5d(0x162)]=!0x0,this[_0x3aaf5d(0x14d)]=0x0,_0x5a8913))[_0x3aaf5d(0x10a)](_0x2831fc=>(this[_0x3aaf5d(0x11f)]=!0x1,this['_connecting']=!0x1,console[_0x3aaf5d(0x128)](_0x3aaf5d(0xbe)+this[_0x3aaf5d(0x1a2)]),_0x31bcea(new Error(_0x3aaf5d(0x198)+(_0x2831fc&&_0x2831fc['message'])))));}));}[_0x27dfb1(0x190)](_0xc0a794){var _0x84c229=_0x27dfb1;this['_connected']=!0x1,this[_0x84c229(0x13b)]=!0x1;try{_0xc0a794[_0x84c229(0x175)]=null,_0xc0a794[_0x84c229(0x138)]=null,_0xc0a794['onopen']=null;}catch{}try{_0xc0a794[_0x84c229(0x146)]<0x2&&_0xc0a794[_0x84c229(0x1a4)]();}catch{}}[_0x27dfb1(0x1a6)](){var _0x2763ee=_0x27dfb1;clearTimeout(this[_0x2763ee(0xc1)]),!(this['_connectAttemptCount']>=this[_0x2763ee(0x188)])&&(this[_0x2763ee(0xc1)]=setTimeout(()=>{var _0x27daee=_0x2763ee,_0x2450a1;this[_0x27daee(0x11f)]||this[_0x27daee(0x13b)]||(this[_0x27daee(0x157)](),(_0x2450a1=this[_0x27daee(0x113)])==null||_0x2450a1[_0x27daee(0x10a)](()=>this[_0x27daee(0x1a6)]()));},0x1f4),this[_0x2763ee(0xc1)][_0x2763ee(0x141)]&&this['_reconnectTimeout'][_0x2763ee(0x141)]());}async[_0x27dfb1(0x182)](_0x1419ca){var _0x5dce81=_0x27dfb1;try{if(!this[_0x5dce81(0x162)])return;this[_0x5dce81(0xc9)]&&this[_0x5dce81(0x157)](),(await this[_0x5dce81(0x113)])[_0x5dce81(0x182)](JSON['stringify'](_0x1419ca));}catch(_0x28cde3){console['warn'](this[_0x5dce81(0x140)]+':\\x20'+(_0x28cde3&&_0x28cde3[_0x5dce81(0xe3)])),this[_0x5dce81(0x162)]=!0x1,this[_0x5dce81(0x1a6)]();}}};function q(_0x218963,_0x31d0e7,_0x539f3a,_0x1593f9,_0x3dbf6d,_0x4b5d4a,_0xf03e5d,_0x150d67=ie){var _0x31cd87=_0x27dfb1;let _0x58aaa6=_0x539f3a[_0x31cd87(0xd9)](',')[_0x31cd87(0x12c)](_0x1ff0b9=>{var _0x4f50f1=_0x31cd87,_0x4ae7b1,_0x1095f0,_0x46880c,_0xcdff80;try{if(!_0x218963[_0x4f50f1(0x18b)]){let _0xe84c04=((_0x1095f0=(_0x4ae7b1=_0x218963['process'])==null?void 0x0:_0x4ae7b1['versions'])==null?void 0x0:_0x1095f0[_0x4f50f1(0xd6)])||((_0xcdff80=(_0x46880c=_0x218963[_0x4f50f1(0xf4)])==null?void 0x0:_0x46880c[_0x4f50f1(0xe0)])==null?void 0x0:_0xcdff80['NEXT_RUNTIME'])===_0x4f50f1(0x169);(_0x3dbf6d==='next.js'||_0x3dbf6d===_0x4f50f1(0xd5)||_0x3dbf6d==='astro'||_0x3dbf6d===_0x4f50f1(0xef))&&(_0x3dbf6d+=_0xe84c04?_0x4f50f1(0x123):_0x4f50f1(0xc2)),_0x218963['_console_ninja_session']={'id':+new Date(),'tool':_0x3dbf6d},_0xf03e5d&&_0x3dbf6d&&!_0xe84c04&&console['log'](_0x4f50f1(0x197)+(_0x3dbf6d['charAt'](0x0)[_0x4f50f1(0xf8)]()+_0x3dbf6d[_0x4f50f1(0x16f)](0x1))+',',_0x4f50f1(0x19a),_0x4f50f1(0xdf));}let _0x1b1af7=new Z(_0x218963,_0x31d0e7,_0x1ff0b9,_0x1593f9,_0x4b5d4a,_0x150d67);return _0x1b1af7[_0x4f50f1(0x182)]['bind'](_0x1b1af7);}catch(_0x292cb6){return console[_0x4f50f1(0x128)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x292cb6&&_0x292cb6[_0x4f50f1(0xe3)]),()=>{};}});return _0x3d573e=>_0x58aaa6['forEach'](_0x15d9ab=>_0x15d9ab(_0x3d573e));}function ie(_0x21b6e8,_0x162d3d,_0x4cdf39,_0x39ba6c){var _0x3eb6b6=_0x27dfb1;_0x39ba6c&&_0x21b6e8===_0x3eb6b6(0x119)&&_0x4cdf39[_0x3eb6b6(0xd4)]['reload']();}function _0x2eb0(_0x58f8a5,_0x5d3830){var _0x5b34d8=_0x5b34();return _0x2eb0=function(_0x2eb0a8,_0x290247){_0x2eb0a8=_0x2eb0a8-0xb2;var _0x1d1607=_0x5b34d8[_0x2eb0a8];return _0x1d1607;},_0x2eb0(_0x58f8a5,_0x5d3830);}function _0x5b34(){var _0x25ff11=['_inNextEdge','stack','_isNegativeZero','[object\\x20Date]','catch','_processTreeNodeResult','_setNodeId','number','HTMLAllCollection','getOwnPropertySymbols','285lGWtQI','next.js','setter','_ws','set','rootExpression','level','null','then','reload','_addLoadNode','_treeNodePropertiesAfterFullValue','getWebSocketClass','autoExpandMaxDepth','Set','_connected','date','dockerizedApp','performance','\\x20server','_p_','disabledLog','onmessage','props','warn','WebSocket','funcName','root_exp_id','map','log','_setNodeExpandableState','isExpressionToEvaluate','_numberRegExp','match','_ninjaIgnoreNextError','_objectToString','toLowerCase','_addProperty','expId','hits','onerror','_regExpToString','strLength','_connecting','boolean','_WebSocket','4545200mbnUAx','_isSet','_sendErrorMessage','unref','sortProps','indexOf','index','positiveInfinity','readyState','port','19748QCYiWf','Boolean','getOwnPropertyDescriptor','_console_ninja','_isMap','_connectAttemptCount','prototype','serialize','...','String','nan','Error','_setNodePermissions','[object\\x20BigInt]','push','_connectToHostNow','910TdjKkr','stringify','_p_length','eventReceivedCallback','autoExpandLimit','gateway.docker.internal','_blacklistedProperty','1','forEach','args','_allowedToSend','array','_p_name','global','getter',"/Users/lluispujadas/.vscode/extensions/wallabyjs.console-ninja-1.0.367/node_modules",'cappedProps','edge','https://tinyurl.com/37x8b79t','url','now','NEXT_RUNTIME','versions','substr','bigint','valueOf','trace','NEGATIVE_INFINITY','Map','onclose','_isPrimitiveType','string','object','899040jBaXOp','pop','slice','_getOwnPropertyNames','endsWith','call','[object\\x20Map]','negativeInfinity','elements','send','64437','RegExp','capped','allStrLength','timeStamp','_maxConnectAttemptCount','reduceLimits','_property','_console_ninja_session','data','cappedElements','test','_sortProps','_disposeWebsocket','unshift','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_getOwnPropertySymbols','16650BnsXPc','1.0.0','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','parent','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','origin','unknown','_WebSocketClass','autoExpandPreviousObjects','logger\\x20websocket\\x20error','POSITIVE_INFINITY','undefined','_webSocketErrorDocsLink','negativeZero','close','stackTraceLimit','_attemptToReconnectShortly','[object\\x20Set]','path','_addObjectProperty','totalStrLength','Symbol','[object\\x20Array]','7XAYoxw','_propertyName','','perf_hooks','_isUndefined','706iFWgqO','','_cleanNode','_socket','function','_HTMLAllCollection','363416eblmct','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','pathToFileURL','hostname','_reconnectTimeout','\\x20browser',["localhost","127.0.0.1","example.cypress.io","MacBook-Pro.local","192.168.1.44"],'elapsed','name','type','parse','current','_allowedToConnectOnSend','_capIfString','autoExpand','host','create','Number','includes','_setNodeLabel','_dateToString','autoExpandPropertyCount','startsWith','location','remix','node','ws://','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','split','length','fromCharCode','console','_keyStrRegExp','error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','env','_isPrimitiveWrapperType','depth','message','some','replace','_type','_additionalMetadata','hasOwnProperty','_setNodeQueryPath','value','time','_Symbol','nodeModules','root_exp','angular','_undefined','enumerable','symbol','_inBrowser','process','coverage','1242wExnaH','count','toUpperCase','_addFunctionsNode','_getOwnPropertyDescriptor','100428WmJzlv','toString','_treeNodePropertiesBeforeFullValue','concat','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','hrtime','getOwnPropertyNames','join','__es'+'Module','noFunctions','_isArray'];_0x5b34=function(){return _0x25ff11;};return _0x5b34();}function B(_0x3d0f02){var _0x139fcf=_0x27dfb1,_0x5cbde8,_0x54f09f;let _0x3dee93=function(_0x53cca7,_0x17266b){return _0x17266b-_0x53cca7;},_0x47e551;if(_0x3d0f02[_0x139fcf(0x122)])_0x47e551=function(){var _0x5bf4b8=_0x139fcf;return _0x3d0f02[_0x5bf4b8(0x122)]['now']();};else{if(_0x3d0f02[_0x139fcf(0xf4)]&&_0x3d0f02[_0x139fcf(0xf4)][_0x139fcf(0x100)]&&((_0x54f09f=(_0x5cbde8=_0x3d0f02[_0x139fcf(0xf4)])==null?void 0x0:_0x5cbde8[_0x139fcf(0xe0)])==null?void 0x0:_0x54f09f[_0x139fcf(0x16d)])!=='edge')_0x47e551=function(){var _0x24d3fa=_0x139fcf;return _0x3d0f02[_0x24d3fa(0xf4)][_0x24d3fa(0x100)]();},_0x3dee93=function(_0x17d41b,_0x247276){return 0x3e8*(_0x247276[0x0]-_0x17d41b[0x0])+(_0x247276[0x1]-_0x17d41b[0x1])/0xf4240;};else try{let {performance:_0x5d3286}=require(_0x139fcf(0xb5));_0x47e551=function(){var _0x310db2=_0x139fcf;return _0x5d3286[_0x310db2(0x16c)]();};}catch{_0x47e551=function(){return+new Date();};}}return{'elapsed':_0x3dee93,'timeStamp':_0x47e551,'now':()=>Date[_0x139fcf(0x16c)]()};}function H(_0x42dcc5,_0x30dfcb,_0x1ed495){var _0x54b50b=_0x27dfb1,_0x2cd794,_0xdc081d,_0x26c154,_0x1430f5,_0x54b047;if(_0x42dcc5[_0x54b50b(0x193)]!==void 0x0)return _0x42dcc5[_0x54b50b(0x193)];let _0x128378=((_0xdc081d=(_0x2cd794=_0x42dcc5[_0x54b50b(0xf4)])==null?void 0x0:_0x2cd794[_0x54b50b(0x16e)])==null?void 0x0:_0xdc081d['node'])||((_0x1430f5=(_0x26c154=_0x42dcc5[_0x54b50b(0xf4)])==null?void 0x0:_0x26c154[_0x54b50b(0xe0)])==null?void 0x0:_0x1430f5['NEXT_RUNTIME'])==='edge';function _0x4f0bb3(_0x43a491){var _0x4d72ad=_0x54b50b;if(_0x43a491[_0x4d72ad(0xd3)]('/')&&_0x43a491[_0x4d72ad(0x17d)]('/')){let _0x32b5d1=new RegExp(_0x43a491[_0x4d72ad(0x17b)](0x1,-0x1));return _0x3821f8=>_0x32b5d1['test'](_0x3821f8);}else{if(_0x43a491[_0x4d72ad(0xcf)]('*')||_0x43a491[_0x4d72ad(0xcf)]('?')){let _0x2a0abb=new RegExp('^'+_0x43a491[_0x4d72ad(0xe5)](/\\./g,String['fromCharCode'](0x5c)+'.')[_0x4d72ad(0xe5)](/\\*/g,'.*')[_0x4d72ad(0xe5)](/\\?/g,'.')+String[_0x4d72ad(0xdb)](0x24));return _0x38f3b0=>_0x2a0abb['test'](_0x38f3b0);}else return _0x28ddba=>_0x28ddba===_0x43a491;}}let _0xf70c1e=_0x30dfcb[_0x54b50b(0x12c)](_0x4f0bb3);return _0x42dcc5[_0x54b50b(0x193)]=_0x128378||!_0x30dfcb,!_0x42dcc5[_0x54b50b(0x193)]&&((_0x54b047=_0x42dcc5[_0x54b50b(0xd4)])==null?void 0x0:_0x54b047[_0x54b50b(0xc0)])&&(_0x42dcc5[_0x54b50b(0x193)]=_0xf70c1e[_0x54b50b(0xe4)](_0x4f6e85=>_0x4f6e85(_0x42dcc5[_0x54b50b(0xd4)][_0x54b50b(0xc0)]))),_0x42dcc5[_0x54b50b(0x193)];}function X(_0x58390b,_0xde0dd7,_0x601595,_0x37673f){var _0x3e2cd3=_0x27dfb1;_0x58390b=_0x58390b,_0xde0dd7=_0xde0dd7,_0x601595=_0x601595,_0x37673f=_0x37673f;let _0x29b02e=B(_0x58390b),_0x2c959d=_0x29b02e[_0x3e2cd3(0xc4)],_0x302382=_0x29b02e[_0x3e2cd3(0x187)];class _0x7af3d3{constructor(){var _0x31add1=_0x3e2cd3;this[_0x31add1(0xdd)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x31add1(0x130)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x58390b[_0x31add1(0x1a1)],this[_0x31add1(0xbc)]=_0x58390b['HTMLAllCollection'],this[_0x31add1(0xfa)]=Object[_0x31add1(0x14a)],this['_getOwnPropertyNames']=Object[_0x31add1(0x101)],this[_0x31add1(0xec)]=_0x58390b[_0x31add1(0x1ab)],this[_0x31add1(0x139)]=RegExp['prototype'][_0x31add1(0xfc)],this[_0x31add1(0xd1)]=Date[_0x31add1(0x14e)][_0x31add1(0xfc)];}[_0x3e2cd3(0x14f)](_0x484ef4,_0x3dc365,_0x31438c,_0x5ee9df){var _0x229aa9=_0x3e2cd3,_0x59a4b4=this,_0x4affe9=_0x31438c['autoExpand'];function _0x46e6a9(_0x3f8690,_0x4d5cca,_0x14df34){var _0x4d018d=_0x2eb0;_0x4d5cca['type']='unknown',_0x4d5cca['error']=_0x3f8690[_0x4d018d(0xe3)],_0x49b09f=_0x14df34['node'][_0x4d018d(0xc8)],_0x14df34[_0x4d018d(0xd6)]['current']=_0x4d5cca,_0x59a4b4[_0x4d018d(0xfd)](_0x4d5cca,_0x14df34);}try{_0x31438c[_0x229aa9(0x116)]++,_0x31438c['autoExpand']&&_0x31438c['autoExpandPreviousObjects'][_0x229aa9(0x156)](_0x3dc365);var _0x3555b1,_0x30547f,_0x418379,_0x1b663c,_0x295735=[],_0x169520=[],_0x230785,_0x90ea4b=this[_0x229aa9(0xe6)](_0x3dc365),_0x209fbe=_0x90ea4b===_0x229aa9(0x163),_0x2cb8f3=!0x1,_0x516521=_0x90ea4b===_0x229aa9(0xbb),_0x243648=this[_0x229aa9(0x176)](_0x90ea4b),_0x9a89ef=this[_0x229aa9(0xe1)](_0x90ea4b),_0x5aa68d=_0x243648||_0x9a89ef,_0x54cf96={},_0x34a778=0x0,_0x188f79=!0x1,_0x49b09f,_0x3374ce=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x31438c[_0x229aa9(0xe2)]){if(_0x209fbe){if(_0x30547f=_0x3dc365[_0x229aa9(0xda)],_0x30547f>_0x31438c[_0x229aa9(0x181)]){for(_0x418379=0x0,_0x1b663c=_0x31438c[_0x229aa9(0x181)],_0x3555b1=_0x418379;_0x3555b1<_0x1b663c;_0x3555b1++)_0x169520[_0x229aa9(0x156)](_0x59a4b4['_addProperty'](_0x295735,_0x3dc365,_0x90ea4b,_0x3555b1,_0x31438c));_0x484ef4[_0x229aa9(0x18d)]=!0x0;}else{for(_0x418379=0x0,_0x1b663c=_0x30547f,_0x3555b1=_0x418379;_0x3555b1<_0x1b663c;_0x3555b1++)_0x169520['push'](_0x59a4b4[_0x229aa9(0x135)](_0x295735,_0x3dc365,_0x90ea4b,_0x3555b1,_0x31438c));}_0x31438c['autoExpandPropertyCount']+=_0x169520['length'];}if(!(_0x90ea4b==='null'||_0x90ea4b===_0x229aa9(0x1a1))&&!_0x243648&&_0x90ea4b!==_0x229aa9(0x151)&&_0x90ea4b!=='Buffer'&&_0x90ea4b!==_0x229aa9(0x170)){var _0x6a926e=_0x5ee9df['props']||_0x31438c[_0x229aa9(0x127)];if(this[_0x229aa9(0x13f)](_0x3dc365)?(_0x3555b1=0x0,_0x3dc365[_0x229aa9(0x160)](function(_0x4aec48){var _0x1e7eab=_0x229aa9;if(_0x34a778++,_0x31438c[_0x1e7eab(0xd2)]++,_0x34a778>_0x6a926e){_0x188f79=!0x0;return;}if(!_0x31438c[_0x1e7eab(0x12f)]&&_0x31438c[_0x1e7eab(0xcb)]&&_0x31438c[_0x1e7eab(0xd2)]>_0x31438c[_0x1e7eab(0x15c)]){_0x188f79=!0x0;return;}_0x169520['push'](_0x59a4b4[_0x1e7eab(0x135)](_0x295735,_0x3dc365,'Set',_0x3555b1++,_0x31438c,function(_0x2767d6){return function(){return _0x2767d6;};}(_0x4aec48)));})):this[_0x229aa9(0x14c)](_0x3dc365)&&_0x3dc365[_0x229aa9(0x160)](function(_0x4e4910,_0x4a0948){var _0x5c8782=_0x229aa9;if(_0x34a778++,_0x31438c['autoExpandPropertyCount']++,_0x34a778>_0x6a926e){_0x188f79=!0x0;return;}if(!_0x31438c[_0x5c8782(0x12f)]&&_0x31438c[_0x5c8782(0xcb)]&&_0x31438c[_0x5c8782(0xd2)]>_0x31438c[_0x5c8782(0x15c)]){_0x188f79=!0x0;return;}var _0x2957aa=_0x4a0948[_0x5c8782(0xfc)]();_0x2957aa[_0x5c8782(0xda)]>0x64&&(_0x2957aa=_0x2957aa[_0x5c8782(0x17b)](0x0,0x64)+_0x5c8782(0x150)),_0x169520[_0x5c8782(0x156)](_0x59a4b4[_0x5c8782(0x135)](_0x295735,_0x3dc365,_0x5c8782(0x174),_0x2957aa,_0x31438c,function(_0x4c8318){return function(){return _0x4c8318;};}(_0x4e4910)));}),!_0x2cb8f3){try{for(_0x230785 in _0x3dc365)if(!(_0x209fbe&&_0x3374ce['test'](_0x230785))&&!this['_blacklistedProperty'](_0x3dc365,_0x230785,_0x31438c)){if(_0x34a778++,_0x31438c[_0x229aa9(0xd2)]++,_0x34a778>_0x6a926e){_0x188f79=!0x0;break;}if(!_0x31438c[_0x229aa9(0x12f)]&&_0x31438c[_0x229aa9(0xcb)]&&_0x31438c[_0x229aa9(0xd2)]>_0x31438c[_0x229aa9(0x15c)]){_0x188f79=!0x0;break;}_0x169520['push'](_0x59a4b4[_0x229aa9(0x1a9)](_0x295735,_0x54cf96,_0x3dc365,_0x90ea4b,_0x230785,_0x31438c));}}catch{}if(_0x54cf96[_0x229aa9(0x15a)]=!0x0,_0x516521&&(_0x54cf96[_0x229aa9(0x164)]=!0x0),!_0x188f79){var _0x3129e7=[][_0x229aa9(0xfe)](this[_0x229aa9(0x17c)](_0x3dc365))[_0x229aa9(0xfe)](this[_0x229aa9(0x194)](_0x3dc365));for(_0x3555b1=0x0,_0x30547f=_0x3129e7[_0x229aa9(0xda)];_0x3555b1<_0x30547f;_0x3555b1++)if(_0x230785=_0x3129e7[_0x3555b1],!(_0x209fbe&&_0x3374ce[_0x229aa9(0x18e)](_0x230785[_0x229aa9(0xfc)]()))&&!this[_0x229aa9(0x15e)](_0x3dc365,_0x230785,_0x31438c)&&!_0x54cf96[_0x229aa9(0x124)+_0x230785[_0x229aa9(0xfc)]()]){if(_0x34a778++,_0x31438c[_0x229aa9(0xd2)]++,_0x34a778>_0x6a926e){_0x188f79=!0x0;break;}if(!_0x31438c[_0x229aa9(0x12f)]&&_0x31438c['autoExpand']&&_0x31438c[_0x229aa9(0xd2)]>_0x31438c['autoExpandLimit']){_0x188f79=!0x0;break;}_0x169520[_0x229aa9(0x156)](_0x59a4b4[_0x229aa9(0x1a9)](_0x295735,_0x54cf96,_0x3dc365,_0x90ea4b,_0x230785,_0x31438c));}}}}}if(_0x484ef4[_0x229aa9(0xc6)]=_0x90ea4b,_0x5aa68d?(_0x484ef4['value']=_0x3dc365[_0x229aa9(0x171)](),this['_capIfString'](_0x90ea4b,_0x484ef4,_0x31438c,_0x5ee9df)):_0x90ea4b===_0x229aa9(0x120)?_0x484ef4['value']=this['_dateToString'][_0x229aa9(0x17e)](_0x3dc365):_0x90ea4b===_0x229aa9(0x170)?_0x484ef4[_0x229aa9(0xea)]=_0x3dc365[_0x229aa9(0xfc)]():_0x90ea4b===_0x229aa9(0x184)?_0x484ef4[_0x229aa9(0xea)]=this['_regExpToString'][_0x229aa9(0x17e)](_0x3dc365):_0x90ea4b===_0x229aa9(0xf2)&&this[_0x229aa9(0xec)]?_0x484ef4[_0x229aa9(0xea)]=this[_0x229aa9(0xec)]['prototype'][_0x229aa9(0xfc)]['call'](_0x3dc365):!_0x31438c[_0x229aa9(0xe2)]&&!(_0x90ea4b===_0x229aa9(0x117)||_0x90ea4b==='undefined')&&(delete _0x484ef4[_0x229aa9(0xea)],_0x484ef4[_0x229aa9(0x185)]=!0x0),_0x188f79&&(_0x484ef4[_0x229aa9(0x168)]=!0x0),_0x49b09f=_0x31438c[_0x229aa9(0xd6)]['current'],_0x31438c[_0x229aa9(0xd6)][_0x229aa9(0xc8)]=_0x484ef4,this[_0x229aa9(0xfd)](_0x484ef4,_0x31438c),_0x169520[_0x229aa9(0xda)]){for(_0x3555b1=0x0,_0x30547f=_0x169520[_0x229aa9(0xda)];_0x3555b1<_0x30547f;_0x3555b1++)_0x169520[_0x3555b1](_0x3555b1);}_0x295735[_0x229aa9(0xda)]&&(_0x484ef4[_0x229aa9(0x127)]=_0x295735);}catch(_0x5e8abc){_0x46e6a9(_0x5e8abc,_0x484ef4,_0x31438c);}return this['_additionalMetadata'](_0x3dc365,_0x484ef4),this[_0x229aa9(0x11b)](_0x484ef4,_0x31438c),_0x31438c['node']['current']=_0x49b09f,_0x31438c['level']--,_0x31438c[_0x229aa9(0xcb)]=_0x4affe9,_0x31438c[_0x229aa9(0xcb)]&&_0x31438c[_0x229aa9(0x19e)][_0x229aa9(0x17a)](),_0x484ef4;}[_0x3e2cd3(0x194)](_0x247dc5){var _0x1376f8=_0x3e2cd3;return Object[_0x1376f8(0x10f)]?Object[_0x1376f8(0x10f)](_0x247dc5):[];}[_0x3e2cd3(0x13f)](_0xebfc77){var _0x3c8aaa=_0x3e2cd3;return!!(_0xebfc77&&_0x58390b['Set']&&this['_objectToString'](_0xebfc77)===_0x3c8aaa(0x1a7)&&_0xebfc77['forEach']);}[_0x3e2cd3(0x15e)](_0x449227,_0x43baa8,_0x4bfa8e){var _0x11bb4f=_0x3e2cd3;return _0x4bfa8e[_0x11bb4f(0x104)]?typeof _0x449227[_0x43baa8]==_0x11bb4f(0xbb):!0x1;}[_0x3e2cd3(0xe6)](_0x1a6407){var _0x22fad0=_0x3e2cd3,_0x3aba35='';return _0x3aba35=typeof _0x1a6407,_0x3aba35===_0x22fad0(0x178)?this[_0x22fad0(0x133)](_0x1a6407)==='[object\\x20Array]'?_0x3aba35='array':this[_0x22fad0(0x133)](_0x1a6407)===_0x22fad0(0x109)?_0x3aba35=_0x22fad0(0x120):this[_0x22fad0(0x133)](_0x1a6407)===_0x22fad0(0x155)?_0x3aba35=_0x22fad0(0x170):_0x1a6407===null?_0x3aba35=_0x22fad0(0x117):_0x1a6407['constructor']&&(_0x3aba35=_0x1a6407['constructor'][_0x22fad0(0xc5)]||_0x3aba35):_0x3aba35==='undefined'&&this['_HTMLAllCollection']&&_0x1a6407 instanceof this[_0x22fad0(0xbc)]&&(_0x3aba35=_0x22fad0(0x10e)),_0x3aba35;}['_objectToString'](_0x258a5c){var _0x498e75=_0x3e2cd3;return Object['prototype'][_0x498e75(0xfc)][_0x498e75(0x17e)](_0x258a5c);}['_isPrimitiveType'](_0x516727){var _0x5bf185=_0x3e2cd3;return _0x516727===_0x5bf185(0x13c)||_0x516727===_0x5bf185(0x177)||_0x516727===_0x5bf185(0x10d);}['_isPrimitiveWrapperType'](_0x3e9b0a){var _0x4c547a=_0x3e2cd3;return _0x3e9b0a===_0x4c547a(0x149)||_0x3e9b0a===_0x4c547a(0x151)||_0x3e9b0a===_0x4c547a(0xce);}[_0x3e2cd3(0x135)](_0xc0bae7,_0x18507c,_0x1575a9,_0x54a40e,_0x9087c3,_0xf1c372){var _0x267ec9=this;return function(_0x5b8336){var _0x388447=_0x2eb0,_0x4513de=_0x9087c3[_0x388447(0xd6)][_0x388447(0xc8)],_0x23a220=_0x9087c3['node'][_0x388447(0x144)],_0x3e263d=_0x9087c3['node'][_0x388447(0x199)];_0x9087c3[_0x388447(0xd6)][_0x388447(0x199)]=_0x4513de,_0x9087c3[_0x388447(0xd6)][_0x388447(0x144)]=typeof _0x54a40e=='number'?_0x54a40e:_0x5b8336,_0xc0bae7[_0x388447(0x156)](_0x267ec9[_0x388447(0x18a)](_0x18507c,_0x1575a9,_0x54a40e,_0x9087c3,_0xf1c372)),_0x9087c3[_0x388447(0xd6)]['parent']=_0x3e263d,_0x9087c3[_0x388447(0xd6)][_0x388447(0x144)]=_0x23a220;};}[_0x3e2cd3(0x1a9)](_0x52b1ca,_0x21995a,_0x296198,_0x459567,_0xd965f8,_0x31094d,_0x34c82e){var _0x149c90=_0x3e2cd3,_0x496032=this;return _0x21995a['_p_'+_0xd965f8[_0x149c90(0xfc)]()]=!0x0,function(_0x770d6e){var _0x42686d=_0x149c90,_0x1a01b6=_0x31094d[_0x42686d(0xd6)][_0x42686d(0xc8)],_0x16eb05=_0x31094d[_0x42686d(0xd6)][_0x42686d(0x144)],_0xc93d48=_0x31094d[_0x42686d(0xd6)][_0x42686d(0x199)];_0x31094d['node'][_0x42686d(0x199)]=_0x1a01b6,_0x31094d[_0x42686d(0xd6)]['index']=_0x770d6e,_0x52b1ca[_0x42686d(0x156)](_0x496032['_property'](_0x296198,_0x459567,_0xd965f8,_0x31094d,_0x34c82e)),_0x31094d[_0x42686d(0xd6)][_0x42686d(0x199)]=_0xc93d48,_0x31094d[_0x42686d(0xd6)][_0x42686d(0x144)]=_0x16eb05;};}[_0x3e2cd3(0x18a)](_0x4ef25b,_0x3b29bb,_0xfdab28,_0x2a72ad,_0xe0783c){var _0x10750d=_0x3e2cd3,_0x39f07b=this;_0xe0783c||(_0xe0783c=function(_0x5d322e,_0x21f6bc){return _0x5d322e[_0x21f6bc];});var _0x45d640=_0xfdab28[_0x10750d(0xfc)](),_0xbc2938=_0x2a72ad['expressionsToEvaluate']||{},_0x262794=_0x2a72ad['depth'],_0x234435=_0x2a72ad['isExpressionToEvaluate'];try{var _0x30532a=this[_0x10750d(0x14c)](_0x4ef25b),_0x1a8fc9=_0x45d640;_0x30532a&&_0x1a8fc9[0x0]==='\\x27'&&(_0x1a8fc9=_0x1a8fc9[_0x10750d(0x16f)](0x1,_0x1a8fc9[_0x10750d(0xda)]-0x2));var _0x27f80b=_0x2a72ad['expressionsToEvaluate']=_0xbc2938[_0x10750d(0x124)+_0x1a8fc9];_0x27f80b&&(_0x2a72ad[_0x10750d(0xe2)]=_0x2a72ad[_0x10750d(0xe2)]+0x1),_0x2a72ad[_0x10750d(0x12f)]=!!_0x27f80b;var _0xa473b8=typeof _0xfdab28=='symbol',_0x52380a={'name':_0xa473b8||_0x30532a?_0x45d640:this[_0x10750d(0xb3)](_0x45d640)};if(_0xa473b8&&(_0x52380a['symbol']=!0x0),!(_0x3b29bb===_0x10750d(0x163)||_0x3b29bb===_0x10750d(0x153))){var _0x368f46=this[_0x10750d(0xfa)](_0x4ef25b,_0xfdab28);if(_0x368f46&&(_0x368f46[_0x10750d(0x114)]&&(_0x52380a[_0x10750d(0x112)]=!0x0),_0x368f46['get']&&!_0x27f80b&&!_0x2a72ad['resolveGetters']))return _0x52380a[_0x10750d(0x166)]=!0x0,this['_processTreeNodeResult'](_0x52380a,_0x2a72ad),_0x52380a;}var _0x486ca2;try{_0x486ca2=_0xe0783c(_0x4ef25b,_0xfdab28);}catch(_0x5e2001){return _0x52380a={'name':_0x45d640,'type':'unknown','error':_0x5e2001[_0x10750d(0xe3)]},this['_processTreeNodeResult'](_0x52380a,_0x2a72ad),_0x52380a;}var _0x1a3e3a=this[_0x10750d(0xe6)](_0x486ca2),_0x1a413b=this[_0x10750d(0x176)](_0x1a3e3a);if(_0x52380a['type']=_0x1a3e3a,_0x1a413b)this[_0x10750d(0x10b)](_0x52380a,_0x2a72ad,_0x486ca2,function(){var _0x42f37f=_0x10750d;_0x52380a[_0x42f37f(0xea)]=_0x486ca2['valueOf'](),!_0x27f80b&&_0x39f07b[_0x42f37f(0xca)](_0x1a3e3a,_0x52380a,_0x2a72ad,{});});else{var _0x237837=_0x2a72ad[_0x10750d(0xcb)]&&_0x2a72ad['level']<_0x2a72ad['autoExpandMaxDepth']&&_0x2a72ad[_0x10750d(0x19e)][_0x10750d(0x143)](_0x486ca2)<0x0&&_0x1a3e3a!==_0x10750d(0xbb)&&_0x2a72ad[_0x10750d(0xd2)]<_0x2a72ad[_0x10750d(0x15c)];_0x237837||_0x2a72ad[_0x10750d(0x116)]<_0x262794||_0x27f80b?(this[_0x10750d(0x14f)](_0x52380a,_0x486ca2,_0x2a72ad,_0x27f80b||{}),this[_0x10750d(0xe7)](_0x486ca2,_0x52380a)):this[_0x10750d(0x10b)](_0x52380a,_0x2a72ad,_0x486ca2,function(){var _0x39e7eb=_0x10750d;_0x1a3e3a===_0x39e7eb(0x117)||_0x1a3e3a===_0x39e7eb(0x1a1)||(delete _0x52380a[_0x39e7eb(0xea)],_0x52380a[_0x39e7eb(0x185)]=!0x0);});}return _0x52380a;}finally{_0x2a72ad['expressionsToEvaluate']=_0xbc2938,_0x2a72ad['depth']=_0x262794,_0x2a72ad[_0x10750d(0x12f)]=_0x234435;}}['_capIfString'](_0xfdb64c,_0x385e2a,_0x10fa62,_0x3187ba){var _0x32f434=_0x3e2cd3,_0x298604=_0x3187ba[_0x32f434(0x13a)]||_0x10fa62['strLength'];if((_0xfdb64c==='string'||_0xfdb64c===_0x32f434(0x151))&&_0x385e2a['value']){let _0x378f39=_0x385e2a[_0x32f434(0xea)][_0x32f434(0xda)];_0x10fa62['allStrLength']+=_0x378f39,_0x10fa62[_0x32f434(0x186)]>_0x10fa62['totalStrLength']?(_0x385e2a[_0x32f434(0x185)]='',delete _0x385e2a[_0x32f434(0xea)]):_0x378f39>_0x298604&&(_0x385e2a[_0x32f434(0x185)]=_0x385e2a[_0x32f434(0xea)][_0x32f434(0x16f)](0x0,_0x298604),delete _0x385e2a[_0x32f434(0xea)]);}}['_isMap'](_0xa5175){var _0x3bb613=_0x3e2cd3;return!!(_0xa5175&&_0x58390b[_0x3bb613(0x174)]&&this[_0x3bb613(0x133)](_0xa5175)===_0x3bb613(0x17f)&&_0xa5175[_0x3bb613(0x160)]);}[_0x3e2cd3(0xb3)](_0x536c02){var _0x10251a=_0x3e2cd3;if(_0x536c02[_0x10251a(0x131)](/^\\d+$/))return _0x536c02;var _0xd6950;try{_0xd6950=JSON[_0x10251a(0x159)](''+_0x536c02);}catch{_0xd6950='\\x22'+this[_0x10251a(0x133)](_0x536c02)+'\\x22';}return _0xd6950[_0x10251a(0x131)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0xd6950=_0xd6950[_0x10251a(0x16f)](0x1,_0xd6950['length']-0x2):_0xd6950=_0xd6950[_0x10251a(0xe5)](/'/g,'\\x5c\\x27')[_0x10251a(0xe5)](/\\\\"/g,'\\x22')[_0x10251a(0xe5)](/(^"|"$)/g,'\\x27'),_0xd6950;}[_0x3e2cd3(0x10b)](_0x3dc083,_0x308734,_0x3296fb,_0x1d642f){var _0x354482=_0x3e2cd3;this['_treeNodePropertiesBeforeFullValue'](_0x3dc083,_0x308734),_0x1d642f&&_0x1d642f(),this[_0x354482(0xe7)](_0x3296fb,_0x3dc083),this['_treeNodePropertiesAfterFullValue'](_0x3dc083,_0x308734);}[_0x3e2cd3(0xfd)](_0x1a0e1e,_0x1864b2){var _0x1513c2=_0x3e2cd3;this[_0x1513c2(0x10c)](_0x1a0e1e,_0x1864b2),this[_0x1513c2(0xe9)](_0x1a0e1e,_0x1864b2),this['_setNodeExpressionPath'](_0x1a0e1e,_0x1864b2),this[_0x1513c2(0x154)](_0x1a0e1e,_0x1864b2);}[_0x3e2cd3(0x10c)](_0x1f0f4a,_0x472368){}[_0x3e2cd3(0xe9)](_0x3e79bd,_0x2a3a37){}[_0x3e2cd3(0xd0)](_0x183c72,_0x1611b9){}[_0x3e2cd3(0xb6)](_0x147d69){var _0xdc3320=_0x3e2cd3;return _0x147d69===this[_0xdc3320(0xf0)];}['_treeNodePropertiesAfterFullValue'](_0x33a0b8,_0x4164bb){var _0x31b86a=_0x3e2cd3;this['_setNodeLabel'](_0x33a0b8,_0x4164bb),this[_0x31b86a(0x12e)](_0x33a0b8),_0x4164bb[_0x31b86a(0x142)]&&this[_0x31b86a(0x18f)](_0x33a0b8),this[_0x31b86a(0xf9)](_0x33a0b8,_0x4164bb),this[_0x31b86a(0x11a)](_0x33a0b8,_0x4164bb),this[_0x31b86a(0xb9)](_0x33a0b8);}[_0x3e2cd3(0xe7)](_0x2e3d98,_0x2e4e83){var _0x475706=_0x3e2cd3;let _0x2c4293;try{_0x58390b[_0x475706(0xdc)]&&(_0x2c4293=_0x58390b[_0x475706(0xdc)][_0x475706(0xde)],_0x58390b[_0x475706(0xdc)][_0x475706(0xde)]=function(){}),_0x2e3d98&&typeof _0x2e3d98[_0x475706(0xda)]==_0x475706(0x10d)&&(_0x2e4e83[_0x475706(0xda)]=_0x2e3d98[_0x475706(0xda)]);}catch{}finally{_0x2c4293&&(_0x58390b['console'][_0x475706(0xde)]=_0x2c4293);}if(_0x2e4e83[_0x475706(0xc6)]==='number'||_0x2e4e83[_0x475706(0xc6)]===_0x475706(0xce)){if(isNaN(_0x2e4e83[_0x475706(0xea)]))_0x2e4e83[_0x475706(0x152)]=!0x0,delete _0x2e4e83[_0x475706(0xea)];else switch(_0x2e4e83[_0x475706(0xea)]){case Number[_0x475706(0x1a0)]:_0x2e4e83[_0x475706(0x145)]=!0x0,delete _0x2e4e83[_0x475706(0xea)];break;case Number[_0x475706(0x173)]:_0x2e4e83[_0x475706(0x180)]=!0x0,delete _0x2e4e83[_0x475706(0xea)];break;case 0x0:this[_0x475706(0x108)](_0x2e4e83[_0x475706(0xea)])&&(_0x2e4e83[_0x475706(0x1a3)]=!0x0);break;}}else _0x2e4e83['type']===_0x475706(0xbb)&&typeof _0x2e3d98['name']==_0x475706(0x177)&&_0x2e3d98[_0x475706(0xc5)]&&_0x2e4e83[_0x475706(0xc5)]&&_0x2e3d98[_0x475706(0xc5)]!==_0x2e4e83[_0x475706(0xc5)]&&(_0x2e4e83[_0x475706(0x12a)]=_0x2e3d98[_0x475706(0xc5)]);}[_0x3e2cd3(0x108)](_0x105a6a){var _0x42381b=_0x3e2cd3;return 0x1/_0x105a6a===Number[_0x42381b(0x173)];}[_0x3e2cd3(0x18f)](_0x1e1ad0){var _0x477e8c=_0x3e2cd3;!_0x1e1ad0['props']||!_0x1e1ad0['props'][_0x477e8c(0xda)]||_0x1e1ad0[_0x477e8c(0xc6)]===_0x477e8c(0x163)||_0x1e1ad0[_0x477e8c(0xc6)]==='Map'||_0x1e1ad0[_0x477e8c(0xc6)]===_0x477e8c(0x11e)||_0x1e1ad0[_0x477e8c(0x127)]['sort'](function(_0x5d9a66,_0x1a1a6a){var _0x4f84bc=_0x477e8c,_0x5ea255=_0x5d9a66[_0x4f84bc(0xc5)][_0x4f84bc(0x134)](),_0x20a14a=_0x1a1a6a[_0x4f84bc(0xc5)][_0x4f84bc(0x134)]();return _0x5ea255<_0x20a14a?-0x1:_0x5ea255>_0x20a14a?0x1:0x0;});}[_0x3e2cd3(0xf9)](_0x138d77,_0x51576a){var _0x31928b=_0x3e2cd3;if(!(_0x51576a[_0x31928b(0x104)]||!_0x138d77['props']||!_0x138d77['props'][_0x31928b(0xda)])){for(var _0x45d512=[],_0x510640=[],_0x35743b=0x0,_0xc51ff4=_0x138d77[_0x31928b(0x127)][_0x31928b(0xda)];_0x35743b<_0xc51ff4;_0x35743b++){var _0x4a807a=_0x138d77[_0x31928b(0x127)][_0x35743b];_0x4a807a['type']==='function'?_0x45d512['push'](_0x4a807a):_0x510640[_0x31928b(0x156)](_0x4a807a);}if(!(!_0x510640[_0x31928b(0xda)]||_0x45d512[_0x31928b(0xda)]<=0x1)){_0x138d77[_0x31928b(0x127)]=_0x510640;var _0x29c2ae={'functionsNode':!0x0,'props':_0x45d512};this[_0x31928b(0x10c)](_0x29c2ae,_0x51576a),this[_0x31928b(0xd0)](_0x29c2ae,_0x51576a),this[_0x31928b(0x12e)](_0x29c2ae),this[_0x31928b(0x154)](_0x29c2ae,_0x51576a),_0x29c2ae['id']+='\\x20f',_0x138d77[_0x31928b(0x127)][_0x31928b(0x191)](_0x29c2ae);}}}[_0x3e2cd3(0x11a)](_0x33516a,_0x30dd40){}[_0x3e2cd3(0x12e)](_0x4dbf50){}[_0x3e2cd3(0x105)](_0x28de20){var _0x32f2e1=_0x3e2cd3;return Array['isArray'](_0x28de20)||typeof _0x28de20=='object'&&this[_0x32f2e1(0x133)](_0x28de20)===_0x32f2e1(0x1ac);}[_0x3e2cd3(0x154)](_0x92b7dd,_0x2070fb){}[_0x3e2cd3(0xb9)](_0x4d58c8){var _0x2280da=_0x3e2cd3;delete _0x4d58c8['_hasSymbolPropertyOnItsPath'],delete _0x4d58c8['_hasSetOnItsPath'],delete _0x4d58c8[_0x2280da(0x192)];}['_setNodeExpressionPath'](_0x153876,_0x491a1b){}}let _0x50d0d9=new _0x7af3d3(),_0x5d2256={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x43ed0c={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x19de38(_0x3312e9,_0x41a9de,_0x5a5c9b,_0x52d60b,_0x19b021,_0x47ed3e){var _0x18b841=_0x3e2cd3;let _0x3f0e02,_0x14a7d8;try{_0x14a7d8=_0x302382(),_0x3f0e02=_0x601595[_0x41a9de],!_0x3f0e02||_0x14a7d8-_0x3f0e02['ts']>0x1f4&&_0x3f0e02[_0x18b841(0xf7)]&&_0x3f0e02['time']/_0x3f0e02['count']<0x64?(_0x601595[_0x41a9de]=_0x3f0e02={'count':0x0,'time':0x0,'ts':_0x14a7d8},_0x601595['hits']={}):_0x14a7d8-_0x601595[_0x18b841(0x137)]['ts']>0x32&&_0x601595['hits'][_0x18b841(0xf7)]&&_0x601595['hits'][_0x18b841(0xeb)]/_0x601595[_0x18b841(0x137)][_0x18b841(0xf7)]<0x64&&(_0x601595[_0x18b841(0x137)]={});let _0x2c1cfd=[],_0x447b11=_0x3f0e02['reduceLimits']||_0x601595[_0x18b841(0x137)]['reduceLimits']?_0x43ed0c:_0x5d2256,_0xbd32d5=_0x160e76=>{var _0x51308c=_0x18b841;let _0x24571f={};return _0x24571f[_0x51308c(0x127)]=_0x160e76[_0x51308c(0x127)],_0x24571f[_0x51308c(0x181)]=_0x160e76[_0x51308c(0x181)],_0x24571f['strLength']=_0x160e76[_0x51308c(0x13a)],_0x24571f[_0x51308c(0x1aa)]=_0x160e76['totalStrLength'],_0x24571f[_0x51308c(0x15c)]=_0x160e76['autoExpandLimit'],_0x24571f[_0x51308c(0x11d)]=_0x160e76[_0x51308c(0x11d)],_0x24571f[_0x51308c(0x142)]=!0x1,_0x24571f[_0x51308c(0x104)]=!_0xde0dd7,_0x24571f[_0x51308c(0xe2)]=0x1,_0x24571f['level']=0x0,_0x24571f[_0x51308c(0x136)]=_0x51308c(0x12b),_0x24571f[_0x51308c(0x115)]=_0x51308c(0xee),_0x24571f['autoExpand']=!0x0,_0x24571f[_0x51308c(0x19e)]=[],_0x24571f[_0x51308c(0xd2)]=0x0,_0x24571f['resolveGetters']=!0x0,_0x24571f[_0x51308c(0x186)]=0x0,_0x24571f[_0x51308c(0xd6)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x24571f;};for(var _0x328146=0x0;_0x328146<_0x19b021[_0x18b841(0xda)];_0x328146++)_0x2c1cfd[_0x18b841(0x156)](_0x50d0d9[_0x18b841(0x14f)]({'timeNode':_0x3312e9==='time'||void 0x0},_0x19b021[_0x328146],_0xbd32d5(_0x447b11),{}));if(_0x3312e9===_0x18b841(0x172)||_0x3312e9===_0x18b841(0xde)){let _0x42b07e=Error[_0x18b841(0x1a5)];try{Error[_0x18b841(0x1a5)]=0x1/0x0,_0x2c1cfd['push'](_0x50d0d9[_0x18b841(0x14f)]({'stackNode':!0x0},new Error()[_0x18b841(0x107)],_0xbd32d5(_0x447b11),{'strLength':0x1/0x0}));}finally{Error[_0x18b841(0x1a5)]=_0x42b07e;}}return{'method':_0x18b841(0x12d),'version':_0x37673f,'args':[{'ts':_0x5a5c9b,'session':_0x52d60b,'args':_0x2c1cfd,'id':_0x41a9de,'context':_0x47ed3e}]};}catch(_0x1e7697){return{'method':_0x18b841(0x12d),'version':_0x37673f,'args':[{'ts':_0x5a5c9b,'session':_0x52d60b,'args':[{'type':_0x18b841(0x19c),'error':_0x1e7697&&_0x1e7697[_0x18b841(0xe3)]}],'id':_0x41a9de,'context':_0x47ed3e}]};}finally{try{if(_0x3f0e02&&_0x14a7d8){let _0x3a342a=_0x302382();_0x3f0e02[_0x18b841(0xf7)]++,_0x3f0e02[_0x18b841(0xeb)]+=_0x2c959d(_0x14a7d8,_0x3a342a),_0x3f0e02['ts']=_0x3a342a,_0x601595['hits']['count']++,_0x601595[_0x18b841(0x137)][_0x18b841(0xeb)]+=_0x2c959d(_0x14a7d8,_0x3a342a),_0x601595[_0x18b841(0x137)]['ts']=_0x3a342a,(_0x3f0e02[_0x18b841(0xf7)]>0x32||_0x3f0e02[_0x18b841(0xeb)]>0x64)&&(_0x3f0e02['reduceLimits']=!0x0),(_0x601595[_0x18b841(0x137)][_0x18b841(0xf7)]>0x3e8||_0x601595[_0x18b841(0x137)][_0x18b841(0xeb)]>0x12c)&&(_0x601595[_0x18b841(0x137)][_0x18b841(0x189)]=!0x0);}}catch{}}}return _0x19de38;}((_0x1c8505,_0xd09af8,_0x188f78,_0x390991,_0x169920,_0x4b4693,_0x486b62,_0x27bb10,_0x59dbef,_0x4d352d,_0x23ed9e)=>{var _0x1dbce6=_0x27dfb1;if(_0x1c8505[_0x1dbce6(0x14b)])return _0x1c8505[_0x1dbce6(0x14b)];if(!H(_0x1c8505,_0x27bb10,_0x169920))return _0x1c8505[_0x1dbce6(0x14b)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1c8505['_console_ninja'];let _0x437560=B(_0x1c8505),_0x2cbdff=_0x437560['elapsed'],_0x3e3fce=_0x437560[_0x1dbce6(0x187)],_0x57fd49=_0x437560[_0x1dbce6(0x16c)],_0xc1bd78={'hits':{},'ts':{}},_0x199a72=X(_0x1c8505,_0x59dbef,_0xc1bd78,_0x4b4693),_0x49d00d=_0x37d18d=>{_0xc1bd78['ts'][_0x37d18d]=_0x3e3fce();},_0x3c200f=(_0x3b2ee9,_0x12a589)=>{var _0xd37787=_0x1dbce6;let _0x302c21=_0xc1bd78['ts'][_0x12a589];if(delete _0xc1bd78['ts'][_0x12a589],_0x302c21){let _0x1e1748=_0x2cbdff(_0x302c21,_0x3e3fce());_0x5b61f8(_0x199a72(_0xd37787(0xeb),_0x3b2ee9,_0x57fd49(),_0x5d6eb8,[_0x1e1748],_0x12a589));}},_0x424b6c=_0x3d5295=>{var _0x4edc6c=_0x1dbce6,_0x1c1acb;return _0x169920===_0x4edc6c(0x111)&&_0x1c8505[_0x4edc6c(0x19b)]&&((_0x1c1acb=_0x3d5295==null?void 0x0:_0x3d5295[_0x4edc6c(0x161)])==null?void 0x0:_0x1c1acb[_0x4edc6c(0xda)])&&(_0x3d5295[_0x4edc6c(0x161)][0x0]['origin']=_0x1c8505[_0x4edc6c(0x19b)]),_0x3d5295;};_0x1c8505[_0x1dbce6(0x14b)]={'consoleLog':(_0x18d4c7,_0x98e289)=>{var _0x177f63=_0x1dbce6;_0x1c8505[_0x177f63(0xdc)][_0x177f63(0x12d)][_0x177f63(0xc5)]!==_0x177f63(0x125)&&_0x5b61f8(_0x199a72(_0x177f63(0x12d),_0x18d4c7,_0x57fd49(),_0x5d6eb8,_0x98e289));},'consoleTrace':(_0x3edf3c,_0x1b693b)=>{var _0x152245=_0x1dbce6,_0x4df028,_0x5c5968;_0x1c8505[_0x152245(0xdc)][_0x152245(0x12d)][_0x152245(0xc5)]!=='disabledTrace'&&((_0x5c5968=(_0x4df028=_0x1c8505[_0x152245(0xf4)])==null?void 0x0:_0x4df028[_0x152245(0x16e)])!=null&&_0x5c5968[_0x152245(0xd6)]&&(_0x1c8505['_ninjaIgnoreNextError']=!0x0),_0x5b61f8(_0x424b6c(_0x199a72('trace',_0x3edf3c,_0x57fd49(),_0x5d6eb8,_0x1b693b))));},'consoleError':(_0x42678f,_0x4d5d7a)=>{var _0x19fef1=_0x1dbce6;_0x1c8505[_0x19fef1(0x132)]=!0x0,_0x5b61f8(_0x424b6c(_0x199a72(_0x19fef1(0xde),_0x42678f,_0x57fd49(),_0x5d6eb8,_0x4d5d7a)));},'consoleTime':_0x1cb2cf=>{_0x49d00d(_0x1cb2cf);},'consoleTimeEnd':(_0xc12d3c,_0xf482fb)=>{_0x3c200f(_0xf482fb,_0xc12d3c);},'autoLog':(_0xa0a63c,_0x489660)=>{var _0x294bb6=_0x1dbce6;_0x5b61f8(_0x199a72(_0x294bb6(0x12d),_0x489660,_0x57fd49(),_0x5d6eb8,[_0xa0a63c]));},'autoLogMany':(_0x938700,_0x5ce02a)=>{var _0x8844c3=_0x1dbce6;_0x5b61f8(_0x199a72(_0x8844c3(0x12d),_0x938700,_0x57fd49(),_0x5d6eb8,_0x5ce02a));},'autoTrace':(_0x5956ff,_0xa3ef56)=>{var _0x4e5b8b=_0x1dbce6;_0x5b61f8(_0x424b6c(_0x199a72(_0x4e5b8b(0x172),_0xa3ef56,_0x57fd49(),_0x5d6eb8,[_0x5956ff])));},'autoTraceMany':(_0x18585e,_0x5e6396)=>{_0x5b61f8(_0x424b6c(_0x199a72('trace',_0x18585e,_0x57fd49(),_0x5d6eb8,_0x5e6396)));},'autoTime':(_0x5978c2,_0x5c66db,_0x5166cc)=>{_0x49d00d(_0x5166cc);},'autoTimeEnd':(_0x53fa63,_0x4abfcb,_0x2244cf)=>{_0x3c200f(_0x4abfcb,_0x2244cf);},'coverage':_0x2556ad=>{var _0x3a6b48=_0x1dbce6;_0x5b61f8({'method':_0x3a6b48(0xf5),'version':_0x4b4693,'args':[{'id':_0x2556ad}]});}};let _0x5b61f8=q(_0x1c8505,_0xd09af8,_0x188f78,_0x390991,_0x169920,_0x4d352d,_0x23ed9e),_0x5d6eb8=_0x1c8505[_0x1dbce6(0x18b)];return _0x1c8505[_0x1dbce6(0x14b)];})(globalThis,'127.0.0.1',_0x27dfb1(0x183),_0x27dfb1(0x167),'remix',_0x27dfb1(0x196),'1731709436735',_0x27dfb1(0xc3),_0x27dfb1(0xb8),_0x27dfb1(0xb4),_0x27dfb1(0x15f));`);
  } catch (e) {
  }
}
function oo_oo(i, ...v) {
  try {
    oo_cm$1().consoleLog(i, v);
  } catch (e) {
  }
  return v;
}
const entryWorker = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropNames$6 = Object.getOwnPropertyNames;
var __commonJS$6 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$6(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_worker_runtime$6 = __commonJS$6({
  "@remix-pwa/worker-runtime"(exports, module) {
    module.exports = {};
  }
});
var worker_runtime_default$6 = require_worker_runtime$6();
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: worker_runtime_default$6
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropNames$5 = Object.getOwnPropertyNames;
var __commonJS$5 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$5(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_worker_runtime$5 = __commonJS$5({
  "@remix-pwa/worker-runtime"(exports, module) {
    module.exports = {};
  }
});
var worker_runtime_default$5 = require_worker_runtime$5();
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: worker_runtime_default$5
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropNames$4 = Object.getOwnPropertyNames;
var __commonJS$4 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$4(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_worker_runtime$4 = __commonJS$4({
  "@remix-pwa/worker-runtime"(exports, module) {
    module.exports = {};
  }
});
var worker_runtime_default$4 = require_worker_runtime$4();
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: worker_runtime_default$4
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropNames$3 = Object.getOwnPropertyNames;
var __commonJS$3 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$3(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_worker_runtime$3 = __commonJS$3({
  "@remix-pwa/worker-runtime"(exports, module) {
    module.exports = {};
  }
});
var worker_runtime_default$3 = require_worker_runtime$3();
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: worker_runtime_default$3
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropNames$2 = Object.getOwnPropertyNames;
var __commonJS$2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_worker_runtime$2 = __commonJS$2({
  "@remix-pwa/worker-runtime"(exports, module) {
    module.exports = {};
  }
});
var worker_runtime_default$2 = require_worker_runtime$2();
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: worker_runtime_default$2
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __commonJS$1 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_worker_runtime$1 = __commonJS$1({
  "@remix-pwa/worker-runtime"(exports, module) {
    module.exports = {};
  }
});
var worker_runtime_default$1 = require_worker_runtime$1();
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: worker_runtime_default$1
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_worker_runtime = __commonJS({
  "@remix-pwa/worker-runtime"(exports, module) {
    module.exports = {};
  }
});
var worker_runtime_default = require_worker_runtime();
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: worker_runtime_default
}, Symbol.toStringTag, { value: "Module" }));
const assets = [
  "/entry.worker.js",
  "/favicon.ico",
  "/icon512_maskable.png",
  "/icon512_rounded.png",
  "/logo_portal_fitxades.png",
  "/manifest.json"
];
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    hasLoader: true,
    hasAction: false,
    hasWorkerLoader: false,
    hasWorkerAction: false,
    module: route0
  },
  "routes/dashboard/_index": {
    id: "routes/dashboard/_index",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    hasLoader: true,
    hasAction: true,
    hasWorkerLoader: false,
    hasWorkerAction: false,
    module: route1
  },
  "routes/login/route": {
    id: "routes/login/route",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    hasLoader: true,
    hasAction: true,
    hasWorkerLoader: false,
    hasWorkerAction: false,
    module: route2
  },
  "routes/logout/route": {
    id: "routes/logout/route",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    hasLoader: true,
    hasAction: false,
    hasWorkerLoader: false,
    hasWorkerAction: false,
    module: route3
  },
  "routes/resources+/checkin": {
    id: "routes/resources+/checkin",
    parentId: "root",
    path: "resources/checkin",
    index: void 0,
    caseSensitive: void 0,
    hasLoader: true,
    hasAction: false,
    hasWorkerLoader: false,
    hasWorkerAction: false,
    module: route4
  },
  "routes/route": {
    id: "routes/route",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    hasLoader: false,
    hasAction: false,
    hasWorkerLoader: false,
    hasWorkerAction: false,
    module: route5
  },
  "routes/users+/management.($userId)": {
    id: "routes/users+/management.($userId)",
    parentId: "root",
    path: "users/management/:userId?",
    index: void 0,
    caseSensitive: void 0,
    hasLoader: true,
    hasAction: true,
    hasWorkerLoader: false,
    hasWorkerAction: false,
    module: route6
  }
};
const entry = { module: entryWorker };
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries;
  entries = initialEntries.map((entry2, index2) => createMemoryLocation(entry2, typeof entry2 === "string" ? null : entry2.state, index2 === 0 ? "default" : void 0));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substr(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes2, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes2.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], 'Found a route id collision on id "' + id + `".  Route id's must be globally unique within Data Router usages`);
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: void 0
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded);
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes2.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    path = path.replace(/\*$/, "/*");
  }
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    if (isLastSegment && segment === "*") {
      const star = "*";
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, 'Missing ":' + key + '" param');
      return stringify(param);
    }
    return segment.replace(/\?$/g, "");
  }).filter((segment) => !!segment);
  return prefix + segments.join("/");
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === matches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map((match) => match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
const json$1 = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {
}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = /* @__PURE__ */ new Set();
    this.subscribers = /* @__PURE__ */ new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    let promise = Promise.race([value, this.abortPromise]).then((data) => this.onSettle(promise, key, void 0, data), (error) => this.onSettle(promise, key, error));
    promise.catch(() => {
    });
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      this.unlistenAbortSignal();
    }
    if (error === void 0 && data === void 0) {
      let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === void 0) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach((subscriber) => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise((resolve) => {
        this.subscribe((aborted2) => {
          signal.removeEventListener("abort", onAbort);
          if (aborted2 || this.done) {
            resolve(aborted2);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref3) => {
      let [key, value] = _ref3;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function isTrackedPromise$1(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise$1(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
const defer$1 = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
const redirect$1 = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
const redirectDocument$1 = (url, init) => {
  let response = redirect$1(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes$1 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
const IDLE_FETCHER = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = (route) => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, void 0, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.unstable_dataStrategy || defaultDataStrategy;
  let future = _extends({
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: false,
    v7_partialHydration: false,
    v7_prependBasename: false,
    v7_relativeSplatPath: false,
    unstable_skipActionErrorRevalidation: false
  }, init.future);
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set();
  let savedScrollPositions = null;
  let getScrollRestorationKey = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  let initialized;
  let hasLazyRoutes = initialMatches.some((m) => m.route.lazy);
  let hasLoaders = initialMatches.some((m) => m.route.loader);
  if (hasLazyRoutes) {
    initialized = false;
  } else if (!hasLoaders) {
    initialized = true;
  } else if (future.v7_partialHydration) {
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors2 = init.hydrationData ? init.hydrationData.errors : null;
    let isRouteInitialized = (m) => {
      if (!m.route.loader) {
        return true;
      }
      if (typeof m.route.loader === "function" && m.route.loader.hydrate === true) {
        return false;
      }
      return loaderData && loaderData[m.route.id] !== void 0 || errors2 && errors2[m.route.id] !== void 0;
    };
    if (errors2) {
      let idx = initialMatches.findIndex((m) => errors2[m.route.id] !== void 0);
      initialized = initialMatches.slice(0, idx + 1).every(isRouteInitialized);
    } else {
      initialized = initialMatches.every(isRouteInitialized);
    }
  } else {
    initialized = init.hydrationData != null;
  }
  let router2;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  };
  let pendingAction = Action.Pop;
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = /* @__PURE__ */ new Map();
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledDeferredRoutes = [];
  let cancelledFetcherLoads = [];
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let fetchLoadMatches = /* @__PURE__ */ new Map();
  let activeFetchers = /* @__PURE__ */ new Map();
  let deletedFetchers = /* @__PURE__ */ new Set();
  let activeDeferreds = /* @__PURE__ */ new Map();
  let blockerFunctions = /* @__PURE__ */ new Map();
  let ignoreNextHistoryUpdate = false;
  function initialize() {
    unlistenHistory = init.history.listen((_ref) => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1);
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location
            });
            init.history.go(delta);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location, {
        initialHydration: true
      });
    }
    return router2;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state = _extends({}, state, newState);
    let completedFetchers = [];
    let deletedFetchersKeys = [];
    if (future.v7_fetcherPersist) {
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (deletedFetchers.has(key)) {
            deletedFetchersKeys.push(key);
          } else {
            completedFetchers.push(key);
          }
        }
      });
    }
    [...subscribers].forEach((subscriber) => subscriber(state, {
      deletedFetchers: deletedFetchersKeys,
      unstable_viewTransitionOpts: opts.viewTransitionOpts,
      unstable_flushSync: opts.flushSync === true
    }));
    if (future.v7_fetcherPersist) {
      completedFetchers.forEach((key) => state.fetchers.delete(key));
      deletedFetchersKeys.forEach((key) => deleteFetcher(key));
    }
  }
  function completeNavigation(location, newState, _temp) {
    var _location$state, _location$state2;
    let {
      flushSync
    } = _temp === void 0 ? {} : _temp;
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = void 0;
    }
    if (isUninterruptedRevalidation)
      ;
    else if (pendingAction === Action.Pop)
      ;
    else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    if (pendingAction === Action.Pop) {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = /* @__PURE__ */ new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), {
      viewTransitionOpts,
      flushSync: flushSync === true
    });
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  }
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : void 0;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false)
      ;
    else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
    let flushSync = (opts && opts.unstable_flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          });
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.unstable_viewTransition,
      flushSync
    });
  }
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    if (state.navigation.state === "submitting") {
      return;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  }
  async function startNavigation(historyAction, location, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    let flushSync = (opts && opts.flushSync) === true;
    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse);
      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      }, {
        flushSync
      });
      return;
    }
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      }, {
        flushSync
      });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionResult;
    if (opts && opts.pendingError) {
      pendingActionResult = [findNearestBoundary(matches).route.id, {
        type: ResultType.error,
        error: opts.pendingError
      }];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionResult = await handleAction2(request, location, opts.submission, matches, {
        replace: opts.replace,
        flushSync
      });
      if (actionResult.shortCircuited) {
        return;
      }
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync = false;
      request = createClientSideRequest(init.history, request.url, request.signal);
    }
    let {
      shortCircuited,
      loaderData,
      errors: errors2
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, getActionDataForCommit(pendingActionResult), {
      loaderData,
      errors: errors2
    }));
  }
  async function handleAction2(request, location, submission, matches, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    }, {
      flushSync: opts.flushSync === true
    });
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy("action", request, [actionMatch], matches);
      result = results[0];
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        let location2 = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
        replace = location2 === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
    cancelActiveDeferreds((routeId) => !(matches && matches.some((m) => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m) => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null
      }, getActionDataForCommit(pendingActionResult), updatedFetchers2 ? {
        fetchers: new Map(state.fetchers)
      } : {}), {
        flushSync
      });
      return {
        shortCircuited: true
      };
    }
    if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
      revalidatingFetchers.forEach((rf) => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData;
      if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
        actionData = {
          [pendingActionResult[0]]: pendingActionResult[1].data
        };
      } else if (state.actionData) {
        if (Object.keys(state.actionData).length === 0) {
          actionData = null;
        } else {
          actionData = state.actionData;
        }
      }
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData !== void 0 ? {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}), {
        flushSync
      });
    }
    revalidatingFetchers.forEach((rf) => {
      if (fetchControllers.has(rf.key)) {
        abortFetcher(rf.key);
      }
      if (rf.controller) {
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect3 = findRedirect([...loaderResults, ...fetcherResults]);
    if (redirect3) {
      if (redirect3.idx >= matchesToLoad.length) {
        let fetcherKey = revalidatingFetchers[redirect3.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      await startRedirectNavigation(request, redirect3.result, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    let {
      loaderData,
      errors: errors2
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe((aborted) => {
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    if (future.v7_partialHydration && initialHydration && state.errors) {
      Object.entries(state.errors).filter((_ref2) => {
        let [id] = _ref2;
        return !matchesToLoad.some((m) => m.route.id === id);
      }).forEach((_ref3) => {
        let [routeId, error] = _ref3;
        errors2 = Object.assign(errors2 || {}, {
          [routeId]: error
        });
      });
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      loaderData,
      errors: errors2
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function fetch2(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    }
    if (fetchControllers.has(key))
      abortFetcher(key);
    let flushSync = (opts && opts.unstable_flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }), {
        flushSync
      });
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error, {
        flushSync
      });
      return;
    }
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, flushSync, submission);
      return;
    }
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission);
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, flushSync, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId
      });
      setFetcherError(key, routeId, error, {
        flushSync
      });
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy("action", fetchRequest, [match], requestMatches);
    let actionResult = actionResults[0];
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      }
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, {
            fetcherSubmission: submission
          });
        }
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [match.route.id, actionResult]);
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
      state.fetchers.set(staleKey, revalidatingFetcher);
      if (fetchControllers.has(staleKey)) {
        abortFetcher(staleKey);
      }
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
    let redirect3 = findRedirect([...loaderResults, ...fetcherResults]);
    if (redirect3) {
      if (redirect3.idx >= matchesToLoad.length) {
        let fetcherKey = revalidatingFetchers[redirect3.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return startRedirectNavigation(revalidationRequest, redirect3.result);
    }
    let {
      loaderData,
      errors: errors2
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, void 0, revalidatingFetchers, fetcherResults, activeDeferreds);
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors: errors2,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors: errors2,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors2),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy("loader", fetchRequest, [match], matches);
    let result = results[0];
    if (isDeferredResult(result)) {
      result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
    }
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (deletedFetchers.has(key)) {
      updateFetcherState(key, getDoneFetcher(void 0));
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result);
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  async function startRedirectNavigation(request, redirect3, _temp2) {
    let {
      submission,
      fetcherSubmission,
      replace
    } = _temp2 === void 0 ? {} : _temp2;
    if (redirect3.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect3.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(location, new URL(request.url), basename);
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect3.response.headers.has("X-Remix-Reload-Document")) {
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload = // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect3.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }
  async function callDataStrategy(type, request, matchesToLoad, matches) {
    try {
      let results = await callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties);
      return await Promise.all(results.map((result, i) => {
        if (isRedirectHandlerResult(result)) {
          let response = result.result;
          return {
            type: ResultType.redirect,
            response: normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath)
          };
        }
        return convertHandlerResultToDataResult(result);
      }));
    } catch (e) {
      return matchesToLoad.map(() => ({
        type: ResultType.error,
        error: e
      }));
    }
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    let [loaderResults, ...fetcherResults] = await Promise.all([matchesToLoad.length ? callDataStrategy("loader", request, matchesToLoad, matches) : [], ...fetchersToLoad.map((f) => {
      if (f.matches && f.match && f.controller) {
        let fetcherRequest = createClientSideRequest(init.history, f.path, f.controller.signal);
        return callDataStrategy("loader", fetcherRequest, [f.match], f.matches).then((r) => r[0]);
      } else {
        return Promise.resolve({
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        });
      }
    })]);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map((f) => f.match), fetcherResults, fetchersToLoad.map((f) => f.controller ? f.controller.signal : null), true)]);
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function updateFetcherState(key, fetcher, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function setFetcherError(key, routeId, error, opts) {
    if (opts === void 0) {
      opts = {};
    }
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function getFetcher(key) {
    if (future.v7_fetcherPersist) {
      activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
      if (deletedFetchers.has(key)) {
        deletedFetchers.delete(key);
      }
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    deletedFetchers.delete(key);
    state.fetchers.delete(key);
  }
  function deleteFetcherAndUpdateState(key) {
    if (future.v7_fetcherPersist) {
      let count = (activeFetchers.get(key) || 0) - 1;
      if (count <= 0) {
        activeFetchers.delete(key);
        deletedFetchers.add(key);
      } else {
        activeFetchers.set(key, count);
      }
    } else {
      deleteFetcher(key);
    }
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref4) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref4;
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, void 0, manifest);
  }
  router2 = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: deleteFetcherAndUpdateState,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router2;
}
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes2, opts) {
  invariant(routes2.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = (route) => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  let future = _extends({
    v7_relativeSplatPath: false,
    v7_throwAbortReason: false
  }, opts ? opts.future : null);
  let dataRoutes = convertRoutesToDataRoutes(routes2, mapRouteProperties, void 0, manifest);
  async function query(request, _temp3) {
    let {
      requestContext,
      skipLoaderErrorBubbling,
      unstable_dataStrategy
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext, unstable_dataStrategy || null, skipLoaderErrorBubbling === true, null);
    if (isResponse$1(result)) {
      return result;
    }
    return _extends({
      location,
      basename
    }, result);
  }
  async function queryRoute(request, _temp4) {
    let {
      routeId,
      requestContext
    } = _temp4 === void 0 ? {} : _temp4;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, null, false, match);
    if (isResponse$1(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : void 0;
    if (error !== void 0) {
      throw error;
    }
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return void 0;
  }
  async function queryImpl(request, location, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result2 = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
        return result2;
      }
      let result = await loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch);
      return isResponse$1(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      if (isHandlerResult(e) && isResponse$1(e.result)) {
        if (e.type === ResultType.error) {
          throw e.result;
        }
        return e.result;
      }
      if (isRedirectResponse$1(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      let results = await callDataStrategy("action", request, [actionMatch], matches, isRouteRequest, requestContext, unstable_dataStrategy);
      result = results[0];
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest, future);
      }
    }
    if (isRedirectResult(result)) {
      throw new Response(null, {
        status: result.response.status,
        headers: {
          Location: result.response.headers.get("Location")
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    if (isErrorResult(result)) {
      let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
      let context2 = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null, [boundaryMatch.route.id, result]);
      return _extends({}, context2, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null);
    return _extends({}, context, {
      actionData: {
        [actionMatch.route.id]: result.data
      }
    }, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionHeaders: result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {}
    });
  }
  async function loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
    let isRouteRequest = routeMatch != null;
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
    let matchesToLoad = requestMatches.filter((m) => m.route.loader || m.route.lazy);
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy);
    if (request.signal.aborted) {
      throwStaticHandlerAbortedError(request, isRouteRequest, future);
    }
    let activeDeferreds = /* @__PURE__ */ new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
    let executedLoaders = new Set(matchesToLoad.map((match) => match.route.id));
    matches.forEach((match) => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy) {
    let results = await callDataStrategyImpl(unstable_dataStrategy || defaultDataStrategy, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext);
    return await Promise.all(results.map((result, i) => {
      if (isRedirectHandlerResult(result)) {
        let response = result.result;
        throw normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath);
      }
      if (isResponse$1(result.result) && isRouteRequest) {
        throw result;
      }
      return convertHandlerResultToDataResult(result);
    }));
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
function getStaticContextFromError(routes2, context, error) {
  let newContext = _extends({}, context, {
    statusCode: isRouteErrorResponse(error) ? error.status : 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes2[0].id]: error
    }
  });
  return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
  if (future.v7_throwAbortReason && request.signal.reason !== void 0) {
    throw request.signal.reason;
  }
  let method = isRouteRequest ? "queryRoute" : "query";
  throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(opts.body.entries()).reduce((acc, _ref5) => {
          let [name, value] = _ref5;
          return "" + acc + name + "=" + value + "\n";
        }, "")
      ) : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json3 = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json: json3,
            text: void 0
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index = matches.findIndex((m) => m.route.id === boundaryId);
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let boundaryId = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[0] : void 0;
  let boundaryMatches = boundaryId ? getLoaderMatchesUntilBoundary(matches, boundaryId) : matches;
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
  let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let {
      route
    } = match;
    if (route.lazy) {
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (isInitialLoad) {
      if (typeof route.loader !== "function" || route.loader.hydrate) {
        return true;
      }
      return state.loaderData[route.id] === void 0 && // Don't re-run if the loader ran and threw an error
      (!state.errors || state.errors[route.id] === void 0);
    }
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id) => id === match.route.id)) {
      return true;
    }
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      unstable_actionStatus: actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      )
    }));
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    if (isInitialLoad || !matches.some((m) => m.route.id === f.routeId) || deletedFetchers.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.includes(key)) {
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
      shouldRevalidate = isRevalidationRequired;
    } else {
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        unstable_actionStatus: actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = (
    // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id
  );
  let isMissingData = currentLoaderData[match.route.id] === void 0;
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  Object.assign(routeToUpdate, routeUpdates);
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: void 0
  }));
}
function defaultDataStrategy(opts) {
  return Promise.all(opts.matches.map((m) => m.resolve()));
}
async function callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext) {
  let routeIdsToLoad = matchesToLoad.reduce((acc, m) => acc.add(m.route.id), /* @__PURE__ */ new Set());
  let loadedMatches = /* @__PURE__ */ new Set();
  let results = await dataStrategyImpl({
    matches: matches.map((match) => {
      let shouldLoad = routeIdsToLoad.has(match.route.id);
      let resolve = (handlerOverride) => {
        loadedMatches.add(match.route.id);
        return shouldLoad ? callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, requestContext) : Promise.resolve({
          type: ResultType.data,
          result: void 0
        });
      };
      return _extends({}, match, {
        shouldLoad,
        resolve
      });
    }),
    request,
    params: matches[0].params,
    context: requestContext
  });
  matches.forEach((m) => invariant(loadedMatches.has(m.route.id), '`match.resolve()` was not called for route id "' + m.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'));
  return results.filter((_, i) => routeIdsToLoad.has(matches[i].route.id));
}
async function callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = (ctx) => {
      if (typeof handler !== "function") {
        return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + type + '" [routeId: ' + match.route.id + "]")));
      }
      return handler({
        request,
        params: match.params,
        context: staticContext
      }, ...ctx !== void 0 ? [ctx] : []);
    };
    let handlerPromise;
    if (handlerOverride) {
      handlerPromise = handlerOverride((ctx) => actualHandler(ctx));
    } else {
      handlerPromise = (async () => {
        try {
          let val = await actualHandler();
          return {
            type: "data",
            result: val
          };
        } catch (e) {
          return {
            type: "error",
            result: e
          };
        }
      })();
    }
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (match.route.lazy) {
      if (handler) {
        let handlerError;
        let [value] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          runHandler(handler).catch((e) => {
            handlerError = e;
          }),
          loadLazyRouteModule(match.route, mapRouteProperties, manifest)
        ]);
        if (handlerError !== void 0) {
          throw handlerError;
        }
        result = value;
      } else {
        await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
        handler = match.route[type];
        if (handler) {
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return {
            type: ResultType.data,
            result: void 0
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result.result !== void 0, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    return {
      type: ResultType.error,
      result: e
    };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertHandlerResultToDataResult(handlerResult) {
  let {
    result,
    type,
    status
  } = handlerResult;
  if (isResponse$1(result)) {
    let data;
    try {
      let contentType = result.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data = null;
        } else {
          data = await result.json();
        }
      } else {
        data = await result.text();
      }
    } catch (e) {
      return {
        type: ResultType.error,
        error: e
      };
    }
    if (type === ResultType.error) {
      return {
        type: ResultType.error,
        error: new ErrorResponseImpl(result.status, result.statusText, data),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === ResultType.error) {
    return {
      type: ResultType.error,
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : status
    };
  }
  if (isDeferredData$1(result)) {
    var _result$init, _result$init2;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }
  return {
    type: ResultType.data,
    data: result,
    statusCode: status
  };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
  let location = response.headers.get("Location");
  invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1);
    location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location)) {
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location;
}
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
  let loaderData = {};
  let errors2 = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      let error = result.error;
      if (pendingError !== void 0) {
        error = pendingError;
        pendingError = void 0;
      }
      errors2 = errors2 || {};
      if (skipLoaderErrorBubbling) {
        errors2[id] = error;
      } else {
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors2[boundaryMatch.route.id] == null) {
          errors2[boundaryMatch.route.id] = error;
        }
      }
      loaderData[id] = void 0;
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
        if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      } else {
        loaderData[id] = result.data;
        if (result.statusCode && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      }
    }
  });
  if (pendingError !== void 0 && pendingActionResult) {
    errors2 = {
      [pendingActionResult[0]]: pendingError
    };
    loaderData[pendingActionResult[0]] = void 0;
  }
  return {
    loaderData,
    errors: errors2,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors: errors2
  } = processRouteLoaderData(
    matches,
    matchesToLoad,
    results,
    pendingActionResult,
    activeDeferreds,
    false
    // This method is only called client side so we always want to bubble
  );
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match,
      controller
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== void 0 && fetcherResults[index] !== void 0, "Did not find corresponding fetcher result");
    let result = fetcherResults[index];
    if (controller && controller.signal.aborted) {
      continue;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors2 && errors2[boundaryMatch.route.id])) {
        errors2 = _extends({}, errors2, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData,
    errors: errors2
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors2) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== void 0) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== void 0 && match.route.loader) {
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors2 && errors2.hasOwnProperty(id)) {
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes2) {
  let route = routes2.length === 1 ? routes2[0] : routes2.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp5) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp5 === void 0 ? {} : _temp5;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = 'No route matches URL "' + pathname + '"';
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];
    if (isRedirectResult(result)) {
      return {
        result,
        idx: i
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    return true;
  } else if (b.hash !== "") {
    return true;
  }
  return false;
}
function isHandlerResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
}
function isRedirectHandlerResult(result) {
  return isResponse$1(result.result) && redirectStatusCodes$1.has(result.result.status);
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDeferredData$1(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse$1(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse$1(result) {
  if (!isResponse$1(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find((m) => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== void 0;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      let signal = signals[index];
      invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
      await resolveDeferredData(result, signal, isFetcher).then((result2) => {
        if (result2) {
          results[index] = result2 || results[index];
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json: json3
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: void 0,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: void 0,
      text: void 0
    };
  } else if (json3 !== void 0) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: json3,
      text: void 0
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json3 = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json3 || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json3 = {};
    for (let [k, v] of transitions) {
      json3[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json3));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}
const router$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortedDeferredError,
  get Action() {
    return Action;
  },
  IDLE_BLOCKER,
  IDLE_FETCHER,
  IDLE_NAVIGATION,
  UNSAFE_DEFERRED_SYMBOL,
  UNSAFE_DeferredData: DeferredData,
  UNSAFE_ErrorResponseImpl: ErrorResponseImpl,
  UNSAFE_convertRouteMatchToUiMatch: convertRouteMatchToUiMatch,
  UNSAFE_convertRoutesToDataRoutes: convertRoutesToDataRoutes,
  UNSAFE_getResolveToMatches: getResolveToMatches,
  UNSAFE_invariant: invariant,
  UNSAFE_warning: warning,
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
  createPath,
  createRouter,
  createStaticHandler,
  defer: defer$1,
  generatePath,
  getStaticContextFromError,
  getToPathname,
  isDeferredData: isDeferredData$1,
  isRouteErrorResponse,
  joinPaths,
  json: json$1,
  matchPath,
  matchRoutes,
  normalizePathname,
  parsePath,
  redirect: redirect$1,
  redirectDocument: redirectDocument$1,
  resolvePath,
  resolveTo,
  stripBasename
}, Symbol.toStringTag, { value: "Module" }));
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var mode$2 = {};
/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(mode$2, "__esModule", { value: true });
let ServerMode = /* @__PURE__ */ function(ServerMode2) {
  ServerMode2["Development"] = "development";
  ServerMode2["Production"] = "production";
  ServerMode2["Test"] = "test";
  return ServerMode2;
}({});
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode_1 = mode$2.ServerMode = ServerMode;
var isServerMode_1 = mode$2.isServerMode = isServerMode;
const mode$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  ServerMode: ServerMode_1,
  default: mode$2,
  isServerMode: isServerMode_1
}, [mode$2]);
var responses = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(router$2);
var errors$2 = {};
const require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(mode$1);
/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(errors$2, "__esModule", { value: true });
var router$1 = require$$0;
var mode = require$$1$1;
function sanitizeError(error, serverMode) {
  if (error instanceof Error && serverMode !== mode.ServerMode.Development) {
    let sanitized = new Error("Unexpected Server Error");
    sanitized.stack = void 0;
    return sanitized;
  }
  return error;
}
function sanitizeErrors(errors2, serverMode) {
  return Object.entries(errors2).reduce((acc, [routeId, error]) => {
    return Object.assign(acc, {
      [routeId]: sanitizeError(error, serverMode)
    });
  }, {});
}
function serializeError(error, serverMode) {
  let sanitized = sanitizeError(error, serverMode);
  return {
    message: sanitized.message,
    stack: sanitized.stack
  };
}
function serializeErrors(errors2, serverMode) {
  if (!errors2)
    return null;
  let entries = Object.entries(errors2);
  let serialized = {};
  for (let [key, val] of entries) {
    if (router$1.isRouteErrorResponse(val)) {
      serialized[key] = {
        ...val,
        __type: "RouteErrorResponse"
      };
    } else if (val instanceof Error) {
      let sanitized = sanitizeError(val, serverMode);
      serialized[key] = {
        message: sanitized.message,
        stack: sanitized.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...sanitized.name !== "Error" ? {
          __subType: sanitized.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
var sanitizeError_1 = errors$2.sanitizeError = sanitizeError;
var sanitizeErrors_1 = errors$2.sanitizeErrors = sanitizeErrors;
var serializeError_1 = errors$2.serializeError = serializeError;
var serializeErrors_1 = errors$2.serializeErrors = serializeErrors;
const errors$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: errors$2,
  sanitizeError: sanitizeError_1,
  sanitizeErrors: sanitizeErrors_1,
  serializeError: serializeError_1,
  serializeErrors: serializeErrors_1
}, [errors$2]);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(errors$1);
/**
 * @remix-run/server-runtime v2.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(responses, "__esModule", { value: true });
var router = require$$0;
var errors = require$$1;
const json2 = (data, init = {}) => {
  return router.json(data, init);
};
const defer2 = (data, init = {}) => {
  return router.defer(data, init);
};
const redirect2 = (url, init = 302) => {
  return router.redirect(url, init);
};
const redirectDocument = (url, init = 302) => {
  return router.redirectDocument(url, init);
};
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
const redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function isRedirectStatusCode(statusCode) {
  return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(response) {
  return isRedirectStatusCode(response.status);
}
function isTrackedPromise(value) {
  return value != null && typeof value.then === "function" && value._tracked === true;
}
const DEFERRED_VALUE_PLACEHOLDER_PREFIX = "__deferred_promise:";
function createDeferredReadableStream(deferredData, signal, serverMode) {
  let encoder = new TextEncoder();
  let stream = new ReadableStream({
    async start(controller) {
      let criticalData = {};
      let preresolvedKeys = [];
      for (let [key, value] of Object.entries(deferredData.data)) {
        if (isTrackedPromise(value)) {
          criticalData[key] = `${DEFERRED_VALUE_PLACEHOLDER_PREFIX}${key}`;
          if (typeof value._data !== "undefined" || typeof value._error !== "undefined") {
            preresolvedKeys.push(key);
          }
        } else {
          criticalData[key] = value;
        }
      }
      controller.enqueue(encoder.encode(JSON.stringify(criticalData) + "\n\n"));
      for (let preresolvedKey of preresolvedKeys) {
        enqueueTrackedPromise(controller, encoder, preresolvedKey, deferredData.data[preresolvedKey], serverMode);
      }
      let unsubscribe = deferredData.subscribe((aborted, settledKey) => {
        if (settledKey) {
          enqueueTrackedPromise(controller, encoder, settledKey, deferredData.data[settledKey], serverMode);
        }
      });
      await deferredData.resolveData(signal);
      unsubscribe();
      controller.close();
    }
  });
  return stream;
}
function enqueueTrackedPromise(controller, encoder, settledKey, promise, serverMode) {
  if ("_error" in promise) {
    controller.enqueue(encoder.encode("error:" + JSON.stringify({
      [settledKey]: promise._error instanceof Error ? errors.serializeError(promise._error, serverMode) : promise._error
    }) + "\n\n"));
  } else {
    controller.enqueue(encoder.encode("data:" + JSON.stringify({
      [settledKey]: promise._data ?? null
    }) + "\n\n"));
  }
}
var createDeferredReadableStream_1 = responses.createDeferredReadableStream = createDeferredReadableStream;
responses.defer = defer2;
var isDeferredData_1 = responses.isDeferredData = isDeferredData;
var isRedirectResponse_1 = responses.isRedirectResponse = isRedirectResponse;
var isRedirectStatusCode_1 = responses.isRedirectStatusCode = isRedirectStatusCode;
var isResponse_1 = responses.isResponse = isResponse;
var json_1 = responses.json = json2;
var redirect_1 = responses.redirect = redirect2;
responses.redirectDocument = redirectDocument;
function clone(_object) {
  const init = {};
  for (const property in _object) {
    init[property] = _object[property];
  }
  return init;
}
function getURLParameters(request, path = "") {
  const url = new URL(request.url);
  const match = matchPath(path, url.pathname);
  return {
    ...Object.fromEntries(new URL(request.url).searchParams.entries()),
    ...match == null ? void 0 : match.params
  };
}
function stripIndexParameter(request) {
  const url = new URL(request.url);
  const indexValues = url.searchParams.getAll("index");
  const indexValuesToKeep = [];
  url.searchParams.delete("index");
  for (const indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (const toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return new Request(url.href, { ...clone(request), duplex: "half" });
}
function stripDataParameter(request) {
  const url = new URL(request.url);
  url.searchParams.delete("_data");
  return new Request(url.href, { ...clone(request), duplex: "half" });
}
function createArgumentsFrom({ event, loadContext, path }) {
  const request = stripDataParameter(stripIndexParameter(event.request.clone()));
  const parameters = getURLParameters(request, path);
  return {
    request,
    params: parameters,
    context: loadContext
  };
}
function isMethod(request, methods) {
  return methods.includes(request.method.toLowerCase());
}
function isActionRequest(request) {
  const url = new URL(request.url);
  return isMethod(request, ["post", "delete", "put", "patch"]) && url.searchParams.get("_data");
}
function isLoaderRequest(request) {
  const url = new URL(request.url);
  return isMethod(request, ["get"]) && url.searchParams.get("_data");
}
function errorResponseToJson(errorResponse) {
  return json_1(errorResponse.error || { message: "Unexpected Server Error" }, {
    status: errorResponse.status,
    statusText: errorResponse.statusText,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function isRemixResponse(response) {
  return Array.from(response.headers.keys()).some((key) => key.toLowerCase().startsWith("x-remix-"));
}
async function handleRequest({ defaultHandler: defaultHandler2, errorHandler, event, loadContext, routes: routes2 }) {
  var _a;
  const url = new URL(event.request.url);
  const routeId = url.searchParams.get("_data");
  const route = routeId ? routes2[routeId] : void 0;
  const _arguments = {
    request: event.request,
    params: getURLParameters(event.request, route == null ? void 0 : route.path),
    context: loadContext
  };
  try {
    if (isLoaderRequest(event.request) && (route == null ? void 0 : route.module.workerLoader)) {
      return await handleLoader({
        event,
        loader: route.module.workerLoader,
        routeId: route.id,
        routePath: route.path,
        loadContext
      }).then(responseHandler);
    }
    if (isActionRequest(event.request) && ((_a = route == null ? void 0 : route.module) == null ? void 0 : _a.workerAction)) {
      return await handleAction({
        event,
        action: route.module.workerAction,
        routeId: route.id,
        routePath: route.path,
        loadContext
      }).then(responseHandler);
    }
  } catch (error) {
    const handler = (error2) => errorHandler(error2, _arguments);
    return _errorHandler({ error, handler });
  }
  return defaultHandler2(_arguments);
}
async function handleLoader({ event, loadContext, loader, routeId, routePath }) {
  const _arguments = createArgumentsFrom({ event, loadContext, path: routePath });
  const result = await loader(_arguments);
  if (result === void 0) {
    throw new Error(`You defined a loader for route "${routeId}" but didn't return anything from your \`worker loader\` function. Please return a value or \`null\`.`);
  }
  if (isDeferredData_1(result)) {
    if (result.init && isRedirectStatusCode_1(result.init.status || 200)) {
      return redirect_1(new Headers(result.init.headers).get("Location"), result.init);
    }
    const body = createDeferredReadableStream_1(result, event.request.signal, ServerMode_1.Production);
    const init = result.init || {};
    const headers = new Headers(init.headers);
    headers.set("Content-Type", "text/remix-deferred");
    init.headers = headers;
    return new Response(body, init);
  }
  return isResponse_1(result) ? result : json_1(result);
}
async function handleAction({ action, event, loadContext, routeId, routePath }) {
  const _arguments = createArgumentsFrom({ event, loadContext, path: routePath });
  const result = await action(_arguments);
  if (result === void 0) {
    throw new Error(`You defined an action for route "${routeId}" but didn't return anything from your \`worker action\` function. Please return a value or \`null\`.`);
  }
  return isResponse_1(result) ? result : json_1(result);
}
function _errorHandler({ error, handler: handleError }) {
  if (isResponse_1(error)) {
    error.headers.set("X-Remix-Catch", "yes");
    return error;
  }
  if (isRouteErrorResponse(error)) {
    error.error && handleError(error.error);
    return errorResponseToJson(error);
  }
  const errorInstance = error instanceof Error ? error : new Error("Unexpected Server Error");
  handleError(errorInstance);
  return json_1({ message: errorInstance.message }, {
    status: 500,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function responseHandler(response) {
  if (isRedirectResponse_1(response)) {
    const headers = new Headers(response.headers);
    headers.set("X-Remix-Redirect", headers.get("Location"));
    headers.set("X-Remix-Status", String(response.status));
    headers.delete("Location");
    if (response.headers.get("Set-Cookie") !== null) {
      headers.set("X-Remix-Revalidate", "yes");
    }
    return new Response(null, {
      status: 204,
      headers
    });
  }
  !isRemixResponse(response) && response.headers.set("X-Remix-Response", "yes");
  return response;
}
const _self = self;
function createContext(event) {
  var _a, _b;
  const context = ((_b = (_a = entry.module).getLoadContext) == null ? void 0 : _b.call(_a, event)) || {};
  return {
    event,
    fetchFromServer: () => fetch(event.request.clone()),
    // NOTE: we want the user to override the above properties if needed.
    ...context
  };
}
const defaultHandler = entry.module.defaultFetchHandler || ((event) => fetch(event.request.clone()));
const defaultErrorHandler = entry.module.errorHandler || ((error, { request }) => {
  if (!request.signal.aborted) {
    console.error(...oo_tx(`1843969686_26_12_26_32_11`, error));
  }
});
_self.__workerManifest = {
  // Re-publishing this. Somehow it's not available as `latest`
  assets,
  routes
};
_self.addEventListener(
  "fetch",
  (event) => {
    const response = handleRequest({
      event,
      routes,
      defaultHandler,
      errorHandler: defaultErrorHandler,
      loadContext: createContext(event)
    });
    return event.respondWith(response);
  }
);
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)(`/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x27dfb1=_0x2eb0;(function(_0x355000,_0x270003){var _0x28d95c=_0x2eb0,_0xffae92=_0x355000();while(!![]){try{var _0xf334ad=-parseInt(_0x28d95c(0xfb))/0x1+parseInt(_0x28d95c(0xb7))/0x2*(parseInt(_0x28d95c(0xf6))/0x3)+-parseInt(_0x28d95c(0x148))/0x4*(parseInt(_0x28d95c(0x110))/0x5)+-parseInt(_0x28d95c(0x179))/0x6+-parseInt(_0x28d95c(0xb2))/0x7*(parseInt(_0x28d95c(0xbd))/0x8)+-parseInt(_0x28d95c(0x195))/0x9*(-parseInt(_0x28d95c(0x158))/0xa)+parseInt(_0x28d95c(0x13e))/0xb;if(_0xf334ad===_0x270003)break;else _0xffae92['push'](_0xffae92['shift']());}catch(_0x378cf3){_0xffae92['push'](_0xffae92['shift']());}}}(_0x5b34,0x24c3c));var K=Object[_0x27dfb1(0xcd)],Q=Object['defineProperty'],G=Object[_0x27dfb1(0x14a)],ee=Object[_0x27dfb1(0x101)],te=Object['getPrototypeOf'],ne=Object[_0x27dfb1(0x14e)][_0x27dfb1(0xe8)],re=(_0x2b6a21,_0x4e3ccc,_0x3d3808,_0x1d5bc9)=>{var _0x41ff10=_0x27dfb1;if(_0x4e3ccc&&typeof _0x4e3ccc==_0x41ff10(0x178)||typeof _0x4e3ccc==_0x41ff10(0xbb)){for(let _0x3d1058 of ee(_0x4e3ccc))!ne[_0x41ff10(0x17e)](_0x2b6a21,_0x3d1058)&&_0x3d1058!==_0x3d3808&&Q(_0x2b6a21,_0x3d1058,{'get':()=>_0x4e3ccc[_0x3d1058],'enumerable':!(_0x1d5bc9=G(_0x4e3ccc,_0x3d1058))||_0x1d5bc9[_0x41ff10(0xf1)]});}return _0x2b6a21;},V=(_0x3f39e6,_0x43ad85,_0x448d9d)=>(_0x448d9d=_0x3f39e6!=null?K(te(_0x3f39e6)):{},re(_0x43ad85||!_0x3f39e6||!_0x3f39e6[_0x27dfb1(0x103)]?Q(_0x448d9d,'default',{'value':_0x3f39e6,'enumerable':!0x0}):_0x448d9d,_0x3f39e6)),Z=class{constructor(_0x5bed62,_0x3748a5,_0x2bbd4e,_0x237f67,_0x5c0713,_0x5e6175){var _0x460f01=_0x27dfb1,_0x2f505a,_0x339e89,_0x1cc9ab,_0x5e4cb8;this[_0x460f01(0x165)]=_0x5bed62,this[_0x460f01(0xcc)]=_0x3748a5,this[_0x460f01(0x147)]=_0x2bbd4e,this['nodeModules']=_0x237f67,this['dockerizedApp']=_0x5c0713,this[_0x460f01(0x15b)]=_0x5e6175,this[_0x460f01(0x162)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x460f01(0x11f)]=!0x1,this[_0x460f01(0x13b)]=!0x1,this[_0x460f01(0x106)]=((_0x339e89=(_0x2f505a=_0x5bed62[_0x460f01(0xf4)])==null?void 0x0:_0x2f505a['env'])==null?void 0x0:_0x339e89[_0x460f01(0x16d)])===_0x460f01(0x169),this[_0x460f01(0xf3)]=!((_0x5e4cb8=(_0x1cc9ab=this[_0x460f01(0x165)][_0x460f01(0xf4)])==null?void 0x0:_0x1cc9ab[_0x460f01(0x16e)])!=null&&_0x5e4cb8[_0x460f01(0xd6)])&&!this['_inNextEdge'],this['_WebSocketClass']=null,this[_0x460f01(0x14d)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x460f01(0x1a2)]=_0x460f01(0x16a),this[_0x460f01(0x140)]=(this[_0x460f01(0xf3)]?_0x460f01(0xd8):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x460f01(0x1a2)];}async[_0x27dfb1(0x11c)](){var _0x2df4a9=_0x27dfb1,_0x556955,_0xeee9be;if(this[_0x2df4a9(0x19d)])return this['_WebSocketClass'];let _0x5740c6;if(this[_0x2df4a9(0xf3)]||this[_0x2df4a9(0x106)])_0x5740c6=this[_0x2df4a9(0x165)][_0x2df4a9(0x129)];else{if((_0x556955=this[_0x2df4a9(0x165)]['process'])!=null&&_0x556955[_0x2df4a9(0x13d)])_0x5740c6=(_0xeee9be=this[_0x2df4a9(0x165)][_0x2df4a9(0xf4)])==null?void 0x0:_0xeee9be[_0x2df4a9(0x13d)];else try{let _0x59a7a1=await import(_0x2df4a9(0x1a8));_0x5740c6=(await import((await import(_0x2df4a9(0x16b)))[_0x2df4a9(0xbf)](_0x59a7a1['join'](this[_0x2df4a9(0xed)],'ws/index.js'))[_0x2df4a9(0xfc)]()))['default'];}catch{try{_0x5740c6=require(require(_0x2df4a9(0x1a8))[_0x2df4a9(0x102)](this[_0x2df4a9(0xed)],'ws'));}catch{throw new Error(_0x2df4a9(0xff));}}}return this[_0x2df4a9(0x19d)]=_0x5740c6,_0x5740c6;}[_0x27dfb1(0x157)](){var _0x4a90a8=_0x27dfb1;this[_0x4a90a8(0x13b)]||this['_connected']||this[_0x4a90a8(0x14d)]>=this[_0x4a90a8(0x188)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x4a90a8(0x13b)]=!0x0,this[_0x4a90a8(0x14d)]++,this[_0x4a90a8(0x113)]=new Promise((_0x5ee4cc,_0x31bcea)=>{var _0x3aaf5d=_0x4a90a8;this[_0x3aaf5d(0x11c)]()[_0x3aaf5d(0x118)](_0x262042=>{var _0x5134c8=_0x3aaf5d;let _0x1d45ef=new _0x262042(_0x5134c8(0xd7)+(!this['_inBrowser']&&this[_0x5134c8(0x121)]?_0x5134c8(0x15d):this[_0x5134c8(0xcc)])+':'+this[_0x5134c8(0x147)]);_0x1d45ef[_0x5134c8(0x138)]=()=>{var _0x432278=_0x5134c8;this[_0x432278(0x162)]=!0x1,this[_0x432278(0x190)](_0x1d45ef),this[_0x432278(0x1a6)](),_0x31bcea(new Error(_0x432278(0x19f)));},_0x1d45ef['onopen']=()=>{var _0x2d3766=_0x5134c8;this[_0x2d3766(0xf3)]||_0x1d45ef[_0x2d3766(0xba)]&&_0x1d45ef['_socket'][_0x2d3766(0x141)]&&_0x1d45ef[_0x2d3766(0xba)]['unref'](),_0x5ee4cc(_0x1d45ef);},_0x1d45ef[_0x5134c8(0x175)]=()=>{var _0x36bd0f=_0x5134c8;this[_0x36bd0f(0xc9)]=!0x0,this[_0x36bd0f(0x190)](_0x1d45ef),this['_attemptToReconnectShortly']();},_0x1d45ef[_0x5134c8(0x126)]=_0x4d8eca=>{var _0x179a6b=_0x5134c8;try{if(!(_0x4d8eca!=null&&_0x4d8eca[_0x179a6b(0x18c)])||!this['eventReceivedCallback'])return;let _0x39ae2b=JSON[_0x179a6b(0xc7)](_0x4d8eca[_0x179a6b(0x18c)]);this[_0x179a6b(0x15b)](_0x39ae2b['method'],_0x39ae2b['args'],this['global'],this[_0x179a6b(0xf3)]);}catch{}};})[_0x3aaf5d(0x118)](_0x5a8913=>(this['_connected']=!0x0,this['_connecting']=!0x1,this[_0x3aaf5d(0xc9)]=!0x1,this[_0x3aaf5d(0x162)]=!0x0,this[_0x3aaf5d(0x14d)]=0x0,_0x5a8913))[_0x3aaf5d(0x10a)](_0x2831fc=>(this[_0x3aaf5d(0x11f)]=!0x1,this['_connecting']=!0x1,console[_0x3aaf5d(0x128)](_0x3aaf5d(0xbe)+this[_0x3aaf5d(0x1a2)]),_0x31bcea(new Error(_0x3aaf5d(0x198)+(_0x2831fc&&_0x2831fc['message'])))));}));}[_0x27dfb1(0x190)](_0xc0a794){var _0x84c229=_0x27dfb1;this['_connected']=!0x1,this[_0x84c229(0x13b)]=!0x1;try{_0xc0a794[_0x84c229(0x175)]=null,_0xc0a794[_0x84c229(0x138)]=null,_0xc0a794['onopen']=null;}catch{}try{_0xc0a794[_0x84c229(0x146)]<0x2&&_0xc0a794[_0x84c229(0x1a4)]();}catch{}}[_0x27dfb1(0x1a6)](){var _0x2763ee=_0x27dfb1;clearTimeout(this[_0x2763ee(0xc1)]),!(this['_connectAttemptCount']>=this[_0x2763ee(0x188)])&&(this[_0x2763ee(0xc1)]=setTimeout(()=>{var _0x27daee=_0x2763ee,_0x2450a1;this[_0x27daee(0x11f)]||this[_0x27daee(0x13b)]||(this[_0x27daee(0x157)](),(_0x2450a1=this[_0x27daee(0x113)])==null||_0x2450a1[_0x27daee(0x10a)](()=>this[_0x27daee(0x1a6)]()));},0x1f4),this[_0x2763ee(0xc1)][_0x2763ee(0x141)]&&this['_reconnectTimeout'][_0x2763ee(0x141)]());}async[_0x27dfb1(0x182)](_0x1419ca){var _0x5dce81=_0x27dfb1;try{if(!this[_0x5dce81(0x162)])return;this[_0x5dce81(0xc9)]&&this[_0x5dce81(0x157)](),(await this[_0x5dce81(0x113)])[_0x5dce81(0x182)](JSON['stringify'](_0x1419ca));}catch(_0x28cde3){console['warn'](this[_0x5dce81(0x140)]+':\\x20'+(_0x28cde3&&_0x28cde3[_0x5dce81(0xe3)])),this[_0x5dce81(0x162)]=!0x1,this[_0x5dce81(0x1a6)]();}}};function q(_0x218963,_0x31d0e7,_0x539f3a,_0x1593f9,_0x3dbf6d,_0x4b5d4a,_0xf03e5d,_0x150d67=ie){var _0x31cd87=_0x27dfb1;let _0x58aaa6=_0x539f3a[_0x31cd87(0xd9)](',')[_0x31cd87(0x12c)](_0x1ff0b9=>{var _0x4f50f1=_0x31cd87,_0x4ae7b1,_0x1095f0,_0x46880c,_0xcdff80;try{if(!_0x218963[_0x4f50f1(0x18b)]){let _0xe84c04=((_0x1095f0=(_0x4ae7b1=_0x218963['process'])==null?void 0x0:_0x4ae7b1['versions'])==null?void 0x0:_0x1095f0[_0x4f50f1(0xd6)])||((_0xcdff80=(_0x46880c=_0x218963[_0x4f50f1(0xf4)])==null?void 0x0:_0x46880c[_0x4f50f1(0xe0)])==null?void 0x0:_0xcdff80['NEXT_RUNTIME'])===_0x4f50f1(0x169);(_0x3dbf6d==='next.js'||_0x3dbf6d===_0x4f50f1(0xd5)||_0x3dbf6d==='astro'||_0x3dbf6d===_0x4f50f1(0xef))&&(_0x3dbf6d+=_0xe84c04?_0x4f50f1(0x123):_0x4f50f1(0xc2)),_0x218963['_console_ninja_session']={'id':+new Date(),'tool':_0x3dbf6d},_0xf03e5d&&_0x3dbf6d&&!_0xe84c04&&console['log'](_0x4f50f1(0x197)+(_0x3dbf6d['charAt'](0x0)[_0x4f50f1(0xf8)]()+_0x3dbf6d[_0x4f50f1(0x16f)](0x1))+',',_0x4f50f1(0x19a),_0x4f50f1(0xdf));}let _0x1b1af7=new Z(_0x218963,_0x31d0e7,_0x1ff0b9,_0x1593f9,_0x4b5d4a,_0x150d67);return _0x1b1af7[_0x4f50f1(0x182)]['bind'](_0x1b1af7);}catch(_0x292cb6){return console[_0x4f50f1(0x128)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x292cb6&&_0x292cb6[_0x4f50f1(0xe3)]),()=>{};}});return _0x3d573e=>_0x58aaa6['forEach'](_0x15d9ab=>_0x15d9ab(_0x3d573e));}function ie(_0x21b6e8,_0x162d3d,_0x4cdf39,_0x39ba6c){var _0x3eb6b6=_0x27dfb1;_0x39ba6c&&_0x21b6e8===_0x3eb6b6(0x119)&&_0x4cdf39[_0x3eb6b6(0xd4)]['reload']();}function _0x2eb0(_0x58f8a5,_0x5d3830){var _0x5b34d8=_0x5b34();return _0x2eb0=function(_0x2eb0a8,_0x290247){_0x2eb0a8=_0x2eb0a8-0xb2;var _0x1d1607=_0x5b34d8[_0x2eb0a8];return _0x1d1607;},_0x2eb0(_0x58f8a5,_0x5d3830);}function _0x5b34(){var _0x25ff11=['_inNextEdge','stack','_isNegativeZero','[object\\x20Date]','catch','_processTreeNodeResult','_setNodeId','number','HTMLAllCollection','getOwnPropertySymbols','285lGWtQI','next.js','setter','_ws','set','rootExpression','level','null','then','reload','_addLoadNode','_treeNodePropertiesAfterFullValue','getWebSocketClass','autoExpandMaxDepth','Set','_connected','date','dockerizedApp','performance','\\x20server','_p_','disabledLog','onmessage','props','warn','WebSocket','funcName','root_exp_id','map','log','_setNodeExpandableState','isExpressionToEvaluate','_numberRegExp','match','_ninjaIgnoreNextError','_objectToString','toLowerCase','_addProperty','expId','hits','onerror','_regExpToString','strLength','_connecting','boolean','_WebSocket','4545200mbnUAx','_isSet','_sendErrorMessage','unref','sortProps','indexOf','index','positiveInfinity','readyState','port','19748QCYiWf','Boolean','getOwnPropertyDescriptor','_console_ninja','_isMap','_connectAttemptCount','prototype','serialize','...','String','nan','Error','_setNodePermissions','[object\\x20BigInt]','push','_connectToHostNow','910TdjKkr','stringify','_p_length','eventReceivedCallback','autoExpandLimit','gateway.docker.internal','_blacklistedProperty','1','forEach','args','_allowedToSend','array','_p_name','global','getter',"/Users/lluispujadas/.vscode/extensions/wallabyjs.console-ninja-1.0.367/node_modules",'cappedProps','edge','https://tinyurl.com/37x8b79t','url','now','NEXT_RUNTIME','versions','substr','bigint','valueOf','trace','NEGATIVE_INFINITY','Map','onclose','_isPrimitiveType','string','object','899040jBaXOp','pop','slice','_getOwnPropertyNames','endsWith','call','[object\\x20Map]','negativeInfinity','elements','send','64437','RegExp','capped','allStrLength','timeStamp','_maxConnectAttemptCount','reduceLimits','_property','_console_ninja_session','data','cappedElements','test','_sortProps','_disposeWebsocket','unshift','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_getOwnPropertySymbols','16650BnsXPc','1.0.0','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','parent','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','origin','unknown','_WebSocketClass','autoExpandPreviousObjects','logger\\x20websocket\\x20error','POSITIVE_INFINITY','undefined','_webSocketErrorDocsLink','negativeZero','close','stackTraceLimit','_attemptToReconnectShortly','[object\\x20Set]','path','_addObjectProperty','totalStrLength','Symbol','[object\\x20Array]','7XAYoxw','_propertyName','','perf_hooks','_isUndefined','706iFWgqO','','_cleanNode','_socket','function','_HTMLAllCollection','363416eblmct','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','pathToFileURL','hostname','_reconnectTimeout','\\x20browser',["localhost","127.0.0.1","example.cypress.io","MacBook-Pro.local","192.168.1.44"],'elapsed','name','type','parse','current','_allowedToConnectOnSend','_capIfString','autoExpand','host','create','Number','includes','_setNodeLabel','_dateToString','autoExpandPropertyCount','startsWith','location','remix','node','ws://','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','split','length','fromCharCode','console','_keyStrRegExp','error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','env','_isPrimitiveWrapperType','depth','message','some','replace','_type','_additionalMetadata','hasOwnProperty','_setNodeQueryPath','value','time','_Symbol','nodeModules','root_exp','angular','_undefined','enumerable','symbol','_inBrowser','process','coverage','1242wExnaH','count','toUpperCase','_addFunctionsNode','_getOwnPropertyDescriptor','100428WmJzlv','toString','_treeNodePropertiesBeforeFullValue','concat','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','hrtime','getOwnPropertyNames','join','__es'+'Module','noFunctions','_isArray'];_0x5b34=function(){return _0x25ff11;};return _0x5b34();}function B(_0x3d0f02){var _0x139fcf=_0x27dfb1,_0x5cbde8,_0x54f09f;let _0x3dee93=function(_0x53cca7,_0x17266b){return _0x17266b-_0x53cca7;},_0x47e551;if(_0x3d0f02[_0x139fcf(0x122)])_0x47e551=function(){var _0x5bf4b8=_0x139fcf;return _0x3d0f02[_0x5bf4b8(0x122)]['now']();};else{if(_0x3d0f02[_0x139fcf(0xf4)]&&_0x3d0f02[_0x139fcf(0xf4)][_0x139fcf(0x100)]&&((_0x54f09f=(_0x5cbde8=_0x3d0f02[_0x139fcf(0xf4)])==null?void 0x0:_0x5cbde8[_0x139fcf(0xe0)])==null?void 0x0:_0x54f09f[_0x139fcf(0x16d)])!=='edge')_0x47e551=function(){var _0x24d3fa=_0x139fcf;return _0x3d0f02[_0x24d3fa(0xf4)][_0x24d3fa(0x100)]();},_0x3dee93=function(_0x17d41b,_0x247276){return 0x3e8*(_0x247276[0x0]-_0x17d41b[0x0])+(_0x247276[0x1]-_0x17d41b[0x1])/0xf4240;};else try{let {performance:_0x5d3286}=require(_0x139fcf(0xb5));_0x47e551=function(){var _0x310db2=_0x139fcf;return _0x5d3286[_0x310db2(0x16c)]();};}catch{_0x47e551=function(){return+new Date();};}}return{'elapsed':_0x3dee93,'timeStamp':_0x47e551,'now':()=>Date[_0x139fcf(0x16c)]()};}function H(_0x42dcc5,_0x30dfcb,_0x1ed495){var _0x54b50b=_0x27dfb1,_0x2cd794,_0xdc081d,_0x26c154,_0x1430f5,_0x54b047;if(_0x42dcc5[_0x54b50b(0x193)]!==void 0x0)return _0x42dcc5[_0x54b50b(0x193)];let _0x128378=((_0xdc081d=(_0x2cd794=_0x42dcc5[_0x54b50b(0xf4)])==null?void 0x0:_0x2cd794[_0x54b50b(0x16e)])==null?void 0x0:_0xdc081d['node'])||((_0x1430f5=(_0x26c154=_0x42dcc5[_0x54b50b(0xf4)])==null?void 0x0:_0x26c154[_0x54b50b(0xe0)])==null?void 0x0:_0x1430f5['NEXT_RUNTIME'])==='edge';function _0x4f0bb3(_0x43a491){var _0x4d72ad=_0x54b50b;if(_0x43a491[_0x4d72ad(0xd3)]('/')&&_0x43a491[_0x4d72ad(0x17d)]('/')){let _0x32b5d1=new RegExp(_0x43a491[_0x4d72ad(0x17b)](0x1,-0x1));return _0x3821f8=>_0x32b5d1['test'](_0x3821f8);}else{if(_0x43a491[_0x4d72ad(0xcf)]('*')||_0x43a491[_0x4d72ad(0xcf)]('?')){let _0x2a0abb=new RegExp('^'+_0x43a491[_0x4d72ad(0xe5)](/\\./g,String['fromCharCode'](0x5c)+'.')[_0x4d72ad(0xe5)](/\\*/g,'.*')[_0x4d72ad(0xe5)](/\\?/g,'.')+String[_0x4d72ad(0xdb)](0x24));return _0x38f3b0=>_0x2a0abb['test'](_0x38f3b0);}else return _0x28ddba=>_0x28ddba===_0x43a491;}}let _0xf70c1e=_0x30dfcb[_0x54b50b(0x12c)](_0x4f0bb3);return _0x42dcc5[_0x54b50b(0x193)]=_0x128378||!_0x30dfcb,!_0x42dcc5[_0x54b50b(0x193)]&&((_0x54b047=_0x42dcc5[_0x54b50b(0xd4)])==null?void 0x0:_0x54b047[_0x54b50b(0xc0)])&&(_0x42dcc5[_0x54b50b(0x193)]=_0xf70c1e[_0x54b50b(0xe4)](_0x4f6e85=>_0x4f6e85(_0x42dcc5[_0x54b50b(0xd4)][_0x54b50b(0xc0)]))),_0x42dcc5[_0x54b50b(0x193)];}function X(_0x58390b,_0xde0dd7,_0x601595,_0x37673f){var _0x3e2cd3=_0x27dfb1;_0x58390b=_0x58390b,_0xde0dd7=_0xde0dd7,_0x601595=_0x601595,_0x37673f=_0x37673f;let _0x29b02e=B(_0x58390b),_0x2c959d=_0x29b02e[_0x3e2cd3(0xc4)],_0x302382=_0x29b02e[_0x3e2cd3(0x187)];class _0x7af3d3{constructor(){var _0x31add1=_0x3e2cd3;this[_0x31add1(0xdd)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x31add1(0x130)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x58390b[_0x31add1(0x1a1)],this[_0x31add1(0xbc)]=_0x58390b['HTMLAllCollection'],this[_0x31add1(0xfa)]=Object[_0x31add1(0x14a)],this['_getOwnPropertyNames']=Object[_0x31add1(0x101)],this[_0x31add1(0xec)]=_0x58390b[_0x31add1(0x1ab)],this[_0x31add1(0x139)]=RegExp['prototype'][_0x31add1(0xfc)],this[_0x31add1(0xd1)]=Date[_0x31add1(0x14e)][_0x31add1(0xfc)];}[_0x3e2cd3(0x14f)](_0x484ef4,_0x3dc365,_0x31438c,_0x5ee9df){var _0x229aa9=_0x3e2cd3,_0x59a4b4=this,_0x4affe9=_0x31438c['autoExpand'];function _0x46e6a9(_0x3f8690,_0x4d5cca,_0x14df34){var _0x4d018d=_0x2eb0;_0x4d5cca['type']='unknown',_0x4d5cca['error']=_0x3f8690[_0x4d018d(0xe3)],_0x49b09f=_0x14df34['node'][_0x4d018d(0xc8)],_0x14df34[_0x4d018d(0xd6)]['current']=_0x4d5cca,_0x59a4b4[_0x4d018d(0xfd)](_0x4d5cca,_0x14df34);}try{_0x31438c[_0x229aa9(0x116)]++,_0x31438c['autoExpand']&&_0x31438c['autoExpandPreviousObjects'][_0x229aa9(0x156)](_0x3dc365);var _0x3555b1,_0x30547f,_0x418379,_0x1b663c,_0x295735=[],_0x169520=[],_0x230785,_0x90ea4b=this[_0x229aa9(0xe6)](_0x3dc365),_0x209fbe=_0x90ea4b===_0x229aa9(0x163),_0x2cb8f3=!0x1,_0x516521=_0x90ea4b===_0x229aa9(0xbb),_0x243648=this[_0x229aa9(0x176)](_0x90ea4b),_0x9a89ef=this[_0x229aa9(0xe1)](_0x90ea4b),_0x5aa68d=_0x243648||_0x9a89ef,_0x54cf96={},_0x34a778=0x0,_0x188f79=!0x1,_0x49b09f,_0x3374ce=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x31438c[_0x229aa9(0xe2)]){if(_0x209fbe){if(_0x30547f=_0x3dc365[_0x229aa9(0xda)],_0x30547f>_0x31438c[_0x229aa9(0x181)]){for(_0x418379=0x0,_0x1b663c=_0x31438c[_0x229aa9(0x181)],_0x3555b1=_0x418379;_0x3555b1<_0x1b663c;_0x3555b1++)_0x169520[_0x229aa9(0x156)](_0x59a4b4['_addProperty'](_0x295735,_0x3dc365,_0x90ea4b,_0x3555b1,_0x31438c));_0x484ef4[_0x229aa9(0x18d)]=!0x0;}else{for(_0x418379=0x0,_0x1b663c=_0x30547f,_0x3555b1=_0x418379;_0x3555b1<_0x1b663c;_0x3555b1++)_0x169520['push'](_0x59a4b4[_0x229aa9(0x135)](_0x295735,_0x3dc365,_0x90ea4b,_0x3555b1,_0x31438c));}_0x31438c['autoExpandPropertyCount']+=_0x169520['length'];}if(!(_0x90ea4b==='null'||_0x90ea4b===_0x229aa9(0x1a1))&&!_0x243648&&_0x90ea4b!==_0x229aa9(0x151)&&_0x90ea4b!=='Buffer'&&_0x90ea4b!==_0x229aa9(0x170)){var _0x6a926e=_0x5ee9df['props']||_0x31438c[_0x229aa9(0x127)];if(this[_0x229aa9(0x13f)](_0x3dc365)?(_0x3555b1=0x0,_0x3dc365[_0x229aa9(0x160)](function(_0x4aec48){var _0x1e7eab=_0x229aa9;if(_0x34a778++,_0x31438c[_0x1e7eab(0xd2)]++,_0x34a778>_0x6a926e){_0x188f79=!0x0;return;}if(!_0x31438c[_0x1e7eab(0x12f)]&&_0x31438c[_0x1e7eab(0xcb)]&&_0x31438c[_0x1e7eab(0xd2)]>_0x31438c[_0x1e7eab(0x15c)]){_0x188f79=!0x0;return;}_0x169520['push'](_0x59a4b4[_0x1e7eab(0x135)](_0x295735,_0x3dc365,'Set',_0x3555b1++,_0x31438c,function(_0x2767d6){return function(){return _0x2767d6;};}(_0x4aec48)));})):this[_0x229aa9(0x14c)](_0x3dc365)&&_0x3dc365[_0x229aa9(0x160)](function(_0x4e4910,_0x4a0948){var _0x5c8782=_0x229aa9;if(_0x34a778++,_0x31438c['autoExpandPropertyCount']++,_0x34a778>_0x6a926e){_0x188f79=!0x0;return;}if(!_0x31438c[_0x5c8782(0x12f)]&&_0x31438c[_0x5c8782(0xcb)]&&_0x31438c[_0x5c8782(0xd2)]>_0x31438c[_0x5c8782(0x15c)]){_0x188f79=!0x0;return;}var _0x2957aa=_0x4a0948[_0x5c8782(0xfc)]();_0x2957aa[_0x5c8782(0xda)]>0x64&&(_0x2957aa=_0x2957aa[_0x5c8782(0x17b)](0x0,0x64)+_0x5c8782(0x150)),_0x169520[_0x5c8782(0x156)](_0x59a4b4[_0x5c8782(0x135)](_0x295735,_0x3dc365,_0x5c8782(0x174),_0x2957aa,_0x31438c,function(_0x4c8318){return function(){return _0x4c8318;};}(_0x4e4910)));}),!_0x2cb8f3){try{for(_0x230785 in _0x3dc365)if(!(_0x209fbe&&_0x3374ce['test'](_0x230785))&&!this['_blacklistedProperty'](_0x3dc365,_0x230785,_0x31438c)){if(_0x34a778++,_0x31438c[_0x229aa9(0xd2)]++,_0x34a778>_0x6a926e){_0x188f79=!0x0;break;}if(!_0x31438c[_0x229aa9(0x12f)]&&_0x31438c[_0x229aa9(0xcb)]&&_0x31438c[_0x229aa9(0xd2)]>_0x31438c[_0x229aa9(0x15c)]){_0x188f79=!0x0;break;}_0x169520['push'](_0x59a4b4[_0x229aa9(0x1a9)](_0x295735,_0x54cf96,_0x3dc365,_0x90ea4b,_0x230785,_0x31438c));}}catch{}if(_0x54cf96[_0x229aa9(0x15a)]=!0x0,_0x516521&&(_0x54cf96[_0x229aa9(0x164)]=!0x0),!_0x188f79){var _0x3129e7=[][_0x229aa9(0xfe)](this[_0x229aa9(0x17c)](_0x3dc365))[_0x229aa9(0xfe)](this[_0x229aa9(0x194)](_0x3dc365));for(_0x3555b1=0x0,_0x30547f=_0x3129e7[_0x229aa9(0xda)];_0x3555b1<_0x30547f;_0x3555b1++)if(_0x230785=_0x3129e7[_0x3555b1],!(_0x209fbe&&_0x3374ce[_0x229aa9(0x18e)](_0x230785[_0x229aa9(0xfc)]()))&&!this[_0x229aa9(0x15e)](_0x3dc365,_0x230785,_0x31438c)&&!_0x54cf96[_0x229aa9(0x124)+_0x230785[_0x229aa9(0xfc)]()]){if(_0x34a778++,_0x31438c[_0x229aa9(0xd2)]++,_0x34a778>_0x6a926e){_0x188f79=!0x0;break;}if(!_0x31438c[_0x229aa9(0x12f)]&&_0x31438c['autoExpand']&&_0x31438c[_0x229aa9(0xd2)]>_0x31438c['autoExpandLimit']){_0x188f79=!0x0;break;}_0x169520[_0x229aa9(0x156)](_0x59a4b4[_0x229aa9(0x1a9)](_0x295735,_0x54cf96,_0x3dc365,_0x90ea4b,_0x230785,_0x31438c));}}}}}if(_0x484ef4[_0x229aa9(0xc6)]=_0x90ea4b,_0x5aa68d?(_0x484ef4['value']=_0x3dc365[_0x229aa9(0x171)](),this['_capIfString'](_0x90ea4b,_0x484ef4,_0x31438c,_0x5ee9df)):_0x90ea4b===_0x229aa9(0x120)?_0x484ef4['value']=this['_dateToString'][_0x229aa9(0x17e)](_0x3dc365):_0x90ea4b===_0x229aa9(0x170)?_0x484ef4[_0x229aa9(0xea)]=_0x3dc365[_0x229aa9(0xfc)]():_0x90ea4b===_0x229aa9(0x184)?_0x484ef4[_0x229aa9(0xea)]=this['_regExpToString'][_0x229aa9(0x17e)](_0x3dc365):_0x90ea4b===_0x229aa9(0xf2)&&this[_0x229aa9(0xec)]?_0x484ef4[_0x229aa9(0xea)]=this[_0x229aa9(0xec)]['prototype'][_0x229aa9(0xfc)]['call'](_0x3dc365):!_0x31438c[_0x229aa9(0xe2)]&&!(_0x90ea4b===_0x229aa9(0x117)||_0x90ea4b==='undefined')&&(delete _0x484ef4[_0x229aa9(0xea)],_0x484ef4[_0x229aa9(0x185)]=!0x0),_0x188f79&&(_0x484ef4[_0x229aa9(0x168)]=!0x0),_0x49b09f=_0x31438c[_0x229aa9(0xd6)]['current'],_0x31438c[_0x229aa9(0xd6)][_0x229aa9(0xc8)]=_0x484ef4,this[_0x229aa9(0xfd)](_0x484ef4,_0x31438c),_0x169520[_0x229aa9(0xda)]){for(_0x3555b1=0x0,_0x30547f=_0x169520[_0x229aa9(0xda)];_0x3555b1<_0x30547f;_0x3555b1++)_0x169520[_0x3555b1](_0x3555b1);}_0x295735[_0x229aa9(0xda)]&&(_0x484ef4[_0x229aa9(0x127)]=_0x295735);}catch(_0x5e8abc){_0x46e6a9(_0x5e8abc,_0x484ef4,_0x31438c);}return this['_additionalMetadata'](_0x3dc365,_0x484ef4),this[_0x229aa9(0x11b)](_0x484ef4,_0x31438c),_0x31438c['node']['current']=_0x49b09f,_0x31438c['level']--,_0x31438c[_0x229aa9(0xcb)]=_0x4affe9,_0x31438c[_0x229aa9(0xcb)]&&_0x31438c[_0x229aa9(0x19e)][_0x229aa9(0x17a)](),_0x484ef4;}[_0x3e2cd3(0x194)](_0x247dc5){var _0x1376f8=_0x3e2cd3;return Object[_0x1376f8(0x10f)]?Object[_0x1376f8(0x10f)](_0x247dc5):[];}[_0x3e2cd3(0x13f)](_0xebfc77){var _0x3c8aaa=_0x3e2cd3;return!!(_0xebfc77&&_0x58390b['Set']&&this['_objectToString'](_0xebfc77)===_0x3c8aaa(0x1a7)&&_0xebfc77['forEach']);}[_0x3e2cd3(0x15e)](_0x449227,_0x43baa8,_0x4bfa8e){var _0x11bb4f=_0x3e2cd3;return _0x4bfa8e[_0x11bb4f(0x104)]?typeof _0x449227[_0x43baa8]==_0x11bb4f(0xbb):!0x1;}[_0x3e2cd3(0xe6)](_0x1a6407){var _0x22fad0=_0x3e2cd3,_0x3aba35='';return _0x3aba35=typeof _0x1a6407,_0x3aba35===_0x22fad0(0x178)?this[_0x22fad0(0x133)](_0x1a6407)==='[object\\x20Array]'?_0x3aba35='array':this[_0x22fad0(0x133)](_0x1a6407)===_0x22fad0(0x109)?_0x3aba35=_0x22fad0(0x120):this[_0x22fad0(0x133)](_0x1a6407)===_0x22fad0(0x155)?_0x3aba35=_0x22fad0(0x170):_0x1a6407===null?_0x3aba35=_0x22fad0(0x117):_0x1a6407['constructor']&&(_0x3aba35=_0x1a6407['constructor'][_0x22fad0(0xc5)]||_0x3aba35):_0x3aba35==='undefined'&&this['_HTMLAllCollection']&&_0x1a6407 instanceof this[_0x22fad0(0xbc)]&&(_0x3aba35=_0x22fad0(0x10e)),_0x3aba35;}['_objectToString'](_0x258a5c){var _0x498e75=_0x3e2cd3;return Object['prototype'][_0x498e75(0xfc)][_0x498e75(0x17e)](_0x258a5c);}['_isPrimitiveType'](_0x516727){var _0x5bf185=_0x3e2cd3;return _0x516727===_0x5bf185(0x13c)||_0x516727===_0x5bf185(0x177)||_0x516727===_0x5bf185(0x10d);}['_isPrimitiveWrapperType'](_0x3e9b0a){var _0x4c547a=_0x3e2cd3;return _0x3e9b0a===_0x4c547a(0x149)||_0x3e9b0a===_0x4c547a(0x151)||_0x3e9b0a===_0x4c547a(0xce);}[_0x3e2cd3(0x135)](_0xc0bae7,_0x18507c,_0x1575a9,_0x54a40e,_0x9087c3,_0xf1c372){var _0x267ec9=this;return function(_0x5b8336){var _0x388447=_0x2eb0,_0x4513de=_0x9087c3[_0x388447(0xd6)][_0x388447(0xc8)],_0x23a220=_0x9087c3['node'][_0x388447(0x144)],_0x3e263d=_0x9087c3['node'][_0x388447(0x199)];_0x9087c3[_0x388447(0xd6)][_0x388447(0x199)]=_0x4513de,_0x9087c3[_0x388447(0xd6)][_0x388447(0x144)]=typeof _0x54a40e=='number'?_0x54a40e:_0x5b8336,_0xc0bae7[_0x388447(0x156)](_0x267ec9[_0x388447(0x18a)](_0x18507c,_0x1575a9,_0x54a40e,_0x9087c3,_0xf1c372)),_0x9087c3[_0x388447(0xd6)]['parent']=_0x3e263d,_0x9087c3[_0x388447(0xd6)][_0x388447(0x144)]=_0x23a220;};}[_0x3e2cd3(0x1a9)](_0x52b1ca,_0x21995a,_0x296198,_0x459567,_0xd965f8,_0x31094d,_0x34c82e){var _0x149c90=_0x3e2cd3,_0x496032=this;return _0x21995a['_p_'+_0xd965f8[_0x149c90(0xfc)]()]=!0x0,function(_0x770d6e){var _0x42686d=_0x149c90,_0x1a01b6=_0x31094d[_0x42686d(0xd6)][_0x42686d(0xc8)],_0x16eb05=_0x31094d[_0x42686d(0xd6)][_0x42686d(0x144)],_0xc93d48=_0x31094d[_0x42686d(0xd6)][_0x42686d(0x199)];_0x31094d['node'][_0x42686d(0x199)]=_0x1a01b6,_0x31094d[_0x42686d(0xd6)]['index']=_0x770d6e,_0x52b1ca[_0x42686d(0x156)](_0x496032['_property'](_0x296198,_0x459567,_0xd965f8,_0x31094d,_0x34c82e)),_0x31094d[_0x42686d(0xd6)][_0x42686d(0x199)]=_0xc93d48,_0x31094d[_0x42686d(0xd6)][_0x42686d(0x144)]=_0x16eb05;};}[_0x3e2cd3(0x18a)](_0x4ef25b,_0x3b29bb,_0xfdab28,_0x2a72ad,_0xe0783c){var _0x10750d=_0x3e2cd3,_0x39f07b=this;_0xe0783c||(_0xe0783c=function(_0x5d322e,_0x21f6bc){return _0x5d322e[_0x21f6bc];});var _0x45d640=_0xfdab28[_0x10750d(0xfc)](),_0xbc2938=_0x2a72ad['expressionsToEvaluate']||{},_0x262794=_0x2a72ad['depth'],_0x234435=_0x2a72ad['isExpressionToEvaluate'];try{var _0x30532a=this[_0x10750d(0x14c)](_0x4ef25b),_0x1a8fc9=_0x45d640;_0x30532a&&_0x1a8fc9[0x0]==='\\x27'&&(_0x1a8fc9=_0x1a8fc9[_0x10750d(0x16f)](0x1,_0x1a8fc9[_0x10750d(0xda)]-0x2));var _0x27f80b=_0x2a72ad['expressionsToEvaluate']=_0xbc2938[_0x10750d(0x124)+_0x1a8fc9];_0x27f80b&&(_0x2a72ad[_0x10750d(0xe2)]=_0x2a72ad[_0x10750d(0xe2)]+0x1),_0x2a72ad[_0x10750d(0x12f)]=!!_0x27f80b;var _0xa473b8=typeof _0xfdab28=='symbol',_0x52380a={'name':_0xa473b8||_0x30532a?_0x45d640:this[_0x10750d(0xb3)](_0x45d640)};if(_0xa473b8&&(_0x52380a['symbol']=!0x0),!(_0x3b29bb===_0x10750d(0x163)||_0x3b29bb===_0x10750d(0x153))){var _0x368f46=this[_0x10750d(0xfa)](_0x4ef25b,_0xfdab28);if(_0x368f46&&(_0x368f46[_0x10750d(0x114)]&&(_0x52380a[_0x10750d(0x112)]=!0x0),_0x368f46['get']&&!_0x27f80b&&!_0x2a72ad['resolveGetters']))return _0x52380a[_0x10750d(0x166)]=!0x0,this['_processTreeNodeResult'](_0x52380a,_0x2a72ad),_0x52380a;}var _0x486ca2;try{_0x486ca2=_0xe0783c(_0x4ef25b,_0xfdab28);}catch(_0x5e2001){return _0x52380a={'name':_0x45d640,'type':'unknown','error':_0x5e2001[_0x10750d(0xe3)]},this['_processTreeNodeResult'](_0x52380a,_0x2a72ad),_0x52380a;}var _0x1a3e3a=this[_0x10750d(0xe6)](_0x486ca2),_0x1a413b=this[_0x10750d(0x176)](_0x1a3e3a);if(_0x52380a['type']=_0x1a3e3a,_0x1a413b)this[_0x10750d(0x10b)](_0x52380a,_0x2a72ad,_0x486ca2,function(){var _0x42f37f=_0x10750d;_0x52380a[_0x42f37f(0xea)]=_0x486ca2['valueOf'](),!_0x27f80b&&_0x39f07b[_0x42f37f(0xca)](_0x1a3e3a,_0x52380a,_0x2a72ad,{});});else{var _0x237837=_0x2a72ad[_0x10750d(0xcb)]&&_0x2a72ad['level']<_0x2a72ad['autoExpandMaxDepth']&&_0x2a72ad[_0x10750d(0x19e)][_0x10750d(0x143)](_0x486ca2)<0x0&&_0x1a3e3a!==_0x10750d(0xbb)&&_0x2a72ad[_0x10750d(0xd2)]<_0x2a72ad[_0x10750d(0x15c)];_0x237837||_0x2a72ad[_0x10750d(0x116)]<_0x262794||_0x27f80b?(this[_0x10750d(0x14f)](_0x52380a,_0x486ca2,_0x2a72ad,_0x27f80b||{}),this[_0x10750d(0xe7)](_0x486ca2,_0x52380a)):this[_0x10750d(0x10b)](_0x52380a,_0x2a72ad,_0x486ca2,function(){var _0x39e7eb=_0x10750d;_0x1a3e3a===_0x39e7eb(0x117)||_0x1a3e3a===_0x39e7eb(0x1a1)||(delete _0x52380a[_0x39e7eb(0xea)],_0x52380a[_0x39e7eb(0x185)]=!0x0);});}return _0x52380a;}finally{_0x2a72ad['expressionsToEvaluate']=_0xbc2938,_0x2a72ad['depth']=_0x262794,_0x2a72ad[_0x10750d(0x12f)]=_0x234435;}}['_capIfString'](_0xfdb64c,_0x385e2a,_0x10fa62,_0x3187ba){var _0x32f434=_0x3e2cd3,_0x298604=_0x3187ba[_0x32f434(0x13a)]||_0x10fa62['strLength'];if((_0xfdb64c==='string'||_0xfdb64c===_0x32f434(0x151))&&_0x385e2a['value']){let _0x378f39=_0x385e2a[_0x32f434(0xea)][_0x32f434(0xda)];_0x10fa62['allStrLength']+=_0x378f39,_0x10fa62[_0x32f434(0x186)]>_0x10fa62['totalStrLength']?(_0x385e2a[_0x32f434(0x185)]='',delete _0x385e2a[_0x32f434(0xea)]):_0x378f39>_0x298604&&(_0x385e2a[_0x32f434(0x185)]=_0x385e2a[_0x32f434(0xea)][_0x32f434(0x16f)](0x0,_0x298604),delete _0x385e2a[_0x32f434(0xea)]);}}['_isMap'](_0xa5175){var _0x3bb613=_0x3e2cd3;return!!(_0xa5175&&_0x58390b[_0x3bb613(0x174)]&&this[_0x3bb613(0x133)](_0xa5175)===_0x3bb613(0x17f)&&_0xa5175[_0x3bb613(0x160)]);}[_0x3e2cd3(0xb3)](_0x536c02){var _0x10251a=_0x3e2cd3;if(_0x536c02[_0x10251a(0x131)](/^\\d+$/))return _0x536c02;var _0xd6950;try{_0xd6950=JSON[_0x10251a(0x159)](''+_0x536c02);}catch{_0xd6950='\\x22'+this[_0x10251a(0x133)](_0x536c02)+'\\x22';}return _0xd6950[_0x10251a(0x131)](/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?_0xd6950=_0xd6950[_0x10251a(0x16f)](0x1,_0xd6950['length']-0x2):_0xd6950=_0xd6950[_0x10251a(0xe5)](/'/g,'\\x5c\\x27')[_0x10251a(0xe5)](/\\\\"/g,'\\x22')[_0x10251a(0xe5)](/(^"|"$)/g,'\\x27'),_0xd6950;}[_0x3e2cd3(0x10b)](_0x3dc083,_0x308734,_0x3296fb,_0x1d642f){var _0x354482=_0x3e2cd3;this['_treeNodePropertiesBeforeFullValue'](_0x3dc083,_0x308734),_0x1d642f&&_0x1d642f(),this[_0x354482(0xe7)](_0x3296fb,_0x3dc083),this['_treeNodePropertiesAfterFullValue'](_0x3dc083,_0x308734);}[_0x3e2cd3(0xfd)](_0x1a0e1e,_0x1864b2){var _0x1513c2=_0x3e2cd3;this[_0x1513c2(0x10c)](_0x1a0e1e,_0x1864b2),this[_0x1513c2(0xe9)](_0x1a0e1e,_0x1864b2),this['_setNodeExpressionPath'](_0x1a0e1e,_0x1864b2),this[_0x1513c2(0x154)](_0x1a0e1e,_0x1864b2);}[_0x3e2cd3(0x10c)](_0x1f0f4a,_0x472368){}[_0x3e2cd3(0xe9)](_0x3e79bd,_0x2a3a37){}[_0x3e2cd3(0xd0)](_0x183c72,_0x1611b9){}[_0x3e2cd3(0xb6)](_0x147d69){var _0xdc3320=_0x3e2cd3;return _0x147d69===this[_0xdc3320(0xf0)];}['_treeNodePropertiesAfterFullValue'](_0x33a0b8,_0x4164bb){var _0x31b86a=_0x3e2cd3;this['_setNodeLabel'](_0x33a0b8,_0x4164bb),this[_0x31b86a(0x12e)](_0x33a0b8),_0x4164bb[_0x31b86a(0x142)]&&this[_0x31b86a(0x18f)](_0x33a0b8),this[_0x31b86a(0xf9)](_0x33a0b8,_0x4164bb),this[_0x31b86a(0x11a)](_0x33a0b8,_0x4164bb),this[_0x31b86a(0xb9)](_0x33a0b8);}[_0x3e2cd3(0xe7)](_0x2e3d98,_0x2e4e83){var _0x475706=_0x3e2cd3;let _0x2c4293;try{_0x58390b[_0x475706(0xdc)]&&(_0x2c4293=_0x58390b[_0x475706(0xdc)][_0x475706(0xde)],_0x58390b[_0x475706(0xdc)][_0x475706(0xde)]=function(){}),_0x2e3d98&&typeof _0x2e3d98[_0x475706(0xda)]==_0x475706(0x10d)&&(_0x2e4e83[_0x475706(0xda)]=_0x2e3d98[_0x475706(0xda)]);}catch{}finally{_0x2c4293&&(_0x58390b['console'][_0x475706(0xde)]=_0x2c4293);}if(_0x2e4e83[_0x475706(0xc6)]==='number'||_0x2e4e83[_0x475706(0xc6)]===_0x475706(0xce)){if(isNaN(_0x2e4e83[_0x475706(0xea)]))_0x2e4e83[_0x475706(0x152)]=!0x0,delete _0x2e4e83[_0x475706(0xea)];else switch(_0x2e4e83[_0x475706(0xea)]){case Number[_0x475706(0x1a0)]:_0x2e4e83[_0x475706(0x145)]=!0x0,delete _0x2e4e83[_0x475706(0xea)];break;case Number[_0x475706(0x173)]:_0x2e4e83[_0x475706(0x180)]=!0x0,delete _0x2e4e83[_0x475706(0xea)];break;case 0x0:this[_0x475706(0x108)](_0x2e4e83[_0x475706(0xea)])&&(_0x2e4e83[_0x475706(0x1a3)]=!0x0);break;}}else _0x2e4e83['type']===_0x475706(0xbb)&&typeof _0x2e3d98['name']==_0x475706(0x177)&&_0x2e3d98[_0x475706(0xc5)]&&_0x2e4e83[_0x475706(0xc5)]&&_0x2e3d98[_0x475706(0xc5)]!==_0x2e4e83[_0x475706(0xc5)]&&(_0x2e4e83[_0x475706(0x12a)]=_0x2e3d98[_0x475706(0xc5)]);}[_0x3e2cd3(0x108)](_0x105a6a){var _0x42381b=_0x3e2cd3;return 0x1/_0x105a6a===Number[_0x42381b(0x173)];}[_0x3e2cd3(0x18f)](_0x1e1ad0){var _0x477e8c=_0x3e2cd3;!_0x1e1ad0['props']||!_0x1e1ad0['props'][_0x477e8c(0xda)]||_0x1e1ad0[_0x477e8c(0xc6)]===_0x477e8c(0x163)||_0x1e1ad0[_0x477e8c(0xc6)]==='Map'||_0x1e1ad0[_0x477e8c(0xc6)]===_0x477e8c(0x11e)||_0x1e1ad0[_0x477e8c(0x127)]['sort'](function(_0x5d9a66,_0x1a1a6a){var _0x4f84bc=_0x477e8c,_0x5ea255=_0x5d9a66[_0x4f84bc(0xc5)][_0x4f84bc(0x134)](),_0x20a14a=_0x1a1a6a[_0x4f84bc(0xc5)][_0x4f84bc(0x134)]();return _0x5ea255<_0x20a14a?-0x1:_0x5ea255>_0x20a14a?0x1:0x0;});}[_0x3e2cd3(0xf9)](_0x138d77,_0x51576a){var _0x31928b=_0x3e2cd3;if(!(_0x51576a[_0x31928b(0x104)]||!_0x138d77['props']||!_0x138d77['props'][_0x31928b(0xda)])){for(var _0x45d512=[],_0x510640=[],_0x35743b=0x0,_0xc51ff4=_0x138d77[_0x31928b(0x127)][_0x31928b(0xda)];_0x35743b<_0xc51ff4;_0x35743b++){var _0x4a807a=_0x138d77[_0x31928b(0x127)][_0x35743b];_0x4a807a['type']==='function'?_0x45d512['push'](_0x4a807a):_0x510640[_0x31928b(0x156)](_0x4a807a);}if(!(!_0x510640[_0x31928b(0xda)]||_0x45d512[_0x31928b(0xda)]<=0x1)){_0x138d77[_0x31928b(0x127)]=_0x510640;var _0x29c2ae={'functionsNode':!0x0,'props':_0x45d512};this[_0x31928b(0x10c)](_0x29c2ae,_0x51576a),this[_0x31928b(0xd0)](_0x29c2ae,_0x51576a),this[_0x31928b(0x12e)](_0x29c2ae),this[_0x31928b(0x154)](_0x29c2ae,_0x51576a),_0x29c2ae['id']+='\\x20f',_0x138d77[_0x31928b(0x127)][_0x31928b(0x191)](_0x29c2ae);}}}[_0x3e2cd3(0x11a)](_0x33516a,_0x30dd40){}[_0x3e2cd3(0x12e)](_0x4dbf50){}[_0x3e2cd3(0x105)](_0x28de20){var _0x32f2e1=_0x3e2cd3;return Array['isArray'](_0x28de20)||typeof _0x28de20=='object'&&this[_0x32f2e1(0x133)](_0x28de20)===_0x32f2e1(0x1ac);}[_0x3e2cd3(0x154)](_0x92b7dd,_0x2070fb){}[_0x3e2cd3(0xb9)](_0x4d58c8){var _0x2280da=_0x3e2cd3;delete _0x4d58c8['_hasSymbolPropertyOnItsPath'],delete _0x4d58c8['_hasSetOnItsPath'],delete _0x4d58c8[_0x2280da(0x192)];}['_setNodeExpressionPath'](_0x153876,_0x491a1b){}}let _0x50d0d9=new _0x7af3d3(),_0x5d2256={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x43ed0c={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x19de38(_0x3312e9,_0x41a9de,_0x5a5c9b,_0x52d60b,_0x19b021,_0x47ed3e){var _0x18b841=_0x3e2cd3;let _0x3f0e02,_0x14a7d8;try{_0x14a7d8=_0x302382(),_0x3f0e02=_0x601595[_0x41a9de],!_0x3f0e02||_0x14a7d8-_0x3f0e02['ts']>0x1f4&&_0x3f0e02[_0x18b841(0xf7)]&&_0x3f0e02['time']/_0x3f0e02['count']<0x64?(_0x601595[_0x41a9de]=_0x3f0e02={'count':0x0,'time':0x0,'ts':_0x14a7d8},_0x601595['hits']={}):_0x14a7d8-_0x601595[_0x18b841(0x137)]['ts']>0x32&&_0x601595['hits'][_0x18b841(0xf7)]&&_0x601595['hits'][_0x18b841(0xeb)]/_0x601595[_0x18b841(0x137)][_0x18b841(0xf7)]<0x64&&(_0x601595[_0x18b841(0x137)]={});let _0x2c1cfd=[],_0x447b11=_0x3f0e02['reduceLimits']||_0x601595[_0x18b841(0x137)]['reduceLimits']?_0x43ed0c:_0x5d2256,_0xbd32d5=_0x160e76=>{var _0x51308c=_0x18b841;let _0x24571f={};return _0x24571f[_0x51308c(0x127)]=_0x160e76[_0x51308c(0x127)],_0x24571f[_0x51308c(0x181)]=_0x160e76[_0x51308c(0x181)],_0x24571f['strLength']=_0x160e76[_0x51308c(0x13a)],_0x24571f[_0x51308c(0x1aa)]=_0x160e76['totalStrLength'],_0x24571f[_0x51308c(0x15c)]=_0x160e76['autoExpandLimit'],_0x24571f[_0x51308c(0x11d)]=_0x160e76[_0x51308c(0x11d)],_0x24571f[_0x51308c(0x142)]=!0x1,_0x24571f[_0x51308c(0x104)]=!_0xde0dd7,_0x24571f[_0x51308c(0xe2)]=0x1,_0x24571f['level']=0x0,_0x24571f[_0x51308c(0x136)]=_0x51308c(0x12b),_0x24571f[_0x51308c(0x115)]=_0x51308c(0xee),_0x24571f['autoExpand']=!0x0,_0x24571f[_0x51308c(0x19e)]=[],_0x24571f[_0x51308c(0xd2)]=0x0,_0x24571f['resolveGetters']=!0x0,_0x24571f[_0x51308c(0x186)]=0x0,_0x24571f[_0x51308c(0xd6)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x24571f;};for(var _0x328146=0x0;_0x328146<_0x19b021[_0x18b841(0xda)];_0x328146++)_0x2c1cfd[_0x18b841(0x156)](_0x50d0d9[_0x18b841(0x14f)]({'timeNode':_0x3312e9==='time'||void 0x0},_0x19b021[_0x328146],_0xbd32d5(_0x447b11),{}));if(_0x3312e9===_0x18b841(0x172)||_0x3312e9===_0x18b841(0xde)){let _0x42b07e=Error[_0x18b841(0x1a5)];try{Error[_0x18b841(0x1a5)]=0x1/0x0,_0x2c1cfd['push'](_0x50d0d9[_0x18b841(0x14f)]({'stackNode':!0x0},new Error()[_0x18b841(0x107)],_0xbd32d5(_0x447b11),{'strLength':0x1/0x0}));}finally{Error[_0x18b841(0x1a5)]=_0x42b07e;}}return{'method':_0x18b841(0x12d),'version':_0x37673f,'args':[{'ts':_0x5a5c9b,'session':_0x52d60b,'args':_0x2c1cfd,'id':_0x41a9de,'context':_0x47ed3e}]};}catch(_0x1e7697){return{'method':_0x18b841(0x12d),'version':_0x37673f,'args':[{'ts':_0x5a5c9b,'session':_0x52d60b,'args':[{'type':_0x18b841(0x19c),'error':_0x1e7697&&_0x1e7697[_0x18b841(0xe3)]}],'id':_0x41a9de,'context':_0x47ed3e}]};}finally{try{if(_0x3f0e02&&_0x14a7d8){let _0x3a342a=_0x302382();_0x3f0e02[_0x18b841(0xf7)]++,_0x3f0e02[_0x18b841(0xeb)]+=_0x2c959d(_0x14a7d8,_0x3a342a),_0x3f0e02['ts']=_0x3a342a,_0x601595['hits']['count']++,_0x601595[_0x18b841(0x137)][_0x18b841(0xeb)]+=_0x2c959d(_0x14a7d8,_0x3a342a),_0x601595[_0x18b841(0x137)]['ts']=_0x3a342a,(_0x3f0e02[_0x18b841(0xf7)]>0x32||_0x3f0e02[_0x18b841(0xeb)]>0x64)&&(_0x3f0e02['reduceLimits']=!0x0),(_0x601595[_0x18b841(0x137)][_0x18b841(0xf7)]>0x3e8||_0x601595[_0x18b841(0x137)][_0x18b841(0xeb)]>0x12c)&&(_0x601595[_0x18b841(0x137)][_0x18b841(0x189)]=!0x0);}}catch{}}}return _0x19de38;}((_0x1c8505,_0xd09af8,_0x188f78,_0x390991,_0x169920,_0x4b4693,_0x486b62,_0x27bb10,_0x59dbef,_0x4d352d,_0x23ed9e)=>{var _0x1dbce6=_0x27dfb1;if(_0x1c8505[_0x1dbce6(0x14b)])return _0x1c8505[_0x1dbce6(0x14b)];if(!H(_0x1c8505,_0x27bb10,_0x169920))return _0x1c8505[_0x1dbce6(0x14b)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1c8505['_console_ninja'];let _0x437560=B(_0x1c8505),_0x2cbdff=_0x437560['elapsed'],_0x3e3fce=_0x437560[_0x1dbce6(0x187)],_0x57fd49=_0x437560[_0x1dbce6(0x16c)],_0xc1bd78={'hits':{},'ts':{}},_0x199a72=X(_0x1c8505,_0x59dbef,_0xc1bd78,_0x4b4693),_0x49d00d=_0x37d18d=>{_0xc1bd78['ts'][_0x37d18d]=_0x3e3fce();},_0x3c200f=(_0x3b2ee9,_0x12a589)=>{var _0xd37787=_0x1dbce6;let _0x302c21=_0xc1bd78['ts'][_0x12a589];if(delete _0xc1bd78['ts'][_0x12a589],_0x302c21){let _0x1e1748=_0x2cbdff(_0x302c21,_0x3e3fce());_0x5b61f8(_0x199a72(_0xd37787(0xeb),_0x3b2ee9,_0x57fd49(),_0x5d6eb8,[_0x1e1748],_0x12a589));}},_0x424b6c=_0x3d5295=>{var _0x4edc6c=_0x1dbce6,_0x1c1acb;return _0x169920===_0x4edc6c(0x111)&&_0x1c8505[_0x4edc6c(0x19b)]&&((_0x1c1acb=_0x3d5295==null?void 0x0:_0x3d5295[_0x4edc6c(0x161)])==null?void 0x0:_0x1c1acb[_0x4edc6c(0xda)])&&(_0x3d5295[_0x4edc6c(0x161)][0x0]['origin']=_0x1c8505[_0x4edc6c(0x19b)]),_0x3d5295;};_0x1c8505[_0x1dbce6(0x14b)]={'consoleLog':(_0x18d4c7,_0x98e289)=>{var _0x177f63=_0x1dbce6;_0x1c8505[_0x177f63(0xdc)][_0x177f63(0x12d)][_0x177f63(0xc5)]!==_0x177f63(0x125)&&_0x5b61f8(_0x199a72(_0x177f63(0x12d),_0x18d4c7,_0x57fd49(),_0x5d6eb8,_0x98e289));},'consoleTrace':(_0x3edf3c,_0x1b693b)=>{var _0x152245=_0x1dbce6,_0x4df028,_0x5c5968;_0x1c8505[_0x152245(0xdc)][_0x152245(0x12d)][_0x152245(0xc5)]!=='disabledTrace'&&((_0x5c5968=(_0x4df028=_0x1c8505[_0x152245(0xf4)])==null?void 0x0:_0x4df028[_0x152245(0x16e)])!=null&&_0x5c5968[_0x152245(0xd6)]&&(_0x1c8505['_ninjaIgnoreNextError']=!0x0),_0x5b61f8(_0x424b6c(_0x199a72('trace',_0x3edf3c,_0x57fd49(),_0x5d6eb8,_0x1b693b))));},'consoleError':(_0x42678f,_0x4d5d7a)=>{var _0x19fef1=_0x1dbce6;_0x1c8505[_0x19fef1(0x132)]=!0x0,_0x5b61f8(_0x424b6c(_0x199a72(_0x19fef1(0xde),_0x42678f,_0x57fd49(),_0x5d6eb8,_0x4d5d7a)));},'consoleTime':_0x1cb2cf=>{_0x49d00d(_0x1cb2cf);},'consoleTimeEnd':(_0xc12d3c,_0xf482fb)=>{_0x3c200f(_0xf482fb,_0xc12d3c);},'autoLog':(_0xa0a63c,_0x489660)=>{var _0x294bb6=_0x1dbce6;_0x5b61f8(_0x199a72(_0x294bb6(0x12d),_0x489660,_0x57fd49(),_0x5d6eb8,[_0xa0a63c]));},'autoLogMany':(_0x938700,_0x5ce02a)=>{var _0x8844c3=_0x1dbce6;_0x5b61f8(_0x199a72(_0x8844c3(0x12d),_0x938700,_0x57fd49(),_0x5d6eb8,_0x5ce02a));},'autoTrace':(_0x5956ff,_0xa3ef56)=>{var _0x4e5b8b=_0x1dbce6;_0x5b61f8(_0x424b6c(_0x199a72(_0x4e5b8b(0x172),_0xa3ef56,_0x57fd49(),_0x5d6eb8,[_0x5956ff])));},'autoTraceMany':(_0x18585e,_0x5e6396)=>{_0x5b61f8(_0x424b6c(_0x199a72('trace',_0x18585e,_0x57fd49(),_0x5d6eb8,_0x5e6396)));},'autoTime':(_0x5978c2,_0x5c66db,_0x5166cc)=>{_0x49d00d(_0x5166cc);},'autoTimeEnd':(_0x53fa63,_0x4abfcb,_0x2244cf)=>{_0x3c200f(_0x4abfcb,_0x2244cf);},'coverage':_0x2556ad=>{var _0x3a6b48=_0x1dbce6;_0x5b61f8({'method':_0x3a6b48(0xf5),'version':_0x4b4693,'args':[{'id':_0x2556ad}]});}};let _0x5b61f8=q(_0x1c8505,_0xd09af8,_0x188f78,_0x390991,_0x169920,_0x4d352d,_0x23ed9e),_0x5d6eb8=_0x1c8505[_0x1dbce6(0x18b)];return _0x1c8505[_0x1dbce6(0x14b)];})(globalThis,'127.0.0.1',_0x27dfb1(0x183),_0x27dfb1(0x167),'remix',_0x27dfb1(0x196),'1731709437496',_0x27dfb1(0xc3),_0x27dfb1(0xb8),_0x27dfb1(0xb4),_0x27dfb1(0x15f));`);
  } catch (e) {
  }
}
function oo_tx(i, ...v) {
  try {
    oo_cm().consoleError(i, v);
  } catch (e) {
  }
  return v;
}
