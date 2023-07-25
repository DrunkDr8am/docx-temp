import { FastifyInstance } from "fastify";
import { CreateReportModel } from "../models/createReportModel";
import createReport from "docx-templates";
import fs from 'fs';

export default async function (fastify: FastifyInstance) {

    fastify.post<{ Body: CreateReportModel }>('/postdata', async (request: any, reply: any) => {
        const { type_name, json_params } = request.body;
        const filePath = './enviroment/' + String(type_name);
        const data_json = JSON.parse(fs.readFileSync("./enviroment/object.json", 'utf8'));
        try {
            const template = fs.readFileSync(filePath);
            const buffer = await createReport({
                template: template,
                cmdDelimiter: ['{{', '}}'],
                data: data_json,
            });
            const now = new Date();
            fs.writeFileSync('./reports/report' + now.getTime() + '.docx', buffer)
            return buffer
        } catch (error) {
            console.log(error)
            return (error)
        }
    })

    fastify.get('/postdata', async (request: any, reply: any) => {
        return "Here will be docx-template"
    })
}