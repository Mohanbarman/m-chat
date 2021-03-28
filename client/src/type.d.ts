type SocketContextType = {
    socket: WebSocket;
    sendMessage: (message: messageType) => void;
}

type messageType = {
    user: string;
    message: string;
}

type UserType = {
    id: string;
    name: string;
}

type UserContextType = {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}