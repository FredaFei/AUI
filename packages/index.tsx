import * as React from 'react'
import 'stylesheets/reset.scss'

declare global {
  interface AFunctionComponent<P = {}> extends React.FunctionComponent<P> {}
  interface IStyledProps {
    className?: string
    style?: React.CSSProperties
  }
  type AFC<P = {}> = AFunctionComponent<P>
  type ClassValue =
    | string
    | string[]
    | { [k: string]: any }
    | undefined
    | null
    | false
}

export { default as Button } from './button/button'
export { default as ButtonGroup } from './button/buttonGroup'
export { default as Icon } from './icon/icon'
export { default as Row } from './grid/row'
export { default as Col } from './grid/col'
export { default as Dialog } from './dialog/dialog'
export { default as Message } from './message/message'
export { default as Switch } from './switch/switch'
export { default as Collapse } from './collapse/collapse'
export { default as Pane } from './collapse/pane'
