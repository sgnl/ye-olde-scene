
import { css, fontFace } from 'glamor'
import 'glamor/reset'

const container = css({
  maxWidth: '1200px',
  margin: '0 auto',
})

export let navStyle = css(container, {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem 0'
})

export let gridStyle = css(container, {
  backgroundColor: 'salmon',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  padding: '2.5em'
})

export let cardStyle = css({
  flex: '0 1 25%',
  // backgroundColor: '#555',
  padding: '1em',
  minHeight: '220px',
  margin: '0 0 1em 0',
  border: '1px solid #333',
  borderRadius: '4px'
})

css.global('html, body',  {
  backgroundColor: 'pink',
  fontFamily: 'Open Sans',
  fontSize: '16px',
  letterSpacing: '0.5em'
})

css.global('h1, h2, h3, h4, h5, h6, a', {
  fontFamily: 'Lato',
  fontWeight: '300',
  fontSize: '1.2em'
})
