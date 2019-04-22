import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import { Icon } from '../index'
import './style/index'
const componentName = 'Message'
const sc = createScopedClasses(componentName)
interface IProp extends IStyledProps {
  content: React.ReactNode | string
  duration?: number | undefined
  mode?: string
  position?: string
  onClose?: () => any
}
interface IState {
  visible: boolean
}
class Message extends React.Component<IProp, IState> {
  public static defaultProps = {
    position: 'top',
    duration: 3
  }
  public static propTypes = {
    position: PropTypes.string,
    duration: PropTypes.number,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    mode: PropTypes.oneOf(['info', 'success', 'warning', 'error', 'loading']),
    onClose: PropTypes.func
  }
  constructor(props: IProp) {
    super(props)
    this.state = {
      visible: true
    }
  }
  private timer: any
  public componentDidMount() {
    const { duration } = this.props
    if (duration) {
      this.timer = setTimeout(() => {
        this.onCloseClick()
      }, duration * 1000)
    }
  }
  public componentWillUnmount() {
    const { timer } = this
    if (timer) {
      window.clearTimeout(timer)
    }
  }

  onCloseClick = () => {
    const { onClose } = this.props
    this.setState(state => ({ visible: false }))
    onClose && onClose()
  }
  render() {
    const { visible } = this.state
    const { content, position, className, style, duration, mode } = this.props
    return (
      visible &&
      ReactDOM.createPortal(
        <div className={sc([className, `position-${position}`])} style={style}>
          {mode && (
            <span className={classes('icon-type',`${mode}`)}>
              <Icon name={mode} />
            </span>
          )}
          {content}
          {duration === 0 && (
            <span className={classes('message-close')} onClick={this.onCloseClick}>
              <Icon name="close" />
            </span>
          )}
        </div>,
        document.body
      )
    )
  }
}
const message = {
  open(params: IProp) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const { onClose } = params
    const close = () => {
      onClose && onClose()
      ReactDOM.unmountComponentAtNode(div)
      div.remove()
      return true
    }
    const messageInstance = React.createElement(Message, {
      ...params,
      onClose: close
    })
    ReactDOM.render(messageInstance, div)
  }
}
const modeArr = ['info', 'success', 'warning', 'error', 'loading']
modeArr.forEach(mode => {
  message[mode] = (
    content: React.ReactNode | string,
    duration?: number | (() => any),
    onClose?: () => any,
    ...rest: any
  ) => {
    if (typeof duration === 'function') {
      onClose = duration
      duration = undefined
    }
    return message.open({ content, duration, mode, onClose, ...rest })
  }
})
export default message
