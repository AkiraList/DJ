const a47_0x8fa4=['find','986587Dxhdwk','voiceChannel','players','**:x:\x20Invalid\x20usage**\x0a','search','execute','1015JPlRQG','guild','send','1489WRZVHZ','play\x20<link/query>','52979uGFdRu','827094mvEgsA','member','exports','selfDeaf','Song','29nKohwZ','voice','167219GnWlAO','#ff0000','get','channel','setColor','manager','3202bGrTmd',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**','search:youtube','search\x20<link/query>','2991637clbPpZ','setTitle','67dLBDkm','**:x:\x20Invalid\x20usage**'];const a47_0x1bf1f4=a47_0x1060;(function(_0x4d6854,_0x3f6689){const _0x4a345f=a47_0x1060;while(!![]){try{const _0x5641f7=-parseInt(_0x4a345f(0x83))*parseInt(_0x4a345f(0x89))+-parseInt(_0x4a345f(0x7d))+-parseInt(_0x4a345f(0x98))+-parseInt(_0x4a345f(0x7b))*parseInt(_0x4a345f(0x97))+-parseInt(_0x4a345f(0x8c))+parseInt(_0x4a345f(0x95))*parseInt(_0x4a345f(0x92))+parseInt(_0x4a345f(0x87));if(_0x5641f7===_0x3f6689)break;else _0x4d6854['push'](_0x4d6854['shift']());}catch(_0x5b0e7c){_0x4d6854['push'](_0x4d6854['shift']());}}}(a47_0x8fa4,0xbc44b));function a47_0x1060(_0xee9c04,_0x3770f7){return a47_0x1060=function(_0x8fa4da,_0x1060a8){_0x8fa4da=_0x8fa4da-0x77;let _0x561fb4=a47_0x8fa4[_0x8fa4da];return _0x561fb4;},a47_0x1060(_0xee9c04,_0x3770f7);}const {MessageEmbed}=require('discord.js'),playermanager=require('../../handlers/lavalink/playermanager'),{Command}=require('easy-djs-commandhandler');module[a47_0x1bf1f4(0x78)]=new Command({'name':a47_0x1bf1f4(0x90),'category':a47_0x1bf1f4(0x7a),'aliases':[a47_0x1bf1f4(0x8b)],'description':'Searches\x20from\x20Youtube\x20for\x20a\x20song\x20via\x20your\x20query\x20and\x20returns\x20the\x20top\x2010\x20results.','usage':a47_0x1bf1f4(0x86)})[a47_0x1bf1f4(0x91)]((_0x3b61e1,_0x44a77f,_0x32f555,_0xa4383,_0x564657,_0xe889b5)=>{const _0x3ae8d6=a47_0x1bf1f4,{channel:_0x353c73}=_0x44a77f[_0x3ae8d6(0x77)][_0x3ae8d6(0x7c)];if(!_0x353c73)return _0x44a77f[_0x3ae8d6(0x80)][_0x3ae8d6(0x94)](_0x3ae8d6(0x84));if(_0x44a77f[_0x3ae8d6(0x77)]['voice'][_0x3ae8d6(0x79)])return _0x44a77f[_0x3ae8d6(0x80)][_0x3ae8d6(0x94)](':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**');const _0x3e64e7=_0x44a77f[_0x3ae8d6(0x93)]['me']['voice'][_0x3ae8d6(0x80)];if(!_0x32f555[0x0]){let _0x154720=_0xe889b5+_0x3ae8d6(0x96),_0x303830=new MessageEmbed()[_0x3ae8d6(0x88)](_0x3ae8d6(0x8a))['setDescription'](_0x154720)[_0x3ae8d6(0x81)](_0x3ae8d6(0x7e));_0x44a77f[_0x3ae8d6(0x93)]['me']['hasPermission']('EMBED_LINKS')?_0x44a77f[_0x3ae8d6(0x80)][_0x3ae8d6(0x94)](_0x303830):_0x44a77f['channel']['send'](_0x3ae8d6(0x8f)+_0x154720);return;}const _0x4b86bb=_0x3b61e1[_0x3ae8d6(0x82)][_0x3ae8d6(0x8e)][_0x3ae8d6(0x7f)](_0x44a77f[_0x3ae8d6(0x93)]['id']);if(_0x4b86bb&&_0x353c73['id']!==_0x4b86bb[_0x3ae8d6(0x8d)])return _0x44a77f[_0x3ae8d6(0x80)][_0x3ae8d6(0x94)]('**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**');_0x4b86bb&&_0x3e64e7&&_0x353c73['id']!==_0x3e64e7['id']&&_0x4b86bb['destroy'](),playermanager(_0x3b61e1,_0x44a77f,_0x32f555,_0x3ae8d6(0x85));});