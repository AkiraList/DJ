const a44_0x5a67=['channel',':x:\x20**You\x20have\x20to\x20be\x20in\x20a\x20voice\x20channel\x20to\x20use\x20this\x20command.**',':x:\x20**You\x20cannot\x20run\x20this\x20command\x20while\x20deafened**','join','youtu','players','EMBED_LINKS','hasPermission','249338JEXPkH','1681mFHhCu','3rZqAUQ','9803OVxgIt','**:x:\x20Invalid\x20usage**','42IsBQWC','http','84711aKUxlj','setColor','**Searching**\x20:mag_right:\x20`','126725xAbbym','playtop\x20<link/query>','ptop','#ff0000','voiceChannel','includes','soundcloud','get','setDescription','play:soundcloud','71TeNANy','setTitle','content','728687TTJeAq','selfDeaf','send','guild','6404TCZajl','voice','spotify','**:x:\x20You\x20need\x20to\x20be\x20in\x20the\x20same\x20voice\x20channel\x20as\x20the\x20bot\x20to\x20use\x20this\x20command**','member','execute','easy-djs-commandhandler','play:youtube','426sHluaJ','manager'];const a44_0x3b9547=a44_0x45fb;(function(_0x26241a,_0x3d76b1){const _0x119844=a44_0x45fb;while(!![]){try{const _0x4e14bb=parseInt(_0x119844(0x1d0))*parseInt(_0x119844(0x1db))+-parseInt(_0x119844(0x1f1))+-parseInt(_0x119844(0x1da))+parseInt(_0x119844(0x1ee))*parseInt(_0x119844(0x1dd))+-parseInt(_0x119844(0x1e4))*-parseInt(_0x119844(0x1dc))+-parseInt(_0x119844(0x1df))*parseInt(_0x119844(0x1c8))+-parseInt(_0x119844(0x1e1));if(_0x4e14bb===_0x3d76b1)break;else _0x26241a['push'](_0x26241a['shift']());}catch(_0x4d8992){_0x26241a['push'](_0x26241a['shift']());}}}(a44_0x5a67,0x7072e));function a44_0x45fb(_0x1945f9,_0x44df2d){return a44_0x45fb=function(_0x5a675d,_0x45fb29){_0x5a675d=_0x5a675d-0x1c8;let _0x203e4e=a44_0x5a67[_0x5a675d];return _0x203e4e;},a44_0x45fb(_0x1945f9,_0x44df2d);}const {MessageEmbed}=require('discord.js'),playermanager=require('../../handlers/lavalink/playermanager'),{Command}=require(a44_0x3b9547(0x1ce));module['exports']=new Command({'name':'playtop','category':'Song','aliases':[a44_0x3b9547(0x1e6),'pt'],'description':'Adds\x20a\x20song\x20with\x20the\x20given\x20name/url\x20on\x20the\x20top\x20of\x20the\x20queue','usage':a44_0x3b9547(0x1e5)})[a44_0x3b9547(0x1cd)]((_0x462982,_0x3b77bf,_0x594309,_0x2cc219,_0x562d95,_0x389c33)=>{const _0x50fd72=a44_0x3b9547,{channel:_0x54ce0c}=_0x3b77bf[_0x50fd72(0x1cc)]['voice'];if(!_0x54ce0c)return _0x3b77bf[_0x50fd72(0x1d2)][_0x50fd72(0x1f3)](_0x50fd72(0x1d3));if(_0x3b77bf[_0x50fd72(0x1cc)][_0x50fd72(0x1c9)][_0x50fd72(0x1f2)])return _0x3b77bf['channel']['send'](_0x50fd72(0x1d4));const _0x3d4e62=_0x3b77bf[_0x50fd72(0x1f4)]['me']['voice'][_0x50fd72(0x1d2)];if(!_0x594309[0x0]){let _0x3ca931=_0x389c33+_0x50fd72(0x1e5),_0x37806a=new MessageEmbed()[_0x50fd72(0x1ef)](_0x50fd72(0x1de))[_0x50fd72(0x1ec)](_0x3ca931)[_0x50fd72(0x1e2)](_0x50fd72(0x1e7));_0x3b77bf['guild']['me'][_0x50fd72(0x1d9)](_0x50fd72(0x1d8))?_0x3b77bf[_0x50fd72(0x1d2)][_0x50fd72(0x1f3)](_0x37806a):_0x3b77bf[_0x50fd72(0x1d2)][_0x50fd72(0x1f3)]('**:x:\x20Invalid\x20usage**\x0a'+_0x3ca931);return;}const _0x26c8c8=_0x462982[_0x50fd72(0x1d1)][_0x50fd72(0x1d7)][_0x50fd72(0x1eb)](_0x3b77bf[_0x50fd72(0x1f4)]['id']);if(_0x26c8c8&&_0x54ce0c['id']!==_0x26c8c8[_0x50fd72(0x1e8)])return _0x3b77bf[_0x50fd72(0x1d2)]['send'](_0x50fd72(0x1cb));_0x26c8c8&&_0x3d4e62&&_0x54ce0c['id']!==_0x3d4e62['id']&&_0x26c8c8['destroy']();if(_0x3b77bf[_0x50fd72(0x1f0)][_0x50fd72(0x1e9)](_0x50fd72(0x1d6)))_0x3b77bf[_0x50fd72(0x1d2)][_0x50fd72(0x1f3)]('**Searching**\x20:mag_right:\x20`'+_0x594309[_0x50fd72(0x1d5)]('\x20')+'`'),playermanager(_0x462982,_0x3b77bf,_0x594309,'play:youtube');else{if(_0x3b77bf[_0x50fd72(0x1f0)][_0x50fd72(0x1e9)](_0x50fd72(0x1ca)))_0x3b77bf[_0x50fd72(0x1d2)]['send']('**Searching**\x20:mag_right:\x20`'+_0x594309[_0x50fd72(0x1d5)]('\x20')+'`'),playermanager(_0x462982,_0x3b77bf,_0x594309,'play:youtube');else{if(_0x3b77bf[_0x50fd72(0x1f0)]['includes'](_0x50fd72(0x1ea)))_0x3b77bf['channel'][_0x50fd72(0x1f3)](_0x50fd72(0x1e3)+_0x594309['join']('\x20')+'`'),playermanager(_0x462982,_0x3b77bf,_0x594309,_0x50fd72(0x1ed));else _0x3b77bf['content'][_0x50fd72(0x1e9)](_0x50fd72(0x1e0))?(_0x3b77bf['channel'][_0x50fd72(0x1f3)](_0x50fd72(0x1e3)+_0x594309[_0x50fd72(0x1d5)]('\x20')+'`'),playermanager(_0x462982,_0x3b77bf,_0x594309,'play:youtube')):(_0x3b77bf['channel'][_0x50fd72(0x1f3)](_0x50fd72(0x1e3)+_0x594309['join']('\x20')+'`'),playermanager(_0x462982,_0x3b77bf,_0x594309,_0x50fd72(0x1cf)));}}});