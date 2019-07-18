import * as React from 'react'
import classes, { createScopedClasses } from '../utils/classnames'
import Button,{ IProps as IButtonProps} from './button'
import './style/index.scss'

interface IProps extends IStyledProps {
  children?: any
}
const componentName = 'ButtonGroup'
const sc = createScopedClasses(componentName)
const ButtonGroup: React.SFC<IProps> = (props: IProps) => {
  const children = React.Children.map(props.children, child => {
    const element = child as React.ReactElement<IButtonProps>
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
