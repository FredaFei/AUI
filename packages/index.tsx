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
export { default as Dialog } from './dialog/dialog'
