import { useContext, useEffect, useState } from "react";
import { SocketContext } from "./context/socketContext";
import { useRootStyles } from "./styles/styles";
import MessageBox from "./components/messageBox";
import { Box, Dialog, DialogTitle, TextField } from "@material-ui/core";
import { UserContext } from "./context/userContext";

export default function App() {
  const { socket, sendMessage } = (useContext(
    SocketContext
  ) as unknown) as SocketContextType;
  const { user } = (useContext(UserContext) as unknown) as UserContextType;

  const classes = useRootStyles();
  const [message, setMessage] = useState("");

  function handleMessageSend() {
    const messageObj = {
      message: message,
      user: "Mohan",
    };
    sendMessage(messageObj);
    setMessage("");
  }

  useEffect(() => {
    socket.addEventListener("message", (event) => {
      console.log(event);
    });
  }, [socket]);

  return (
    <>
      <Dialog open={!user}>
        <DialogTitle>Enter your name</DialogTitle>
        <TextField

        />
      </Dialog>
      <div className={classes.container}>
        <Box maxWidth={"1000px"} width={"100%"}>
          <MessageBox
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onSend={handleMessageSend}
          />
        </Box>
      </div>
    </>
  );
}
