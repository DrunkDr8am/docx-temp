"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
async function default_1(fastify) {
    fastify.post('/loadTemplate', async (request, reply) => {
        console.log(request);
        const { file } = request.body;
        fs_1.default.writeFileSync('./enviroment/' + file.name + '.docx', file);
    });
}
exports.default = default_1;
