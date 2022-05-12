import React from "react";
import { Dialog, DialogContent } from "@mui/material";

const PromptError = ({ openPromptError, handlePromptErrorClose }) => {
  return (
    <Dialog
      open={openPromptError}
      onClose={handlePromptErrorClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogContent>Prompt should contain text!</DialogContent>
    </Dialog>
  );
};

export default PromptError;
