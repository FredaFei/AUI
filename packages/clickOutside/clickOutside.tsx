import * as React from 'react'
import * as PropTypes from 'prop-types'
import {createScopedClasses} from '../utils/classnames'
import './style'
import {HTMLAttributes, PureComponent, RefObject} from "react";

const componentName = 'ClickOutside'
const sc = createScopedClasses(componentName)

interface IProps extends HTMLAttributes<HTMLDivElement> {
  handler?: (e: any) => void
  exclude?: RefObject<Element>
}

class ClickOutside extends PureComponent<IProps> {
  static displayName = componentName
  static propTypes = {
    handler: PropTypes.func
  }
  private readonly myRef: RefObject<HTMLDivElement>

  constructor(props: IProps) {
    super(props)
    this.myRef = React.createRef()
  }

  handler = (e: MouseEvent | TouchEvent) => {
    if (this.myRef.current === null) {
      return
    }
    if (this.props.exclude && this.props.exclude.current && this.props.exclude.current.contains(e.target as Node)) {
      return
    }
    if (!document.contains(e.target as Node)) {
      return
    }
    if (!this.myRef.current.contains(e.target as Node)) {
      this.props.handler && this.props.handler.call(e.target, e)
    }

  };

  componentDidMount(): void {
    this.props.handler && document.addEventListener('click', this.handler);
  }

  componentWillUnmount(): void {
    this.props.handler && document.removeEventListener('click', this.handler)
  }

  render() {
    const {children, exclude, handler, ...restProps} = this.props
    return (
      <div data-role={componentName} className={sc('dd')} ref={this.myRef} {...restProps}>
        {children}
      </div>
    )
  }
}


export default ClickOutside
