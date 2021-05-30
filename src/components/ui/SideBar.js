import { Fab, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    padding: "20px",
    paddingLeft: "5px",
    top: "0px",
    right: "0px",
    fontSize: "0.8em",
    lineHeight: "200%",
    backgroundColor: (hideToc) => (hideToc ? "transparent" : "lightgray"),
    height: "100%",

    "& .fab": {
      marginLeft: "15px",
    },
    "& .js-toc": {
      marginTop: "20px",
    },
    "& .js-toc .toc-list": {
      listStyle: "none",
    },
    "& .js-toc .toc-link": {
      paddingBottom: "10px",
    },
    "& .js-toc > .toc-list li a": {
      textDecoration: "none",
    },
    "& #id-toc-list": {
      position: "relative",
      display: (hideToc) => (hideToc ? "none" : "block"),
    },
  },
}));

const SideBar = () => {
  const [hideToc, setHideToc] = useState(false);
  const classes = useStyles(hideToc);

  function toggle() {
    setHideToc(!hideToc);
  }

  return (
    <div className={classes.root}>
      <Fab color="secondary" className="fab" aria-label="add" onClick={toggle}>
        TOC
      </Fab>
      <div id="id-toc-list" className="js-toc"></div>
    </div>
  );
};

export default SideBar;
