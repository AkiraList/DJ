const a49_0x31e1=['play:youtube','youtu','../../handlers/lavalink/playermanager','213879JRKgBJ','594314ovjhiv','253231hfkCkp','get','Song','easy-djs-commandhandler','172703BMmwMa','channel','includes','players','execute','join','82zzcuYF','play:soundcloud',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','setDescription','member','**Searching**\x20:mag_right:\x20`','manager','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','1WcbBwI','245233YYkuJL','setColor','voiceChannel','discord.js','1374JBWQRl','soundcloud','hasPermission','1YUVggi','184299xBIKcE','spotify','content','setTitle','play\x20<link/query>','soundcloud\x20<link/query>','destroy','send','voice','guild'];function a49_0x2444(_0x294e15,_0x2ef263){return a49_0x2444=function(_0x31e167,_0x24447f){_0x31e167=_0x31e167-0x78;let _0x2c354a=a49_0x31e1[_0x31e167];return _0x2c354a;},a49_0x2444(_0x294e15,_0x2ef263);}const a49_0x7f2bea=a49_0x2444;(function(_0x44bea3,_0x21b6b2){const _0x5a512e=a49_0x2444;while(!![]){try{const _0x5828cf=-parseInt(_0x5a512e(0xa0))+parseInt(_0x5a512e(0x7c))*parseInt(_0x5a512e(0x89))+parseInt(_0x5a512e(0x9c))*-parseInt(_0x5a512e(0x8c))+parseInt(_0x5a512e(0x85))+-parseInt(_0x5a512e(0x8d))+parseInt(_0x5a512e(0x9a))*-parseInt(_0x5a512e(0x84))+parseInt(_0x5a512e(0x9b));if(_0x5828cf===_0x21b6b2)break;else _0x44bea3['push'](_0x44bea3['shift']());}catch(_0x5ad92a){_0x44bea3['push'](_0x44bea3['shift']());}}}(a49_0x31e1,0x1f467));const {MessageEmbed}=require(a49_0x7f2bea(0x88)),playermanager=require(a49_0x7f2bea(0x99)),{Command}=require(a49_0x7f2bea(0x9f));module['exports']=new Command({'name':a49_0x7f2bea(0x8a),'category':a49_0x7f2bea(0x9e),'aliases':['sc'],'description':'Plays\x20a\x20song\x20from\x20SounCloud\x20with\x20the\x20given\x20name/url','usage':a49_0x7f2bea(0x92)})[a49_0x7f2bea(0x7a)]((_0x138541,_0x45c89a,_0x6f7ac1,_0x51073f,_0x8f971b,_0x30511b)=>{const _0x705053=a49_0x7f2bea,{channel:_0x1ab722}=_0x45c89a['member'][_0x705053(0x95)];if(!_0x1ab722)return _0x45c89a[_0x705053(0xa1)]['send'](':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**');if(_0x45c89a[_0x705053(0x80)]['voice']['selfDeaf'])return _0x45c89a[_0x705053(0xa1)]['send'](_0x705053(0x7e));const _0x564ac7=_0x45c89a[_0x705053(0x96)]['me'][_0x705053(0x95)][_0x705053(0xa1)];if(!_0x6f7ac1[0x0]){let _0x3f6b19=_0x30511b+_0x705053(0x91),_0x23a6a3=new MessageEmbed()[_0x705053(0x90)]('**:x:\x20Invalid\x20usage**')[_0x705053(0x7f)](_0x3f6b19)[_0x705053(0x86)]('#ff0000');_0x45c89a[_0x705053(0x96)]['me'][_0x705053(0x8b)]('EMBED_LINKS')?_0x45c89a[_0x705053(0xa1)]['send'](_0x23a6a3):_0x45c89a[_0x705053(0xa1)][_0x705053(0x94)]('**:x:\x20Invalid\x20usage**\x0a'+_0x3f6b19);return;}const _0x11cc96=_0x138541[_0x705053(0x82)][_0x705053(0x79)][_0x705053(0x9d)](_0x45c89a[_0x705053(0x96)]['id']);if(_0x11cc96&&_0x1ab722['id']!==_0x11cc96[_0x705053(0x87)])return _0x45c89a[_0x705053(0xa1)][_0x705053(0x94)](_0x705053(0x83));_0x11cc96&&_0x564ac7&&_0x1ab722['id']!==_0x564ac7['id']&&_0x11cc96[_0x705053(0x93)]();if(_0x45c89a[_0x705053(0x8f)][_0x705053(0x78)](_0x705053(0x98)))_0x45c89a[_0x705053(0xa1)][_0x705053(0x94)](_0x705053(0x81)+_0x6f7ac1[_0x705053(0x7b)]('\x20')+'`'),playermanager(_0x138541,_0x45c89a,_0x6f7ac1,_0x705053(0x97));else{if(_0x45c89a[_0x705053(0x8f)]['includes'](_0x705053(0x8e)))_0x45c89a[_0x705053(0xa1)][_0x705053(0x94)](_0x705053(0x81)+_0x6f7ac1[_0x705053(0x7b)]('\x20')+'`'),playermanager(_0x138541,_0x45c89a,_0x6f7ac1,_0x705053(0x97));else{if(_0x45c89a[_0x705053(0x8f)][_0x705053(0x78)](_0x705053(0x8a)))_0x45c89a[_0x705053(0xa1)][_0x705053(0x94)](_0x705053(0x81)+_0x6f7ac1[_0x705053(0x7b)]('\x20')+'`'),playermanager(_0x138541,_0x45c89a,_0x6f7ac1,_0x705053(0x7d));else _0x45c89a[_0x705053(0x8f)][_0x705053(0x78)]('http')?(_0x45c89a[_0x705053(0xa1)][_0x705053(0x94)](_0x705053(0x81)+_0x6f7ac1[_0x705053(0x7b)]('\x20')+'`'),playermanager(_0x138541,_0x45c89a,_0x6f7ac1,_0x705053(0x7d))):(_0x45c89a['channel'][_0x705053(0x94)](_0x705053(0x81)+_0x6f7ac1[_0x705053(0x7b)]('\x20')+'`'),playermanager(_0x138541,_0x45c89a,_0x6f7ac1,_0x705053(0x7d)));}}});