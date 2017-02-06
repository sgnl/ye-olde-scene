
import { observable, computed, action, toJS } from 'mobx'
import { css } from 'glamor'
import {
  infoSlideUp,
  bannerPromotion
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
        USE THE SEARCH TO FILTER`,
        styles: css(infoSlideUp, {
          padding: '0 1em',
          textAlign: 'center',
        })
      },
      {
        artist_name: 'Beaman',
        genres: ['pop-punk', 'punk', 'failed-orbit-records'],
        websites: [
          ['bandcamp', 'beaman.bandcamp.com'],
          ['facebook', 'www.facebook.com/upthebeaman']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.',
        images: [
          'scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/12445909_989917981084297_402039653_n.jpg?ig_cache_key=Mjk1MzIzNjMwNTI0NjgxMjk4.2'
        ]
      },
      {
        isBanner: 'PROMOTION',
        message: 'THIS IS A SPECIAL PROMOTION FOR AN EVENT',
        styles: bannerPromotion
      },
      {
        artist_name: 'Poncho',
        genres: ['punk', 'rock'],
        websites: [
          ['bandcamp', 'ponchoisaband.bandcamp.com'],
          ['twitter', 'twitter.com/ponchoisaband']
        ],
        biography: 'A band of jabronis on the island of Oahu, in the middle of the Pacific Ocean.'
      },
      {
        artist_name: 'Tunnel Vision',
        genres: ['hardcore', 'punk'],
        websites: [
          ['bandcamp', 'tunnelxvision.bandcamp.com']
        ],
        biography: 'Hawai\'i Straight Edge.'
      },
      {
        artist_name: 'T.V. Microwave',
        genres: ['pop-punk', 'punk', 'rock'],
        websites: [
          ['bandcamp', 'tvmicrowave.bandcamp.com'],
          ['facebook', 'www.facebook.com/tvmicrowave']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.'
      },
      {
        artist_name: 'Nerve Beats',
        genres: ['experimental', 'art-punk', 'post-punk'],
        websites: [
          ['bandcamp', 'nervebeats.bandcamp.com']
        ],
        biography: 'Alex Nagata-Bass Jack Tawil-Percussion Travis Wiggins-Guitar / Vox art punks from hawaii.'
      },
      {
        artist_name: 'Harshist',
        genres: ['no-wave', 'post-punk', 'punk'],
        websites: [
          ['bandcamp', 'harshist.bandcamp.com']
        ],
        biography: ''
      },
      {
        artist_name: 'Siblings',
        genres: ['hardcore', 'pop-punk', 'punk'],
        websites: [
          ['bandcamp', 'siblingspunx.bandcamp.com']
        ],
        biography: 'Hardcore punk from a real city full of freaks masquerading as paradise.'
      }
    ]
    this.lastUpdate = lastUpdate
    this.artistNameReducer = this.artistNameReducer.bind(this)
    this.genreReducer = this.genreReducer.bind(this)
  }

  updateFilterString (value = '') {
    if (!value.length) return
    this.filterString = value.toLowerCase().split('')
    return this.filteredCards = [].concat(this.artistNameReducer(), this.genreReducer())
  }

  artistNameReducer () {
    return this.cards.filter(({ artist_name }) => this.fuzzyMatch(artist_name, this.filterString));
  }

  genreReducer () {
    return this.cards.filter(({ genres }) => {
      return Object.assign([], toJS(genres)).filter(c => this.fuzzyMatch(c, this.filterString)).length
    })
  }

  fuzzyMatch (str,pattern) {
    pattern = pattern.reduce((a,b) => a + ".*" + b);
    str = String(toJS(str))
    return (new RegExp(pattern)).test(str.toLowerCase());
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