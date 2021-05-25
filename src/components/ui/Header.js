import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { AVAILABLE_LANGUAGES } from "../Const";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const LANGUAGES_LS = "languages";

const Header = ({ languages, setLanguages }) => {
  const classes = useStyles();

  function flip(language) {
    console.log(`${language} has clicked.`);
    var curLanguages = [...languages];
    if (languages.includes(language)) {
      curLanguages = curLanguages.filter((item) => item !== language);
    } else {
      curLanguages.push(language);
    }
    console.log("new", curLanguages);

    localStorage.setItem(LANGUAGES_LS, JSON.stringify(curLanguages));
    setLanguages(curLanguages);
  }

  return (
    <header>
      <h1>Grammar Cheet Sheet</h1>
      <div className={classes.root}>
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
      </div>
    </header>
  );
};

export default Header;
