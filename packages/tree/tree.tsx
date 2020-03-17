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
  return <div className={classes(sc('tree'))}>
    {
      props.sourceData.map(item => {
        return <div className={sc('item')} key={item.value}>
          <div className={sc('text')}>{item.text}</div>
          {item.children && item.children.map(item2 => <div className={sc('text')} key={item2.value}>{item2.text}</div>)}
        </div>;
      })
    }
  </div>;
};
Tree.displayName = componentName;
Tree.defaultProps = {};
export default Tree;
