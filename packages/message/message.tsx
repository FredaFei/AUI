import * as React from 'react'
import * as ReactDOM from 'react-dom'
import classes, {createScopedClasses} from '../utils/classnames'
import {Icon} from '../index'
import './style/index'
import {useEffect, useRef, useState} from "react";

const componentName = 'Message'
const sc = createScopedClasses(componentName)

interface Props extends StyledProps {
  content: React.ReactNode | string
  duration?: number
  mode?: string
  onClose?: () => any
}

const Message: React.FunctionComponent<Props> = props => {
  const [visible, setVisible] = useState(true)
  const {content, className, style, duration, onClose, mode} = props

  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const {duration} = props
    if (duration) {
      timerRef.current = window.setTimeout(() => {
        onCloseClick()
      }, duration * 1000)
    }
    return () => {
      timerRef.current && window.clearTimeout(timerRef.current)
    }
  }, [])

  const onCloseClick = () => {
    setVisible(false)
    onClose && onClose()
  }
  return (
    visible ?
      ReactDOM.createPortal(
        <div className={classes(sc('wrapper'), className)} style={style}>
          {mode && (
            <span className={sc('icon-type', `${mode}`)}>
              <Icon name={mode}/>
            </span>
          )}
          {content}
          {duration === 0 && (
            <span className={sc('close')} onClick={onCloseClick}>
              <Icon name="close"/>
            </span>
          )}
        </div>,
        document.body
      ) : null
  )
}
Message.defaultProps = {
  duration: 3
}
Message.displayName = componentName

const message = {
  open(params: Props) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const {onClose} = params
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
    return message.open({content, duration, mode, onClose, ...rest})
  }
})
export default message