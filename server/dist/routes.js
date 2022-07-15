"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const prisma_1 = require("./prisma");
exports.routes = express_1.default.Router();
exports.routes.get('/listar/:data', async (req, res) => {
    const { data } = req.params;
    const updateUsers = await prisma_1.prisma.schedules.findMany({
        where: {
            data
        }
    });
    return res.status(200).json({ data: updateUsers });
});
exports.routes.get('/listar', async (req, res) => {
    const updateUsers = await prisma_1.prisma.schedules.findMany();
    res.status(200).json({ data: updateUsers });
});
exports.routes.post('/cadastro', async (req, res) => {
    const { nome, data } = req.body;
    const schedules = await prisma_1.prisma.schedules.create({
        data: {
            nome,
            data
        },
    });
    return res.status(201).json({ data: schedules });
});
exports.routes.put('/edit', async (req, res) => {
    const { id, data } = req.body;
    const updateSchedules = await prisma_1.prisma.schedules.update({
        where: {
            id
        },
        data: {
            data
        },
    });
    res.status(200).json({ data: updateSchedules });
});
exports.routes.delete('/del/:id', async (req, res) => {
    const id = req.params.id;
    const deleteSchedules = await prisma_1.prisma.schedules.delete({
        where: {
            id: id
        },
    });
    res.status(200).json({ data: deleteSchedules });
});
// routes.get('/login', async (req, res) => {
//   const { nome, senha, isAdmin } = req.body;
//   const schedules = await prisma.schedules.create({
//     data: {
//       nome,
//       data
//     },
//   })
// })
