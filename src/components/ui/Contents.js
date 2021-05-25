import React from "react";

const Contents = () => {
  const codeStr =
    'if __name__ == "__main__": \
    parser = argparse.ArgumentParser() \
    parser.add_argument("-p", "--page", default=1, help="target pagenumber", type=int) \
    parser.add_argument("-c", "--count", default=3, help="the number of videos to fetch url", type=int) \
    args = parser.parse_args() main(args) \
';

  return (
    <div>
      <h4>Contents</h4>
      <h5>python</h5>
      <p>{codeStr}</p>
    </div>
  );
};

export default Contents;
