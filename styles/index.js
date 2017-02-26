
import { css, fontFace } from 'glamor'
import styled, { keyframes } from 'styled-components'
import { media } from './media-queries'
import {
  injectGlobal,
  container,
  spacing
} from './utils.js'

/**
 * Style Guide
 *
 * mobile, first! -> tablet -> desktop
 *
 * Declaration order: http://codeguide.co/
 * 1. Positioning
 * 1. Box model
 * 1. Typographic
 * 1. Visual
 */

const lightGrey = '#5A5A5A';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 9999;
  background-color: #eee;
  ${media.tablet`
    flex-flow: row nowrap;
    justify-content: space-between;
  `}
`

export const Logo = styled.h1`
  width: 50%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  textAlign: center;
  text-transform: lowercase;
  fontSize: 18px;
  ${media.tablet`
    fontSize: 1.5em;
  `}
`

export const FilterSection = styled.div`
  ${media.tablet`
    width: 50%;
    padding-top: 0.5em;
  `}
`

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 0.25em;
`

// font-size must stay at >=16px because of safari's input zoom "feature"
export const FilterInput = styled.input`
  padding: 0.5em 0.5em;
  color: #333;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.25em;
  border-radius: 3px;
  border: 1px solid #333;
`

export const FilterCount = styled.p`
  padding: 0.5em 0;
  text-align: center;
  color: #FBA298;
  ${media.tablet`
    padding-top: 0;
  `}
`

export const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
`

const bounce = keyframes`
  0% {
    transform: scaleY(0.1);
  }
  40% {
    transform: scaleY(1.02);
  }
  60% {
    transform: scaleY(0.98);
  }
  80% {
    transform: scaleY(1.01);
  }
  100% {
    transform: scaleY(0.98);
  }
  80% {
    transform: scaleY(1.01);
  }
  100% {
    transform: scaleY(1);
  }
`

const shrinkTopPadding = keyframes`
  0% {
    padding-top: 20vh;
  }
  100% {
    padding-top: 0vh;
  }
`

export const Grid = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  animation: ${bounce} 2s ease, ${shrinkTopPadding} 4s cubic-bezier(.95,-0.19,.39,1.13) forwards;
`

export const Card = styled.article`
  width: 98%;
  padding: 2.5em 0.5em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const CardHeader = styled.h2`
  padding-bottom: 0.125em;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`

export const imageBannerConstructor = (url) => {
  return `
    height: 3em;
    background-image: url(//${ url });
    background-repeat: no-repeat;
    background-size: cover;
    ${media.tablet`height: 6em;`}
  `
}

export const DefaultImageBanner = styled.div`
  height: 3em;
  background-image: url(https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/12445909_989917981084297_402039653_n.jpg?ig_cache_key=Mjk1MzIzNjMwNTI0NjgxMjk4.2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -100px;
  border-top: 5px solid #ddd;
  border-bottom: 5px solid #ddd;
  filter: grayScale(100%);
`

export const GenreList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: 0.5em;
  padding-bottom: 1em;
`

export const GenreItem = styled.li`
  width: 49%;
  margin-bottom: 0.25em;
  padding: 7px;
  background-color: ${lightGrey};
  line-height: 14px;
  color: #fff;
  text-align: center;
`

export const CardBio = styled.p`
  padding: 1em;
  border-left: 3px solid ${lightGrey};
`

export const UrlList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 14px;
`

export const UrlItem = styled.li`
  font-weight: 700;
  line-height: 24px;
`

/* Animations */
let disappear = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    display: none;
  }
`

/* custom banner styles */
export const InfoSlideUp = styled.p`
  ${ spacing }
  margin: 2em 0.125em;
  width: 100%;
  padding: 0 1em;
  textAlign: center;
  animation: ${disappear} 4s cubic-bezier(.95,-0.19,.39,1.13) forwards;
`

export const StillBanner = styled.p`
  text-align: center;
`

/****/

export const Footer = styled.footer`
  display: flex;
  justifyContent: center;
  margin: 0 auto;
  padding: 1em 0;
  width: 100%;
  background: ${lightGrey};
  textAlign: center;
  fontSize: 6px;
`
