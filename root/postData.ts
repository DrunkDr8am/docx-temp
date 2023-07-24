import { FastifyInstance } from "fastify";
import { CreateReportModel } from "../models/createReportModel";
import createReport from "docx-templates";
import fs from 'fs';

export default async function (fastify: FastifyInstance) {

    fastify.post<{ Body: CreateReportModel }>('/postdata', async (request: any, reply: any) => {
        //const { type_name } = request.Body;
        const filePath = './enviroment/' + "grnknManor.docx"
        const data_json = { gen: { manor_type: 'wdaw', title: 'dnasmka' } }
        try {
            const template = fs.readFileSync(filePath);
            const buffer = await createReport({
                template: template,
                cmdDelimiter: ['{{', '}}'],
                data: data_json,
            });
            fs.writeFileSync('report.docx', buffer)

        } catch (error) {
            console.log(error)
        }
        return "Here must be report.docx but not now("
    })

    fastify.get('/postdata', async (request: any, reply: any) => {
        return "Here will be docx-template"
    })
}