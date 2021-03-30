type SocketContextType = {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>;
    sendMessage: (message: messageType) => void;
}

type messageType = {
    user: UserType;
    message: string;
}

type UserType = {
    id: string;
    name: string;
}

type UserContextType = {
    user: UserType;
    updateUser: (user: UserType) => void;
}