
import { filterStyle, filterInputStyle } from '../styles'

export default () => <form {...filterStyle}>
  <input {...filterInputStyle} placeholder="search for something..." />
</form>
