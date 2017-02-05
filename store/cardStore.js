
import { observable } from 'mobx'

let store = null

class CardStore {
  @observable cards

  constructor(isServer, lastUpdate) {
    this.cards = [1, 2, 3]
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