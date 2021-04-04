import { createContext, useContext } from "react";
import { io } from "socket.io-client";
import { UserContext } from "./userProvider";

export const SocketContext = createContext(null);

export default function SocketProvider(props: any) {
  const { user } = (useContext(UserContext) as unknown) as UserContextType;
  const socket = io("http://localhost:4000/");

  function sendMessage(message: messageType) {
    socket.emit("message", JSON.stringify(message));
  }

  // send user data to socket server when socket is connected
  socket.on("connect", () => {
    if (user) socket.emit('join', JSON.stringify(user));
  });

  return (
    <SocketContext.Provider
      value={{
        socket,
        sendMessage,
      }}
      {...props}
    />
  );
}
