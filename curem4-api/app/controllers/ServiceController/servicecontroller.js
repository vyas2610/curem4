const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function index(req, res) {
    //get all the data

    try {
        let response = await prisma.services.findMany();
        res.send(response)
    } catch (error) {
        res.status(500).send({
            error
        })
    }

}

async function create(req, res) {
    try {
        await prisma.services.create({
            data: req.body
        })
        res.send({
            msg: "Data Added..!"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
    //add new data
}
async function update(req, res) {

    // update data
    try {
        await prisma.services.update({
            where: {
                ser_id: parseInt(req.params.id),
            },
            data: req.body

        })
        res.send({
            msg: "Date updated...!"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
}
async function details(req, res) {
    // detail of a data accorind to id
    try {
        let response = await prisma.services.findFirst({
            where: {
                ser_id: parseInt(req.params.id)
            }
        })
        res.send(
            response
        )
    } catch (error) {
        res.status(500).send({
            error
        })
    }
}
async function destroy(req, res) {
    // delete a data according to id
    try {
        await prisma.services.delete({
            where: {
                ser_id: parseInt(req.params.id)
            }
        })
        res.send({
            msg: "Delete...!"
        })

    } catch (error) {
        res.status(500).send({
            error
        })
    }
}

module.exports = { index, create, details, destroy, update }