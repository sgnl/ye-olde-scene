
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { css } from 'glamor'
import {
  Grid,
  Card,
  CardHeader,
  GenreList,
  GenreItem,
  CardBio,
  ImageBanner,
  UrlList,
  UrlItem,
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
    <Grid>
      {
        cards.map((c,i) => {
          if (!c.hasOwnProperty('isBanner')) {
            return (
              <Card key={ i }>
                <header>
                  <CardHeader>{ c.artist_name }</CardHeader>
                  <ImageBanner></ImageBanner>
                </header>
                <GenreList>
                  { c.genres.map((g, i) => <GenreItem key={ i } onClick={(e) => store.updateFilterString(e.target.innerHTML)}>{ g }</GenreItem>)}
                </GenreList>
                {
                  !c.biography ? '' : <CardBio>{ c.biography }</CardBio>
                }
                <UrlList>
                  { c.websites.map((g, i) => {
                    return (
                      <UrlItem key={ i }>
                        <FontAwesome { ...urlIcon } name={ g[0] } />
                        { g[0] }
                      </UrlItem>
                    )
                  })}
                </UrlList>
              </Card>
            )
          }

          let BannerComponent = c.component;

        switch (c.isBanner) {
            case 'INFO':
              return (
                  <BannerComponent>{ c.message }</BannerComponent>
              )
            case 'PROMOTION':
              return (
                <Card key={i}>
                  <BannerComponent>{ c.message }</BannerComponent>
                </Card>
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
    </Grid>
  )
}))