import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { AVAILABLE_LANGUAGES } from "../Const";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LANGUAGES_LS = "languages";

const Header = ({ languages, setLanguages }) => {
  const classes = useStyles();

  function setIsSelected(language, isSelected) {
    console.log(`${language} has clicked.`);
    var curLanguages = [...languages];
    if (isSelected) {
      curLanguages.push(language);
    } else {
      curLanguages = curLanguages.filter((item) => item !== language);
    }
    console.log("new", curLanguages);

    localStorage.setItem(LANGUAGES_LS, JSON.stringify(curLanguages));
    setLanguages(curLanguages);
  }

  return (
    <header>
      <h1>Syntax Cheet Sheet</h1>
      <div className={classes.root}>
        {languages.map((language) => (
          <Button
            key={language}
            color="primary"
            variant="contained"
            onClick={() => setIsSelected(language, false)}
          >
            {language}
          </Button>
        ))}
        {languages.length ? <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> : <></>}
        {AVAILABLE_LANGUAGES.filter((lang) => !languages.includes(lang)).map(
          (language) => (
            <Button
              key={language}
              color="primary"
              variant="outlined"
              onClick={() => setIsSelected(language, true)}
            >
              {language}
            </Button>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
