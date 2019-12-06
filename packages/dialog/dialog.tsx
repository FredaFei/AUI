import * as React from 'react'
import ReactDOM from 'react-dom'
import {ReactNode, ReactElement, ReactFragment, Fragment} from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import {Icon, Button} from '../index'
import './style'

const componentName = 'dialog'
const sc = createScopedClasses(componentName)

interface BaseProps extends StyledProps {
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

interface Props extends BaseProps {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = props => {
  const {visible, mask, title, style, className, footer, children} = props

  const onClose: React.MouseEventHandler = e => {
    const {onClose} = props
    onClose && onClose(e)
  }
  return visible ?
    ReactDOM.createPortal(
      <div className={classes(sc('wrapper'), className)} style={style}>
        {mask && mask.visible && (
          <div
            className={sc('mask')}
            onClick={mask.closable ? onClose : undefined}
          />
        )}
        <div className={sc('')}>
          <div className={sc('close')} onClick={onClose}>
            <Icon name="close"/>
          </div>
          {title && <div className={sc('header')}>{title}</div>}
          <div className={sc('body')}>{children}</div>
          {footer && <div className={sc('footer')}>{footer}</div>}
        </div>
      </div>,
      document.body
    ) : null
}

Dialog.displayName = componentName;
Dialog.defaultProps = {
  visible: false,
  mask: {
    visible: true,
    closable: true
  }
}

interface ModalProps extends BaseProps {
  content: ReactNode
}

const createModal = (params: ModalProps) => {
  const {content, ...rest} = params
  const render = (props: Props, children: ReactNode) => {
    ReactDOM.render(React.createElement(Dialog, props, children), div)
  }
  const onClose = () => {
    render({...props, visible: false}, content)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    return true
  }
  const props = {visible: true, onClose, ...rest}
  const div = document.createElement('div')
  document.body.appendChild(div)
  render(props, content)
  return onClose
}

export const alert = ({content, onYes, ...rest}: ModalProps) => {
  const onOk: React.MouseEventHandler = e => {
    closer()
    onYes && onYes(e)
  }
  const footer = (
    <Button onClick={onOk} className={sc('btn-confirm')}>
      确定
    </Button>
  )
  const closer = createModal({content, footer, ...rest})
}
export const confirm = ({content, onYes, onNo, ...rest}: ModalProps) => {
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
  const closer = createModal({content, footer, ...rest})
}
export const modal = ({content, onYes, onNo, ...rest}: ModalProps) => {
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
  const closer = createModal({content, footer, onYes, onNo, ...rest})
  return closer
}

export default Dialog
