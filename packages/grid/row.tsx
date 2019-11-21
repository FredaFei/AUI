import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Col, {IProps as IColProps} from './col'
import './style'

const componentName = 'Row'
const sc = createScopedClasses(componentName)

interface IProps extends StyledProps {
  gutter?: number
  align?: 'left' | 'right' | 'center' | 'spaceBetween' | 'spaceAround'
  verticalAlign?: 'top' | 'center' | 'bottom'
}

const Row: React.FunctionComponent<IProps> = props => {
  const {style, gutter, align, verticalAlign, className} = props
  const styles = Object.assign(
    {
      marginLeft: `${-gutter! / 2}px`,
      marginRight: `${-gutter! / 2}px`,
      ...style
    }
  )
  const rowWrapClass = classes(
    sc(
      '',
      align !== 'left' && `align-${align}`,
      verticalAlign !== 'top' && `verticalAlign-${verticalAlign}`
    ),
    className
  )
  const col = React.Children.map(props.children, child => {
    const element = child as React.ReactElement<IColProps | {}>
    return element.type === Col
      ? React.cloneElement(element, {
        gutter
      })
      : element
  }).filter(i => i)
  return (
    <div data-role={componentName} style={styles} className={rowWrapClass}>
      {col}
    </div>
  )
}

Row.displayName = componentName
Row.defaultProps = {
  gutter: 0,
  align: 'left',
  verticalAlign: 'top'
}

export default Row
