const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const index = async (req, res) => {
    try {
        let response = await prisma.news.findMany();
        res.send(response)

    } catch (error) {
        res.send(error)
    }
}

const create = async (req, res) => {
    try {
        await prisma.news.create({
            data: req.body
        })
        res.send({
            msg: "Success..! Data Added..!"
        })

    } catch (error) {
        res.send(
            error
        )
    }
}

const update = async (req, res) => {
    try {
        await prisma.news.update({
            where: {
                news_id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.send({
            msg: "Success...! Data Updated..!"
        })
    } catch (error) {
        res.send(error)
    }
}

const details = async (req, res) => {
    try {

        let details = await prisma.news.findFirst({
            where: {
                news_id: parseInt(req.params.id)
            },

        })
        res.send(details)

    } catch (error) {
        res.send(error)
    }
}

const destroy = async (req, res) => {

    try {
        await prisma.news.delete({
            where: {
                news_id: parseInt(req.params.id)
            }
        })
        res.send({
            msg: "Success...!Data Deleted.!"
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports = { index, create, update, details, destroy }