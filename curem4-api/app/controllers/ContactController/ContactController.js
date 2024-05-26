const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const index =  async (req, res) => {
try {
   let response =  await prisma.contact.findMany()
    res.send(
        response
    )
} catch (error) {
    res.send(error)
}
}

const create =async (req, res) => {
    try {
        
        const data = req.body;
        await prisma.contact.create({
            data
        })
        res.send({
            msg: "Success..! Message Added..!"
        })
    } catch (error) {
        res.send(error)
    }
}

const update = async (req, res) => {
    try {
        let data  = req.body    
        await prisma.contact.update({
        where:{
            con_id: parseInt(req.params.id)
        },
        data
    })
        res.send({
            msg: "Success..! Message Update..!"
        })
    } catch (error) {
        res.send(error)
    }
}

const details = async (req, res) => {
    try {
       let details =  await prisma.contact.findFirst({
            where:{
                con_id: parseInt(req.params.id)
            }
            
        })
        res.send(details)
    } catch (error) {
        res.send(error)
    }
}
const destroy = async (req, res) => {
    try {
        await prisma.contact.delete({
            where:{
                con_id:parseInt(req.params.id)
            }
        })
        res.send({
            msg: "Success..! Message Deleted"
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports = { index, create, update, details, destroy }