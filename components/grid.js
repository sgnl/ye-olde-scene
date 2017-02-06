
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { css } from 'glamor'
import { grid, card, cardHeader, genreList } from '../styles'

export default inject("store")(observer(({ store }) => {
  let cards;

  if (store.filterString.length) {
    cards = store.filteredCards;
  } else {
    cards = store.cards
  }

  console.log('cards: ', cards.length);
  return (
    <section {...grid}>
      {
        cards.map((c,i) => <article {...card} key={i}>
          <header><h2 { ...cardHeader }>{c.artist_name}</h2></header>
          <ul { ...genreList}>
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
}))