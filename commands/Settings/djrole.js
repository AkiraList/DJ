const a37_0x5691=['940861yrDltc','685274dmmXIh','send','MANAGE_ROLES','../../database/Settings','MANAGE_GUILD','662669SYmxfM','clearqueue','cache','error','reply','Please\x20provide\x20a\x20proper\x20djrole!','1735NHlYmk','You\x20need\x20`MANAGE\x20SERVER`\x20and\x20`MANAGE\x20ROLES`\x20permissions\x20to\x20use\x20this\x20command!','mongoose','Sets\x20a\x20DJ\x20role\x20for\x20the\x20server.','317nizStT','790990gKTisa','mentions','catch','djrole','djRole','channel','2543UsenSU','1oZzvab','guild','exports','permissions','1zihJfZ','Types','2349096QvUhRU','member','381gAVRqP','Settings','has','save'];const a37_0x276059=a37_0x25d2;(function(_0x1ce33f,_0x5f550d){const _0x1c051b=a37_0x25d2;while(!![]){try{const _0x50a070=-parseInt(_0x1c051b(0x116))+parseInt(_0x1c051b(0x115))*parseInt(_0x1c051b(0xf8))+parseInt(_0x1c051b(0xfd))*parseInt(_0x1c051b(0x106))+-parseInt(_0x1c051b(0xf9))*parseInt(_0x1c051b(0x105))+-parseInt(_0x1c051b(0x10b))+parseInt(_0x1c051b(0x111))*-parseInt(_0x1c051b(0x101))+parseInt(_0x1c051b(0xff));if(_0x50a070===_0x5f550d)break;else _0x1ce33f['push'](_0x1ce33f['shift']());}catch(_0x288a10){_0x1ce33f['push'](_0x1ce33f['shift']());}}}(a37_0x5691,0xbfa32));const mongoose=require(a37_0x276059(0x113)),Settings=require(a37_0x276059(0x109));function a37_0x25d2(_0x17e533,_0x3642eb){return a37_0x25d2=function(_0x5691b2,_0x25d2c4){_0x5691b2=_0x5691b2-0xf7;let _0x430ba1=a37_0x5691[_0x5691b2];return _0x430ba1;},a37_0x25d2(_0x17e533,_0x3642eb);}module[a37_0x276059(0xfb)]={'name':a37_0x276059(0x119),'category':a37_0x276059(0x102),'aliases':['setdj'],'description':a37_0x276059(0x114),'usage':a37_0x276059(0x10c),'execute'(_0x2a5c40,_0xa52ac5,_0x4d3c02,_0x1f1f19,_0x27e37d,_0xdb9d8d){const _0x47bcd0=a37_0x276059;if(!_0xa52ac5[_0x47bcd0(0x100)][_0x47bcd0(0xfc)][_0x47bcd0(0x103)]([_0x47bcd0(0x108),_0x47bcd0(0x10a)])){_0xa52ac5[_0x47bcd0(0x10f)](_0x47bcd0(0x112));return;};if(_0x4d3c02['length']<0x1){_0xa52ac5[_0x47bcd0(0x10f)](_0x47bcd0(0x110));return;};const _0x24742f=_0xa52ac5[_0x47bcd0(0x117)]['roles'][0x0]||_0xa52ac5[_0x47bcd0(0xfa)]['roles'][_0x47bcd0(0x10d)]['get'](_0x4d3c02[0x0]);if(!_0x24742f){_0xa52ac5['reply'](_0x47bcd0(0x110));return;};Settings['findOne']({'guildID':_0xa52ac5[_0x47bcd0(0xfa)]['id']},async(_0x11a467,_0x31858f)=>{const _0x3d1be1=_0x47bcd0;if(_0x11a467)console['error'](_0x11a467);if(!_0x31858f){const _0x4be0ce=new Settings({'_id':mongoose[_0x3d1be1(0xfe)]['ObjectId'](),'guildID':_0xa52ac5[_0x3d1be1(0xfa)]['id'],'djRole':_0x24742f['id']});await _0x4be0ce[_0x3d1be1(0x104)](),_0xa52ac5[_0x3d1be1(0xf7)][_0x3d1be1(0x107)]({'embed':{'description':'Successfully\x20set\x20DJ\x20role\x20to:\x20'+_0x24742f}});}else _0x31858f[_0x3d1be1(0x11a)]=_0x24742f['id'],await _0x31858f[_0x3d1be1(0x104)]()[_0x3d1be1(0x118)](_0x545524=>console[_0x3d1be1(0x10e)](_0x545524)),_0xa52ac5[_0x3d1be1(0xf7)][_0x3d1be1(0x107)]({'embed':{'description':'Successfully\x20set\x20DJ\x20role\x20to:\x20'+_0x24742f}});});}};