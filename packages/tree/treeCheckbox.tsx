import * as React from 'react';
import { useRef, useState } from 'react';
import Checkbox from '../checkbox/checkbox';
import { difference, intersection, unique } from '../utils/collection';

const initialState = {checkedAll: false, indeterminate: false};

interface CheckboxProps {
  checkTreeProps: TreeProps
  item: SourceItem
  selectedMap: SelectedMap
}

const TreeCheckbox: React.FunctionComponent<CheckboxProps> = props => {
  const {item, checkTreeProps, selectedMap} = props;
  const [state, setState] = useState(initialState);
  const selectedRef = useRef<string[]>(checkTreeProps.selected);

  const onChange = (e: React.FormEvent) => {
    const checked = (e.target as HTMLInputElement).checked;
    checkTreeProps.multiple ? multipleSelected(checked) : singleSelected(checked);
  };
  const multipleSelected = (checked: boolean) => {
    if (checked) {
      const result = [...selectedRef.current, item.key];
      selectedRef.current = result;
      checkTreeProps.onChange(result);
    } else {
      selectedRef.current = selectedRef.current.filter(value => value !== item.key);
      checkTreeProps.onChange(checkTreeProps.selected.filter(value => value !== item.key));
    }
    updateChecked();
    console.log('selectedRef.current');
    console.log(selectedRef.current);
  };
  const singleSelected = (checked: boolean) => {
    if (checked) {
      selectedRef.current = [item.key];
      checkTreeProps.onChange([item.key]);
    } else {
      selectedRef.current = [];
      checkTreeProps.onChange([]);
    }
  };
  const updateChecked = () => {
    const x = selectedMap[item.key];
    if (!x) {return;}
    const y = intersection(x, selectedRef.current);
    setState({
      checkedAll: x.length > 0 && x.length === y.length,
      indeterminate: y.length > 0 && y.length < x.length
    });
  };
  const toggleAll = (checkedAll: boolean): any => {
    if (item.children) {
      const children = item.children.map(i => i.key);
      console.log('checkTreeProps.selected');
      console.log(checkTreeProps.selected);
      console.log('children');
      console.log(children);
      console.log('All');
      console.log(unique(checkTreeProps.selected.concat(children)));
      console.log('not All');
      console.log(difference(checkTreeProps.selected, children));
      const result = checkedAll ? unique(checkTreeProps.selected.concat(children)) : difference(checkTreeProps.selected, children);
      selectedRef.current = result;
      console.log('selectedRef.current');
      console.log(selectedRef.current);
      checkTreeProps.onChange(result);
      setState({
        checkedAll,
        indeterminate: false
      });
    }
  };
  const onCheckAllChange = (e: React.FormEvent) => {
    const checked = (e.target as HTMLInputElement).checked;
    toggleAll(checked as boolean);
  };
  return item.children ? <Checkbox indeterminate={state.indeterminate}
                                   onChange={onCheckAllChange} checked={state.checkedAll}>{item.text}</Checkbox> :
    <Checkbox checked={checkTreeProps.selected.includes(item.key)}
              value={item.key} onChange={onChange}>{item.text}</Checkbox>;
};
export default TreeCheckbox;