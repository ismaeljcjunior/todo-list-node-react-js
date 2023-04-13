import * as dotenv from 'dotenv'
dotenv.config()
import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import bodyParser from 'body-parser'
import cors from 'cors'
import { getAllTasks, newTask, updateTask } from '../controller/taskController';
import { deleteTask } from './../controller/taskController';
const prisma = new PrismaClient()
const app: Express = express()

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))
app.use(express.json())

app.post('/newtask', newTask)
app.get('/tasks', getAllTasks)
app.put('/updatetask', updateTask)
app.delete('/updatetask', deleteTask)

export const appRoutes = app