
import Link from 'next/link'
import Head from 'next/head'
import {
  frameStyle,
  logoStyle,
  navStyle,
  topHeaderStyle,
  mainSection,
  footerStyle
} from '../styles'

export default ({ children, title = 'Ye Olde Scene History' }) => (
  <div { ...frameStyle }>
    <header>
      <Link href='/'>
        <h1 { ...logoStyle }>ye&nbsp;old&nbsp;scene</h1>
      </Link>
      {/*<nav { ...navStyle }>
              <Link href='/new'><a>new</a></Link>
            </nav>*/}
    </header>
    <div { ...mainSection}>
      { children }
    </div>
    <footer { ...footerStyle }>
      <p>coded with aloha</p>
    </footer>
  </div>
)
