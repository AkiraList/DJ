const a50_0x1c5e=[':x:\x20Please\x20use\x20a\x20volume\x20number\x20No\x20less\x20than\x20`0`\x20and\x20no\x20more\x20than\x20`200`','voiceChannel','49sIYfbs','destroy','selfDeaf','1188vQdYzt','roles',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','send','53939EkVkdF','199447ORvNNp','cache','volume','member','Song','setVolume','get','has','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','Done!','players','11rEjbbQ','vol','23Cpjxzg','djRole','execute','channel','**:x:\x20Nothing\x20playing\x20in\x20this\x20server**','7nhTjjl','2659BCRLaE','345132KUbjUT','easy-djs-commandhandler','voice','current','861jWIpzv','discord.js','reply','guild','loop','450254zkSpJI'];function a50_0x2773(_0x303d98,_0x4cf474){return a50_0x2773=function(_0x1c5ee1,_0x277321){_0x1c5ee1=_0x1c5ee1-0x147;let _0x368f89=a50_0x1c5e[_0x1c5ee1];return _0x368f89;},a50_0x2773(_0x303d98,_0x4cf474);}const a50_0x364361=a50_0x2773;(function(_0x291f4a,_0x2eb8e9){const _0x148534=a50_0x2773;while(!![]){try{const _0x40defe=parseInt(_0x148534(0x14f))*parseInt(_0x148534(0x15f))+-parseInt(_0x148534(0x153))*-parseInt(_0x148534(0x166))+parseInt(_0x148534(0x168))+-parseInt(_0x148534(0x154))+parseInt(_0x148534(0x161))*parseInt(_0x148534(0x16c))+-parseInt(_0x148534(0x14c))*-parseInt(_0x148534(0x167))+-parseInt(_0x148534(0x149));if(_0x40defe===_0x2eb8e9)break;else _0x291f4a['push'](_0x291f4a['shift']());}catch(_0x39f717){_0x291f4a['push'](_0x291f4a['shift']());}}}(a50_0x1c5e,0x39a86));const {VolumeInterface}=require(a50_0x364361(0x16d)),Settings=require('../../database/Settings'),{Command}=require(a50_0x364361(0x169));module['exports']=new Command({'name':a50_0x364361(0x156),'category':a50_0x364361(0x158),'aliases':[a50_0x364361(0x160)],'description':'Toggles\x20looping\x20for\x20the\x20current\x20playing\x20song.','usage':a50_0x364361(0x148)})[a50_0x364361(0x163)]((_0x282bb6,_0x4660db,_0x190152,_0x4fd309,_0x43cabf,_0xc7ce26)=>{const _0x3fb85f=a50_0x364361,{channel:_0x3862c1}=_0x4660db[_0x3fb85f(0x157)][_0x3fb85f(0x16a)];if(!_0x3862c1)return _0x4660db[_0x3fb85f(0x164)][_0x3fb85f(0x152)](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');Settings['findOne']({'guildID':_0x4660db[_0x3fb85f(0x147)]['id']},async(_0x1ac666,_0x28b9f6)=>{const _0x4a9e4b=_0x3fb85f;if(_0x1ac666)console['error'](_0x1ac666);if(_0x28b9f6){if(_0x28b9f6[_0x4a9e4b(0x162)]&&_0x4660db[_0x4a9e4b(0x147)][_0x4a9e4b(0x150)][_0x4a9e4b(0x155)][_0x4a9e4b(0x15a)](_0x28b9f6[_0x4a9e4b(0x162)])){if(!_0x4660db[_0x4a9e4b(0x157)][_0x4a9e4b(0x150)][_0x4a9e4b(0x155)][_0x4a9e4b(0x15b)](_0x28b9f6[_0x4a9e4b(0x162)])){_0x4660db[_0x4a9e4b(0x16e)]({'embed':{'description':':x:\x20There\x20has\x20been\x20a\x20DJ\x20role\x20set\x20up,\x20So\x20you\x20must\x20have\x20the\x20role\x20[<@&'+_0x28b9f6[_0x4a9e4b(0x162)]+'>]\x20to\x20use\x20this\x20command!'}});return;}}}});if(_0x4660db['member'][_0x3fb85f(0x16a)][_0x3fb85f(0x14e)])return _0x4660db[_0x3fb85f(0x164)]['send'](_0x3fb85f(0x151));const _0x47c87f=_0x4660db[_0x3fb85f(0x147)]['me'][_0x3fb85f(0x16a)][_0x3fb85f(0x164)],_0x1fd74d=_0x282bb6['manager'][_0x3fb85f(0x15e)]['get'](_0x4660db[_0x3fb85f(0x147)]['id']);if(!_0x1fd74d||!_0x47c87f)return _0x4660db[_0x3fb85f(0x164)]['send']('**:x:\x20Nothing\x20playing\x20in\x20this\x20server**');if(!_0x1fd74d[_0x3fb85f(0x16b)]<0x1)return _0x4660db[_0x3fb85f(0x164)][_0x3fb85f(0x152)](_0x3fb85f(0x165));if(_0x1fd74d&&_0x3862c1['id']!==_0x1fd74d[_0x3fb85f(0x14b)])return _0x4660db['channel'][_0x3fb85f(0x152)](_0x3fb85f(0x15c));_0x1fd74d&&_0x47c87f&&_0x3862c1['id']!==_0x47c87f['id']&&_0x1fd74d[_0x3fb85f(0x14d)]();const _0x405a08=Number(_0x190152[0x0]);if(!_0x405a08){_0x4660db[_0x3fb85f(0x164)][_0x3fb85f(0x152)](_0x3fb85f(0x14a));return;}if(_0x405a08&&_0x405a08<0x0||_0x405a08&&_0x405a08>0xc8){_0x4660db['channel'][_0x3fb85f(0x152)](_0x3fb85f(0x14a));return;}return _0x1fd74d[_0x3fb85f(0x159)](_0x190152[0x0]),_0x4660db[_0x3fb85f(0x164)][_0x3fb85f(0x152)](_0x3fb85f(0x15d));});