import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PropTypes from 'prop-types'
import { classNames, uniqueId } from '../utils'
import Icon from '../icon/icon'
import './style/index'

interface IProp {
  style?: React.CSSProperties
  className?: string
  messageId?: string
  content?: React.ReactNode | string
  mode: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  position?: string
  onClose?: () => any
}
interface IState {
  visible: boolean
}
const componentName = 'Message'
class Message extends React.Component<IProp, IState> {
  public static defaultProps = {
    position: 'top',
    duration: 3
  }
  public static propTypes = {
    position: PropTypes.string,
    duration: PropTypes.number,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    mode: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
    onClose: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
  }
  constructor(props: IProp) {
    super(props)
    this.state = {
      visible: true
    }
  }
  public static removeMessage: (id: string) => any = removeMessage
  public static info: (options: IProp) => any = info
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
    const { messageId } = this.props
    if (timer) {
      window.clearTimeout(timer)
    }
    console.log(4)
    console.log(messageId)
    messageId && Message.removeMessage(messageId)
  }

  onCloseClick = () => {
    const { onClose } = this.props
    this.setState(
      state => ({
        visible: false
      }),
      onClose && onClose()
    )
  }
  render() {
    const { visible } = this.state
    const { content, position, className, style, duration } = this.props
    return (
      visible && (
        <div
          className={classNames(componentName, [
            className,
            `position-${position}`
          ])}
          style={style}
        >
          {content}
          {duration === 0 && (
            <Icon
              name="close"
              className="message-close"
              onClick={this.onCloseClick}
            />
          )}
        </div>
      )
    )
  }
}

const messageContainerMap = {}

function addMessageContainer(id: string, container: HTMLDivElement) {
  messageContainerMap[id] = container
}
function uniqueMessage(id: string) {
  if (messageContainerMap[id]) {
    throw new Error('message id 重复了')
    return false
  }
}
function openMessage(
  options: IProp,
  mode: 'info' | 'success' | 'warning' | 'error'
) {
  const id = uniqueId('$am-message')
  uniqueMessage(id)
  const {
    position,
    duration = 3,
    content,
    // mode,
    onClose,
    className,
    style
  } = options
  const container = document.createElement('div')
  document.body.append(container)
  const instance = React.createElement(
    Message as React.ComponentClass,
    {
      position,
      duration,
      content,
      // mode,
      messageId: id,
      onClose,
      className,
      style
    } as React.ClassAttributes<any>
  )
  ReactDOM.render(instance, container)
  addMessageContainer(id, container)
}
function removeMessage(id: string): any {
  const container = messageContainerMap[id]
  if (!container) {
    return false
  }
  ReactDOM.unmountComponentAtNode(container)
  console.log(container)
  container.remove()
  delete messageContainerMap[id]
}
function info(options: IProp) {
  openMessage(options, 'info')
}
export default Message
