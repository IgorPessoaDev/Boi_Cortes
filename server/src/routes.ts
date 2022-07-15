import express from "express";
import { prisma } from "./prisma";

export const routes = express.Router();

/* ------schedules------ */

//listar
routes.get('/listar', async (req, res) => {
  const updateUsers = await prisma.schedules.findMany()
  res.status(200).json({ data: updateUsers })
})

//listar unico
routes.get('/listar/:data', async (req, res) => {

  const { data } = req.params;

  const updateUsers = await prisma.schedules.findMany({
    where: {
      data
    }
  })


  return res.status(200).json({ data: updateUsers })

})

//Create
routes.post('/cadastro', async (req, res) => {
  const { authorName, data } = req.body

  const schedules = await prisma.schedules.create({
    data: {
      authorName,
      data
    },
  })

  return res.status(201).json({ data: schedules },)
});

//Edit
routes.put('/edit', async (req, res) => {
  const { id, data } = req.body;

  const updateSchedules = await prisma.schedules.update({
    where: {
      id
    },
    data: {
      data
    },
  })

  res.status(200).json({ data: updateSchedules })
})

//Delete
routes.delete('/del/:id', async (req, res) => {
  const id = req.params.id;

  const deleteSchedules = await prisma.schedules.delete({
    where: {
      id: id
    },
  })

  res.status(200).json({ data: deleteSchedules })
})

/* ------User------ */

//listar
routes.post('/login', async (req, res) => {
  const { nome, senha } = req.body;

  const updateUsers = await prisma.user.findMany({
    where: {
      nome,
      senha
    }
  })


  return res.status(200).json({ data: updateUsers })
})

//Create
routes.post('/users', async (req, res) => {
  const { nome, senha, isAdmin } = req.body;

  const createSchedules = await prisma.user.create({
    data: {
      nome,
      senha,
      isAdmin
    }
  })

  res.status(201).json({ data: createSchedules })
})

//Edit 

routes.put('/makeAdministrator', async (req, res) => {
  const { nome, isAdmin } = req.body;

  const makeAdmin = await prisma.user.update({
    where: {
      nome
    },
    data: {
      isAdmin
    }
  })

  res.status(200).json({ data: makeAdmin })
})