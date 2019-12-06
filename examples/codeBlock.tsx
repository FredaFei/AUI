import * as React from 'react'
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";
// @ts-ignore
import {jsx, javascript} from "react-syntax-highlighter/dist/esm/languages/prism";

interface Props {
  [key: string]: string
}

export default function (props: Props) {
  SyntaxHighlighter.registerLanguage("jsx", jsx);
  SyntaxHighlighter.registerLanguage("javascript", javascript);
  const {language, value} = props

  return (
    <figure className="highlight">
      <SyntaxHighlighter language={language} style={okaidia}>
        {value}
      </SyntaxHighlighter>
    </figure>
  );
}