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
  sourceData: SourceItem[],
  selected: string[],
  onChange: (item: SourceItem, checked: boolean) => void,
}

const Tree: React.FunctionComponent<Props> = props => {
  const renderTreeItem = (item: SourceItem,
                          selected: string[],
                          onChange: (item: SourceItem, checked: boolean) => void,
                          leave = 1) => {
    const classes = {
      [`leave-${leave}`]: true,
      'item': true,
    };
    return <div className={sc(classes)} key={item.value}>
      <input type="checkbox" checked={selected.includes(item.value)} onChange={e => onChange(item, e.target.checked)}/>
      <div className={sc('text')}>{item.text}</div>
      {item.children?.map(subItem => renderTreeItem(subItem, selected, onChange, leave + 1))}
    </div>;
  };

  return <div className={classes(sc(''))}>
    {
      props.sourceData.map(item => renderTreeItem(item, props.selected, props.onChange))
    }
  </div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {};
export default Tree;
