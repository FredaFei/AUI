import * as React from 'react'
import classes, {createScopedClasses} from '../utils/classnames'
import Icon from '../icon/icon'

const componentName = 'DayPanel'
const sc = createScopedClasses(componentName)

interface IProps extends IStyledProps {
    value?: Date | string
    onChange?: (date: Date) => void
}

interface IState {
    value?: Date | string
    onChange?: (date: Date) => void
}

const weeksMap: string[] = ["日", "一", "二", "三", "四", "五", "六"]

class DayPanel extends React.PureComponent<IProps, IState> {
    static displayName = componentName
    static defaultProps = {}
    static propTypes = {}
    state: IState = {}

    renderNav() {
        return (
            <div className={sc('nav')}>
                <div className={sc('col')}>
                    <Icon name="left"/>
                    <Icon name="left"/>
                </div>
                <div className={sc('col')}>
                    <span className={sc('year')}>2019</span>
                    <span className={sc('month')}>08</span>
                </div>
                <div className={sc('col')}>
                    <Icon name="right"/>
                    <Icon name="right"/>
                </div>
            </div>
        )
    }

    renderBody() {
        return (
            <div className={sc('main')}>
                <table>
                    <thead>
                    <tr>
                        {weeksMap.map(i => <th>{i}</th>)}
                    </tr>
                    </thead>
                    {this.renderDays()}
                </table>
            </div>
        )
    }

    renderDays() {
        return (
            <tbody>
            <tr>
                <td>day</td>
            </tr>
            </tbody>
        )
    }

    renderActions() {
        return (<div className={sc('actions')}>今天</div>)
    }

    render() {
        const {props} = this
        return (
            <div className={classes(sc('body'), props.className)} style={props.style}>
                {this.renderNav()}
                {this.renderBody()}
                {this.renderActions()}
            </div>
        )
    }
}

export default DayPanel
