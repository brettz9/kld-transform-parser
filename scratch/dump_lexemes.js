#!/usr/bin/env node

"use strict";

const TransformLexer = require("../lib/TransformLexer");

const lexer = new TransformLexer();
const source = "matrix(1, 2, 3, 4, 5, 6)";

lexer.setTransformText(source);

let token = lexer.getNextToken();

while (!token.typeis(10)) {
    console.log(token.type + ":" + token.text);
    token = lexer.getNextToken();
}
