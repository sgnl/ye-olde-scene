
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { css } from 'glamor'
import {
  grid,
  card,
  cardHeader,
  genreList,
  genreItem,
  cardBio,
  cardBackgroundImage,
  urlList,
  urlItem,
  urlIcon
} from '../styles'
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
              <article { ...card } key={ i }>
                <header>
                  <h2 { ...cardHeader }>{ c.artist_name }</h2>
                  <ul { ...css({ display: 'inline' }) }>
                    <li {  ...cardBackgroundImage }></li>
                  </ul>
                </header>
                <ul { ...genreList}>
                  { c.genres.map((g, i) => <li { ...genreItem } key={ i } onClick={(e) => store.updateFilterString(e.target.innerHTML)}>{ g }</li>)}
                </ul>
                {
                  !c.biography ? '' : <p { ...cardBio }>{ c.biography }</p>
                }
                <ul { ...urlList} >
                  { c.websites.map((g, i) => <li { ...urlItem } key={ i }><FontAwesome { ...urlIcon } name={ g[0] } />{ g[0] }</li>) }
                </ul>
              </article>
            )
          }

          switch (c.isBanner) {
            case 'INFO':
              return (
                <article { ...c.styles } key={ i }>
                  <p>{ c.message }</p>
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