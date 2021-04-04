import { MessageInterface } from '../type';

let messages: MessageInterface[] = [];

export const resolvers = {
    Query: {
        messages: (parent: any) => messages,
    },
    Mutation: {
        sendMessage: (parent: any, args: MessageInterface): MessageInterface => {
            const id = messages.length.toString();
            const message = {
                id: id,
                user: args.user,
                content: args.content,
            }
            messages.push(message)

            return message;
        }
    }
}
