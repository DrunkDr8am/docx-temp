"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const docx_templates_1 = __importDefault(require("docx-templates"));
const fs_1 = __importDefault(require("fs"));
async function default_1(fastify) {
    fastify.post('/postdata', async (request, reply) => {
        const { type_name, json_params } = request.body;
        const filePath = './enviroment/' + String(type_name);
        const data_json = JSON.parse(fs_1.default.readFileSync("./enviroment/object.json", 'utf8'));
        try {
            const template = fs_1.default.readFileSync(filePath);
            const buffer = await (0, docx_templates_1.default)({
                template: template,
                cmdDelimiter: ['{{', '}}'],
                data: data_json,
            });
            const now = new Date();
            fs_1.default.writeFileSync('./reports/report' + now.getTime() + '.docx', buffer);
            return buffer;
        }
        catch (error) {
            console.log(error);
            return (error);
        }
    });
    fastify.get('/postdata', async (request, reply) => {
        return "Here will be docx-template";
    });
}
exports.default = default_1;
