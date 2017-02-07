
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import {
  Grid,
  Card,
  CardHeader,
  GenreList,
  GenreItem,
  CardBio,
  imageBannerConstructor,
  DefaultImageBanner,
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
            let ImageBanner;

            if (c.hasOwnProperty('images')) {
              ImageBanner = styled.div`
                ${imageBannerConstructor(c.images[0])}
                background-position: ${c.css.imgBackgroundPosition[0]} ${c.css.imgBackgroundPosition[1]}
              `
            } else {
              ImageBanner = DefaultImageBanner
            }

            return (
              <Card key={ i }>
                <header>
                  <CardHeader>{ c.artist_name }</CardHeader>
                  <ImageBanner />
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
                        <FontAwesome
                          name={ g[0] }
                          ariaLabel={ g[0]}
                          fixedWidth
                        />
                        <span >&nbsp;{ g[0] }</span>
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
                  <BannerComponent key={ i }>{ c.message }</BannerComponent>
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