const a46_0x2799=['147LJUxRg','manager','players','selfDeaf',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','get','322345PeMdCf','res','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','guild','803237RtJHYR','Resumes\x20paused\x20music','**:x:\x20The\x20player\x20is\x20not\x20paused**','cache','findOne','Song','djRole','playing','1AfTVFH','voice','../../database/Settings','1654KGUZdR','exports','resume','execute','author','destroy','channel','1KXfLnN','current','1838fEYtbq','278939ODtpNI','has',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','pause','735069FhICJB','153smXAor','send','member','533195BmkZna'];const a46_0x3ad944=a46_0x2b2c;function a46_0x2b2c(_0x18a6dc,_0x4185cc){return a46_0x2b2c=function(_0x279935,_0x2b2cf6){_0x279935=_0x279935-0xc9;let _0x4f0b46=a46_0x2799[_0x279935];return _0x4f0b46;},a46_0x2b2c(_0x18a6dc,_0x4185cc);}(function(_0x2a9c2a,_0x26fc6f){const _0x3b26bd=a46_0x2b2c;while(!![]){try{const _0x258893=-parseInt(_0x3b26bd(0xca))*parseInt(_0x3b26bd(0xd9))+parseInt(_0x3b26bd(0xe3))+-parseInt(_0x3b26bd(0xd8))+-parseInt(_0x3b26bd(0xd1))*-parseInt(_0x3b26bd(0xe7))+-parseInt(_0x3b26bd(0xdd))*-parseInt(_0x3b26bd(0xd3))+parseInt(_0x3b26bd(0xdc))+-parseInt(_0x3b26bd(0xd4))*parseInt(_0x3b26bd(0xef));if(_0x258893===_0x26fc6f)break;else _0x2a9c2a['push'](_0x2a9c2a['shift']());}catch(_0x1921cd){_0x2a9c2a['push'](_0x2a9c2a['shift']());}}}(a46_0x2799,0xa1985));const {Command}=require('easy-djs-commandhandler'),Settings=require(a46_0x3ad944(0xc9));module[a46_0x3ad944(0xcb)]=new Command({'name':a46_0x3ad944(0xcc),'category':a46_0x3ad944(0xec),'aliases':['continue','re',a46_0x3ad944(0xe4)],'description':a46_0x3ad944(0xe8),'usage':'resume'})[a46_0x3ad944(0xcd)]((_0x455dd1,_0x6be073,_0x533ebe,_0x29c360,_0x25f6df,_0x283f6a)=>{const _0x63a590=a46_0x3ad944,{channel:_0x24fe41}=_0x6be073[_0x63a590(0xdb)][_0x63a590(0xf0)];if(!_0x24fe41)return _0x6be073[_0x63a590(0xd0)][_0x63a590(0xda)](_0x63a590(0xd6));Settings[_0x63a590(0xeb)]({'guildID':_0x6be073[_0x63a590(0xe6)]['id']},async(_0x19ee5b,_0x5f2998)=>{const _0x3f1668=_0x63a590;if(_0x19ee5b)console['error'](_0x19ee5b);if(_0x5f2998){if(_0x5f2998[_0x3f1668(0xed)]&&_0x6be073['guild']['roles'][_0x3f1668(0xea)]['get'](_0x5f2998[_0x3f1668(0xed)])){if(!_0x6be073[_0x3f1668(0xce)]['roles'][_0x3f1668(0xd5)](_0x5f2998[_0x3f1668(0xed)]))return _0x6be073['reply']({'embed':{'description':':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&${settings.djRole}>]\x20to\x20use\x20this\x20command!'}});}}});if(_0x6be073[_0x63a590(0xdb)][_0x63a590(0xf0)][_0x63a590(0xe0)])return _0x6be073[_0x63a590(0xd0)]['send'](_0x63a590(0xe1));const _0x5a21bd=_0x6be073[_0x63a590(0xe6)]['me'][_0x63a590(0xf0)][_0x63a590(0xd0)],_0x28b4ac=_0x455dd1[_0x63a590(0xde)][_0x63a590(0xdf)][_0x63a590(0xe2)](_0x6be073['guild']['id']);if(!_0x28b4ac||!_0x5a21bd)return _0x6be073[_0x63a590(0xd0)]['send']('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(!_0x28b4ac[_0x63a590(0xd2)]<0x1)return _0x6be073[_0x63a590(0xd0)][_0x63a590(0xda)]('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(_0x28b4ac&&_0x24fe41['id']!==_0x28b4ac['voiceChannel'])return _0x6be073[_0x63a590(0xd0)][_0x63a590(0xda)](_0x63a590(0xe5));_0x28b4ac&&_0x5a21bd&&_0x24fe41['id']!==_0x5a21bd['id']&&_0x28b4ac[_0x63a590(0xcf)]();if(_0x28b4ac[_0x63a590(0xee)])return _0x6be073['channel'][_0x63a590(0xda)](_0x63a590(0xe9));return _0x28b4ac[_0x63a590(0xd7)](![]),_0x6be073[_0x63a590(0xd0)]['send']('**:play_pause:\x20Resuming\x20:thumbsup:**');});