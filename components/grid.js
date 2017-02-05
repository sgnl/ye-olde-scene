
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
          <header><h2>{c.artist_name}</h2></header>
          <ul>
            {c.genres.map((g, i) => <li>{g}</li>)}
          </ul>
          <ul>
            {c.websites.map((g, i) => <li>{`fa-${g[0]} url-${g[1]}`}</li>)}
          </ul>
          <div>{c.biography}</div>
        </article>)
      }
    </section>
  )
})