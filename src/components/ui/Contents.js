import { Box, Grid } from "@material-ui/core";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CATEGORIES, COLUMN_SIZE_DICT } from "../Const";

const Contents = ({ languages, contents }) => {
  console.log("contents in Contents");
  console.log(contents);
  const columnSize = COLUMN_SIZE_DICT[languages.length];

  function getSection(lang, category) {
    let codeContent = null;
    let outputContent = null;
    let descriptionContent = null;
    if (lang in contents && category in contents[lang]) {
      const sectionContent = contents[lang][category];
      if ("code" in sectionContent) {
        codeContent = sectionContent["code"]["raw"];
        const firstNewLineIdx = codeContent.indexOf("\n");
        codeContent = codeContent.substring(firstNewLineIdx + 1);
        const lastIndex = codeContent.lastIndexOf("```");
        codeContent = codeContent.substring(0, lastIndex);
      }
      if ("output" in sectionContent) {
        outputContent = sectionContent["output"]["raw"];
        const firstNewLineIdx = outputContent.indexOf("\n");
        outputContent = outputContent.substring(firstNewLineIdx + 1);
        const lastIndex = outputContent.lastIndexOf("```");
        outputContent = outputContent.substring(0, lastIndex);
      }
      if ("description" in sectionContent) {
        descriptionContent = sectionContent["description"]["raw"];
      }
    }
    return (
      <Grid item xs={columnSize} key={lang}>
        {codeContent != null ? (
          <SyntaxHighlighter language={lang} style={darcula}>
            {codeContent}
          </SyntaxHighlighter>
        ) : (
          <p>N/A</p>
        )}
        {outputContent != null ? (
          <SyntaxHighlighter language="text" style={darcula}>
            {outputContent}
          </SyntaxHighlighter>
        ) : (
          <div></div>
        )}
        {descriptionContent != null ? (
          <pre>{descriptionContent}</pre>
        ) : (
          <div></div>
        )}
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={1}>
        {languages.map((language, i) => (
          <Grid key={i} item xs={columnSize}>
            <h4>{language}</h4>
          </Grid>
        ))}
      </Grid>

      {CATEGORIES.map((category, i) => (
        <Box key={i}>
          <h5>{category}</h5>
          <Grid container spacing={1}>
            {languages.map((language) => getSection(language, category))}
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default Contents;
