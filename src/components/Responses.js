import React from "react";
import ResponsePaper from "./ResponsePaper";
import { Grid, Stack, Typography, LinearProgress } from "@mui/material";

const Responses = ({ queries, isLoading }) => {
  const responses = queries.map((query) => (
    <ResponsePaper query={query} key={query.response.id} />
  ));

  return (
    <Grid item container direction='column'>
      <Grid item py={2}>
        <Typography variant='h4' component='h2'>
          Responses
        </Typography>
      </Grid>
      <Grid item mb={3}>
        <Stack spacing={3}>
          {isLoading && <LinearProgress />}
          {responses}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Responses;
