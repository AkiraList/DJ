const a46_0x1ac2=['Resumes\x20paused\x20music','has','280911wVXpVd','res',':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!','playing','../../database/Settings','member','1YezCtX','19fdWXlA','resume','voice','author',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','68FTiPfk','channel','496813zDjXcm','guild','545699FjjTYb','1SGCpZE','**:x:\x20The\x20player\x20is\x20not\x20paused**','get','roles','2521OOekEz','send','**:play_pause:\x20Resuming\x20:thumbsup:**','findOne','manager','error','continue','pause','current','cache','20486qegwEa','voiceChannel','selfDeaf','939vnRjjX','djRole','execute','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','easy-djs-commandhandler','1gxQKdK','8271aECMGj','675mfPYSO'];const a46_0x4f241b=a46_0x27c0;(function(_0x20ea0b,_0x4d088f){const _0x1d3848=a46_0x27c0;while(!![]){try{const _0x39acbb=-parseInt(_0x1d3848(0x107))*parseInt(_0x1d3848(0x118))+parseInt(_0x1d3848(0x11c))+-parseInt(_0x1d3848(0x11a))*parseInt(_0x1d3848(0x111))+-parseInt(_0x1d3848(0x11d))*-parseInt(_0x1d3848(0x10b))+-parseInt(_0x1d3848(0x112))*parseInt(_0x1d3848(0x121))+parseInt(_0x1d3848(0x106))*parseInt(_0x1d3848(0xfe))+parseInt(_0x1d3848(0x101))*parseInt(_0x1d3848(0x108));if(_0x39acbb===_0x4d088f)break;else _0x20ea0b['push'](_0x20ea0b['shift']());}catch(_0x2fc3db){_0x20ea0b['push'](_0x20ea0b['shift']());}}}(a46_0x1ac2,0x5b415));const {Command}=require(a46_0x4f241b(0x105)),Settings=require(a46_0x4f241b(0x10f));function a46_0x27c0(_0x5b1fe7,_0x183a4d){return a46_0x27c0=function(_0x1ac2f7,_0x27c05c){_0x1ac2f7=_0x1ac2f7-0xf7;let _0x2cb4ff=a46_0x1ac2[_0x1ac2f7];return _0x2cb4ff;},a46_0x27c0(_0x5b1fe7,_0x183a4d);}module['exports']=new Command({'name':a46_0x4f241b(0x113),'category':'Song','aliases':[a46_0x4f241b(0xfa),'re',a46_0x4f241b(0x10c)],'description':a46_0x4f241b(0x109),'usage':a46_0x4f241b(0x113)})[a46_0x4f241b(0x103)]((_0x359112,_0x4af053,_0x2d6741,_0x3f384a,_0x3acd4d,_0x168d3d)=>{const _0x55142f=a46_0x4f241b,{channel:_0x5b2bd4}=_0x4af053[_0x55142f(0x110)][_0x55142f(0x114)];if(!_0x5b2bd4)return _0x4af053[_0x55142f(0x119)][_0x55142f(0x122)](_0x55142f(0x116));Settings[_0x55142f(0xf7)]({'guildID':_0x4af053[_0x55142f(0x11b)]['id']},async(_0x19c798,_0x5d9a00)=>{const _0x3bffe5=_0x55142f;if(_0x19c798)console[_0x3bffe5(0xf9)](_0x19c798);if(_0x5d9a00){if(_0x5d9a00[_0x3bffe5(0x102)]&&_0x4af053[_0x3bffe5(0x11b)][_0x3bffe5(0x120)][_0x3bffe5(0xfd)][_0x3bffe5(0x11f)](_0x5d9a00[_0x3bffe5(0x102)])){if(!_0x4af053[_0x3bffe5(0x115)][_0x3bffe5(0x120)][_0x3bffe5(0x10a)](_0x5d9a00[_0x3bffe5(0x102)]))return _0x4af053['reply']({'embed':{'description':_0x3bffe5(0x10d)}});}}});if(_0x4af053['member'][_0x55142f(0x114)][_0x55142f(0x100)])return _0x4af053[_0x55142f(0x119)][_0x55142f(0x122)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x479ec1=_0x4af053[_0x55142f(0x11b)]['me']['voice'][_0x55142f(0x119)],_0x1ed15e=_0x359112[_0x55142f(0xf8)]['players'][_0x55142f(0x11f)](_0x4af053[_0x55142f(0x11b)]['id']);if(!_0x1ed15e||!_0x479ec1)return _0x4af053[_0x55142f(0x119)][_0x55142f(0x122)]('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(!_0x1ed15e[_0x55142f(0xfc)]<0x1)return _0x4af053[_0x55142f(0x119)]['send'](_0x55142f(0x104));if(_0x1ed15e&&_0x5b2bd4['id']!==_0x1ed15e[_0x55142f(0xff)])return _0x4af053[_0x55142f(0x119)][_0x55142f(0x122)](_0x55142f(0x117));_0x1ed15e&&_0x479ec1&&_0x5b2bd4['id']!==_0x479ec1['id']&&_0x1ed15e['destroy']();if(_0x1ed15e[_0x55142f(0x10e)])return _0x4af053[_0x55142f(0x119)][_0x55142f(0x122)](_0x55142f(0x11e));return _0x1ed15e[_0x55142f(0xfb)](![]),_0x4af053[_0x55142f(0x119)][_0x55142f(0x122)](_0x55142f(0x123));});