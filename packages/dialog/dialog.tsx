import * as React from 'react'
import ReactDOM from 'react-dom'
import { ReactElement, ReactFragment } from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import Icon from '../icon/icon'
import Button from '../button/button'
import './style'

const componentName = 'dialog'
const sc = createScopedClasses(componentName)
interface IProps extends IStyledProps {
  visible: boolean
  mask?: {
    visible?: boolean
    closable?: boolean
  }
  title?: string
  footer?: ReactFragment | ReactElement
  onClose?: React.MouseEventHandler
  onConfirm?: React.MouseEventHandler
}

class Dialog extends React.Component<IProps> {
  static defaultProps = {
    visible: false,
    mask: {
      visible: true,
      closable: true
    }
  }
  static propTypes = {
    onClose: PropTypes.func
  }
  constructor(props: IProps) {
    super(props)
  }
  onClose: React.MouseEventHandler = e => {
    const { onClose } = this.props
    onClose && onClose(e)
  }
  onOk: React.MouseEventHandler = e => {
    const { onClose, onConfirm } = this.props
    onClose && onClose(e)
    onConfirm && onConfirm(e)
  }
  render() {
    const {
      visible,
      mask,
      title,
      style,
      className,
      footer,
      children
    } = this.props
    return (
      visible &&
      ReactDOM.createPortal(
        <div className={classes(sc('wrapper'), className)} style={style}>
          {mask && mask.visible && (
            <div
              className={sc('mask')}
              onClick={mask.closable ? this.onClose : undefined}
            />
          )}
          <div className={sc('')}>
            <div className={sc('close')} onClick={this.onClose}>
              <Icon name="close" />
            </div>
            {title && <div className={sc('header')}>{title}</div>}
            <div className={sc('body')}>{children}</div>
            {footer && <div className={sc('footer')}>{footer}</div>}
          </div>
        </div>,
        document.body
      )
    )
  }
}

const createModal = (content, buttons, ...rest) => {
  const onClose = () => {
    React.cloneElement(component, { visible: false })
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog visible={true} onClose={onClose} footer={buttons} {...rest}>
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  return onClose
}
export const alert = (content: string, buttons, onNo) => {
  const onOk = () => {
    close()
    onNo && onNo()
  }
  const buttons = (
    <Button onClick={onOk} className={sc('btn-confirm')}>
      确定
    </Button>
  )
  const close = createModal(content, buttons)
}
export const confirm = (content, onYes, onNo) => {
  const onCancel = () => {
    closer()
    onNo()
  }
  const onConfirm = () => {
    closer()
    onYes()
  }
  const buttons = (
    <React.Fragment>
      <Button onClick={onCancel}>取消</Button>
      <Button onClick={onConfirm} className={sc('btn-confirm')}>
        确定
      </Button>
    </React.Fragment>
  )
  const closer = createModal(content, buttons)
}
export const modal = (content, onYes, onNo) => {
  const onCancel = () => {
    closer()
    onNo && onNo()
  }
  const onConfirm = () => {
    closer()
    onYes && onYes()
  }
  const buttons = (
    <React.Fragment>
      <Button onClick={onCancel}>取消</Button>
      <Button onClick={onConfirm} className={sc('btn-confirm')}>
        确定
      </Button>
    </React.Fragment>
  )
  const closer = createModal(content, buttons, onYes, onNo)
}

export default Dialog
