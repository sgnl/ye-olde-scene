
export const container = `
  max-width: 1200px;
  margin: 0 auto;
`

export const spacing = `
  margin: 1.5em 0.125em;
`

export const headerTextStyle = () => `
  font-family: 'Lato';
  font-weight: 300;
  fontSize: calc(2.3vw + 2.3vh);
  color: #000;
`

export const reset = (element) => {
  let resetString = ''

  switch(element) {
    case 'p':
    case 'body':
    default:
      resetString = `
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      `
      break

  }

  return resetString
}

// TODO
// normal text and shit
// css.global('html, body',  {
//   backgroundColor: 'pink',
//   fontFamily: 'Open Sans',
//   fontSize: 'calc(1.75vw + 1.75vh)',
//   color: '#3A3A3A'
// })

// // headers and shit
// css.global('h1, h2, h3, h4, h5, h6, a', {
// })