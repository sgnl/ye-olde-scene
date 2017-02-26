
import { observable, toJS } from 'mobx'
import { css } from 'glamor'
import {
  InfoSlideUp,
  StillBanner
 } from '../styles'


let store = null

class CardStore {
  @observable cards
  @observable isSearching
  @observable filterString
  @observable filteredCards

  constructor(isServer, lastUpdate) {
    this.filterString = []
    this.filteredCards = []
    this.cards = [
      {
        isBanner: 'INFO',
        message: `💁🏽
        USE THE SEARCH TO FILTER by name or genre`,
        component: InfoSlideUp
      },
      {
        artist_name: 'Beaman',
        genres: ['pop-punk', 'punk'],
        websites: [
          ['bandcamp', 'beaman.bandcamp.com'],
          ['facebook', 'www.facebook.com/upthebeaman']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.',
        images: [
          'scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/12445909_989917981084297_402039653_n.jpg?ig_cache_key=Mjk1MzIzNjMwNTI0NjgxMjk4.2'
        ],
        css: {
          imgBackgroundPosition: ['0', '-100px']
        }
      },
      // {
      //   isBanner: 'PROMOTION',
      //   message: 'THIS IS A SPECIAL PROMOTION FOR AN EVENT',
      //   component: StillBanner
      // },
      {
        artist_name: 'Poncho',
        genres: ['psychadelic', 'rock'],
        websites: [
          ['bandcamp', 'ponchoisaband.bandcamp.com'],
          ['twitter', 'twitter.com/ponchoisaband']
        ],
        biography: 'A band of jabronis on the island of Oahu, in the middle of the Pacific Ocean.',
        images: [
        'scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/13671933_1722727971334185_812949232_n.jpg?ig_cache_key=MTI5NTEzODIyNTg1MzM4MDUzOQ%3D%3D.2'
        ],
        css: {
          imgBackgroundPosition: ['0', '-65px']
        }
      },
      {
        artist_name: 'Tunnel Vision',
        genres: ['hardcore', 'punk'],
        websites: [
          ['bandcamp', 'tunnelxvision.bandcamp.com']
        ],
        biography: 'Hawai\'i Straight Edge.',
        images: [
          'f4.bcbits.com/img/a1832510847_16.jpg'
        ],
        css: {
          imgBackgroundPosition: ['0', '-100px']
        }
      },
      {
        artist_name: 'T.V. Microwave',
        genres: ['rock', 'pop-punk'],
        websites: [
          ['bandcamp', 'tvmicrowave.bandcamp.com'],
          ['facebook', 'www.facebook.com/tvmicrowave']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.',
        images: [
          'f4.bcbits.com/img/0003419821_10.jpg'
        ],
        css: {
          imgBackgroundPosition: ['0', '-80px']
        }
      },
      {
        artist_name: 'Nerve Beats',
        genres: ['experimental', 'art-punk'],
        websites: [
          ['bandcamp', 'nervebeats.bandcamp.com']
        ],
        biography: 'Alex Nagata-Bass Jack Tawil-Percussion Travis Wiggins-Guitar / Vox art punks from hawaii.',
        images: [
          'f4.bcbits.com/img/0002899713_10.jpg'
        ],
        css: {
          imgBackgroundPosition: ['0', '-130px']
        }
      },
      {
        artist_name: 'Harshist',
        genres: ['no-wave', 'post-punk'],
        websites: [
          ['bandcamp', 'harshist.bandcamp.com']
        ],
        biography: '',
        images: [
          'f4.bcbits.com/img/a3830916244_16.jpg'
        ],
        css: {
          imgBackgroundPosition: ['0', '-170px']
        }
      },
      {
        artist_name: 'Siblings',
        genres: ['hardcore', 'punk'],
        websites: [
          ['bandcamp', 'siblingspunx.bandcamp.com']
        ],
        biography: 'Hardcore punk from a real city full of freaks masquerading as paradise.',
        images: [
          'f4.bcbits.com/img/a2013425909_16.jpg'
        ],
        css: {
          imgBackgroundPosition: ['0', '-120px']
        }
      }
    ]
    this.count = this.cards.length
    this.lastUpdate = lastUpdate
    this.artistNameReducer = this.artistNameReducer.bind(this)
    this.genreReducer = this.genreReducer.bind(this)
  }

  // create options for search
  // e.g. `name:har` should only show harshist
  //      `genre:po` should show genres only, etc...
  updateFilterString (value = '') {
    if (!value.length) return this.filterString = []
    this.filterString = value.toLowerCase().split('')
    const newCards = [].concat(this.artistNameReducer(), this.genreReducer())
    this.count = newCards.length
    return this.filteredCards = newCards
  }

  artistNameReducer () {
    return this.cards.filter(({ artist_name }) => this.fuzzyMatch(artist_name, this.filterString))
  }

  genreReducer () {
    return this.cards.filter(({ genres }) => {
      return Object.assign([], toJS(genres)).filter(c => this.fuzzyMatch(c, this.filterString)).length
    })
  }

  fuzzyMatch (str,pattern) {
    pattern = pattern.reduce((a,b) => a + ".*" + b)
    str = String(toJS(str))
    return (new RegExp(pattern)).test(str.toLowerCase())
  }
}

export function initStore (isServer, lastUpdate = Date.now()) {
  if (isServer && typeof window === 'undefined') {
    return new CardStore(isServer, lastUpdate)
  } else {
    if (store === null) {
      store = new CardStore(isServer, lastUpdate)
    }
    return store
  }
}