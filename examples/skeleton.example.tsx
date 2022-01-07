import * as React from "react";
import Skeleton from "../packages/skeleton/Skeleton";

import content1 from "./markdown/skeleton-demo-1.md";
import doc from "./markdown/skeleton-doc.md";
import Markdown from "./markdown";
import CodeBox from "./codeBox";

export default function (props: any) {
    return (
        <div className="exp-box">
            <h3>基础应用</h3>
            <div className="exp-section">
                <Skeleton repeat={2} placeholder={`
                xxxxxx
                xxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                `}/>
                <CodeBox content={content1}/>
            </div>
            <h3>动画效果</h3>
            <div className="exp-section">
                <Skeleton repeat={4} loading placeholder={`
                xxxxxx
                xxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                `}/>
                <CodeBox content={content1}/>
            </div>
            <Markdown source={doc}/>
        </div>
    );
}