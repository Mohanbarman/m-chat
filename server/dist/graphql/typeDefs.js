"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Message {\n        id: ID!\n        user: String!\n        content: String!\n    }\n\n    type Query {\n        messages: [Message!]\n    }\n    type Mutation {\n        sendMessage(user: String!, content: String!): Message\n    }\n"], ["\n    type Message {\n        id: ID!\n        user: String!\n        content: String!\n    }\n\n    type Query {\n        messages: [Message!]\n    }\n    type Mutation {\n        sendMessage(user: String!, content: String!): Message\n    }\n"])));
var templateObject_1;
