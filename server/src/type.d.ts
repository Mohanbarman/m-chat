import { Socket } from "node:dgram";

interface MessageInterface {
    id: String;
    user: String;
    content: String;
}

interface UserInterface {
    id: String;
    name: String;
    socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}