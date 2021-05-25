import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGES } from "../Const";

const Header = ({ languages, setLanguages }) => {
  const LANGUAGES_LS = "languages";

  useEffect(() => {
    console.log("Header mounted");
    const localLanguages =
      JSON.parse(localStorage.getItem(LANGUAGES_LS)) || DEFAULT_LANGUAGES;
    setLanguages(localLanguages);
  }, []);

  function flip(language) {
    console.log("clicked!!!", language);
    console.log(`${language} has clicked.`);
    var curLanguages = [...languages];
    if (languages.includes(language)) {
      curLanguages = curLanguages.filter((item) => item !== language);
    } else {
      curLanguages.push(language);
    }
    console.log("new", curLanguages);
    setLanguages(curLanguages);
  }

  return (
    <header>
      <h1>Grammar Cheet Sheet</h1>

      {AVAILABLE_LANGUAGES.map((language, i) => (
        <Button
          key={i}
          color="primary"
          variant={languages.includes(language) ? "contained" : "outlined"}
          onClick={() => flip(language)}
        >
          {language}
        </Button>
      ))}
    </header>
  );
};

export default Header;
