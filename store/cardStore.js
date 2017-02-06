
import { observable, computed, action } from 'mobx'

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
        artist_name: 'Beaman',
        genres: ['pop-punk', 'punk'],
        websites: [
          ['bandcamp', 'beaman.bandcamp.com'],
          ['facebook', 'www.facebook.com/upthebeaman']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.'
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
    this.updateFilteredCards = this.updateFilteredCards.bind(this)
  }

  updateFilterString(value) {
    this.filterString = value
    const newFilteredCardsState = [].concat(this.updateFilteredCards())
    return this.filteredCards = newFilteredCardsState;
  }

  updateFilteredCards() {
    return this.cards.filter(({ artist_name }) => this.fuzzyMatch(artist_name, this.filterString));
  }

  fuzzyMatch (str,pattern) {
    pattern = pattern.split("").reduce(function(a,b){ return a+".*"+b; });
    console.log('pattern: ', pattern);
    return (new RegExp(pattern)).test(str);
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