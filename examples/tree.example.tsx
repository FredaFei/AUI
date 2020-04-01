import * as React from 'react';
import Tree from '../packages/tree/tree';

import content1 from './markdown/tree-demo-1.md';
import content2 from './markdown/tree-demo-2.md';
import content3 from './markdown/tree-demo-3.md';
// import content4 from './markdown/tree-demo-4.md';
import CodeBox from './codeBox';
import Markdown from './markdown';
import doc from './markdown/tree-doc.md';
import { useState } from 'react';
import { Icon } from '../packages/index';

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
  const [customData] = useState([
    {
      text: ()=>{return <span><Icon name="settings"/> 1</span>},
      key: '1',
      children: [
        {
          text: ()=>{return <span><Icon name="upload"/> 1.1</span>},
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
          text: ()=>{return <span><Icon name="upload"/> 1.2</span>},
          key: '1.2',
        },
      ],
    }, {
      text: ()=>{return <span><Icon name="settings"/>2</span>},
      key: '2',
      children: [
        {
          text: ()=>{return <span><Icon name="upload"/>2.1</span>},
          key: '2.1',
        }, {
          text: ()=>{return <span><Icon name="upload"/>2.2</span>},
          key: '2.2',
        }
      ],
    }
  ]);
  const [selected, setSelected] = useState(['1.1']);
  const [selectedValues, setSelectedValues] = useState(['1.1.1', '1.1','1']);
  const [customSelected, setCustomSelected] = useState(['2.1']);
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
        <CodeBox content={content2}/>
      </div>
      <div className="exp-section">
        <p>自定义节点</p>
        <Tree sourceData={customData} selected={customSelected} multiple={true}
              onChange={(values) => onChange(values, setCustomSelected)}/>
        <CodeBox content={content3}/>
      </div>
      <Markdown source={doc}/>
    </div>
  );
}
