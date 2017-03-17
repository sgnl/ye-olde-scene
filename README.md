
# ye old scene 🎶

> keeping history of music

a minimal "yellow pages"-like service for discovering music local to your city.
artists are asked to provide this information:

- artist name
- two genres
- short bio. (max 155 length)
- two external links with (preferably) one leading to a a music service, and a social/official site.

With this information users will be able to (fuzzy) search by artist name or genre in the search bar. Interacting with the genre names will also filter the search results.

# stack

- 🌈 front-end built with ReactJS via next.js by [zeit](https://zeit.co)
  - 🕋 state management with [mobx](https://github.com/mobxjs/mobx)
  - 💅 styled with [styled-components](https://github.com/styled-components/styled-components)
- 🚀 deployed onto the [now](https://zeit.co/now) service.

# developing
1. fork and clone onto your local machine
1. `yarn` to install dependencies via
1. `npm run dev` to start developing

## project structure notes
- read the [next.js docs](https://github.com/zeit/next.js/) *make sure you are reading docs for the right version*
- `components/` has custom react components
- `store/` has state
- `styles/` has style 💃🏾
