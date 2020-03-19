import * as React from 'react';
import Tree from '../packages/tree/tree';

import content1 from './markdown/tree-demo-1.md';
import CodeBox from './codeBox';
import Markdown from './markdown';
import doc from './markdown/tree-doc.md';
import { useState } from 'react';

export default function (props: any) {
  const [data] = useState([
    {
      text: '1',
      key: '1',
      children: [
        {
          text: '1.1',
          key: '1.1',
          children: [
            {
              text: '1.1.1',
              key: '1.1.1',
            },
            {
              text: '1.1.2',
              key: '1.1.2',
            }
          ]
        }, {
          text: '1.2',
          key: '1.2',
        },
      ],
    }, {
      text: '2',
      key: '2',
      children: [
        {
          text: '2.1',
          key: '2.1',
        }, {
          text: '2.2',
          key: '2.2',
        }
      ],
    }
  ]);
  const [selected, setSelected] = useState(['1.1']);
  const [selectedValues, setSelectedValues] = useState(['1.1.1', '2.1']);
  const onChange = (item: string[], setType: (value: string[]) => void) => {
    setType(item);
  };
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <p>多选</p>
        <p>selectedValues: {selectedValues.join('、')}</p>
        <Tree sourceData={data} selected={selectedValues} multiple={true}
              onChange={(values) => onChange(values, setSelectedValues)}/>
        <CodeBox content={content1}/>
      </div>
      <div className="exp-section">
        <p>单选</p>
        <p>selected: {selected}</p>
        <Tree sourceData={data} selected={selected} multiple={false}
              onChange={(values) => onChange(values, setSelected)}/>
        <CodeBox content={content1}/>
      </div>
      <Markdown source={doc}/>
    </div>
  );
}
