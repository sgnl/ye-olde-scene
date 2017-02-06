
import { css, fontFace } from 'glamor'
import styled, { keyframes } from 'styled-components'

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


const container = css({
  maxWidth: '1200px',
  margin: '0 auto',
})

const spacing = css({
  margin: '1.5em 0.125em'
})

export const Frame = styled.div`
  padding: 0
`

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  background: pink;
`

export const Logo = styled.h1`
  width: 50%;
  margin: 0 auto;
  padding: 0.5em 0;
  textAlign: center;
  fontSize: 18px;
`

export let nav = css(container, {
  display: 'flex',
  padding: '2rem 0'
})

export let form = css({
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'now wrap',
  padding: '0.25em'
})

export const FilterSection = styled.div`
  background-color: salmon;
`

export let filterInput = css({
  width: '100%',
  background: '#fcaca3',
  padding: '0.5em 0.5em',
  border: '0',
  color: '#333',
  fontSize: '16px', // stay at >=16px because of safari's input zoom "feature"
  textAlign: 'center',
  borderRadius: '3px',
  boxShadow: '0 1px 3px -1px #5A5A5A',
  letterSpacing: '0.25em',
  '::placeholder': {
    color: '#777',
    fontSize: '12px'
  }
})

export let outputCount = css({
  padding: '0.5em 0',
  textAlign: 'center'
})

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
  padding-top: 25%;
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
  animation: ${bounce} 2s ease, ${shrinkTopPadding} 7s cubic-bezier(.95,-0.19,.39,1.13) forwards;
`

export const Card = styled.article`
  width: 100%;
  padding: 2.5em 0.5em;
  background-color: salmon;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
`

export const CardHeader = styled.h2`
  padding: 0 0 0.125em 0;
  font-weight: 700;
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
  color: #aaabbb;
  text-align: center;
`

export const CardBio = styled.p`
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 1em;
  border-left: 2px solid #5A5A5A;
  color: #222;
`

export const UrlList = styled.ul`
  display: flex;
  justify-content: space-around;
  color: #5A5A5A;
  font-size: 14px;
  font-weight: 700;
`

export const UrlItem = styled.li`
  border-bottom: 1px solid #5A5A5A;
`

export let urlIcon = css({
  minWidth: '2em',
  textAlign: 'center'
})

/* Animations */
let disappear = css.keyframes({
  from: {
    opacity: '1'
  },

  to: {
    opacity: '0',
    transform: 'translate3d(0, -100%, 0)'
  }
})

export const ImageBanner = styled.div`
  margin: 0 auto;
  width: 99%;
  height: 3em;
  background-image: url(https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/12445909_989917981084297_402039653_n.jpg?ig_cache_key=Mjk1MzIzNjMwNTI0NjgxMjk4.2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -100px;
  filter: grayScale(100%);
`

/* custom banner styles */
export let infoSlideUp = css(spacing, {
  width: '100%',
  animation: `${disappear} 7s cubic-bezier(.95,-0.19,.39,1.13) forwards`,
})

export let bannerPromotion = css(spacing, {
  textAlign: 'center'
})

export let newForm = css(container, {

})

export const Footer = styled.footer`
  display: flex;
  justifyContent: center;
  padding: 1em 0;
  maxWidth: 1200px;
  margin: 0 auto;
  textAlign: center;
  fontSize: 12px;
`

css.global('*',  {
  padding: '0',
  margin: '0',
  boxSizing: 'border-box'
})

css.global('html, body',  {
  backgroundColor: 'pink',
  fontFamily: 'Open Sans',
  fontSize: 'calc(1.75vw + 1.75vh)',
  color: '#3A3A3A'
})

css.global('h1, h2, h3, h4, h5, h6, a', {
  fontFamily: 'Lato',
  fontWeight: '300',
  fontSize: 'calc(2.3vw + 2.3vh)',
  color: '#000'
})

css.global('ul', {
  listStyleType: 'none'
})
