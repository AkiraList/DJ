const a36_0x1342=['cache','261644uClDei','1847IbbVtH','260OKrzfC','execute','514064FusqUp','voice','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','2FEZUcG','get','guild',':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!','players','error','easy-djs-commandhandler','1267345JODXBG','547699bgMCDy','voiceChannel','destroy','current','2zbvyJL','djRole','3084PxwHPz','exports','channel','107258qwuwXy','Disconnects\x20the\x20bot\x20from\x20the\x20voice\x20channel\x20it\x20is\x20in.','1sdTzUH','queue','send','**:mailbox_with_no_mail:\x20Successfully\x20disconnected**','roles','103atfIpd','disconnect','Queue','selfDeaf','findOne','member','manager'];const a36_0x1f60db=a36_0x3a3f;function a36_0x3a3f(_0x10f517,_0x590ecd){return a36_0x3a3f=function(_0x134289,_0x3a3f5a){_0x134289=_0x134289-0x1c4;let _0x3b5c0a=a36_0x1342[_0x134289];return _0x3b5c0a;},a36_0x3a3f(_0x10f517,_0x590ecd);}(function(_0x21f795,_0x1a60f5){const _0x21791d=a36_0x3a3f;while(!![]){try{const _0xdb3a23=-parseInt(_0x21791d(0x1d3))*-parseInt(_0x21791d(0x1e4))+-parseInt(_0x21791d(0x1d0))+-parseInt(_0x21791d(0x1cc))*-parseInt(_0x21791d(0x1df))+-parseInt(_0x21791d(0x1e6))*-parseInt(_0x21791d(0x1db))+parseInt(_0x21791d(0x1ce))*parseInt(_0x21791d(0x1cd))+-parseInt(_0x21791d(0x1c4))*-parseInt(_0x21791d(0x1e1))+-parseInt(_0x21791d(0x1da));if(_0xdb3a23===_0x1a60f5)break;else _0x21f795['push'](_0x21f795['shift']());}catch(_0x5b5967){_0x21f795['push'](_0x21f795['shift']());}}}(a36_0x1342,0x49b8e));const {Command}=require(a36_0x1f60db(0x1d9));module[a36_0x1f60db(0x1e2)]=new Command({'name':a36_0x1f60db(0x1c5),'category':a36_0x1f60db(0x1c6),'aliases':['dc','leave','dis'],'description':a36_0x1f60db(0x1e5),'usage':'disconnect'})[a36_0x1f60db(0x1cf)]((_0x39d451,_0x3da88b,_0x38c7f6,_0x3143d8,_0x12b50b,_0x563b97)=>{const _0x31c882=a36_0x1f60db,{channel:_0x1f3a77}=_0x3da88b[_0x31c882(0x1c9)][_0x31c882(0x1d1)];if(!_0x1f3a77)return _0x3da88b[_0x31c882(0x1e3)]['send'](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');Settings[_0x31c882(0x1c8)]({'guildID':_0x3da88b['guild']['id']},async(_0x12fc4a,_0x3888f7)=>{const _0x238b7b=_0x31c882;if(_0x12fc4a)console[_0x238b7b(0x1d8)](_0x12fc4a);if(_0x3888f7){if(_0x3888f7[_0x238b7b(0x1e0)]&&_0x3da88b[_0x238b7b(0x1d5)][_0x238b7b(0x1ea)][_0x238b7b(0x1cb)]['get'](_0x3888f7[_0x238b7b(0x1e0)])){if(!_0x3da88b['author'][_0x238b7b(0x1ea)]['has'](_0x3888f7[_0x238b7b(0x1e0)]))return _0x3da88b['reply']({'embed':{'description':_0x238b7b(0x1d6)}});}}});if(_0x3da88b[_0x31c882(0x1c9)][_0x31c882(0x1d1)][_0x31c882(0x1c7)])return _0x3da88b['channel'][_0x31c882(0x1e8)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0xa0582d=_0x3da88b[_0x31c882(0x1d5)]['me'][_0x31c882(0x1d1)]['channel'],_0x1af090=_0x39d451[_0x31c882(0x1ca)][_0x31c882(0x1d7)][_0x31c882(0x1d4)](_0x3da88b[_0x31c882(0x1d5)]['id']);if(!_0x1af090||!_0xa0582d)return _0x3da88b['channel'][_0x31c882(0x1e8)]('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(!_0x1af090[_0x31c882(0x1e7)]||!_0x1af090[_0x31c882(0x1e7)][_0x31c882(0x1de)])return _0x3da88b[_0x31c882(0x1e3)][_0x31c882(0x1e8)]('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(_0x1af090&&_0x1f3a77['id']!==_0x1af090[_0x31c882(0x1dc)])return _0x3da88b['channel'][_0x31c882(0x1e8)](_0x31c882(0x1d2));return _0x1af090[_0x31c882(0x1dd)](),_0x3da88b[_0x31c882(0x1e3)][_0x31c882(0x1e8)](_0x31c882(0x1e9));});