
import Link from 'next/link'
import Head from 'next/head'
import { Filter } from '../components'
import {
  frame,
  header,
  logo,
  nav,
  topHeader,
  mainSection,
  footer
} from '../styles'

export default ({ children }) => (
  <div { ...frame }>
    <header { ...header }>
      <Link href='/'>
        <h1 { ...logo }>ye old scene</h1>
      </Link>
      {/*<nav { ...nav }>
              <Link href='/new'><a>new</a></Link>
            </nav>*/}
      <Filter  />
    </header>
    <div { ...mainSection}>
      { children }
    </div>
    <footer { ...footer }>
      <p>coded with aloha</p>
    </footer>
  </div>
)
