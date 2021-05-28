import { Fab, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "10px",
    right: "10px",
    "& .js-toc > .toc-list": {
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

    "& .hide-toc": {
      display: "none",
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  const [hideToc, setHideToc] = useState(false);

  function toggle() {
    console.log("toggle");
    setHideToc(!hideToc);
    const tocDiv = document.querySelector("#id-toc-list");
    tocDiv.classList.toggle("hide-toc");
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
