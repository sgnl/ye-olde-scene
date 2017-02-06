
import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Filter } from '../components'
import {
  Frame,
  Header,
  Logo,
  nav,
  topHeader,
  MainSection,
  Footer
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
      <Frame>
        <Header>
          <Link href='/'>
            <Logo>ye olde scene</Logo>
          </Link>
          {/*<nav { ...nav }>
                  <Link href='/new'><a>new</a></Link>
                </nav>*/}
          <Filter store={this.store} />
        </Header>
        <MainSection>
          { children }
        </MainSection>
        <Footer>
          <p>coded with aloha</p>
        </Footer>
      </Frame>
    )
  }
}

