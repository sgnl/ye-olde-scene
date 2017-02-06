
import { filterSection, filterInput } from '../styles'
import { inject, observer } from 'mobx-react'

export default inject('store')(({ store }) => {
  const { isSearching } = store;

  return (
    <form {...filterSection}>
      <input {...filterInput} placeholder="[ search here ]" onChange={(e) => store.updateFilterString(e.target.value)} />
    </form>
  )
})
