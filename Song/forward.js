const a37_0x56cb=['member','2AAHKmC','channel','1379485YzfvGv','forward','1057526LXtzpj','execute','setTitle','../../handlers/functions','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','current',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','guild','setColor','voiceChannel','seek','forward\x20<Time\x20in\x20seconds>','**:musical_note:\x20Set\x20position\x20to\x20`','duration','exports','get','hasPermission','**:x:\x20Invalid\x20usage**','../../botconfig/embed.json','51346ZQZFVw','19CsTBnX','players','`\x20:fast_forward:**','1922449knaagz','Forwards\x20by\x20a\x20certain\x20amount\x20of\x20time\x20in\x20the\x20current\x20track.','forward\x20<time>','EMBED_LINKS','650365pvjIhM','27982XpOKsg','fwd','discord.js','position','voice','setDescription','queue','1624931oHTnpR','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','**:x:\x20Invalid\x20usage**\x0a','send','Song','#ff0000'];const a37_0x4c0d7e=a37_0x4d79;(function(_0x72e3ac,_0x386c42){const _0x2ddc50=a37_0x4d79;while(!![]){try{const _0x20f20f=parseInt(_0x2ddc50(0xdc))+-parseInt(_0x2ddc50(0xe8))+parseInt(_0x2ddc50(0xe1))+-parseInt(_0x2ddc50(0xd8))*parseInt(_0x2ddc50(0xd9))+-parseInt(_0x2ddc50(0xef))*-parseInt(_0x2ddc50(0xe0))+parseInt(_0x2ddc50(0xf1))+-parseInt(_0x2ddc50(0xc5));if(_0x20f20f===_0x386c42)break;else _0x72e3ac['push'](_0x72e3ac['shift']());}catch(_0x29c7a9){_0x72e3ac['push'](_0x72e3ac['shift']());}}}(a37_0x56cb,0xed747));const {MessageEmbed}=require(a37_0x4c0d7e(0xe3)),config=require('../../botconfig/config.json'),ee=require(a37_0x4c0d7e(0xd7)),{createBar,format}=require(a37_0x4c0d7e(0xc8)),{Command}=require('easy-djs-commandhandler');function a37_0x4d79(_0x28962a,_0x4ff211){return a37_0x4d79=function(_0x56cbb6,_0x4d79ad){_0x56cbb6=_0x56cbb6-0xc4;let _0x13e0c0=a37_0x56cb[_0x56cbb6];return _0x13e0c0;},a37_0x4d79(_0x28962a,_0x4ff211);}module[a37_0x4c0d7e(0xd3)]=new Command({'name':a37_0x4c0d7e(0xc4),'category':a37_0x4c0d7e(0xec),'aliases':[a37_0x4c0d7e(0xe2)],'description':a37_0x4c0d7e(0xdd),'usage':a37_0x4c0d7e(0xde)})[a37_0x4c0d7e(0xc6)]((_0x302d77,_0x2ed092,_0xf6da2a,_0x7ba4ec,_0x229787,_0x3ac29e)=>{const _0x27fe37=a37_0x4c0d7e,{channel:_0x2bc2c6}=_0x2ed092[_0x27fe37(0xee)][_0x27fe37(0xe5)];if(!_0x2bc2c6)return _0x2ed092[_0x27fe37(0xf0)][_0x27fe37(0xeb)](_0x27fe37(0xcb));if(_0x2ed092['member']['voice']['selfDeaf'])return _0x2ed092[_0x27fe37(0xf0)]['send'](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x1df08f=_0x2ed092[_0x27fe37(0xcc)]['me']['voice'][_0x27fe37(0xf0)],_0x92e777=_0x302d77['manager'][_0x27fe37(0xda)][_0x27fe37(0xd4)](_0x2ed092[_0x27fe37(0xcc)]['id']);if(!_0x92e777||!_0x1df08f)return _0x2ed092[_0x27fe37(0xf0)][_0x27fe37(0xeb)](_0x27fe37(0xc9));if(!_0x92e777[_0x27fe37(0xe7)]||!_0x92e777[_0x27fe37(0xe7)][_0x27fe37(0xca)])return _0x2ed092[_0x27fe37(0xf0)]['send'](_0x27fe37(0xc9));if(_0x92e777&&_0x2bc2c6['id']!==_0x92e777[_0x27fe37(0xce)])return _0x2ed092[_0x27fe37(0xf0)][_0x27fe37(0xeb)](_0x27fe37(0xe9));if(!_0xf6da2a[0x0]){let _0x2514e8=_0x3ac29e+_0x27fe37(0xd0),_0x2fce29=new MessageEmbed()[_0x27fe37(0xc7)](_0x27fe37(0xd6))[_0x27fe37(0xe6)](_0x2514e8)[_0x27fe37(0xcd)](_0x27fe37(0xed));_0x2ed092[_0x27fe37(0xcc)]['me'][_0x27fe37(0xd5)](_0x27fe37(0xdf))?_0x2ed092[_0x27fe37(0xf0)][_0x27fe37(0xeb)](_0x2fce29):_0x2ed092[_0x27fe37(0xf0)][_0x27fe37(0xeb)](_0x27fe37(0xea)+_0x2514e8);return;}let _0x2bb02f=Number(_0x92e777['position'])+Number(_0xf6da2a[0x0])*0x3e8;if(Number(_0xf6da2a[0x0])<=0x0)_0x2bb02f=Number(_0x92e777[_0x27fe37(0xe4)]);if(Number(_0x2bb02f)>=_0x92e777[_0x27fe37(0xe7)][_0x27fe37(0xca)][_0x27fe37(0xd2)])return _0x2ed092['channel'][_0x27fe37(0xeb)]('**:x:\x20Time\x20cannot\x20be\x20longer\x20than\x20the\x20song**');return _0x92e777[_0x27fe37(0xcf)](Number(_0x2bb02f)),_0x2ed092[_0x27fe37(0xf0)]['send'](_0x27fe37(0xd1)+format(_0x92e777[_0x27fe37(0xe4)])+_0x27fe37(0xdb));});