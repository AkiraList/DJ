const a47_0x1af6=['setDescription','256102WsUNXF','29Hirncq','**:x:\x20Invalid\x20usage**\x0a','exports','391814vYuBba','get','Searches\x20from\x20Youtube\x20for\x20a\x20song\x20via\x20your\x20query\x20and\x20returns\x20the\x20top\x2010\x20results.','execute',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','manager','guild','easy-djs-commandhandler','#ff0000','2AFJyvM','voice','play\x20<link/query>','voiceChannel','setTitle','search\x20<link/query>','search:youtube','channel','send','2751OYgMld','324023GwpTIP','1GIBOcl','88948JuKonB','**:x:\x20Invalid\x20usage**','destroy','member','discord.js','players','selfDeaf','find','73SwJBPO','setColor','3853jWcuGE','EMBED_LINKS',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','8867xwFuVz'];const a47_0x382c56=a47_0x23e2;function a47_0x23e2(_0x475482,_0x46dca3){return a47_0x23e2=function(_0x1af6e2,_0x23e257){_0x1af6e2=_0x1af6e2-0x1eb;let _0x343b62=a47_0x1af6[_0x1af6e2];return _0x343b62;},a47_0x23e2(_0x475482,_0x46dca3);}(function(_0x1a0c66,_0x5a420a){const _0x2a79b2=a47_0x23e2;while(!![]){try{const _0x521abf=-parseInt(_0x2a79b2(0x20c))+-parseInt(_0x2a79b2(0x1fd))*parseInt(_0x2a79b2(0x1fc))+-parseInt(_0x2a79b2(0x20d))*-parseInt(_0x2a79b2(0x207))+parseInt(_0x2a79b2(0x205))*parseInt(_0x2a79b2(0x20a))+-parseInt(_0x2a79b2(0x210))+parseInt(_0x2a79b2(0x1fb))+parseInt(_0x2a79b2(0x1fa))*parseInt(_0x2a79b2(0x1f1));if(_0x521abf===_0x5a420a)break;else _0x1a0c66['push'](_0x1a0c66['shift']());}catch(_0x446c83){_0x1a0c66['push'](_0x1a0c66['shift']());}}}(a47_0x1af6,0x55dc9));const {MessageEmbed}=require(a47_0x382c56(0x201)),playermanager=require('../../handlers/lavalink/playermanager'),{Command}=require(a47_0x382c56(0x1ef));module[a47_0x382c56(0x20f)]=new Command({'name':'search','category':'Song','aliases':[a47_0x382c56(0x204)],'description':a47_0x382c56(0x212),'usage':a47_0x382c56(0x1f6)})[a47_0x382c56(0x1eb)]((_0x29f307,_0x2a7ad1,_0x19cd04,_0x2a85b0,_0x291f43,_0x348bed)=>{const _0x3fe7a7=a47_0x382c56,{channel:_0x3f722c}=_0x2a7ad1['member'][_0x3fe7a7(0x1f2)];if(!_0x3f722c)return _0x2a7ad1[_0x3fe7a7(0x1f8)]['send'](_0x3fe7a7(0x1ec));if(_0x2a7ad1[_0x3fe7a7(0x200)]['voice'][_0x3fe7a7(0x203)])return _0x2a7ad1[_0x3fe7a7(0x1f8)][_0x3fe7a7(0x1f9)](_0x3fe7a7(0x209));const _0x63b317=_0x2a7ad1[_0x3fe7a7(0x1ee)]['me']['voice'][_0x3fe7a7(0x1f8)];if(!_0x19cd04[0x0]){let _0xda02bf=_0x348bed+_0x3fe7a7(0x1f3),_0x33c916=new MessageEmbed()[_0x3fe7a7(0x1f5)](_0x3fe7a7(0x1fe))[_0x3fe7a7(0x20b)](_0xda02bf)[_0x3fe7a7(0x206)](_0x3fe7a7(0x1f0));_0x2a7ad1[_0x3fe7a7(0x1ee)]['me']['hasPermission'](_0x3fe7a7(0x208))?_0x2a7ad1[_0x3fe7a7(0x1f8)][_0x3fe7a7(0x1f9)](_0x33c916):_0x2a7ad1[_0x3fe7a7(0x1f8)][_0x3fe7a7(0x1f9)](_0x3fe7a7(0x20e)+_0xda02bf);return;}const _0x29ab3d=_0x29f307[_0x3fe7a7(0x1ed)][_0x3fe7a7(0x202)][_0x3fe7a7(0x211)](_0x2a7ad1[_0x3fe7a7(0x1ee)]['id']);if(_0x29ab3d&&_0x3f722c['id']!==_0x29ab3d[_0x3fe7a7(0x1f4)])return _0x2a7ad1[_0x3fe7a7(0x1f8)][_0x3fe7a7(0x1f9)]('**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**');_0x29ab3d&&_0x63b317&&_0x3f722c['id']!==_0x63b317['id']&&_0x29ab3d[_0x3fe7a7(0x1ff)](),playermanager(_0x29f307,_0x2a7ad1,_0x19cd04,_0x3fe7a7(0x1f7));});