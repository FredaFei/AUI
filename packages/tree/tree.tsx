import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import './style';

const componentName = 'Tree';
const sc = createScopedClasses(componentName);

export interface SourceItem {
  value: string
  text: string
  children?: SourceItem[]
}

interface Props extends StyledProps {
  sourceData: SourceItem[]
  selected: string[]
  multiple?: boolean
  onChange: (item: SourceItem, checked: boolean) => void
}

const Tree: React.FunctionComponent<Props> = props => {
  const renderTreeItem = (item: SourceItem, leave = 1) => {
    const classes = {
      [`leave-${leave}`]: true,
      'item': true,
    };
    return <div className={sc(classes)} key={item.value}>
      <input type="checkbox" checked={props.selected.includes(item.value)} onChange={e => props.onChange(item, e.target.checked)}/>
      <div className={sc('text')}>{item.text}</div>
      {item.children?.map(subItem => renderTreeItem(subItem,leave + 1))}
    </div>;
  };

  return <div className={classes(sc(''))}>
    {
      props.sourceData.map(item => renderTreeItem(item))
    }
  </div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {
  multiple: true
};
export default Tree;
