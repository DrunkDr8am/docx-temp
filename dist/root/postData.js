"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const docx_templates_1 = __importDefault(require("docx-templates"));
const fs_1 = __importDefault(require("fs"));
async function default_1(fastify) {
    fastify.post('/postdata', async (request, reply) => {
        //const { type_name } = request.Body;
        const filePath = './enviroment/' + "grnknManor.docx";
        const data_json = { gen: { manor_type: 'wdaw', title: 'dnasmka' } };
        try {
            const template = fs_1.default.readFileSync(filePath);
            const buffer = await (0, docx_templates_1.default)({
                template: template,
                cmdDelimiter: ['{{', '}}'],
                data: data_json,
            });
            fs_1.default.writeFileSync('report.docx', buffer);
        }
        catch (error) {
            console.log(error);
        }
        return "Here must be report.docx but not now(";
    });
    fastify.get('/postdata', async (request, reply) => {
        return "Here will be docx-template";
    });
}
exports.default = default_1;
