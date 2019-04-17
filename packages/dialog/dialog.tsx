import * as React from 'react'
import { ReactElement, ReactFragment } from 'react'
import * as PropTypes from 'prop-types'
import classes, { createScopedClasses } from '../utils/classnames'
import Icon from '../icon/icon'
import './style'

const componentName = 'dialog'
const sc = createScopedClasses(componentName)
interface IProps extends IStyledProps {
  visible: boolean
  title?: string
  footer?: ReactFragment | ReactElement
  onClose?: React.MouseEventHandler
}

class Dialog extends React.Component<IProps> {
  static defaultProps = {
    visible: false
  }
  static propTypes = {
    onClose: PropTypes.func
  }
  constructor(props: IProps) {
    super(props)
  }
  render() {
    const { visible, title, style, footer, children } = this.props
    return (
      visible && (
        <React.Fragment>
          <div className={sc('wrapper')} style={style}>
            <div className={sc('mask')} />
            <div className={sc('')}>
              <div className={sc('close')}>
                <Icon name="close"  />
              </div>
              <div className={sc('header')}>{title}</div>
              <div className={sc('body')}>{children}</div>
              <div className={sc('footer')}>{footer}</div>
            </div>
          </div>
        </React.Fragment>
      )
    )
  }
}

export default Dialog
