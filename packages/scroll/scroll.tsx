import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import './style'

const componentName = 'Scroll'
const sc = createScopedClasses(componentName)

export interface IProps {
}

const Scroll: React.FunctionComponent<IProps> = props => {
  return <div className={sc('',classes(''))}>scroll</div>
}
Scroll.displayName = componentName
Scroll.defaultProps = {}
export default Scroll
