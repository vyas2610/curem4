const index = (req, res) => {
    res.send({
        msg: "Success...! Message(s) Details Fetch..!"
    })
}

const create = (req, res) => {

    res.send({
        msg: "Success..! Message Added..!"
    })
}

const update = (req, res) => {
    res.send({
        msg: "Success..! Message Update..!"
    })
}

const details = (req, res) => {
    res.send({
        msg: "Success..! Message Details Fetch..!"
    })
}
const destroy = (req, res) => {
    res.send({
        msg: "Success..! Message Deleted"
    })
}
module.exports = { index, create, update, details, destroy }