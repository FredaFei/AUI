import * as React from 'react'
import ReactDOM from 'react-dom'
import { ReactNode, ReactElement, ReactFragment, Fragment } from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import { Icon, Button} from '../index'
import './style'

const componentName = 'dialog'
const sc = createScopedClasses(componentName)
interface IBaseProps extends IStyledProps {
  mask?: {
    visible?: boolean
    closable?: boolean
  }
  title?: ReactNode
  footer?: ReactFragment | ReactElement
  onClose?: React.MouseEventHandler
  onYes?: React.MouseEventHandler
  onNo?: React.MouseEventHandler
}
interface IProps extends IBaseProps{
  visible: boolean
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

interface IModalProps extends IBaseProps {
  content: ReactNode
}
const createModal = (params: IModalProps) => {
  const { content, ...rest } = params
  const render = (props: IProps, children: ReactNode) => {
    ReactDOM.render(React.createElement(Dialog, props, children), div)
  }
  const onClose = () => {
    render({ ...props, visible: false }, content)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    return true
  }
  const props = {
    visible: true,
    onClose,
    ...rest
  }
  const div = document.createElement('div')
  document.body.appendChild(div)
  render(props, content)
  return onClose
}

export const alert = ({ content, onYes, ...rest }: IModalProps) => {
  const onOk: React.MouseEventHandler = e => {
    closer()
    onYes && onYes(e)
  }
  const footer = (
    <Button onClick={onOk} className={sc('btn-confirm')}>
      确定
    </Button>
  )
  const closer = createModal({ content, footer, ...rest })
}
export const confirm = ({ content, onYes, onNo, ...rest }: IModalProps) => {
  const onCancel: React.MouseEventHandler = e => {
    closer()
    onNo && onNo(e)
  }
  const onConfirm: React.MouseEventHandler = e => {
    closer()
    onYes && onYes(e)
  }
  const footer = (
    <Fragment>
      <Button onClick={onCancel}>取消</Button>
      <Button onClick={onConfirm} className={sc('btn-confirm')}>
        确定
      </Button>
    </Fragment>
  )
  const closer = createModal({ content, footer, ...rest })
}
export const modal = ({ content, onYes, onNo, ...rest }: IModalProps) => {
  const onCancel: React.MouseEventHandler = e => {
    closer()
    onNo && onNo(e)
  }
  const onConfirm: React.MouseEventHandler = e => {
    closer()
    onYes && onYes(e)
  }
  const footer = (
    <React.Fragment>
      <Button onClick={onCancel}>取消</Button>
      <Button onClick={onConfirm} className={sc('btn-confirm')}>
        确定
      </Button>
    </React.Fragment>
  )
  const closer = createModal({ content, footer, onYes, onNo, ...rest })
  return closer
}

export default Dialog
