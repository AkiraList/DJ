const a40_0x3210=['0056bf','**:x:\x20Your\x20Dm\x27s\x20are\x20disabled**','discord.js','271109ydfxIv','voiceChannel','../../handlers/functions','49MJcHGz','`\x0a\x0a`Requested\x20by:`\x20','uri','queue','exports','setColor','split','voice','guild','title','setURL',')\x0a\x0a`','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','362539AfDhcr','\x20/\x20','setAuthor','players','current','user','Now\x20Playing\x20♪','setThumbnail','manager','channel','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','20453xLggpV','https://lewds.fun','../../botconfig/embed.json','3853AwCWPt','https://img.youtube.com/vi/','get','identifier','nowplaying','`\x0a\x0a`','1XHeoCa','2zWAJwW','displayAvatarURL','1ocjEML','position','execute','12AjVuHD','157ZObKGK','14002nvIWYJ','requester','username','466568aZBcTg','join','771912UxjRwU','send','member',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','duration'];function a40_0x49c1(_0x44413c,_0x4352c0){return a40_0x49c1=function(_0x32104f,_0x49c101){_0x32104f=_0x32104f-0xd8;let _0x4fbeb0=a40_0x3210[_0x32104f];return _0x4fbeb0;},a40_0x49c1(_0x44413c,_0x4352c0);}const a40_0x1875ea=a40_0x49c1;(function(_0x2de670,_0x1e3f9b){const _0x53b4f9=a40_0x49c1;while(!![]){try{const _0x11feb7=parseInt(_0x53b4f9(0x105))+parseInt(_0x53b4f9(0x102))*parseInt(_0x53b4f9(0xd9))+parseInt(_0x53b4f9(0x107))*-parseInt(_0x53b4f9(0xfa))+-parseInt(_0x53b4f9(0xe6))*-parseInt(_0x53b4f9(0xfb))+-parseInt(_0x53b4f9(0xfd))*parseInt(_0x53b4f9(0x10f))+-parseInt(_0x53b4f9(0xf4))*parseInt(_0x53b4f9(0x101))+-parseInt(_0x53b4f9(0x100))*-parseInt(_0x53b4f9(0xf1));if(_0x11feb7===_0x1e3f9b)break;else _0x2de670['push'](_0x2de670['shift']());}catch(_0x5ae604){_0x2de670['push'](_0x2de670['shift']());}}}(a40_0x3210,0x74066));const {MessageEmbed}=require(a40_0x1875ea(0x10e)),config=require('../../botconfig/config.json'),ee=require(a40_0x1875ea(0xf3)),{createBar,format}=require(a40_0x1875ea(0xd8)),{Command}=require('easy-djs-commandhandler');module[a40_0x1875ea(0xdd)]=new Command({'name':a40_0x1875ea(0xf8),'category':'Song','aliases':['np'],'description':'Shows\x20what\x20song\x20Rythm\x20is\x20currently\x20playing.','usage':'nowplaying'})[a40_0x1875ea(0xff)]((_0x270822,_0x3bafee,_0x18e8b3,_0x432562,_0x16493c,_0xf60be7)=>{const _0x196259=a40_0x1875ea,{channel:_0x2ad291}=_0x3bafee[_0x196259(0x109)][_0x196259(0xe0)];if(!_0x2ad291)return _0x3bafee[_0x196259(0xef)]['send'](_0x196259(0x10a));if(_0x3bafee[_0x196259(0x109)]['voice']['selfDeaf'])return _0x3bafee[_0x196259(0xef)][_0x196259(0x108)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x530a7b=_0x3bafee[_0x196259(0xe1)]['me']['voice'][_0x196259(0xef)],_0x21edbd=_0x270822[_0x196259(0xee)][_0x196259(0xe9)][_0x196259(0xf6)](_0x3bafee['guild']['id']);if(!_0x21edbd||!_0x530a7b)return _0x3bafee[_0x196259(0xef)][_0x196259(0x108)](_0x196259(0xe5));if(!_0x21edbd[_0x196259(0xdc)]||!_0x21edbd['queue'][_0x196259(0xea)])return _0x3bafee['channel'][_0x196259(0x108)](_0x196259(0xe5));if(_0x21edbd&&_0x2ad291['id']!==_0x21edbd[_0x196259(0x110)])return _0x3bafee[_0x196259(0xef)]['send'](_0x196259(0xf0));_0x3bafee['channel'][_0x196259(0x108)](new MessageEmbed()[_0x196259(0xe8)](_0x196259(0xec),_0x270822[_0x196259(0xeb)][_0x196259(0xfc)](),_0x196259(0xf2))[_0x196259(0xed)](_0x196259(0xf5)+_0x21edbd[_0x196259(0xdc)][_0x196259(0xea)][_0x196259(0xf7)]+'/mqdefault.jpg')[_0x196259(0xe3)](_0x196259(0xf2))[_0x196259(0xde)](_0x196259(0x10c))['setDescription']('['+_0x21edbd['queue'][_0x196259(0xea)][_0x196259(0xe2)][_0x196259(0xdf)]('[')['join']('[')[_0x196259(0xdf)](']')[_0x196259(0x106)](']')+']('+_0x21edbd[_0x196259(0xdc)]['current'][_0x196259(0xdb)]+_0x196259(0xe4)+createBar(_0x21edbd)+_0x196259(0xf9)+format(_0x21edbd[_0x196259(0xfe)])[_0x196259(0xdf)]('\x20|\x20')[0x0]+_0x196259(0xe7)+format(_0x21edbd[_0x196259(0xdc)][_0x196259(0xea)][_0x196259(0x10b)])[_0x196259(0xdf)]('\x20|\x20')[0x0]+_0x196259(0xda)+_0x21edbd['queue'][_0x196259(0xea)][_0x196259(0x103)][_0x196259(0x104)]+'\x20('+_0x21edbd[_0x196259(0xdc)][_0x196259(0xea)]['requester']['tag']+')'))['catch'](_0xb4c458=>{const _0x4f2932=_0x196259;return _0x3bafee[_0x4f2932(0xef)][_0x4f2932(0x108)](_0x4f2932(0x10d));});});