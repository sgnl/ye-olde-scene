
import { css } from 'glamor'
import { form, filterSection, filterInput } from '../styles'
import { inject, observer } from 'mobx-react'

export default inject('store')(observer(({ store }) => {
  let output = `👍🏽 `

  if (store.count === 0) output = '👎🏽 zero results'
  if (store.count === 1) output += ' 1 result'
  if (store.count > 1) output += `${store.count} results`

  console.log(output)

  return (
    <div { ...filterSection }>
      <form { ...form }>
        <input { ...filterInput } autoFocus value={ store.filterString.join('') } placeholder="[ search here ]" onChange={ (e) => store.updateFilterString(e.target.value) } />
      </form>
      <p { ...css({ textAlign: 'center' }) }>{ output }</p>
    </div>
  )
}))
