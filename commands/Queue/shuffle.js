const a34_0xfc5d=['cache','djRole','send','channel','roles','findOne','Queue','115187AOQCSB','shuffle','239hkmcRF','selfDeaf',':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!','map','voiceChannel','guild','exports','member','set','1356498iyBpuk','reply','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','682895NbHFFB','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','2112JglqEp','15812TGEjIF','**:boom:\x20Cleared...\x20:stop_button:**','destroy','60AWypRf','3MWIrUS','get','author',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','209625JbhVfg','execute','Shuffles\x20the\x20Queue','players','manager','error','queue','1181948gSfxNm','easy-djs-commandhandler','voice'];function a34_0xe177(_0x13dbd5,_0x8c45ff){return a34_0xe177=function(_0xfc5df9,_0xe177f9){_0xfc5df9=_0xfc5df9-0xab;let _0x5bb53f=a34_0xfc5d[_0xfc5df9];return _0x5bb53f;},a34_0xe177(_0x13dbd5,_0x8c45ff);}const a34_0x592a06=a34_0xe177;(function(_0x531414,_0x372390){const _0x465d94=a34_0xe177;while(!![]){try{const _0x16fa13=parseInt(_0x465d94(0xba))*parseInt(_0x465d94(0xbd))+parseInt(_0x465d94(0xbe))*-parseInt(_0x465d94(0xd3))+parseInt(_0x465d94(0xb4))+parseInt(_0x465d94(0xc2))+parseInt(_0x465d94(0xab))*parseInt(_0x465d94(0xb9))+-parseInt(_0x465d94(0xb7))+-parseInt(_0x465d94(0xc9));if(_0x16fa13===_0x372390)break;else _0x531414['push'](_0x531414['shift']());}catch(_0x36edb5){_0x531414['push'](_0x531414['shift']());}}}(a34_0xfc5d,0xc58f7));const {Command}=require(a34_0x592a06(0xca)),Settings=require('../../database/Settings');module[a34_0x592a06(0xb1)]=new Command({'name':a34_0x592a06(0xd4),'category':a34_0x592a06(0xd2),'aliases':['mix','random'],'description':a34_0x592a06(0xc4),'usage':a34_0x592a06(0xd4)})[a34_0x592a06(0xc3)]((_0x525766,_0x27d6b7,_0x3e581c,_0x3c9a35,_0x1d222c,_0x4791d2)=>{const _0x24386d=a34_0x592a06,{channel:_0x24b4dc}=_0x27d6b7[_0x24386d(0xb2)][_0x24386d(0xcb)];if(!_0x24b4dc)return _0x27d6b7[_0x24386d(0xcf)][_0x24386d(0xce)](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');Settings[_0x24386d(0xd1)]({'guildID':_0x27d6b7[_0x24386d(0xb0)]['id']},async(_0x4d0602,_0x52fe02)=>{const _0x2d7cb5=_0x24386d;if(_0x4d0602)console[_0x2d7cb5(0xc7)](_0x4d0602);if(_0x52fe02){if(_0x52fe02[_0x2d7cb5(0xcd)]&&_0x27d6b7[_0x2d7cb5(0xb0)][_0x2d7cb5(0xd0)][_0x2d7cb5(0xcc)][_0x2d7cb5(0xbf)](_0x52fe02['djRole'])){if(!_0x27d6b7[_0x2d7cb5(0xc0)][_0x2d7cb5(0xd0)]['has'](_0x52fe02[_0x2d7cb5(0xcd)]))return _0x27d6b7[_0x2d7cb5(0xb5)]({'embed':{'description':_0x2d7cb5(0xad)}});}}});if(_0x27d6b7[_0x24386d(0xb2)][_0x24386d(0xcb)][_0x24386d(0xac)])return _0x27d6b7[_0x24386d(0xcf)][_0x24386d(0xce)](_0x24386d(0xc1));const _0x5f0634=_0x27d6b7['guild']['me']['voice']['channel'],_0xd5d8b3=_0x525766[_0x24386d(0xc6)][_0x24386d(0xc5)][_0x24386d(0xbf)](_0x27d6b7[_0x24386d(0xb0)]['id']);if(!_0xd5d8b3||!_0x5f0634)return _0x27d6b7[_0x24386d(0xcf)][_0x24386d(0xce)](_0x24386d(0xb8));if(!_0xd5d8b3['current']<0x1)return _0x27d6b7['channel'][_0x24386d(0xce)](_0x24386d(0xb8));if(_0xd5d8b3&&_0x24b4dc['id']!==_0xd5d8b3[_0x24386d(0xaf)])return _0x27d6b7[_0x24386d(0xcf)][_0x24386d(0xce)](_0x24386d(0xb6));return _0xd5d8b3&&_0x5f0634&&_0x24b4dc['id']!==_0x5f0634['id']&&_0xd5d8b3[_0x24386d(0xbc)](),_0xd5d8b3[_0x24386d(0xb3)]('beforeshuffle',_0xd5d8b3[_0x24386d(0xc8)][_0x24386d(0xae)](_0x1a4e6d=>_0x1a4e6d)),_0xd5d8b3[_0x24386d(0xc8)][_0x24386d(0xd4)](),_0x27d6b7[_0x24386d(0xcf)][_0x24386d(0xce)](_0x24386d(0xbb));});