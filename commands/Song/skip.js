const a47_0x1ef7=['execute','1081270SsVvMr','voice','djRole','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','1777OpnxkM','players','destroy','65350VFKwaR','Votes\x20to\x20skip\x20the\x20current\x20playing\x20song','manager','current','1058NYUysO','skip','queue','**:fast_forward:\x20Skipped\x20:thumbsup:**','reply','stop','next','channel','author','selfDeaf','exports','error','easy-djs-commandhandler','193FnJVKj','865XoROZQ','has','38916nbIjtD','111602eztulx','get','../../database/Settings','roles',':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!','guild','15FFQKGL','voiceChannel','5331yCaaPq','Song','send','188xuUBYb','member'];const a47_0x11bc03=a47_0x563d;(function(_0x3da588,_0x5901b2){const _0x3ea758=a47_0x563d;while(!![]){try{const _0x93d4db=parseInt(_0x3ea758(0x1b8))*parseInt(_0x3ea758(0x19d))+parseInt(_0x3ea758(0x1b2))+parseInt(_0x3ea758(0x196))+parseInt(_0x3ea758(0x1a1))*-parseInt(_0x3ea758(0x1af))+-parseInt(_0x3ea758(0x1ae))*-parseInt(_0x3ea758(0x19a))+-parseInt(_0x3ea758(0x1b1))+-parseInt(_0x3ea758(0x193))*parseInt(_0x3ea758(0x1ba));if(_0x93d4db===_0x5901b2)break;else _0x3da588['push'](_0x3da588['shift']());}catch(_0x352c0e){_0x3da588['push'](_0x3da588['shift']());}}}(a47_0x1ef7,0x88a99));function a47_0x563d(_0x352c69,_0x17311c){return a47_0x563d=function(_0x1ef7ca,_0x563d60){_0x1ef7ca=_0x1ef7ca-0x192;let _0x12e80b=a47_0x1ef7[_0x1ef7ca];return _0x12e80b;},a47_0x563d(_0x352c69,_0x17311c);}const {Command}=require(a47_0x11bc03(0x1ad)),Settings=require(a47_0x11bc03(0x1b4));module[a47_0x11bc03(0x1ab)]=new Command({'name':a47_0x11bc03(0x1a2),'category':a47_0x11bc03(0x1bb),'aliases':[a47_0x11bc03(0x1a7),'s'],'description':a47_0x11bc03(0x19e),'usage':a47_0x11bc03(0x1a2)})[a47_0x11bc03(0x195)]((_0x85c030,_0x29d1a2,_0x162b3f,_0xf3daa8,_0x5afc7f,_0x8d29cb)=>{const _0xdecb29=a47_0x11bc03,{channel:_0x1e4504}=_0x29d1a2[_0xdecb29(0x194)][_0xdecb29(0x197)];if(!_0x1e4504)return _0x29d1a2[_0xdecb29(0x1a8)][_0xdecb29(0x192)](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');Settings['findOne']({'guildID':_0x29d1a2[_0xdecb29(0x1b7)]['id']},async(_0x57403e,_0x224a37)=>{const _0x93948d=_0xdecb29;if(_0x57403e)console[_0x93948d(0x1ac)](_0x57403e);if(_0x224a37){if(_0x224a37[_0x93948d(0x198)]&&_0x29d1a2['guild']['roles']['cache'][_0x93948d(0x1b3)](_0x224a37[_0x93948d(0x198)])){if(!_0x29d1a2[_0x93948d(0x1a9)][_0x93948d(0x1b5)][_0x93948d(0x1b0)](_0x224a37[_0x93948d(0x198)]))return _0x29d1a2[_0x93948d(0x1a5)]({'embed':{'description':_0x93948d(0x1b6)}});}}});if(_0x29d1a2[_0xdecb29(0x194)]['voice'][_0xdecb29(0x1aa)])return _0x29d1a2[_0xdecb29(0x1a8)][_0xdecb29(0x192)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0xa51920=_0x29d1a2[_0xdecb29(0x1b7)]['me'][_0xdecb29(0x197)]['channel'],_0x7b5268=_0x85c030[_0xdecb29(0x19f)][_0xdecb29(0x19b)][_0xdecb29(0x1b3)](_0x29d1a2[_0xdecb29(0x1b7)]['id']);if(!_0x7b5268||!_0xa51920)return _0x29d1a2['channel'][_0xdecb29(0x192)](_0xdecb29(0x199));if(!_0x7b5268[_0xdecb29(0x1a3)]||!_0x7b5268[_0xdecb29(0x1a3)][_0xdecb29(0x1a0)])return _0x29d1a2[_0xdecb29(0x1a8)][_0xdecb29(0x192)]('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(_0x7b5268&&_0x1e4504['id']!==_0x7b5268[_0xdecb29(0x1b9)])return _0x29d1a2[_0xdecb29(0x1a8)][_0xdecb29(0x192)]('**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**');return _0x7b5268&&_0xa51920&&_0x1e4504['id']!==_0xa51920['id']&&_0x7b5268[_0xdecb29(0x19c)](),_0x7b5268[_0xdecb29(0x1a6)](),_0x29d1a2[_0xdecb29(0x1a8)][_0xdecb29(0x192)](_0xdecb29(0x1a4));});