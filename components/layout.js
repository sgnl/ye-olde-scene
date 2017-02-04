
import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Ye Olde Scene History' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>index</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      footer
    </footer>
  </div>
)
