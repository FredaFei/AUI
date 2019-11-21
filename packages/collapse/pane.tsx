import * as React from 'react'
import classes from '../utils/classnames'
import './style'

export interface Props extends StyledProps {
  header: React.ReactNode
  name: string
  active?: boolean
  visibleIcon?: boolean
  disabled?: boolean
}

const componentName = 'Pane'

const Pane: React.FunctionComponent<Props> = props => {
  return <div className={classes(['content-inner', props.className])} style={props.style} >{props.children}</div>
}
Pane.displayName = componentName
Pane.defaultProps = {
  visibleIcon: true,
  disabled: false,
  active: false
}
export default Pane
