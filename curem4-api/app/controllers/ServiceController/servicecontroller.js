function index(req, res) {
    //get all the data
    res.send({
        msg: "Data Fetch..!"
    })

}

function create(req, res) {
    //add new data
    res.send({
        msg: "Data Added..!"
    })
}
function update(req, res) {
    // update data
    res.send({
        mag: "Data Updated..!"
    })
}
function details(req, res) {
    // detail of a data accorind to id
    res.send({
        msg: "Details Fetch..!"
    })
}
function destroy(req, res) {
    // delete a data according to id

    res.send({
        msg: "Delete...!"
    })
}

module.exports = { index, create, details, destroy, update }