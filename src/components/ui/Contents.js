import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Contents = () => {
  const codeStr = `if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-p", "--page", default=1, help="target pagenumber", type=int)
    parser.add_argument("-c", "--count", default=3, help="the number of videos to fetch url", type=int)
    args = parser.parse_args() main(args)`;

  return (
    <div className="contents">
      <h4>category</h4>
      <h4>python</h4>
      <h4>kotlin</h4>

      <h4>for loop</h4>
      <div className="code-item">
        <SyntaxHighlighter language="python" style={darcula}>
          {codeStr}
        </SyntaxHighlighter>
        <p>additional description</p>
      </div>
      <div className="code-item">
        <SyntaxHighlighter language="python" style={darcula}>
          {codeStr}
        </SyntaxHighlighter>
        <p>another description</p>
      </div>
    </div>
  );
};

export default Contents;
