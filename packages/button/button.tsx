import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'
import './style'

const componentName = 'Button'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps {
  icon?: string
  iconPosition?: string
  disabled?: boolean
  type?: 'submit' | 'reset' | 'button'
  onClick?: React.MouseEventHandler
}

const Button: React.FunctionComponent<IProps> = props => {
  const handleClick = (e: React.MouseEvent): any => {
    const {disabled, onClick} = props
    if (disabled) {
      return false
    }
    onClick && (onClick as React.MouseEventHandler)(e)
  }
  const {
    icon,
    iconPosition,
    disabled,
    style,
    className,
    children,
    ...rest
  } = props
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
    style={Object.assign({}, {...style})}
    className={classes(sc('wrapper'), className, {
      'icon-disabled': disabled
    })}
    onClick={handleClick}
  >
    {renderButtonBody()}
  </button>
}
Button.displayName = componentName
Button.defaultProps = {
  icon: '',
  iconPosition: 'left',
  disabled: false
}
export default Button
