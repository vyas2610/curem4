const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const index = (req, res) => {
    res.send({
        msg: "Data Fetch...!"
    })
}
const create = async (req, res) => {
    try {
        await prisma.products.create({
            data: req.body,
        })
        res.send({
            msg: "Data Added..!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error,
        });
    }
}

const update = (req, res) => {
    res.send({
        msg: "Date updated...!"
    })
}
const details = (req, res) => {
    res.send({
        msg: "Date Fetch of an id"
    })
}

const destroy = (req, res) => {
    res.send({
        msg: "Data Deleted Success...!"
    })
}
module.exports = { index, create, update, details, destroy }