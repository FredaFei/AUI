import * as React from 'react';
import Tree,{SourceItem} from '../packages/tree/tree';

import content1 from './markdown/tree-demo-1.md';
import CodeBox from './codeBox';
import Markdown from './markdown';
import doc from './markdown/tree-doc.md';
import { useState } from 'react';

export default function (props: any) {
  const [data, setData] = useState<SourceItem[]>([
    {
      text: '1',
      value: '1',
      children: [
        {
          text: '1.1',
          value: '1.1',
        },{
          text: '1.2',
          value: '1.2',
        },
      ],
    }, {
      text: '2',
      value: '2',
      children: [
        {
          text: '2.1',
          value: '2.1',
        },{
          text: '2.2',
          value: '2.2',
        }
      ],
    }
  ]);
  return (
    <div className="exp-box">
      <h3>基础应用</h3>
      <div className="exp-section">
        <Tree sourceData={data}/>
        <CodeBox content={content1}/>
      </div>
      <Markdown source={doc}/>
    </div>
  );
}
