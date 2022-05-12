import React, { useState } from "react";
import "./App.css";
import theme from "./theme";
import PromptForm from "./components/PromptForm";
import Responses from "./components/Responses";
import PromptError from "./components/PromptError";
import { ThemeProvider, Grid, Container, Typography } from "@mui/material";

function App() {
  const [currentPromptValue, setCurrentPromptValue] = useState("");
  const [queries, setQueries] = useState([]);
  const [openPromptError, setOpenPromptError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [engineChoice, setEngineChoice] = useState("text-curie-001");

  const reactAppFunKey = process.env.REACT_APP_FUN_KEY;

  const handlePromptErrorOpen = () => {
    setOpenPromptError(true);
  };

  const handlePromptErrorClose = () => {
    setOpenPromptError(false);
  };

  const handleEngineChoice = (e) => {
    const newValue = e.target.value;
    setEngineChoice(newValue);
  };

  const fetchResponse = () => {
    setIsLoading(true);
    const data = {
      prompt: currentPromptValue,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    fetch(`https://api.openai.com/v1/engines/${engineChoice}/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${reactAppFunKey}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setQueries((prev) => [
            {
              prompt: currentPromptValue,
              response: data,
              engine: engineChoice,
            },
            ...prev,
          ]);
          setIsLoading(false);
        },
        (error) => {
          console.log("Error:", error);
          setIsLoading(false);
        }
      );
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setCurrentPromptValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPromptValue.trim().length > 0) {
      fetchResponse();
    } else {
      handlePromptErrorOpen();
    }

    setCurrentPromptValue("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h3' component='h1' my={3}>
              Fun with AI
            </Typography>
          </Grid>

          <PromptError
            openPromptError={openPromptError}
            handlePromptErrorClose={handlePromptErrorClose}
          />

          <PromptForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            promptValue={currentPromptValue}
            handleEngineChoice={handleEngineChoice}
            engineChoice={engineChoice}
          />

          <Responses queries={queries} isLoading={isLoading} />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
