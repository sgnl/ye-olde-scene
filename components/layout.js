
import Link from 'next/link'
import Head from 'next/head'
import { navStyle, topHeaderStyle, footerStyle } from '../styles'

export default ({ children, title = 'Ye Olde Scene History' }) => (
  <div>
    <header>
      <nav { ...navStyle }>
        <Link href='/'><a>ye&nbsp;old&nbsp;scene</a></Link>&nbsp;.&nbsp;
        <Link href='/new'><a>new</a></Link>
      </nav>
    </header>

    { children }

    <footer { ...footerStyle }>
      <p>2017 coded with aloha</p>
    </footer>
  </div>
)
