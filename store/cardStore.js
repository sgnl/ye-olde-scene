
import { observable } from 'mobx'

class CardStore {
  @observable cards

  constructor() {
    this.cards = []
  }
}

export default new CardStore()