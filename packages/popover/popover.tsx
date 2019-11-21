import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import {
  Fragment,
  MouseEventHandler,
  ReactChild,
  ReactElement,
  RefObject,
  useEffect,
  useState
} from "react";
import * as ReactDOM from 'react-dom'
import ClickOutside from '../clickOutside/clickOutside'
import './style'
import {useRef} from "react";

const componentName = 'Popover'
const sc = createScopedClasses(componentName)

type position =
  'top'
  | 'right'
  | 'left'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'topRight'
  | 'topLeft'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'

interface Props extends IStyledProps {
  content: ReactChild
  children: ReactElement<any>
  position?: position
  trigger?: 'hover' | 'click' | 'manual'
  open?: boolean
  block?: boolean
  container?: RefObject<Element>
}

interface Triggers {
  onClick?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
  onClickOutside?: MouseEventHandler
}

const Popover: React.FunctionComponent<Props> = props => {
  const [visible, setVisible] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)
  const prevVisible = useRef<boolean>(false)
  const visiblable = useRef<boolean>(false)
  const {open, trigger, position, content, container, block} = props
  const closeDelay = 200


  const openPrevious = <T extends any>(value: T) => {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevOpen = openPrevious(open)

  useEffect(() => {
    const visible = trigger === 'manual' ? open : false
    setVisible(visible as boolean)
  }, [])
  useEffect(() => {
    if (trigger !== 'manual') {
      visiblable.current = visible ? true : false
      if (prevVisible.current === false && visible === true) {
        positionContent()
      }
    } else {
      if (prevOpen === false && open === true) {
        positionContent()
      }
    }
  }, [visible, open])
  const getContent = () => {
    const contentNode = <div ref={contentRef} className={sc('content', `content-${position}`)} {...contentHandlers}>
      {typeof content === 'string' ? <span className={sc('content-string')}>{content}</span> : content}
    </div>
    return (trigger === 'manual' ? open : visible) && contentNode
  }
  const getContainer = () => {
    return (container && container.current) || document.body
  }
  const contentHandlers: Partial<Triggers> | null = trigger === 'hover' ? {
    onMouseEnter: () => doOpen(),
    onMouseLeave: () => close(closeDelay)
  } : null;

  const positionContent = () => {
    const content = contentRef.current
    const trigger = triggerRef.current
    const {left, top, width, height} = trigger!.getBoundingClientRect()
    const {width: contentWidth, height: contentHeight} = content!.getBoundingClientRect()
    const {left: containerLeft, top: containerTop} = getContainer().getBoundingClientRect()
    switch (position) {
      case 'top':
        content!.style.top = top - containerTop - contentHeight - 8 + 'px'
        content!.style.left = left - containerLeft + (width / 2) - (contentWidth / 2) + 'px'
        break;
      case 'bottom':
        content!.style.top = top - containerTop + height + 8 + 'px';
        content!.style.left = left - containerLeft + (width / 2) - (contentWidth / 2) + 'px';
        break;
      case 'left':
        content!.style.top = top - containerTop + (height / 2) - (contentHeight / 2) + 'px';
        content!.style.left = left - containerLeft - contentWidth - 8 + 'px';
        break;
      case 'right':
        content!.style.top = top - containerTop + (height / 2) - (contentHeight / 2) + 'px';
        content!.style.left = left - containerLeft + width + 8 + 'px';
        break;
      case 'topLeft':
        content!.style.top = top - containerTop - contentHeight - 8 + 'px';
        content!.style.left = left - containerLeft + 'px';
        break;
      case 'topRight':
        content!.style.top = top - containerTop - contentHeight - 8 + 'px';
        content!.style.left = left - containerLeft + width - contentWidth + 'px';
        break;

      case 'leftTop':
        content!.style.top = top - containerTop + 'px';
        content!.style.left = left - containerLeft - contentWidth - 8 + 'px';
        break;
      case 'leftBottom':
        content!.style.top = top - containerTop + height - contentHeight + 'px';
        content!.style.left = left - containerLeft - contentWidth - 8 + 'px';
        break;

      case 'bottomLeft':
        content!.style.top = top - containerTop + height + 8 + 'px';
        content!.style.left = left - containerLeft + 'px';
        break;
      case 'bottomRight':
        content!.style.top = top - containerTop + height + 8 + 'px';
        content!.style.left = left - containerLeft + width - contentWidth + 'px';
        break;

      case 'rightTop':
        content!.style.top = top - containerTop + 'px';
        content!.style.left = left - containerLeft + width + 8 + 'px';
        break;
      case 'rightBottom':
        content!.style.top = top - containerTop + height - contentHeight + 'px';
        content!.style.left = left - containerLeft + width + 8 + 'px';
        break;
    }
  }
  const nowOrLater = (action: () => void, delay?: number) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
    }
    if (delay) {
      timerRef.current = window.setTimeout(action, delay)
    } else {
      action()
    }
  }

  const toggle = (delay?: number) => {
    nowOrLater(() => {
      visible ? close() : doOpen()
    }, delay)
  }
  const close = (delay?: number) => {
    nowOrLater(() => {
      if (visiblable.current) {
        prevVisible.current = true
        setVisible(false)
      }
    }, delay)
  }
  const doOpen = (delay?: number) => {
    nowOrLater(() => {
      if (!visiblable.current) {
        prevVisible.current = false
        setVisible(true)
      }
    }, delay)
  }

  const wrapInClickOutside = (inner: ReactChild, handlers: Partial<Triggers>) => {
    const {onClickOutside} = handlers
    return (
      <ClickOutside className={sc('', {block})} handler={onClickOutside} exclude={contentRef}>
        {inner}
      </ClickOutside>
    )
  }
  const wrapInDiv = (inner: ReactChild) => {
    return <div className={sc('', {block})}>{inner}</div>
  }
  const renderComponent = (open: boolean, handlers: Triggers) => {
    const {onClickOutside, ...restHandlers} = handlers
    const inner = (
      <Fragment>
        <div className={classes(sc('trigger'), props.className)} {...restHandlers} ref={triggerRef}>
          {props.children}
        </div>
        {ReactDOM.createPortal(getContent(), getContainer())}
      </Fragment>
    )
    return props.trigger === 'click' ? wrapInClickOutside(inner, handlers) : wrapInDiv(inner)
  }

  switch (props.trigger) {
    case 'manual':
      return renderComponent(!!open, {})
      break;
    case 'click':
      return renderComponent(!!visible, {
        onClick: () => toggle(),
        onClickOutside: () => close(),
      })
      break;
    case 'hover':
      return renderComponent(!!visible, {
        onMouseEnter: () => doOpen(),
        onMouseLeave: () => close(closeDelay),
      })
      break;
    default:
      console.error(new Error('invalid trigger'));
      return null
  }

}

Popover.displayName = componentName
Popover.defaultProps = {
  position: 'top',
  block: false,
  trigger: 'click'
}
export default Popover
