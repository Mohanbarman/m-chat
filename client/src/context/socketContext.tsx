import { createContext } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext(null);

export default function SocketProvider(props: any) {
  const socket = io("http://192.168.1.19:4000/");

  function sendMessage(message: messageType) {
    socket.emit("message", JSON.stringify(message));
  }

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
