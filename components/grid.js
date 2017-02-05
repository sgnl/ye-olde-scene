
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Filter } from '../components'
import { gridStyle, cardStyle } from '../styles'

export default inject("store")(({ store }) => {

  return (
    <section {...gridStyle}>
      <Filter  />
      {
        store.cards.map((c,i) => <article {...cardStyle} key={i}>
          <h2>The Pug and Buns</h2>
          <ul>
            <li>punk</li>
            <li>metal</li>
          </ul>
          <ul>
            <li>Wut</li>
            <li>Wut</li>
            <li>Wut</li>
            <li>Wut</li>
            <li>Wut</li>
          </ul>
        </article>)
      }
    </section>
  )
})