const a40_0x221b=['638674qfAnxX','setColor','get','Shows\x20what\x20song\x20Rythm\x20is\x20currently\x20playing.','../../botconfig/config.json','member','3760743tbGNyV','manager','608406DgqOqb','19eBAIiE','setDescription',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','exports','1skesSt','0056bf','voiceChannel','position','setThumbnail','setAuthor','execute','1056073nHojvU','tag','guild','requester','Song','`\x0a\x0a`Requested\x20by:`\x20','discord.js','setURL','split','join','410103NIqEeK','current','/mqdefault.jpg','\x20|\x20','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','user','23230Swfyhc','identifier','**:x:\x20Your\x20Dm\x27s\x20are\x20disabled**','1EQlXPP','voice','21bGiNjx','queue','send','../../handlers/functions',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','13wifCXE','`\x0a\x0a`','https://lewds.fun','channel','nowplaying','players'];const a40_0x32cc3=a40_0x1a3c;(function(_0x34ce67,_0x55d030){const _0xfe4855=a40_0x1a3c;while(!![]){try{const _0x33f258=-parseInt(_0xfe4855(0xf6))+parseInt(_0xfe4855(0xe8))*-parseInt(_0xfe4855(0xe3))+-parseInt(_0xfe4855(0xee))+parseInt(_0xfe4855(0xfb))*-parseInt(_0xfe4855(0x102))+parseInt(_0xfe4855(0xd8))*-parseInt(_0xfe4855(0xe1))+parseInt(_0xfe4855(0xf7))*-parseInt(_0xfe4855(0xde))+parseInt(_0xfe4855(0xf4));if(_0x33f258===_0x55d030)break;else _0x34ce67['push'](_0x34ce67['shift']());}catch(_0x5beebc){_0x34ce67['push'](_0x34ce67['shift']());}}}(a40_0x221b,0x93e94));function a40_0x1a3c(_0x9aefed,_0x43c95c){return a40_0x1a3c=function(_0x221bdb,_0x1a3c69){_0x221bdb=_0x221bdb-0xd7;let _0x59b73f=a40_0x221b[_0x221bdb];return _0x59b73f;},a40_0x1a3c(_0x9aefed,_0x43c95c);}const {MessageEmbed}=require(a40_0x32cc3(0x108)),config=require(a40_0x32cc3(0xf2)),ee=require('../../botconfig/embed.json'),{createBar,format}=require(a40_0x32cc3(0xe6)),{Command}=require('easy-djs-commandhandler');module[a40_0x32cc3(0xfa)]=new Command({'name':a40_0x32cc3(0xec),'category':a40_0x32cc3(0x106),'aliases':['np'],'description':a40_0x32cc3(0xf1),'usage':a40_0x32cc3(0xec)})[a40_0x32cc3(0x101)]((_0x15ce48,_0x755007,_0x1c4f0a,_0x59b856,_0x180330,_0x2657a4)=>{const _0x389913=a40_0x32cc3,{channel:_0x4590f6}=_0x755007[_0x389913(0xf3)][_0x389913(0xe2)];if(!_0x4590f6)return _0x755007[_0x389913(0xeb)][_0x389913(0xe5)](_0x389913(0xe7));if(_0x755007[_0x389913(0xf3)][_0x389913(0xe2)]['selfDeaf'])return _0x755007[_0x389913(0xeb)][_0x389913(0xe5)](_0x389913(0xf9));const _0x2d78a0=_0x755007[_0x389913(0x104)]['me']['voice'][_0x389913(0xeb)],_0x234385=_0x15ce48[_0x389913(0xf5)][_0x389913(0xed)][_0x389913(0xf0)](_0x755007['guild']['id']);if(!_0x234385||!_0x2d78a0)return _0x755007[_0x389913(0xeb)]['send'](_0x389913(0xdc));if(!_0x234385[_0x389913(0xe4)]||!_0x234385[_0x389913(0xe4)]['current'])return _0x755007[_0x389913(0xeb)]['send']('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(_0x234385&&_0x4590f6['id']!==_0x234385[_0x389913(0xfd)])return _0x755007[_0x389913(0xeb)][_0x389913(0xe5)]('**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**');_0x755007[_0x389913(0xeb)][_0x389913(0xe5)](new MessageEmbed()[_0x389913(0x100)]('Now\x20Playing\x20♪',_0x15ce48[_0x389913(0xdd)]['displayAvatarURL'](),'https://lewds.fun')[_0x389913(0xff)]('https://img.youtube.com/vi/'+_0x234385[_0x389913(0xe4)][_0x389913(0xd9)][_0x389913(0xdf)]+_0x389913(0xda))[_0x389913(0x109)](_0x389913(0xea))[_0x389913(0xef)](_0x389913(0xfc))[_0x389913(0xf8)]('['+_0x234385[_0x389913(0xe4)][_0x389913(0xd9)]['title'][_0x389913(0x10a)]('[')[_0x389913(0xd7)]('[')[_0x389913(0x10a)](']')[_0x389913(0xd7)](']')+']('+_0x234385[_0x389913(0xe4)][_0x389913(0xd9)]['uri']+')\x0a\x0a`'+createBar(_0x234385)+_0x389913(0xe9)+format(_0x234385[_0x389913(0xfe)])['split']('\x20|\x20')[0x0]+'\x20/\x20'+format(_0x234385['queue'][_0x389913(0xd9)]['duration'])[_0x389913(0x10a)](_0x389913(0xdb))[0x0]+_0x389913(0x107)+_0x234385[_0x389913(0xe4)][_0x389913(0xd9)][_0x389913(0x105)]['username']+'\x20('+_0x234385[_0x389913(0xe4)][_0x389913(0xd9)][_0x389913(0x105)][_0x389913(0x103)]+')'))['catch'](_0xafcf86=>{const _0x113966=_0x389913;return _0x755007[_0x113966(0xeb)][_0x113966(0xe5)](_0x113966(0xe0));});});