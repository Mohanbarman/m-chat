"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var messages = [];
exports.resolvers = {
    Query: {
        messages: function (parent) { return messages; },
    },
    Mutation: {
        sendMessage: function (parent, args) {
            var id = messages.length.toString();
            var message = {
                id: id,
                user: args.user,
                content: args.content,
            };
            messages.push(message);
            return message;
        }
    }
};
