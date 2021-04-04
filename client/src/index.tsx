import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SocketProvider from "./providers/socketContext";
import UserProvider from "./providers/userContext";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
