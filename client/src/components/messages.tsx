import { useContext, useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import { useMessageStyles } from "../styles/styles";
import clsx from "clsx";
import { UserContext } from "../providers/userProvider";

interface MessagesProps {
  messages: messageType[];
}

export default function Messages(props: MessagesProps) {
  const { user } = (useContext(UserContext) as unknown) as UserContextType;
  const classes = useMessageStyles();
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [props.messages]);

  return (
    <div className={classes.messagesContainer} ref={messagesRef}>
      {props.messages.map((message, index) => (
        <div
          key={index}
          className={clsx(
            classes.container,
            user.id !== message.user.id && classes.otherMessage
          )}
        >
          {message.user.id !== user.id && (
            <Typography color={"textSecondary"} variant={"body2"}>
              {message.user.name}
            </Typography>
          )}
          <Typography variant={"body1"}>{message.message}</Typography>
        </div>
      ))}
    </div>
  );
}
