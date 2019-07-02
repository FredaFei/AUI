import * as React from 'react'
import * as PropTypes from 'prop-types'
import classes, {createScopedClasses} from '../utils/classnames'
import {Fragment, MouseEventHandler, PureComponent, ReactChild, ReactElement, RefObject} from "react";
import * as ReactDOM from 'react-dom'
import ClickOutside from '../clickOutside/clickOutside'
import './style'

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

interface IProps extends IStyledProps {
    content: ReactChild
    children: ReactElement<any>
    position?: position
    trigger?: 'hover' | 'click' | 'manual'
    open?: boolean
    block?: boolean
    container?: RefObject<Element>
}

interface ITriggers {
    onClick?: MouseEventHandler
    onMouseEnter?: MouseEventHandler
    onMouseLeave?: MouseEventHandler
    onClickOutside?: MouseEventHandler
}

interface IState {
    open?: boolean
}

class Popover extends PureComponent<IProps, IState> {
    static displayName = componentName
    static defaultProps = {
        position: 'top',
        block: false,
        trigger: 'click'
    }
    static propTypes = {
        content: PropTypes.node.isRequired,
        position: PropTypes.oneOf(['top', 'right', 'left', 'bottom', 'bottomLeft', 'bottomRight', 'topRight', 'topLeft', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'])
    }
    private readonly refContent: RefObject<HTMLDivElement>
    private readonly refTrigger: RefObject<HTMLDivElement>
    private closeDelay = 200
    private timer?: number

    constructor(props: IProps) {
        super(props)
        this.state = {open: false}
        this.refContent = React.createRef()
        this.refTrigger = React.createRef()
    }

    get open() {
        const {state, props} = this
        return props.trigger === 'manual' ? props.open : state.open
    }

    get content() {
        const content = (
            <div ref={this.refContent}
                 className={sc('content', `content-${this.props.position}`)} {...this.contentHandlers}>
                {typeof this.props.content === 'string' ?
                    <span className={sc('content-string')}>{this.props.content}</span> : this.props.content}
            </div>
        )
        return this.open && content
    }

    get container() {
        return (this.props.container && this.props.container.current) || document.body
    }

    contentHandlers: Partial<ITriggers> | null = this.props.trigger === 'hover' ? {
        onMouseEnter: () => this.doOpen(),
        onMouseLeave: () => this.close(this.closeDelay)
    } : null;

    positionContent = () => {
        const content = this.refContent.current
        const trigger = this.refTrigger.current
        const {left, top, width, height} = trigger!.getBoundingClientRect()
        const {width: contentWidth, height: contentHeight} = content!.getBoundingClientRect()
        const {left: containerLeft, top: containerTop} = this.container.getBoundingClientRect()
        console.log(contentHeight)
        switch (this.props.position) {
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
                content!.style.top = top - containerTop - contentHeight + 'px';
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
    nowOrLater = (action: () => void, delay?: number) => {
        if (this.timer) {
            window.clearTimeout(this.timer)
        }
        if (delay) {
            this.timer = window.setTimeout(action, delay)
        } else {
            action()
        }
    }

    toggle = (delay?: number) => {
        this.nowOrLater(() => {
            if (this.state.open) {
                this.close()
            } else {
                this.doOpen()
            }
        }, delay)
    }
    close = (delay?: number) => {
        this.nowOrLater(() => {
            if (this.state.open) {
                this.setState(() => ({
                    open: false
                }))
            }
        }, delay)
    }
    doOpen = (delay?: number) => {
        this.nowOrLater(() => {
            if (!this.state.open) {
                this.setState(() => ({
                    open: true
                }))
            }
        }, delay)
    }

    wrapInClickOutside = (inner: ReactChild, handlers: Partial<ITriggers>) => {
        const {props, refContent} = this
        const {onClickOutside} = handlers
        return (
            <ClickOutside className={sc('', {block: props.block})} handler={onClickOutside} exclude={refContent}>
                {inner}
            </ClickOutside>
        )
    }
    wrapInDiv = (inner: ReactChild) => {
        const {block} = this.props
        return (
            <div className={sc('', {block})}>{inner}</div>
        )
    }
    renderComponent = (open: boolean, handlers: ITriggers) => {
        const {props, refTrigger} = this
        const {onClickOutside, ...restHandlers} = handlers
        const inner = (
            <Fragment>
                <div className={classes(sc('trigger'), props.className)} {...restHandlers} ref={refTrigger}>
                    {props.children}
                </div>
                {ReactDOM.createPortal(this.content, this.container)}
            </Fragment>
        )
        return props.trigger === 'click' ? this.wrapInClickOutside(inner, handlers) : this.wrapInDiv(inner)
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        if (this.props.trigger !== 'manual') {
            if (prevState.open === false && this.state.open === true) {
                this.positionContent()
            }
        } else {
            if (prevProps.open === false && this.props.open === true) {
                this.positionContent()
            }
        }
    }

    render() {
        const {props, state} = this
        switch (props.trigger) {
            case 'manual':
                return this.renderComponent(!!props.open, {})
                break;
            case 'click':
                return this.renderComponent(!!state.open, {
                    onClick: () => this.toggle(),
                    onClickOutside: () => this.close(),
                })
                break;
            case 'hover':
                return this.renderComponent(!!state.open, {
                    onMouseEnter: () => this.doOpen(),
                    onMouseLeave: () => this.close(this.closeDelay),
                })
                break;
            default:
                return new Error('invalid trigger')
        }
    }
}


export default Popover
