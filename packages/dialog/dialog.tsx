import * as React from 'react'
import * as PropTypes from 'prop-types'
import { classNames } from '../utils/'
import Icon from '../icon/icon'
import './style'

interface IProps extends IStyledProps {
  visible: boolean
  title: string
  footer: string | React.ReactNode
  onClose?: React.MouseEventHandler
}
const componentName = 'dialog'

const Dialog: AFC<IProps> = props => {
  const { visible, title,style } = props
  return visible ? (
    <div className={classNames(componentName)} style={style}>
      <div className="dialog-mask" />
      <div className="dialog-content">
        <div className="dialog-head">
          <div className="title">{title}</div>
          <Icon name="close" />
        </div>
        <div className="dialog-body">{props.children}</div>
        <div className="dialog-footer">{props.footer}</div>
      </div>
    </div>
  ) : null
}

Dialog.defaultProps = {
  visible: false
}
Dialog.propTypes = {
  onClose: PropTypes.func
}
export default Dialog
