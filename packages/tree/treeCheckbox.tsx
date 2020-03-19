import * as React from 'react';
import Checkbox from '../checkbox/checkbox';

interface CheckboxProps {
  checkTreeProps: TreeProps
  item: SourceItem
}

const TreeCheckbox: React.FunctionComponent<CheckboxProps> = props => {
  const {item, checkTreeProps} = props;

  const onChange = (e: React.FormEvent) => {
    const checked = (e.target as HTMLInputElement).checked;
    checkTreeProps.multiple ? multipleSelected(checked) : singleSelected(checked);
  };
  const multipleSelected = (checked: boolean) => {
    if (checked) {
      checkTreeProps.onChange([...checkTreeProps.selected, item.key]);
    } else {
      checkTreeProps.onChange(checkTreeProps.selected.filter(value => value !== item.key));
    }
  };
  const singleSelected = (checked: boolean) => {
    if (checked) {
      checkTreeProps.onChange([item.key]);
    } else {
      checkTreeProps.onChange([]);
    }
  };

  return <Checkbox checked={checkTreeProps.selected.includes(item.key)}
              value={item.key} onChange={onChange}>{item.text}</Checkbox>;
};
export default TreeCheckbox;