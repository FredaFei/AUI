import * as React from 'react';
import classes, { createScopedClasses } from '../utils/classnames';
import './style';
import { ChangeEventHandler } from 'react';

const componentName = 'Tree';
const sc = createScopedClasses(componentName);

export interface SourceItem {
  value: string
  text: string
  children?: SourceItem[]
}

type Props = {
  sourceData: SourceItem[]
  selected: string[]
  onChange: (values: string[]) => void
} & ({
  multiple: true,
} | {
  multiple: false,
})

const Tree: React.FunctionComponent<Props> = props => {
  const renderTreeItem = (item: SourceItem, leave = 1) => {
    const classes = {[`leave-${leave}`]: true, 'item': true};
    const onChange: ChangeEventHandler<HTMLInputElement> = e => {
      const checked = e.target.checked;
      props.multiple ? multipleSelected(checked) : singleSelected(checked);
    };
    const multipleSelected = (checked: boolean) => {
      if (checked) {
        props.onChange([...props.selected, item.value]);
      } else {
        props.onChange(props.selected.filter(value => value !== item.value));
      }
    };
    const singleSelected = (checked: boolean) => {
      if (checked) {
        props.onChange([item.value]);
      } else {
        props.onChange([]);
      }
    };
    return <div className={sc(classes)} key={item.value}>
      <input type="checkbox" checked={props.selected.includes(item.value)} onChange={onChange}/>
      <div className={sc('text')}>{item.text}</div>
      {item.children?.map(subItem => renderTreeItem(subItem, leave + 1))}
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
