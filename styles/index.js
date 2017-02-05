
import { css, fontFace } from 'glamor'
import 'glamor/reset'

export let navStyle = css({
  display: 'flex',
  justifyContent: 'center'
})

css.global('html, body',  {
  fontFamily: 'Open Sans'
})

css.global('h1, h2, h3, h4, h5, h6',  {
  fontFamily: 'Lato',
  fontWeight: '300'
})
