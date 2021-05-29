import { Fab, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "10px",
    right: "10px",
    fontSize: "0.8em",

    "& .js-toc": {
      marginTop: "10px",
    },
    "& .js-toc .toc-list": {
      listStyle: "none",
    },
    "& .js-toc > .toc-list li a": {
      textDecoration: "none",
    },
    "& .js-toc > .toc-list li": {
      marginBottom: "10px",
    },
    "& .js-toc > .toc-list li:last-child": {
      marginBottom: "0",
    },
    "& .js-toc .is-collapsible": {
      marginTop: "10px",
    },
    "& #id-toc-list": {
      display: (hideToc) => hideToc ? "none" : "block",
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
      <Fab color="primary" aria-label="add" onClick={toggle}>
        TOC
      </Fab>
      <div id="id-toc-list" className="js-toc"></div>
    </div>
  );
};

export default SideBar;
