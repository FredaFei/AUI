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
}

const Tree: React.FunctionComponent<Props> = props => {
  const renderTreeItem = (item: SourceItem) => {
    return <div className={sc('item')} key={item.value}>
      <div className={sc('text')}>{item.text}</div>
      {item.children?.map(subItem => renderTreeItem(subItem))}
    </div>;
  };

  return <div className={classes(sc('tree'))}>
    {
      props.sourceData.map(item =>renderTreeItem(item))
    }
  </div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {};
export default Tree;
