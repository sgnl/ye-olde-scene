
import { observable } from 'mobx'

let store = null

class CardStore {
  @observable cards

  constructor(isServer, lastUpdate) {
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