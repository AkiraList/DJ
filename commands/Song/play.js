const a42_0x2477=['member','play:youtube','selfDeaf','play:soundcloud','join','589139Ivgpku','voice','2WgFrSe','Plays\x20a\x20song\x20from\x20youtube','1351210Yewqtd','youtu','content','Song','46921jZlFsS','742330YvGAOB','1214640nCGpen','channel','26VEqvok','includes','destroy','**:x:\x20Invalid\x20usage**\x0a','guild','hasPermission','voiceChannel','exports','setTitle','**Searching**\x20:mag_right:\x20`','http','4957NCRmFL','manager','players','discord.js','1525011uWpsEi','**:x:\x20Invalid\x20usage**','send','easy-djs-commandhandler','play\x20<link/query>','EMBED_LINKS'];const a42_0x5c28da=a42_0x3611;(function(_0x446dad,_0x33841f){const _0x27270f=a42_0x3611;while(!![]){try{const _0x3704fe=-parseInt(_0x27270f(0xbb))*parseInt(_0x27270f(0xaa))+-parseInt(_0x27270f(0xae))+-parseInt(_0x27270f(0x9f))*-parseInt(_0x27270f(0xc1))+parseInt(_0x27270f(0xc2))+-parseInt(_0x27270f(0xbd))+parseInt(_0x27270f(0xc3))+parseInt(_0x27270f(0xb9));if(_0x3704fe===_0x33841f)break;else _0x446dad['push'](_0x446dad['shift']());}catch(_0x1e020c){_0x446dad['push'](_0x446dad['shift']());}}}(a42_0x2477,0xd6d30));const {MessageEmbed}=require(a42_0x5c28da(0xad)),playermanager=require('../../handlers/lavalink/playermanager'),{Command}=require(a42_0x5c28da(0xb1));function a42_0x3611(_0x1de68f,_0x55664a){return a42_0x3611=function(_0x24778a,_0x36113a){_0x24778a=_0x24778a-0x9e;let _0x460283=a42_0x2477[_0x24778a];return _0x460283;},a42_0x3611(_0x1de68f,_0x55664a);}module[a42_0x5c28da(0xa6)]=new Command({'name':'play','category':a42_0x5c28da(0xc0),'aliases':['p'],'description':a42_0x5c28da(0xbc),'usage':a42_0x5c28da(0xb2)})['execute']((_0x54f8e9,_0x16d8ec,_0x21b91f,_0x4a85ab,_0xa39240,_0x42f47)=>{const _0x53529c=a42_0x5c28da,{channel:_0x1d8622}=_0x16d8ec[_0x53529c(0xb4)][_0x53529c(0xba)];if(!_0x1d8622)return _0x16d8ec['channel']['send'](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');if(_0x16d8ec[_0x53529c(0xb4)][_0x53529c(0xba)][_0x53529c(0xb6)])return _0x16d8ec[_0x53529c(0x9e)][_0x53529c(0xb0)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x19d18a=_0x16d8ec[_0x53529c(0xa3)]['me']['voice'][_0x53529c(0x9e)];if(!_0x21b91f[0x0]){let _0x344541=_0x42f47+_0x53529c(0xb2),_0x436b56=new MessageEmbed()[_0x53529c(0xa7)](_0x53529c(0xaf))['setDescription'](_0x344541)['setColor']('#ff0000');_0x16d8ec['guild']['me'][_0x53529c(0xa4)](_0x53529c(0xb3))?_0x16d8ec[_0x53529c(0x9e)][_0x53529c(0xb0)](_0x436b56):_0x16d8ec['channel']['send'](_0x53529c(0xa2)+_0x344541);return;}const _0x5e704f=_0x54f8e9[_0x53529c(0xab)][_0x53529c(0xac)]['get'](_0x16d8ec[_0x53529c(0xa3)]['id']);if(_0x5e704f&&_0x1d8622['id']!==_0x5e704f[_0x53529c(0xa5)])return _0x16d8ec[_0x53529c(0x9e)]['send']('**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**');_0x5e704f&&_0x19d18a&&_0x1d8622['id']!==_0x19d18a['id']&&_0x5e704f[_0x53529c(0xa1)]();if(_0x16d8ec['content'][_0x53529c(0xa0)](_0x53529c(0xbe)))_0x16d8ec[_0x53529c(0x9e)][_0x53529c(0xb0)](_0x53529c(0xa8)+_0x21b91f[_0x53529c(0xb8)]('\x20')+'`'),playermanager(_0x54f8e9,_0x16d8ec,_0x21b91f,_0x53529c(0xb5));else{if(_0x16d8ec[_0x53529c(0xbf)]['includes']('spotify'))_0x16d8ec[_0x53529c(0x9e)][_0x53529c(0xb0)]('**Searching**\x20:mag_right:\x20`'+_0x21b91f[_0x53529c(0xb8)]('\x20')+'`'),playermanager(_0x54f8e9,_0x16d8ec,_0x21b91f,_0x53529c(0xb5));else{if(_0x16d8ec[_0x53529c(0xbf)][_0x53529c(0xa0)]('soundcloud'))_0x16d8ec['channel'][_0x53529c(0xb0)](_0x53529c(0xa8)+_0x21b91f[_0x53529c(0xb8)]('\x20')+'`'),playermanager(_0x54f8e9,_0x16d8ec,_0x21b91f,_0x53529c(0xb7));else _0x16d8ec[_0x53529c(0xbf)][_0x53529c(0xa0)](_0x53529c(0xa9))?(_0x16d8ec[_0x53529c(0x9e)][_0x53529c(0xb0)](_0x53529c(0xa8)+_0x21b91f[_0x53529c(0xb8)]('\x20')+'`'),playermanager(_0x54f8e9,_0x16d8ec,_0x21b91f,_0x53529c(0xb5))):(_0x16d8ec[_0x53529c(0x9e)][_0x53529c(0xb0)](_0x53529c(0xa8)+_0x21b91f[_0x53529c(0xb8)]('\x20')+'`'),playermanager(_0x54f8e9,_0x16d8ec,_0x21b91f,_0x53529c(0xb5)));}}});