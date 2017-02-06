
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { css } from 'glamor'
import { grid, card, cardHeader, genreList, genreItem, cardBio, urlList, urlIcon } from '../styles'
import FontAwesome from 'react-fontawesome'

export default inject("store")(observer(({ store }) => {
  let cards;

  if (store.filterString.length) {
    cards = store.filteredCards;
  } else {
    cards = store.cards
  }

  return (
    <section {...grid}>
      {
        cards.map((c,i) => {
          if (!c.hasOwnProperty('isBanner')) {
            return (
              <article {...card} key={i}>
                <header><h2 { ...cardHeader }>{c.artist_name}</h2></header>
                <ul { ...genreList}>
                  {c.genres.map((g, i) => <li { ...genreItem } key={i}>{g}</li>)}
                </ul>
                <p { ...cardBio }>{c.biography}</p>
                <ul { ...urlList} >
                  {c.websites.map((g, i) => <li key={i}><FontAwesome { ...urlIcon } name={g[0]} />{g[0]}</li>)}

                </ul>
              </article>
            )
          }

          switch (c.isBanner) {
            case 'INFO':
              return (
                <article key={i}>
                  <p { ...c.styles }>{ c.message }</p>
                </article>
              )
            case 'PROMOTION':
              return (
                <article { ...card } key={i}>
                  <p { ...c.styles }>{ c.message }</p>
                </article>
              )
            default:
              return (
                <article>
                  <p>something went wrong &#58;&lt;</p>
                </article>
              )
          }
        })
      }
    </section>
  )
}))