
import { css, fontFace } from 'glamor'

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

export let frame = css({
  padding: '0'
})

export let header = css({
  position: 'fixed',
  left: '0',
  right: '0',
  zIndex: '9999',
  background: 'pink'
})

export let logo = css({
  width: '50%',
  margin: '0 auto',
  padding: '0.5em 0',
  textAlign: 'center',
  fontSize: '18px'
})

export let nav = css(container, {
  display: 'flex',
  padding: '2rem 0'
})

export let filterSection = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '0.25em',
  backgroundColor: 'salmon'
})

export let filterInput = css({
  display: 'block',
  width: '70%',
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

export let mainSection = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'stretch',
  paddingTop: '25%',
  backgroundColor: 'salmon'
})

let bounce = css.keyframes({
  '0%': {
    transform: 'scaleY(0.1)'
  },
  '40%': {
    transform: 'scaleY(1.02)'
  },
  '60%': {
    transform: 'scaleY(0.98)'
  },
  '80%': {
    transform: 'scaleY(1.01)'
  },
  '100%': {
    transform: 'scaleY(0.98)'
  },
  '80%': {
    transform: 'scaleY(1.01)'
  },
  '100%': {
    transform: 'scaleY(1)'
  }
})

let shrinkTopPadding = css.keyframes({
  '0%': {
    paddingTop: '20vh',
  },
  '100%': {
    paddingTop: '0vh',
  }
})

export let grid = css(container, {
  display: 'flex',
  flexFlow: 'row wrap',
  animation: `${bounce} 2s ease, ${shrinkTopPadding} 7s cubic-bezier(.95,-0.19,.39,1.13) forwards`
})

export let card = css({
  width: '100%',
  padding: '2.5em 0.5em',
  backgroundColor: 'salmon',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  fontSize: '16px'
})

export let cardHeader = css({
  padding: '0 0 0.125em 0',
  fontWeight: '700'
})

export let genreList = css({
  display: 'flex',
  paddingTop: '0.5em',
  paddingBottom: '1em',
})

export let genreItem = css({
  width: '100%',
  padding: '7px',
  marginRight: '5px',
  backgroundColor: '#5A5A5A',
  lineHeight: '14px',
  color: '#aaabbb'
})

export let cardBio = css(spacing, {
  paddingTop: '1em',
  paddingBottom: '1em',
  paddingLeft: '1em',
  borderLeft: '2px solid #5A5A5A',
  color: '#222'
})

export let urlList = css(spacing, {
  display: 'flex',
  justifyContent: 'space-around',
  color: '#5A5A5A',
  fontSize: '14px',
  fontWeight: '700'
})

export let urlItem = css({
  borderBottom: '1px solid #5A5A5A'
})

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

export let cardBackgroundImage = css({
  margin: '0 auto',
  width: '99%',
  height: '3em',
  backgroundImage: 'url(https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e15/12445909_989917981084297_402039653_n.jpg?ig_cache_key=Mjk1MzIzNjMwNTI0NjgxMjk4.2)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '0 -100px',
  filter: 'grayScale(100%)'
})

/* custom banner styles */
export let info = css({
  animation: `${disappear} 7s cubic-bezier(.95,-0.19,.39,1.13) forwards`,
})

export let bannerPromotion = css(spacing, {
  textAlign: 'center'
})

export let newForm = css(container, {

})

export let footerStyle = css(container, {
  display: 'flex',
  justifyContent: 'center',
  padding: '1em 0',
  textAlign: 'center',
  fontSize: '12px'
})

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
