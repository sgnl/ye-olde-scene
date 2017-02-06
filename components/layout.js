
import { Component } from 'react'
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

import { initStore } from '../store/cardStore'

export default class extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { lastUpdate: store.lastUpdate, isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render () {
    const { children } = this.props
    return (
      <div { ...frame }>
        <header { ...header }>
          <Link href='/'>
            <h1 { ...logo }>ye old scene</h1>
          </Link>
          {/*<nav { ...nav }>
                  <Link href='/new'><a>new</a></Link>
                </nav>*/}
          <Filter store={this.store} />
        </header>
        <div { ...mainSection}>
          { children }
        </div>
        <footer { ...footer }>
          <p>coded with aloha</p>
        </footer>
      </div>
    )
  }
}

