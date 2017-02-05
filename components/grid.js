
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { grid, card } from '../styles'

export default inject("store")(({ store }) => {

  return (
    <section {...grid}>
      {
        store.cards.map((c,i) => <article {...card} key={i}>
          <header><h2>{c.artist_name}</h2></header>
          <ul>
            {c.genres.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
          <ul>
            {c.websites.map((g, i) => <li key={i}>{g[0]}</li>)}
          </ul>
          <div>{c.biography}</div>
        </article>)
      }
    </section>
  )
})