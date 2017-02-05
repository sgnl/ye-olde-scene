
import { filterStyle, filterInputStyle } from '../styles'

export default () => <form {...filterStyle}>
  <input {...filterInputStyle} focus={true} placeholder="search for something..." />
</form>
