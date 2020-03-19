import * as React from 'react';
import { useState } from 'react';
import Checkbox from '../checkbox/checkbox';
import { difference, unique } from '../utils/collection';

const initialState = {selected: [], checkAll: false, indeterminate: false};

interface CheckboxProps {
  checkTreeProps: TreeProps
  item: SourceItem
}

const TreeCheckbox: React.FunctionComponent<CheckboxProps> = props => {
  const [state] = useState(initialState);
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
  // const add = () => {
  //   const selected1 = [...state.selected];
  //   if (item.children) {
  //     return {
  //       selected: selected1,
  //       checkAll: selected1.length === item.children.length,
  //       indeterminate:
  //         selected1.length! < item.children.length
  //     };
  //   }
  //
  // };
  // const remove = () => {
  //   if (item.children) {
  //     const selected2 = state.selected.filter(i => i !== action.value);
  //     return {
  //       selected: selected2,
  //       checkAll: selected2.length === groups.length,
  //       indeterminate:
  //         selected2.length! < groups.length && selected2.length! !== 0
  //     };
  //   }
  // };
  const toggleAll = (checkedAll: boolean):any => {
    if (item.children) {
      const result = item.children.map(i => i.key);
      checkTreeProps.onChange(checkedAll ? unique([...checkTreeProps.selected, result]) : difference(checkTreeProps.selected, result));
      return {
        checkAll: checkedAll!,
        indeterminate: false
      };
    }
  };
  const onCheckAllChange = (e: React.FormEvent) => {
    const checked = (e.target as HTMLInputElement).checked;
    toggleAll(checked as boolean);
  };
  return item.children ? <Checkbox indeterminate={state.indeterminate}
                                   onChange={onCheckAllChange} checked={state.checkAll}>{item.text}</Checkbox> :
    <Checkbox checked={checkTreeProps.selected.includes(item.key)}
              value={item.key} onChange={onChange}>{item.text}</Checkbox>;
};
export default TreeCheckbox;