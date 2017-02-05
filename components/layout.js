
import Link from 'next/link'
import Head from 'next/head'

import { navStyle } from '../styles'

export default ({ children, title = 'Ye Olde Scene History' }) => (
  <div>
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
