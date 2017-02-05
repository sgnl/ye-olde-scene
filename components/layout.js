
import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Ye Olde Scene History' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Lato:300|Open+Sans" rel="stylesheet" />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>/</a></Link>&nbsp;|&nbsp;
        <Link href='/new'><a>new</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      footer
    </footer>
    <style jsx>{`
      header {
        display: flex;
        justify-content: center;
      }
    `}</style>
    <style global>{`
      body { font-family: 'Lato', sans-serif; }
      h1, h2, h3, h4, h5, h6 { font-family: 'Open Sans', sans-serif; }
    `}</style>
  </div>
)
