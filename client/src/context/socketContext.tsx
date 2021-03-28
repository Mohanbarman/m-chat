import { createContext } from "react";

export const SocketContext = createContext(null);

export default function SocketProvider(props: any) {
  const socket = new WebSocket("ws://localhost:4000");

  function sendMessage(message: messageType) {
    socket.send(JSON.stringify(message));
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
