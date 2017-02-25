
import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Headroom from 'react-headroom'
import { Filter } from '../components'
import {
  Frame,
  Header,
  Logo,
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
        <Headroom>
          <Header>
            <Link href='/'>
              <Logo>ye olde scene</Logo>
            </Link>
            <Filter store={this.store} />
          </Header>
        </Headroom>
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

