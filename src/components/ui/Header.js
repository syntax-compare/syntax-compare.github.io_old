import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading-1">Grammar Cheet Sheet</h1>
      <div className="header__nav">
        <ul>
          <li>python</li>
          <li>kotlin</li>
          <li>cpp</li>
          <li>golang</li>
          <li>javascript</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
