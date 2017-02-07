import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    let styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
    return { ...page, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <title>ye olde scene - curating local music history</title>
          {/* GLOBAL STYLES */}
          <link href="/static/reset.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300|Open+Sans:300,700" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: this.props.styles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
