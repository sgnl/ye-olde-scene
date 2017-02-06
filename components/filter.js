
import { css } from 'glamor'
import { form, FilterSection, filterInput, outputCount } from '../styles'
import { inject, observer } from 'mobx-react'

export default inject('store')(observer(({ store }) => {
  let output = `👍🏽 `

  if (store.count === 0) output = '👎🏽 zero results'
  if (store.count === 1) output += ' 1 result'
  if (store.count > 1) output += `${store.count} results`

  return (
    <FilterSection>
      <form { ...form }>
        <input { ...filterInput } autoFocus value={ store.filterString.join('') } placeholder="[ search here ]" onChange={ (e) => store.updateFilterString(e.target.value) } />
      </form>
      <p { ...outputCount }>{ output }</p>
    </FilterSection>
  )
}))
