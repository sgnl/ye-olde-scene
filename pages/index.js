
import { Component } from 'react'
import { Layout, Grid, Filter } from '../components'
import { mainFlex } from '../styles'

import { Provider } from 'mobx-react'
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
    return (
      <Layout>
        <Provider>
          <Grid store={this.store} />
        </Provider>
      </Layout>
    )
  }
}
