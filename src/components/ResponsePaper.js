import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const ResponsePaper = ({ query }) => {
  const { prompt, response, engine } = query;

  const setEngineName = () => {
    let name = engine.split("-")[1];
    return name[0].toUpperCase() + name.slice(1);
  };

  const engineName = setEngineName();
  const responseOutput = response.choices[0].text;

  return (
    <Paper square>
      <Grid container direction='column' spacing={1} p={2}>
        <Grid container item xs={12} py={2}>
          <Grid item xs={12} sm={3}>
            <Typography variant='h5' component='h3' pb={1}>
              Prompt:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography component='p'>{prompt}</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item sm={3}>
            <Typography variant='h5' component='h3' pb={1}>
              Response:
            </Typography>
          </Grid>

          <Grid item sm={9}>
            <Typography component='p'>{responseOutput}</Typography>
          </Grid>
        </Grid>
        <Grid item mt={2}>
          <Typography fontWeight='bold' component='p' pb={1}>
            Generated by the {engineName} engine
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ResponsePaper;
