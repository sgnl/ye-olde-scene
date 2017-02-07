
import { css, fontFace } from 'glamor'
import styled, { keyframes } from 'styled-components'
import { injectGlobal, container, spacing } from './utils.js'

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

/* misc global resets */

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100vh;
`

export const Header = styled.header`
  z-index: 9999;
  background: pink;
`

export const Logo = styled.h1`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  textAlign: center;
  text-transform: lowercase;
  fontSize: 18px;
`

export let Nav = styled.nav`
  ${ container }
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const FilterForm = styled.form`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 0.25em;
`

export const FilterSection = styled.div`
  background-color: salmon;
`

// font-size must stay at >=16px because of safari's input zoom "feature"
export const FilterInput = styled.input`
  width: 60%;
  background: #fcaca3;
  padding: 0.5em 0.5em;
  color: #333;
  font-size: 16px;
  text-align: center;
  border-radius: 3px;
  letterSpacing: 0.25em;
`

export const FilterCount = styled.p`
  padding: 0.5em 0;
  text-align: center;
  font-size: 12px;
  color: #FBA298;
`

export const MainSection = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: salmon;
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
  flex-flow: row wrap;
  animation: ${bounce} 2s ease, ${shrinkTopPadding} 4s cubic-bezier(.95,-0.19,.39,1.13) forwards;
`

export const Card = styled.article`
  width: 100%;
  padding: 2.5em 0.5em;
  background-color: salmon;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
`

export const CardHeader = styled.h2`
  padding-bottom: 0.125em;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
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
  background-color: #5A5A5A;
  lineHeight: 14px;
  color: #fcaca3;
  text-align: center;
`

export const CardBio = styled.p`
  display: none;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 1em;
  border-left: 2px solid #5A5A5A;
  color: #222;
`

export const UrlList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #A05249;
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

export const imageBannerConstructor = (url) => {
  return `
    margin: 0 auto;
    width: 99%;
    height: 3em;
    background-image: url(//${ url });
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 5px solid #ddd;
    border-bottom: 5px solid #ddd;
    filter: grayScale(100%);
  `
}

export const DefaultImageBanner = styled.div`
  margin: 0 auto;
  width: 99%;
  height: 3em;
  background-image: url(https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/12445909_989917981084297_402039653_n.jpg?ig_cache_key=Mjk1MzIzNjMwNTI0NjgxMjk4.2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -100px;
  border-top: 5px solid #ddd;
  border-bottom: 5px solid #ddd;
  filter: grayScale(100%);
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

export const Footer = styled.footer`
  display: flex;
  justifyContent: center;
  margin: 0 auto;
  padding: 1em 0;
  width: 100%;
  background: #bbb;
  textAlign: center;
  fontSize: 6px;
`
