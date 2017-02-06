
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
  textAlign: 'center',
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

export let grid = css(container, {
  display: 'flex',
  flexFlow: 'row wrap',
  paddingTop: '40vh',
  paddingLeft: '10px',
  paddingRight: '10px',
  animation: `${bounce} 2s ease`
})

// for fancy bottom-up load in effect while searching
// paddingTop: '200%',

export let card = css({
  marginBottom: '5%',
  padding: '2em 0.5em',
  backgroundColor: 'salmon',
  borderTop: '3px solid #5A5A5A'
})

export let cardHeader = css({

})

export let genreList = css({
  margin: '0.75em 0',
  paddingTop: '0.5em',
  paddingBottom: '0.5em',
  paddingLeft: '1em',
  borderLeft: '2px solid #bbb',
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
  fontSize: 'calc(1.5vw + 1.5vh)',
  letterSpacing: '0.25em',
  color: '#3A3A3A'
})

css.global('h1, h2, h3, h4, h5, h6, a', {
  fontFamily: 'Lato',
  fontWeight: '300',
  fontSize: 'calc(2vw + 2vh)',
  color: '#000'
})

css.global('ul', {
  listStyleType: 'none'
})
