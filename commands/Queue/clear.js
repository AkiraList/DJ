const a31_0x16fa=['manager','reply','118605Evswde','execute','players','164WsEVCe','618637MXswIi','2623lwwacE','181014WLLoTg','queue','376869TydSSN','exports','get','channel','error','voiceChannel','voice','4agvFce','djRole','clearqu','guild','findOne','send','Clears\x20the\x20whole\x20queue','current',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','member','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','easy-djs-commandhandler','author','283181yfBHrN',':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!','2tuWfJZ','clear','177043BXNZfV','selfDeaf','1wJqTxo','../../database/Settings','roles','clearq','cache'];const a31_0x112827=a31_0x4ae1;function a31_0x4ae1(_0x4aea76,_0x423a96){return a31_0x4ae1=function(_0x16fa29,_0x4ae1b0){_0x16fa29=_0x16fa29-0x15c;let _0x1f4d86=a31_0x16fa[_0x16fa29];return _0x1f4d86;},a31_0x4ae1(_0x4aea76,_0x423a96);}(function(_0x44d796,_0x5b53ec){const _0x1c62f8=a31_0x4ae1;while(!![]){try{const _0x3b7753=-parseInt(_0x1c62f8(0x16e))*-parseInt(_0x1c62f8(0x170))+-parseInt(_0x1c62f8(0x16b))*-parseInt(_0x1c62f8(0x17a))+-parseInt(_0x1c62f8(0x171))+-parseInt(_0x1c62f8(0x173))+-parseInt(_0x1c62f8(0x16f))+-parseInt(_0x1c62f8(0x15e))*-parseInt(_0x1c62f8(0x164))+-parseInt(_0x1c62f8(0x160))*-parseInt(_0x1c62f8(0x162));if(_0x3b7753===_0x5b53ec)break;else _0x44d796['push'](_0x44d796['shift']());}catch(_0x16e6ff){_0x44d796['push'](_0x44d796['shift']());}}}(a31_0x16fa,0x5931b));const {Command}=require(a31_0x112827(0x15c)),Settings=require(a31_0x112827(0x165));module[a31_0x112827(0x174)]=new Command({'name':'clear','category':'Queue','aliases':['clearqueue',a31_0x112827(0x17c),a31_0x112827(0x167),'cl'],'description':a31_0x112827(0x180),'usage':'clearqueue'})[a31_0x112827(0x16c)]((_0x13756d,_0x96c533,_0x456f64,_0x5ad1b1,_0x5ec8f2,_0x582537)=>{const _0x279d40=a31_0x112827,{channel:_0x369582}=_0x96c533[_0x279d40(0x183)][_0x279d40(0x179)];if(!_0x369582)return _0x96c533[_0x279d40(0x176)][_0x279d40(0x17f)](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');Settings[_0x279d40(0x17e)]({'guildID':_0x96c533[_0x279d40(0x17d)]['id']},async(_0x21666e,_0x337e38)=>{const _0x180ddb=_0x279d40;if(_0x21666e)console[_0x180ddb(0x177)](_0x21666e);if(_0x337e38){if(_0x337e38['djRole']&&_0x96c533[_0x180ddb(0x17d)][_0x180ddb(0x166)][_0x180ddb(0x168)][_0x180ddb(0x175)](_0x337e38[_0x180ddb(0x17b)])){if(!_0x96c533[_0x180ddb(0x15d)]['roles']['has'](_0x337e38['djRole']))return _0x96c533[_0x180ddb(0x16a)]({'embed':{'description':_0x180ddb(0x15f)}});}}});if(_0x96c533['member'][_0x279d40(0x179)][_0x279d40(0x163)])return _0x96c533[_0x279d40(0x176)][_0x279d40(0x17f)](_0x279d40(0x182));const _0x35936e=_0x96c533['guild']['me']['voice']['channel'],_0x1a94e0=_0x13756d[_0x279d40(0x169)][_0x279d40(0x16d)][_0x279d40(0x175)](_0x96c533[_0x279d40(0x17d)]['id']);if(!_0x1a94e0||!_0x35936e)return _0x96c533[_0x279d40(0x176)][_0x279d40(0x17f)](_0x279d40(0x184));if(!_0x1a94e0[_0x279d40(0x181)]<0x1)return _0x96c533['channel'][_0x279d40(0x17f)](_0x279d40(0x184));if(_0x1a94e0&&_0x369582['id']!==_0x1a94e0[_0x279d40(0x178)])_0x1a94e0&&_0x35936e&&_0x369582['id']!==_0x35936e['id']&&_0x1a94e0['destroy']();return _0x1a94e0[_0x279d40(0x172)][_0x279d40(0x161)](),_0x96c533[_0x279d40(0x176)][_0x279d40(0x17f)]('**:boom:\x20Cleared...\x20:stop_button:**');});