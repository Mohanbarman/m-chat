import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SocketProvider from "./providers/socketProvider";
import UserProvider from "./providers/userProvider";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
