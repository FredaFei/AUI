import * as React from "react";
import classes, { createScopedClasses } from '../utils/classnames'
import './style'

const componentName = 'CarouselItem'
const sc = createScopedClasses(`${componentName.toLocaleLowerCase()}`)

export interface Props extends StyledProps {
  current?: boolean
  prev?: boolean
}

const carouselItem: React.FunctionComponent<Props> = props => {
  const { current, prev,className,...rest } = props
  return (
    <div className={classes(sc('',current && 'current', prev && 'prev'),className)} {...rest}>{props.children}</div>
  )
}
export default carouselItem