
import Link from 'next/link'
import Head from 'next/head'

import { navStyle } from '../styles'

export default ({ children, title = 'Ye Olde Scene History' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Lato:300|Open+Sans" rel="stylesheet" />
    </Head>
    <header>
      <nav { ...navStyle }>
        <Link href='/'><a>/</a></Link>&nbsp;|&nbsp;
        <Link href='/new'><a>new</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      footer
    </footer>
  </div>
)
