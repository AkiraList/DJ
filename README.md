# Self Hosting:
> There are requirements, which this bot does need to have.

### Fill out botconfig.json like so (Replacing most of the defaults with your own :eyes: )

```json
{
  "token": "Your-Discord-Bot-Token",
  "prefix": "!",
  "mongodbURL": "MongoDB Database URI",
  "lewdsAPI": "An API Key from lewds.fun (REQUIRED FOR NSFW)",
  "clientsettings": {
    "nodes": [
      {
         "host": "0.0.0.0",
         "port": 2332,
         "password": "YouShallNotPass"
       }
    ]
  },

  "spotify": {
    "clientSecret": "Spotify Secret (REQ. For spotify URL support)",
    "clientID": "Spotify Client (REQ. For spotify URL support)"
  }

}
```
### Once Complete, and Lavalink + Application.yml are set up Properly:

```shell
$ npm install
$ npm start
```

Also Join my [Discord Server](https://api.lewds.fun/discord) and [NSFW API](https://lewds.fun) to get a token/key for config!



# lewds.fun API

<a href="https://www.npmjs.com/package/lewds.fun"><img src="https://img.shields.io/npm/dt/lewds.api.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://www.npmjs.com/package/lewds.fun"><img src="https://img.shields.io/npm/v/lewds.api.svg?maxAge=3600" alt="NPM version" /></a>

<img src="https://nodei.co/npm/lewds.api.png?downloads=true&amp;stars=true" alt="npm installnfo" data-canonical-src="https://nodei.co/npm/lewds.api.png?downloads=true&amp;stars=true" style="max-width:100%;"></div><a href="https://api.lewds.fun/discord"><img src="https://img.shields.io/discord/603697853428137986?color=black&logo=discord&logoColor=red" alt="Discord server" /></a></div>
