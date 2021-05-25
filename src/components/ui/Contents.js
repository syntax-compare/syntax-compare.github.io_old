import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Contents = () => {
  const codeStr =
    'if __name__ == "__main__": \n\
    parser = argparse.ArgumentParser() \n\
    parser.add_argument("-p", "--page", default=1, help="target pagenumber", type=int) \n\
    parser.add_argument("-c", "--count", default=3, help="the number of videos to fetch url", type=int) \n\
    args = parser.parse_args() main(args)';

  return (
    <div>
      <h4>Contents</h4>
      <h5>python</h5>
      <SyntaxHighlighter language="python" style={darcula}>
        {codeStr}
      </SyntaxHighlighter>
    </div>
  );
};

export default Contents;
