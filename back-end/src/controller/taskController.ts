import * as dotenv from 'dotenv'
dotenv.config()
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import axios, { AxiosResponse } from 'axios'

const prisma = new PrismaClient()

export const newTask = async (req: Request, res: Response) => {
    const dataNewTask = await req.body
    try {
        const newTask = await prisma.tasks.create({
            data: {
                task_name: dataNewTask.task_name,
                task_description: dataNewTask.task_description,
            }
        })
        console.log(newTask)
        res.status(200).json({ response: newTask })
    } catch (e) {
        return res.status(404).json({ response: e })
    }
}
export const updateTask = async (req: Request, res: Response) => {
    const data = await req.body
    try {
        const updateTask = await prisma.tasks.updateTask({
            where: {
                task_name: data.name
            },
            data: {
                task_name: data.name,
                task_description: data.description,
                task_status: data.status
            }
        })
        console.log(updateTask)
        res.status(200).json({ response: updateTask })
    } catch (e) {
        return res.status(404).json({ response: e })
    }
}
export const deleteTask = async (req: Request, res: Response) => {
    const dataId = req.params.id
    try {
        const deleteTask = await prisma.tasks.delete({
            where: {
                id_task: dataId,
            },
        })
        console.log(deleteTask)
        res.status(200).json({ response: deleteTask })
    } catch (e) {
        return res.status(404).json({ response: e })
    }
}
export const getAllTasks = async (req: Request, res: Response) => {

    try {
        const allTasks = await prisma.tasks.findMany()
        console.log(allTasks)
        res.status(200).json({ response: allTasks })
    } catch (e) {
        return res.status(404).json({ response: e })
    }
}