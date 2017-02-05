
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
        artist_name: 'Beaman',
        genres: ['pop-punk', 'punk'],
        websites: [
          ['bandcamp', 'beaman.bandcamp.com'],
          ['facebook', 'www.facebook.com/upthebeaman']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.'
      },
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
        artist_name: 'Beaman',
        genres: ['pop-punk', 'punk'],
        websites: [
          ['bandcamp', 'beaman.bandcamp.com'],
          ['facebook', 'www.facebook.com/upthebeaman']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.'
      },
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
        artist_name: 'Beaman',
        genres: ['pop-punk', 'punk'],
        websites: [
          ['bandcamp', 'beaman.bandcamp.com'],
          ['facebook', 'www.facebook.com/upthebeaman']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.'
      },
      {
        artist_name: 'Beaman',
        genres: ['pop-punk', 'punk'],
        websites: [
          ['bandcamp', 'beaman.bandcamp.com'],
          ['facebook', 'www.facebook.com/upthebeaman']
        ],
        biography: 'We write songs about politics and relationships... and sometimes farts.'
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