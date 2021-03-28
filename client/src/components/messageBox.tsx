import { useRootStyles } from "../styles/styles";
import { TextField, Button } from "@material-ui/core";

interface MessageBoxProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onSend: () => void;
}

export default function MessageBox(props: MessageBoxProps) {
  const classes = useRootStyles();

  return (
    <div className={classes.messageInputContainer}>
      <TextField
        style={{ width: "100%" }}
        value={props.value}
        onChange={props.onChange}
        variant={"outlined"}
        autoFocus={true}
      />
      <Button color={"primary"} variant={"contained"} onClick={props.onSend}>
        Send
      </Button>
    </div>
  );
}
