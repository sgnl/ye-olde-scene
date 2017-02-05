
import { Component } from 'react'
import { inject, observer } from 'mobx-react'

export default inject("store")(({ store }) => {
  console.log('store: ', store);
  return (
    <section>
      {
        store.cards.map(i => <h1>GRID!</h1>)
      }
    </section>
  )
})