import { Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { AVAILABLE_LANGUAGES, COLUMN_SIZE_DICT } from "../Const";

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

  const columnSize = COLUMN_SIZE_DICT[languages.length];

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
      <h1>Syntax Note</h1>
      <div className={classes.root}>
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
        <Grid container spacing={1}>
          {languages.map((language, i) => (
            <Grid key={i} item xs={columnSize}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => setIsSelected(language, false)}
              >
                {language}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </header>
  );
};

export default Header;
