import * as React from 'react'
import 'stylesheets/reset.scss'

declare global {
    interface AFunctionComponent<P = {}> extends React.FunctionComponent<P> {
    }

    interface StyledProps {
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

export {default as Button} from './button/button'
export {default as ButtonGroup} from './button/buttonGroup'
export {default as Icon} from './icon/icon'
export {default as ControllCount} from './controllCount/controllCount'
export {default as Skeleton, SkeletonProps} from './skeleton/Skeleton'
export {default as Row} from './grid/row'
export {default as Col} from './grid/col'
export {default as Dialog} from './dialog/dialog'
export {default as Message} from './message/message'
export {default as Switch} from './switch/switch'
export {default as Collapse} from './collapse/collapse'
export {default as Pane} from './collapse/pane'
export {Header, Aside, Main, Footer, Layout} from './layout/index'
export {default as Input} from './input/input'
export {default as Radio} from './radio/radio'
export {default as Checkbox} from './checkbox/checkbox'
export {default as Form} from './form/form'
export {default as Pager} from './pager/pager'
export {default as Tabs} from './tabs/tabs'
export {default as TabPane} from './tabs/tabPane'
export {default as Menu} from './menu/menu'
export {default as MenuItem} from './menu/menuItem'
export {default as SubMenu} from './menu/subMenu'
export {default as Scroll} from './scroll/scroll'
export {default as Carousel} from './carousel/index'
export {default as CarouselItem} from './carousel/carouselItem'
export {default as DatePicker} from './datePicker/datePicker'
export {default as Uploader} from './uploader/uploader'
export {default as Popover} from './popover/popover'
export {default as ClickOutside} from './clickOutside/clickOutside'
export {default as Tree} from './tree/tree'
