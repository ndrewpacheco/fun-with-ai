import React from "react";
import {
  Button,
  Grid,
  FormLabel,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const PromptForm = ({
  handleSubmit,
  handleChange,
  promptValue,
  handleEngineChoice,
  engineChoice,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container item direction='column' spacing={2}>
        <Grid item>
          <FormLabel>
            <Typography component='p'>Enter prompt:</Typography>
          </FormLabel>
        </Grid>
        <Grid item>
          <TextField
            multiline
            minRows={8}
            fullWidth
            value={promptValue}
            onChange={handleChange}
          />
        </Grid>
        <Grid container item justifyContent='flex-end' gap={2}>
          <FormControl>
            <InputLabel id='demo-simple-select-label'>Engine</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={engineChoice}
              label='Engine'
              onChange={handleEngineChoice}
            >
              <MenuItem value='text-curie-001'>Curie</MenuItem>
              <MenuItem value='text-babbage-001'>Babbage</MenuItem>
              <MenuItem value='text-ada-001'>Ada</MenuItem>
            </Select>
          </FormControl>
          <Button size='large' variant='contained' type='submit'>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PromptForm;
