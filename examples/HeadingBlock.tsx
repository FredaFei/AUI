import React, { PureComponent } from "react";
const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
};

function Heading({ level, children, ...props }) {
  return React.createElement(elements[level] || elements.h1, props, children);
}

Heading.defaultProps = {
  type: "h1"
};


class HeadingBlock extends PureComponent {
  renderHtml = () => {
    const { level, children } = this.props;

    if (children && children.length > 0) {
      const nodeValue = children[0].props.value;
      return (
        <Heading level={`h${level}`} id={nodeValue}>
          <span className="title">{children}</span>
          <a href={`#${nodeValue}`} className="link">
            #
          </a>
        </Heading>
      );
    } else {
      return <>{children}</>;
    }
  };
  render() {
    return <>{this.renderHtml()}</>;
  }
}

export default HeadingBlock;