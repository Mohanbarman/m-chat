import React from "react";
import { useRootStyles } from "../styles/styles";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

interface MessageBoxProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onSend: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function MessageInput(props: MessageBoxProps) {
  const classes = useRootStyles();

  return (
    <form onSubmit={props.onSend}>
      <div className={classes.messageInputContainer}>
        <TextField
          style={{ width: "100%" }}
          value={props.value}
          onChange={props.onChange}
          variant={"outlined"}
          autoFocus={true}
        />
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
