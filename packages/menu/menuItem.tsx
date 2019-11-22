import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'

import './style'

const componentName = 'MenuItem'
const sc = createScopedClasses(componentName)

export interface Props extends StyledProps {
  name: string
  selectedKey?: string
  layout?: 'horizontal' | 'inline' | 'vertical'
  disabled?: boolean
  visible?: boolean
  onSelect?: (value: string) => any
  onClose?: (value: boolean) => any
}

const MenuItem: React.FunctionComponent<Props> = props => {
  const {layout, onSelect, name, selectedKey, onClose, disabled} = props

  const onMenuItemClick = () => {
    console.log(`item click`)
    if(disabled){return}
    onClose && onClose(false)
    onSelect && onSelect(name)
  }
  console.log(`name ${name},selectedKey ${selectedKey}`)
  return (
    <div className={classes(sc(''), props.className,
      {active: selectedKey === name, vertical: layout === 'vertical', disabled})}
         style={props.style} onClick={onMenuItemClick}>
      {props.children}
    </div>
  )
}

MenuItem.displayName = componentName
MenuItem.defaultProps = {}
MenuItem.propTypes = {}

export default MenuItem
