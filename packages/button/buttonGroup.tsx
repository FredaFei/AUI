import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import Button,{ Props as ButtonProps} from './button'
import './style'

interface Props extends StyledProps {
  children?: any
}
const componentName = 'ButtonGroup'
const sc = createScopedClasses(componentName)
const ButtonGroup: React.FunctionComponent<Props> =props => {
  const children = React.Children.map(props.children, child => {
    const element = child as React.ReactElement<ButtonProps>
    return element.type === Button
      ? React.cloneElement(element)
      : null
  })
  return (
    <div data-role={componentName} style={props.style} className={classes(sc(), props.className)}>
      {children}
    </div>
  )
}
ButtonGroup.displayName = componentName
export default ButtonGroup
