import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import './style.tsx'

const componentName = 'Button'
const sc = createScopedClasses(componentName)

export interface IProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ''> {
  icon?: string
  iconPosition?: 'left' | 'right'
  onClick?: React.MouseEventHandler
}

const Button: React.FunctionComponent<IProps> = props => {
  const handleClick = (e: React.MouseEvent): any => {
    const {onClick} = props
    onClick && (onClick as React.MouseEventHandler)(e)
  }
  const {icon, iconPosition, style, className, children, ...rest} = props
  let renderButtonBody = () => {
    return icon ? (
      <div className={classes(sc('body'), [
        icon && iconPosition && `icon-${iconPosition}`
      ])}>
        <Icon name={icon} className="icon-name"/>
        <span className={sc('content')}>{children}</span>
      </div>
    ) : <span className={sc('content')}>{children}</span>
  }
  return <button
    {...rest}
    data-role={componentName}
    style={style}
    className={classes(sc('wrapper'), className)}
    onClick={handleClick}
  >
    {renderButtonBody()}
  </button>
}
Button.displayName = componentName
Button.defaultProps = {
  iconPosition: 'left'
}
export default Button
