import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "./context/socketContext";
import { useRootStyles } from "./styles/styles";
import MessageInput from "./components/messageInput";
import { Box } from "@material-ui/core";
import { UserContext } from "./context/userContext";
import UserInputDialog from "./components/userInputDialog";
import Messages from "./components/messages";

export default function App() {
  const { sendMessage, socket } = (useContext( SocketContext) as unknown) as SocketContextType;
  const { user } = (useContext(UserContext) as unknown) as UserContextType;

  const classes = useRootStyles();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<messageType[]>([]);

  useEffect(() => {
    socket.on('message', (data:string) => {
      const msg = JSON.parse(data);
      setMessages(p => [...p, msg]);
    })
  }, [socket])

  function handleMessageSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message) return;

    const messageObj = {
      message: message,
      user: {
        id: user.id,
        name: user.name,
      },
    };
    sendMessage(messageObj);
    setMessages(p => [...p, messageObj]);
    setMessage("");
  }

  return (
    <>
      <UserInputDialog />
      <div className={classes.container}>
        <Box maxWidth={"1000px"} width={"100%"}>
          <Messages messages={messages} />
          <MessageInput
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onSend={handleMessageSend}
          />
        </Box>
      </div>
    </>
  );
}
